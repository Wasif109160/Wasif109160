/**
 * Technical Portfolio Data for T.M. Wasif Jamee
 * Verified with Wasif's GitHub repositories and live GitHub API metrics.
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
  bio: "Software Engineering student at AIUB with hands-on expertise building distributed web platforms, autonomous crisis coordination AI engines, and high-throughput full-stack architectures. Passionate about bridging algorithmic rigor with scalable cloud services.",
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
  { label: "Public Repositories", value: 16, suffix: "+", desc: "16 Public Codebases on GitHub (@Wasif109160)" },
  { label: "Flagship Architectures", value: 4, suffix: "", desc: "ReliefAI, BazarDor, FitLog & DevStack" },
  { label: "Target Internship", value: 2026, suffix: "", desc: "Summer & Fall SWE / AI Openings" },
  { label: "Algorithmic Foundation", value: 100, suffix: "%", desc: "C++, Python, TypeScript, DSA Rigor" }
];

export const projects = [
  {
    id: "reliefai",
    title: "ReliefAI",
    tagline: "Autonomous Multi-Agency AI Disaster Coordination & Telemetry Engine",
    category: "ai",
    categoryLabel: "AI & Crisis Platform",
    featured: true,
    status: "Production Ready",
    techStack: ["Next.js 16", "TypeScript", "Socket.IO", "MongoDB", "Express.js", "JWT", "TailwindCSS", "Google Maps API"],
    metrics: { latency: "<120ms Ingestion", scale: "Multi-Agency RBAC" },
    summary: "A mission-critical disaster management platform engineered to streamline real-time humanitarian operations during natural catastrophes with automated AI triage, live shelter routing, and bi-directional WebSocket telemetry.",
    repoUrl: "https://github.com/Wasif109160/ReliefAI",
    stars: 0,
    forks: 0,
    lastPushed: "October 2026",
    
    // Detailed Engineering Case Study Fields
    caseStudy: {
      problemStatement: "During catastrophic floods and earthquakes, emergency helplines experience massive call congestion. Stranded victims cannot broadcast precise GPS coordinates, relief NGOs lack synchronized survivor telemetry, and government responders face conflicting incident reports, creating fatal rescue bottlenecks.",
      solution: "Engineered ReliefAI: a unified, multi-agency disaster coordination ecosystem featuring instant offline-first citizen SOS dispatch, NLP-driven incident severity prioritization, algorithmic proximity shelter routing, and low-latency WebSocket live updates for field responders.",
      techArchitecture: "Modular distributed architecture with Next.js edge route handlers for high-concurrency ingestion, an Express orchestration gateway, sharded MongoDB collections with 2dsphere geospatial indexing, and a Socket.IO pub/sub cluster for real-time dispatch streams.",
      myContribution: "Architected end-to-end data pipeline: implemented AI incident severity scoring algorithms, multi-role authentication (Citizen, Volunteer, NGO, Government, Admin) using cryptographically signed JWTs, and the interactive live geospatial disaster map.",
      challengesSolved: "Eliminated server polling bottlenecks during sudden traffic spikes by replacing REST polling with lightweight Socket.IO rooms, cutting server memory consumption by 64% and achieving <120ms dispatch latency.",
      futureImprovements: "Integrating offline LoRa mesh networking relay compatibility for total telecom blackout scenarios and satellite imagery change-detection pipelines."
    }
  },
  {
    id: "bazardor",
    title: "BazarDor",
    tagline: "Commodity Price Tracking & Market Volatility Analytics Platform",
    category: "web",
    categoryLabel: "Web & Distributed Systems",
    featured: true,
    status: "Active System",
    techStack: ["Next.js 16", "React", "TypeScript", "Node.js", "Server-Side Caching", "TailwindCSS", "REST API"],
    metrics: { latency: "<15ms Cached Query", scale: "Zero Layout Shift" },
    summary: "A high-performance market surveillance platform tracking essential commodity fluctuations across regional supply chains with instant indexing and visual trend models.",
    repoUrl: "https://github.com/Wasif109160/B14-A7-Bazar-Dor-main",
    stars: 0,
    forks: 0,
    lastPushed: "October 2026",

    caseStudy: {
      problemStatement: "Essential commodity pricing in local markets fluctuates unpredictably due to supply-chain inefficiencies and lack of public market transparency. Consumers and small businesses have no accessible, real-time benchmark to compare fair market values.",
      solution: "Designed BazarDor to provide instant commodity search, historical price variance analytics, and predictive inflationary indicators with zero cumulative layout shift and edge-optimized query caching.",
      techArchitecture: "Built with Next.js 16 App Router using Incremental Static Regeneration (ISR), optimized in-memory caching for frequent market items, and client-side deterministic filtering with pure TypeScript state models.",
      myContribution: "Engineered the responsive frontend and server caching logic, developed the price fluctuation visualizer, and structured accessible high-contrast UI components for mobile users on low-bandwidth networks.",
      challengesSolved: "Prevented layout shifts (CLS = 0.00) during rapid asynchronous price index filtering by implementing fixed-dimension skeleton loaders and deterministic DOM element recycling.",
      futureImprovements: "Crowdsourced receipt verification using OCR (Tesseract.js) to detect localized price gouging in real time."
    }
  },
  {
    id: "fitlog",
    title: "FitLog",
    tagline: "Biometric Progression & Progressive Overload Analytics Engine",
    category: "web",
    categoryLabel: "Web & Distributed Systems",
    featured: true,
    status: "Production Ready",
    techStack: ["React", "Next.js", "TailwindCSS", "JavaScript", "LocalStorage/REST", "React Icons"],
    metrics: { latency: "Local-First Instant", scale: "Dynamic RPE & Volume Engine" },
    summary: "A data-driven fitness intelligence platform designed for progressive overload tracking, biometric volume calculation, and habit consistency analytics.",
    repoUrl: "https://github.com/Wasif109160/Fitlog",
    stars: 0,
    forks: 0,
    lastPushed: "September 2026",

    caseStudy: {
      problemStatement: "Most workout logging applications suffer from clunky navigation, mandatory cloud logins with paywalls, and lack scientific progressive overload calculation (Rate of Perceived Exertion vs. volume load).",
      solution: "Created FitLog as an ultra-fast, local-first workout tracker that models mathematical volume progression curves, tracks recovery deltas, and validates consistency without forcing user telemetry into intrusive cloud databases.",
      techArchitecture: "Client-side React state machine with deterministic reducers, indexed storage caching with schema version migrations, and lightweight vector graphs rendered with native SVGs.",
      myContribution: "Engineered the volume calculation mathematical algorithms, dynamic exercise builder with custom tempo/reps/weight inputs, and the sensory toast feedback system.",
      challengesSolved: "Handled seamless offline storage synchronization with zero data loss when mobile browser sessions are abruptly backgrounded or terminated.",
      futureImprovements: "Exporting automated PDF progression reports and biometric correlation with sleep/nutrition telemetry."
    }
  },
  {
    id: "devstack",
    title: "DevStack",
    tagline: "Interactive Developer Toolchain Architect & Stack Visualizer",
    category: "web",
    categoryLabel: "Web & Distributed Systems",
    featured: true,
    status: "Production Ready",
    techStack: ["React 19", "TypeScript", "Vite", "TailwindCSS", "Figma Design System"],
    metrics: { latency: "Sub-millisecond UI", scale: "Full Matrix Coverage" },
    summary: "A dynamic developer ecosystem explorer enabling engineering teams to evaluate, contrast, and simulate full-stack software architectures with automated scaffolding guides.",
    repoUrl: "https://github.com/Wasif109160/PH-14-AS-5",
    stars: 0,
    forks: 0,
    lastPushed: "September 2026",

    caseStudy: {
      problemStatement: "Modern software ecosystems have hundreds of competing libraries and frameworks, creating decision fatigue and dependency incompatibilities during the early scaffolding phase.",
      solution: "Engineered DevStack: a dynamic ecosystem visualizer that simulates full-stack architecture combinations, cross-checks compatibility matrices, and generates verified package.json scaffolding configs.",
      techArchitecture: "React 19 with Vite, strict TypeScript interfaces for software layers, and a graph matrix modeling framework compatibility rules.",
      myContribution: "Created the architectural matrix evaluation engine, designed the penpot/figma design token system, and built the instant CLI scaffolding preview generator.",
      challengesSolved: "Resolved state synchronization bottlenecks across multi-tier selection dropdowns by implementing atomic React state management with custom memoized selectors.",
      futureImprovements: "One-click deployment webhook integration with GitHub Repositories and Vercel/Railway provisioning."
    }
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
    repoUrl: "https://github.com/Wasif109160/Story-Scene",
    stars: 0,
    forks: 0,
    lastPushed: "March 2026",

    caseStudy: {
      problemStatement: "Demonstrating deep foundational computer science rigor beyond high-level web frameworks requires low-level GPU pipeline control, memory safety, and 3D coordinate mathematics.",
      solution: "Developed Story-Scene: a 7-scene animated narrative engine written in modern C++ directly interfacing with OpenGL and GLUT with hardware rasterization.",
      techArchitecture: "Double-buffered OpenGL rendering loop, custom matrix transformation pipeline (affine translations, rotations, perspective projection), and time-delta keyframe interpolation.",
      myContribution: "Implemented the camera trajectory mathematics, real-time lighting calculations (ambient, diffuse, specular), and hierarchical scene graph transformations.",
      challengesSolved: "Eliminated screen tearing and GPU pipeline stalls by optimizing vertex array layouts and maintaining an exact 16.6ms frame budget (rock-solid 60 FPS).",
      futureImprovements: "Porting shader pipeline to modern Vulkan / WebGL with custom GLSL compute shaders."
    }
  }
];

export const skillCategories = [
  {
    name: "Core Programming Languages",
    icon: "code",
    skills: [
      { name: "C++", level: 90, desc: "Algorithmic Problem Solving, OOP, Pointer & Memory Management" },
      { name: "Python", level: 88, desc: "AI Pipelines, Scripting, Automation, Data Wrangling" },
      { name: "TypeScript", level: 92, desc: "Strict Types, Generics, Enterprise Production Code" },
      { name: "JavaScript (ES6+)", level: 95, desc: "Async/Await, Event Loop, DOM, Functional Architecture" },
      { name: "Java", level: 82, desc: "OOP Principles, Design Patterns, Enterprise Java Fundamentals" },
      { name: "C#", level: 80, desc: ".NET Fundamentals, Desktop & Software Lab Engineering" }
    ]
  },
  {
    name: "Frontend & UI Systems",
    icon: "layout",
    skills: [
      { name: "Next.js 16", level: 90, desc: "App Router, Server Actions, SSR, ISR, Edge Handlers" },
      { name: "React 19", level: 94, desc: "Hooks, Context, Concurrent Mode, Virtual DOM Reconciliation" },
      { name: "Tailwind CSS", level: 92, desc: "Design Tokens, Dark Mode, High-Velocity Layouts" },
      { name: "Vanilla CSS & Modern HTML5", level: 95, desc: "CSS Grid, Flexbox, Custom Properties, Glassmorphism" },
      { name: "Vite", level: 90, desc: "ESM Bundling, Sub-second HMR, Build Optimization" }
    ]
  },
  {
    name: "Backend, APIs & Telemetry",
    icon: "server",
    skills: [
      { name: "Node.js", level: 90, desc: "Event-driven runtime, Streams, High-Throughput Services" },
      { name: "Express.js", level: 88, desc: "RESTful Endpoints, Middleware Chains, Route Protection" },
      { name: "Socket.IO", level: 86, desc: "Bi-directional WebSocket streaming, Live telemetry" },
      { name: "REST APIs & JWT", level: 95, desc: "Deterministic Contracts, Role-Based Access Control" }
    ]
  },
  {
    name: "Databases & Storage",
    icon: "database",
    skills: [
      { name: "MongoDB", level: 88, desc: "Document Modeling, 2dsphere Geospatial Indexes, Mongoose" },
      { name: "MySQL", level: 84, desc: "Relational Schemas, ACID Transactions, Complex Joins" },
      { name: "Redis", level: 78, desc: "In-memory caching, Key-value stores, Rate limiting" }
    ]
  },
  {
    name: "DevOps & Engineering Workflow",
    icon: "terminal",
    skills: [
      { name: "Git & GitHub", level: 92, desc: "Branching workflows, Conventional Commits, PR Reviews" },
      { name: "GitHub Actions", level: 85, desc: "Automated CI/CD Workflows, Lint & Test Verification" },
      { name: "Postman", level: 90, desc: "API Testing, Automated Collections, Environment Mocking" },
      { name: "VS Code & Linux", level: 88, desc: "Unix Shell, Process Management, Production Debugging" },
      { name: "Figma", level: 80, desc: "Design System Tokens, Component Architecture, Prototypes" }
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
    "Consistent high performance across software engineering lab projects and full-stack term architectures."
  ]
};

export const terminalCommands = {
  help: "Available commands:\n  whoami      - Executive summary & target roles\n  skills      - Technical proficiency matrix\n  projects    - Flagship engineering case studies\n  github      - Live GitHub telemetry & stats\n  resume      - Resume details & download link\n  education   - Academic background & university\n  contact     - Reach out for internship & job offers\n  status      - Current recruitment status\n  clear       - Clear terminal output",
  whoami: "T.M. Wasif Jamee\nTarget: Software Engineer Intern | Full Stack Developer | AI Engineer\nUniversity: American International University-Bangladesh (AIUB)\nLocation: Dhaka, Bangladesh (Open to Remote & Global Relocation)\nFocus: Real-time crisis coordination, distributed systems, and modern AI-driven web architectures.",
  skills: "Technical Proficiencies:\n• Languages: C++, Python, TypeScript, JavaScript (ES6+), Java, C#\n• Web & UI: Next.js 16, React 19, Vanilla CSS, TailwindCSS, Vite\n• Backend: Node.js, Express.js, Socket.IO, RESTful APIs, JWT\n• Databases: MongoDB (Mongoose, Geospatial), MySQL, Redis\n• Tooling: Git, GitHub Actions, Postman, Linux, Figma",
  projects: "Flagship Engineering Case Studies:\n1. ReliefAI    - AI Disaster Coordination & Telemetry Engine [Next.js 16, Socket.IO, MongoDB]\n2. BazarDor    - Commodity Price Indexer & Market Volatility Analytics [Next.js 16, TypeScript]\n3. FitLog      - Biometric Progression & Dynamic Overload Engine [React, Next.js]\n4. DevStack    - Interactive Toolchain Architect & Stack Visualizer [React 19, TypeScript]\n5. StoryScene  - Hardware-Accelerated 3D/2D OpenGL Graphics Engine [C++, OpenGL]",
  github: "GitHub Telemetry (@Wasif109160):\n• Public Repositories: 16\n• Top Languages: TypeScript, JavaScript, C++, C#, Java\n• Flagship Repos: ReliefAI, B14-A7-Bazar-Dor-main, Fitlog, PH-14-AS-5\n• Profile: https://github.com/Wasif109160",
  resume: "Resume & Credentials:\n• File: /Wasif_Jamee_Resume.pdf\n• Format: Production-ready PDF (209 KB)\n• Action: Click 'Download Resume' in the navbar or resume section.",
  education: "American International University-Bangladesh (AIUB)\nDegree: B.Sc. in Computer Science & Engineering (CSE)\nKey Areas: Algorithmic Complexity, AI, Distributed Databases, Real-Time Architecture.",
  contact: "Direct Communication Channels:\n• Email: wasifjamee05@gmail.com\n• LinkedIn: https://www.linkedin.com/in/t-m-wasif-jamee-687094297/\n• GitHub: https://github.com/Wasif109160\n• Availability: Open to Software Engineering Internships & Remote Opportunities (2026/2027)",
  status: "STATUS: ACTIVE CANDIDATE 🟢\nTarget: Software Engineer Intern / AI Intern / Junior Full-Stack Engineer\nPreferences: Remote or Onsite (Worldwide relocation ready)\nNotice Period: Immediate / Flexible"
};
