export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const dictionary = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      cv: "CV",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Agustin Bogado",
      role: "Frontend / Full-Stack Developer",
      summary1: "I build accessible, pixel-perfect user interfaces",
      summary2: "that blend thoughtful design with robust engineering.",
      cta: {
        cv: "View CV",
        github: "GitHub",
        linkedin: "LinkedIn",
        contact: "Contact Me",
      },
    },
    about: {
      title: "About Me",
      description:
        "Frontend / Full-Stack developer focused on production systems. I build and maintain internal web apps (React/Next.js + Laravel), working on workflows, role-based access control, and user-facing features with measurable impact.",
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          role: "Frontend / Full-Stack Developer",
          company: "Hospital Privado SADIV",
          companyUrl: "https://www.hpsadiv.com/",
          period: "2024 — Present",
          bullets: [
            "Built multi-step approval workflows for HR processes (Vacations, Disciplinary Sanctions) with role-based stages, state tracking and notifications.",
            "Implemented a Vacation request module with tenure-based calculations, remaining-days tracking, and notifications for supervisors, HR, management and replacements (paper usage -4%, lost sheets -100%).",
            "Developed a Kitchen QR ordering module with configurable time windows and dynamic menus, increasing companion orders by ~35% and eliminating recurring pricing/payment questions.",
            "Created Complementary Hours module with approval flow and monthly totals per employee, reducing calculation errors by ~15%.",
            "Implemented access control policies for profiles, private files and internal views, preventing unauthorized access and protecting sensitive employee data.",
            "Built internal CMS forms that feed the public Next.js website (History carousel, Infection Prevention area, Patient Safety & Certifications).",
          ],
          stack: ["React", "Next.js", "TypeScript", "JavaScript", "Laravel", "PHP", "Tailwind", "jQuery", "MySQL"],
        },
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Hospital Intranet (Internal)",
          description:
            "Internal web system with HR workflows, operational modules, notifications and role-based access control for sensitive data.",
          stack: ["Laravel", "PHP", "React", "TypeScript", "jQuery", "MySQL"],
          liveUrl: null,
          repoUrl: null,
          isPrivate: true,
        },
        {
          title: "Vukip (WIP)",
          description:
            "SaaS for appointment scheduling and business management. Mobile-first experience and API-driven architecture.",
          stack: ["Flutter", "Dart", "REST API", "Laravel"],
          liveUrl: null,
          repoUrl: null,
          isPrivate: true,
        },
        {
          title: "Portfolio (This website)",
          description:
            "Next.js portfolio with i18n routing (/en, /es), CV embed and project showcase.",
          stack: ["Next.js", "TypeScript", "Tailwind"],
          liveUrl: "https://agustin-bogado-portfolio.vercel.app",
          repoUrl: "https://github.com/AgustinBogado/agustin-bogado-portfolio",
          isPrivate: false,
        },
      ],
    },
    skills: {
      title: "Skills",
      groups: [
        {
          label: "Frontend",
          items: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "HTML/CSS",
            "SCSS",
            "Bootstrap",
            "jQuery",
          ],
        },
        {
          label: "Backend",
          items: ["Laravel", "PHP", "MySQL", "PostgreSQL", "REST APIs"],
        },
        {
          label: "Tools",
          items: ["Git", "GitHub", "Jira", "Insomnia", "Vercel", "Docker"],
        },
      ],
    },
    cv: {
      title: "Curriculum Vitae",
      download: "Download CV",
      pdfUrl: "/cv.pdf",
    },
    contact: {
      title: "Contact",
      description: "Have a project in mind or want to chat? Feel free to reach out.",
      email: "agusbog.4@gmail.com",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        namePlaceholder: "John Doe",
        emailPlaceholder: "john.doe@example.com",
        messagePlaceholder: "Tell me about your project...",
      },
    },
    footer: {
      built: "Built with",
      and: "and",
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      cv: "CV",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Agustín Bogado",
      role: "Desarrollador Frontend / Full-Stack",
      summary1: "Construyo interfaces de usuario accesibles y pixel-perfect",
      summary2: "que combinan un diseño cuidadoso con ingeniería robusta.",
      cta: {
        cv: "Ver CV",
        github: "GitHub",
        linkedin: "LinkedIn",
        contact: "Contáctame",
      },
    },
    about: {
      title: "Sobre Mi",
      description:
        "Desarrollador Frontend / Full-Stack enfocado en sistemas en producción. Desarrollo y mantengo aplicaciones internas (React/Next.js + Laravel), trabajando en flujos de aprobación, control de accesos por roles y funcionalidades con impacto medible.",
    },
    experience: {
      title: "Experiencia",
      jobs: [
        {
          role: "Frontend / Full-Stack Developer",
          company: "Hospital Privado SADIV",
          companyUrl: "https://www.hpsadiv.com/",
          period: "2024 — Presente",
          bullets: [
            "Desarrollé flujos de aprobación multi-etapa para procesos de RRHH (Vacaciones, Sanciones disciplinarias) con etapas por rol, seguimiento de estado y notificaciones.",
            "Implementé el módulo de Vacaciones con cálculos por antigüedad, control de días disponibles y notificaciones a supervisión, RRHH, gerencia y reemplazos (papel -4%, pérdida de planillas -100%).",
            "Desarrollé un módulo de Cocina con pedidos vía QR, ventanas horarias configurables y menú dinámico, aumentando pedidos en ~35% y eliminando dudas frecuentes sobre precio y pago.",
            "Implementé el módulo de Horas Complementarias con flujo de aprobación y totales mensuales por empleado, reduciendo errores de cálculo en ~15%.",
            "Apliqué policies y control de accesos para perfiles, archivos privados y vistas internas, evitando accesos no autorizados y protegiendo información sensible.",
            "Construí formularios tipo CMS en Intranet que alimentan la web pública en Next.js (Historia con carrusel, Prevención y Control de Infecciones, Calidad/Seguridad y Certificaciones).",
          ],
          stack: ["React", "Next.js", "TypeScript", "JavaScript", "Laravel", "PHP", "Tailwind", "jQuery", "MySQL"],
        },
      ],
    },
    projects: {
      title: "Proyectos",
      items: [
        {
          title: "Hospital Intranet (Interna)",
          description:
            "Sistema web interno para gestión de flujos de trabajo, módulos operacionales, notificaciones y control de acceso por roles para datos sensibles.",
          stack: ["Next.js", "TypeScript", "Tailwind CSS", "Laravel", "PHP", "MySQL"],
          liveUrl: null,
          repoUrl: null,
          isPrivate: false,
        },
        {
          title: "Vukip (En desarrollo)",
          description:
            "SaaS para agendamiento de citas y gestión de negocios. Experiencia móvil y arquitectura API-driven.",
          stack: ["Next.js", "TypeScript", "Tailwind CSS", "Laravel", "PHP", "MySQL"],
          liveUrl: null,
          repoUrl: null,
          isPrivate: true,
        },
        {
          title: "Portfolio (Este sitio)",
          description:
            "Portfolio Next.js con enrutamiento i18n (/en, /es), CV incrustado y galería de proyectos.",
          stack: ["Next.js", "TypeScript", "Tailwind",],
          liveUrl: null,
          repoUrl: null,
          isPrivate: false,
        },
      ],
    },
    skills: {
      title: "Habilidades",
      groups: [
        {
          label: "Frontend",
          items: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "HTML/CSS",
            "SCSS",
            "Bootstrap",
            "jQuery",
          ],
        },
        {
          label: "Backend",
          items: ["Laravel", "PHP", "MySQL", "PostgreSQL", "REST APIs"],
        },
        {
          label: "Herramientas",
          items: ["Git", "GitHub", "Jira", "Insomnia", "Vercel", "Docker"],
        },
      ],
    },
    cv: {
      title: "Curriculum Vitae",
      download: "Descargar CV",
      pdfUrl: "/cv.pdf",
    },
    contact: {
      title: "Contacto",
      description: "Tienes un proyecto en mente o quieres charlar? No dudes en escribirme.",
      email: "agusbog.4@gmail.com",
      form: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        send: "Enviar Mensaje",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "agusbog.4@gmail.com",
        messagePlaceholder: "Cuéntame sobre tu proyecto...",
      },
    },
    footer: {
      built: "Hecho con",
      and: "y",
      rights: "Todos los derechos reservados.",
    },
  },
} as const;

export type Dictionary = (typeof dictionary)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionary[locale];
}
