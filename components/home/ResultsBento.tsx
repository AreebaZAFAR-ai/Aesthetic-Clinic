import Image from "next/image";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { BeforeAfter } from "@/components/results/BeforeAfter";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Star } from "@/components/ui/Icons";
import { testimonials } from "@/data/content";
import { images } from "@/lib/images";
import { bookingHref } from "@/lib/site";

const card = "relative overflow-hidden rounded-[var(--radius-card)] bg-sand";

export function ResultsBento() {
  return (
    <section aria-labelledby="results-title" className="section-y">
      <div className="container-site">
        <div className="mb-14 flex flex-col items-center text-center md:mb-16">
          <Reveal>
            <Eyebrow>Why clients choose us</Eyebrow>
          </Reveal>
          <TextReveal id="results-title" text={"Results that feel\nlike you"} className="text-headline mt-6" />
        </div>

        <RevealGroup
          stagger={0.07}
          className="bento grid gap-3 md:grid-cols-2 md:gap-4"
        >
          {/* Before / after */}
          <RevealItem className="[--area:ba] md:row-span-2">
            <BeforeAfter
              before={images.resultBefore}
              after={images.resultAfter}
              sizes="(min-width: 1024px) 32vw, (min-width: 768px) 48vw, 100vw"
              className={`${card} aspect-[4/5] h-full md:aspect-auto md:min-h-[34rem]`}
            >
              <div className="glass-warm pointer-events-none absolute inset-x-4 bottom-4 rounded-2xl px-5 py-4 text-ivory">
                <p className="font-serif text-xl">Real results, real clients</p>
                <p className="mt-1 text-xs text-ivory/80">12 weeks · Skin rejuvenation &amp; anti-aging</p>
              </div>
            </BeforeAfter>
          </RevealItem>

          {/* Experience */}
          <RevealItem className={`${card} [--area:exp] flex min-h-[16rem] flex-col justify-between p-6 md:p-7`}>
            <h3 className="text-[1.6rem] leading-tight">
              A calm, unhurried
              <br />
              experience
            </h3>
            <div className="relative -mx-7 -mb-7 mt-6 h-40 overflow-hidden md:-mx-7">
              <Image
                src={images.clinicConsultation.src}
                alt={images.clinicConsultation.alt}
                fill
                sizes="(min-width: 1024px) 30vw, 50vw"
                placeholder="blur"
                className="object-cover object-[50%_35%]"
              />
            </div>
          </RevealItem>

          {/* Years */}
          <RevealItem className={`${card} [--area:stat] flex min-h-[16rem] flex-col p-6 md:p-7`}>
            <p className="font-serif text-[3.4rem] leading-none">12+</p>
            <p className="mt-2 text-sm text-muted">Years of medical aesthetics</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["4,800+ treatments", "30+ protocols"].map((t) => (
                <span key={t} className="rounded-full bg-card px-3 py-1.5 text-xs text-espresso">
                  {t}
                </span>
              ))}
            </div>
            <p aria-hidden className="mt-auto translate-y-3 whitespace-nowrap font-serif text-[3.2rem] leading-none text-espresso/10 lg:text-[2.9rem] xl:text-[3.8rem]">
              Since 2014
            </p>
          </RevealItem>

          {/* Tailored */}
          <RevealItem className={`${card} [--area:tail] flex min-h-[16rem] flex-col items-center justify-center p-7 text-center`}>
            <div className="flex -space-x-4">
              {[images.portraitNatural, images.portraitRadiant, images.portraitSoft].map((img, i) => (
                <span
                  key={img.alt}
                  className={`relative overflow-hidden rounded-full ring-4 ring-sand ${i === 1 ? "z-10 size-20" : "mt-3 size-14"}`}
                >
                  <Image src={img.src} alt="" fill sizes="80px" className="object-cover object-top" />
                </span>
              ))}
            </div>
            <h3 className="mt-6 text-[1.6rem] leading-tight">Tailored to your skin</h3>
            <p className="mt-2 max-w-[16rem] text-sm text-muted">A personal plan for every skin type, tone and goal.</p>
          </RevealItem>

          {/* Rating + scrolling reviews */}
          <RevealItem className={`${card} [--area:rate] flex min-h-[26rem] flex-col p-6 md:p-7`}>
            <div className="text-center">
              <div className="flex justify-center gap-0.5 text-bronze" aria-hidden>
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="mt-3 font-serif text-[3.2rem] leading-none">4.9</p>
              <p className="mt-2 text-sm text-muted">Average rating from 600+ clients</p>
            </div>
            <div className="relative mt-6 flex-1 overflow-hidden [mask-image:linear-gradient(transparent,#000_18%,#000_82%,transparent)]">
              <ul className="animate-marquee-y absolute inset-x-0 top-0 space-y-3 hover:[animation-play-state:paused]">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <li key={i} aria-hidden={i >= testimonials.length} className="rounded-2xl bg-card p-4">
                    <p className="text-[0.82rem] leading-relaxed text-espresso/85">“{t.quote}”</p>
                    <p className="mt-3 text-xs font-medium text-espresso">
                      {t.name} <span className="font-normal text-muted">· {t.treatment}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>

          {/* Complimentary analysis */}
          <RevealItem className={`${card} [--area:free] flex min-h-[16rem] flex-col items-center justify-center p-7 text-center`}>
            <span className="rounded-full bg-card px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-bronze">
              Complimentary
            </span>
            <h3 className="mt-4 text-[1.6rem] leading-tight">Skin analysis</h3>
            <p className="mt-2 text-sm text-muted">A clinical assessment with your first consultation.</p>
            <ButtonLink href={bookingHref} className="mt-6">
              Book now
            </ButtonLink>
          </RevealItem>

          {/* Image */}
          <RevealItem className="[--area:img] min-h-[16rem]">
            <ParallaxImage
              image={images.iplLaser}
              sizes="(min-width: 1024px) 32vw, (min-width: 768px) 48vw, 100vw"
              className="h-full min-h-[16rem] rounded-[var(--radius-card)]"
              reveal={false}
              strength={10}
            />
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
