# Aryan Jaiswal – Portfolio

[![Live](https://img.shields.io/badge/Live-aryanjaiswal.in-8B5CF6?style=for-the-badge&logo=vercel)](https://aryanjaiswal.in)
[![Next.js](https://img.shields.io/badge/Next.js-14-000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A modern, multi-page developer portfolio featuring interactive 3D elements, scroll-driven animations, and a dedicated music showcase page. Designed to present technical expertise, production-grade projects, and creative pursuits in a recruiter-friendly format.

**Production URL:** [https://aryanjaiswal.in](https://aryanjaiswal.in)

---

## Architecture

```
app/
├── page.tsx              # Homepage — hero, highlights carousel, experience preview
├── experience/page.tsx   # Full work experience with animated border cards
├── projects/page.tsx     # Project showcase with 3D pin containers
├── resume/page.tsx       # Detailed resume with downloadable PDF
└── notesbyaryan/page.tsx # Music covers — animated cards with Instagram links

components/
├── hero.tsx              # Hero section with text-generate effect
├── grid.tsx              # Bento grid layout (About section)
├── experience.tsx        # Moving-border experience cards
├── resume.tsx            # Full resume renderer (education, experience, projects, skills)
├── footer.tsx            # Contact section with social links
└── ui/                   # Reusable animated components
    ├── floating-nav.tsx  # Sticky navigation bar
    ├── 3d-pin.tsx        # 3D perspective card containers
    ├── moving-borders.tsx# Animated gradient border cards
    ├── spotlight.tsx     # SVG spotlight effects
    ├── magic-button.tsx  # Gradient hover button
    └── text-generate-effect.tsx

data/
├── index.ts              # Navigation, projects, experience, testimonials
└── performances.json     # Music section data (songs, links, accents)
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14 (App Router, Server Components) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **3D Graphics** | Three.js, React Three Fiber |
| **Deployment** | Netlify (auto-deploy on push to `main`) |
| **Domain** | Custom domain — `aryanjaiswal.in` |

---

## Features

- **Multi-page architecture** — Dedicated routes for Experience, Projects, Resume, and Music
- **Interactive 3D elements** — Globe visualization and perspective card containers
- **Scroll-driven animations** — Framer Motion entrance effects and hover interactions
- **Career highlights carousel** — Infinite-scroll testimonial cards with links
- **Music showcase** — Animated waveform cards per song with unique color accents
- **Downloadable resume** — One-click PDF download of latest resume
- **Responsive design** — Mobile-first layout across all breakpoints
- **Dark theme** — Consistent dark UI with purple/violet accent palette

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Development

```bash
git clone https://github.com/Aryanjstar/Aryan_Jaiswal_Portfolio_V1.git
cd Aryan_Jaiswal_Portfolio_V1
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Deployment

This project uses **Netlify** for continuous deployment. Every push to the `main` branch triggers an automatic build and deploy.

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Publish directory | `.next` |
| Node version | 20 |
| Framework preset | Next.js |

The custom domain `aryanjaiswal.in` is configured via Netlify DNS with automatic SSL.

---

## Pages Overview

| Route | Description |
|-------|-------------|
| `/` | Hero with 3D globe, bento grid about section, career highlights carousel, experience preview |
| `/experience` | Detailed work experience cards with animated moving borders |
| `/projects` | Project showcase with 3D pin containers, live links, GitHub links, and demo videos |
| `/resume` | Complete resume — education, experience, projects, skills, achievements with PDF download |
| `/notesbyaryan` | Music covers page — profile hero, Spotify status, animated song cards linking to Instagram |

---

## Author

**Aryan Jaiswal**
AI Engineer | Published Researcher | Full Stack Developer
IIIT Dharwad '26

| Platform | Link |
|----------|------|
| Portfolio | [aryanjaiswal.in](https://aryanjaiswal.in) |
| GitHub | [github.com/Aryanjstar](https://github.com/Aryanjstar) |
| LinkedIn | [linkedin.com/in/aryanjstar](https://linkedin.com/in/aryanjstar) |
| Email | aryanjstar3@gmail.com |
| Instagram (Music) | [@notesbyaryan](https://instagram.com/notesbyaryan) |

---

## License

MIT License — see [LICENSE](LICENSE) for details.
