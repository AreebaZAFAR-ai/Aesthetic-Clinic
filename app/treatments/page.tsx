import type { Metadata } from "next";
import { Reveal } from "@/components/animations/Reveal";
import { ClosingCta } from "@/components/layout/ClosingCta";
import { PageHero } from "@/components/layout/PageHero";
import { TreatmentCard } from "@/components/treatments/TreatmentCard";
import { treatments } from "@/data/treatments";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Explore doctor-led skin treatments at Skin Aesthetics: facials, skin rejuvenation, acne and scarring, pigmentation, laser, anti-aging, injectables and skin boosters.",
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatments"
        title={"Treatments tailored\nto your skin"}
        text="From medical skincare to advanced aesthetics, every treatment begins with understanding your skin."
      />

      <section aria-label="All treatments" className="container-site pb-24 lg:pb-32">
        <ul className="grid gap-x-5 gap-y-14 md:grid-cols-2 md:gap-y-20">
          {treatments.map((t, i) => (
            <li key={t.slug}>
              <Reveal delay={(i % 2) * 0.1}>
                <TreatmentCard treatment={t} />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <ClosingCta />
    </>
  );
}
