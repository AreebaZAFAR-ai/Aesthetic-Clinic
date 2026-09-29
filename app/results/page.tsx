import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";
import { ClosingCta } from "@/components/layout/ClosingCta";
import { PageHero } from "@/components/layout/PageHero";
import { BeforeAfter } from "@/components/results/BeforeAfter";
import { images, type Img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Results",
  description: "See natural-looking results from skin rejuvenation, acne, pigmentation and anti-aging treatments at Skin Aesthetics.",
};

const gallery: { image: Img; caption: string; tall?: boolean }[] = [
  { image: images.resultTexture, caption: "Acne scarring" },
  { image: images.portraitRadiant, caption: "Skin boosters", tall: true },
  { image: images.profilesLayered, caption: "Anti-aging", tall: true },
  { image: images.glowLips, caption: "Skin rejuvenation" },
  { image: images.portraitSoft, caption: "Pigmentation", tall: true },
  { image: images.portraitNatural, caption: "Medical facials" },
  { image: images.portraitSleek, caption: "Injectables", tall: true },
  { image: images.portraitWaves, caption: "Laser resurfacing" },
];

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title={"Real results,\nquietly remarkable"}
        text="Subtle, natural-looking change. Drag to compare, then explore the treatments behind the glow."
      />

      <section aria-label="Featured result" className="container-site pb-16 lg:pb-24">
        <Reveal className="grid items-stretch gap-3 md:grid-cols-[1.1fr_1fr] md:gap-4">
          <BeforeAfter
            before={images.resultBefore}
            after={images.resultAfter}
            sizes="(min-width: 768px) 52vw, 100vw"
            className="aspect-[4/5] rounded-[var(--radius-panel)] md:aspect-auto md:min-h-[40rem]"
          />
          <div className="flex flex-col justify-end rounded-[var(--radius-panel)] bg-sand p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.16em] text-bronze">Featured journey</p>
            <h2 className="text-title mt-4">Rested, refreshed, unmistakably her</h2>
            <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-muted">
              A combined plan of skin rejuvenation and conservative anti-wrinkle treatment over twelve weeks.
            </p>
            <dl className="mt-10 grid grid-cols-3 border-t border-line pt-6">
              {[
                ["12", "Weeks"],
                ["4", "Visits"],
                ["0", "Days downtime"],
              ].map(([v, k]) => (
                <div key={k}>
                  <dd className="font-serif text-[2rem] leading-none">{v}</dd>
                  <dt className="mt-2 text-xs text-muted">{k}</dt>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </section>

      <section aria-label="Results gallery" className="container-site pb-16 lg:pb-24">
        <ul className="columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
          {gallery.map((g, i) => (
            <li key={g.caption} className="mb-3 break-inside-avoid md:mb-4">
              <Reveal delay={(i % 4) * 0.06}>
                <figure>
                  <div
                    className={`group relative overflow-hidden rounded-[var(--radius-card)] ${
                      g.tall ? "aspect-[3/4]" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={g.image.src}
                      alt={g.image.alt}
                      fill
                      sizes="(min-width: 1024px) 24vw, (min-width: 768px) 32vw, 50vw"
                      placeholder="blur"
                      className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-editorial)] group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-2.5 text-xs text-muted">{g.caption}</figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center text-xs text-muted">
          Individual results vary. All treatments follow a medical consultation.
        </p>
      </section>

      <ClosingCta />
    </>
  );
}
