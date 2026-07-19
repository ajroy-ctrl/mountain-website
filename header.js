(function () {
  // ── CSS ──────────────────────────────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = [
    /* BANNER */
    '#diff-banner{position:fixed;top:0;left:0;right:0;z-index:600;background:#0F1623;border-bottom:1px solid rgba(29,95,232,.3);height:48px;display:flex;align-items:center}',
    '.db-inner{width:100%;padding:0 48px;display:flex;align-items:center;justify-content:center;gap:16px;position:relative}',
    '.db-copy{font-size:.825rem;color:rgba(255,255,255,.82);white-space:nowrap;flex-shrink:0}',
    '.db-highlight{font-size:.7rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#1D5FE8;background:rgba(29,95,232,.15);border:1px solid rgba(29,95,232,.3);padding:3px 9px;border-radius:4px;white-space:nowrap;vertical-align:middle}',
    '.db-sep{width:1px;height:20px;background:rgba(255,255,255,.18);flex-shrink:0}',
    '.db-widget{display:flex;align-items:center;gap:8px}',
    '#db-input,#db-email{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.22);border-radius:6px;color:#fff;font-family:\'Outfit\',system-ui,sans-serif;font-size:.8rem;padding:5px 12px;outline:none;transition:.15s}',
    '#db-input{width:160px}',
    '#db-email{width:180px}',
    '#db-input:focus,#db-email:focus{border-color:#1D5FE8;background:rgba(29,95,232,.1)}',
    '#db-input::placeholder,#db-email::placeholder{color:rgba(255,255,255,.45)}',
    '.db-btn{background:#1D5FE8;color:#fff;font-family:\'Outfit\',system-ui,sans-serif;font-size:.8rem;font-weight:700;padding:5px 14px;border-radius:6px;cursor:pointer;border:none;transition:.15s;white-space:nowrap}',
    '.db-btn:hover{background:#1549C0}',
    '#db-result{display:none;align-items:center;gap:8px;flex-shrink:0}',
    '.db-close{position:absolute;right:20px;color:rgba(255,255,255,.5);font-size:1.1rem;line-height:1;cursor:pointer;padding:4px;background:none;border:none;font-family:\'Outfit\',system-ui,sans-serif;transition:.15s}',
    '.db-close:hover{color:rgba(255,255,255,.9)}',
    '@media(max-width:768px){#diff-banner{display:none}}',
    /* NAV */
    '#nav{position:fixed;top:48px;left:0;right:0;z-index:500;transition:background .3s,box-shadow .3s;background:rgba(255,255,255,.97);backdrop-filter:blur(16px);box-shadow:0 1px 0 rgba(0,0,0,.08)}',
    '#nav.scrolled{background:rgba(255,255,255,.99)!important;box-shadow:0 1px 0 rgba(0,0,0,.08)}',
    '.nav-wrap{max-width:1400px;margin:0 auto;padding:0 48px;height:68px;display:flex;align-items:center;justify-content:space-between;gap:24px}',
    '.nav-logo{display:flex;align-items:center;gap:10px;cursor:pointer;text-decoration:none}',
    '.nav-logo svg{flex-shrink:0;color:#111827;transition:color .2s}',
    '.logo-name{font-size:1.0625rem;font-weight:800;letter-spacing:-.02em;color:#111827;font-family:\'Outfit\',system-ui,sans-serif}',
    '.nav-links{display:flex;align-items:center;gap:2px}',
    '.nav-links button{font-size:.9375rem;font-weight:600;color:#667085;padding:8px 13px;border-radius:8px;transition:.15s;font-family:\'Outfit\',system-ui,sans-serif;cursor:pointer;border:none;background:none}',
    '.nav-links button:hover{color:#111827;background:#F5F7FA}',
    '.nav-links button.on{color:#111827;font-weight:700}',
    '.nav-right{display:flex;align-items:center;gap:12px}',
    '.nav-tel{font-size:.8125rem;font-weight:600;color:#667085;transition:.15s;text-decoration:none;font-family:\'Outfit\',system-ui,sans-serif}',
    '.nav-tel:hover{color:#111827}',
    '.nav-cta{background:#1D5FE8;color:#fff;font-weight:700;font-size:.8125rem;padding:9px 20px;border-radius:8px;transition:.15s;white-space:nowrap;font-family:\'Outfit\',system-ui,sans-serif;text-decoration:none;display:inline-block;border:none;cursor:pointer}',
    '.nav-cta:hover{background:#1549C0;transform:translateY(-1px)}',
    '.ham{display:none;flex-direction:column;gap:5px;padding:6px;cursor:pointer;background:none;border:none}',
    '.ham span{display:block;width:22px;height:2px;background:#111827;border-radius:2px;transition:.25s}',
    '.ham span:nth-child(2){width:15px}',
    '.ham.open span:nth-child(1){transform:rotate(45deg) translate(5px,5px)}',
    '.ham.open span:nth-child(2){opacity:0;transform:translateX(8px)}',
    '.ham.open span:nth-child(3){transform:rotate(-45deg) translate(5px,-5px)}',
    /* DRAWER */
    '.drawer{position:fixed;inset:0;z-index:499;pointer-events:none}',
    '.drawer-bg{position:absolute;inset:0;background:rgba(0,0,0,.55);opacity:0;transition:opacity .3s;backdrop-filter:blur(4px)}',
    '.drawer-panel{position:absolute;top:0;right:0;bottom:0;width:min(300px,88vw);background:#080C14;transform:translateX(100%);transition:transform .35s cubic-bezier(.25,.46,.45,.94);padding:80px 24px 40px;display:flex;flex-direction:column;gap:4px}',
    '.drawer.open{pointer-events:all}',
    '.drawer.open .drawer-bg{opacity:1}',
    '.drawer.open .drawer-panel{transform:translateX(0)}',
    '.d-link{text-align:left;padding:13px 16px;font-size:.9375rem;font-weight:600;color:rgba(255,255,255,.7);border-radius:8px;width:100%;display:block;font-family:\'Outfit\',system-ui,sans-serif;cursor:pointer;transition:.15s;border:none;background:none;text-decoration:none}',
    '.d-link:hover{background:rgba(255,255,255,.06);color:#fff}',
    '.d-div{height:1px;background:rgba(255,255,255,.07);margin:8px 0}',
    '.d-cta{background:#1D5FE8;color:#fff;text-align:center;padding:14px;border-radius:8px;font-weight:700;font-size:.9375rem;display:block;margin-top:10px;font-family:\'Outfit\',system-ui,sans-serif;transition:.15s;text-decoration:none}',
    '.d-cta:hover{background:#1549C0}',
    '@media(max-width:768px){.nav-wrap{padding:0 20px}.nav-links,.nav-right{display:none}.ham{display:flex}}'
  ].join('\n');
  document.head.appendChild(style);

  // ── HTML ─────────────────────────────────────────────────────────────────
  var svgDefs = '<svg style="display:none"><symbol id="mlogo" viewBox="0 0 120 90"><polyline points="14,76 36,14 60,52 84,14 106,76" stroke="currentColor" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none"/></symbol></svg>';

  var banner = [
    '<div id="diff-banner">',
    '  <div class="db-inner">',
    '    <span class="db-copy">Contracted Service Provider? Check your market\'s <span class="db-highlight">Driver Hiring Difficulty</span></span>',
    '    <div class="db-sep"></div>',
    '    <div class="db-widget">',
    '      <div id="db-p1" style="display:flex;align-items:center;gap:8px">',
    '        <input id="db-input" type="text" placeholder="Station # (e.g. 463, 472)" autocomplete="off">',
    '        <button class="db-btn" id="db-check-btn">Check →</button>',
    '      </div>',
    '      <div id="db-p2" style="display:none;align-items:center;gap:8px">',
    '        <span style="font-size:.78rem;color:rgba(255,255,255,.45);white-space:nowrap">Get your results:</span>',
    '        <input id="db-email" type="email" placeholder="your@email.com" autocomplete="email">',
    '        <button class="db-btn" id="db-submit-btn">See Results →</button>',
    '      </div>',
    '      <div id="db-result"></div>',
    '    </div>',
    '    <button class="db-close" id="db-close-btn" aria-label="Close">×</button>',
    '  </div>',
    '</div>'
  ].join('\n');

  var nav = [
    '<nav id="nav">',
    '  <div class="nav-wrap">',
    '    <a href="index.html" class="nav-logo">',
    '      <svg width="36" height="27" viewBox="0 0 120 90"><use href="#mlogo"/></svg>',
    '      <span class="logo-name">Mountain Group</span>',
    '    </a>',
    '    <div class="nav-links">',
    '      <button onclick="location.href=\'index.html\'" id="nb-home">Home</button>',
    '      <button onclick="location.href=\'how-it-works.html\'" id="nb-process">How It Works</button>',
    '      <button onclick="location.href=\'compliance.html\'" id="nb-compliance">Compliance</button>',
    '      <button onclick="location.href=\'pricing.html\'" id="nb-pricing">Pricing</button>',
    '      <button onclick="location.href=\'about.html\'" id="nb-about">About</button>',
    '      <button onclick="location.href=\'contact.html\'" id="nb-contact">Contact</button>',
    '      <button onclick="location.href=\'blog.html\'" id="nb-blog">Blog</button>',
    '    </div>',
    '    <div class="nav-right">',
    '      <a class="nav-tel" href="mountain_tips.html">Weekly Tips →</a>',
    '      <a class="nav-cta" href="https://scheduler.mountainrecruiting.com" target="_blank">Get Started</a>',
    '    </div>',
    '    <button class="ham" id="ham"><span></span><span></span><span></span></button>',
    '  </div>',
    '</nav>'
  ].join('\n');

  var drawer = [
    '<div class="drawer" id="drawer">',
    '  <div class="drawer-bg"></div>',
    '  <div class="drawer-panel">',
    '    <a class="d-link" href="index.html">Home</a>',
    '    <a class="d-link" href="how-it-works.html">How It Works</a>',
    '    <a class="d-link" href="compliance.html">Compliance</a>',
    '    <a class="d-link" href="pricing.html">Pricing</a>',
    '    <a class="d-link" href="about.html">About</a>',
    '    <a class="d-link" href="contact.html">Contact</a>',
    '    <a class="d-link" href="blog.html">Blog</a>',
    '    <div class="d-div"></div>',
    '    <a class="d-cta" href="https://scheduler.mountainrecruiting.com" target="_blank">Get Started</a>',
    '  </div>',
    '</div>'
  ].join('\n');

  document.body.insertAdjacentHTML('afterbegin', svgDefs + '\n' + banner + '\n' + nav + '\n' + drawer + '\n');

  // ── Active nav button from URL ────────────────────────────────────────────
  var page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  var navMap = {
    'index.html': 'nb-home', '': 'nb-home',
    'how-it-works.html': 'nb-process',
    'compliance.html': 'nb-compliance',
    'pricing.html': 'nb-pricing',
    'about.html': 'nb-about',
    'contact.html': 'nb-contact',
    'blog.html': 'nb-blog'
  };
  if (page.indexOf('blog-') === 0) navMap[page] = 'nb-blog';
  var activeId = navMap[page];
  if (activeId) {
    var activeBtn = document.getElementById(activeId);
    if (activeBtn) activeBtn.classList.add('on');
  }

  // ── Event wiring ─────────────────────────────────────────────────────────
  document.getElementById('db-check-btn').addEventListener('click', checkDifficulty);
  document.getElementById('db-submit-btn').addEventListener('click', submitMarketLead);
  document.getElementById('db-close-btn').addEventListener('click', closeDiffBanner);
  document.getElementById('db-input').addEventListener('keydown', function (e) { if (e.key === 'Enter') checkDifficulty(); });
  document.getElementById('db-email').addEventListener('keydown', function (e) { if (e.key === 'Enter') submitMarketLead(); });
  document.getElementById('ham').addEventListener('click', toggleDrawer);
  document.querySelector('.drawer-bg').addEventListener('click', closeDrawer);

  // ── Banner JS ────────────────────────────────────────────────────────────
  var _dbStations = [], _dbFetch = null;
  var _dbPalette = {
    'Very Difficult':     'background:#7f1d1d;color:#fca5a5',
    'Difficult':          'background:#7c2d12;color:#fdba74',
    'Difficult/Moderate': 'background:#713f12;color:#fde68a',
    'Moderate':           'background:#1e3a8a;color:#93c5fd',
    'Easy':               'background:#14532d;color:#86efac'
  };

  function closeDiffBanner() {
    document.getElementById('diff-banner').style.display = 'none';
    document.getElementById('nav').style.top = '0';
    var m = document.querySelector('main,[id$="-main"]');
    if (m) m.style.paddingTop = '68px';
  }

  function checkDifficulty() {
    var raw = document.getElementById('db-input').value.trim();
    if (!raw) { document.getElementById('db-input').focus(); return; }
    _dbStations = raw.split(',').map(function (s) { return s.trim().toUpperCase(); }).filter(Boolean);
    _dbFetch = Promise.all(_dbStations.map(function (s) {
      return fetch('https://dashboard.mountainrecruiting.com/api/public/station-difficulty?station=' + encodeURIComponent(s))
        .then(function (r) { return r.json(); });
    }));
    document.getElementById('db-p1').style.display = 'none';
    document.getElementById('db-p2').style.display = 'flex';
    document.getElementById('db-email').focus();
  }

  async function submitMarketLead() {
    var email = (document.getElementById('db-email').value || '').trim();
    if (!email || !email.includes('@')) { document.getElementById('db-email').focus(); return; }
    document.getElementById('db-p2').style.display = 'none';
    var r = document.getElementById('db-result');
    r.style.cssText = 'display:flex;align-items:center;gap:8px;flex-wrap:wrap';
    r.innerHTML = '<span style="font-size:.78rem;color:rgba(255,255,255,.4)">Loading…</span>';
    try {
      var responses = await Promise.all([
        _dbFetch,
        fetch('https://dashboard.mountainrecruiting.com/api/public/market-lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email, stations: _dbStations })
        }).then(function (res) { return res.json(); }).catch(function () { return {}; })
      ]);
      var results = responses[0];
      var leadResp = responses[1];
      var proposalUrl = leadResp && leadResp.proposal_url ? leadResp.proposal_url : null;
      var html = '';
      results.forEach(function (d, i) {
        if (!d.found) {
          html += '<span style="font-size:.78rem;color:rgba(255,255,255,.4)">' + _dbStations[i] + ': not found</span>';
        } else {
          var sty = _dbPalette[d.difficulty] || 'background:#1e293b;color:#94a3b8';
          html += '<span style="font-size:.72rem;font-weight:800;padding:3px 10px;border-radius:4px;text-transform:uppercase;letter-spacing:.06em;white-space:nowrap;' + sty + '">' + d.station + ' · ' + (d.difficulty || 'Unknown') + '</span>';
        }
      });
      var analysisHref = proposalUrl || 'https://scheduler.mountainrecruiting.com';
      html += '<a href="' + analysisHref + '" target="_blank" style="font-size:.78rem;color:#93B8FF;font-weight:700;text-decoration:none;white-space:nowrap">View Analysis →</a>';
      r.innerHTML = html;
    } catch (e) {
      r.innerHTML = '<span style="font-size:.78rem;color:rgba(255,255,255,.4)">Error — try again</span>';
    }
  }

  function toggleDrawer() {
    var drawer = document.getElementById('drawer');
    var ham = document.getElementById('ham');
    drawer.classList.toggle('open');
    ham.classList.toggle('open');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
  }

  function closeDrawer() {
    document.getElementById('drawer').classList.remove('open');
    document.getElementById('ham').classList.remove('open');
    document.body.style.overflow = '';
  }

  function updateNav() {
    var nav = document.getElementById('nav');
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // Expose for any remaining inline handlers in older pages
  window.closeDiffBanner = closeDiffBanner;
  window.checkDifficulty = checkDifficulty;
  window.submitMarketLead = submitMarketLead;
  window.toggleDrawer = toggleDrawer;
  window.closeDrawer = closeDrawer;
})();
