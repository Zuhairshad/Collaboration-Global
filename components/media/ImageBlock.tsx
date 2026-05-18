"use strict";

import React from "react";
import Image from "next/image";
import { getMediaById, type MediaItem } from "@/lib/media/registry";
import { cn } from "@/lib/utils";

export type ImageBlockVariant = "portrait" | "landscape" | "logo-strip";

export type ImageBlockProps = {
  id: string;
  variant?: ImageBlockVariant;
  className?: string;
  imageClassName?: string;
  showCaption?: boolean;
  priority?: boolean;
};

export function ImageBlock({
  id,
  variant = "landscape",
  className,
  imageClassName,
  showCaption = true,
  priority = false,
}: ImageBlockProps) {
  const media: MediaItem | undefined = getMediaById(id);

  if (!media) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`ImageBlock: media item with id "${id}" not found in registry.`);
    }
    return null;
  }

  // Define aspect ratios and container styles based on requested variant
  // Define aspect ratios closer to standard native camera formats to prevent aggressive framing
  const variantStyles: Record<ImageBlockVariant, { container: string; aspect: string }> = {
    portrait: {
      container: "max-w-[320px] mx-auto",
      aspect: "aspect-[4/5]",
    },
    landscape: {
      container: "w-full",
      aspect: "aspect-[4/3]",
    },
    "logo-strip": {
      container: "w-full max-w-[160px] mx-auto",
      aspect: "aspect-video",
    },
  };

  const currentVariant = variantStyles[variant];

  return (
    <div className={cn("flex flex-col gap-2.5 my-6 md:hidden", currentVariant.container, className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-2xl bg-brand-card/40 border border-brand-border/60 shadow-sm",
          currentVariant.aspect,
          variant === "logo-strip" && "rounded-xl border-none shadow-none bg-transparent"
        )}
      >
        <Image
          src={media.src}
          alt={media.title}
          fill
          sizes={
            variant === "logo-strip"
              ? "160px"
              : variant === "portrait"
              ? "320px"
              : "(max-width: 768px) 100vw, 0px"
          }
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className={cn(
            "transition-all duration-500 object-contain",
            variant === "logo-strip" ? "p-2" : "p-1.5",
            imageClassName
          )}
        />
      </div>

      {showCaption && media.caption && variant !== "logo-strip" && (
        <p className="text-center text-xs font-medium text-brand-muted px-2 border-l-2 border-brand-teal/40 ml-2 text-left italic">
          {media.caption}
        </p>
      )}
    </div>
  );
}
