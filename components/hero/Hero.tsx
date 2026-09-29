"use client";

import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { EASE } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { ButtonLink } from "@/components/ui/Button";
import { treatments } from "@/data/treatments";
import { images } from "@/lib/images";
import { bookingHref } from "@/lib/site";

/** Treatments fanned around the arch at the foot of the hero. */
const fan = treatments.slice(0, 7);
const ANGLES = [-66, -44, -22, 0, 22, 44, 66];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} aria-labelledby="hero-title" className="container-site pt-[4.5rem] lg:pt-[4.75rem]">
      <m.div
        className="relative isolate h-[calc(100svh-5.5rem)] min-h-[36rem] overflow-hidden rounded-[var(--radius-panel)] bg-cocoa lg:max-h-[62rem] lg:min-h-[44rem]"
        initial={{ clipPath: "inset(6% 4% 0% 4% round 2.25rem)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0% round 2.25rem)" }}
        transition={{ duration: 1.6, ease: EASE }}
      >
        {/* Triptych: portrait / motion / portrait */}
        <m.div className="absolute inset-0 grid grid-cols-1 md:grid-cols-[1fr_1.25fr_1fr]" style={{ scale: reduce ? 1 : scale }}>
          <HeroPanel className="hidden md:block">
            <Image
              src={images.portraitRadiant.src}
              alt=""
              fill
              preload
              sizes="(min-width: 768px) 30vw, 1px"
              quality={80}
              placeholder="blur"
              className="object-cover object-[50%_20%]"
            />
          </HeroPanel>
          <HeroPanel>
            <video
              className="absolute inset-0 size-full object-cover object-[40%_30%]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={images.heroPoster.src.src}
              aria-hidden
            >
              <source src="/assets/hero-portrait.webm" type="video/webm" />
              <source src="/assets/hero-portrait.mp4" type="video/mp4" />
            </video>
          </HeroPanel>
          <HeroPanel className="hidden md:block">
            <Image
              src={images.portraitProfile.src}
              alt=""
              fill
              preload
              sizes="(min-width: 768px) 30vw, 1px"
              quality={80}
              placeholder="blur"
              className="object-cover object-[50%_25%]"
            />
          </HeroPanel>
        </m.div>

        {/* Warm grade + legibility */}
        <div aria-hidden className="absolute inset-0 bg-[#6b3f28] mix-blend-multiply opacity-25" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(42,26,20,0.62)_0%,rgba(42,26,20,0.18)_42%,rgba(42,26,20,0.1)_60%,rgba(42,26,20,0.55)_100%)]"
        />

        <m.div
          className="relative z-10 flex h-full flex-col items-center justify-between px-5 pb-32 pt-[9vh] text-center text-ivory md:pb-36 lg:px-10 lg:pb-10 lg:pt-[8vh]"
          style={{ y: reduce ? 0 : contentY, opacity: contentOpacity }}
        >
          <div className="flex flex-col items-center">
            <m.p
              className="mb-6 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-ivory/80"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.5 }}
            >
              Doctor-led aesthetic clinic
            </m.p>
            <TextReveal
              as="h1"
              id="hero-title"
              immediate
              delay={0.55}
              text={"Your skin,\nthoughtfully perfected"}
              className="text-display"
            />
          </div>

          <m.div
            className="flex w-full flex-col items-center gap-7 lg:flex-row lg:items-end lg:justify-between"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.15 }}
          >
            <p className="max-w-[19rem] text-[0.98rem] leading-relaxed text-ivory/85 lg:text-left">
              Advanced skin treatments and modern aesthetics, tailored by doctors for natural-looking results.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:flex-col lg:items-end">
              <ButtonLink href={bookingHref} variant="light">
                Book a Consultation
              </ButtonLink>
              <ButtonLink href="/treatments" variant="glass" className="max-sm:hidden">
                Explore Treatments
              </ButtonLink>
            </div>
          </m.div>
        </m.div>

        <TreatmentFan />
        <Notch />
      </m.div>
    </section>
  );
}

function HeroPanel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`relative h-full overflow-hidden ${className}`}>{children}</div>;
}

/** Vertical glass pills radiating from the arch — each links to a treatment. */
function TreatmentFan() {
  return (
    <nav
      aria-label="Featured treatments"
      className="pointer-events-none absolute bottom-0 left-1/2 z-10 hidden h-0 w-0 xl:block"
    >
      <ul>
        {fan.map((t, i) => (
          <m.li
            key={t.slug}
            className="absolute bottom-0 left-0 origin-bottom"
            style={{ rotate: ANGLES[i], x: "-50%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 1.3 + i * 0.07 }}
          >
            <m.div
              initial={{ y: -118 }}
              animate={{ y: -150 }}
              transition={{ duration: 1.2, ease: EASE, delay: 1.3 + i * 0.07 }}
            >
              <Link
                href={`/treatments/${t.slug}`}
                className="glass pointer-events-auto flex w-10 flex-col items-center gap-3 rounded-full px-1 pb-4 pt-1 text-ivory transition-colors duration-300 hover:bg-ivory/30"
              >
                <span className="relative size-8 overflow-hidden rounded-full ring-1 ring-ivory/40">
                  <Image src={t.image.src} alt="" fill sizes="32px" className="object-cover" />
                </span>
                <span className="whitespace-nowrap text-[0.72rem] font-medium tracking-wide [writing-mode:vertical-rl]">
                  {t.short}
                </span>
              </Link>
            </m.div>
          </m.li>
        ))}
      </ul>
    </nav>
  );
}

/** Cream arch cut into the base of the hero card. */
function Notch() {
  return (
    <div className="absolute bottom-[-1px] left-1/2 z-20 w-[15rem] -translate-x-1/2 text-cream md:w-[18rem]">
      <svg viewBox="0 0 300 100" className="block w-full" aria-hidden focusable="false">
        <path
          fill="currentColor"
          d="M0 100C38 100 50 88 66 62 86 28 112 8 150 8s64 20 84 54c16 26 28 38 66 38Z"
        />
      </svg>
      <Link
        href="#treatments"
        className="group absolute inset-x-0 bottom-3 flex flex-col items-center gap-1.5 text-[0.72rem] font-medium text-espresso md:bottom-4"
      >
        <span className="grid size-7 place-items-center rounded-full border border-line transition-colors group-hover:bg-espresso group-hover:text-cream">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </span>
        Explore our treatments
      </Link>
    </div>
  );
}
