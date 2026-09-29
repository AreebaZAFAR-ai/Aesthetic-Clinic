"use client";

import { m } from "motion/react";
import { EASE } from "./Reveal";

type Tag = "h1" | "h2" | "h3" | "p" | "span";

type TextRevealProps = {
  text: string;
  as?: Tag;
  id?: string;
  className?: string;
  delay?: number;
  /** Animate on mount instead of when scrolled into view (use above the fold). */
  immediate?: boolean;
};

/**
 * Masked word-by-word rise. Lines break naturally; use "\n" to force a break.
 * The full sentence stays in the DOM as plain text for assistive technology.
 */
export function TextReveal({ text, as = "h2", id, className, delay = 0, immediate = false }: TextRevealProps) {
  const Tag = m[as];
  const lines = text.split("\n");
  let index = 0;

  const trigger = immediate
    ? { initial: "hidden", animate: "show" }
    : { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } };

  return (
    <Tag id={id} className={className} {...trigger}>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split(" ").map((word, wi, arr) => {
            const i = index++;
            return (
              <span key={wi} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-top">
                <m.span
                  className="inline-block will-change-transform"
                  variants={{
                    hidden: { y: "105%" },
                    show: { y: "0%", transition: { duration: 1.05, ease: EASE, delay: delay + i * 0.055 } },
                  }}
                >
                  {word}
                </m.span>
                {wi < arr.length - 1 ? " " : null}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
