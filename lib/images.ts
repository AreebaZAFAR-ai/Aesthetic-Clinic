import type { StaticImageData } from "next/image";

import antiWrinkle from "@/public/assets/anti-wrinkle.jpg";
import clinicConsultation from "@/public/assets/clinic-consultation.jpg";
import clinicEditorial from "@/public/assets/clinic-editorial.jpg";
import consultationAnalysis from "@/public/assets/consultation-analysis.jpg";
import consultationScreen from "@/public/assets/consultation-screen.jpg";
import doctorClinic from "@/public/assets/doctor-clinic.jpg";
import doctorPortrait from "@/public/assets/doctor-portrait.jpg";
import facialTreatment from "@/public/assets/facial-treatment.jpg";
import glowLips from "@/public/assets/glow-lips.jpg";
import heroPoster from "@/public/assets/hero-poster.jpg";
import injectables from "@/public/assets/injectables.jpg";
import iplLaser from "@/public/assets/ipl-laser.jpg";
import laserResurfacing from "@/public/assets/laser-resurfacing.jpg";
import ledTherapy from "@/public/assets/led-therapy.jpg";
import lipEnhancement from "@/public/assets/lip-enhancement.jpg";
import portraitEditorial from "@/public/assets/portrait-editorial.jpg";
import portraitNatural from "@/public/assets/portrait-natural.jpg";
import portraitProfile from "@/public/assets/portrait-profile.jpg";
import portraitRadiant from "@/public/assets/portrait-radiant.jpg";
import portraitSleek from "@/public/assets/portrait-sleek.jpg";
import portraitSoft from "@/public/assets/portrait-soft.jpg";
import portraitWaves from "@/public/assets/portrait-waves.jpg";
import profileSculpt from "@/public/assets/profile-sculpt.jpg";
import profilesLayered from "@/public/assets/profiles-layered.jpg";
import resultAfter from "@/public/assets/result-after.jpg";
import resultBefore from "@/public/assets/result-before.jpg";
import resultTexture from "@/public/assets/result-texture.jpg";
import skinBoosters from "@/public/assets/skin-boosters.jpg";
import skincareRitual from "@/public/assets/skincare-ritual.jpg";

export type Img = { src: StaticImageData; alt: string };

const img = (src: StaticImageData, alt: string): Img => ({ src, alt });

/** Every photograph used on the site, with its alt text, in one place. */
export const images = {
  antiWrinkle: img(antiWrinkle, "Practitioner administering a precise anti-wrinkle treatment to the forehead"),
  clinicConsultation: img(clinicConsultation, "Client reviewing her skin in a hand mirror with a practitioner in a bright treatment room"),
  clinicEditorial: img(clinicEditorial, "Hands holding aesthetic medicine journals"),
  consultationAnalysis: img(consultationAnalysis, "Doctor explaining a treatment plan to a client using a tablet"),
  consultationScreen: img(consultationScreen, "Practitioner assessing facial proportions with imaging on screen"),
  doctorClinic: img(doctorClinic, "Aesthetic doctor preparing for a treatment in the clinic"),
  doctorPortrait: img(doctorPortrait, "Portrait of the clinic's medical director in white clinical wear"),
  facialTreatment: img(facialTreatment, "Client relaxing during a facial treatment in a softly lit room"),
  glowLips: img(glowLips, "Close-up of hydrated, luminous skin and lips"),
  heroPoster: img(heroPoster, "Profile of a woman with smooth, natural-looking skin"),
  injectables: img(injectables, "Gloved practitioner performing a precise injectable treatment"),
  iplLaser: img(iplLaser, "IPL light treatment being applied to the cheek"),
  laserResurfacing: img(laserResurfacing, "Laser resurfacing treatment with protective eye shields"),
  ledTherapy: img(ledTherapy, "Face illuminated by red LED light therapy"),
  lipEnhancement: img(lipEnhancement, "Subtle lip enhancement treatment in progress"),
  portraitEditorial: img(portraitEditorial, "Editorial portrait of a woman with luminous skin"),
  portraitNatural: img(portraitNatural, "Smiling woman with natural, healthy skin"),
  portraitProfile: img(portraitProfile, "Woman glancing over her shoulder with clear, even skin"),
  portraitRadiant: img(portraitRadiant, "Smiling woman with radiant skin against a dark backdrop"),
  portraitSleek: img(portraitSleek, "Portrait of a woman with a sleek ponytail and defined features"),
  portraitSoft: img(portraitSoft, "Soft natural beauty portrait with glowing skin"),
  portraitWaves: img(portraitWaves, "Portrait of a woman with soft waves and smooth skin"),
  profileSculpt: img(profileSculpt, "Practitioner assessing a client's facial profile"),
  profilesLayered: img(profilesLayered, "Layered profiles showing refreshed, lifted features"),
  resultAfter: img(resultAfter, "After treatment: smoother, more even and rested-looking skin"),
  resultBefore: img(resultBefore, "Before treatment: visible fine lines and uneven tone"),
  resultTexture: img(resultTexture, "Before and after close-up of improved skin texture and acne marks"),
  skinBoosters: img(skinBoosters, "Skin booster treatment being administered to the forehead"),
  skincareRitual: img(skincareRitual, "Woman gently touching her smooth, hydrated skin"),
} satisfies Record<string, Img>;
