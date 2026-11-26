/* ==========================================================================
   app.js — renders the site from content.js, handles hash routing, EN/AR
   toggle (with RTL), scroll reveal and the mobile menu. No dependencies,
   no trackers. You normally edit content.js, not this file.

   ROUTES
     #/ or #cases, #about ...   home page + smooth scroll to the section
     #/case/<id>                full case study   (ids in content.js: cases)
     #/work/<id>                selected-work copy view (ids in content.js: work)
   ========================================================================== */
(function () {
  'use strict';

  var S = window.SITE;
  var L = 'en';
  try {
    var saved = localStorage.getItem('lang');
    if (saved === 'ar' || saved === 'en') L = saved;
  } catch (e) { /* storage blocked: fine, default to English */ }

  var main = document.getElementById('main');
  var currentKey = null;      // which view is on screen, e.g. 'home' or 'case/jamieson'
  var io = null;              // scroll-reveal observer

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // Choose the text for the current language; fall back to the other language if missing.
  function pick(x) {
    if (x == null) return null;
    if (typeof x === 'string') return { s: x, l: L };
    if (x[L] != null) return { s: x[L], l: L };
    var o = L === 'en' ? 'ar' : 'en';
    return x[o] != null ? { s: x[o], l: o } : null;
  }
  // Plain inline text (for fully bilingual UI strings).
  function t(x) { var p = pick(x); return p ? esc(p.s) : ''; }
  // Element wrapper; adds lang/dir only when showing fallback-language text.
  function el(name, x, cls) {
    var p = pick(x);
    if (!p) return '';
    var a = p.l !== L ? ' lang="' + p.l + '" dir="' + (p.l === 'ar' ? 'rtl' : 'ltr') + '"' : '';
    return '<' + name + (cls ? ' class="' + cls + '"' : '') + a + '>' + esc(p.s) + '</' + name + '>';
  }
  function ui(k) { return t(S.ui[k]); }
  function arrow() { return '<span class="arr" aria-hidden="true">→</span>'; }

  /* ---------- shared chrome ---------- */
  function applyLang() {
    var h = document.documentElement;
    h.lang = L; h.dir = L === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('skip').textContent = pick(S.ui.skip).s;
    document.getElementById('brand-name').textContent = pick(S.hero.name).s;
    document.getElementById('menu-label').textContent = pick(S.ui.menu).s;
    document.getElementById('rights').textContent = pick(S.ui.rights).s;
    document.getElementById('year').textContent = new Date().getFullYear();
    document.querySelectorAll('[data-nav]').forEach(function (a) { a.textContent = pick(S.ui[a.getAttribute('data-nav')]).s; });
    document.querySelectorAll('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === L)); });
    var d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute('content', pick(S.seo.description).s);
  }

  /* ---------- HOME ---------- */
  function home() {
    var hero = S.hero, a = S.about;
    var paras = (a[L] || a.en).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
    var stats = a.stats.map(function (s) {
      return '<div><div class="stat-n display" aria-hidden="false">' + esc(s.n) + '</div><div class="stat-k">' + ui(s.k) + '</div></div>';
    }).join('');
    var path = S.ui.path.map(function (p) { return '<li>' + t(p) + '</li>'; }).join('');

    var skills = hero.skills.map(function (s) { return '<li lang="en" dir="ltr">' + esc(s) + '</li>'; }).join('');

    var steps = S.method.steps.map(function (s) {
      return '<li class="step5 reveal"><span class="n">' + s.n + '</span>' + el('h3', s.k, 'display') + el('p', s.x) + '</li>';
    }).join('');

    var cases = S.cases.map(function (c) {
      return '<a class="case-card reveal" href="#/case/' + c.id + '">' +
        '<div><span class="label act">' + t(c.act) + '</span>' + el('p', c.whatIf, 'q') + '</div>' +
        '<div><div class="meta">' + el('span', c.brand) + '<small>' + t(c.kind) + '</small></div>' +
        '<span class="card-cta">' + ui('readCase') + ' ' + arrow() + '</span></div></a>';
    }).join('');

    var works = S.work.map(function (w) {
      return '<a class="work-card reveal" href="#/work/' + w.id + '">' +
        (w.cover ? '<img class="cover" src="' + esc(w.cover.src) + '" width="' + w.cover.w + '" height="' + w.cover.h + '" alt="" loading="lazy" decoding="async">' : '') +
        '<span class="label">' + t(w.kind) + '</span>' +
        el('h3', w.title, 'display') + el('p', w.teaser, 'teaser') + '</a>';
    }).join('');

    main.innerHTML =
      '<section class="hero" id="top"><div class="wrap">' +
        '<span class="hero-q" aria-hidden="true">?</span>' +
        '<div class="hero-grid"><div class="hero-text">' +
          '<p class="label">' + t(hero.eyebrow) + '</p>' +
          '<h1><span class="name">' + t(hero.name) + '</span><span class="tagline" lang="en" dir="ltr">' + esc(pick(hero.tagline).s) + '</span></h1>' +
          '<p class="role">' + t(hero.role) + '</p>' +
          el('p', hero.positioning, 'positioning') +
          '<div class="hero-cta"><a class="btn btn-primary" href="#cases">' + ui('btnWork') + ' ' + arrow() + '</a>' +
          '<a class="btn btn-ghost" href="#contact">' + ui('btnContact') + '</a></div>' +
        '</div></div>' +
        '<div class="skills"><ul aria-label="Skills">' + skills + '</ul></div>' +
      '</div></section>' +

      '<section class="section" id="about"><div class="wrap about-grid">' +
        '<div class="reveal"><p class="label">' + ui('about') + '</p><div class="stats" style="margin-top:1.4rem">' + stats + '</div><ul class="path" aria-label="' + ui('about') + '">' + path + '</ul></div>' +
        '<div class="about-text reveal">' + paras + '</div>' +
      '</div></section>' +

      '<section class="section dark" id="method"><div class="wrap">' +
        '<p class="label">' + ui('method') + '</p>' + el('h2', S.method.title, 'method-title display') +
        '<ol class="steps5">' + steps + '</ol>' +
      '</div></section>' +

      '<section class="section" id="cases"><div class="wrap">' +
        '<div class="section-head reveal"><p class="label">' + ui('cases') + '</p></div>' +
        '<div class="cards-3">' + cases + '</div>' +
      '</div></section>' +

      '<section class="section tint" id="work"><div class="wrap">' +
        '<div class="section-head reveal"><p class="label">' + ui('work') + '</p></div>' +
        '<div class="work-grid">' + works + '</div>' +
      '</div></section>' +

      '<section class="section contact" id="contact"><div class="wrap">' +
        '<p class="label">' + ui('btnContact') + '</p>' + el('h2', S.contact.title, 'display') +
        '<ul class="contact-list">' +
          '<li><span class="label">' + ui('emailLbl') + '</span><a href="mailto:' + esc(S.email) + '" lang="en" dir="ltr">' + esc(S.email) + '</a></li>' +
          '<li><span class="label">' + ui('phoneLbl') + '</span><a href="tel:' + esc(S.phoneIntl) + '" lang="en" dir="ltr">' + esc(S.phone) + '</a></li>' +
          '<li><span class="label">' + ui('linkedinLbl') + '</span><a href="' + esc(S.linkedin) + '" rel="noopener" target="_blank" lang="en" dir="ltr">' + esc(S.linkedinLabel) + '</a></li>' +
        '</ul>' +
        '<a class="btn btn-ink" href="' + esc(S.pdf) + '" rel="noopener" target="_blank">' + ui('pdf') + ' ' + arrow() + '</a>' +
      '</div></section>';

    document.title = pick(S.seo.title).s;
  }

  /* ---------- BLOCK RENDERERS (case + work views) ---------- */
  function videoEmbed(src) {
    var yt = src.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{6,})/);
    if (yt) return 'https://www.youtube-nocookie.com/embed/' + yt[1];
    var vm = src.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (vm) return 'https://player.vimeo.com/video/' + vm[1] + '?dnt=1';
    return src;
  }

  // One picture with its caption. The button opens the lightbox (see "image lightbox" below).
  function shot(i) {
    var alt = pick(i.alt);
    return '<figure class="shot"><button type="button" class="zoom" data-zoom="' + esc(i.src) + '" aria-label="' + ui('imgZoom') + '">' +
      '<img src="' + esc(i.src) + '" width="' + i.w + '" height="' + i.h + '" alt="' + esc(alt ? alt.s : '') + '" loading="lazy" decoding="async"></button>' +
      el('figcaption', i.cap) + '</figure>';
  }

  function block(b) {
    var h = '';
    switch (b.t) {
      case 'lead': h = el('p', b.x, 'lead'); break;
      case 'sub':  h = el('p', b.x, 'sub'); break;
      case 'p':    h = el('p', b.x, 'para'); break;
      case 'note': h = el('p', b.x, 'note'); break;
      case 'tags':
        h = '<div class="tags">' + (b.label ? '<span class="label">' + t(b.label) + '</span>' : '') +
          b.items.map(function (i) { return el('span', i, 'tag'); }).join('') + '</div>';
        break;
      case 'cards':
        h = '<div class="cards" data-cols="' + (b.cols || 2) + '">' + b.items.map(function (c) {
          return '<div class="card' + (b.accent ? ' accent' : '') + '"><span class="label">' + t(c.k) + '</span>' + el('p', c.x) + '</div>';
        }).join('') + '</div>';
        break;
      case 'swot':
        h = '<div class="swot">' + b.items.map(function (s) {
          return '<div class="swot-item"><div class="letter" aria-hidden="true">' + s.l + '</div><span class="label">' + t(s.k) + '</span><ul>' +
            s.lines.map(function (l) { return el('li', l); }).join('') + '</ul></div>';
        }).join('') + '</div>';
        break;
      case 'segments':
        h = '<ol class="segments">' + b.items.map(function (s) {
          return '<li class="seg"><span class="n">' + s.n + '</span>' + el('h3', s.k, 'display') + el('p', s.x) + '</li>';
        }).join('') + '</ol>';
        break;
      case 'steps':
        h = '<ol class="steps" data-n="' + b.items.length + '">' + b.items.map(function (s) {
          return '<li class="step"><span class="n">' + s.n + '</span>' + el('h3', s.k, 'display') + el('p', s.x) + '</li>';
        }).join('') + '</ol>';
        break;
      case 'bigidea':
        h = '<div class="bigidea"><p class="ar-line" lang="ar" dir="rtl">' + esc(b.ar) + '</p><div class="rule"></div>' +
          '<p class="en-line" lang="en" dir="ltr">' + esc(b.en) + '</p></div>';
        break;
      case 'lines':
        h = '<div class="lines">' + (b.label ? '<span class="label">' + t(b.label) + '</span>' : '') +
          b.items.map(function (i) { return el('p', i, 't'); }).join('') + '</div>';
        break;
      case 'pairs':
        h = '<div class="pairs">' + b.items.map(function (p) {
          return '<div class="pair"><span class="label">' + t(p.k) + '</span><div>' + p.lines.map(function (l) { return el('p', l, 't'); }).join('') + '</div></div>';
        }).join('') + '</div>';
        break;
      case 'posts':
        h = '<div class="posts">' + b.items.map(function (p) {
          var cls = 'post' + (p.n === 5 ? ' hit' : '') + (p.n >= 5 ? ' full' : '');
          return '<article class="' + cls + '"><div class="head"><span class="pn" aria-hidden="true">' + p.n + '</span>' +
            '<span class="label">Post ' + p.n + '</span>' + el('span', p.tag, 'ptag') + '</div>' +
            el('p', p.line, 'pline') + el('p', p.body, 'pbody') + '</article>';
        }).join('') + '</div>';
        break;
      case 'script':
        h = '<div class="script"><div class="span2"><span class="label">' + t(b.label) + '</span>' + el('h3', b.headline, 'display') + '</div>' +
          '<div><span class="label" style="display:block;margin-bottom:.7rem">' + t(b.scriptLabel) + '</span><ul class="lines-list">' +
          b.lines.map(function (l) { return el('li', l); }).join('') + '</ul></div>' +
          '<div class="vo"><span class="label">' + t(b.voLabel) + '</span>' + el('p', b.vo) + '</div>' +
          '<div class="span2">' + el('p', b.note, 'note') + '</div></div>';
        break;
      case 'video':
        if (!b.src) return '';              // no video supplied yet: leave the block out rather than show filler
        var inner = /\.(mp4|webm)(\?|$)/i.test(b.src)
          ? '<video controls preload="none" playsinline' + (b.poster ? ' poster="' + esc(b.poster) + '"' : '') + ' src="' + esc(b.src) + '"></video>'
          : '<iframe loading="lazy" src="' + esc(videoEmbed(b.src)) + '" title="' + esc(pick(b.caption).s) + '" allow="fullscreen; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        h = '<figure class="video"><div class="frame">' + inner + '</div>' + el('figcaption', b.caption) + '</figure>';
        break;
      case 'gallery':
        h = '<div class="gallery' + (b.items.length === 1 ? ' single' : '') + '">' + b.items.map(shot).join('') + '</div>';
        break;
      case 'copy':
        h = '<div class="copy-list">' + b.items.map(function (c) {
          return '<article class="copy-item' + (c.wide ? ' wide' : '') + '">' + (c.img ? shot(c.img) : '') + (c.k ? '<span class="label">' + t(c.k) + '</span>' : '') +
            el('p', c.line, 'cl') + el('p', c.sub, 'cs') + el('p', c.body, 'cb') + '</article>';
        }).join('') + '</div>';
        break;
    }
    return h ? '<div class="blk reveal t-' + b.t + '">' + h + '</div>' : '';
  }

  var SEC_KEY = { brief: 'secBrief', insight: 'secInsight', strategy: 'secStrategy', idea: 'secIdea', execution: 'secExecution', role: 'secRole', status: 'secStatus' };

  function qOpen(x) {
    // Colours the opening "What if" in orange for the pull-quote; works only for English text.
    var p = pick(x);
    var e = esc(p.s);
    var attrs = p.l !== L ? ' lang="' + p.l + '" dir="' + (p.l === 'ar' ? 'rtl' : 'ltr') + '"' : '';
    e = e.replace(/^(What if\.{0,2})/i, '<span class="q-open">$1</span>');
    return '<blockquote class="whatif display"' + attrs + '>' + e + '</blockquote>';
  }

  /* ---------- CASE VIEW ---------- */
  function caseView(id) {
    var idx = -1;
    S.cases.forEach(function (c, i) { if (c.id === id) idx = i; });
    if (idx < 0) return false;
    var c = S.cases[idx];
    var next = S.cases[(idx + 1) % S.cases.length];
    var secs = c.sections.filter(function (s) { return s.blocks && s.blocks.some(function (b) { return block(b); }); });

    var nav = secs.map(function (s) {
      return '<li><a href="#s-' + s.key + '" data-sec="s-' + s.key + '">' + ui(SEC_KEY[s.key]) + '</a></li>';
    }).join('');
    var body = secs.map(function (s, i) {
      return '<section class="cs-sec" id="s-' + s.key + '"><h2><span class="num">0' + (i + 1) + '</span><span class="label">' + ui(SEC_KEY[s.key]) + '</span></h2>' +
        s.blocks.map(block).join('') + '</section>';
    }).join('');

    main.innerHTML =
      '<article>' +
      '<header class="cs-head"><div class="wrap">' +
        '<a class="crumb" href="#cases"><span class="arr" aria-hidden="true">→</span> ' + ui('back') + '</a>' +
        '<div class="cs-kicker"><span class="label act">' + t(c.act) + '</span><span class="label">' + t(c.kind) + '</span></div>' +
        '<h1 class="sr-only">' + esc(pick(c.brand).s) + '</h1>' +
        qOpen(c.whatIf) +
        '<dl class="cs-meta"><div><dt class="label">' + ui('brand') + '</dt><dd>' + el('span', c.brand) + '</dd></div>' +
        (c.role ? '<div><dt class="label">' + ui('role') + '</dt><dd>' + el('span', c.role) + '</dd></div>' : '') + '</dl>' +
      '</div></header>' +
      '<nav class="cs-nav" aria-label="' + esc(pick(c.brand).s) + '"><ul>' + nav + '</ul></nav>' +
      '<div class="wrap">' + body +
        '<a class="next-link reveal" href="#/case/' + next.id + '"><span class="label">' + ui('next') + ' ' + arrow() + '</span>' +
        '<span class="nl-title">' + t(next.whatIf) + '</span></a>' +
      '</div></article>';

    document.title = pick(c.brand).s + ' — ' + pick(S.seo.title).s;
    return true;
  }

  /* ---------- WORK VIEW ---------- */
  function workView(id) {
    var idx = -1;
    S.work.forEach(function (w, i) { if (w.id === id) idx = i; });
    if (idx < 0) return false;
    var w = S.work[idx];
    var next = S.work[(idx + 1) % S.work.length];

    var blocks = [];
    if (w.intro) blocks.push({ t: 'sub', x: w.intro });
    if (w.tags) blocks.push({ t: 'tags', items: w.tags });
    if (w.itemsTitle) blocks.push({ t: 'lead', x: w.itemsTitle });
    blocks.push({ t: 'copy', items: w.items });

    main.innerHTML =
      '<article>' +
      '<header class="cs-head"><div class="wrap">' +
        '<a class="crumb" href="#work"><span class="arr" aria-hidden="true">→</span> ' + ui('back') + '</a>' +
        '<div class="cs-kicker"><span class="label">' + t(w.kind) + '</span></div>' +
        (w.whatIf ? '<h1 class="sr-only">' + esc(pick(w.title).s) + '</h1>' + qOpen(w.whatIf)
                  : el('h1', w.title, 'whatif display')) +
      '</div></header>' +
      '<div class="wrap"><section class="cs-sec" style="border-bottom:0">' + blocks.map(block).join('') + '</section>' +
        '<a class="next-link reveal" href="#/work/' + next.id + '"><span class="label">' + ui('next') + ' ' + arrow() + '</span>' +
        '<span class="nl-title">' + t(next.title) + '</span></a>' +
      '</div></article>';

    document.title = pick(w.title).s + ' — ' + pick(S.seo.title).s;
    return true;
  }

  /* ---------- reveal on scroll ---------- */
  function observe() {
    var nodes = main.querySelectorAll('.reveal');
    if (io) io.disconnect();
    if (!('IntersectionObserver' in window)) { nodes.forEach(function (n) { n.classList.add('in'); }); return; }
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    nodes.forEach(function (n) { io.observe(n); });
    // Safety net: never leave content hidden if something goes wrong.
    setTimeout(function () { nodes.forEach(function (n) { n.classList.add('in'); }); }, 4000);
  }

  /* ---------- case section nav (smooth scroll without touching the hash) ---------- */
  function wireCaseNav() {
    main.querySelectorAll('[data-sec]').forEach(function (a) {
      a.addEventListener('click', function (ev) {
        ev.preventDefault();
        var target = document.getElementById(a.getAttribute('data-sec'));
        if (target) target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      });
    });
    var links = main.querySelectorAll('[data-sec]');
    if (!links.length || !('IntersectionObserver' in window)) return;
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (l) { l.setAttribute('aria-current', String(l.getAttribute('data-sec') === e.target.id)); });
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    main.querySelectorAll('.cs-sec[id]').forEach(function (s) { spy.observe(s); });
  }

  /* ---------- routing ---------- */
  function route(opts) {
    opts = opts || {};
    var hash = location.hash || '';
    var m = hash.match(/^#\/(case|work)\/([\w-]+)/);
    var key = 'home', ok = true;

    if (m) {
      key = m[1] + '/' + m[2];
      if (key !== currentKey || opts.force) {
        ok = m[1] === 'case' ? caseView(m[2]) : workView(m[2]);
        if (!ok) { key = 'home'; }
      }
    }
    if (key === 'home' && (currentKey !== 'home' || opts.force)) home();

    var changed = key !== currentKey || opts.force;
    currentKey = key;

    if (changed) {
      observe();
      if (key !== 'home') wireCaseNav();
    }

    if (key === 'home') {
      var id = hash.replace(/^#\/?/, '');
      var target = id && document.getElementById(id);
      if (target) { target.scrollIntoView(); }
      else if (changed && !opts.keepScroll) { window.scrollTo(0, 0); }
    } else if (changed && !opts.keepScroll) {
      window.scrollTo(0, 0);
    }

    // Move focus to the main region on a real view change so screen-reader and keyboard users land at the top.
    if (changed && !opts.keepScroll) { main.focus({ preventScroll: true }); }
    closeMenu();
  }

  /* ---------- mobile menu ---------- */
  var nav = document.getElementById('nav');
  var menuBtn = document.getElementById('menu-btn');
  function closeMenu() { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  menuBtn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  /* ---------- language toggle ---------- */
  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      var next = b.getAttribute('data-lang');
      if (next === L) return;
      L = next;
      try { localStorage.setItem('lang', L); } catch (e) { /* ignore */ }
      var y = window.scrollY;
      applyLang();
      route({ force: true, keepScroll: true });
      window.scrollTo(0, y);
    });
  });

  window.addEventListener('hashchange', function () { route(); });

  /* ---------- image lightbox ---------- */
  var dlg = document.createElement('dialog');
  dlg.className = 'lightbox';
  dlg.innerHTML = '<div class="lb-inner"><img class="lb-img" alt=""><p class="lb-cap"></p></div>' +
    '<button type="button" class="lb-btn lb-close"><span aria-hidden="true">×</span></button>' +
    '<button type="button" class="lb-btn lb-prev"><span class="lb-arr" aria-hidden="true">←</span></button>' +
    '<button type="button" class="lb-btn lb-next"><span class="lb-arr" aria-hidden="true">→</span></button>';
  document.body.appendChild(dlg);
  var lbImg = dlg.querySelector('.lb-img'), lbCap = dlg.querySelector('.lb-cap');
  var lbPrev = dlg.querySelector('.lb-prev'), lbNext = dlg.querySelector('.lb-next'), lbClose = dlg.querySelector('.lb-close');
  var lbList = [], lbIdx = 0;

  function lbShow(i) {
    lbIdx = (i + lbList.length) % lbList.length;
    var b = lbList[lbIdx], im = b.querySelector('img'), fc = b.parentNode.querySelector('figcaption');
    lbImg.src = b.getAttribute('data-zoom');
    lbImg.alt = im ? im.alt : '';
    lbCap.textContent = fc ? fc.textContent : '';
  }
  function lbOpen(btn) {
    lbList = Array.prototype.slice.call(main.querySelectorAll('[data-zoom]'));
    lbClose.setAttribute('aria-label', pick(S.ui.imgClose).s);
    lbPrev.setAttribute('aria-label', pick(S.ui.imgPrev).s);
    lbNext.setAttribute('aria-label', pick(S.ui.imgNext).s);
    lbPrev.hidden = lbNext.hidden = lbList.length < 2;
    lbShow(lbList.indexOf(btn));
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
  }
  main.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-zoom]');
    if (b) lbOpen(b);
  });
  dlg.addEventListener('click', function (e) {
    if (e.target.closest('.lb-close')) { dlg.close(); return; }
    if (e.target.closest('.lb-prev')) { lbShow(lbIdx - 1); return; }
    if (e.target.closest('.lb-next')) { lbShow(lbIdx + 1); return; }
    if (!e.target.closest('.lb-img, .lb-cap')) dlg.close();      // click on the dark area closes it
  });
  dlg.addEventListener('keydown', function (e) {
    if (lbList.length < 2) return;
    var rtl = document.documentElement.dir === 'rtl';
    if (e.key === 'ArrowRight') lbShow(lbIdx + (rtl ? -1 : 1));
    if (e.key === 'ArrowLeft') lbShow(lbIdx + (rtl ? 1 : -1));
  });

  /* ---------- go ---------- */
  applyLang();
  route({ force: true, keepScroll: true });
})();
