import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowUpRight } from "@/components/ui/Icons";
import type { FaqItem } from "@/data/treatments";
import { FaqAccordion } from "./FaqAccordion";

export function FaqSection({
  items,
  title = "Frequently asked\nquestions",
  compact = false,
}: {
  items: FaqItem[];
  title?: string;
  compact?: boolean;
}) {
  return (
    <section aria-labelledby="faq-title" className={compact ? "py-20 lg:py-28" : "section-y"}>
      <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow>FAQs</Eyebrow>
          </Reveal>
          <TextReveal id="faq-title" text={title} className="text-headline mt-6" />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-sm text-[0.98rem] leading-relaxed text-muted">
              Can&apos;t find your answer?{" "}
              <Link href="/contact" className="inline-flex items-center gap-1 text-espresso underline decoration-line underline-offset-4 hover:decoration-espresso">
                Speak to our team <ArrowUpRight size={14} />
              </Link>
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <FaqAccordion items={items} />
        </Reveal>
      </div>
    </section>
  );
}
