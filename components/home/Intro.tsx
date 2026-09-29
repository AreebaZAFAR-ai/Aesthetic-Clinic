"use client";

import { m, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { ScrollHighlight } from "@/components/animations/ScrollHighlight";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Star } from "@/components/ui/Icons";
import { images, type Img } from "@/lib/images";

const InlineImg = ({ image }: { image: Img }) => (
  <span className="relative inline-block h-[0.82em] w-[1.7em] translate-y-[-0.06em] overflow-hidden rounded-full">
    <Image src={image.src} alt="" fill sizes="80px" className="object-cover" />
  </span>
);

const floating = [
  { image: images.facialTreatment, className: "left-[2%] top-[4%] w-[13%] aspect-[4/5]", speed: -90 },
  { image: images.skinBoosters, className: "right-[4%] top-[12%] w-[11%] aspect-[3/4]", speed: -160 },
  { image: images.skincareRitual, className: "left-[8%] bottom-[2%] w-[10%] aspect-[3/4]", speed: -200 },
  { image: images.ledTherapy, className: "right-[1%] bottom-[-4%] w-[14%] aspect-[4/5]", speed: -110 },
];

export function Intro() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} aria-label="Introduction" className="relative section-y overflow-hidden">
      {floating.map((f) => (
        <Floating key={f.image.alt} {...f} progress={scrollYProgress} />
      ))}

      <div className="container-narrow relative flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow>Expert care for every skin journey</Eyebrow>
        </Reveal>

        <ScrollHighlight
          className="text-statement mt-8 max-w-4xl text-espresso"
          tokens={[
            "We combine medical expertise with modern aesthetics",
            { key: "i1", node: <InlineImg image={images.glowLips} /> },
            "to help you achieve clear, healthy and naturally radiant skin",
            { key: "i2", node: <InlineImg image={images.portraitSoft} /> },
            "without ever looking done.",
          ]}
        />

        <Reveal delay={0.1} className="mt-10 flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-espresso font-serif text-sm text-cream">4.9</span>
          <span className="text-left">
            <span className="flex gap-0.5 text-bronze" aria-hidden>
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} size={13} />
              ))}
            </span>
            <span className="mt-0.5 block text-xs text-muted">Rated 4.9 by 600+ clients</span>
          </span>
        </Reveal>

        {/* Mobile: images sit in a quiet row instead of floating */}
        <div className="mt-14 grid w-full grid-cols-3 gap-3 md:hidden">
          {[images.facialTreatment, images.skinBoosters, images.ledTherapy].map((img, i) => (
            <Reveal key={img.alt} delay={i * 0.08} className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image src={img.src} alt={img.alt} fill sizes="33vw" placeholder="blur" className="object-cover" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Floating({
  image,
  className,
  speed,
  progress,
}: {
  image: Img;
  className: string;
  speed: number;
  progress: MotionValue<number>;
}) {
  const reduce = useReducedMotion();
  const y = useTransform(progress, [0, 1], [0, speed]);
  return (
    <m.div
      aria-hidden
      className={`absolute hidden overflow-hidden rounded-[1.25rem] md:block ${className}`}
      style={{ y: reduce ? 0 : y }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image src={image.src} alt="" fill sizes="14vw" placeholder="blur" className="object-cover" />
    </m.div>
  );
}
