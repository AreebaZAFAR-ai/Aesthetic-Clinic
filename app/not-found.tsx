import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[80svh] flex-col items-center justify-center pt-24 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="text-headline mt-6">This page has moved on</h1>
      <p className="mt-5 max-w-sm text-muted">The page you&apos;re looking for doesn&apos;t exist. Let&apos;s take you somewhere lovely.</p>
      <ButtonLink href="/" className="mt-10">
        Back to home
      </ButtonLink>
    </section>
  );
}
