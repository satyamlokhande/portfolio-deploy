(() => {
'use strict';

/* =====================================================================
   CONTENT — edit this block to make the portfolio yours.
   ===================================================================== */
const CONFIG = {
  name: "SATYAM LOKHANDE",
  initials: "YN",
  tagline: "Designed & built with curiosity, code, and creativity.",
  portrait: "",                       // e.g. "me.jpg" (embed as data: URI when hosting this single file)
  portraitAlt: "Portrait of SATYAM LOKHANDE", // Alt text for portrait image
  email: "hello@example.com",
  socials: [
    { label: "GitHub",   icon: "github",   url: "https://github.com" },
    { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com" },
    { label: "Email",    icon: "mail",     url: "mailto:hello@example.com" }
  ],
  // Years and technologies are calculated. Replace these two with your real numbers:
  stats: { projects: 4, achievements: 3 }
};

const PROJECTS = [
  { name: "Kisan Setu", category: "Full-stack · Agritech", desc: "A market-linkage and farmer platform built to bridge farmers and buyers.",
    tags: ["Full-stack", "Web platform"], image: "", live: "", repo: "", sample: false },
  { name: "Project Name", category: "AI-powered application", desc: "Replace this card with a real project: what it does, your role, and the outcome.",
    tags: ["AI / ML", "Web app"], image: "", live: "", repo: "", sample: true },
  { name: "Project Name", category: "Full-stack web application", desc: "Replace this card with a real project: what it does, your role, and the outcome.",
    tags: ["Full-stack", "APIs"], image: "", live: "", repo: "", sample: true },
  { name: "Project Name", category: "Creative interface", desc: "Replace this card with a real project: what it does, your role, and the outcome.",
    tags: ["UI / UX", "Interaction"], image: "", live: "", repo: "", sample: true }
];

const SKILLS = [
  { id: "frontend", label: "Frontend", items: [
    { name: "React", desc: "Component-driven interfaces built with hooks, state, and reusable patterns.", related: ["Next.js", "TypeScript", "Tailwind CSS"] },
    { name: "Next.js", desc: "Routing, server rendering, and performance for production React apps.", related: ["React", "Node.js", "REST APIs"] },
    { name: "JavaScript", desc: "The language of the web — from the DOM to async patterns.", related: ["TypeScript", "React", "Node.js"] },
    { name: "TypeScript", desc: "Typed JavaScript for safer, more maintainable code.", related: ["JavaScript", "React", "Node.js"] },
    { name: "HTML", desc: "Semantic, accessible markup as the foundation of every page.", related: ["CSS", "Accessibility", "SEO"] },
    { name: "CSS", desc: "Layout, motion, and design systems that scale across screens.", related: ["HTML", "Tailwind CSS", "Animation"] },
    { name: "Tailwind CSS", desc: "Utility-first styling for fast, consistent interfaces.", related: ["CSS", "React", "Design tokens"] }
  ]},
  { id: "backend", label: "Backend", items: [
    { name: "Node.js", desc: "JavaScript on the server for APIs, tooling, and real-time apps.", related: ["Express", "REST APIs", "MongoDB"] },
    { name: "Express", desc: "Minimal, flexible web framework for building HTTP services.", related: ["Node.js", "REST APIs", "MongoDB"] },
    { name: "Python", desc: "Scripting, automation, and data or ML workflows.", related: ["Machine Learning", "Automation", "SQL"] },
    { name: "REST APIs", desc: "Clear, well-structured interfaces between clients and services.", related: ["Express", "Node.js", "Postman"] },
    { name: "MongoDB", desc: "Document database for flexible, fast-moving data models.", related: ["Node.js", "Express", "SQL"] },
    { name: "SQL", desc: "Relational modelling and queries for structured data.", related: ["Python", "Node.js", "Databases"] }
  ]},
  { id: "tools", label: "Tools", items: [
    { name: "Git", desc: "Version control for collaboration and clean project history.", related: ["GitHub", "Branching", "Code review"] },
    { name: "GitHub", desc: "Hosting, pull requests, and workflows for teamwork.", related: ["Git", "Actions", "Code review"] },
    { name: "Docker", desc: "Containers for repeatable environments and deployments.", related: ["Cloud", "Node.js", "CI / CD"] },
    { name: "Figma", desc: "Interface design, prototyping, and design handoff.", related: ["UI / UX", "Prototyping", "Design systems"] },
    { name: "VS Code", desc: "The editor and extensions that shape a fast daily workflow.", related: ["Git", "Debugging", "Extensions"] }
  ]},
  { id: "ai", label: "AI / Other", items: [
    { name: "AI", desc: "Adding intelligent features to products in practical ways.", related: ["Machine Learning", "APIs", "Automation"] },
    { name: "Machine Learning", desc: "Training and applying models to real data.", related: ["Python", "AI", "Data"] },
    { name: "APIs", desc: "Integrating third-party services and building your own.", related: ["REST APIs", "AI", "Cloud"] },
    { name: "Cloud", desc: "Deploying and running applications on cloud platforms.", related: ["Docker", "APIs", "CI / CD"] },
    { name: "Automation", desc: "Scripting repetitive work so people can focus on what matters.", related: ["Python", "APIs", "AI"] }
  ]}
];

// Add as many entries as you like — categories can be Education, Experience, Project, Hackathon, Certification, Achievement…
const JOURNEY = [
  { date: "2023", category: "Milestone", title: "Started the development journey", text: "Wrote the first lines of code and learned the fundamentals through small, hands-on builds." },
  { date: "2024", category: "Projects", title: "Built first major projects", text: "Turned the fundamentals into complete applications — learning to plan, ship, and iterate." },
  { date: "2025", category: "Full-stack", title: "Expanded into full-stack development", text: "Grew from interfaces into APIs, databases, and deployment, owning features end to end." },
  { date: "2026", category: "Now", title: "Building advanced digital products", text: "Combining engineering, design, and AI to build products that solve real problems." }
];

/* =====================================================================
   HELPERS
   ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const icon = (id, cls = '') => `<svg class="ico ${cls}" aria-hidden="true" focusable="false"><use href="#i-${id}"/></svg>`;
const root = document.documentElement;

/* =====================================================================
   CONTENT RENDERING
   ===================================================================== */
document.title = `${CONFIG.name} — Full-Stack Developer & Creative Technologist`;
$$('[data-initials]').forEach(el => el.textContent = CONFIG.initials);
$$('[data-name]').forEach(el => { if (el.id !== 'heroName') el.textContent = CONFIG.name; });
$('#tagline').textContent = CONFIG.tagline;
$('#year').textContent = new Date().getFullYear();

// Hero name — word-by-word reveal
$('#heroName').innerHTML = CONFIG.name.split(/\s+/).map((w, i) =>
  `<span class="w"><span class="wi" style="animation-delay:${(0.2 + i * 0.12).toFixed(2)}s">${w}</span></span>`).join(' ');

// Socials
const socialHTML = CONFIG.socials.map(s =>
  `<a class="social" href="${s.url}" ${s.url.startsWith('mailto:') ? '' : 'target="_blank" rel="noopener noreferrer"'} aria-label="${s.label}" data-cursor="OPEN">${icon(s.icon)}</a>`).join('');
$$('[data-socials]').forEach(el => el.innerHTML = socialHTML);
$('#contactLinks').innerHTML = CONFIG.socials.map(s => {
  const sub = s.icon === 'mail' ? CONFIG.email : s.url.replace(/^https?:\/\/(www\.)?/, '');
  return `<a class="c-link" href="${s.url}" ${s.url.startsWith('mailto:') ? '' : 'target="_blank" rel="noopener noreferrer"'} data-cursor="OPEN">${icon(s.icon)}<span>${s.label}<small>${sub}</small></span></a>`;
}).join('');

// Portrait image (optional)
if (CONFIG.portrait) {
  const img = document.createElement('img');
  img.src = CONFIG.portrait; img.alt = CONFIG.portraitAlt; img.loading = 'lazy';
  $('#ptFrame').prepend(img);
  $$('#ptFrame .pt-mono, #ptFrame .pt-ring, #ptFrame .pt-square').forEach(e => e.remove());
}

// Project artwork (used when no image is provided)
const artDefs = i => `<defs><linearGradient id="ga${i}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#22D3EE"/><stop offset=".55" stop-color="#3B82F6"/><stop offset="1" stop-color="#8B5CF6"/></linearGradient><radialGradient id="gb${i}" cx=".25" cy=".15" r="1.1"><stop offset="0" stop-color="#232838"/><stop offset="1" stop-color="#0B0D12"/></radialGradient><pattern id="gp${i}" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#fff" stroke-opacity=".05"/></pattern></defs><rect width="640" height="420" fill="url(#gb${i})"/><rect width="640" height="420" fill="url(#gp${i})"/>`;
const ART = [
  i => `<g fill="none" stroke="url(#ga${i})" stroke-linecap="round"><path d="M70 300Q320 30 570 300" stroke-width="4"/><path d="M110 300Q320 90 530 300" stroke-width="2.5" opacity=".6"/><path d="M150 300Q320 150 490 300" stroke-width="2" opacity=".35"/></g><path d="M40 300H600" stroke="#fff" stroke-opacity=".18"/><g fill="url(#ga${i})"><circle cx="70" cy="300" r="10"/><circle cx="570" cy="300" r="10"/><circle cx="320" cy="165" r="7"/></g>`,
  i => { const n = [[120,120],[300,90],[500,140],[210,240],[400,260],[540,320],[110,320]], e = [[0,1],[1,2],[0,3],[1,3],[1,4],[2,4],[3,4],[4,5],[3,6],[2,5]];
    return `<g stroke="#3B82F6" stroke-opacity=".5" stroke-width="1.5">${e.map(([a,b]) => `<line x1="${n[a][0]}" y1="${n[a][1]}" x2="${n[b][0]}" y2="${n[b][1]}"/>`).join('')}</g><g>${n.map((p,k) => `<circle cx="${p[0]}" cy="${p[1]}" r="${k%3===0?12:8}" fill="${k%3===0?`url(#ga${i})`:'#151821'}" stroke="#22D3EE" stroke-opacity=".7"/>`).join('')}</g>`; },
  i => `<rect x="170" y="70" width="350" height="230" rx="22" fill="#151821" stroke="#fff" stroke-opacity=".1"/><rect x="130" y="110" width="350" height="230" rx="22" fill="#1B1F2A" stroke="#fff" stroke-opacity=".14"/><rect x="90" y="150" width="350" height="230" rx="22" fill="#151821" stroke="url(#ga${i})" stroke-width="2"/><rect x="118" y="180" width="120" height="14" rx="7" fill="url(#ga${i})"/><rect x="118" y="212" width="260" height="10" rx="5" fill="#fff" opacity=".12"/><rect x="118" y="234" width="210" height="10" rx="5" fill="#fff" opacity=".08"/><rect x="118" y="290" width="90" height="34" rx="17" fill="#3B82F6" opacity=".8"/>`,
  i => `<g fill="none" stroke="url(#ga${i})" stroke-linecap="round"><path d="M0 250C120 170 200 330 320 240S520 160 640 240" stroke-width="4"/><path d="M0 285C120 205 200 365 320 275S520 195 640 275" stroke-width="2.5" opacity=".55"/><path d="M0 320C120 240 200 400 320 310S520 230 640 310" stroke-width="2" opacity=".3"/></g><circle cx="470" cy="118" r="52" fill="url(#ga${i})" opacity=".85"/><circle cx="470" cy="118" r="78" fill="none" stroke="#22D3EE" stroke-opacity=".3"/>`
];
const artFor = i => `<svg viewBox="0 0 640 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">${artDefs(i)}${ART[i % ART.length](i)}</svg>`;

$('#projects').innerHTML = PROJECTS.map((p, i) => {
  const num = String(i + 1).padStart(2, '0');
  const media = p.image ? `<img src="${p.image}" alt="${p.name} preview" loading="lazy">` : artFor(i);
  const live = p.live ? `<a class="btn btn-primary" href="${p.live}" target="_blank" rel="noopener noreferrer" data-cursor="OPEN">View Project ${icon('ur', 'ico-ur')}</a>`
                      : `<span class="btn btn-ghost is-disabled" aria-disabled="true">Case study soon</span>`;
  const repo = p.repo ? `<a class="btn btn-ghost" href="${p.repo}" target="_blank" rel="noopener noreferrer" data-cursor="OPEN">${icon('github')} GitHub</a>` : '';
  return `<article class="project reveal" style="--i:${i}">
    <div class="project-inner">
      <div class="project-visual" data-cursor="VIEW"><div class="pv-media">${media}</div><span class="pv-num" aria-hidden="true">${num}</span></div>
      <div class="project-body">
        ${p.sample ? '<span class="sample-chip">Sample — replace me</span>' : ''}
        <p class="label">${num} &nbsp;/&nbsp; ${p.category}</p>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <ul class="tags" aria-label="Technologies">${p.tags.map((t, k) => `<li style="--k:${k}">${t}</li>`).join('')}</ul>
        <div class="actions">${live}${repo}</div>
      </div>
    </div>
  </article>`;
}).join('');

// Stats
const firstYear = Math.min(...JOURNEY.map(j => parseInt(j.date, 10)).filter(Number.isFinite));
const totalSkills = SKILLS.reduce((n, c) => n + c.items.length, 0);
const STATS = [
  { n: Math.max(1, new Date().getFullYear() - firstYear), label: "Years Experience" },
  { n: CONFIG.stats.projects, label: "Projects Built" },
  { n: totalSkills, label: "Technologies" },
  { n: CONFIG.stats.achievements, label: "Achievements" }
];
$('#stats').innerHTML = STATS.map(s => `<li><strong data-count="${s.n}" data-suffix="+">0</strong><span>${s.label}</span></li>`).join('');

// Journey
$('#tlList').innerHTML = JOURNEY.map((j, i) => `<li class="tl-item" style="--side:${i % 2 ? -1 : 1}">
  <span class="tl-dot" aria-hidden="true"></span>
  <article class="tl-card glass"><div class="tl-meta"><time class="tl-date">${j.date}</time><span class="pill">${j.category}</span></div><h3>${j.title}</h3><p>${j.text}</p></article>
</li>`).join('');

/* =====================================================================
   REVEAL ON SCROLL / COUNTERS / TILT
   ===================================================================== */
const revealables = () => $$('.reveal, .tl-item');
if ('IntersectionObserver' in window && !reduced) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  revealables().forEach(el => io.observe(el));
} else revealables().forEach(el => el.classList.add('in'));

function countUp(el) {
  const end = +el.dataset.count, suf = el.dataset.suffix || '';
  if (reduced) { el.textContent = end + suf; return; }
  const t0 = performance.now(), dur = 1600;
  (function f(now) { const p = clamp((now - t0) / dur, 0, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suf; if (p < 1) requestAnimationFrame(f); })(t0);
}
if ('IntersectionObserver' in window) {
  const cio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { $$('[data-count]', e.target).forEach(countUp); cio.unobserve(e.target); } }), { threshold: 0.4 });
  cio.observe($('#stats'));
} else $$('[data-count]').forEach(countUp);

function attachTilt(el, target, max) {
  if (!finePointer || reduced) return;
  el.addEventListener('pointermove', e => {
    const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    target.style.setProperty('--rx', (-y * max).toFixed(2) + 'deg');
    target.style.setProperty('--ry', (x * max * 1.2).toFixed(2) + 'deg');
  });
  el.addEventListener('pointerleave', () => { target.style.setProperty('--rx', '0deg'); target.style.setProperty('--ry', '0deg'); });
}
$$('.project-visual').forEach(v => attachTilt(v, $('.pv-media', v), 8));
attachTilt($('#portrait'), $('#ptFrame'), 10);

/* =====================================================================
   NAVIGATION
   ===================================================================== */
const nav = $('#nav'), progress = $('#progress'), cue = $('#cue');
const links = $$('#navLinks a'), ind = $('#navInd');
const secEls = links.map(a => document.getElementById(a.getAttribute('href').slice(1)));
let curIdx = -1;

function moveInd() {
  const a = links[curIdx];
  if (!a || !a.offsetWidth) { ind.style.opacity = 0; return; }
  ind.style.opacity = 1; ind.style.width = a.offsetWidth + 'px'; ind.style.transform = `translateX(${a.offsetLeft}px)`;
}
function updateActive() {
  const y = innerHeight * 0.4;
  let cur = 0;
  secEls.forEach((el, i) => { if (el.getBoundingClientRect().top <= y) cur = i; });
  if (cur !== curIdx) { curIdx = cur; links.forEach((a, i) => i === cur ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current')); moveInd(); }
}

// Timeline progress
const tlList = $('#tlList'), tlFill = $('#tlFill'), tlItems = $$('.tl-item');
function updateTimeline() {
  const r = tlList.getBoundingClientRect();
  const p = clamp((innerHeight * 0.55 - r.top) / r.height, 0, 1);
  tlFill.style.setProperty('--p', p.toFixed(4));
  tlItems.forEach(it => { const d = $('.tl-dot', it).getBoundingClientRect(); it.classList.toggle('active', d.top + d.height / 2 <= innerHeight * 0.55); });
}

let ticking = false;
function onScroll() {
  if (ticking) return; ticking = true;
  requestAnimationFrame(() => {
    ticking = false;
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle('scrolled', y > 24);
    progress.style.transform = `scaleX(${max > 0 ? clamp(y / max, 0, 1) : 0})`;
    cue.classList.toggle('gone', y > 80);
    updateActive(); updateTimeline();
  });
}
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', () => { moveInd(); onScroll(); if (innerWidth > 900) setMenu(false, true); });
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { moveInd(); onScroll(); });
onScroll();

// Mobile menu
const menu = $('#menu'), burger = $('#burger');
function setMenu(open, silent) {
  if (menu.classList.contains('open') === open) return;
  menu.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menu.setAttribute('aria-hidden', String(!open));
  root.classList.toggle('menu-open', open);
  if (open) $('.m-link', menu).focus({ preventScroll: true });
  else if (!silent) burger.focus({ preventScroll: true });
}
burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
document.addEventListener('keydown', e => {
  if (!menu.classList.contains('open')) return;
  if (e.key === 'Escape') { setMenu(false); return; }
  if (e.key === 'Tab') {
    const f = [burger, ...$$('a', menu)], first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

// Smooth in-page anchors (also closes the mobile menu)
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href').slice(1), t = id && document.getElementById(id);
  if (!t) return;
  e.preventDefault();
  const wasOpen = menu.classList.contains('open');
  if (wasOpen) setMenu(false, true);
  requestAnimationFrame(() => {
    t.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    if (t.hasAttribute('tabindex')) t.focus({ preventScroll: true });
    try { history.replaceState(null, '', '#' + id); } catch (_) {}
  });
});

/* =====================================================================
   CUSTOM CURSOR + MAGNETIC BUTTONS
   ===================================================================== */
if (finePointer && !reduced) {
  const dot = $('#cDot'), ring = $('#cRing'), lab = $('#cLabel');
  root.classList.add('has-cursor');
  let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y, raf = 0, shown = false;
  const loop = () => {
    rx = lerp(rx, x, .18); ry = lerp(ry, y, .18);
    ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
    raf = (Math.abs(x - rx) + Math.abs(y - ry) > .3) ? requestAnimationFrame(loop) : 0;
  };
  addEventListener('pointermove', e => {
    x = e.clientX; y = e.clientY;
    dot.style.transform = `translate3d(${x}px,${y}px,0)`;
    if (!shown) { shown = true; rx = x; ry = y; document.body.classList.add('cursor-on'); }
    if (!raf) raf = requestAnimationFrame(loop);
  }, { passive: true });
  document.addEventListener('pointerover', e => {
    const t = e.target.closest('[data-cursor],a,button,input,textarea,[role="tab"]');
    const l = t && t.closest('[data-cursor]');
    ring.classList.toggle('is-hover', !!t);
    lab.textContent = l ? l.dataset.cursor : '';
    ring.classList.toggle('has-label', !!l);
  });
  root.addEventListener('mouseleave', () => document.body.classList.remove('cursor-on'));
  root.addEventListener('mouseenter', () => shown && document.body.classList.add('cursor-on'));

  $$('.magnetic').forEach(b => {
    b.addEventListener('pointermove', e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${((e.clientX - r.left - r.width / 2) * .2).toFixed(1)}px,${((e.clientY - r.top - r.height / 2) * .25).toFixed(1)}px)`;
    });
    b.addEventListener('pointerleave', () => b.style.transform = '');
  });
}

/* =====================================================================
   SKILLS UI
   ===================================================================== */
const COLORS_HEX = ['#22D3EE', '#3B82F6', '#8B5CF6'];
let catIdx = 0, activeSkill = null, skillsScene = null;
const tabsEl = $('#tabs'), listEl = $('#skillList'), detailEl = $('#skillDetail');
tabsEl.innerHTML = SKILLS.map((c, i) => `<button class="tab" role="tab" id="tab-${c.id}" aria-selected="${i === 0}" aria-controls="skillList" tabindex="${i === 0 ? 0 : -1}" data-i="${i}">${c.label}</button>`).join('');

function setActiveSkill(name) {
  const cat = SKILLS[catIdx], s = cat.items.find(x => x.name === name);
  if (!s || activeSkill === name) return;
  activeSkill = name;
  $$('.chip', listEl).forEach(c => c.classList.toggle('active', c.dataset.name === name));
  detailEl.innerHTML = `<p class="label">${cat.label}</p><h3>${s.name}</h3><p>${s.desc}</p><ul class="pills" aria-label="Related">${s.related.map(r => `<li>${r}</li>`).join('')}</ul>`;
  if (skillsScene) skillsScene.highlight(name);
}
function renderCategory(i, focusTab) {
  catIdx = i; activeSkill = null;
  $$('.tab', tabsEl).forEach((t, k) => { t.setAttribute('aria-selected', String(k === i)); t.tabIndex = k === i ? 0 : -1; });
  listEl.setAttribute('aria-labelledby', 'tab-' + SKILLS[i].id);
  listEl.innerHTML = SKILLS[i].items.map((s, k) => `<button class="chip" type="button" data-name="${s.name}" style="--k:${k};--c:${COLORS_HEX[k % 3]}"><i></i>${s.name}</button>`).join('');
  if (skillsScene) skillsScene.setSkills(SKILLS[i].items.map(s => s.name));
  setActiveSkill(SKILLS[i].items[0].name);
  if (focusTab) $$('.tab', tabsEl)[i].focus();
}
tabsEl.addEventListener('click', e => { const t = e.target.closest('.tab'); if (t) renderCategory(+t.dataset.i); });
tabsEl.addEventListener('keydown', e => {
  const k = { ArrowRight: 1, ArrowLeft: -1 }[e.key]; if (!k) return;
  e.preventDefault(); renderCategory((catIdx + k + SKILLS.length) % SKILLS.length, true);
});
['mouseover', 'focusin', 'click'].forEach(ev => listEl.addEventListener(ev, e => { const c = e.target.closest('.chip'); if (c) setActiveSkill(c.dataset.name); }));
renderCategory(0);

/* =====================================================================
   CONTACT FORM
   ===================================================================== */
const form = $('#contactForm'), success = $('#success');
const rules = {
  name: v => v.trim().length >= 2 || 'Enter your name (at least 2 characters).',
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Enter a valid email address, like you@example.com.',
  subject: v => v.trim().length >= 3 || 'Add a short subject (at least 3 characters).',
  message: v => v.trim().length >= 10 || 'Write a message of at least 10 characters.'
};
const inputs = $$('input, textarea', form);
function check(inp) {
  const res = rules[inp.name](inp.value), ok = res === true;
  $('#err-' + inp.name).textContent = ok ? '' : res;
  inp.setAttribute('aria-invalid', String(!ok));
  inp.closest('.field').classList.toggle('has-error', !ok);
  return ok;
}
inputs.forEach(inp => {
  inp.addEventListener('blur', () => { if (inp.value) check(inp); });
  inp.addEventListener('input', () => { if (inp.closest('.field').classList.contains('has-error')) check(inp); });
});
form.addEventListener('submit', e => {
  e.preventDefault();
  const results = inputs.map(check);
  if (!results.every(Boolean)) { inputs[results.indexOf(false)].focus(); return; }
  const btn = $('#sendBtn'); btn.disabled = true; $('#sendLabel').textContent = 'Sending…';
  setTimeout(() => {
    form.hidden = true; success.hidden = false; success.focus({ preventScroll: true });
    form.reset(); btn.disabled = false; $('#sendLabel').textContent = 'Send message';
  }, reduced ? 0 : 900);
});
$('#againBtn').addEventListener('click', () => { success.hidden = true; form.hidden = false; $('#f-name').focus(); });

/* =====================================================================
   3D — Three.js is lazy-loaded after the page is interactive
   ===================================================================== */
const THREE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
function loadScript(src) { return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.async = true; s.onload = res; s.onerror = rej; document.head.appendChild(s); }); }
const idle = window.requestIdleCallback ? cb => requestIdleCallback(cb, { timeout: 800 }) : cb => setTimeout(cb, 300);
const boot = () => idle(() => loadScript(THREE_URL).then(initThree).catch(() => root.classList.add('no-webgl')));
if (document.readyState === 'complete') boot(); else addEventListener('load', boot, { once: true });

function initThree() {
  const THREE = window.THREE; if (!THREE) return;
  const low = innerWidth < 768 || (navigator.hardwareConcurrency || 8) <= 4;
  const dprCap = low ? 1.5 : 2;
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  addEventListener('pointermove', e => { pointer.tx = e.clientX / innerWidth * 2 - 1; pointer.ty = -(e.clientY / innerHeight * 2 - 1); }, { passive: true });
  const easeOut = t => 1 - Math.pow(1 - t, 3);

  const stages = []; let time = 0, last = 0, raf = 0;
  function tick(now) {
    const dt = Math.min((now - last) / 1000, .05); last = now; time += dt;
    pointer.x = lerp(pointer.x, pointer.tx, .06); pointer.y = lerp(pointer.y, pointer.ty, .06);
    let any = false;
    for (const s of stages) { if (!s.visible) continue; any = true; s.update(time, dt); s.renderer.render(s.scene, s.camera); }
    raf = any && !document.hidden ? requestAnimationFrame(tick) : 0;
  }
  const ensureLoop = () => { if (!raf && !reduced) { last = performance.now(); raf = requestAnimationFrame(tick); } };
  document.addEventListener('visibilitychange', () => { if (!document.hidden) ensureLoop(); });

  // Shared assets
  const dotTexture = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'); const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.4, 'rgba(255,255,255,.6)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
  const orbMat = (alpha = 1) => new THREE.ShaderMaterial({
    transparent: true, uniforms: { uTime: { value: 0 }, uAlpha: { value: alpha } },
    vertexShader: 'varying vec3 vN; varying vec3 vV; void main(){ vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position,1.0); vV = -mv.xyz; gl_Position = projectionMatrix * mv; }',
    fragmentShader: 'uniform float uTime; uniform float uAlpha; varying vec3 vN; varying vec3 vV; void main(){ vec3 n = normalize(vN); vec3 v = normalize(vV); float f = pow(1.0 - max(dot(n,v),0.0), 2.4); vec3 c1 = vec3(.133,.827,.933); vec3 c2 = vec3(.231,.51,.965); vec3 c3 = vec3(.545,.361,.965); float g = n.y*.5 + .5 + .18*sin(uTime*.5 + n.x*3.0); vec3 base = mix(c3, c1, clamp(g,0.0,1.0)); base = mix(base, c2, n.x*.5 + .5) * .34; vec3 col = base + f * mix(c1, c3, clamp(g,0.0,1.0)) * 1.05; gl_FragColor = vec4(col, uAlpha); }'
  });

  function createStage(canvas, opts) {
    let renderer;
    try { renderer = new THREE.WebGLRenderer({ canvas, antialias: !low, alpha: true, powerPreference: 'high-performance' }); } catch (e) { return null; }
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, dprCap)); renderer.setClearColor(0x000000, 0);
    const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(opts.fov || 45, 1, .1, 100);
    camera.position.z = opts.z || 7;
    const stage = { canvas, renderer, scene, camera, visible: false, update() {}, onResize() {} };
    const draw = () => { stage.update(3, 0); renderer.render(scene, camera); };
    stage.draw = draw;
    Object.assign(stage, opts.build(scene, camera, stage));
    const resize = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight; if (!w || !h) return;
      renderer.setSize(w, h, false); camera.aspect = w / h; stage.onResize(camera.aspect, camera); camera.updateProjectionMatrix();
      if (reduced) draw();
    };
    new ResizeObserver(resize).observe(canvas); resize();
    new IntersectionObserver(([e]) => {
      stage.visible = e.isIntersecting;
      if (stage.visible) { canvas.classList.add('ready'); if (reduced) draw(); else ensureLoop(); }
    }, { rootMargin: '120px' }).observe(canvas);
    stages.push(stage);
    return stage;
  }
  // Only build a scene once its canvas is near the viewport
  function lazyStage(canvas, opts, cb) {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const s = createStage(canvas, opts); if (s && cb) cb(s);
    }, { rootMargin: '500px' });
    io.observe(canvas);
  }

  /* ---- HERO ---- */
  lazyStage($('#heroCanvas'), { fov: 45, z: 7.4, build(scene) {
    const g = new THREE.Group(); scene.add(g);
    const core = new THREE.Mesh(new THREE.SphereGeometry(1.15, low ? 32 : 64, low ? 32 : 64), orbMat()); g.add(core);
    const wire = new THREE.Mesh(new THREE.IcosahedronGeometry(1.6, 1), new THREE.MeshBasicMaterial({ color: 0x22D3EE, wireframe: true, transparent: true, opacity: .22 })); g.add(wire);
    const ringA = new THREE.Mesh(new THREE.TorusGeometry(2.1, .012, 8, 180), new THREE.MeshBasicMaterial({ color: 0x3B82F6, transparent: true, opacity: .75 })); ringA.rotation.x = 1.2; g.add(ringA);
    const ringB = new THREE.Mesh(new THREE.TorusGeometry(2.55, .01, 8, 180), new THREE.MeshBasicMaterial({ color: 0x8B5CF6, transparent: true, opacity: .6 })); ringB.rotation.set(.5, .6, 0); g.add(ringB);
    scene.add(new THREE.AmbientLight(0xffffff, .6));
    const l1 = new THREE.PointLight(0x22D3EE, 1.5, 24); l1.position.set(4, 3, 5); scene.add(l1);
    const l2 = new THREE.PointLight(0x8B5CF6, 1.3, 24); l2.position.set(-4, -2, 4); scene.add(l2);
    const geos = [new THREE.OctahedronGeometry(.17), new THREE.BoxGeometry(.24, .24, .24), new THREE.TetrahedronGeometry(.22), new THREE.IcosahedronGeometry(.17, 0), new THREE.TorusGeometry(.15, .05, 8, 20), new THREE.OctahedronGeometry(.13)];
    const cols = [0x22D3EE, 0x3B82F6, 0x8B5CF6];
    const floaters = geos.slice(0, low ? 4 : 6).map((geo, i) => {
      const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: cols[i % 3], metalness: .75, roughness: .28, emissive: cols[i % 3], emissiveIntensity: .12 }));
      g.add(m); return { m, a: i * 1.05, r: 2.35 + (i % 3) * .28, s: .18 + (i % 3) * .05, y: .9 + (i % 2) * .5, spin: .6 + i * .12 };
    });
    const N = low ? 260 : 700, pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) { const r = 3.2 + Math.random() * 3.6, th = Math.random() * 6.283, ph = Math.acos(2 * Math.random() - 1); pos[i * 3] = r * Math.sin(ph) * Math.cos(th); pos[i * 3 + 1] = r * Math.cos(ph) * .7; pos[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th) - 1.5; }
    const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const parts = new THREE.Points(pg, new THREE.PointsMaterial({ size: .07, map: dotTexture, color: 0x94A3B8, transparent: true, opacity: .75, depthWrite: false })); scene.add(parts);
    return {
      update(t, dt) {
        const k = easeOut(clamp(t / 1.8, 0, 1)), p = clamp(scrollY / innerHeight, 0, 1.2);
        g.scale.setScalar(.55 + .45 * k);
        g.rotation.y = t * .12 + pointer.x * .5 + p * 1.2;
        g.rotation.x = pointer.y * -.25 + Math.sin(t * .4) * .05;
        g.position.y = Math.sin(t * .6) * .08 + p * .7;
        core.material.uniforms.uTime.value = t;
        wire.rotation.y = -t * .15; wire.rotation.x = t * .08;
        ringA.rotation.z = t * .2; ringB.rotation.z = -t * .14;
        floaters.forEach(f => { const a = f.a + t * f.s; f.m.position.set(Math.cos(a) * f.r, Math.sin(a * 1.3 + f.a) * f.y, Math.sin(a) * f.r); f.m.rotation.x += dt * f.spin; f.m.rotation.y += dt * f.spin * .7; });
        parts.rotation.y = t * .02 + pointer.x * .12; parts.position.y = pointer.y * .15 + p * .4;
      },
      onResize(a, cam) { cam.position.z = a < .8 ? 8.6 : a < 1.1 ? 7.6 : 7.2; }
    };
  }});

  /* ---- SKILLS ORBIT ---- */
  lazyStage($('#skillsCanvas'), { fov: 45, z: 8.2, build(scene, camera, outer) {
    const canvas = $('#skillsCanvas');
    const g = new THREE.Group(); scene.add(g);
    g.add(new THREE.Mesh(new THREE.SphereGeometry(.62, 40, 40), orbMat()));
    g.add(new THREE.Mesh(new THREE.IcosahedronGeometry(.9, 1), new THREE.MeshBasicMaterial({ color: 0x22D3EE, wireframe: true, transparent: true, opacity: .2 })));
    const ringCfg = [{ r: 1.7, tilt: [.35, 0, .2], speed: .22 }, { r: 2.45, tilt: [-.5, 0, .5], speed: -.16 }, { r: 3.15, tilt: [.9, 0, -.35], speed: .11 }];
    const rings = ringCfg.map(c => {
      const grp = new THREE.Group(); grp.rotation.set(...c.tilt);
      const pts = []; for (let i = 0; i <= 128; i++) { const a = i / 128 * Math.PI * 2; pts.push(new THREE.Vector3(Math.cos(a) * c.r, 0, Math.sin(a) * c.r)); }
      grp.add(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: .12 })));
      g.add(grp); return Object.assign({ grp }, c);
    });
    const NODE_COLORS = [0x22D3EE, 0x3B82F6, 0x8B5CF6];
    const measure = document.createElement('canvas').getContext('2d');
    function makeLabel(text) {
      const fs = 15; measure.font = `600 ${fs}px Inter, system-ui, sans-serif`;
      const W = Math.ceil(measure.measureText(text).width + 24), H = 30, S = 3;
      const c = document.createElement('canvas'); c.width = W * S; c.height = H * S;
      const x = c.getContext('2d'); x.scale(S, S);
      x.fillStyle = 'rgba(16,18,24,.82)'; x.strokeStyle = 'rgba(255,255,255,.16)'; x.lineWidth = 1;
      x.beginPath(); x.roundRect ? x.roundRect(.5, .5, W - 1, H - 1, 15) : x.rect(.5, .5, W - 1, H - 1); x.fill(); x.stroke();
      x.fillStyle = '#F8FAFC'; x.font = `600 ${fs}px Inter, system-ui, sans-serif`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(text, W / 2, H / 2 + 1);
      const tex = new THREE.CanvasTexture(c); tex.minFilter = THREE.LinearFilter;
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
      sp.scale.set(W / 62, H / 62, 1); sp.renderOrder = 2; return sp;
    }
    let nodes = [], activeName = null;
    function setSkills(names) {
      nodes.forEach(n => { n.holder.parent.remove(n.holder); n.dot.geometry.dispose(); n.dot.material.dispose(); n.sprite.material.map.dispose(); n.sprite.material.dispose(); n.hit.geometry.dispose(); });
      nodes = [];
      names.forEach((name, i) => {
        const ring = rings[i % 3], holder = new THREE.Group();
        const dot = new THREE.Mesh(new THREE.SphereGeometry(.15, 20, 20), new THREE.MeshBasicMaterial({ color: NODE_COLORS[i % 3] }));
        const sprite = makeLabel(name); sprite.position.y = .46;
        const hit = new THREE.Mesh(new THREE.SphereGeometry(.42, 8, 8), new THREE.MeshBasicMaterial({ visible: false })); hit.userData.name = name;
        holder.add(dot, sprite, hit); ring.grp.add(holder);
        const count = names.filter((_, j) => j % 3 === i % 3).length, idx = Math.floor(i / 3);
        nodes.push({ name, ring, holder, dot, sprite, hit, angle: idx / count * Math.PI * 2 + (i % 3) * .7, color: NODE_COLORS[i % 3], s: 1 });
      });
      highlight(activeName);
    }
    function highlight(name) {
      activeName = name;
      nodes.forEach(n => { n.dot.material.color.set(n.name === name ? 0xffffff : n.color); });
      if (reduced && outer.draw) outer.draw();
    }
    // Drag + hover
    let dragging = false, lx = 0, ly = 0, offY = 0, offX = 0;
    const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
    canvas.addEventListener('pointerdown', e => { dragging = true; lx = e.clientX; ly = e.clientY; try { canvas.setPointerCapture(e.pointerId); } catch (_) {} });
    const up = () => { dragging = false; };
    canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
    canvas.addEventListener('pointermove', e => {
      if (dragging) { offY += (e.clientX - lx) * .008; offX = clamp(offX + (e.clientY - ly) * .006, -.8, .8); lx = e.clientX; ly = e.clientY; if (reduced && outer.draw) outer.draw(); return; }
      const r = canvas.getBoundingClientRect(); ndc.set((e.clientX - r.left) / r.width * 2 - 1, -((e.clientY - r.top) / r.height * 2 - 1));
      ray.setFromCamera(ndc, camera);
      const hit = ray.intersectObjects(nodes.map(n => n.hit), false)[0];
      if (hit) setActiveSkill(hit.object.userData.name);
    });
    const stage = { update(t, dt) {
      g.rotation.y = t * .05 + offY + pointer.x * .18; g.rotation.x = offX + pointer.y * -.12;
      nodes.forEach(n => {
        const a = n.angle + t * n.ring.speed; n.holder.position.set(Math.cos(a) * n.ring.r, 0, Math.sin(a) * n.ring.r);
        const on = n.name === activeName; n.s = lerp(n.s, on ? 1.8 : 1, .12); n.dot.scale.setScalar(n.s);
        n.sprite.material.opacity = on ? 1 : .8; n.sprite.position.y = .3 + .16 * n.s;
      });
    }, onResize(a, cam) { cam.position.z = a >= 1 ? 8.2 : 8.2 / a * .92; }, setSkills, highlight };
    return stage;
  }}, s => {
    skillsScene = s;
    s.setSkills(SKILLS[catIdx].items.map(x => x.name)); if (activeSkill) s.highlight(activeSkill);
  });

  /* ---- CONTACT ORB ---- */
  lazyStage($('#contactCanvas'), { fov: 45, z: 7, build(scene) {
    const g = new THREE.Group(); scene.add(g);
    const N = low ? 700 : 1700, pos = new Float32Array(N * 3), col = new Float32Array(N * 3), ca = new THREE.Color(0x22D3EE), cb = new THREE.Color(0x8B5CF6), tmp = new THREE.Color();
    for (let i = 0; i < N; i++) {
      const y = 1 - i / (N - 1) * 2, r = Math.sqrt(1 - y * y), th = i * 2.399963;
      pos.set([Math.cos(th) * r * 2.5, y * 2.5, Math.sin(th) * r * 2.5], i * 3);
      tmp.copy(ca).lerp(cb, (y + 1) / 2); col.set([tmp.r, tmp.g, tmp.b], i * 3);
    }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.add(new THREE.Points(geo, new THREE.PointsMaterial({ size: .06, map: dotTexture, vertexColors: true, transparent: true, opacity: .8, depthWrite: false })));
    g.add(new THREE.Mesh(new THREE.SphereGeometry(1.9, 48, 48), orbMat(.9)));
    const ring = new THREE.Mesh(new THREE.TorusGeometry(3, .01, 8, 200), new THREE.MeshBasicMaterial({ color: 0x3B82F6, transparent: true, opacity: .5 })); ring.rotation.x = 1.3; g.add(ring);
    return { update(t) {
      const m = Math.hypot(pointer.x, pointer.y);
      g.rotation.y = t * .1 + pointer.x * .7; g.rotation.x = .15 + pointer.y * -.45;
      g.scale.setScalar(1 + Math.sin(t * .8) * .015 + m * .03);
      ring.rotation.z = t * .1; g.children[1].material.uniforms.uTime.value = t;
    }, onResize(a, cam) { cam.position.z = a < 1 ? 7 / a * .95 : 7.4; } };
  }});
}
})();
