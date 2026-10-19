/**
 * T.M. Wasif Jamee — Engineering Portfolio Logic & Interactivity
 */

import { personalInfo, metrics, projects, skillCategories, terminalCommands, githubTelemetry } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypewriter();
  initMetrics();
  initProjects();
  initArchitectureDiagram();
  initSkills();
  initGithubTelemetry();
  initTerminal();
  initContact();
  initNavigation();
  initModal();
  initResumeModal();
  initCopyright();
});

/* ==========================================================================
   Theme Management (Dark / Light with LocalStorage persistence)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const htmlEl = document.documentElement;

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
    "Software Engineer Intern Target (Summer & Fall 2026/2027)",
    "MERN Stack Developer & Real-Time Distributed Architect",
    "AI + Full Stack Engineering — Architect of ReliefAI",
    "Undergraduate Student @ AIUB (Dhaka, Bangladesh)",
    "Algorithmic Problem Solving in C++, Python & TypeScript"
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
      typeSpeed = 1900;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 400;
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
   Featured Systems / Engineering Case Studies
   (Problem, Solution, Architecture, Contributions, Challenges Solved)
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
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span class="badge" style="font-family: var(--font-mono); font-size: 0.72rem; padding: 0.2rem 0.5rem;">
                ⭐ ${p.stars} • 🍴 ${p.forks}
              </span>
              <span class="project-status-chip">
                <span class="pulse-dot"></span>
                ${p.status}
              </span>
            </div>
          </div>

          <h3 class="project-title">${p.title}</h3>
          <div class="project-tagline">${p.tagline}</div>
          
          <!-- Engineering Case Study Core Blocks -->
          <div style="background: rgba(0, 0, 0, 0.22); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.1rem; margin-bottom: 1.25rem;">
            <div style="margin-bottom: 0.75rem;">
              <span style="font-size: 0.75rem; font-weight: 700; color: #F43F5E; text-transform: uppercase; letter-spacing: 0.05em; font-family: var(--font-mono);">
                [ PROBLEM STATEMENT ]
              </span>
              <p style="font-size: 0.88rem; line-height: 1.55; color: var(--text-muted); margin-top: 0.25rem;">
                ${p.caseStudy.problemStatement}
              </p>
            </div>

            <div>
              <span style="font-size: 0.75rem; font-weight: 700; color: #10B981; text-transform: uppercase; letter-spacing: 0.05em; font-family: var(--font-mono);">
                [ SOLUTION &amp; IMPACT ]
              </span>
              <p style="font-size: 0.88rem; line-height: 1.55; color: var(--text-muted); margin-top: 0.25rem;">
                ${p.caseStudy.solution}
              </p>
            </div>
          </div>

          <div class="project-telemetry-row">
            <div class="telemetry-item">
              <span class="telemetry-lbl">Performance Metric</span>
              <span class="telemetry-val">${p.metrics.latency}</span>
            </div>
            <div class="telemetry-item" style="border-left: 1px solid var(--border-subtle); padding-left: 1rem;">
              <span class="telemetry-lbl">Architecture Tier</span>
              <span class="telemetry-val">${p.metrics.scale}</span>
            </div>
          </div>

          <div class="project-tech-tags">
            ${p.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>

        <div class="project-actions">
          <button class="btn btn-secondary btn-sm btn-inspect-arch" data-project-id="${p.id}">
            <span>Inspect Full Case Study</span>
            <span>🔍</span>
          </button>
          
          <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            <span>GitHub Code</span>
            <span>↗</span>
          </a>
        </div>
      </article>
    `).join('');

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
   GitHub Telemetry & Language Breakdown
   ========================================================================== */
function initGithubTelemetry() {
  const langContainer = document.getElementById('github-lang-breakdown');
  if (!langContainer) return;

  langContainer.innerHTML = githubTelemetry.topLanguages.map(l => `
    <div>
      <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.25rem;">
        <span style="font-weight: 600; color: var(--text-main);">${l.name}</span>
        <span style="font-family: var(--font-mono); color: var(--accent-cyan);">${l.percentage}%</span>
      </div>
      <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.08); border-radius: var(--radius-full); overflow: hidden;">
        <div style="height: 100%; width: ${l.percentage}%; background: ${l.color}; border-radius: var(--radius-full);"></div>
      </div>
    </div>
  `).join('');
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

      showToast(`Thank you, ${name}! Preparing email dispatch...`);

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
   Engineering Case Study Modal
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

  const cs = project.caseStudy;

  content.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
        <span class="badge">${project.categoryLabel}</span>
        <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-cyan);">⭐ ${project.stars} Stars • Last pushed: ${project.lastPushed}</span>
      </div>
      <h2 id="modal-project-title" style="font-size: 1.85rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.35rem;">
        ${project.title} — Engineering Case Study
      </h2>
      <div style="font-size: 0.95rem; color: var(--accent-cyan); font-weight: 600;">
        ${project.tagline}
      </div>
    </div>

    <!-- Case Study Sections -->
    <div style="display: flex; flex-direction: column; gap: 1.25rem; margin-bottom: 1.75rem;">
      
      <div style="background: rgba(244, 63, 94, 0.08); border-left: 3px solid #F43F5E; padding: 1rem; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
        <h3 style="font-size: 0.85rem; font-weight: 700; color: #F43F5E; text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 0.25rem;">
          1. Problem Statement
        </h3>
        <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-muted);">
          ${cs.problemStatement}
        </p>
      </div>

      <div style="background: rgba(16, 185, 129, 0.08); border-left: 3px solid #10B981; padding: 1rem; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
        <h3 style="font-size: 0.85rem; font-weight: 700; color: #10B981; text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 0.25rem;">
          2. Solution &amp; Engineering Decisions
        </h3>
        <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-muted);">
          ${cs.solution}
        </p>
      </div>

      <div style="background: rgba(56, 189, 248, 0.08); border-left: 3px solid #38BDF8; padding: 1rem; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
        <h3 style="font-size: 0.85rem; font-weight: 700; color: #38BDF8; text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 0.25rem;">
          3. Technical Architecture &amp; Dataflow
        </h3>
        <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-muted);">
          ${cs.techArchitecture}
        </p>
      </div>

      <div style="background: rgba(139, 92, 246, 0.08); border-left: 3px solid #8B5CF6; padding: 1rem; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
        <h3 style="font-size: 0.85rem; font-weight: 700; color: #8B5CF6; text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 0.25rem;">
          4. My Individual Contribution
        </h3>
        <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-muted);">
          ${cs.myContribution}
        </p>
      </div>

      <div style="background: rgba(245, 158, 11, 0.08); border-left: 3px solid #F59E0B; padding: 1rem; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
        <h3 style="font-size: 0.85rem; font-weight: 700; color: #F59E0B; text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 0.25rem;">
          5. Critical Challenges Overcome
        </h3>
        <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-muted);">
          ${cs.challengesSolved}
        </p>
      </div>

      <div style="background: rgba(255, 255, 255, 0.04); border-left: 3px solid #94A3B8; padding: 1rem; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
        <h3 style="font-size: 0.85rem; font-weight: 700; color: #94A3B8; text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 0.25rem;">
          6. Future Engineering Roadmap
        </h3>
        <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-muted);">
          ${cs.futureImprovements}
        </p>
      </div>

    </div>

    <div style="display: flex; gap: 1rem; justify-content: flex-end; border-top: 1px solid var(--border-subtle); padding-top: 1.25rem;">
      <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        <span>Inspect Source Code on GitHub</span>
        <span>↗</span>
      </a>
    </div>
  `;

  modal.classList.add('open');
}

/* ==========================================================================
   Resume Preview Modal
   ========================================================================== */
function initResumeModal() {
  const modal = document.getElementById('resume-modal');
  const viewBtn = document.getElementById('btn-view-resume');
  const closeBtn = document.getElementById('resume-modal-close-btn');

  if (!modal || !viewBtn || !closeBtn) return;

  viewBtn.addEventListener('click', () => {
    modal.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      modal.classList.remove('open');
    }
  });
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
