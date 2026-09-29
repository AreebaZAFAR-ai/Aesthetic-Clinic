import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowUpRight } from "./Icons";

type Variant = "solid" | "light" | "outline" | "glass";

const variants: Record<Variant, { root: string; dot: string }> = {
  solid: {
    root: "bg-espresso text-cream hover:bg-cocoa dark:hover:bg-umber",
    dot: "bg-cream text-espresso",
  },
  light: {
    root: "bg-ivory text-cocoa hover:bg-ivory/85",
    dot: "bg-cocoa text-ivory",
  },
  outline: {
    root: "border border-line text-espresso hover:border-espresso/40 hover:bg-sand/60",
    dot: "bg-espresso text-cream",
  },
  glass: {
    root: "glass text-ivory hover:bg-ivory/25",
    dot: "bg-ivory text-cocoa",
  },
};

const rootBase =
  "group/btn relative inline-flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-5 text-[0.9rem] font-medium tracking-[-0.005em] transition-colors duration-500 ease-[var(--ease-editorial)]";

function Inner({ children, variant }: { children: ReactNode; variant: Variant }) {
  return (
    <>
      <span
        className={`relative grid size-9 place-items-center overflow-hidden rounded-full ${variants[variant].dot}`}
      >
        <ArrowUpRight
          size={15}
          className="transition-transform duration-500 ease-[var(--ease-editorial)] group-hover/btn:translate-x-5 group-hover/btn:-translate-y-5"
        />
        <ArrowUpRight
          size={15}
          className="absolute -translate-x-5 translate-y-5 transition-transform duration-500 ease-[var(--ease-editorial)] group-hover/btn:translate-x-0 group-hover/btn:translate-y-0"
        />
      </span>
      <span>{children}</span>
    </>
  );
}

type LinkButtonProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  className?: string;
};

export function ButtonLink({ variant = "solid", className = "", children, ...props }: LinkButtonProps) {
  return (
    <Link className={`${rootBase} ${variants[variant].root} ${className}`} {...props}>
      <Inner variant={variant}>{children}</Inner>
    </Link>
  );
}

type ButtonProps = ComponentProps<"button"> & { variant?: Variant };

export function Button({ variant = "solid", className = "", children, ...props }: ButtonProps) {
  return (
    <button
      className={`${rootBase} ${variants[variant].root} disabled:opacity-60 ${className}`}
      {...props}
    >
      <Inner variant={variant}>{children}</Inner>
    </button>
  );
}

/** Small outlined text link used inside cards ("View details"). */
export function PillLink({ className = "", children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={`inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-[0.8rem] font-medium text-espresso transition-colors duration-300 hover:border-espresso hover:bg-espresso hover:text-cream ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
