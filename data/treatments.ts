import { images, type Img } from "@/lib/images";

export type FaqItem = { q: string; a: string };

export type Treatment = {
  slug: string;
  name: string;
  /** Compact label for tight spaces (hero fan, chips). */
  short: string;
  /** One-line summary for lists and cards. */
  summary: string;
  /** Two-sentence introduction for the detail page. */
  intro: string;
  image: Img;
  gallery: [Img, Img, Img];
  concerns: string[];
  duration: string;
  sessions: string;
  downtime: string;
  benefits: string[];
  steps: { title: string; text: string }[];
  faqs: FaqItem[];
};

export const treatments: Treatment[] = [
  {
    slug: "facial-treatments",
    short: "Facials",
    name: "Facial Treatments",
    summary: "Medical-grade facials that cleanse, restore and bring back a healthy glow.",
    intro:
      "Our signature facials combine deep cleansing, gentle exfoliation and targeted actives chosen for your skin on the day. Calm, clarifying and quietly transformative.",
    image: images.facialTreatment,
    gallery: [images.facialTreatment, images.skincareRitual, images.portraitSoft],
    concerns: ["Dullness", "Congestion", "Dehydration"],
    duration: "60 min",
    sessions: "Monthly",
    downtime: "None",
    benefits: [
      "Brighter, more even complexion",
      "Refined pores and smoother texture",
      "Deep, lasting hydration",
      "A calm reset for stressed skin",
    ],
    steps: [
      { title: "Skin analysis", text: "We assess your skin under clinical light to choose the right actives." },
      { title: "Cleanse & exfoliate", text: "A layered cleanse and gentle resurfacing prepare the skin." },
      { title: "Targeted treatment", text: "Serums, masks or LED are tailored to your concerns." },
      { title: "Aftercare", text: "You leave with a simple home routine to extend the results." },
    ],
    faqs: [
      { q: "How often should I have a facial?", a: "Every four to six weeks keeps pace with your skin's natural renewal cycle." },
      { q: "Can I wear makeup afterwards?", a: "We recommend leaving skin bare for the rest of the day to let it breathe." },
      { q: "Is it suitable for sensitive skin?", a: "Yes. Every facial is adapted to your skin on the day of treatment." },
    ],
  },
  {
    slug: "skin-rejuvenation",
    short: "Rejuvenation",
    name: "Skin Rejuvenation",
    summary: "Restore radiance, firmness and tone with advanced energy-based therapies.",
    intro:
      "Rejuvenation treatments stimulate your skin's own collagen and renewal, so results look like you on your best day. Subtle, gradual and natural.",
    image: images.ledTherapy,
    gallery: [images.ledTherapy, images.portraitRadiant, images.glowLips],
    concerns: ["Loss of radiance", "Fine lines", "Uneven tone"],
    duration: "45 min",
    sessions: "3 – 6",
    downtime: "Minimal",
    benefits: [
      "Firmer, more elastic skin",
      "Softened fine lines",
      "Renewed luminosity",
      "Results that build over time",
    ],
    steps: [
      { title: "Consultation", text: "We map your goals and choose the right combination of therapies." },
      { title: "Preparation", text: "Skin is cleansed and protected before treatment begins." },
      { title: "Treatment", text: "LED, radiofrequency or microneedling, delivered with precision." },
      { title: "Review", text: "We check progress at every visit and adjust your plan." },
    ],
    faqs: [
      { q: "When will I see results?", a: "Many clients notice a glow within days, with collagen changes building over eight to twelve weeks." },
      { q: "Does it hurt?", a: "Most treatments feel warm or lightly prickly. Numbing is available where needed." },
      { q: "Can it be combined with other treatments?", a: "Yes. Rejuvenation pairs well with skin boosters and medical facials." },
    ],
  },
  {
    slug: "acne",
    short: "Acne Care",
    name: "Acne & Acne Scarring",
    summary: "Clear active breakouts and soften scarring with a structured medical plan.",
    intro:
      "Acne is medical, and it deserves a medical plan. We treat active breakouts first, then refine texture and scarring for smoother, calmer skin.",
    image: images.resultTexture,
    gallery: [images.resultTexture, images.consultationAnalysis, images.portraitNatural],
    concerns: ["Active acne", "Post-acne marks", "Textural scarring"],
    duration: "30 – 60 min",
    sessions: "4 – 8",
    downtime: "1 – 3 days",
    benefits: [
      "Fewer, calmer breakouts",
      "Faded marks and redness",
      "Smoother skin texture",
      "A long-term maintenance routine",
    ],
    steps: [
      { title: "Diagnosis", text: "A doctor identifies the type and triggers of your acne." },
      { title: "Clear", text: "Peels, prescription care and light therapy settle active skin." },
      { title: "Refine", text: "Microneedling or laser addresses residual scarring." },
      { title: "Maintain", text: "A simple regime keeps skin clear between visits." },
    ],
    faqs: [
      { q: "Will my acne come back?", a: "Acne can recur, which is why we build a maintenance plan with you from the start." },
      { q: "Can scarring be treated while acne is active?", a: "We settle active breakouts first so scar treatments work more effectively." },
      { q: "Is prescription care available?", a: "Yes. Our doctors can prescribe where clinically appropriate." },
    ],
  },
  {
    slug: "pigmentation",
    short: "Pigmentation",
    name: "Pigmentation",
    summary: "Even out sun damage, melasma and dark spots for a clearer complexion.",
    intro:
      "Pigmentation needs a careful, layered approach. We combine light-based treatments, peels and daily protection to restore an even, clear tone.",
    image: images.iplLaser,
    gallery: [images.iplLaser, images.skincareRitual, images.portraitSoft],
    concerns: ["Sun spots", "Melasma", "Post-inflammatory marks"],
    duration: "30 – 45 min",
    sessions: "3 – 5",
    downtime: "Minimal",
    benefits: [
      "A clearer, more even tone",
      "Reduced sun spots and patches",
      "Brighter overall complexion",
      "Protection strategies that last",
    ],
    steps: [
      { title: "Assessment", text: "We identify the depth and type of pigment before treating." },
      { title: "Prepare", text: "Your skin may be primed with a short home regime." },
      { title: "Treat", text: "IPL, laser or peels are selected for your skin type." },
      { title: "Protect", text: "Daily SPF and maintenance keep pigment from returning." },
    ],
    faqs: [
      { q: "Is it safe for darker skin tones?", a: "Yes, with the right technology and settings. Every plan is tailored to your skin type." },
      { q: "Will the spots darken first?", a: "Treated spots often darken slightly before flaking away over one to two weeks." },
      { q: "Can melasma be cured?", a: "Melasma can be managed very effectively, though it needs ongoing care." },
    ],
  },
  {
    slug: "laser-treatments",
    short: "Laser",
    name: "Laser Treatments",
    summary: "Precise laser resurfacing for texture, redness, vessels and tone.",
    intro:
      "Our medical-grade lasers target specific concerns with exceptional precision. Every setting is calibrated to your skin, for results that look refined, never overdone.",
    image: images.laserResurfacing,
    gallery: [images.laserResurfacing, images.iplLaser, images.consultationScreen],
    concerns: ["Texture", "Redness & vessels", "Fine lines"],
    duration: "30 – 60 min",
    sessions: "1 – 4",
    downtime: "0 – 5 days",
    benefits: [
      "Smoother, refined texture",
      "Reduced redness and visible vessels",
      "Tighter-looking skin",
      "Long-lasting collagen renewal",
    ],
    steps: [
      { title: "Consultation", text: "We confirm suitability and choose the right laser for you." },
      { title: "Patch test", text: "A small test ensures your skin responds as expected." },
      { title: "Treatment", text: "Eyes are protected and the laser is applied in precise passes." },
      { title: "Recovery", text: "Clear aftercare guidance supports fast, comfortable healing." },
    ],
    faqs: [
      { q: "Does laser treatment hurt?", a: "Most clients describe a warm snapping sensation. Cooling and numbing keep you comfortable." },
      { q: "How many sessions will I need?", a: "It depends on the concern. Your doctor will outline a clear plan at consultation." },
      { q: "Can I have laser in summer?", a: "Some lasers are suitable year-round. We'll advise based on your treatment and sun exposure." },
    ],
  },
  {
    slug: "anti-aging",
    short: "Anti-Aging",
    name: "Anti-Aging",
    summary: "Soften lines and restore lost volume while keeping your natural expression.",
    intro:
      "Refreshed, not changed. We use a considered combination of treatments to soften lines and support structure, so you look rested and like yourself.",
    image: images.profilesLayered,
    gallery: [images.antiWrinkle, images.profilesLayered, images.portraitSleek],
    concerns: ["Expression lines", "Volume loss", "Skin laxity"],
    duration: "30 – 45 min",
    sessions: "Tailored",
    downtime: "Minimal",
    benefits: [
      "Softened expression lines",
      "Restored facial balance",
      "A fresher, rested look",
      "Natural movement preserved",
    ],
    steps: [
      { title: "Facial assessment", text: "We study your features at rest and in motion." },
      { title: "Your plan", text: "A phased plan prioritizes what will make the biggest difference." },
      { title: "Treatment", text: "Precise, conservative placement for a natural outcome." },
      { title: "Two-week review", text: "We check results and fine-tune if needed." },
    ],
    faqs: [
      { q: "Will I still look like me?", a: "Always. Our approach is conservative and focused on natural expression." },
      { q: "How long do results last?", a: "Typically three to twelve months, depending on the treatment." },
      { q: "When should I start?", a: "There's no set age. We'll advise on prevention or correction based on your skin." },
    ],
  },
  {
    slug: "injectables",
    short: "Injectables",
    name: "Injectables",
    summary: "Doctor-led anti-wrinkle and dermal filler treatments with a light touch.",
    intro:
      "Injectables in expert hands are about balance, not volume. Our doctors enhance your natural features with precision and restraint.",
    image: images.injectables,
    gallery: [images.injectables, images.lipEnhancement, images.profileSculpt],
    concerns: ["Lines & wrinkles", "Lip definition", "Facial contour"],
    duration: "30 min",
    sessions: "1 – 2",
    downtime: "Minimal",
    benefits: [
      "Smoother lines at rest",
      "Subtle definition and contour",
      "Immediate, natural-looking results",
      "Performed only by medical professionals",
    ],
    steps: [
      { title: "Consultation", text: "We discuss goals, anatomy and medical history in depth." },
      { title: "Mapping", text: "Treatment points are planned around your facial proportions." },
      { title: "Treatment", text: "Fine needles and numbing keep you comfortable throughout." },
      { title: "Follow-up", text: "A complimentary review at two weeks for peace of mind." },
    ],
    faqs: [
      { q: "Who performs the treatment?", a: "Injectables are performed only by our qualified medical practitioners." },
      { q: "Is there bruising?", a: "Mild, temporary bruising can occur. We'll share tips to minimize it." },
      { q: "Can filler be reversed?", a: "Hyaluronic acid fillers can be dissolved if ever needed." },
    ],
  },
  {
    slug: "skin-boosters",
    short: "Boosters",
    name: "Skin Boosters",
    summary: "Injectable hydration for plump, dewy, quietly luminous skin.",
    intro:
      "Skin boosters deliver hyaluronic acid deep into the skin, improving hydration, elasticity and glow from within. A beautiful treatment for tired or dehydrated skin.",
    image: images.skinBoosters,
    gallery: [images.skinBoosters, images.glowLips, images.portraitWaves],
    concerns: ["Dehydration", "Crepey texture", "Dull skin"],
    duration: "30 min",
    sessions: "2 – 3",
    downtime: "24 – 48 hrs",
    benefits: [
      "Deep, long-lasting hydration",
      "Improved elasticity",
      "Smoother, dewier texture",
      "A natural, lit-from-within glow",
    ],
    steps: [
      { title: "Consultation", text: "We confirm boosters are right for your skin and goals." },
      { title: "Numbing", text: "A topical anesthetic keeps the treatment comfortable." },
      { title: "Treatment", text: "Micro-injections distribute hydration evenly across the area." },
      { title: "Glow", text: "Small bumps settle within a day or two, revealing plumper skin." },
    ],
    faqs: [
      { q: "How long do results last?", a: "Around six months after an initial course, with maintenance every six to nine months." },
      { q: "Where can boosters be used?", a: "Face, neck, décolletage and the backs of the hands." },
      { q: "Is it the same as filler?", a: "No. Boosters hydrate and improve skin quality rather than add volume." },
    ],
  },
];

export const getTreatment = (slug: string) => treatments.find((t) => t.slug === slug);
