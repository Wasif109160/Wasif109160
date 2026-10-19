/**
 * Technical Portfolio Data for T.M. Wasif Jamee
 * Factual, code-verified, interview-safe engineering profile.
 */

export const personalInfo = {
  name: "T.M. Wasif Jamee",
  shortName: "Wasif",
  title: "Software Engineering Intern | Full Stack Developer | AI Enthusiast",
  institution: "American International University-Bangladesh (AIUB)",
  degree: "B.Sc. in Computer Science & Engineering",
  location: "Dhaka, Bangladesh",
  email: "wasifjamee05@gmail.com",
  github: "https://github.com/Wasif109160",
  githubUsername: "Wasif109160",
  linkedin: "https://www.linkedin.com/in/t-m-wasif-jamee-687094297/",
  availability: "Open to Software Engineering & Full Stack Opportunities",
  focusAreas: [
    "React / Next.js",
    "TypeScript",
    "Backend Development",
    "AI Integration",
    "System Design"
  ],
  bio: "Computer Science & Engineering undergraduate at AIUB interested in Software Engineering, Full Stack Development, and AI Systems. Experienced in building responsive web applications with Next.js and TypeScript, designing relational and document database schemas, integrating AI SDKs, and algorithmic problem solving in C++.",
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
  { label: "Public Repositories", value: 16, suffix: "+", desc: "Active codebases on GitHub (@Wasif109160)" },
  { label: "Featured Projects", value: 4, suffix: "", desc: "ReliefAI, BazarDor, FitLog & DevStack" },
  { label: "Automated Test Suites", value: 3, suffix: "", desc: "Security RBAC & Fail-Closed Test Suites" },
  { label: "Academic Standing", value: 2026, suffix: "", desc: "CSE Undergraduate @ AIUB" }
];

export const projects = [
  {
    id: "reliefai",
    title: "ReliefAI",
    tagline: "AI-Assisted Disaster Management & Crisis Coordination Platform",
    category: "ai",
    categoryLabel: "AI & Web Platform",
    featured: true,
    status: "Completed",
    techStack: [
      "Next.js 16.4",
      "TypeScript",
      "Google Gemini SDK",
      "MongoDB (Mongoose)",
      "Jose (JWT RBAC)",
      "Zod",
      "TailwindCSS v4"
    ],
    summary: "A disaster management platform designed to help humanitarian teams coordinate relief operations with automated Gemini AI incident triage, shelter locator routing, and role-based access control.",
    repoUrl: "https://github.com/Wasif109160/ReliefAI",
    stars: 0,
    forks: 0,
    lastPushed: "October 2026",
    
    caseStudy: {
      problem: "During natural crises, communication channels receive overwhelming volumes of unstructured distress messages, making it difficult for responders to quickly identify urgency levels and dispatch relief effectively.",
      solution: "Built a centralized web platform where citizens submit geo-tagged incident reports that are automatically evaluated by Google Gemini AI for urgency classification and surfaced on authenticated responder portals.",
      technologiesUsed: [
        "Next.js 16.4 (App Router & Route Handlers)",
        "TypeScript (Strict Typing)",
        "@google/generative-ai (Gemini SDK)",
        "MongoDB with Mongoose ODM",
        "Jose (JWT signing and verification)",
        "Zod (Runtime schema validation)",
        "TailwindCSS v4"
      ],
      keyFeatures: [
        "Geo-tagged citizen SOS report submission with coordinates",
        "Google Gemini AI triage to analyze text and estimate incident severity",
        "Role-Based Access Control (RBAC) for Citizens, Volunteers, NGOs, and Government officials",
        "Shelter locator and resource allocation tracking",
        "Automated security test suites verifying fail-closed token authorization"
      ],
      engineeringDecisions: "Adopted Next.js 16 App Router route handlers with Jose middleware to enforce strict server-side role validation, preventing unauthorized access to administrative triage portals. Implemented Mongoose connection pooling for reliable MongoDB communication.",
      futureImprovements: "Implement background sync with service workers to queue emergency reports when network connections are unstable."
    }
  },
  {
    id: "bazardor",
    title: "BazarDor",
    tagline: "Market Commodity Price Tracker & Regional Intelligence Platform",
    category: "web",
    categoryLabel: "Full Stack Web",
    featured: true,
    status: "Completed",
    techStack: [
      "Next.js 16.4",
      "TypeScript",
      "Better-Auth",
      "Better-SQLite3",
      "TailwindCSS v4",
      "React Hot Toast"
    ],
    summary: "A market commodity surveillance platform that tracks essential grocery and item prices across local markets with fast embedded SQLite storage and user authentication.",
    repoUrl: "https://github.com/Wasif109160/B14-A7-Bazar-Dor-main",
    stars: 0,
    forks: 0,
    lastPushed: "October 2026",

    caseStudy: {
      problem: "Consumers and local vendors frequently lack a transparent, centralized record of daily grocery and commodity price variations across regional markets.",
      solution: "Developed an accessible web application providing instant commodity search, historical price tracking, and community price submissions with user authentication.",
      technologiesUsed: [
        "Next.js 16.4 (Server Components)",
        "TypeScript",
        "Better-Auth (Session Authentication)",
        "Better-SQLite3 (Embedded Database)",
        "TailwindCSS v4",
        "React Hot Toast"
      ],
      keyFeatures: [
        "Real-time commodity search and category-based filtering",
        "Historical price tracking to identify pricing trends",
        "User authentication and profile session management via Better-Auth",
        "Embedded SQLite database storage with zero external database dependencies",
        "Mobile-first responsive interface with toast feedback"
      ],
      engineeringDecisions: "Utilized Next.js Server Components with Better-SQLite3 for lightweight in-process database queries, avoiding database network latency while keeping hosting requirements minimal.",
      futureImprovements: "Add email alert notifications for tracked items when prices fluctuate beyond user-defined thresholds."
    }
  },
  {
    id: "fitlog",
    title: "FitLog",
    tagline: "Local-First Workout Volume & Exercise Progression Tracker",
    category: "web",
    categoryLabel: "Full Stack Web",
    featured: true,
    status: "Completed",
    techStack: [
      "Next.js 16.3",
      "React 19",
      "Babel React Compiler",
      "TailwindCSS v4",
      "LocalStorage",
      "React-Toastify"
    ],
    summary: "A client-side workout tracking application designed for logging sets, tracking exercise volume, and monitoring consistency with instant browser persistence.",
    repoUrl: "https://github.com/Wasif109160/Fitlog",
    stars: 0,
    forks: 0,
    lastPushed: "September 2026",

    caseStudy: {
      problem: "Many commercial fitness applications require paid subscriptions and constant cloud connectivity just to log basic gym exercises and set volumes.",
      solution: "Built a fast, local-first workout tracker where workout data is saved directly in browser LocalStorage without mandatory account creation.",
      technologiesUsed: [
        "Next.js 16.3",
        "React 19",
        "Babel React Compiler",
        "TailwindCSS v4",
        "Browser LocalStorage API",
        "React-Toastify"
      ],
      keyFeatures: [
        "Dynamic exercise logger for recording sets, repetitions, tempo, and weight",
        "Local-first state storage for instantaneous responsiveness and offline operation",
        "Toast notification feedback upon completing workout entries",
        "Responsive interface optimized for quick mobile input at the gym"
      ],
      engineeringDecisions: "Structured data with versioned JSON serialization in LocalStorage to maintain workout history across browser sessions without requiring server infrastructure.",
      futureImprovements: "Add backup export and import features so users can save their history as a JSON file."
    }
  },
  {
    id: "devstack",
    title: "DevStack",
    tagline: "Interactive Developer Ecosystem & Software Toolchain Explorer",
    category: "web",
    categoryLabel: "Full Stack Web",
    featured: true,
    status: "Completed",
    techStack: [
      "React",
      "Vite",
      "TailwindCSS v4",
      "DaisyUI v5",
      "Figma & Penpot",
      "React-Toastify"
    ],
    summary: "An interactive developer toolchain visualizer enabling software developers to explore combinations of frontend, backend, and database technologies alongside UI design wireframes.",
    repoUrl: "https://github.com/Wasif109160/PH-14-AS-5",
    stars: 0,
    forks: 0,
    lastPushed: "September 2026",

    caseStudy: {
      problem: "Navigating modern software development options can be overwhelming for student developers choosing frameworks and libraries for new projects.",
      solution: "Created an interactive explorer that visualizes popular developer stacks, provides component examples, and includes prototype design wireframes.",
      technologiesUsed: [
        "React",
        "Vite",
        "TailwindCSS v4",
        "DaisyUI v5",
        "Figma & Penpot Design Systems",
        "React-Toastify"
      ],
      keyFeatures: [
        "Interactive selection filters for frontend, backend, and database tools",
        "Design wireframe reference files modeled in Figma and Penpot (`DevStack.fig`, `DevStack.penpot`)",
        "Rapid component rendering powered by Vite bundling",
        "Accessible responsive layout using DaisyUI components"
      ],
      engineeringDecisions: "Built with Vite and React for fast local development and lightweight client-side state handling without unnecessary server dependencies.",
      futureImprovements: "Add links to official getting-started documentation and community templates for each stack combination."
    }
  },
  {
    id: "storyscene",
    title: "Story-Scene OpenGL Simulation",
    tagline: "Procedural 3D/2D Graphics Animation in C++ and OpenGL",
    category: "graphics",
    categoryLabel: "Graphics & Systems",
    featured: false,
    status: "Completed",
    techStack: [
      "C++",
      "OpenGL",
      "GLUT",
      "Linear Algebra",
      "Computer Graphics"
    ],
    summary: "A 7-scene procedural graphics simulation written in C++ with OpenGL and GLUT, implementing matrix transformations, lighting primitives, and camera projection mathematics.",
    repoUrl: "https://github.com/Wasif109160/Story-Scene",
    stars: 0,
    forks: 0,
    lastPushed: "March 2026",

    caseStudy: {
      problem: "Understanding computer graphics and hardware rendering pipelines requires working directly with coordinate spaces, transformation matrices, and render loops rather than high-level web APIs.",
      solution: "Developed a 7-scene animated graphics simulation written in modern C++ directly interfacing with OpenGL and GLUT with double-buffered rendering.",
      technologiesUsed: [
        "C++",
        "OpenGL Core Primitives",
        "GLUT Library",
        "Linear Algebra & Matrix Math"
      ],
      keyFeatures: [
        "7 distinct choreographed procedural animation scenes",
        "Hierarchical matrix transformations (translation, rotation, scaling)",
        "Ambient and diffuse lighting primitive calculations",
        "Timer callback-driven rendering loop maintaining consistent animation timing"
      ],
      engineeringDecisions: "Utilized double buffering and GLUT timer callbacks to coordinate smooth scene transitions and maintain consistent frame execution across all 7 scenes.",
      futureImprovements: "Port the geometry pipeline to modern shader-based OpenGL (GLSL) with programmable vertex and fragment shaders."
    }
  }
];

export const skillCategories = [
  {
    name: "Programming Languages",
    icon: "code",
    skills: [
      { name: "C++", level: 85, desc: "Data Structures, Algorithms, OOP, Memory & Pointer Management" },
      { name: "TypeScript", level: 90, desc: "Strict Types, Generics, Interfaces, Next.js Server Components" },
      { name: "JavaScript (ES6+)", level: 92, desc: "Async/Await, Promises, Event Loop, DOM Manipulation" },
      { name: "Python", level: 82, desc: "Scripting, Automation, AI Integrations, Data Processing" },
      { name: "Java", level: 80, desc: "OOP Fundamentals, Class Hierarchies, Academic Projects" },
      { name: "C#", level: 78, desc: ".NET Fundamentals, Desktop Application Development" }
    ]
  },
  {
    name: "Frontend & UI Development",
    icon: "layout",
    skills: [
      { name: "Next.js 16 (App Router)", level: 90, desc: "Server Components, Route Handlers, Layouts, SSR" },
      { name: "React 19", level: 92, desc: "Hooks, Context, Reducers, Component Architecture" },
      { name: "Tailwind CSS v4", level: 90, desc: "Utility Tokens, Responsive Layouts, Dark Mode" },
      { name: "Modern HTML5 & CSS3", level: 94, desc: "Semantic Elements, CSS Grid, Flexbox, Custom Properties" },
      { name: "Vite", level: 88, desc: "Fast Bundling, ESM Modules, Local Development Server" }
    ]
  },
  {
    name: "Backend & AI Integrations",
    icon: "server",
    skills: [
      { name: "Node.js", level: 88, desc: "Runtime Environment, NPM Packages, Backend Scripting" },
      { name: "Next.js API Route Handlers", level: 90, desc: "RESTful Endpoints, Request Validation, Error Handling" },
      { name: "Google Generative AI SDK", level: 85, desc: "Gemini API Integration, Prompt Structuring, Severity Triage" },
      { name: "Jose (JWT Authentication)", level: 86, desc: "Token Signing, Verification, Role-Based Access Middleware" },
      { name: "Zod", level: 88, desc: "Runtime Schema Validation, API Payload Parsing" }
    ]
  },
  {
    name: "Databases & Storage",
    icon: "database",
    skills: [
      { name: "MongoDB & Mongoose", level: 86, desc: "Document Schemas, Indexes, Aggregations, Connection Pooling" },
      { name: "SQLite (Better-SQLite3)", level: 84, desc: "Embedded Database, ACID Queries, In-Process Storage" },
      { name: "MySQL", level: 80, desc: "Relational Tables, Primary & Foreign Keys, Normalization" }
    ]
  },
  {
    name: "Tools, Testing & Design",
    icon: "terminal",
    skills: [
      { name: "Git & GitHub", level: 90, desc: "Version Control, Pull Requests, Commit Hygiene" },
      { name: "Node Test Runner (tsx --test)", level: 82, desc: "Automated Auth & Security Verification Tests" },
      { name: "Postman", level: 88, desc: "API Endpoint Testing, Header & Payload Verification" },
      { name: "VS Code & Development Tools", level: 90, desc: "Debugging, Extensions, Linting, Shell Scripting" },
      { name: "Figma & Penpot", level: 82, desc: "Wireframing, UI Layout Prototyping, Design Handoff" }
    ]
  }
];

export const education = {
  institution: "American International University-Bangladesh (AIUB)",
  degree: "Bachelor of Science in Computer Science & Engineering (CSE)",
  timeline: "Undergraduate Student (In Progress)",
  location: "Dhaka, Bangladesh",
  highlights: [
    "Core curriculum in Data Structures, Algorithms, Discrete Mathematics, and Computer Architecture.",
    "Specialized coursework in Artificial Intelligence, Database Management Systems, and Software Engineering.",
    "Practical project experience across web application development, security testing, and computer graphics."
  ]
};

export const terminalCommands = {
  help: "Available commands:\n  whoami      - Summary & candidate profile\n  skills      - Technical skills matrix\n  projects    - Featured software engineering projects\n  github      - GitHub profile telemetry (@Wasif109160)\n  resume      - Resume details & download\n  education   - Academic background & university\n  contact     - Communication channels\n  status      - Current internship availability\n  clear       - Clear terminal output",
  whoami: "T.M. Wasif Jamee\nRole: Software Engineering Intern | Full Stack Developer | AI Enthusiast\nEducation: American International University-Bangladesh (AIUB) — B.Sc. in CSE\nLocation: Dhaka, Bangladesh\nInterests: Software Engineering, Full Stack Development, and AI Systems.",
  skills: "Technical Proficiencies:\n• Languages: C++, TypeScript, JavaScript (ES6+), Python, Java, C#\n• Frontend: React 19, Next.js 16 (App Router), TailwindCSS v4, HTML5/CSS3, Vite\n• Backend & AI: Next.js API Routes, Node.js, Google Gemini SDK, Jose (JWT), Zod\n• Databases: MongoDB (Mongoose), SQLite (Better-SQLite3), MySQL\n• Tools & Tests: Git, GitHub, tsx test runner, Postman, Figma, Penpot",
  projects: "Featured Software Engineering Projects:\n1. ReliefAI    - AI Disaster Management Platform [Next.js 16.4, Gemini SDK, MongoDB, Jose JWT]\n2. BazarDor    - Market Commodity Price Tracker [Next.js 16.4, Better-Auth, Better-SQLite3]\n3. FitLog      - Local-First Workout Tracker [Next.js 16.3, React 19, React Compiler]\n4. DevStack    - Developer Toolchain Explorer [React, Vite, TailwindCSS 4, DaisyUI 5]\n5. StoryScene  - Procedural Graphics Simulation [C++, OpenGL, GLUT]",
  github: "GitHub Telemetry (@Wasif109160):\n• Public Repositories: 16\n• Top Languages: TypeScript, JavaScript, C++, C#, Java\n• Profile: https://github.com/Wasif109160",
  resume: "Resume & Credentials:\n• File: /Wasif_Jamee_Resume.pdf\n• Format: PDF (209 KB)\n• Action: Available for download and browser viewing in the Resume section.",
  education: "American International University-Bangladesh (AIUB)\nDegree: B.Sc. in Computer Science & Engineering (CSE)\nCoursework: Data Structures, Algorithms, AI, DBMS, Software Engineering.",
  contact: "Communication Channels:\n• Email: wasifjamee05@gmail.com\n• LinkedIn: https://www.linkedin.com/in/t-m-wasif-jamee-687094297/\n• GitHub: https://github.com/Wasif109160",
  status: "STATUS: AVAILABLE 🟢\nTarget: Software Engineering Intern / Junior Full Stack Developer\nFocus: React, Next.js, TypeScript, Backend Development, AI Integration"
};
