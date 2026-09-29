import type { Metadata } from "next";
import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Clock, Mail, Phone, Pin } from "@/components/ui/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book a consultation at Skin Aesthetics. Contact our doctor-led clinic for personalised skin treatments, opening hours and location.",
};

export default function ContactPage() {
  return (
    <section aria-labelledby="page-title" className="container-site pb-20 pt-32 lg:pb-28 lg:pt-44">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow>Book your visit</Eyebrow>
          </Reveal>
          <TextReveal as="h1" id="page-title" immediate delay={0.1} text={"Begin your\nskin journey"} className="text-headline mt-6" />
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-sm text-[1rem] leading-relaxed text-muted">
              Share a few details and we&apos;ll arrange a relaxed consultation at a time that suits you.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <ul className="mt-12 divide-y divide-line border-y border-line">
              <ContactRow icon={<Phone />} label="Call">
                <a href={site.phoneHref} className="hover:text-bronze">
                  {site.phone}
                </a>
              </ContactRow>
              <ContactRow icon={<Mail />} label="Email">
                <a href={`mailto:${site.email}`} className="break-all hover:text-bronze">
                  {site.email}
                </a>
              </ContactRow>
              <ContactRow icon={<Pin />} label="Visit">
                {site.address.line1}, {site.address.line2}
              </ContactRow>
              <ContactRow icon={<Clock />} label="Hours">
                <span className="block space-y-1">
                  {site.hours.map((h) => (
                    <span key={h.days} className="flex justify-between gap-6">
                      <span>{h.days}</span>
                      <span className="text-muted">{h.time}</span>
                    </span>
                  ))}
                </span>
              </ContactRow>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2} id="book" className="scroll-mt-28">
          <ConsultationForm />
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <li className="grid grid-cols-[2.5rem_5rem_1fr] items-start gap-2 py-5 text-[0.95rem]">
      <span className="text-bronze">{icon}</span>
      <span className="text-muted">{label}</span>
      <span className="text-espresso">{children}</span>
    </li>
  );
}
