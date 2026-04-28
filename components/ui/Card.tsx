import { cn } from "@/lib/utils";

export function Card({
 className,
 highlighted,
 ...props
}: React.HTMLAttributes<HTMLDivElement> & { highlighted?: boolean }) {
 return (
 <div
  className={cn(
  "rounded-xl border border-brand-border bg-brand-card p-8 transition-colors hover:border-white/15",
  highlighted && "border-l-2 border-l-white",
  className,
  )}
  {...props}
 />
 );
}

