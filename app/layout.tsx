import type { Metadata, Viewport } from "next";
import { Hedvig_Letters_Serif, Manrope } from "next/font/google";
import { MotionProvider } from "@/components/animations/MotionProvider";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/navigation/Header";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Hedvig_Letters_Serif({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-hedvig",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Doctor-led Aesthetic & Skin Clinic`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Doctor-led Aesthetic & Skin Clinic`,
    description: site.description,
    images: [{ url: "/assets/portrait-radiant.jpg", width: 736, height: 1308, alt: "Skin Aesthetics" }],
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdf7ef" },
    { media: "(prefers-color-scheme: dark)", color: "#15100d" },
  ],
};

// Applies the saved (or system) theme before first paint to avoid a flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning className={`${serif.variable} ${sans.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <MotionProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-espresso focus:px-5 focus:py-3 focus:text-cream"
          >
            Skip to content
          </a>
          <Header />
          <div id="page">
            <main id="main">{children}</main>
            <Footer />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
