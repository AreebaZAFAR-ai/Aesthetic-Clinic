import Link from "next/link";
import { treatments } from "@/data/treatments";
import { Logo } from "@/components/ui/Logo";
import { socialIcons } from "@/components/ui/Icons";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container-site pb-6 pt-4">
      <div className="rounded-[var(--radius-panel)] bg-sand px-6 pb-6 pt-14 md:px-12 md:pt-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">{site.tagline}</p>
            <p className="mt-6 text-sm leading-relaxed text-espresso">
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
          </div>

          <FooterColumn title="Explore" className="md:col-span-2">
            {navLinks.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Treatments" className="md:col-span-3">
            {treatments.slice(0, 6).map((t) => (
              <FooterLink key={t.slug} href={`/treatments/${t.slug}`}>
                {t.name}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Visit" className="md:col-span-3">
            <li>
              <a href={site.phoneHref} className="hover:text-bronze">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all hover:text-bronze">
                {site.email}
              </a>
            </li>
            {site.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4 text-muted">
                <span>{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-5 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-2">
            {site.socials.map((s) => {
              const Icon = socialIcons[s.label];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid size-9 place-items-center rounded-full border border-line text-espresso transition-colors hover:bg-espresso hover:text-cream"
                  >
                    <Icon size={16} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <h2 className="text-[1.05rem] text-espresso">{title}</h2>
      <ul className="mt-5 space-y-2.5 text-sm text-espresso/80">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="transition-colors hover:text-bronze">
        {children}
      </Link>
    </li>
  );
}
