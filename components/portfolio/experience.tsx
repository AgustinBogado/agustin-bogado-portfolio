import { ExternalLink } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

interface ExperienceProps {
  dict: Dictionary;
}

export function Experience({ dict }: ExperienceProps) {
  const { experience } = dict;

  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-primary mb-12">
          {experience.title}
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-[120px]"
            aria-hidden="true"
          />

          {experience.jobs.map((job, i) => (
            <div key={i} className="relative flex flex-col md:flex-row gap-4 md:gap-8 pb-12 last:pb-0">
              {/* Period */}
              <div className="md:w-[120px] shrink-0">
                <span className="text-xs font-mono text-muted-foreground">
                  {job.period}
                </span>
              </div>

              {/* Dot on timeline */}
              <div
                className="absolute left-0 md:left-[120px] top-1 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-primary bg-background"
                aria-hidden="true"
              />

              {/* Content */}
              <div className="pl-6 md:pl-8 flex-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {job.role}
                </h3>
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-0.5"
                >
                  {job.company}
                  <ExternalLink className="h-3 w-3" />
                </a>

                <ul className="mt-4 flex flex-col gap-2">
                  {job.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-primary/60"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Stack chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
