/**
 * T.M. Wasif Jamee — Engineering Portfolio Logic & Interactivity
 */

import { personalInfo, metrics, projects, skillCategories, terminalCommands } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypewriter();
  initMetrics();
  initProjects();
  initArchitectureDiagram();
  initSkills();
  initTerminal();
  initContact();
  initNavigation();
  initModal();
  initCopyright();
});

/* ==========================================================================
   Theme Management (Dark / Light with LocalStorage persistence)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const htmlEl = document.documentElement;

  // Retrieve saved or system preference
  const savedTheme = localStorage.getItem('wasif-portfolio-theme') || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = htmlEl.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('wasif-portfolio-theme', next);
    });
  }

  function applyTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }
}

/* ==========================================================================
   Dynamic Typewriter in Hero
   ========================================================================== */
function initTypewriter() {
  const textEl = document.getElementById('typewriter-text');
  if (!textEl) return;

  const phrases = [
    "AI Engineer & Full-Stack Systems Architect",
    "Specializing in Autonomous Crisis Dispatch Platforms (ReliefAI)",
    "MERN Stack & Next.js 16 Production Architectures",
    "Algorithmic Problem Solving in C++ & Python",
    "Undergraduate Student @ AIUB (Dhaka, Bangladesh)"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 50;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      textEl.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 25;
    } else {
      textEl.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 65;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typeSpeed = 1800; // Pause at end of phrase
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 400; // Pause before typing new phrase
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/* ==========================================================================
   Metrics Strip with IntersectionObserver Counter Animation
   ========================================================================== */
function initMetrics() {
  const container = document.getElementById('metrics-grid');
  if (!container) return;

  container.innerHTML = metrics.map((m, idx) => `
    <div class="metric-item" data-index="${idx}">
      <div class="metric-num" data-target="${m.value}" data-suffix="${m.suffix}">0${m.suffix}</div>
      <div class="metric-label">${m.label}</div>
      <div class="metric-desc">${m.desc}</div>
    </div>
  `).join('');

  // Animate numbers when scrolled into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(container);

  function animateCounters() {
    const numEls = container.querySelectorAll('.metric-num');
    numEls.forEach(el => {
      const target = parseFloat(el.getAttribute('data-target'));
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1600;
      const startTime = performance.now();

      function updateNumber(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing out quad
        const ease = 1 - (1 - progress) * (1 - progress);
        const current = progress === 1 ? target : (target * ease);

        if (Number.isInteger(target)) {
          el.textContent = `${Math.floor(current)}${suffix}`;
        } else {
          el.textContent = `${current.toFixed(1)}${suffix}`;
        }

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        }
      }

      requestAnimationFrame(updateNumber);
    });
  }
}

/* ==========================================================================
   Featured Systems / Project Cards & Filtering
   (Pure code cards with NO fake cover images)
   ========================================================================== */
function initProjects() {
  const grid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!grid) return;

  renderProjects(projects);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      if (filter === 'all') {
        renderProjects(projects);
      } else {
        const filtered = projects.filter(p => p.category === filter);
        renderProjects(filtered);
      }
    });
  });

  function renderProjects(items) {
    grid.innerHTML = items.map(p => `
      <article class="project-card" data-id="${p.id}">
        <div>
          <div class="project-header">
            <span class="project-category-badge">${p.categoryLabel}</span>
            <span class="project-status-chip">
              <span class="pulse-dot"></span>
              ${p.status}
            </span>
          </div>

          <h3 class="project-title">${p.title}</h3>
          <div class="project-tagline">${p.tagline}</div>
          <p class="project-summary">${p.summary}</p>

          <div class="project-telemetry-row">
            <div class="telemetry-item">
              <span class="telemetry-lbl">Performance Benchmark</span>
              <span class="telemetry-val">${p.metrics.latency}</span>
            </div>
            <div class="telemetry-item" style="border-left: 1px solid var(--border-subtle); padding-left: 1rem;">
              <span class="telemetry-lbl">Architecture Model</span>
              <span class="telemetry-val">${p.metrics.scale}</span>
            </div>
          </div>

          <ul class="project-features-list">
            ${p.highlights.slice(0, 3).map(h => `
              <li class="project-feature-item">
                <span class="project-feature-icon">▹</span>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>

          <div class="project-tech-tags">
            ${p.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>

        <div class="project-actions">
          <button class="btn btn-secondary btn-sm btn-inspect-arch" data-project-id="${p.id}">
            <span>Inspect Architecture</span>
            <span>⚙️</span>
          </button>
          
          <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            <span>GitHub Repository</span>
            <span>↗</span>
          </a>
        </div>
      </article>
    `).join('');

    // Attach inspect architecture modal listeners
    grid.querySelectorAll('.btn-inspect-arch').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const projId = e.currentTarget.getAttribute('data-project-id');
        const proj = projects.find(item => item.id === projId);
        if (proj) openProjectModal(proj);
      });
    });
  }
}

/* ==========================================================================
   Architecture Deep Dive Flow Pipeline
   ========================================================================== */
function initArchitectureDiagram() {
  const nodes = document.querySelectorAll('.arch-node');
  const titleEl = document.getElementById('arch-detail-title');
  const descEl = document.getElementById('arch-detail-desc');

  const nodeDetails = {
    sos: {
      title: "Citizen SOS Ingestion Layer",
      desc: "Lightweight Next.js edge route handlers capture geo-tagged distress signals, sanitize telemetry payloads, and perform instantaneous cryptographic rate limiting to mitigate denial-of-service spam during crisis situations."
    },
    ai: {
      title: "AI Triage & Natural Language Severity Engine",
      desc: "Incoming unstructured emergency messages pass through an automated classification pipeline that extracts casualty counts, infrastructure collapse indicators, and urgency metrics to assign a deterministic Priority Score (P1 to P4)."
    },
    geo: {
      title: "Geospatial Shelter & Proximity Matching",
      desc: "Calculates real-time haversine distance vectors between victims and verified functional shelters, factoring in live shelter capacity telemetry and flooding road-block reports."
    },
    dispatch: {
      title: "Socket.IO Pub/Sub Telemetry Broadcast",
      desc: "High-frequency WebSocket event loop pushing sub-second alerts to active rescue teams and NGO field units without polling overhead or stale state locks."
    },
    command: {
      title: "Multi-Agency RBAC Command Center",
      desc: "Separate authenticated operational portals for Citizens, Field Volunteers, Relief NGOs, and National Crisis Coordinators with granular audit logs and state persistence in MongoDB."
    }
  };

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      const key = node.getAttribute('data-node');
      const details = nodeDetails[key];
      if (details && titleEl && descEl) {
        titleEl.textContent = details.title;
        descEl.textContent = details.desc;
      }
    });
  });
}

/* ==========================================================================
   Technical Skills Matrix
   ========================================================================== */
function initSkills() {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  container.innerHTML = skillCategories.map(cat => `
    <div class="skill-category-card">
      <h3 class="skill-category-title">
        <span>${getCategoryIcon(cat.icon)}</span>
        <span>${cat.name}</span>
      </h3>
      <div class="skills-list">
        ${cat.skills.map(s => `
          <div class="skill-item">
            <div class="skill-item-row">
              <span class="skill-name">${s.name}</span>
              <span class="skill-level-pct">${s.level}%</span>
            </div>
            <div class="skill-progress-track">
              <div class="skill-progress-bar" style="width: ${s.level}%;"></div>
            </div>
            <div class="skill-desc">${s.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  function getCategoryIcon(icon) {
    switch (icon) {
      case 'code': return '⌨️';
      case 'layout': return '🎨';
      case 'server': return '⚡';
      case 'database': return '🗄️';
      case 'terminal': return '🛠️';
      default: return '🔹';
    }
  }
}

/* ==========================================================================
   Interactive Recruiter / Developer Terminal
   ========================================================================== */
function initTerminal() {
  const form = document.getElementById('terminal-form');
  const input = document.getElementById('terminal-input');
  const body = document.getElementById('terminal-body');
  const chips = document.querySelectorAll('.terminal-chip');

  if (!form || !input || !body) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cmd = input.value.trim().toLowerCase();
    if (!cmd) return;
    executeCommand(cmd);
    input.value = '';
  });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) executeCommand(cmd);
    });
  });

  function executeCommand(cmd) {
    // Log user command line
    const userLine = document.createElement('div');
    userLine.className = 'terminal-log-line';
    userLine.innerHTML = `<span class="terminal-prompt-prefix">wasif@terminal:~$</span> ${escapeHtml(cmd)}`;
    body.appendChild(userLine);

    if (cmd === 'clear') {
      body.innerHTML = `
        <div class="terminal-log-line">Terminal buffer cleared.</div>
        <div class="terminal-log-line">Type <span style="color: #38BDF8;">'help'</span> for command index.</div>
      `;
      return;
    }

    const response = terminalCommands[cmd] || `command not found: ${escapeHtml(cmd)}. Type 'help' for available commands.`;

    const respLine = document.createElement('div');
    respLine.className = 'terminal-log-line';
    respLine.style.color = terminalCommands[cmd] ? '#94A3B8' : '#F43F5E';
    respLine.textContent = response;
    body.appendChild(respLine);

    // Scroll to bottom
    body.scrollTop = body.scrollHeight;
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}

/* ==========================================================================
   Contact Channels & Interactive Form
   ========================================================================== */
function initContact() {
  const copyBtn = document.getElementById('btn-copy-email');
  const contactForm = document.getElementById('contact-form');

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(personalInfo.email).then(() => {
        showToast('Email wasifjamee05@gmail.com copied to clipboard!');
      }).catch(() => {
        showToast('Direct email: wasifjamee05@gmail.com');
      });
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const subject = document.getElementById('contact-subject').value;
      const message = document.getElementById('contact-message').value;

      showToast(`Thank you, ${name}! Generating mail dispatch...`);

      // Open mailto with encoded parameters
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject + " - " + name)}&body=${encodeURIComponent("Sender: " + name + " <" + email + ">\n\n" + message)}`;
      
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 700);

      contactForm.reset();
    });
  }
}

/* ==========================================================================
   Toast Notification Helper
   ========================================================================== */
function showToast(message) {
  const toast = document.getElementById('toast-notice');
  const msgEl = document.getElementById('toast-msg');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* ==========================================================================
   Navigation Spy & Mobile Drawer
   ========================================================================== */
function initNavigation() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const backToTop = document.getElementById('btn-back-to-top');

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    drawer.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    });
  }

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Active section scrollspy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(sec => {
      const secHeight = sec.offsetHeight;
      const secTop = sec.offsetTop - 120;
      const secId = sec.getAttribute('id');

      if (scrollY > secTop && scrollY <= secTop + secHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${secId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* ==========================================================================
   Architecture Inspection Modal
   ========================================================================== */
function initModal() {
  const modal = document.getElementById('arch-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove('open');
  }
}

function openProjectModal(project) {
  const modal = document.getElementById('arch-modal');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="badge" style="margin-bottom: 0.5rem;">${project.categoryLabel}</span>
      <h2 id="modal-project-title" style="font-size: 1.85rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.35rem;">
        ${project.title} — System Architecture
      </h2>
      <div style="font-size: 0.95rem; color: var(--accent-cyan); font-weight: 600;">
        ${project.tagline}
      </div>
    </div>

    <div style="margin-bottom: 1.75rem;">
      <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem;">
        Architectural Overview
      </h3>
      <p style="font-size: 0.92rem; line-height: 1.7; color: var(--text-muted);">
        ${project.architecture.overview}
      </p>
    </div>

    <div style="margin-bottom: 1.75rem;">
      <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.75rem;">
        Core Components &amp; Ingestion Subsystems
      </h3>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem;">
        ${project.architecture.components.map(c => `
          <li style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.9rem; color: var(--text-muted);">
            <span style="color: var(--accent-cyan); font-weight: bold;">▹</span>
            <span>${c}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="background: rgba(0, 0, 0, 0.25); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.75rem;">
      <div style="font-size: 0.78rem; color: var(--text-dim); margin-bottom: 0.25rem;">VERIFIED TECH STACK</div>
      <div style="font-family: var(--font-mono); font-size: 0.88rem; color: var(--accent-emerald);">
        ${project.architecture.stack}
      </div>
    </div>

    <div style="display: flex; gap: 1rem; justify-content: flex-end;">
      <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        <span>Inspect Source on GitHub</span>
        <span>↗</span>
      </a>
    </div>
  `;

  modal.classList.add('open');
}

/* ==========================================================================
   Copyright Year
   ========================================================================== */
function initCopyright() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
