"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";

interface HeaderProps {
  lang: Locale;
  dict: Dictionary;
}

const sections = ["about", "experience", "projects", "skills", "cv", "contact"] as const;

export function Header({ lang, dict }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const otherLang: Locale = lang === "en" ? "es" : "en";

  function getLocaleSwitchHref() {
    // Preserve hash if present
    if (typeof window !== "undefined" && window.location.hash) {
      return `/${otherLang}${window.location.hash}`;
    }
    return `/${otherLang}`;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-violet-glow/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <Link
          href={`/${lang}#hero`}
          className="text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          &lt;Dev /&gt;
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {dict.nav[s]}
              </a>
            </li>
          ))}
        </ul>

        {/* Lang switch + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href={getLocaleSwitchHref()}
            className="flex items-center gap-1 rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <span className={lang === "en" ? "text-primary" : ""}>EN</span>
            <span className="text-border">|</span>
            <span className={lang === "es" ? "text-primary" : ""}>ES</span>
          </Link>

          <button
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <ul className="flex flex-col px-6 py-4 gap-3">
            {sections.map((s) => (
              <li key={s}>
                <a
                  href={`#${s}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {dict.nav[s]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
