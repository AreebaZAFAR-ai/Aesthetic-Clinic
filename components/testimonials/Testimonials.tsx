"use client";

import Image from "next/image";
import { useRef } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowLeft, ArrowRight, Star } from "@/components/ui/Icons";
import { testimonials } from "@/data/content";
import { images } from "@/lib/images";

export function Testimonials() {
  const track = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 320) + 16), behavior: "smooth" });
  };

  return (
    <section aria-labelledby="testimonials-title" className="section-y bg-sand/50">
      <div className="container-site grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-6 xl:grid-cols-[1fr_24rem]">
        <div className="min-w-0">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Reveal>
                <Eyebrow>Client stories</Eyebrow>
              </Reveal>
              <TextReveal id="testimonials-title" text={"What our\nclients say"} className="text-headline mt-6" />
            </div>
            <div className="hidden gap-2 sm:flex">
              <ArrowButton label="Previous testimonial" onClick={() => scroll(-1)}>
                <ArrowLeft />
              </ArrowButton>
              <ArrowButton label="Next testimonial" onClick={() => scroll(1)}>
                <ArrowRight />
              </ArrowButton>
            </div>
          </div>

          <Reveal delay={0.1}>
            <ul
              ref={track}
              data-lenis-prevent-wheel
              className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 md:-mx-0 md:scroll-px-0 md:px-0"
            >
              {testimonials.map((t) => (
                <li
                  key={t.name}
                  className="flex w-[84%] shrink-0 snap-start flex-col justify-between rounded-[var(--radius-card)] bg-card p-7 sm:w-[21rem] md:min-h-[19rem]"
                >
                  <div>
                    <div className="flex gap-0.5 text-bronze" role="img" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star key={i} size={13} />
                      ))}
                    </div>
                    <blockquote className="mt-5 font-serif [font-variant-ligatures:no-common-ligatures] text-[1.22rem] leading-snug text-espresso">
                      “{t.quote}”
                    </blockquote>
                  </div>
                  <p className="mt-8 flex items-center gap-3 text-sm">
                    <span className="grid size-9 place-items-center rounded-full bg-sand font-serif text-espresso">
                      {t.name[0]}
                    </span>
                    <span>
                      <span className="block font-medium">{t.name}</span>
                      <span className="block text-xs text-muted">{t.treatment}</span>
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative min-h-[26rem] overflow-hidden rounded-[var(--radius-panel)] lg:min-h-0">
          <Image
            src={images.portraitEditorial.src}
            alt={images.portraitEditorial.alt}
            fill
            sizes="(min-width: 1024px) 24rem, 100vw"
            placeholder="blur"
            className="object-cover object-[50%_20%]"
          />
          <div className="glass-warm absolute inset-x-4 bottom-4 flex flex-col items-center rounded-2xl p-6 text-center text-ivory">
            <p className="font-serif text-[3rem] leading-none">4.9</p>
            <div className="mt-2 flex gap-0.5" aria-hidden>
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} size={13} />
              ))}
            </div>
            <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ivory/80">Client rating</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ArrowButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid size-11 place-items-center rounded-full border border-line text-espresso transition-colors duration-300 hover:bg-espresso hover:text-cream"
    >
      {children}
    </button>
  );
}
