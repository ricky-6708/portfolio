import { PORTFOLIO_TAXONOMY as data } from './config/taxonomy.js';
import { getCaseStudy } from './case-study.js';

const app = document.querySelector('#app');
// Hash routes work on static servers that do not rewrite deep URLs to index.html.
// Resolve the deployment root from this module URL, not the current route URL.
const siteRoot = new URL('./', import.meta.url);
let revealObserver;
let isScrollingViaClick = false;
const pathFor = (route = '') => `#/${route}`;
const projectTitles = { 'orange-tv': 'Orange TV', 'jw-website': 'James Wellbeloved', 'orange-recycling': 'Orange recycling', 'orange-livescreen': 'Orange livescreen', 'orange-app-tv': 'Orange app TV', 'orange-on-demand-care': 'Orange on-demand care' };
const slugTitle = (id) => projectTitles[id] || id.replace(/-/g, ' ').replace(/^./, (char) => char.toUpperCase());

function header(active) {
  return `<header class="site-header"><a class="wordmark" href="${pathFor()}" data-route="">Ricky Patel</a><nav aria-label="Main navigation">${data.navigation.map((name) => `<a class="nav-link ${active === name.toLowerCase() ? 'selected' : ''}" href="${pathFor(name.toLowerCase())}" data-route="${name.toLowerCase()}">${name}</a>`).join('')}</nav></header>`;
}
function parseAboutInlineMarkdown(text) {
  return text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}
function parseAboutList(markdown, heading) {
  const section = markdown.split(new RegExp('^## ' + heading + '\\s*$', 'm'))[1]?.split(/^## /m)[0] || '';
  return section.split('\n').filter((line) => /^\s*-\s+/.test(line)).map((line) => line.replace(/^\s*-\s+/, ''));
}
function parseAboutExpertise(markdown) {
  const section = markdown.split(/^## Core expertise\s*$/m)[1]?.split(/^## /m)[0] || '';
  return section.split(/^### /m).slice(1).map((category) => {
    const [heading, ...content] = category.split('\n');
    return {
      heading: heading.trim(),
      items: content.filter((line) => /^\s*-\s+/.test(line)).map((line) => line.replace(/^\s*-\s+/, '')),
    };
  });
}
function footer() {
  return `<footer class="site-footer"><div class="footer-brand">Ricky Patel</div><nav aria-label="Footer navigation"><a href="#/" data-route="">Work</a><a href="#/about" data-route="about">About</a><a href="#/contact" data-route="contact">Contact</a></nav><small>© ${new Date().getFullYear()} Ricky Patel. All rights reserved.</small></footer>`;
}
function shell(content, active) { return `${header(active)}<main id="view" class="view">${content}</main>${footer()}${active === 'case-study' ? '<button class="back-top" aria-label="Back to top">Back to top</button>' : ''}`; }

function workPage() {
  const featured = data.workLandingPage.featuredCaseStudies.projects;
  const past = data.workLandingPage.pastProjects.projects;
  return shell(`<section class="work-hero"><h1>${data.workLandingPage.heroSection.headline}</h1><p class="hero-copy">${data.workLandingPage.heroSection.paragraph}</p></section><section class="featured-list" aria-label="Featured projects"><div class="work-section-title"><h2>Featured projects</h2></div>${featured.map((project) => `<a class="featured-project reveal" href="#/case-studies/${project.id}" data-route="case-studies/${project.id}"><div class="project-copy"><p class="caption">${project.clientName}</p><h3>${project.heading}</h3><p>${project.blurb}</p><span class="tag-list">${(project.tags || []).map((tag) => `<span class="tag-chip">${tag}</span>`).join('')}</span></div><div class="work-thumbnail-frame"><img class="work-thumbnail" src="${new URL(project.thumbnail, siteRoot)}" alt="${project.clientName} project preview" loading="lazy"></div></a>`).join('')}</section><section class="past-section"><div class="section-heading"><div><h2>More projects</h2></div><div class="scroll-controls"><button class="scroll-button" data-scroll="past-projects" data-direction="-1" aria-label="Scroll left">←</button><button class="scroll-button" data-scroll="past-projects" data-direction="1" aria-label="Scroll right">→</button></div></div><div class="past-scroller" id="past-projects">${past.map((project) => `<a class="past-card" href="#/case-studies/${project.id}" data-route="case-studies/${project.id}"><div class="work-thumbnail-frame"><img class="work-thumbnail" src="${new URL(project.thumbnail, siteRoot)}" alt="${project.title || slugTitle(project.id)} project preview" loading="lazy"></div><h3>${project.title || slugTitle(project.id)}</h3><span class="caption"></span></a>`).join('')}</div></section>`, 'work');
}
async function casePage(id) {
  const study = await getCaseStudy(id);
  const toc = study.anchors.map((item, i) => `<a class="toc-link" href="#${item.id}" data-section="${item.id}"><span>${String(i + 1).padStart(2, '0')}</span> ${item.label}</a>`).join('');
  const intro = `<section class="case-intro"><p class="eyebrow">FEATURED CASE STUDY</p><h1>${study.title}</h1>${study.intro ? `<p class="case-deck">${study.intro}</p>` : ''}</section>`;
  const body = `<div class="case-body">${intro}<div class="markdown-content"></div></div>`;
  app.innerHTML = shell(`<div class="case-layout"><aside class="case-sidebar"><p class="toc-title">CONTENTS</p><nav class="case-toc">${toc}</nav><hr><a class="back-home" href="#/" data-route="">Back to homepage</a></aside>${body}</div>`, 'case-study');
  app.querySelector('.markdown-content').append(study.fragment);
  app.querySelectorAll('.toc-link').forEach((link) => link.addEventListener('click', (event) => {
  event.preventDefault();
  const target = document.getElementById(link.dataset.section);
  if (target) {
    isScrollingViaClick = true;
    app.querySelectorAll('.toc-link').forEach((l) => l.classList.remove('selected'));
    link.classList.add('selected');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => { isScrollingViaClick = false; }, 800);
  }
}));
  observeReveals(); observeSections();
}
async function aboutPage() {
  const response = await fetch(new URL('./content/about/index.md', siteRoot)); const md = await response.text();
  const profile = data.aboutPage;
  const achievements = parseAboutList(md, 'Achievements');
  const expertise = parseAboutExpertise(md);
  const testimonialCards = profile.testimonialCards.items.map((item) => `<article class="quote-card"><div class="quote-head"><img src="./content/about/images/${item.logo}" alt="${item.company} logo"><span>${item.company}</span></div><p class="quote-text">${item.quote}</p><button class="text-toggle">Read more</button><div class="quote-author"><img src="./content/about/images/${item.avatar}" alt=""><span><b>${item.author}</b><small>${item.role}</small></span></div></article>`).join('');
  app.innerHTML = shell(`<section class="about-hero"><div><h1>${profile.heroSection.headline}</h1><p>${profile.heroSection.bio}</p></div><img class="profile-image" src="${new URL(`./content/about/images/${profile.heroSection.imageFile.replace('.jpg','.png')}`, siteRoot)}" alt="Ricky Patel"></section><section class="content-section"><h2 class="about-section-heading">Core expertise</h2><div class="skills-grid">${expertise.map(({ heading, items }) => `<div class="skill-item"><h3>${heading}</h3><ul>${items.map((item) => `<li>${parseAboutInlineMarkdown(item)}</li>`).join('')}</ul></div>`).join('')}</div></section><section class="content-section"><h2 class="about-section-heading">Achievements</h2><div class="impact-list">${(achievements.length ? achievements : profile.achievements).map((achievement) => `<p>${parseAboutInlineMarkdown(achievement)}</p>`).join('')}</div></section><section class="testimonials"><div class="section-heading"><div><h2 class="about-section-heading">What colleagues say</h2></div><div class="scroll-controls"><button class="scroll-button" data-scroll="quotes" data-direction="-1" aria-label="Scroll left">←</button><button class="scroll-button" data-scroll="quotes" data-direction="1" aria-label="Scroll right">→</button></div></div><div class="quote-scroller" id="quotes">${testimonialCards}</div></section>`, 'about');
  app.querySelectorAll('.text-toggle').forEach((button) => button.addEventListener('click', () => { const card = button.closest('.quote-card'); card.classList.toggle('expanded'); button.textContent = card.classList.contains('expanded') ? 'Read less' : 'Read more'; }));
}
function contactPage() {
  const contact = data.contactPage;
  app.innerHTML = shell(`<section class="contact-page"><h1>${contact.headline}</h1><p class="hero-copy">${contact.intro}</p><div class="contact-grid">${contact.cards.map((card) => `<a class="contact-card" href="${card.type === 'email' ? `mailto:${card.value}` : 'https://www.linkedin.com/in/rmp50/'}" ${card.type !== 'email' ? 'target="_blank" rel="noopener noreferrer"' : ''}><img src="${new URL(`./content/contact/images/${card.icon}`, siteRoot)}" alt=""><span class="caption">${card.label}</span><strong>${card.value}</strong></a>`).join('')}</div></section>`, 'contact');
}
function observeReveals() {
  revealObserver?.disconnect();
  revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } }), { threshold: 0.12 });
  document.querySelectorAll('.reveal, .markdown-content > *, .content-section, .quote-card').forEach((el, i) => { el.style.setProperty('--reveal-delay', `${Math.min(i % 8, 6) * 45}ms`); revealObserver.observe(el); });
}
function observeSections() {
  const links = [...document.querySelectorAll('.toc-link')];
  const observer = new IntersectionObserver((entries) => {
    if (isScrollingViaClick) return; // Prevents the domino effect during smooth scrolling
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => link.classList.toggle('selected', link.dataset.section === entry.target.id));
      }
    });
  }, { rootMargin: '-15% 0px -70% 0px' });

  links.forEach((link) => {
    const target = document.getElementById(link.dataset.section);
    if (target) observer.observe(target);
  });
  animateMetricCounters();
}
function animateMetricCounters() {
  const targets = [...document.querySelectorAll('.metric-value:not([data-counted])')];
  if (!targets.length) return;
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const node = entry.target; observer.unobserve(node); node.dataset.counted = 'true';
    const goal = Number(node.dataset.value); const prefix = node.dataset.prefix || ''; const suffix = node.dataset.suffix || '';
    const decimals = (String(goal).split('.')[1] || '').length; const start = performance.now(); const duration = 1100;
    const tick = (time) => { const progress = Math.min(1, (time - start) / duration); const eased = 1 - Math.pow(1 - progress, 3); const value = goal * eased; node.textContent = `${prefix}${new Intl.NumberFormat('en-GB', { maximumFractionDigits: decimals }).format(value)}${suffix}`; if (progress < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }), { threshold: .45 });
  targets.forEach((target) => observer.observe(target));
}
async function render(route = routeFromLocation()) {
  document.body.classList.add('is-transitioning');
  await new Promise((resolve) => setTimeout(resolve, 120));
  try {
    if (route.startsWith('case-studies/')) await casePage(route.split('/')[1]);
    else if (route === 'about') await aboutPage();
    else if (route === 'contact') contactPage();
    else app.innerHTML = workPage();
  } catch (error) {
    console.error(error);
    app.innerHTML = shell(`<section class="contact-page"><p class="eyebrow">Case study</p><h1>Unable to load this project</h1><p class="hero-copy">Please return to Work and choose a project again.</p><a class="back-home" href="#/" data-route="">Back to homepage</a></section>`, 'work');
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
  observeReveals();
  document.body.classList.remove('is-transitioning');
}
function routeFromLocation() {
  if (location.hash.startsWith('#/')) return decodeURIComponent(location.hash.slice(2).replace(/\/$/, ''));
  const pathname = decodeURIComponent(location.pathname);
  // Preserve compatibility with hosts configured to rewrite deep paths to index.html.
  const marker = pathname.lastIndexOf('/case-studies/');
  if (marker >= 0) return `case-studies/${pathname.slice(marker + 14).replace(/\/$/, '')}`;
  if (/\/about\/?$/.test(pathname)) return 'about';
  if (/\/contact\/?$/.test(pathname)) return 'contact';
  return '';
}
document.addEventListener('click', (event) => {
  const routeLink = event.target.closest('[data-route]');
  if (routeLink && !event.metaKey && !event.ctrlKey && event.button === 0) { event.preventDefault(); const route = routeLink.dataset.route; const nextHash = `/${route}`; if (location.hash === `#${nextHash}`) render(route); else location.hash = nextHash; }
  const scroller = event.target.closest('[data-scroll]');
  if (scroller) document.getElementById(scroller.dataset.scroll)?.scrollBy({ left: Number(scroller.dataset.direction) * 380, behavior: 'smooth' });
  if (event.target.closest('.back-top')) window.scrollTo({ top: 0, behavior: 'smooth' });
});
window.addEventListener('hashchange', () => render());
window.addEventListener('scroll', () => {
  const button = document.querySelector('.back-top');
  if (!button) return;
  const define = document.querySelector('[data-section="section-define"]');
  const target = define && document.getElementById(define.dataset.section);
  button.classList.toggle('visible', !!target && window.scrollY >= target.getBoundingClientRect().top + window.scrollY - 100);
}, { passive: true });
render();
