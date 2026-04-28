import { cn } from "@/lib/utils";

type Align = "left" | "center";

export function SectionHeading({
 align = "center",
 className,
 ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { align?: Align }) {
 return (
 <h2
  className={cn(
  "text-3xl font-semibold leading-[1.15] tracking-tight md:text-4xl lg:text-[44px]",
  align === "center" && "mx-auto max-w-[700px] text-center",
  align === "left" && "text-left",
  className,
  )}
  {...props}
 />
 );
}

