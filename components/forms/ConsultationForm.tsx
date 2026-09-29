"use client";

import { AnimatePresence, m } from "motion/react";
import { useState, type FormEvent } from "react";
import { EASE } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { Check } from "@/components/ui/Icons";
import { treatments } from "@/data/treatments";

type Errors = Partial<Record<"name" | "email" | "phone" | "consent", string>>;

const field =
  "w-full rounded-xl border border-line bg-card px-4 py-3.5 text-[0.95rem] text-espresso placeholder:text-muted/60 transition-colors focus:border-espresso/50 focus:outline-none focus-visible:outline-none aria-[invalid=true]:border-[#b4533a]";

const select = `${field} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23633b2c%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`;

/**
 * Consultation request form with client-side validation.
 * TODO: connect `onSubmit` to the clinic's booking system or email service.
 */
export function ConsultationForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    if (!String(data.get("name") ?? "").trim()) next.name = "Please tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(String(data.get("email") ?? ""))) next.email = "Please enter a valid email address.";
    if (String(data.get("phone") ?? "").replace(/\D/g, "").length < 7) next.phone = "Please enter a phone number.";
    if (!data.get("consent")) next.consent = "Please confirm we may contact you.";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = e.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`);
      first?.focus();
      return;
    }
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  };

  return (
    <div className="relative rounded-[var(--radius-panel)] bg-sand p-6 md:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {status === "sent" ? (
          <m.div
            key="sent"
            role="status"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex min-h-[28rem] flex-col items-center justify-center text-center"
          >
            <span className="grid size-14 place-items-center rounded-full bg-espresso text-cream">
              <Check size={22} />
            </span>
            <h2 className="text-title mt-6">Thank you</h2>
            <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-muted">
              Your request has been received. Our team will be in touch within one working day.
            </p>
          </m.div>
        ) : (
          <m.form
            key="form"
            noValidate
            onSubmit={onSubmit}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            <Field label="Full name" name="name" error={errors.name}>
              <input id="name" name="name" autoComplete="name" placeholder="Your name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
            </Field>
            <Field label="Email" name="email" error={errors.email}>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
            </Field>
            <Field label="Phone" name="phone" error={errors.phone}>
              <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Phone number" className={field} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
            </Field>
            <Field label="Treatment of interest" name="treatment" optional>
              <select id="treatment" name="treatment" defaultValue="" className={select}>
                <option value="">Not sure yet</option>
                {treatments.map((t) => (
                  <option key={t.slug} value={t.slug}>
                    {t.name}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Preferred date" name="date" optional>
              <input id="date" name="date" type="date" className={field} />
            </Field>
            <Field label="Preferred time" name="time" optional>
              <select id="time" name="time" defaultValue="" className={select}>
                <option value="">Any time</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </Field>
            <Field label="How can we help?" name="message" optional className="sm:col-span-2">
              <textarea id="message" name="message" rows={4} placeholder="Tell us about your skin goals" className={`${field} resize-none`} />
            </Field>

            <div className="sm:col-span-2">
              <label className="flex items-start gap-3 text-sm text-muted">
                <input
                  type="checkbox"
                  name="consent"
                  className="mt-0.5 size-4 shrink-0 accent-espresso"
                  aria-invalid={!!errors.consent}
                  aria-describedby={errors.consent ? "consent-error" : undefined}
                />
                I agree to Skin Aesthetics contacting me about my consultation request.
              </label>
              {errors.consent && (
                <p id="consent-error" className="mt-2 text-xs text-[#b4533a]">
                  {errors.consent}
                </p>
              )}
            </div>

            <div className="flex flex-col-reverse items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted">We reply within one working day.</p>
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Request consultation"}
              </Button>
            </div>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  name,
  error,
  optional,
  className = "",
  children,
}: {
  label: string;
  name: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 flex justify-between text-sm font-medium text-espresso">
        {label}
        {optional && <span className="font-normal text-muted">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-2 text-xs text-[#b4533a]">
          {error}
        </p>
      )}
    </div>
  );
}
