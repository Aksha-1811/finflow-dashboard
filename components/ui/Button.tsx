import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const VARIANT_STYLES: Record<Variant, string> = {
  primary:
    "bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30",
  secondary:
    "bg-slate-800/50 text-white border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600",
  ghost: "text-slate-300 hover:text-white hover:bg-slate-800/50",
};

const BASE_STYLES =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 whitespace-nowrap";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ variant = "primary", className, children, href, ...props }: ButtonProps) {
  const classes = cn(BASE_STYLES, VARIANT_STYLES[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
