import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { FaqSection } from "@/components/faq/FaqSection";
import { ClosingCta } from "@/components/layout/ClosingCta";
import { TreatmentCard } from "@/components/treatments/TreatmentCard";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowLeft, Check } from "@/components/ui/Icons";
import { getTreatment, treatments } from "@/data/treatments";
import { bookingHref } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) return {};
  return {
    title: t.name,
    description: `${t.summary} Doctor-led ${t.name.toLowerCase()} at Skin Aesthetics.`,
    openGraph: {
      title: `${t.name} · Skin Aesthetics`,
      description: t.summary,
      images: [{ url: t.image.src.src, width: t.image.src.width, height: t.image.src.height, alt: t.image.alt }],
    },
  };
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) notFound();

  const index = treatments.indexOf(t);
  const related = [1, 2, 3].map((n) => treatments[(index + n) % treatments.length]);

  return (
    <>
      {/* 1 — Hero */}
      <section aria-labelledby="page-title" className="container-site pb-20 pt-28 lg:pb-28 lg:pt-36">
        <Reveal>
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-espresso"
          >
            <ArrowLeft size={14} /> All treatments
          </Link>
        </Reveal>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>{t.concerns.join(" · ")}</Eyebrow>
            </Reveal>
            <TextReveal as="h1" id="page-title" immediate delay={0.1} text={t.name} className="text-headline mt-6" />
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-muted">{t.intro}</p>
            </Reveal>
            <Reveal delay={0.4} className="mt-9">
              <ButtonLink href={bookingHref}>Book a Consultation</ButtonLink>
            </Reveal>
            <Reveal delay={0.5}>
              <dl className="mt-12 grid max-w-md grid-cols-3 border-t border-line pt-6">
                {[
                  ["Duration", t.duration],
                  ["Sessions", t.sessions],
                  ["Downtime", t.downtime],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-serif text-[1.15rem]">{k}</dt>
                    <dd className="mt-1 text-sm text-muted">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <ParallaxImage
            image={t.image}
            preload
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="aspect-[4/5] rounded-[var(--radius-panel)] sm:aspect-[5/4] lg:aspect-[4/5]"
          />
        </div>
      </section>

      {/* 2 — Benefits */}
      <section aria-labelledby="benefits-title" className="bg-sand/50 py-20 lg:py-28">
        <div className="container-site grid items-center gap-10 md:grid-cols-2 lg:gap-20">
          <ParallaxImage
            image={t.gallery[1]}
            sizes="(min-width: 768px) 46vw, 100vw"
            className="order-2 aspect-[4/5] rounded-[var(--radius-panel)] md:order-1"
          />
          <div className="order-1 md:order-2">
            <Reveal>
              <Eyebrow>Benefits</Eyebrow>
            </Reveal>
            <TextReveal id="benefits-title" text="What you can expect to see" className="text-headline mt-6" />
            <RevealGroup className="mt-10 divide-y divide-line border-y border-line" delay={0.1}>
              {t.benefits.map((b) => (
                <RevealItem key={b} className="flex items-center gap-4 py-4 text-[1rem]">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-card text-bronze">
                    <Check size={15} />
                  </span>
                  {b}
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* 3 — What to expect */}
      <section aria-labelledby="steps-title" className="py-20 lg:py-28">
        <div className="container-site">
          <div className="flex flex-col items-center text-center">
            <Reveal>
              <Eyebrow>Your treatment journey</Eyebrow>
            </Reveal>
            <TextReveal id="steps-title" text="What to expect" className="text-headline mt-6" />
          </div>
          <RevealGroup className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {t.steps.map((s, i) => (
              <RevealItem key={s.title} className="flex min-h-[14rem] flex-col rounded-[var(--radius-card)] bg-sand p-7">
                <span className="font-serif text-[2.6rem] leading-none text-bronze/70">0{i + 1}</span>
                <h3 className="mt-auto pt-10 text-[1.4rem] leading-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 4 — FAQ */}
      <div className="border-t border-line">
        <FaqSection items={t.faqs} title={`Questions about\n${t.name.toLowerCase()}`} compact />
      </div>

      {/* 5 — Related */}
      <section aria-labelledby="related-title" className="container-site pb-16 lg:pb-24">
        <Reveal className="flex items-end justify-between gap-6 border-t border-line pt-12">
          <h2 id="related-title" className="text-title">
            You may also consider
          </h2>
          <Link href="/treatments" className="hidden text-sm text-muted underline-offset-4 hover:text-espresso hover:underline sm:block">
            View all
          </Link>
        </Reveal>
        <ul className="mt-10 grid gap-10 md:grid-cols-3 md:gap-5">
          {related.map((r, i) => (
            <li key={r.slug}>
              <Reveal delay={i * 0.08}>
                <TreatmentCard treatment={r} size="sm" />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* 6 — CTA */}
      <ClosingCta
        title={"Ready to begin\nyour treatment?"}
        text="Every plan starts with a consultation. We'll assess your skin and recommend only what you need."
        image={t.gallery[2]}
      />
    </>
  );
}
