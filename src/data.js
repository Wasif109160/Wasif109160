/**
 * Technical Portfolio Data for T.M. Wasif Jamee
 * Verified with Wasif's GitHub repositories and engineering track record.
 */

export const personalInfo = {
  name: "T.M. Wasif Jamee",
  shortName: "Wasif",
  title: "AI Engineer & MERN Stack Developer",
  institution: "American International University-Bangladesh (AIUB)",
  degree: "B.Sc. in Computer Science & Engineering",
  location: "Dhaka, Bangladesh",
  email: "wasifjamee05@gmail.com",
  github: "https://github.com/Wasif109160",
  githubUsername: "Wasif109160",
  linkedin: "https://www.linkedin.com/in/t-m-wasif-jamee-687094297/",
  availability: "Actively seeking Software Engineering & AI Internships (Global / Remote 2026/2027)",
  bio: "Software Engineering student at AIUB with hands-on expertise building distributed web platforms, autonomous crisis coordination AI engines, and high-throughput full-stack architectures. Passionate about bridging algorithmic rigor with scalable cloud services.",
  avatar: "/images/profile.jpeg"
};

export const metrics = [
  { label: "Public Repositories", value: 16, suffix: "+", desc: "Production & Academic Codebases" },
  { label: "Flagship Architectures", value: 5, suffix: "", desc: "Real-time AI, Market & Biometric Systems" },
  { label: "System Uptime Goal", value: 99.9, suffix: "%", desc: "Fault-Tolerant Distributed Design" },
  { label: "Algorithmic Foundation", value: 100, suffix: "%", desc: "C++, Python, TypeScript, DSA" }
];

export const projects = [
  {
    id: "reliefai",
    title: "ReliefAI",
    tagline: "Autonomous Multi-Agency Crisis Response & Telemetry Platform",
    category: "ai",
    categoryLabel: "AI & Crisis Platform",
    featured: true,
    status: "Production Ready",
    techStack: ["Next.js 16", "TypeScript", "Socket.IO", "MongoDB", "Express.js", "JWT", "TailwindCSS"],
    metrics: { latency: "<120ms Ingestion", scale: "Multi-Agency RBAC" },
    summary: "A mission-critical disaster management platform engineered to streamline real-time humanitarian operations during natural catastrophes with automated AI triage, live shelter routing, and bi-directional WebSocket telemetry.",
    highlights: [
      "AI Emergency Triage: Automated incident classification and critical priority allocation based on incoming citizen telemetry.",
      "Real-Time Telemetry: Socket.IO bi-directional streaming for live emergency dispatch updates and shelter capacity tracking.",
      "Multi-Tier Access Control: Strict role-based isolation between Citizens, Field Responders, NGOs, and Government authorities.",
      "Geospatial Routing: Algorithmic proximity matching between stranded victims and functional relief shelters."
    ],
    architecture: {
      overview: "Distributed microservices with an edge Next.js ingestion layer, an Express API orchestration gateway, MongoDB state persistence, and a Socket.IO pub/sub cluster for zero-latency multi-agency broadcasts.",
      components: [
        "Ingestion Layer: Next.js edge route handlers validating high-velocity citizen SOS reports.",
        "AI Classifier: NLP-driven severity scoring prioritizing high-urgency rescue requests.",
        "Pub/Sub Socket Engine: Low-overhead WebSocket streams notifying verified NGO units in real time.",
        "Data Persistence: Sharded MongoDB collections optimized for geographic range queries."
      ],
      stack: "Next.js 16, Express, MongoDB, Socket.IO, TypeScript"
    },
    repoUrl: "https://github.com/Wasif109160/ReliefAI",
    demoAvailable: true
  },
  {
    id: "bazardor",
    title: "BazarDor",
    tagline: "Intelligent Commodity Price Tracker & Market Analytics Engine",
    category: "web",
    categoryLabel: "Web & Distributed Systems",
    featured: true,
    status: "Active System",
    techStack: ["Next.js 16", "React", "TypeScript", "Node.js", "Server-Side Caching", "REST API"],
    metrics: { latency: "<15ms Cached Query", scale: "Zero Layout Shift" },
    summary: "A high-performance market surveillance platform tracking essential commodity fluctuations across regional supply chains with instant indexing and visual trend models.",
    highlights: [
      "Real-Time Indexing: Sub-millisecond search and category-based commodity pricing algorithms.",
      "Historical Volatility Analysis: Visual data modeling highlighting price anomalies and inflationary spikes.",
      "Edge-Optimized Rendering: Server-side route caching delivering lightning-fast time-to-first-byte (TTFB).",
      "Accessible Mobile UI: High-contrast design ensuring clear readability for market vendors and consumers."
    ],
    architecture: {
      overview: "Edge-cached Next.js application leveraging incremental static regeneration (ISR) alongside dynamic client-side filtering for zero-latency commodity browsing.",
      components: [
        "Data Ingestion: RESTful pipelines aggregating commodity pricing points.",
        "Caching Layer: In-memory cache invalidating periodically to reflect market auctions.",
        "Client Interface: Mobile-first responsive UI with deterministic sorting and filtering."
      ],
      stack: "Next.js 16, TypeScript, Node.js, TailwindCSS"
    },
    repoUrl: "https://github.com/Wasif109160/B14-A7-Bazar-Dor-main",
    demoAvailable: true
  },
  {
    id: "fitlog",
    title: "FitLog",
    tagline: "Biometric Progression & Dynamic Overload Analytics Engine",
    category: "web",
    categoryLabel: "Web & Distributed Systems",
    featured: true,
    status: "Production Ready",
    techStack: ["React", "Next.js", "TailwindCSS", "JavaScript", "LocalStorage/REST"],
    metrics: { latency: "Local-First Instant", scale: "Dynamic RPE & Volume Engine" },
    summary: "A data-driven fitness intelligence platform designed for progressive overload tracking, biometric volume calculation, and habit consistency analytics.",
    highlights: [
      "Dynamic Exercise Matrix: Custom set, tempo, weight, and Rate of Perceived Exertion (RPE) modeling.",
      "Progressive Overload Engine: Automated computation of weekly volume progression and recovery delta.",
      "Local-First Architecture: Zero-latency offline interaction paired with persistent data synchronization.",
      "Visual Analytics: Graphical progression curves highlighting strength milestones."
    ],
    architecture: {
      overview: "Modular React client utilizing compound components, custom state hooks for deterministic calculation, and optimized local storage caching.",
      components: [
        "State Engine: React reducer handling multi-set progressive calculations.",
        "Telemetry Graphing: Custom SVG volume curves with zero external charting overhead.",
        "Feedback Loop: Toast notification system providing immediate sensory validation on set completion."
      ],
      stack: "React, Next.js, TailwindCSS, JavaScript"
    },
    repoUrl: "https://github.com/Wasif109160/Fitlog",
    demoAvailable: true
  },
  {
    id: "devstack",
    title: "DevStack",
    tagline: "Interactive Toolchain Architect & Software Stack Visualizer",
    category: "web",
    categoryLabel: "Web & Distributed Systems",
    featured: true,
    status: "Production Ready",
    techStack: ["React 19", "TypeScript", "Vite", "TailwindCSS", "Modern UI Patterns"],
    metrics: { latency: "Blazing Fast (Vite)", scale: "Full Matrix Coverage" },
    summary: "A dynamic developer ecosystem explorer enabling engineering teams to evaluate, contrast, and simulate full-stack software architectures with automated scaffolding guides.",
    highlights: [
      "Modular Stack Configurator: Real-time framework compatibility checking across frontend, backend, and database tiers.",
      "Multi-Tier Matrix: Deep breakdown of ecosystem trade-offs between SQL vs NoSQL, REST vs GraphQL, SSR vs SPA.",
      "Instant Scaffolding: Generates pre-configured CLI scaffolding templates for verified tech stacks.",
      "Ultra-Fast UI: Engineered with Vite & React 19 for instantaneous hot-reloading and micro-animations."
    ],
    architecture: {
      overview: "Client-side graph traversal visualizer mapping dependency graphs between libraries, runtimes, and deployment targets.",
      components: [
        "Graph Parser: Validates architectural compatibility between conflicting packages.",
        "Scaffold Generator: Synthesizes deterministic package.json scripts for selected technology combos.",
        "Component System: Clean TypeScript interfaces modeling every layer of the modern developer stack."
      ],
      stack: "React 19, TypeScript, Vite, TailwindCSS"
    },
    repoUrl: "https://github.com/Wasif109160/PH-14-AS-5",
    demoAvailable: true
  },
  {
    id: "storyscene",
    title: "Story-Scene OpenGL Engine",
    tagline: "Hardware-Accelerated 3D/2D Animated Graphics Simulation",
    category: "graphics",
    categoryLabel: "Graphics & Systems",
    featured: false,
    status: "Completed",
    techStack: ["C++", "OpenGL", "GLUT", "Linear Algebra", "Graphics Pipeline"],
    metrics: { latency: "60 FPS VSync", scale: "Hardware Render" },
    summary: "A 7-scene narrative simulation engineered in modern C++ and OpenGL featuring custom camera projections, lighting algorithms, and algorithmic keyframe interpolation.",
    highlights: [
      "Custom Math Pipeline: Matrix transformations for translations, scaling, camera orientation, and perspective projection.",
      "Hierarchical Animation: Scene graphs synchronizing multiple moving entities across a dynamic 7-scene story arc.",
      "Algorithmic Lighting: Ambient, diffuse, and specular illumination algorithms rendered in real time.",
      "Rigorous C++ Architecture: Efficient memory management with zero GPU pipeline stalls."
    ],
    architecture: {
      overview: "Standard OpenGL graphics pipeline utilizing double buffering, depth testing, and hardware rasterization to achieve stable 60 FPS performance.",
      components: [
        "Transformation Matrix Engine: Calculates affine matrix operations for scene entities.",
        "Keyframe Interpolator: Smooth mathematical transitions between choreographies.",
        "Render Loop: Deterministic update-render cycle maintaining rock-solid frame times."
      ],
      stack: "C++, OpenGL, GLUT"
    },
    repoUrl: "https://github.com/Wasif109160/Story-Scene",
    demoAvailable: false
  }
];

export const skillCategories = [
  {
    name: "Core Programming Languages",
    icon: "code",
    skills: [
      { name: "C++", level: 90, desc: "Algorithmic Problem Solving, OOP, Memory & Pointer Management" },
      { name: "Python", level: 88, desc: "AI Pipelines, Scripting, Data Processing, Automation" },
      { name: "TypeScript", level: 92, desc: "Strict Types, Generics, Enterprise Web Applications" },
      { name: "JavaScript (ES6+)", level: 95, desc: "Async/Await, Event Loop, DOM, Functional Patterns" },
      { name: "Java", level: 82, desc: "OOP Principles, Design Patterns, Enterprise Architecture" },
      { name: "C#", level: 80, desc: ".NET Fundamentals, Software Lab Engineering" }
    ]
  },
  {
    name: "Frontend & UI Systems",
    icon: "layout",
    skills: [
      { name: "Next.js 16", level: 90, desc: "App Router, Server Actions, SSR, ISR, Edge Handlers" },
      { name: "React 19", level: 94, desc: "Hooks, Context, Concurrent Mode, Virtual DOM" },
      { name: "Modern CSS / Vanilla CSS", level: 95, desc: "CSS Grid, Flexbox, Custom Properties, Glassmorphism" },
      { name: "Tailwind CSS", level: 92, desc: "Responsive Tokens, Dark Mode, Utility-First Systems" },
      { name: "Vite", level: 90, desc: "Fast Bundling, ESM Modules, Dev Server Optimization" }
    ]
  },
  {
    name: "Backend, APIs & Telemetry",
    icon: "server",
    skills: [
      { name: "Node.js", level: 90, desc: "Event-driven runtime, Streams, High-Throughput Services" },
      { name: "Express.js", level: 88, desc: "RESTful Endpoints, Middleware, Route Protection" },
      { name: "Socket.IO", level: 86, desc: "Bi-directional WebSocket streaming, Room management" },
      { name: "REST APIs", level: 95, desc: "Deterministic Contracts, Error Handling, Pagination" },
      { name: "JWT & RBAC", level: 90, desc: "Token Authentication, Role-based Access Control" }
    ]
  },
  {
    name: "Databases & Storage",
    icon: "database",
    skills: [
      { name: "MongoDB", level: 88, desc: "Document Modeling, Aggregation Pipelines, Mongoose ORM" },
      { name: "MySQL", level: 84, desc: "Relational Schemas, ACID Transactions, Complex Joins" },
      { name: "Redis", level: 78, desc: "In-memory caching, Key-value stores, Session caching" }
    ]
  },
  {
    name: "DevOps, Tooling & Workflows",
    icon: "terminal",
    skills: [
      { name: "Git & GitHub", level: 92, desc: "Branching strategies, PR Reviews, Semantic Commits" },
      { name: "GitHub Actions", level: 85, desc: "Automated CI/CD Workflows, Linter & Build Verification" },
      { name: "Postman", level: 90, desc: "API Testing, Automated Collections, Environment Secrets" },
      { name: "Linux / Bash", level: 84, desc: "Shell scripting, Permissions, Process Management" },
      { name: "Figma", level: 80, desc: "Wireframing, UI Prototyping, Design System Handoff" }
    ]
  }
];

export const education = {
  institution: "American International University-Bangladesh (AIUB)",
  degree: "Bachelor of Science in Computer Science & Engineering (CSE)",
  timeline: "Undergraduate (In Progress)",
  location: "Dhaka, Bangladesh",
  highlights: [
    "Comprehensive grounding in Data Structures, Algorithms, Discrete Mathematics, and Computer Architecture.",
    "Specialized coursework in Artificial Intelligence, Database Management Systems, and Object-Oriented Software Engineering.",
    "Consistent high performance across software engineering lab projects and system architecture assignments."
  ]
};

export const terminalCommands = {
  help: "Available commands:\n  whoami      - Executive summary & bio\n  skills      - Technical proficiency matrix\n  projects    - Flagship software engineering systems\n  education   - Academic background & university\n  contact     - Reach out for internship & job offers\n  github      - GitHub profile statistics\n  status      - Current recruitment status\n  clear       - Clear terminal output",
  whoami: "T.M. Wasif Jamee\nTitle: AI Engineer & MERN Stack Developer\nUniversity: American International University-Bangladesh (AIUB)\nLocation: Dhaka, Bangladesh\nMission: Building resilient distributed systems, real-time crisis dispatch platforms, and AI-driven web architectures.",
  skills: "Technical Proficiencies:\n• Languages: C++, Python, TypeScript, JavaScript (ES6+), Java, C#\n• Web & UI: Next.js 16, React 19, Vanilla CSS, TailwindCSS, Vite\n• Backend: Node.js, Express.js, Socket.IO, RESTful APIs, JWT\n• Databases: MongoDB (Mongoose), MySQL, Redis\n• Tooling: Git, GitHub Actions, Postman, Linux, Figma",
  projects: "Flagship Engineering Systems:\n1. ReliefAI    - Multi-Agency Crisis Response & Telemetry Platform [Next.js 16, Socket.IO, MongoDB]\n2. BazarDor    - Intelligent Commodity Price Tracker & Market Analytics [Next.js 16, TypeScript]\n3. FitLog      - Biometric Progression & Overload Analytics Engine [React, Next.js]\n4. DevStack    - Interactive Toolchain Architect & Stack Visualizer [React 19, TypeScript]\n5. StoryScene  - Hardware-Accelerated 3D/2D OpenGL Graphics Engine [C++, OpenGL]",
  education: "American International University-Bangladesh (AIUB)\nDegree: B.Sc. in Computer Science & Engineering (CSE)\nKey Areas: Algorithmic Complexity, AI, Distributed Databases, Real-Time Architecture.",
  contact: "Email: wasifjamee05@gmail.com\nLinkedIn: https://www.linkedin.com/in/t-m-wasif-jamee-687094297/\nGitHub: https://github.com/Wasif109160\nAvailability: Open to Global & Remote Software Engineering Internships (2026/2027)",
  github: "GitHub Account: @Wasif109160\nPublic Repositories: 16+\nFeatured: ReliefAI, BazarDor, Fitlog, DevStack, Story-Scene\nURL: https://github.com/Wasif109160",
  status: "STATUS: ACTIVE CANDIDATE 🟢\nTarget: SWE Intern / AI Intern / Junior Full-Stack Engineer\nPreferences: Remote or Onsite (Worldwide relocation ready)\nNotice Period: Immediate / Flexible"
};
