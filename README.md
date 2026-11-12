# Vishal Srinivasan - Developer Portfolio (React + Vite + TypeScript + Tailwind CSS)

A clean, stylish, modern, and high-performance portfolio website built for **Vishal Srinivasan** (Full-Stack MERN & Python Developer). Built with **React 18**, **Vite**, **TypeScript**, and **Tailwind CSS** with restrained, purposeful micro-interactions and zero chaotic animations for maximum readability and recruiter appeal.

---

## ✨ Features & Highlights

- **Modern Tech Stack**:
  - **React 18** with TypeScript for strong typing and maintainable modular architecture.
  - **Vite** for lightning-fast HMR and optimized production bundles.
  - **Tailwind CSS** + Custom Design Tokens for responsive, utility-first styling.
  - Pixel-perfect parity with the original portfolio design without any UI regressions or layout shifts.

- **Aesthetic & Balanced UI/UX**:
  - Clean typography hierarchy featuring **Inter** and **JetBrains Mono**.
  - Modern glassmorphic elements (`backdrop-filter: blur(14px)`).
  - Subtle, restrained hover states (card lift, soft glow, clean border transition).
  - High-speed 60fps GPU-accelerated scroll reveals.

- **Dark & Light Mode**:
  - One-click theme switcher in the navigation bar.
  - Automatically matches system color scheme (`prefers-color-scheme`).
  - Persists preference across sessions via `localStorage`.

- **Comprehensive Content (Reflecting Resume)**:
  - **Hero**: Quick stats, active availability badge, direct contact buttons, and 1-click clipboard copy.
  - **About Me**: Core engineering philosophy and technical strengths.
  - **Skills & Tech Stack**: Interactive filter pills (Frontend, Backend, Languages, Tools).
  - **Featured Projects**:
    - *MERN-Authentication System* (JWT, Bcrypt, Protected Routes, Middleware).
    - *Full-Stack Notes Application* (CRUD, Real-time Search, Responsive UI, MongoDB).
    - *Python OOP & Logic Modules*.
    - *Scalable REST API Backend Services*.
  - **Architecture Deep-Dive Modals**: Click "View Architecture Details" on projects to see endpoint tables, system workflows, and Mongoose schema design.
  - **Work Experience & Education Timeline**:
    - Python Internship at Livewire Training Services.
    - Master of Computer Applications (MCA) at Bharathiar University.
    - Bachelor of Computer Science (B.Sc CS, CGPA: 7.587) at Sengunthar Arts and Science College.
  - **Certifications & Workshops**:
    - 6-month MERN Stack Development Certification from Nucaza Innovations.
    - Artificial Intelligence Workshop from Novitech.
    - Python Programming Workshop from Besant Technologies.
  - **Contact Section**:
    - Direct Email, Phone/WhatsApp, LinkedIn, and GitHub cards with one-click copy buttons.
    - Direct message form delivered to `rsvishalgeetha@gmail.com` with auto-capitalization and loading states.
  - **ATS-Friendly Resume**:
    - Viewable in interactive React modal or standalone `/resume.html`.
    - Direct 1-click download of `Vishal_Srinivasan_Resume.pdf`.

---

## 🚀 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Navigate to `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized, production-ready bundle in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 File Structure

```text
port-folio/
├── public/                     # Static assets served at root
│   ├── favicon.svg             # VS Monogram vector icon
│   ├── favicon.png             # 32x32 favicon
│   ├── favicon.ico             # Classic icon
│   ├── apple-touch-icon.png    # iOS web clip icon
│   ├── resume.html             # Standalone ATS-friendly printable resume
│   └── Vishal_Srinivasan_Resume.pdf # Original resume PDF download
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.tsx          # Glassmorphic header with scrollspy & theme toggle
│   │   ├── Hero.tsx            # Intro bio, actions, connect bar & stat cards
│   │   ├── About.tsx           # Engineering philosophy & feature highlights
│   │   ├── Skills.tsx          # Categorized skills grid with instant filter tabs
│   │   ├── Projects.tsx        # Highlighted project cards with tech tags
│   │   ├── ProjectModal.tsx    # Architecture deep-dive modal
│   │   ├── Experience.tsx      # Work experience & education timelines
│   │   ├── Certifications.tsx  # Certification & workshop credentials
│   │   ├── Contact.tsx         # Direct contact details & auto-capitalizing form
│   │   ├── Footer.tsx          # Brand links & dynamic semantic copyright
│   │   ├── ResumeModal.tsx     # Embedded executive resume view & download
│   │   ├── BackToTop.tsx       # Smooth floating scroll-to-top button
│   │   └── Toast.tsx           # Toast alert notification
│   ├── data/
│   │   └── portfolioData.ts    # Centralized portfolio content & metadata
│   ├── types/
│   │   └── portfolio.ts        # TypeScript interfaces & types
│   ├── App.tsx                 # Root application state & composition
│   ├── main.tsx                # React DOM entry point
│   └── index.css               # Tailwind CSS directives & custom design system
├── index.html                  # Vite HTML entry point
├── package.json                # Project dependencies & scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS theme extension
├── tsconfig.json               # TypeScript project configuration
├── tsconfig.node.json          # TypeScript node tooling configuration
└── vite.config.ts              # Vite bundler configuration
```

---

## 📬 Contact Information
- **Name:** Vishal Srinivasan
- **Email:** [rsvishalgeetha@gmail.com](mailto:rsvishalgeetha@gmail.com)
- **Phone:** +91 7708800758
- **LinkedIn:** [linkedin.com/in/r-s-vishal-srinivasan](https://www.linkedin.com/in/r-s-vishal-srinivasan-78654326a)
- **GitHub:** [github.com/Vishalsrinivasan007](https://github.com/Vishalsrinivasan007)
