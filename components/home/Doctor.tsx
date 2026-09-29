import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Check } from "@/components/ui/Icons";
import { LogoMark } from "@/components/ui/Logo";
import { doctor } from "@/data/content";

export function Doctor() {
  return (
    <section aria-labelledby="doctor-title" className="pb-22 lg:pb-34">
      <div className="container-site grid items-center gap-10 md:grid-cols-2 lg:gap-20">
        <div className="relative">
          <ParallaxImage
            image={doctor.image}
            sizes="(min-width: 768px) 46vw, 100vw"
            className="aspect-[4/5] rounded-[var(--radius-panel)] bg-sand"
            imgClassName="object-[50%_20%]"
          />
          <Reveal
            delay={0.3}
            className="glass-warm absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl px-5 py-4 text-ivory md:inset-x-5 md:bottom-5"
          >
            <div>
              <p className="font-serif text-xl leading-tight md:text-2xl">{doctor.name}</p>
              <p className="mt-1 text-xs text-ivory/80">{doctor.role}</p>
            </div>
            <LogoMark size={24} />
          </Reveal>
        </div>

        <div className="md:py-10">
          <Reveal>
            <Eyebrow>Meet your doctor</Eyebrow>
          </Reveal>
          <TextReveal id="doctor-title" text={"Led by doctors,\nguided by detail"} className="text-headline mt-6" />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-muted">{doctor.bio}</p>
          </Reveal>

          <RevealGroup className="mt-9 max-w-md divide-y divide-line border-y border-line" delay={0.15}>
            {doctor.credentials.map((c) => (
              <RevealItem key={c} className="flex items-center gap-4 py-4 text-[0.95rem] text-espresso">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-sand text-bronze">
                  <Check size={15} />
                </span>
                {c}
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2} className="mt-10">
            <ButtonLink href="/about">About the clinic</ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
