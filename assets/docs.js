/* Agriwelt Docs. Source: Work/06-Assets/hectare-docs/tools/site/docs.js */
(function () {
  var d = document, AW = window.AW || { root: '', lang: 'en', product: '' };
  function $(s, r) { return (r || d).querySelector(s); }
  function $$(s, r) { return [].slice.call((r || d).querySelectorAll(s)); }

  // theme
  var tb = $('.theme-btn');
  if (tb) tb.addEventListener('click', function () {
    var cur = d.documentElement.getAttribute('data-theme') ||
      (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = cur === 'dark' ? 'light' : 'dark';
    d.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('aw-theme', next); } catch (e) {}
  });

  // drawer on phones
  var nb = $('.nav-btn');
  if (nb) {
    if (!$('.side')) nb.style.display = 'none';
    nb.addEventListener('click', function () { d.body.classList.toggle('nav-open'); });
    d.addEventListener('click', function (e) {
      if (d.body.classList.contains('nav-open') && !e.target.closest('.side') && !e.target.closest('.nav-btn')) d.body.classList.remove('nav-open');
    });
  }
  var on = $('.side a.on');
  if (on && on.scrollIntoView) { try { on.scrollIntoView({ block: 'center' }); } catch (e) {} window.scrollTo(0, 0); }

  // "on this page" spy
  var tocLinks = $$('.toc a');
  if (tocLinks.length) {
    var heads = tocLinks.map(function (a) { return d.getElementById(decodeURIComponent(a.getAttribute('href').slice(1))); });
    var spy = function () {
      var y = window.scrollY + 90, cur = -1;
      for (var i = 0; i < heads.length; i++) if (heads[i] && heads[i].offsetTop <= y) cur = i;
      tocLinks.forEach(function (a, i) { a.classList.toggle('on', i === cur); });
    };
    window.addEventListener('scroll', spy, { passive: true }); spy();
  }

  // annotated pictures: a number on the picture and its line in the legend light up together
  $$('.anatomy').forEach(function (fig) {
    var items = $$('ol.an-legend > li', fig);
    function set(n) {
      fig.classList.toggle('hot', !!n);
      $$('[data-n]', fig).forEach(function (el) { el.classList.toggle('on', el.getAttribute('data-n') === String(n)); });
      items.forEach(function (li, i) { li.classList.toggle('on', i + 1 === Number(n)); });
    }
    items.forEach(function (li, i) {
      li.addEventListener('mouseenter', function () { set(i + 1); });
      li.addEventListener('mouseleave', function () { set(0); });
      li.addEventListener('click', function (e) { if (!e.target.closest('a')) set(li.classList.contains('on') && fig.dataset.pin === String(i + 1) ? 0 : i + 1); fig.dataset.pin = i + 1; });
    });
    $$('.an-b', fig).forEach(function (b) {
      var n = b.getAttribute('data-n');
      b.addEventListener('mouseenter', function () { set(n); });
      b.addEventListener('mouseleave', function () { set(0); });
      b.addEventListener('click', function (e) {
        e.stopPropagation(); set(n);
        var li = items[Number(n) - 1];
        if (li && li.scrollIntoView) li.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      });
    });
  });

  // lightbox
  d.addEventListener('click', function (e) {
    var lb = $('.lb');
    if (lb) { lb.remove(); return; }
    var img = e.target.closest('figure > img, img.scr');
    if (!img || e.target.closest('.an-pic')) return;
    lb = d.createElement('div'); lb.className = 'lb';
    var big = d.createElement('img'); big.src = img.currentSrc || img.src; big.alt = img.alt;
    if (!/scr-320/.test(img.className)) big.style.imageRendering = 'auto';
    lb.appendChild(big); d.body.appendChild(lb);
  });

  // search
  var box = $('.search'), input = box && $('input[type=search]', box), res = box && $('.search-res', box), all = box && $('.search-all input', box);
  var sel = -1;
  function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ß/g, 'ss'); }
  function open() {
    if (!box) return;
    box.hidden = false; input.value = ''; res.innerHTML = ''; sel = -1;
    if (!AW.product) { all.checked = true; all.parentNode.style.display = 'none'; }
    setTimeout(function () { input.focus(); }, 0);
  }
  function close() { if (box) box.hidden = true; }
  function hl(text, terms) {
    var out = text.replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; });
    terms.forEach(function (t) {
      if (t.length < 2) return;
      out = out.replace(new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>');
    });
    return out;
  }
  function run() {
    var q = norm(input.value.trim()), idx = window.AW_IDX || [];
    res.innerHTML = ''; sel = -1;
    if (q.length < 2) return;
    var terms = q.split(/\s+/).filter(Boolean), hits = [];
    for (var i = 0; i < idx.length; i++) {
      var r = idx[i];
      if (!all.checked && AW.product && r.p !== AW.product) continue;
      if (!r._n) r._n = [norm(r.t), norm(r.h), norm(r.x)];
      var score = 0, ok = true;
      for (var k = 0; k < terms.length; k++) {
        var t = terms[k], s = 0;
        if (r._n[0].indexOf(t) >= 0) s += 12;
        if (r._n[1].indexOf(t) >= 0) s += 9;
        var p = r._n[2].indexOf(t);
        if (p >= 0) s += 3 + (p < 200 ? 1 : 0);
        if (!s) { ok = false; break; }
        score += s;
      }
      if (ok && r._n[2].indexOf(q) >= 0) score += 6;
      if (ok && r.p === AW.product) score += 2;
      if (ok) hits.push([score, r]);
    }
    hits.sort(function (a, b) { return b[0] - a[0]; });
    if (!hits.length) { res.innerHTML = '<div class="sr-x" style="padding:18px">' + res.getAttribute('data-empty') + '</div>'; return; }
    hits.slice(0, 24).forEach(function (h) {
      var r = h[1], pos = r._n[2].indexOf(terms[0]), from = Math.max(0, pos - 60);
      var snip = (from ? '…' : '') + r.x.slice(from, from + 190).replace(/\n/g, ' ') + '…';
      var a = d.createElement('a'); a.className = 'sr'; a.href = AW.root + r.u;
      a.innerHTML = '<div class="sr-p">' + ((AW.names && AW.names[r.p]) || r.p) + '</div><div class="sr-t">' + hl(r.t + (r.h ? ' › ' + r.h : ''), terms) + '</div><div class="sr-x">' + hl(snip, terms) + '</div>';
      res.appendChild(a);
    });
  }
  if (box) {
    $$('.search-btn').forEach(function (b) { b.addEventListener('click', open); });
    $('.search-x', box).addEventListener('click', close);
    box.addEventListener('click', function (e) { if (e.target === box) close(); });
    input.addEventListener('input', run);
    all.addEventListener('change', run);
    d.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { close(); var lb = $('.lb'); if (lb) lb.remove(); return; }
      if (box.hidden) {
        if ((e.key === '/' || (e.key === 'k' && (e.metaKey || e.ctrlKey))) && !/INPUT|TEXTAREA/.test(d.activeElement.tagName)) { e.preventDefault(); open(); }
        return;
      }
      var rows = $$('.sr', res);
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        sel = Math.max(0, Math.min(rows.length - 1, sel + (e.key === 'ArrowDown' ? 1 : -1)));
        rows.forEach(function (r, i) { r.classList.toggle('on', i === sel); });
        if (rows[sel]) rows[sel].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter' && rows.length) { location.href = rows[Math.max(sel, 0)].href; }
    });
  }
})();
