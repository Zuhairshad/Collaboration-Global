import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "accent";

const base =
 "inline-flex items-center justify-center whitespace-nowrap rounded-full px-7 py-3.5 text-xs font-medium uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
 primary: "bg-white text-black hover:bg-white/90",
 /** Reunion.framer.ai primary CTA hot pink on dark */
 accent:
 "bg-[var(--reunion-accent)] text-white hover:bg-[var(--reunion-accent-hover)]",
 outline:
 "border border-gray-300 bg-transparent text-gray-900 hover:border-gray-400 hover:bg-gray-50",
};

type CommonProps = {
 variant?: Variant;
 className?: string;
 children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
 href: string;
 target?: string;
 rel?: string;
};

type ButtonAsButton = CommonProps & {
 href?: undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonAsLink | ButtonAsButton) {
 const { variant = "primary", className, children } = props;
 const classes = cn(base, variants[variant], className);

 if ("href" in props && typeof props.href === "string") {
 const isExternal = /^https?:\/\//.test(props.href);

 if (isExternal) {
  return (
  <a
   className={classes}
   href={props.href}
   target={props.target ?? "_blank"}
   rel={props.rel ?? "noopener noreferrer"}
  >
   {children}
  </a>
  );
 }

 return (
  <Link className={classes} href={props.href}>
  {children}
  </Link>
 );
 }

 const { type = "button", ...rest } = props;
 return (
 <button className={classes} type={type} {...rest}>
  {children}
 </button>
 );
}

