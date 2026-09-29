import Link from "next/link";

/** Skin Aesthetics wordmark: a single fine petal beside a spaced serif name. */
export function Logo({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <Link
      href="/"
      aria-label="Skin Aesthetics — home"
      className={`inline-flex items-center gap-2.5 ${tone === "light" ? "text-ivory" : "text-espresso"} ${className}`}
    >
      <LogoMark />
      <span className="font-serif text-[0.92rem] uppercase leading-none tracking-[0.16em] sm:text-[1.02rem] sm:tracking-[0.22em]">
        Skin <span className="text-bronze">Aesthetics</span>
      </span>
    </Link>
  );
}

export function LogoMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
      <path
        d="M12 2.5c4.6 3.4 6.3 8.4 3.4 13.2A4 4 0 0 1 12 17.8a4 4 0 0 1-3.4-2.1C5.7 10.9 7.4 5.9 12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path d="M12 7v14.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
