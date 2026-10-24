function inlineMarkdown(text) {
  const protectedTokens = [];
  // Protect generated inline HTML while Markdown formatting is applied.
  const protect = (html) => {
    const index = protectedTokens.length;
    protectedTokens.push(html);
    return `\u0000P${index}Q\u0000`;
  };
  const formatted = text
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_match, alt, src) => protect(`<img alt="${alt.replace(/"/g, '&quot;')}" src="${src.replace(/"/g, '&quot;')}" class="case-study-image">`))
    .replace(/\[(?:IMAGE|IMAGES):\s*([^\]]+)\]/gi, (_match, src) => protect(`<img alt="Case study image" src="${src.trim().replace(/"/g, '&quot;')}" class="case-study-image">`))
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label, href) => protect(`<a href="${href.replace(/"/g, '&quot;')}">${label}</a>`))
    .replace(/`([^`]+)`/g, (_match, code) => protect(`<code>${code}</code>`))
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return formatted.replace(/\u0000P(\d+)Q\u0000/g, (_match, index) => protectedTokens[Number(index)]);
}
function metricBlock(text) {
  return metricCards(text.split('|').map((part) => part.trim()).filter(Boolean));
}
function metricCards(items) {
  if (items.length < 1 || !items.every((item) => /^[£$€]?\d[\d,.]*(?:%\+?|\/\d+)?\s+\S/.test(item))) return null;
  return `<div class="metric-bar">${items.map((item) => {
    const match = item.match(/^([£$€]?)(\d[\d,.]*)(%\+?|\/\d+)?\s+(.+)$/);
    if (!match) return '';
    const [, prefix, number, suffix = '', label] = match;
    return `<div class="metric-card"><span class="metric-value" data-value="${number.replace(/,/g, '')}" data-prefix="${prefix}" data-suffix="${suffix}">${prefix}${number}${suffix}</span><span class="metric-label">${label}</span></div>`;
  }).join('')}</div>`;
}
const markdownOptions = { gfm: true, html: true, breaks: false };

function renderMarkdown(source) {
  const lines = source.replace(/\r/g, '').split('\n');
  const out = []; let i = 0;
  const isBlock = (s) => /^(#{1,6}\s|\s*[-*+]\s|\s*\d+\.\s|>\s?|\|.*\|\s*$|<(?:details|div|iframe|table)\b)/.test(s);
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) { const level = heading[1].length; out.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`); i++; continue; }
    if (/^\s*\|.*\|\s*$/.test(line)) {
      const rows = []; while (i < lines.length && /^\s*\|.*\|\s*$/.test(lines[i])) rows.push(lines[i++]);
      const parsed = rows.filter((row) => !/^\s*\|?\s*:?-{3,}/.test(row)).map((row) => row.trim().replace(/^\||\|$/g, '').split('|').map((cell) => cell.trim()));
      if (parsed.length) out.push(`<table><thead><tr>${parsed[0].map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join('')}</tr></thead><tbody>${parsed.slice(1).map((row) => `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table>`);
      continue;
    }
    if (/^\s*[-*+]\s/.test(line) || /^\s*\d+\.\s/.test(line)) {
      const ordered = /^\s*\d+\./.test(line), tag = ordered ? 'ol' : 'ul', rows = [];
      const items = [];
      while (i < lines.length && (ordered ? /^\s*\d+\.\s/ : /^\s*[-*+]\s/).test(lines[i])) items.push(lines[i++].replace(/^\s*(?:[-*+]|\d+\.)\s+/, ''));
      if (!ordered) { const metrics = metricCards(items); if (metrics) { out.push(metrics); continue; } }
      items.forEach((item) => rows.push(`<li>${inlineMarkdown(item)}</li>`));
      out.push(`<${tag}>${rows.join('')}</${tag}>`); continue;
    }
    if (/^>\s?/.test(line)) { const rows = []; while (i < lines.length && /^>\s?/.test(lines[i])) rows.push(inlineMarkdown(lines[i++].replace(/^>\s?/, ''))); out.push(`<blockquote><p>${rows.join('<br>')}</p></blockquote>`); continue; }
    if (markdownOptions.html && /^<details\b/i.test(line.trim())) {
      const raw = [];
      while (i < lines.length) {
        const current = lines[i++]; raw.push(current);
        if (/<\/details\s*>/i.test(current)) break;
      }
      out.push(raw.join('\n').replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_match, alt, src) => `<img alt="${alt.replace(/"/g, '&quot;')}" src="${src.replace(/"/g, '&quot;')}" class="case-study-image" loading="lazy">`));
      continue;
    }
    if (markdownOptions.html && /^<img\b/i.test(line.trim())) {
      const raw = [lines[i++]];
      while (i < lines.length && !raw.join('\n').includes('>')) raw.push(lines[i++]);
      out.push(raw.join('\n'));
      continue;
    }
    if (markdownOptions.html && /^</.test(line.trim())) {
      const raw = [lines[i++]];
      while (i < lines.length && lines[i].trim() && !/^(#{1,6}\s|\s*[-*+]\s|\s*\d+\.\s)/.test(lines[i])) raw.push(lines[i++]);
      out.push(raw.join('\n'));
      continue;
    }
    if (line.includes('|')) { const metrics = metricBlock(line); if (metrics) { out.push(metrics); i++; continue; } }
    const paragraph = [inlineMarkdown(line.trim())]; i++;
    while (i < lines.length && lines[i].trim() && !isBlock(lines[i])) paragraph.push(inlineMarkdown(lines[i++].trim()));
    if (/^.{2,80}:$/.test(line.trim())) out.push(`<p class="body-subheading">${inlineMarkdown(line.trim())}</p>`);
    else out.push(`<p>${paragraph.join(' ')}</p>`);
  }
  return out.join('\n');
}

export async function getCaseStudy(id) {
  // import.meta.url anchors this request to the deployed site root even when
  // the active route is a nested path or a hash route.
  const markdownUrl = new URL(`./content/case-studies/${encodeURIComponent(id)}/index.md`, import.meta.url);
  const response = await fetch(markdownUrl);
  if (!response.ok) throw new Error(`Could not load case study: ${id}`);
  const markdown = await response.text();
  const html = renderMarkdown(markdown);
  const container = document.createElement('div');
  container.innerHTML = html;
  const resolveImageUrl = (src) => {
    if (/^(?:[a-z]+:|\/\/|#)/i.test(src)) return src;
    // Project artwork lives beside the Markdown file. Resolve all supported
    // image path styles there, so hash routes and duplicate filenames work.
    const projectImage = src.match(/^(?:\.\/)?images\/(.+)$/) || src.match(/^\/images\/(.+)$/);
    if (projectImage) return new URL(`./images/${projectImage[1]}`, markdownUrl).href;
    if (src.startsWith('/public/images/')) return new URL(`./images/${src.slice('/public/images/'.length)}`, markdownUrl).href;
    if (!src.includes('/')) return new URL(`./images/${src}`, markdownUrl).href;
    return new URL(src, markdownUrl).href;
  };
  container.querySelectorAll('img').forEach((image) => {
    const src = image.getAttribute('src');
    if (src) image.src = resolveImageUrl(src);
    if (!image.alt) image.alt = 'Case study image';
    // image.loading = 'lazy'; -> Removed to prevent layout shifts during scrolling
    image.classList.add('case-study-image');
    const frame = document.createElement('div');
    frame.className = 'case-study-image-container';
    if (image.parentElement?.tagName === 'P' && image.parentElement.children.length === 1) image.parentElement.replaceWith(frame);
    else image.parentNode.insertBefore(frame, image);
    frame.append(image);
  });
  container.querySelectorAll('a').forEach((link) => {
    if (link.hostname && link.hostname !== location.hostname) { link.target = '_blank'; link.rel = 'noreferrer'; }
  });
  container.querySelectorAll('table').forEach((table) => {
    const wrap = document.createElement('div'); wrap.className = 'table-scroll'; table.parentNode.insertBefore(wrap, table); wrap.append(table);
  });
  const sections = Array.from(container.children);
  const first = sections.shift();
  const title = first?.textContent?.trim() || id;
  let intro = '';
  if (sections[0]?.tagName === 'P') intro = sections.shift().textContent.trim();
  const nodes = sections.map((node, index) => {
    if (/^H[2-6]$/.test(node.tagName)) {
      const label = node.textContent.trim();
      const slug = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      node.id = `section-${slug}`;
      return { node, label, id: node.id, index };
    }
    return null;
  }).filter(Boolean);
const lifecycle = ['Discovery', 'Define', 'Iteration', 'Design', 'Testing', 'Outcomes'];
  let anchors = lifecycle.map((name, i) => nodes.find((n) => n.label.toLowerCase().startsWith(name.toLowerCase())) || (name === 'Iteration' ? nodes.find((n) => n.label.toLowerCase().startsWith('ideation') || n.label.toLowerCase().startsWith('iterations')) : null) || { id: `stage-${i}`, label: name });
  
  if (['orange-app-tv', 'jw-website', 'orange-tv'].includes(id)) {
    anchors = anchors.filter((item) => item.label !== 'Testing');
  } else if (id === 'orange-on-demand-care') {
    anchors = anchors
      .filter((item) => ['Discovery', 'Define', 'Iteration', 'Ideation'].includes(item.label))
      .map((item) => item.label === 'Iteration' ? { ...item, label: 'Ideation' } : item);
  } else if (id === 'orange-livescreen') {
    anchors = anchors.map((item) => {
      if (item.label === 'Iterations' || item.label === 'Iteration') {
        return {
          ...item,
          label: 'Ideation'
        };
      }
      return item;
    });
  }

  const fragment = document.createDocumentFragment();
  sections.forEach((node) => fragment.append(node));
  return { title, intro, fragment, anchors };
}