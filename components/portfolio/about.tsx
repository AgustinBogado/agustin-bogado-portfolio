import type { Dictionary } from "@/lib/i18n";

interface AboutProps {
  dict: Dictionary;
}

export function About({ dict }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-primary mb-8">
          {dict.about.title}
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {dict.about.description}
        </p>
      </div>
    </section>
  );
}
