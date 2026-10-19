/**
 * Technical Portfolio Data for T.M. Wasif Jamee
 * 100% Verified against real source code in Wasif's repositories:
 * - ReliefAI: Next.js 16.4, @google/generative-ai (Gemini SDK), Jose (JWT), Mongoose, Zod, automated security tests
 * - BazarDor: Next.js 16.4, better-auth, better-sqlite3, TailwindCSS 4, React Hot Toast
 * - FitLog: Next.js 16.3, React 19, React Compiler, LocalStorage, React Icons, React-Toastify
 * - DevStack: React, Vite, TailwindCSS 4, DaisyUI 5, Penpot & Figma UI
 * - Story-Scene: Modern C++, OpenGL, GLUT
 */

export const personalInfo = {
  name: "T.M. Wasif Jamee",
  shortName: "Wasif",
  title: "Software Engineer Intern • Full Stack Developer • AI Engineer",
  institution: "American International University-Bangladesh (AIUB)",
  degree: "B.Sc. in Computer Science & Engineering",
  location: "Dhaka, Bangladesh (Relocation & Remote Ready)",
  email: "wasifjamee05@gmail.com",
  github: "https://github.com/Wasif109160",
  githubUsername: "Wasif109160",
  linkedin: "https://www.linkedin.com/in/t-m-wasif-jamee-687094297/",
  availability: "Open to Software Engineering Internships & Remote Opportunities",
  targetRoles: [
    "Software Engineer Intern",
    "MERN Stack Developer",
    "AI + Full Stack Engineering",
    "AIUB CSE Student"
  ],
  bio: "Computer Science & Engineering student at AIUB building robust web platforms, AI-assisted crisis coordination systems, and interactive developer tools. Experienced in TypeScript, Next.js 16, Node.js, and algorithmic problem solving in C++.",
  avatar: "/images/profile.jpeg",
  resumeUrl: "/Wasif_Jamee_Resume.pdf"
};

export const githubTelemetry = {
  publicRepos: 16,
  followers: 2,
  following: 3,
  totalStars: 0,
  totalForks: 0,
  topLanguages: [
    { name: "TypeScript", percentage: 38, color: "#3178C6" },
    { name: "JavaScript", percentage: 22, color: "#F7DF1E" },
    { name: "C++", percentage: 18, color: "#00599C" },
    { name: "C#", percentage: 9, color: "#239120" },
    { name: "Java", percentage: 8, color: "#ED8B00" },
    { name: "HTML/CSS", percentage: 5, color: "#E34F26" }
  ]
};

export const metrics = [
  { label: "Public Repositories", value: 16, suffix: "+", desc: "Public codebases on GitHub (@Wasif109160)" },
  { label: "Flagship Architectures", value: 4, suffix: "", desc: "ReliefAI, BazarDor, FitLog & DevStack" },
  { label: "Automated Test Suites", value: 3, suffix: " suites", desc: "Auth RBAC & Fail-Closed Security Tests" },
  { label: "Undergraduate Degree", value: 2026, suffix: "", desc: "B.Sc. in CSE @ AIUB (In Progress)" }
];

export const projects = [
  {
    id: "reliefai",
    title: "ReliefAI",
    tagline: "AI-Assisted Multi-Agency Disaster Response & Crisis Coordination Platform",
    category: "ai",
    categoryLabel: "AI & Crisis Platform",
    featured: true,
    status: "Production Ready",
    techStack: [
      "Next.js 16.4",
      "TypeScript",
      "@google/generative-ai (Gemini)",
      "MongoDB (Mongoose)",
      "Jose (JWT RBAC)",
      "Zod",
      "TailwindCSS v4",
      "Recharts"
    ],
    metrics: { latency: "Next.js App Router", scale: "Multi-Role RBAC" },
    summary: "A disaster management platform engineered to coordinate humanitarian operations during natural crises with Gemini AI triage, shelter routing, and role-based access for Citizens, Volunteers, NGOs, and Government authorities.",
    repoUrl: "https://github.com/Wasif109160/ReliefAI",
    stars: 0,
    forks: 0,
    lastPushed: "October 2026",
    
    // 100% Defensible Engineering Case Study
    caseStudy: {
      problemStatement: "During catastrophic emergencies like floods or cyclones, phone lines get overwhelmed. Citizens struggle to communicate structured incident details, and relief organizations lack unified triage to prioritize critical rescues.",
      solution: "Engineered ReliefAI: a centralized platform that captures geo-tagged SOS reports, processes unstructured emergency descriptions through Google Gemini AI for severity classification, and routes resources via authenticated dashboards.",
      techArchitecture: "Next.js 16.4 App Router architecture with server-side route handlers, Google Generative AI SDK (@google/generative-ai), Mongoose models with connection pooling, and client-side visualization with Recharts and Framer Motion.",
      myContribution: "Architected the backend route handlers, integrated Google Gemini SDK for automated incident severity assessment, implemented Jose JWT token authentication with role-based middleware, and wrote automated security verification tests.",
      challengesSolved: "Implemented a fail-closed authentication policy with custom security tests (`tests/security/auth-rbac.test.ts`), ensuring unauthorized users cannot access government or NGO triage portals if auth headers are malformed.",
      futureImprovements: "Implementing Service Worker background sync for queuing citizen SOS distress signals when connectivity drops temporarily."
    }
  },
  {
    id: "bazardor",
    title: "BazarDor",
    tagline: "Market Commodity Price Tracker & Regional Intelligence Platform",
    category: "web",
    categoryLabel: "Web & Distributed Systems",
    featured: true,
    status: "Active System",
    techStack: [
      "Next.js 16.4",
      "TypeScript",
      "Better-Auth",
      "Better-SQLite3",
      "TailwindCSS v4",
      "React Hot Toast",
      "Lucide React"
    ],
    metrics: { latency: "Embedded SQLite Reads", scale: "Zero Layout Shift" },
    summary: "A market surveillance web application tracking essential grocery and commodity fluctuations across regional markets with fast embedded SQLite storage and modern Better-Auth authentication.",
    repoUrl: "https://github.com/Wasif109160/B14-A7-Bazar-Dor-main",
    stars: 0,
    forks: 0,
    lastPushed: "October 2026",

    caseStudy: {
      problemStatement: "Commodity pricing in local markets changes frequently without centralized public tracking, making it difficult for consumers to recognize fair prices and track inflationary spikes.",
      solution: "Built BazarDor as an accessible market price tracker with instant search, historical price delta views, and user-authenticated market report contributions.",
      techArchitecture: "Next.js 16.4 Server Components querying an embedded SQLite database (`better-sqlite3`), paired with `better-auth` session management and TailwindCSS v4 styling.",
      myContribution: "Configured the Better-Auth authentication pipeline, designed the SQLite database schema (`auth.db`), built responsive commodity listing components, and integrated toast feedback.",
      challengesSolved: "Managed database connection lifecycles in Next.js development and production environments to prevent file lock contention on SQLite during hot module reloads.",
      futureImprovements: "Adding price alerts via email notifications when user-tracked staple goods drop or spike past specified thresholds."
    }
  },
  {
    id: "fitlog",
    title: "FitLog",
    tagline: "Workout Volume & Progressive Overload Tracking Application",
    category: "web",
    categoryLabel: "Web & Distributed Systems",
    featured: true,
    status: "Production Ready",
    techStack: [
      "Next.js 16.3",
      "React 19",
      "Babel React Compiler",
      "TailwindCSS v4",
      "LocalStorage",
      "React Icons",
      "React-Toastify"
    ],
    metrics: { latency: "Local-First Instant", scale: "Dynamic Exercise Builder" },
    summary: "A streamlined, local-first workout tracker built with React 19 and Next.js 16 for logging exercises, tracking set progression, and visualizing workout consistency.",
    repoUrl: "https://github.com/Wasif109160/Fitlog",
    stars: 0,
    forks: 0,
    lastPushed: "September 2026",

    caseStudy: {
      problemStatement: "Many fitness apps require paid subscriptions, invasive tracking, and forced cloud logins just to record basic gym workout sets and reps.",
      solution: "Created FitLog as an intuitive, client-side, local-first application where workout logs are saved instantly in the browser without account friction.",
      techArchitecture: "Modular React 19 architecture with experimental React Compiler optimizations, TailwindCSS v4 design tokens, and LocalStorage state persistence.",
      myContribution: "Built the dynamic exercise log builder (sets, weight, reps), designed the responsive mobile interface, and implemented React-Toastify notifications on completed sets.",
      challengesSolved: "Structured robust JSON serialization and parsing routines to safeguard against corrupted LocalStorage schemas across app updates.",
      futureImprovements: "Adding JSON export and import capabilities so athletes can back up and transfer their workout history across devices."
    }
  },
  {
    id: "devstack",
    title: "DevStack",
    tagline: "Interactive Developer Ecosystem & Software Toolchain Explorer",
    category: "web",
    categoryLabel: "Web & Distributed Systems",
    featured: true,
    status: "Production Ready",
    techStack: [
      "React",
      "Vite",
      "TailwindCSS v4",
      "DaisyUI v5",
      "React-Toastify",
      "Figma & Penpot"
    ],
    metrics: { latency: "Vite HMR Sub-second", scale: "Toolchain Matrix" },
    summary: "An interactive developer ecosystem explorer that contrasts modern frontend, backend, and database toolchains with UI wireframes designed in Penpot and Figma.",
    repoUrl: "https://github.com/Wasif109160/PH-14-AS-5",
    stars: 0,
    forks: 0,
    lastPushed: "September 2026",

    caseStudy: {
      problemStatement: "Early-career developers and student teams often struggle to understand how various frontend frameworks, UI component libraries, and backend tools combine into a functional stack.",
      solution: "Engineered DevStack: an interactive explorer that visualizes developer tool combinations with live component previews and design references.",
      techArchitecture: "Vite-powered React client utilizing TailwindCSS v4 and DaisyUI v5 utility components for rapid UI composition.",
      myContribution: "Created the interactive stack selection controls, structured the design wireframes in Figma and Penpot (`DevStack.fig`, `DevStack.penpot`), and built the responsive interface.",
      challengesSolved: "Configured Vite 8 with TailwindCSS 4 and DaisyUI 5, ensuring correct post-processing without build-time utility collisions.",
      futureImprovements: "Adding interactive links to official documentation and recommended starter repositories for each selected stack."
    }
  },
  {
    id: "storyscene",
    title: "Story-Scene OpenGL Simulation",
    tagline: "Hardware-Accelerated 3D/2D Graphics Animation in C++",
    category: "graphics",
    categoryLabel: "Graphics & Systems",
    featured: false,
    status: "Completed",
    techStack: [
      "C++",
      "OpenGL",
      "GLUT",
      "Matrix Math",
      "Computer Graphics"
    ],
    metrics: { latency: "Hardware 60 FPS", scale: "7-Scene Pipeline" },
    summary: "A 7-scene animated graphics simulation written in modern C++ directly interfacing with OpenGL and GLUT, implementing custom matrix transformations and lighting algorithms.",
    repoUrl: "https://github.com/Wasif109160/Story-Scene",
    stars: 0,
    forks: 0,
    lastPushed: "March 2026",

    caseStudy: {
      problemStatement: "Understanding graphics hardware and foundational computer science requires moving beyond high-level DOM abstractions to understand vertex transformations, coordinate spaces, and frame rendering loops.",
      solution: "Developed Story-Scene: a procedural 7-scene narrative simulation utilizing C++ and OpenGL primitives with real-time coordinate transformations.",
      techArchitecture: "C++ application leveraging standard OpenGL and GLUT libraries with double-buffered rendering and timer callback animation loops.",
      myContribution: "Engineered the hierarchical transformation matrices (translation, rotation, scaling) across all 7 scenes, configured lighting primitives, and implemented camera projection math.",
      challengesSolved: "Maintained consistent animation choreography across scenes by synchronizing coordinate updates with delta-time callbacks in the main GLUT loop.",
      futureImprovements: "Porting the scene geometry into modern shader-based OpenGL (GLSL) with custom vertex and fragment shaders."
    }
  }
];

export const skillCategories = [
  {
    name: "Core Programming Languages",
    icon: "code",
    skills: [
      { name: "C++", level: 85, desc: "Algorithmic Problem Solving, OOP, Pointers, Memory Management" },
      { name: "TypeScript", level: 90, desc: "Strict Types, Generics, Interfaces, Next.js Server Components" },
      { name: "JavaScript (ES6+)", level: 92, desc: "Async/Await, Event Loop, DOM, Functional Methods" },
      { name: "Python", level: 82, desc: "Scripting, Automation, AI Integrations, Data Processing" },
      { name: "Java", level: 80, desc: "OOP Fundamentals, Class Hierarchies, Enterprise Lab Projects" },
      { name: "C#", level: 78, desc: ".NET Fundamentals, Software Lab Engineering" }
    ]
  },
  {
    name: "Frontend & UI Engineering",
    icon: "layout",
    skills: [
      { name: "Next.js 16 (App Router)", level: 90, desc: "Server Components, Route Handlers, Metadata, Layouts" },
      { name: "React 19", level: 92, desc: "Hooks, Custom Reducers, Context, Virtual DOM" },
      { name: "Tailwind CSS v4", level: 90, desc: "Utility Tokens, Responsive Breakpoints, Dark Mode" },
      { name: "Modern HTML5 & Vanilla CSS", level: 94, desc: "Semantic Markup, CSS Grid, Flexbox, Custom Properties" },
      { name: "Vite", level: 88, desc: "Fast Bundling, ESM Modules, Dev Server Configuration" }
    ]
  },
  {
    name: "Backend & AI Integrations",
    icon: "server",
    skills: [
      { name: "Node.js", level: 88, desc: "Event-driven runtime, NPM Ecosystem, Scripting" },
      { name: "Next.js API Route Handlers", level: 90, desc: "RESTful Endpoints, Request Validation, Error Handling" },
      { name: "Google Generative AI SDK", level: 85, desc: "Gemini API Integration, Prompt Structuring, Severity Triage" },
      { name: "Jose (JWT) & Authentication", level: 86, desc: "Token Signing, Verification, Role-Based Access Middleware" },
      { name: "Zod", level: 88, desc: "Runtime Type Validation, Form & API Payload Parsing" }
    ]
  },
  {
    name: "Databases & Storage",
    icon: "database",
    skills: [
      { name: "MongoDB & Mongoose", level: 86, desc: "Document Schemas, Indexes, Aggregations, Connection Pooling" },
      { name: "SQLite (Better-SQLite3)", level: 84, desc: "Embedded Database, ACID Queries, Next.js Server Integration" },
      { name: "MySQL", level: 80, desc: "Relational Schemas, Primary/Foreign Keys, Normalization" }
    ]
  },
  {
    name: "Tools, Testing & Design",
    icon: "terminal",
    skills: [
      { name: "Git & GitHub", level: 90, desc: "Branching, Pull Requests, Semantic Commits, Repository Hygiene" },
      { name: "Node Test Runner (tsx --test)", level: 82, desc: "Automated Auth & RBAC Security Verification Tests" },
      { name: "Postman", level: 88, desc: "API Endpoint Testing, Header & Payload Verification" },
      { name: "VS Code & Windows / Linux", level: 90, desc: "Development Toolchains, Shell Scripting, Debugging" },
      { name: "Figma & Penpot", level: 82, desc: "Wireframing, Component Hierarchy, UI Prototyping" }
    ]
  }
];

export const education = {
  institution: "American International University-Bangladesh (AIUB)",
  degree: "Bachelor of Science in Computer Science & Engineering (CSE)",
  timeline: "Undergraduate (In Progress)",
  location: "Dhaka, Bangladesh",
  highlights: [
    "Rigorous grounding in Data Structures, Algorithm Complexity, Discrete Mathematics, and Computer Architecture.",
    "Specialized coursework in Artificial Intelligence, Database Management Systems, and Object-Oriented Software Engineering.",
    "Active participant in university software engineering labs and team project architectures."
  ]
};

export const terminalCommands = {
  help: "Available commands:\n  whoami      - Executive summary & candidate profile\n  skills      - Technical proficiency matrix\n  projects    - Flagship software engineering projects\n  github      - Real GitHub telemetry (@Wasif109160)\n  resume      - Resume details & download\n  education   - Academic background & university\n  contact     - Reach out for internship & job offers\n  status      - Current recruitment availability\n  clear       - Clear terminal output",
  whoami: "T.M. Wasif Jamee\nTarget: Software Engineer Intern | Full Stack Developer | AI Engineer\nUniversity: American International University-Bangladesh (AIUB)\nLocation: Dhaka, Bangladesh (Open to Remote & Global Relocation)\nFocus: Production Next.js 16 platforms, Gemini AI integrations, and algorithmic rigor in C++ and TypeScript.",
  skills: "Verified Technical Proficiencies:\n• Languages: C++, TypeScript, JavaScript (ES6+), Python, Java, C#\n• Web & UI: Next.js 16 (App Router), React 19, TailwindCSS v4, Vanilla CSS, Vite\n• Backend & AI: Next.js API Routes, Google Generative AI (Gemini), Jose (JWT), Zod\n• Databases: MongoDB (Mongoose), SQLite (Better-SQLite3), MySQL\n• Tools & Tests: Git, GitHub, tsx test runner, Postman, Figma, Penpot",
  projects: "Flagship Engineering Projects:\n1. ReliefAI    - AI Disaster Response Platform [Next.js 16.4, Gemini AI, Mongoose, Jose JWT]\n2. BazarDor    - Market Price Tracker [Next.js 16.4, Better-Auth, Better-SQLite3]\n3. FitLog      - Workout Volume Tracker [Next.js 16.3, React 19, React Compiler]\n4. DevStack    - Developer Toolchain Explorer [React, Vite, TailwindCSS 4, DaisyUI 5]\n5. StoryScene  - Procedural Graphics Simulation [C++, OpenGL, GLUT]",
  github: "GitHub Telemetry (@Wasif109160):\n• Public Repositories: 16\n• Verified Languages: TypeScript, JavaScript, C++, C#, Java\n• Profile URL: https://github.com/Wasif109160",
  resume: "Resume & Credentials:\n• File: /Wasif_Jamee_Resume.pdf\n• Format: Production-ready PDF (209 KB)\n• Status: Available for download and browser preview.",
  education: "American International University-Bangladesh (AIUB)\nDegree: B.Sc. in Computer Science & Engineering (CSE)\nCoursework: Data Structures, Algorithms, AI, DBMS, Software Engineering Labs.",
  contact: "Direct Communication Channels:\n• Email: wasifjamee05@gmail.com\n• LinkedIn: https://www.linkedin.com/in/t-m-wasif-jamee-687094297/\n• GitHub: https://github.com/Wasif109160\n• Availability: Open to Software Engineering Internships (Summer/Fall 2026/2027)",
  status: "STATUS: ACTIVE CANDIDATE 🟢\nTarget: Software Engineer Intern / Junior Full-Stack Developer\nPreferences: Remote or Onsite (Worldwide relocation ready)\nNotice Period: Immediate / Flexible"
};
