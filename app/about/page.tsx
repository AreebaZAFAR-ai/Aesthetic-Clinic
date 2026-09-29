import type { Metadata } from "next";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { Doctor } from "@/components/home/Doctor";
import { ClosingCta } from "@/components/layout/ClosingCta";
import { PageHero } from "@/components/layout/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { stats } from "@/data/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Skin Aesthetics is a doctor-led clinic combining medical expertise with modern aesthetics for healthy, naturally radiant skin.",
};

const principles = [
  { title: "Understand", text: "Every plan begins with listening, a clinical assessment and time to ask questions." },
  { title: "Treat", text: "Evidence-based treatments, chosen for your skin and delivered by medical professionals." },
  { title: "Enhance", text: "Natural-looking results that support your skin's long-term health, never overdone." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the clinic"
        title={"A modern approach to\nbeautiful, healthy skin"}
        text="We combine medical expertise with an editor's eye for detail, so results look natural, confident and entirely you."
      >
        <div className="container-site mt-14 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-3 md:gap-4">
          <ParallaxImage
            image={images.clinicConsultation}
            preload
            sizes="(min-width: 768px) 32vw, 50vw"
            className="aspect-[3/4] rounded-[var(--radius-card)]"
          />
          <ParallaxImage
            image={images.portraitWaves}
            preload
            sizes="(min-width: 768px) 32vw, 50vw"
            className="aspect-[3/4] rounded-[var(--radius-card)] md:translate-y-12"
          />
          <ParallaxImage
            image={images.consultationAnalysis}
            sizes="32vw"
            className="hidden aspect-[3/4] rounded-[var(--radius-card)] md:block"
          />
        </div>
      </PageHero>

      {/* Stats */}
      <section aria-label="Clinic in numbers" className="container-site py-16 md:py-24">
        <RevealGroup className="grid grid-cols-2 gap-y-10 rounded-[var(--radius-panel)] bg-cocoa px-6 py-12 text-center text-ivory md:grid-cols-4 md:py-16">
          {stats.map((s) => (
            <RevealItem key={s.label}>
              <p className="font-serif text-[2.8rem] leading-none md:text-[3.6rem]">{s.value}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.16em] text-ivory/70">{s.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Philosophy */}
      <section aria-labelledby="philosophy-title" className="pb-22 pt-8 lg:pb-34 lg:pt-12">
        <div className="container-site">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>How we care for you</Eyebrow>
            </Reveal>
            <TextReveal id="philosophy-title" text={"Care that begins\nwith understanding"} className="text-headline mt-6" />
          </div>
          <RevealGroup className="mt-14 grid gap-10 border-t border-line pt-10 md:grid-cols-3 md:gap-8" stagger={0.1}>
            {principles.map((p, i) => (
              <RevealItem key={p.title}>
                <span className="font-serif text-sm text-bronze">0{i + 1}</span>
                <h3 className="mt-3 text-title">{p.title}</h3>
                <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-muted">{p.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Doctor />

      {/* Gallery */}
      <section aria-label="Inside the clinic" className="container-site pb-16 lg:pb-24">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {[images.clinicEditorial, images.doctorClinic, images.skincareRitual, images.profileSculpt].map((img, i) => (
            <ParallaxImage
              key={img.alt}
              image={img}
              sizes="(min-width: 768px) 24vw, 50vw"
              strength={6}
              className={`aspect-[3/4] rounded-[var(--radius-card)] ${i % 2 ? "md:mt-16" : ""}`}
            />
          ))}
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
