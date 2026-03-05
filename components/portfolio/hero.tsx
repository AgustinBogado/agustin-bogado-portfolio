import { FileText, Mail } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

interface HeroProps {
  dict: Dictionary;
}

export function Hero({ dict }: HeroProps) {
  const { hero } = dict;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Subtle glow effect */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.25 290 / 0.3) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="mb-3 text-sm font-medium tracking-widest uppercase text-primary">
          {hero.greeting}
        </p>
        <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          {hero.name}
        </h1>
        <p className="mt-3 text-xl font-medium text-primary sm:text-2xl">
          {hero.role}
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {hero.summary1}
          <br />
          {hero.summary2}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#cv"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            <FileText className="h-4 w-4" />
            {hero.cta.cv}
          </a>
          <a
            href="https://github.com/AgustinBogado"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-all hover:border-primary/50 hover:text-foreground"
          >
            {hero.cta.github}
          </a>
          <a
            href="https://www.linkedin.com/in/agustin-bogado-61b9b4247/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-all hover:border-primary/50 hover:text-foreground"
          >
            {hero.cta.linkedin}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-all hover:border-primary/50 hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            {hero.cta.contact}
          </a>
        </div>
      </div>
    </section>
  );
}
