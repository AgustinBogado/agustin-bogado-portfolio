import { getDictionary, locales, type Locale } from "@/lib/i18n";
import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";
import { CvViewer } from "@/components/portfolio/cv-viewer";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { SectionDivider } from "@/components/portfolio/section-divider";
import type { Metadata } from "next";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  return {
    title: `${dict.hero.name} — ${dict.hero.role}`,
    description: `${dict.hero.summary1} ${dict.hero.summary2}`,
    manifest: "/favicons/site.webmanifest",
    icons: {
      icon: [
        { url: "/favicons/favicon.ico" },
        { url: "/favicons/favicon.svg", type: "image/svg+xml" },
        { url: "/favicons/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      ],
      apple: "/favicons/apple-touch-icon.png",
    },
    openGraph: {
      title: `${dict.hero.name} — ${dict.hero.role}`,
      description: `${dict.hero.summary1} ${dict.hero.summary2}`,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <Header lang={locale} dict={dict} />
      <main>
        <Hero dict={dict} />
        <SectionDivider />
        <About dict={dict} />
        <SectionDivider />
        <Experience dict={dict} />
        <SectionDivider />
        <Projects dict={dict} />
        <SectionDivider />
        <Skills dict={dict} />
        <SectionDivider />
        <CvViewer dict={dict} />
        <SectionDivider />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
