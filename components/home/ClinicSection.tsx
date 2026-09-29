import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Check } from "@/components/ui/Icons";
import { images } from "@/lib/images";

const pillars = ["Acne & breakouts", "Pigmentation & tone", "Lines & volume loss", "Texture & scarring"];

export function ClinicSection() {
  return (
    <section aria-labelledby="clinic-title" className="pb-22 lg:pb-34">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div className="order-2 lg:order-1">
          <Reveal>
            <Eyebrow>Our philosophy</Eyebrow>
          </Reveal>
          <TextReveal id="clinic-title" text={"Science-led care,\nbeautifully considered"} className="text-headline mt-6" />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-muted">
              We treat skin as part of your health, not a trend. Every recommendation is evidence-based, every
              result is designed to look natural, and every client is seen by a medical professional.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid max-w-lg gap-x-8 gap-y-4 sm:grid-cols-2" delay={0.15}>
            {pillars.map((p) => (
              <RevealItem key={p} className="flex items-center gap-3 text-[0.95rem]">
                <Check size={16} className="text-bronze" />
                {p}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="relative order-1 lg:order-2">
          <ParallaxImage
            image={images.doctorClinic}
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="aspect-[4/5] rounded-[var(--radius-panel)] sm:aspect-[5/4] lg:aspect-[4/5]"
            imgClassName="object-[50%_30%]"
          />
          <Reveal
            delay={0.35}
            className="glass-warm absolute bottom-4 left-4 max-w-[15rem] rounded-2xl p-5 text-ivory md:bottom-6 md:left-6"
          >
            <p className="font-serif text-[1.45rem] leading-tight">Aftercare support, every step</p>
            <p className="mt-2 text-xs leading-relaxed text-ivory/80">Direct access to your clinician between visits.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
