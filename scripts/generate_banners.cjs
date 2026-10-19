const fs = require('fs');
const path = require('path');

const imgPath = path.join(__dirname, '..', 'public', 'images', 'profile.jpeg');
const imgBytes = fs.readFileSync(imgPath);
const imgBase64 = imgBytes.toString('base64');
const dataUri = `data:image/jpeg;base64,${imgBase64}`;

// 1. Dark Theme Banner (banner-dark.svg & banner.svg)
function buildDarkBanner() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 380" width="100%" height="auto" preserveAspectRatio="xMidYMid meet">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bg-grad-dark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080D1A" />
      <stop offset="50%" stop-color="#0F172A" />
      <stop offset="100%" stop-color="#0B1226" />
    </linearGradient>

    <!-- Name Text Gradient -->
    <linearGradient id="name-grad-dark" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="50%" stop-color="#F0F9FF" />
      <stop offset="100%" stop-color="#38BDF8" />
    </linearGradient>

    <!-- Glowing Ring Gradient -->
    <linearGradient id="ring-grad-dark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="50%" stop-color="#2563EB" />
      <stop offset="100%" stop-color="#10B981" />
    </linearGradient>

    <!-- Subtle Border Gradient -->
    <linearGradient id="border-grad-dark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(56, 189, 248, 0.35)" />
      <stop offset="50%" stop-color="rgba(37, 99, 235, 0.15)" />
      <stop offset="100%" stop-color="rgba(16, 185, 129, 0.25)" />
    </linearGradient>

    <!-- Ambient Glow Filter -->
    <filter id="soft-glow-dark" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="16" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <!-- Circular Avatar Clip Path -->
    <clipPath id="avatar-clip-dark">
      <circle cx="985" cy="190" r="115" />
    </clipPath>

    <!-- Grid Pattern -->
    <pattern id="grid-dark" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255, 255, 255, 0.03)" stroke-width="1" />
      <circle cx="32" cy="32" r="1" fill="rgba(56, 189, 248, 0.1)" />
    </pattern>

    <style>
      .font-sans {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', 'Plus Jakarta Sans', sans-serif;
      }
      .font-mono {
        font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', ui-monospace, monospace;
      }
      @keyframes floatCard {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-3px); }
      }
      @keyframes pulseGlow {
        0%, 100% { opacity: 0.22; }
        50% { opacity: 0.38; }
      }
      .float-animation {
        animation: floatCard 6s ease-in-out infinite;
      }
      .ambient-pulse {
        animation: pulseGlow 7s ease-in-out infinite alternate;
      }
    </style>
  </defs>

  <!-- Canvas Background -->
  <rect width="1200" height="380" rx="20" fill="url(#bg-grad-dark)" stroke="url(#border-grad-dark)" stroke-width="1.5" />
  <rect width="1200" height="380" rx="20" fill="url(#grid-dark)" />

  <!-- Ambient Light Orbs -->
  <circle class="ambient-pulse" cx="180" cy="80" r="140" fill="#2563EB" opacity="0.18" filter="url(#soft-glow-dark)" />
  <circle class="ambient-pulse" cx="985" cy="190" r="160" fill="#06B6D4" opacity="0.22" filter="url(#soft-glow-dark)" />
  <circle class="ambient-pulse" cx="550" cy="350" r="120" fill="#10B981" opacity="0.12" filter="url(#soft-glow-dark)" />

  <!-- LEFT COLUMN: Identity & Role Positioning -->
  <g transform="translate(64, 48)">
    
    <!-- Status Pill Badge -->
    <g transform="translate(0, 0)">
      <rect width="320" height="26" rx="13" fill="rgba(16, 185, 129, 0.1)" stroke="rgba(16, 185, 129, 0.3)" stroke-width="1" />
      <circle cx="15" cy="13" r="4.5" fill="#10B981" />
      <text x="28" y="17.5" fill="#34D399" font-size="11" font-weight="700" class="font-mono" letter-spacing="0.5">OPEN TO SOFTWARE ENGINEERING INTERNSHIPS</text>
    </g>

    <!-- Name Title -->
    <text x="0" y="66" fill="url(#name-grad-dark)" font-size="44" font-weight="800" class="font-sans" letter-spacing="-0.8">
      T.M. Wasif Jamee
    </text>

    <!-- Core Roles Focus -->
    <text x="0" y="104" fill="#38BDF8" font-size="18" font-weight="600" class="font-mono" letter-spacing="-0.2">
      Software Engineering Intern  •  Full Stack Developer  •  AI Enthusiast
    </text>

    <!-- Education / Academic Background -->
    <text x="0" y="136" fill="#94A3B8" font-size="14.5" font-weight="400" class="font-sans">
      Computer Science &amp; Engineering Undergraduate @ AIUB  •  Dhaka, Bangladesh
    </text>

    <!-- Core Focus Tech Chips -->
    <g transform="translate(0, 168)">
      <!-- Chip 1 -->
      <g transform="translate(0, 0)">
        <rect width="132" height="28" rx="7" fill="rgba(37, 99, 235, 0.12)" stroke="rgba(37, 99, 235, 0.3)" stroke-width="1" />
        <text x="14" y="18.5" fill="#60A5FA" font-size="12" font-weight="600" class="font-sans">⚛️ React / Next.js</text>
      </g>
      <!-- Chip 2 -->
      <g transform="translate(142, 0)">
        <rect width="115" height="28" rx="7" fill="rgba(6, 182, 212, 0.12)" stroke="rgba(6, 182, 212, 0.3)" stroke-width="1" />
        <text x="14" y="18.5" fill="#38BDF8" font-size="12" font-weight="600" class="font-sans">📘 TypeScript</text>
      </g>
      <!-- Chip 3 -->
      <g transform="translate(267, 0)">
        <rect width="168" height="28" rx="7" fill="rgba(16, 185, 129, 0.12)" stroke="rgba(16, 185, 129, 0.3)" stroke-width="1" />
        <text x="14" y="18.5" fill="#34D399" font-size="12" font-weight="600" class="font-sans">⚡ Backend Development</text>
      </g>
      <!-- Chip 4 -->
      <g transform="translate(445, 0)">
        <rect width="134" height="28" rx="7" fill="rgba(139, 92, 246, 0.12)" stroke="rgba(139, 92, 246, 0.3)" stroke-width="1" />
        <text x="14" y="18.5" fill="#C084FC" font-size="12" font-weight="600" class="font-sans">🧠 AI Integration</text>
      </g>
      <!-- Chip 5 -->
      <g transform="translate(589, 0)">
        <rect width="130" height="28" rx="7" fill="rgba(245, 158, 11, 0.12)" stroke="rgba(245, 158, 11, 0.3)" stroke-width="1" />
        <text x="14" y="18.5" fill="#FBBF24" font-size="12" font-weight="600" class="font-sans">📐 System Design</text>
      </g>
    </g>

    <!-- Communication & Identity Details -->
    <g transform="translate(0, 226)">
      <line x1="0" y1="0" x2="720" y2="0" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1" />
      <text x="0" y="24" fill="#64748B" font-size="12" font-weight="500" class="font-mono">
        github.com/Wasif109160  •  wasifjamee05@gmail.com  •  linkedin.com/in/t-m-wasif-jamee
      </text>
    </g>

  </g>

  <!-- RIGHT COLUMN: Professional Portrait Showcase with Soft Glow -->
  <g class="float-animation">
    <!-- Ambient Behind-Avatar Glow -->
    <circle cx="985" cy="190" r="132" fill="url(#ring-grad-dark)" opacity="0.25" filter="url(#soft-glow-dark)" />
    
    <!-- Outer Decorative Ring -->
    <circle cx="985" cy="190" r="122" fill="none" stroke="url(#ring-grad-dark)" stroke-width="2.5" />
    <circle cx="985" cy="190" r="117" fill="none" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1" />

    <!-- Embedded Real Photo of Wasif -->
    <image href="${dataUri}" x="870" y="75" width="230" height="230" clip-path="url(#avatar-clip-dark)" preserveAspectRatio="xMidYMid slice" />

    <!-- Affiliation Badge Overlay -->
    <g transform="translate(1025, 275)">
      <rect width="90" height="26" rx="13" fill="#0B132B" stroke="#38BDF8" stroke-width="1.5" />
      <text x="12" y="17.5" fill="#38BDF8" font-size="11.5" font-weight="700" class="font-mono">AIUB CSE</text>
    </g>
  </g>
</svg>`;
}

// 2. Light Theme Banner (banner-light.svg)
function buildLightBanner() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 380" width="100%" height="auto" preserveAspectRatio="xMidYMid meet">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bg-grad-light" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC" />
      <stop offset="50%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#F1F5F9" />
    </linearGradient>

    <!-- Name Text Gradient -->
    <linearGradient id="name-grad-light" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="60%" stop-color="#1E293B" />
      <stop offset="100%" stop-color="#2563EB" />
    </linearGradient>

    <!-- Glowing Ring Gradient -->
    <linearGradient id="ring-grad-light" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB" />
      <stop offset="50%" stop-color="#06B6D4" />
      <stop offset="100%" stop-color="#10B981" />
    </linearGradient>

    <!-- Subtle Border Gradient -->
    <linearGradient id="border-grad-light" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(37, 99, 235, 0.25)" />
      <stop offset="50%" stop-color="rgba(15, 23, 42, 0.1)" />
      <stop offset="100%" stop-color="rgba(6, 182, 212, 0.25)" />
    </linearGradient>

    <!-- Ambient Glow Filter -->
    <filter id="soft-glow-light" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="16" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <!-- Circular Avatar Clip Path -->
    <clipPath id="avatar-clip-light">
      <circle cx="985" cy="190" r="115" />
    </clipPath>

    <!-- Grid Pattern -->
    <pattern id="grid-light" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(15, 23, 42, 0.03)" stroke-width="1" />
      <circle cx="32" cy="32" r="1" fill="rgba(37, 99, 235, 0.08)" />
    </pattern>

    <style>
      .font-sans {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', 'Plus Jakarta Sans', sans-serif;
      }
      .font-mono {
        font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', ui-monospace, monospace;
      }
      @keyframes floatCard {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-3px); }
      }
      @keyframes pulseGlow {
        0%, 100% { opacity: 0.15; }
        50% { opacity: 0.28; }
      }
      .float-animation {
        animation: floatCard 6s ease-in-out infinite;
      }
      .ambient-pulse {
        animation: pulseGlow 7s ease-in-out infinite alternate;
      }
    </style>
  </defs>

  <!-- Canvas Background -->
  <rect width="1200" height="380" rx="20" fill="url(#bg-grad-light)" stroke="url(#border-grad-light)" stroke-width="1.5" />
  <rect width="1200" height="380" rx="20" fill="url(#grid-light)" />

  <!-- Ambient Light Orbs -->
  <circle class="ambient-pulse" cx="180" cy="80" r="140" fill="#2563EB" opacity="0.08" filter="url(#soft-glow-light)" />
  <circle class="ambient-pulse" cx="985" cy="190" r="160" fill="#06B6D4" opacity="0.12" filter="url(#soft-glow-light)" />

  <!-- LEFT COLUMN: Identity & Role Positioning -->
  <g transform="translate(64, 48)">
    
    <!-- Status Pill Badge -->
    <g transform="translate(0, 0)">
      <rect width="320" height="26" rx="13" fill="rgba(16, 185, 129, 0.12)" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1" />
      <circle cx="15" cy="13" r="4.5" fill="#059669" />
      <text x="28" y="17.5" fill="#065F46" font-size="11" font-weight="700" class="font-mono" letter-spacing="0.5">OPEN TO SOFTWARE ENGINEERING INTERNSHIPS</text>
    </g>

    <!-- Name Title -->
    <text x="0" y="66" fill="url(#name-grad-light)" font-size="44" font-weight="800" class="font-sans" letter-spacing="-0.8">
      T.M. Wasif Jamee
    </text>

    <!-- Core Roles Focus -->
    <text x="0" y="104" fill="#0284C7" font-size="18" font-weight="600" class="font-mono" letter-spacing="-0.2">
      Software Engineering Intern  •  Full Stack Developer  •  AI Enthusiast
    </text>

    <!-- Education / Academic Background -->
    <text x="0" y="136" fill="#475569" font-size="14.5" font-weight="400" class="font-sans">
      Computer Science &amp; Engineering Undergraduate @ AIUB  •  Dhaka, Bangladesh
    </text>

    <!-- Core Focus Tech Chips -->
    <g transform="translate(0, 168)">
      <!-- Chip 1 -->
      <g transform="translate(0, 0)">
        <rect width="132" height="28" rx="7" fill="rgba(37, 99, 235, 0.08)" stroke="rgba(37, 99, 235, 0.25)" stroke-width="1" />
        <text x="14" y="18.5" fill="#1D4ED8" font-size="12" font-weight="600" class="font-sans">⚛️ React / Next.js</text>
      </g>
      <!-- Chip 2 -->
      <g transform="translate(142, 0)">
        <rect width="115" height="28" rx="7" fill="rgba(2, 132, 199, 0.08)" stroke="rgba(2, 132, 199, 0.25)" stroke-width="1" />
        <text x="14" y="18.5" fill="#0369A1" font-size="12" font-weight="600" class="font-sans">📘 TypeScript</text>
      </g>
      <!-- Chip 3 -->
      <g transform="translate(267, 0)">
        <rect width="168" height="28" rx="7" fill="rgba(5, 150, 105, 0.08)" stroke="rgba(5, 150, 105, 0.25)" stroke-width="1" />
        <text x="14" y="18.5" fill="#047857" font-size="12" font-weight="600" class="font-sans">⚡ Backend Development</text>
      </g>
      <!-- Chip 4 -->
      <g transform="translate(445, 0)">
        <rect width="134" height="28" rx="7" fill="rgba(124, 58, 237, 0.08)" stroke="rgba(124, 58, 237, 0.25)" stroke-width="1" />
        <text x="14" y="18.5" fill="#6D28D9" font-size="12" font-weight="600" class="font-sans">🧠 AI Integration</text>
      </g>
      <!-- Chip 5 -->
      <g transform="translate(589, 0)">
        <rect width="130" height="28" rx="7" fill="rgba(217, 119, 6, 0.08)" stroke="rgba(217, 119, 6, 0.25)" stroke-width="1" />
        <text x="14" y="18.5" fill="#B45309" font-size="12" font-weight="600" class="font-sans">📐 System Design</text>
      </g>
    </g>

    <!-- Communication & Identity Details -->
    <g transform="translate(0, 226)">
      <line x1="0" y1="0" x2="720" y2="0" stroke="rgba(15, 23, 42, 0.08)" stroke-width="1" />
      <text x="0" y="24" fill="#64748B" font-size="12" font-weight="500" class="font-mono">
        github.com/Wasif109160  •  wasifjamee05@gmail.com  •  linkedin.com/in/t-m-wasif-jamee
      </text>
    </g>

  </g>

  <!-- RIGHT COLUMN: Professional Portrait Showcase with Soft Glow -->
  <g class="float-animation">
    <!-- Ambient Behind-Avatar Glow -->
    <circle cx="985" cy="190" r="132" fill="url(#ring-grad-light)" opacity="0.15" filter="url(#soft-glow-light)" />
    
    <!-- Outer Decorative Ring -->
    <circle cx="985" cy="190" r="122" fill="none" stroke="url(#ring-grad-light)" stroke-width="2.5" />
    <circle cx="985" cy="190" r="117" fill="none" stroke="rgba(15, 23, 42, 0.08)" stroke-width="1" />

    <!-- Embedded Real Photo of Wasif -->
    <image href="${dataUri}" x="870" y="75" width="230" height="230" clip-path="url(#avatar-clip-light)" preserveAspectRatio="xMidYMid slice" />

    <!-- Affiliation Badge Overlay -->
    <g transform="translate(1025, 275)">
      <rect width="90" height="26" rx="13" fill="#FFFFFF" stroke="#0284C7" stroke-width="1.5" />
      <text x="12" y="17.5" fill="#0284C7" font-size="11.5" font-weight="700" class="font-mono">AIUB CSE</text>
    </g>
  </g>
</svg>`;
}

const bannerDark = buildDarkBanner();
const bannerLight = buildLightBanner();

const bannerDarkPath = path.join(__dirname, '..', 'github-profile', 'banner', 'banner-dark.svg');
const bannerLightPath = path.join(__dirname, '..', 'github-profile', 'banner', 'banner-light.svg');
const bannerPath = path.join(__dirname, '..', 'github-profile', 'banner', 'banner.svg');

fs.writeFileSync(bannerDarkPath, bannerDark, 'utf8');
fs.writeFileSync(bannerLightPath, bannerLight, 'utf8');
fs.writeFileSync(bannerPath, bannerDark, 'utf8'); // default banner matches dark

console.log('Successfully generated clean recruiter-friendly banners:');
console.log(' - ' + bannerDarkPath);
console.log(' - ' + bannerLightPath);
console.log(' - ' + bannerPath);
