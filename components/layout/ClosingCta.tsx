import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { images, type Img } from "@/lib/images";
import { bookingHref } from "@/lib/site";

/** The closing consultation invitation used at the end of every page. */
export function ClosingCta({
  title = "Your skin,\nthoughtfully cared for",
  text = "Begin with a relaxed consultation. We'll listen, assess your skin and create a plan that feels right for you.",
  image = images.portraitRadiant,
}: {
  title?: string;
  text?: string;
  image?: Img;
}) {
  return (
    <section aria-labelledby="cta-title" className="container-site pb-4 pt-8 lg:pt-12">
      <div className="relative grid overflow-hidden rounded-[var(--radius-panel)] bg-cocoa text-ivory md:grid-cols-[1.2fr_1fr]">
        <div className="relative flex flex-col justify-center px-6 py-16 md:px-12 md:py-24 lg:px-20">
          <Reveal>
            <Eyebrow tone="light">Book your visit</Eyebrow>
          </Reveal>
          <TextReveal id="cta-title" text={title} className="text-headline mt-6" />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-ivory/75">{text}</p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={bookingHref} variant="light">
              Book a Consultation
            </ButtonLink>
            <ButtonLink href="/treatments" variant="glass">
              Our Treatments
            </ButtonLink>
          </Reveal>
        </div>
        <ParallaxImage
          image={image}
          sizes="(min-width: 768px) 42vw, 100vw"
          className="aspect-[4/5] md:aspect-auto md:min-h-[36rem]"
          imgClassName="object-[50%_25%]"
          reveal={false}
        />
      </div>
    </section>
  );
}
