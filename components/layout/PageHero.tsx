import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

/** Compact, typography-led opening for internal pages. */
export function PageHero({
  eyebrow,
  title,
  text,
  align = "center",
  children,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  children?: React.ReactNode;
}) {
  const centered = align === "center";
  return (
    <section aria-labelledby="page-title" className="pb-14 pt-36 md:pb-20 lg:pt-44">
      <div className={`container-site flex flex-col ${centered ? "items-center text-center" : "items-start"}`}>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <TextReveal as="h1" id="page-title" immediate delay={0.1} text={title} className="text-headline mt-6 max-w-4xl" />
        {text && (
          <Reveal delay={0.35}>
            <p className={`mt-6 max-w-lg text-[1rem] leading-relaxed text-muted ${centered ? "mx-auto" : ""}`}>{text}</p>
          </Reveal>
        )}
      </div>
      {children}
    </section>
  );
}
