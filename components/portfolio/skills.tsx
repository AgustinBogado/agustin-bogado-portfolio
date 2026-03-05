import type { Dictionary } from "@/lib/i18n";

interface SkillsProps {
  dict: Dictionary;
}

export function Skills({ dict }: SkillsProps) {
  const { skills } = dict;

  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-primary mb-12">
          {skills.title}
        </h2>

        <div className="flex flex-col gap-10">
          {skills.groups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
