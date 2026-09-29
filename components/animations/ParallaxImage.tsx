"use client";

import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import type { Img } from "@/lib/images";
import { EASE } from "./Reveal";

type ParallaxImageProps = {
  image: Img;
  className?: string;
  imgClassName?: string;
  sizes: string;
  /** Parallax travel as a percentage of the frame height. */
  strength?: number;
  /** Clip-path wipe the first time the frame enters view. */
  reveal?: boolean;
  preload?: boolean;
  quality?: 70 | 80;
};

/** Image frame with a clip-path entrance and gentle scroll parallax. */
export function ParallaxImage({
  image,
  className = "",
  imgClassName = "",
  sizes,
  strength = 8,
  reveal = true,
  preload = false,
  quality = 80,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <m.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={reveal ? { clipPath: "inset(18% 0% 0% 0%)", opacity: 0.4 } : false}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 1.3, ease: EASE }}
    >
      <m.div
        className="absolute inset-x-0"
        style={{
          y: reduce ? 0 : y,
          top: `-${strength}%`,
          bottom: `-${strength}%`,
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          quality={quality}
          placeholder="blur"
          preload={preload}
          className={`object-cover ${imgClassName}`}
        />
      </m.div>
    </m.div>
  );
}
