"use client";

import { AnimatePresence, m } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { EASE, Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { ButtonLink, PillLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Plus } from "@/components/ui/Icons";
import { treatments } from "@/data/treatments";

export function TreatmentAccordion() {
  const [open, setOpen] = useState<string | null>(treatments[0].slug);
  const baseId = useId();

  return (
    <section id="treatments" aria-labelledby="treatments-title" className="section-y scroll-mt-20">
      <div className="container-site">
        <div className="mb-14 flex flex-col items-center text-center md:mb-20">
          <Reveal>
            <Eyebrow>Treatments</Eyebrow>
          </Reveal>
          <TextReveal id="treatments-title" text="Our treatments" className="text-headline mt-6" />
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-muted">
              Medical-grade care for every skin concern, each plan shaped around you.
            </p>
          </Reveal>
        </div>

        <ul className="space-y-3">
          {treatments.map((t, i) => {
            const isOpen = open === t.slug;
            const panelId = `${baseId}-${t.slug}`;
            return (
              <m.li
                  key={t.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                  transition={{ duration: 0.9, ease: EASE, delay: Math.min(i, 3) * 0.05 }}
                  className={`group rounded-[var(--radius-card)] transition-colors duration-500 ${
                    isOpen ? "bg-sand" : "bg-sand/45 hover:bg-sand/80"
                  }`}
                >
                  <div className="relative grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-3 px-5 py-5 md:grid-cols-[4rem_minmax(0,1.1fr)_minmax(0,1fr)_auto] md:gap-x-8 md:px-9 md:py-8">
                    <span className="font-serif text-sm text-bronze md:text-base">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-title">
                      <button
                        type="button"
                        className="text-left after:absolute after:inset-0 md:after:hidden"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : t.slug)}
                      >
                        {t.name}
                      </button>
                    </h3>
                    <div className="col-span-3 col-start-1 row-start-2 hidden md:col-span-1 md:col-start-3 md:row-start-1 md:block">
                      <p className="max-w-sm text-sm leading-relaxed text-muted">{t.summary}</p>
                      <PillLink href={`/treatments/${t.slug}`} className="mt-4">
                        View details
                      </PillLink>
                    </div>
                    <button
                      type="button"
                      tabIndex={-1}
                      aria-hidden
                      onClick={() => setOpen(isOpen ? null : t.slug)}
                      className="relative grid size-10 place-items-center rounded-full border border-line text-espresso transition-colors duration-300 group-hover:border-espresso/40"
                    >
                      <Plus
                        className={`transition-transform duration-500 ease-[var(--ease-editorial)] ${isOpen ? "rotate-45" : ""}`}
                      />
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        id={panelId}
                        key="panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.75, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 md:px-9 md:pb-9">
                          <div className="md:hidden">
                            <p className="text-sm leading-relaxed text-muted">{t.summary}</p>
                            <PillLink href={`/treatments/${t.slug}`} className="relative z-10 mt-4">
                              View details
                            </PillLink>
                          </div>
                          <div className="no-scrollbar -mx-5 mt-5 flex snap-x gap-3 overflow-x-auto px-5 md:mx-0 md:mt-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0">
                            {t.gallery.map((img, gi) => (
                              <m.div
                                key={img.alt}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: EASE, delay: 0.1 + gi * 0.07 }}
                                className="relative aspect-[4/3] w-[72%] shrink-0 snap-start overflow-hidden rounded-2xl md:w-auto"
                              >
                                <Link href={`/treatments/${t.slug}`} tabIndex={-1} aria-hidden className="relative z-10 block size-full">
                                  <Image
                                    src={img.src}
                                    alt=""
                                    fill
                                    sizes="(min-width: 768px) 30vw, 72vw"
                                    placeholder="blur"
                                    className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-editorial)] hover:scale-105"
                                  />
                                </Link>
                              </m.div>
                            ))}
                          </div>
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </m.li>
            );
          })}
        </ul>

        <Reveal className="mt-12 flex justify-center">
          <ButtonLink href="/treatments" variant="outline">
            View all treatments
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
