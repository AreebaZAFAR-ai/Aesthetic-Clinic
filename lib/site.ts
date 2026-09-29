/**
 * Central clinic details. Contact details below are placeholders —
 * replace them with the clinic's real information before launch.
 */
export const site = {
  name: "Skin Aesthetics",
  tagline: "Advanced skin treatments, thoughtfully tailored to you.",
  description:
    "Skin Aesthetics is a doctor-led aesthetic clinic offering advanced skin treatments, laser, injectables and skin rejuvenation with natural-looking results.",
  url: "https://skinaesthetics.clinic",
  email: "hello@skinaesthetics.clinic",
  phone: "+44 20 7946 0123",
  phoneHref: "tel:+442079460123",
  address: {
    line1: "27 Linden Place",
    line2: "Marylebone, London W1U",
  },
  hours: [
    { days: "Mon – Fri", time: "9:00 – 19:00" },
    { days: "Saturday", time: "10:00 – 17:00" },
    { days: "Sunday", time: "Closed" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "TikTok", href: "https://tiktok.com" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Results", href: "/results" },
  { label: "Contact", href: "/contact" },
] as const;

export const bookingHref = "/contact#book";
