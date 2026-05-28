# Agustín Bogado — Personal Portfolio

Bilingual personal portfolio built to present professional experience, selected projects, skills, and CV.

[Live Demo — English](https://agustin-bogado-portfolio.vercel.app/en) · [Live Demo — Español](https://agustin-bogado-portfolio.vercel.app/es)

## Overview

This repository contains the source code for my personal portfolio website. It is designed to present my profile, experience, selected work, and contact information as a Frontend Developer with full-stack experience.

## Features

- English and Spanish localized routes (`/en` and `/es`)
- Language switcher between both versions
- About and professional experience sections
- Project showcase with live and source links where applicable
- Skills grouped by frontend, backend, and tools
- Embedded CV viewer with PDF download
- Contact section with direct email access
- Responsive layout and mobile navigation

## Tech Stack

### Framework / UI

- Next.js (App Router)
- React
- Lucide React

### Language

- TypeScript

### Styling

- Tailwind CSS
- CSS custom properties

### Deployment / Analytics

- Vercel
- Vercel Analytics

## Project Structure

- `app/` — App Router entrypoints, localized routes, and active global styles
- `components/` — Portfolio sections and reusable UI building blocks
- `lib/` — Locale dictionary, locale types, and shared utilities
- `public/` — Static assets such as the PDF CV and favicon files

## Getting Started

### Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root route redirects to `/en`, and the localized pages are available at `/en` and `/es`.

### Alternative with pnpm

```bash
pnpm install
pnpm dev
```

## Deployment

This portfolio is deployed on Vercel.

- English: [https://agustin-bogado-portfolio.vercel.app/en](https://agustin-bogado-portfolio.vercel.app/en)
- Español: [https://agustin-bogado-portfolio.vercel.app/es](https://agustin-bogado-portfolio.vercel.app/es)

## Author / Contact

**Agustín Bogado**

- Portfolio: [https://agustin-bogado-portfolio.vercel.app/en](https://agustin-bogado-portfolio.vercel.app/en)
- LinkedIn: [https://www.linkedin.com/in/agustin-bogado-61b9b4247/](https://www.linkedin.com/in/agustin-bogado-61b9b4247/)
- GitHub: [https://github.com/AgustinBogado](https://github.com/AgustinBogado)
- Email: [agusbog.4@gmail.com](mailto:agusbog.4@gmail.com)

## License

No public license has been specified for this repository. Unless stated otherwise, the code belongs to Agustín Bogado.
