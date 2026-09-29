export function Eyebrow({
  children,
  tone = "dark",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  const color =
    tone === "light" ? "border-ivory/30 text-ivory/85" : "border-line bg-card/60 text-espresso/80";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.16em] ${color} ${className}`}
    >
      <span className="size-1 rounded-full bg-current" aria-hidden />
      {children}
    </span>
  );
}
