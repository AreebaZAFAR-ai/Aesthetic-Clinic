import { images } from "@/lib/images";
import type { FaqItem } from "./treatments";

export const doctor = {
  name: "Dr. Amelia Hart",
  role: "Medical Director & Aesthetic Physician",
  image: images.doctorPortrait,
  bio: "Dr. Hart founded Skin Aesthetics on a simple belief: good skin starts with understanding. Every plan begins with a thorough consultation and a long-term view of your skin's health.",
  credentials: [
    "Medical doctor with a specialist interest in skin",
    "12+ years in aesthetic medicine",
    "Advanced training in laser and injectables",
  ],
};

export const testimonials = [
  {
    quote: "The consultation alone was worth it. Nothing was rushed and nothing was pushed. My skin has never looked calmer.",
    name: "Sophie R.",
    treatment: "Skin Rejuvenation",
  },
  {
    quote: "After years of trying everything for my acne, I finally have a plan that works. The difference in six months is remarkable.",
    name: "Hannah M.",
    treatment: "Acne & Scarring",
  },
  {
    quote: "Subtle is exactly the word. Friends say I look rested. Nobody can tell I've had anything done.",
    name: "Claire D.",
    treatment: "Injectables",
  },
  {
    quote: "My pigmentation has faded more than I thought possible, and the aftercare advice was so clear.",
    name: "Priya K.",
    treatment: "Pigmentation",
  },
  {
    quote: "A beautiful clinic with genuinely expert people. I trust them completely with my skin.",
    name: "Olivia T.",
    treatment: "Skin Boosters",
  },
];

export const faqs: FaqItem[] = [
  {
    q: "How do I book a consultation?",
    a: "Book online through our consultation form or call the clinic. We'll confirm a time within one working day.",
  },
  {
    q: "What happens during my first appointment?",
    a: "A calm, unhurried consultation with a clinician. We assess your skin, listen to your goals and outline a personal plan.",
  },
  {
    q: "How do I know which treatment is right for me?",
    a: "You don't need to. Tell us what you'd like to change and we'll recommend the safest, most effective route.",
  },
  {
    q: "Are treatments suitable for my skin type?",
    a: "We treat all skin types and tones, adjusting technology and settings to your skin.",
  },
  {
    q: "How long does a treatment take?",
    a: "Most treatments take 30 to 60 minutes, and many fit easily into a lunch break.",
  },
  {
    q: "Is there any downtime?",
    a: "Many treatments have little or none. We'll always explain recovery clearly before you begin.",
  },
];

export const stats = [
  { value: "12+", label: "Years of practice" },
  { value: "4,800+", label: "Treatments performed" },
  { value: "4.9", label: "Average client rating" },
  { value: "30+", label: "Tailored protocols" },
];
