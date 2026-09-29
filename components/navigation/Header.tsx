"use client";

import { AnimatePresence, m, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "@/components/animations/MotionProvider";
import { EASE } from "@/components/animations/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { bookingHref, navLinks, site } from "@/lib/site";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

export function Header() {
  const pathname = usePathname();
  const lenis = useLenis();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 320 && y > prev && !open);
  });

  // Close the menu on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Lock scroll, make the page inert and support Escape while the menu is open.
  useEffect(() => {
    const page = document.getElementById("page");
    if (open) {
      lenis?.stop();
      document.documentElement.style.overflow = "hidden";
      page?.setAttribute("inert", "");
    } else {
      lenis?.start();
      document.documentElement.style.overflow = "";
      page?.removeAttribute("inert");
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, lenis]);

  return (
    <>
      <m.header
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div
          className={`transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
            scrolled && !open
              ? "bg-cream/80 shadow-[0_1px_0_var(--color-line)] backdrop-blur-xl"
              : "bg-transparent"
          }`}
        >
          <div className="container-site flex h-[4.5rem] items-center justify-between gap-4 lg:grid lg:h-[4.75rem] lg:grid-cols-[1fr_auto_1fr]">
            {/* Desktop links */}
            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={`relative rounded-full px-3.5 py-2 text-[0.84rem] font-medium transition-colors duration-300 ${
                          active ? "bg-sand text-espresso" : "text-espresso/70 hover:text-espresso"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="col-start-1 justify-self-start lg:col-start-2 lg:justify-self-center">
              <Logo />
            </div>

            <div className="col-start-3 flex items-center justify-end gap-2">
              <ThemeToggle />
              <ButtonLink href={bookingHref} variant="outline" className="!py-1 !pl-1 text-[0.82rem] max-sm:hidden">
                Book Consultation
              </ButtonLink>
              <button
                ref={menuButton}
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                className="relative z-[60] grid size-11 place-items-center rounded-full border border-line bg-card/70 lg:hidden"
              >
                <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
                <span aria-hidden className="relative block h-3 w-5">
                  <span
                    className={`absolute left-0 top-0 h-px w-5 bg-espresso transition-transform duration-500 ease-[var(--ease-editorial)] ${
                      open ? "translate-y-1.5 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute bottom-0 left-0 h-px w-5 bg-espresso transition-transform duration-500 ease-[var(--ease-editorial)] ${
                      open ? "-translate-y-1.5 -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </m.header>

      <AnimatePresence>{open && <MobileMenu pathname={pathname} />}</AnimatePresence>
    </>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  return (
    <m.div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className="fixed inset-0 z-40 flex flex-col bg-cream px-5 pb-8 pt-28 lg:hidden"
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <nav aria-label="Mobile" className="flex-1">
        <ul className="border-t border-line">
          {navLinks.map((link, i) => (
            <li key={link.href} className="overflow-hidden border-b border-line">
              <m.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.06 }}
              >
                <Link
                  href={link.href}
                  aria-current={isActive(pathname, link.href) ? "page" : undefined}
                  className="flex items-baseline justify-between py-4 font-serif text-[2.4rem] leading-none tracking-[-0.02em] aria-[current=page]:text-bronze"
                >
                  {link.label}
                  <span className="font-sans text-xs text-muted">0{i + 1}</span>
                </Link>
              </m.div>
            </li>
          ))}
        </ul>
      </nav>

      <m.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
        className="space-y-6"
      >
        <ButtonLink href={bookingHref} className="w-full justify-center">
          Book Consultation
        </ButtonLink>
        <div className="flex justify-between text-sm text-muted">
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>Email us</a>
        </div>
      </m.div>
    </m.div>
  );
}
