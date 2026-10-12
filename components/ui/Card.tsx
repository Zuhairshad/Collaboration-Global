import { cn } from "@/lib/utils";

/**
 * Surface card for the light (cream) page background.
 * Children should use `text-brand-text` / `text-brand-muted` for copy.
 */
export function Card({
 className,
 highlighted,
 ...props
}: React.HTMLAttributes<HTMLDivElement> & { highlighted?: boolean }) {
 return (
 <div
  className={cn(
  "rounded-xl border border-brand-border bg-brand-card p-6 text-brand-text transition-colors hover:border-brand-dim md:p-8",
  highlighted && "border-l-2 border-l-[var(--brand-teal)]",
  className,
  )}
  {...props}
 />
 );
}
