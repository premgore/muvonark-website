# Muvonark Talent Network

A modern, responsive marketing and talent website for **Muvonark** — an Indian technology company with 150+ professionals dedicated to building enterprise-grade software for startups and businesses worldwide.

---

## 🚀 About the Project

Muvonark Talent Network is the official web presence for Muvonark, showcasing the company's services, projects, insights, and career opportunities. The site is built as a single-page React application with client-side routing across seven distinct pages.

---

## 📁 Project Structure

```
Muvonark Talent Network/
├── src/
│   ├── main.tsx                  # React entry point
│   ├── app/
│   │   ├── App.tsx               # Root app with BrowserRouter & routes
│   │   └── components/
│   │       ├── Nav.tsx           # Navigation bar
│   │       ├── Footer.tsx        # Site footer
│   │       ├── HomePage.tsx      # Landing page
│   │       ├── ServicesPage.tsx  # Services overview
│   │       ├── ProjectsPage.tsx  # Portfolio / case studies
│   │       ├── InsightsPage.tsx  # Blog / articles
│   │       ├── AboutPage.tsx     # About us
│   │       ├── CareersPage.tsx   # Job listings & application form
│   │       ├── ContactPage.tsx   # Contact form
│   │       ├── ui/               # shadcn/ui component library
│   │       └── figma/            # Figma-exported helpers
│   ├── assets/
│   │   ├── Muvonark.png          # Company logo
│   │   └── projects/             # Project thumbnail images
│   └── styles/
│       ├── globals.css
│       ├── fonts.css
│       ├── tailwind.css
│       └── theme.css
├── index.html
├── vite.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── package.json
└── pnpm-workspace.yaml
```

---

## 🌐 Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, partner logos, services overview, stats counter, insights preview |
| `/services` | Services | Detailed breakdown of all 6 service offerings |
| `/projects` | Projects | Portfolio cards with project screenshots |
| `/insights` | Insights | Blog articles covering enterprise tech, AI, and student programs |
| `/about` | About | Company values, team composition, mentor profiles |
| `/careers` | Careers | Job listings (full-time, part-time, internship) + application form |
| `/contact` | Contact | Contact form and company information |

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 18 |
| Language | TypeScript |
| Bundler | Vite 6 |
| Routing | React Router 7 |
| Styling | Tailwind CSS 4 |
| UI Components | shadcn/ui + Radix UI |
| Icons | Lucide React |
| Animations | Motion (Framer Motion) |
| Charts | Recharts |
| Forms | React Hook Form |
| Package Manager | pnpm |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `>= 18`
- pnpm `>= 8`

### Installation
```bash
# Clone the repository
git clone https://github.com/your-org/muvonark-talent-network.git
cd muvonark-talent-network

# Install dependencies
pnpm install
```

### Development

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`.

### Production Build

```bash
pnpm build
```

Output will be generated in the `dist/` folder.

---

## 🎨 Design System

The project uses a consistent brand color palette:

| Token | Value | Usage |
|-------|-------|-------|
| Primary Dark | `#0D1B3E` | Hero backgrounds, headings |
| Primary Blue | `#2B7BE5` | Accents, CTAs, links |
| Light Background | `#F8F9FB` | Page backgrounds |
| Light Blue | `#EBF1FC` | Badges, highlights |

Custom fonts are configured via `src/styles/fonts.css` and the shadcn theme is defined in `default_shadcn_theme.css`.

---

## 🏢 Services Offered

- **Web Applications** — React, Next.js, Node.js, Django, FastAPI
- **ERP & CRM Systems** — Custom enterprise platforms with billing, inventory, and HR modules
- **AI & Automation** — ML model deployment, workflow automation, AI-powered features
- **DevOps & Cloud** — CI/CD pipelines, Docker, Kubernetes, AWS/GCP
- **Payment Integration** — Razorpay, Stripe, UPI, multi-gateway systems
- **UI/UX Design** — Pixel-perfect interfaces by senior designers

---

## 💼 Career Opportunities

The Careers page lists openings across three tracks:

- **Full-Time** — Senior Full-Stack Developer, DevOps Engineer, UI/UX Designer, Backend Engineer (Python)
- **Part-Time** — Frontend Developer, Data Analyst
- **Internships** — Frontend, Backend, UI/UX Design, Data Science

All roles are **Remote / India** based. Applications can be submitted directly through the site's built-in form.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for third-party asset credits.

---

## 📬 Contact

**Muvonark**  
Built in India, for the world.  
Visit the [Contact page](https://muvonark.com/contact) or reach out via the website