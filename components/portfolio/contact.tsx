"use client";

import { Mail } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

interface ContactProps {
  dict: Dictionary;
}

export function Contact({ dict }: ContactProps) {
  const { contact } = dict;

  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
          {contact.title}
        </h2>
        <p className="text-muted-foreground mb-8">{contact.description}</p>

        {/* Email link */}
        <a
          href={`mailto:${contact.email}`}
          className="mb-10 inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
        >
          <Mail className="h-4 w-4 text-primary" />
          <span className="font-mono text-sm">{contact.email}</span>
        </a>

        {/* Mini form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Placeholder: wire to your API / email service
          }}
          className="mt-8 flex flex-col gap-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
                {contact.form.name}
              </label>
              <input
                id="name"
                type="text"
                placeholder={contact.form.namePlaceholder}
                className="rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
                {contact.form.email}
              </label>
              <input
                id="email"
                type="email"
                placeholder={contact.form.emailPlaceholder}
                className="rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
              {contact.form.message}
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder={contact.form.messagePlaceholder}
              className="rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="self-start inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            {contact.form.send}
          </button>
        </form>
      </div>
    </section>
  );
}
