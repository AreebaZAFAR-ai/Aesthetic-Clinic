"use client";

import { AnimatePresence, m } from "motion/react";
import { useId, useState } from "react";
import { EASE } from "@/components/animations/Reveal";
import { Plus } from "@/components/ui/Icons";
import type { FaqItem } from "@/data/treatments";

/** Single-open accordion. First item open by default. */
export function FaqAccordion({ items, className = "" }: { items: FaqItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();

  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li
            key={item.q}
            className={`rounded-2xl border transition-colors duration-500 ${
              isOpen ? "border-transparent bg-sand" : "border-line bg-transparent hover:bg-sand/50"
            }`}
          >
            <h3 className="font-sans text-base tracking-normal">
              <button
                type="button"
                id={`${id}-q${i}`}
                aria-expanded={isOpen}
                aria-controls={`${id}-a${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 rounded-2xl px-5 py-5 text-left font-serif text-[1.12rem] leading-snug md:px-6 md:text-[1.2rem]"
              >
                {item.q}
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-line">
                  <Plus
                    size={14}
                    className={`transition-transform duration-500 ease-[var(--ease-editorial)] ${isOpen ? "rotate-45" : ""}`}
                  />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <m.div
                  id={`${id}-a${i}`}
                  role="region"
                  aria-labelledby={`${id}-q${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="max-w-xl px-5 pb-6 text-[0.95rem] leading-relaxed text-muted md:px-6">{item.a}</p>
                </m.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
