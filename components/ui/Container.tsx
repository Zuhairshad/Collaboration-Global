import { cn } from "@/lib/utils";

export function Container({
 className,
 ...props
}: React.HTMLAttributes<HTMLDivElement>) {
 return (
 <div
  className={cn("mx-auto w-full max-w-[1440px] px-8 sm:px-14 lg:px-[11%]", className)}
  {...props}
 />
 );
}

