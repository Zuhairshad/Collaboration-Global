import { cn } from "@/lib/utils";

export function SectionLabel({
 className,
 ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
 return (
 <p
  className={cn(
  "text-[11px] font-semibold tracking-[0.22em] uppercase text-[var(--brand-teal)]",
  className,
  )}
  {...props}
 />
 );
}
