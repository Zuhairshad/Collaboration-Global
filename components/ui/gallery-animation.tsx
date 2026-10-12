"use client";

import React, { useCallback, useEffect, useState, useSyncExternalStore } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ExpandableGalleryProps {
  images: StaticImageData[];
  className?: string;
}

const HOVER_QUERY = '(hover: hover) and (pointer: fine)';

function subscribeHover(callback: () => void) {
  const mql = window.matchMedia(HOVER_QUERY);
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

/** True only on devices with a real hover-capable pointer (false during SSR). */
function useCanHover() {
  return useSyncExternalStore(
    subscribeHover,
    () => window.matchMedia(HOVER_QUERY).matches,
    () => false,
  );
}

export const ExpandableGallery: React.FC<ExpandableGalleryProps> = ({ images, className = '' }) => {
  const canHover = useCanHover();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Hover state only counts on hover-capable devices (a tap on iOS fires mouseenter without mouseleave)
  const activeHover = canHover ? hoveredIndex : null;

  const openImage = (index: number) => setSelectedIndex(index);
  const closeImage = useCallback(() => setSelectedIndex(null), []);

  const showNext = useCallback(() => {
    setSelectedIndex((i) => (i === null ? i : (i + 1) % images.length));
  }, [images.length]);

  const showPrev = useCallback(() => {
    setSelectedIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    showNext();
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    showPrev();
  };

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeImage();
      else if (e.key === 'ArrowRight') showNext();
      else if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedIndex, closeImage, showNext, showPrev]);

  const getFlexValue = (index: number) => {
    if (activeHover === null) return 1;
    return activeHover === index ? 2 : 0.5;
  };

  return (
    <div className={className}>
      {/* Mobile: 2-col grid of 3:4 tiles. md+: original flex row with hover-expand (CSS flex-grow transition). */}
      <div className="grid grid-cols-2 gap-2 md:flex md:h-64 md:w-full">
        {images.map((image, index) => (
          <button
            type="button"
            key={index}
            aria-label={`Open gallery image ${index + 1}`}
            className="relative aspect-[3/4] min-w-0 cursor-pointer bg-neutral-100 overflow-hidden rounded-2xl shadow-sm md:aspect-auto md:h-full md:basis-0 md:bg-neutral-900 md:transition-[flex-grow] md:duration-500 md:ease-in-out"
            style={{ flexGrow: getFlexValue(index) }}
            onMouseEnter={canHover ? () => setHoveredIndex(index) : undefined}
            onMouseLeave={canHover ? () => setHoveredIndex(null) : undefined}
            onClick={() => openImage(index)}
          >
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              placeholder="blur"
              sizes="(max-width: 767px) 50vw, 25vw"
              className="object-cover md:object-contain"
            />
            <span
              aria-hidden
              className={`absolute inset-0 hidden bg-black transition-opacity duration-300 md:block ${
                activeHover === index ? 'opacity-0' : 'opacity-20'
              }`}
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeImage}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button
              type="button"
              aria-label="Close image viewer"
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
              onClick={closeImage}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {images.length > 1 && (
              <button
                type="button"
                aria-label="Previous image"
                className="absolute left-4 z-10 text-white hover:text-gray-300 transition-colors"
                onClick={goToPrev}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            <motion.div
              key={selectedIndex}
              className="relative h-[85svh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={images[selectedIndex]}
                alt={`Gallery image ${selectedIndex + 1}`}
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain rounded-md"
              />
            </motion.div>

            {images.length > 1 && (
              <button
                type="button"
                aria-label="Next image"
                className="absolute right-4 z-10 text-white hover:text-gray-300 transition-colors"
                onClick={goToNext}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-white/10 px-4 py-2 rounded-md">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
