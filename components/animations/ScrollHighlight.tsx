"use client";

import { m, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef, type ReactNode } from "react";

type Token = string | { node: ReactNode; key: string };

/**
 * Statement text whose words darken one by one as the reader scrolls through it.
 * Pass inline nodes (e.g. small images) as `{ node, key }` tokens.
 */
export function ScrollHighlight({ tokens, className }: { tokens: Token[]; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });

  const words: Token[] = tokens.flatMap((t): Token[] => (typeof t === "string" ? t.split(" ").filter(Boolean) : [t]));
  const total = words.length;

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => {
        const range: [number, number] = [i / total, (i + 1) / total];
        return typeof w === "string" ? (
          <Word key={i} progress={scrollYProgress} range={range}>
            {w}
          </Word>
        ) : (
          <Inline key={w.key} progress={scrollYProgress} range={range}>
            {w.node}
          </Inline>
        );
      })}
    </p>
  );
}

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <>
      <m.span style={{ opacity }}>{children}</m.span>{" "}
    </>
  );
}

function Inline({ children, progress, range }: { children: ReactNode; progress: MotionValue<number>; range: [number, number] }) {
  const scale = useTransform(progress, range, [0.6, 1]);
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <>
      <m.span aria-hidden className="inline-block align-middle" style={{ scale, opacity }}>
        {children}
      </m.span>{" "}
    </>
  );
}
