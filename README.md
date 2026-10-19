# T.M. Wasif Jamee — Engineering Portfolio & Systems Showcase

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A high-performance, recruiter-ready, hackathon-grade developer portfolio and engineering showcase for **T.M. Wasif Jamee** — AI Engineer, MERN Stack Developer, and Computer Science & Engineering undergraduate at American International University-Bangladesh (AIUB).

---

## 🚀 Key Highlights & Architecture

- **Code-Native Engineering Showcase**: Zero fake cover images or placeholder mockups. Built strictly using existing real project assets (`/images/profile.jpeg`), structured telemetry cards, and real repository links.
- **Interactive Recruiter Console**: Built-in CLI terminal supporting commands (`help`, `whoami`, `projects`, `skills`, `education`, `status`, `contact`) and clickable command chips.
- **System Design Deep-Dive**: Visual interactive state pipeline illustrating the real-time data ingestion and dispatch flow for **ReliefAI** (Citizen SOS -> AI Triage -> Geospatial Solver -> Socket.IO -> Command Center).
- **Architecture Inspection Modal**: In-depth modal dialog allowing recruiters and engineers to inspect component architecture and design decisions for every flagship system.
- **Dynamic Typewriter & Animated Counters**: Smooth micro-interactions utilizing `requestAnimationFrame` and `IntersectionObserver`.
- **Dark & Light Mode**: Seamless glassmorphism theme engine with persistent state storage in `localStorage`.
- **1-Click Communication**: Instant clipboard email copy with visual toast notifications and pre-filled email dispatch routing.
- **Strict Accessibility & SEO**: Semantic HTML5 hierarchy, OpenGraph metadata, ARIA labels, responsive mobile drawer, and keyboard-navigable dialogs.

---

## 🛠️ Project Structure

```ascii
wasif/
├── public/
│   └── images/
│       └── profile.jpeg          # Authentic high-resolution portrait
├── src/
│   ├── data.js                   # Structured portfolio data, metrics, projects, skills
│   ├── main.js                   # Interactive logic, CLI terminal, counters, modal
│   └── style.css                 # Glassmorphic CSS design system, dark/light themes
├── index.html                    # Semantic HTML5 entrypoint with SEO meta tags
├── package.json                  # Scripts & dependencies (Vite)
├── .gitignore                    # Production git ignores
└── README.md                     # Comprehensive project documentation
```

---

## ⚡ How to Run the Project

### Prerequisites
- Node.js (v18+ recommended, tested on v24)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
The local server will start immediately at:
```
http://localhost:5173/
```

### 3. Build for Production
```bash
npm run build
```
This generates an optimized, minified production build inside the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📬 Contact & Links

- **Name:** T.M. Wasif Jamee
- **Email:** [wasifjamee05@gmail.com](mailto:wasifjamee05@gmail.com)
- **LinkedIn:** [https://www.linkedin.com/in/t-m-wasif-jamee-687094297/](https://www.linkedin.com/in/t-m-wasif-jamee-687094297/)
- **GitHub:** [https://github.com/Wasif109160](https://github.com/Wasif109160)
- **Institution:** American International University-Bangladesh (AIUB)
