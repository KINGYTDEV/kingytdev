(function () {
  document.documentElement.classList.add('js');
  const D = window.SITE || {};
  const $ = (s, r) => (r || document).querySelector(s);
  const el = (tag, attrs, ...kids) => {
    const n = document.createElement(tag);
    Object.entries(attrs || {}).forEach(([k, v]) => { if (v != null) k === 'class' ? (n.className = v) : n.setAttribute(k, v); });
    kids.forEach(k => { if (k != null) n.append(k); });
    return n;
  };
  const ext = { target: '_blank', rel: 'noopener noreferrer' };

  // Fill a section, or hide it (and its nav link) when it has no content.
  function show(id, nodes) {
    if (!nodes.length) {
      $('#' + id).hidden = true;
      const a = $('#nav a[href="#' + id + '"]');
      if (a) a.remove();
      return;
    }
    $('#' + id + '-body').replaceChildren(...nodes);
  }

  $('#tagline').textContent = D.tagline || '';
  $('#year').textContent = new Date().getFullYear();
  $('#term').replaceChildren(...(D.terminal || []).map(l =>
    l.startsWith('$ ') ? el('p', { class: 'cmd' }, l.slice(2)) : el('p', {}, l)));

  show('about', (D.about || []).map(t => el('p', {}, t)));
  show('skills', (D.skills || []).length ? [el('ul', { class: 'chips' }, ...D.skills.map(s => el('li', {}, s)))] : []);
  show('experience', (D.experience || []).map(x => el('div', { class: 'card' },
    el('p', { class: 'meta' }, x.period || ''),
    el('h3', {}, (x.role || '') + (x.org ? ', ' + x.org : '')),
    x.text ? el('p', {}, x.text) : null)));
  show('projects', (D.projects || []).map(p => el('article', { class: 'card' },
    el('h3', {}, p.title || ''),
    p.description ? el('p', {}, p.description) : null,
    (p.tags || []).length ? el('ul', { class: 'tags' }, ...p.tags.map(t => el('li', {}, t))) : null,
    p.link ? el('p', {}, el('a', Object.assign({ href: p.link }, ext), p.linkLabel || 'View project')) : null)));
  if (!(D.projects || []).length) $('#work-btn').remove(); // no projects, no dead button

  // Certificates
  const dlg = $('#cert-dialog'), big = $('img', dlg), cap = $('.cap', dlg);
  function openCert(c) {
    if (!dlg.showModal) { window.open(c.image, '_blank', 'noopener'); return; }
    big.src = c.image;
    big.alt = 'Certificate: ' + c.title;
    cap.textContent = c.title + (c.description ? ' - ' + c.description : '');
    dlg.showModal();
  }
  dlg.addEventListener('click', e => { if (e.target === dlg || e.target.closest('[data-close]')) dlg.close(); });
  show('certificates', (D.certificates || []).map(c => {
    const thumb = el('span', { class: 'thumb' });
    const btn = el('button', { type: 'button', class: 'card cert', 'aria-label': 'View larger: ' + c.title },
      thumb, el('span', { class: 'info' }, el('span', { class: 'name' }, c.title), c.description ? el('span', { class: 'desc' }, c.description) : null));
    const img = el('img', { src: c.image, alt: 'Certificate: ' + c.title, loading: 'lazy', decoding: 'async' });
    img.addEventListener('error', () => {
      img.remove(); btn.disabled = true;
      thumb.append(el('span', { class: 'miss' }, 'Image not found: ' + c.image));
      console.warn('Certificate image not found:', c.image);
    });
    thumb.append(img);
    btn.addEventListener('click', () => openCert(c));
    return btn;
  }));

  // Contact
  const C = D.contact || {};
  const links = [...(C.email ? [{ label: 'Email', url: 'mailto:' + C.email, text: C.email }] : []), ...(C.links || [])];
  show('contact', links.length ? [el('ul', { class: 'links' }, ...links.map(l => el('li', {},
    el('span', { class: 'meta' }, l.label + ' '),
    el('a', l.url.startsWith('mailto:') ? { href: l.url } : Object.assign({ href: l.url }, ext), l.text || l.url))))] : []);

  // Mobile menu
  const btn = $('.menu-btn'), nav = $('#nav');
  const setMenu = open => { nav.classList.toggle('open', open); btn.setAttribute('aria-expanded', open); btn.textContent = open ? 'Close' : 'Menu'; };
  btn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  nav.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
})();
