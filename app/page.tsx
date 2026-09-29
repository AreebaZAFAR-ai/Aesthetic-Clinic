import { FaqSection } from "@/components/faq/FaqSection";
import { Hero } from "@/components/hero/Hero";
import { ClinicSection } from "@/components/home/ClinicSection";
import { Doctor } from "@/components/home/Doctor";
import { Intro } from "@/components/home/Intro";
import { ResultsBento } from "@/components/home/ResultsBento";
import { ClosingCta } from "@/components/layout/ClosingCta";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { TreatmentAccordion } from "@/components/treatments/TreatmentAccordion";
import { faqs } from "@/data/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <TreatmentAccordion />
      <Doctor />
      <ResultsBento />
      <ClinicSection />
      <Testimonials />
      <FaqSection items={faqs} />
      <ClosingCta />
    </>
  );
}
