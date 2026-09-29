import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import type { Treatment } from "@/data/treatments";

/** Image-led treatment card: meta sits in a glass bar over the photograph. */
export function TreatmentCard({ treatment: t, size = "lg" }: { treatment: Treatment; size?: "lg" | "sm" }) {
  return (
    <Link href={`/treatments/${t.slug}`} className="group block">
      <div
        className={`relative overflow-hidden rounded-[var(--radius-card)] bg-sand ${
          size === "lg" ? "aspect-[4/3] md:aspect-[5/4]" : "aspect-[4/5]"
        }`}
      >
        <Image
          src={t.image.src}
          alt={t.image.alt}
          fill
          sizes={size === "lg" ? "(min-width: 768px) 48vw, 100vw" : "(min-width: 768px) 31vw, 100vw"}
          placeholder="blur"
          className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-editorial)] group-hover:scale-[1.05]"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-cocoa/45 via-transparent to-transparent" />
        {size === "lg" && (
          <dl className="glass absolute bottom-4 left-4 flex gap-6 rounded-2xl px-5 py-3 text-ivory">
            {[
              ["Duration", t.duration],
              ["Sessions", t.sessions],
              ["Downtime", t.downtime],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-serif text-[0.95rem]">{k}</dt>
                <dd className="text-[0.72rem] text-ivory/80">{v}</dd>
              </div>
            ))}
          </dl>
        )}
        <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-card text-espresso opacity-0 transition-all duration-500 ease-[var(--ease-editorial)] group-hover:opacity-100 group-focus-visible:opacity-100 max-md:opacity-100">
          <ArrowUpRight />
        </span>
      </div>
      <h3 className={`mt-5 ${size === "lg" ? "text-title" : "text-[1.4rem] leading-tight"}`}>{t.name}</h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{t.summary}</p>
    </Link>
  );
}
