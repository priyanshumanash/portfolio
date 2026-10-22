/* Renders the page from data.js. You should not need to edit this file.
   Tip: open the site with  ?edit  at the end of the URL (index.html?edit)
   to see every empty link slot as a dashed "add link" button. */
(function () {
  const D = window.PORTFOLIO;
  const EDIT = new URLSearchParams(location.search).has("edit");
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const isExternal = (u) => /^https?:\/\//i.test(u);
  const pad = (n) => String(n).padStart(2, "0");
  let io; // scroll-reveal observer

  function linkButton(l, cls = "link-btn") {
    if (l.url) {
      const ext = isExternal(l.url) || /\.pdf$/i.test(l.url);
      return `<a class="${cls}" href="${esc(l.url)}"${ext ? ' target="_blank" rel="noopener"' : ""}>${esc(l.label)} <span aria-hidden="true">↗</span></a>`;
    }
    return EDIT ? `<span class="${cls} pending" title="${esc(l.file || "Add url in data.js")}">+ ${esc(l.label)}</span>` : "";
  }

  /* ---------- banner ---------- */
  const P = D.profile;
  document.title = `${P.first} ${P.last} — Security`;
  $("#name").innerHTML = `${esc(P.first)}<em>${esc(P.last)}</em>`;
  $("#eyebrow").textContent = P.eyebrow;
  $("#intro").textContent = P.intro;
  $("#seeking").textContent = P.seeking;
  $("#facts").innerHTML = P.facts.map((f) => `<div><dt>${esc(f.k)}</dt><dd>${esc(f.v)}</dd></div>`).join("");

  /* ---------- numbers strip ---------- */
  const earned = D.certifications.filter((c) => c.status !== "In progress").length;
  const tracksUsed = D.tracks.filter((t) => D.projects.some((p) => p.track === t.id)).length;
  $("#strip").innerHTML = [
    [D.projects.length, "Projects"],
    [earned, "Certifications"],
    [tracksUsed, "Security domains"],
    [(D.achievements[0] || {}).value || "—", (D.achievements[0] || {}).label || ""]
  ].map(([v, l]) => `<div class="strip-item"><strong>${esc(v)}</strong><span>${esc(l)}</span></div>`).join("");

  /* ---------- projects ---------- */
  const filters = $("#filters");
  const list = $("#project-list");
  const note = $("#track-note");
  const counts = (id) => D.projects.filter((p) => p.track === id).length;
  const tabs = [{ id: "all", label: "All", blurb: "Every project, grouped by domain. Flagships first." }].concat(D.tracks.filter((t) => counts(t.id)));

  filters.innerHTML = tabs.map((t, i) =>
    `<button class="filter" type="button" data-track="${t.id}" aria-pressed="${i === 0}">${esc(t.label)} <small>${t.id === "all" ? D.projects.length : counts(t.id)}</small></button>`
  ).join("");

  function card(p, n) {
    const meta = [
      `<span class="num">${pad(n)}</span>`,
      p.flagship ? `<span class="pill gold">Flagship</span>` : "",
      `<span>${esc(p.context || "")}${p.group ? " · Team" : ""}</span>`,
      p.year ? `<span>${esc(p.year)}</span>` : ""
    ].join("");
    const points = (p.points || []).length ? `<ul class="points">${p.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
    const metric = p.metric ? `<div class="metric"><strong>${esc(p.metric.value)}</strong><span>${esc(p.metric.label)}</span></div>` : "";
    const links = (p.links || []).map((l) => linkButton(l)).join("");
    return `<article class="card reveal${p.flagship ? " is-flagship" : ""}">
      <div class="card-meta">${meta}</div>
      <div class="card-body">
        <div>
          <h4>${esc(p.title)}</h4>
          <p class="summary">${esc(p.summary)}</p>
          ${p.group && p.role ? `<p class="role"><b>My role:</b> ${esc(p.role)}</p>` : ""}
        </div>
        ${metric}
      </div>
      ${points}
      ${(p.tags || []).length ? `<ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
      ${links ? `<div class="card-links">${links}</div>` : ""}
    </article>`;
  }

  function sortFlagFirst(a, b) { return (b.flagship ? 1 : 0) - (a.flagship ? 1 : 0); }

  function render(trackId) {
    const tab = tabs.find((t) => t.id === trackId);
    note.textContent = tab ? tab.blurb : "";
    let n = 0;
    if (trackId === "all") {
      list.innerHTML = D.tracks.filter((t) => counts(t.id)).map((t) => {
        const items = D.projects.filter((p) => p.track === t.id).sort(sortFlagFirst);
        return `<div class="group-title"><span class="label">${esc(t.label)}</span><h3>${esc(t.blurb)}</h3></div>
          <div class="cards">${items.map((p) => card(p, ++n)).join("")}</div>`;
      }).join("");
    } else {
      const items = D.projects.filter((p) => p.track === trackId).sort(sortFlagFirst);
      list.innerHTML = `<div class="cards">${items.map((p) => card(p, ++n)).join("")}</div>`;
    }
    observe();
  }

  filters.addEventListener("click", (e) => {
    const b = e.target.closest(".filter");
    if (!b) return;
    filters.querySelectorAll(".filter").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    render(b.dataset.track);
    history.replaceState(null, "", (EDIT ? "?edit" : location.pathname) + "#work");
  });
  render("all");

  /* ---------- certifications ---------- */
  function badgeSVG(c) {
    const col = c.color || "#dcc28e";
    const short = esc(c.name.length > 8 ? c.name.slice(0, 8) : c.name);
    const fs = c.name.length > 6 ? 10 : 13;
    return `<svg viewBox="0 0 84 84" role="img" aria-label="${esc(c.full)} badge">
      <polygon points="42,3 77,22 77,62 42,81 7,62 7,22" fill="${col}" fill-opacity=".14" stroke="${col}" stroke-width="1.5"/>
      <polygon points="42,11 70,26 70,58 42,73 14,58 14,26" fill="none" stroke="${col}" stroke-opacity=".45"/>
      <text x="42" y="${c.name.length > 6 ? 46 : 47}" text-anchor="middle" font-family="Geist Mono, monospace" font-size="${fs}" font-weight="500" fill="#f3f1ea">${short}</text>
      <text x="42" y="60" text-anchor="middle" font-family="Geist Mono, monospace" font-size="6.5" letter-spacing=".8" fill="${col}">${esc((c.issuer || "").split(" ")[0].toUpperCase().slice(0, 10))}</text>
    </svg>`;
  }
  $("#cert-grid").innerHTML = D.certifications.map((c) => {
    const img = c.image ? `<img src="${esc(c.image)}" alt="${esc(c.full)} badge" loading="lazy" data-fallback="${esc(c.name)}">` : badgeSVG(c);
    const verify = c.credly
      ? `<a class="verify" href="${esc(c.credly)}" target="_blank" rel="noopener">${/credly\.com/i.test(c.credly) ? "Verify on Credly" : "Verify"} ↗</a>`
      : (c.status === "In progress" ? `<span class="verify pending">In progress</span>` : `<a class="verify" href="#certifications" data-todo="add credly link in data.js">Verify on Credly ↗</a>`);
    return `<div class="cert reveal${c.status === "In progress" ? " in-progress" : ""}">
      <div class="cert-badge">${c.credly ? `<a href="${esc(c.credly)}" target="_blank" rel="noopener">${img}</a>` : img}</div>
      <div class="cert-info"><h4>${esc(c.full)}</h4><p>${esc(c.issuer)} · ${esc(c.year)}</p>${verify}</div>
    </div>`;
  }).join("");

  // If a badge image fails to load, show the styled placeholder instead
  document.querySelectorAll("img[data-fallback]").forEach((im) => {
    const swap = () => { const c = D.certifications.find((x) => x.name === im.dataset.fallback); if (c) im.outerHTML = badgeSVG(c); };
    if (im.complete && im.naturalWidth === 0) swap(); else im.addEventListener("error", swap, { once: true });
  });

  /* ---------- recognition ---------- */
  $("#wins").innerHTML = D.achievements.map((a) => {
    const inner = `<strong>${esc(a.value)}</strong><h4>${esc(a.label)}</h4><p>${esc(a.note)}</p>`;
    return a.url ? `<a class="win reveal" href="${esc(a.url)}" target="_blank" rel="noopener">${inner}</a>` : `<div class="win reveal">${inner}</div>`;
  }).join("");

  /* ---------- record ---------- */
  $("#timeline").innerHTML = D.experience.map((x) =>
    `<li class="reveal"><div class="when">${esc(x.when)}</div><div><h4>${esc(x.role)} <span>· ${esc(x.org)}</span></h4><p>${esc(x.text)}</p></div></li>`
  ).join("");
  $("#edu").innerHTML = D.education.map((e) =>
    `<li><span class="when">${esc(e.when)}</span><h4>${esc(e.title)}</h4><p>${esc(e.org)}${e.text ? " · " + esc(e.text) : ""}</p></li>`
  ).join("");
  const cvs = P.cv.map((c) => linkButton(c, "button")).join("");
  $("#cv-links").innerHTML = cvs;
  if (!cvs) $("#cv-wrap").hidden = true;

  /* ---------- writing ---------- */
  $("#posts").innerHTML = D.writing.map((w) => {
    const inner = `<span class="when">${esc(w.year)}</span><div><h4>${esc(w.title)}</h4><p>${esc(w.text)}</p></div><span class="dim" aria-hidden="true">${w.url ? "↗" : ""}</span>`;
    return w.url ? `<a class="post reveal" href="${esc(w.url)}" target="_blank" rel="noopener">${inner}</a>` : `<div class="post reveal">${inner}</div>`;
  }).join("");
  const medium = P.socials.find((s) => s.label === "Medium");
  if (medium && medium.url) $("#all-posts").href = medium.url; else $("#all-posts").hidden = true;

  /* ---------- misc ---------- */
  const misc = D.misc || [];
  $("#misc-list").innerHTML = misc.map((m) => `<article class="misc-item reveal">
      ${m.image ? `<div class="misc-photo"><img src="${esc(m.image)}" alt="${esc(m.title)}" loading="lazy"></div>` : ""}
      <div class="misc-body">
        <p class="card-meta"><span class="num">${esc(m.date || "")}</span>${m.highlight ? `<span class="pill gold">${esc(m.highlight)}</span>` : ""}</p>
        <h4>${esc(m.title)}</h4>
        <p class="summary">${esc(m.text)}</p>
        ${(m.links || []).some((l) => l.url || EDIT) ? `<div class="card-links">${m.links.map((l) => linkButton(l)).join("")}</div>` : ""}
      </div>
    </article>`).join("");
  if (!misc.length) { $("#misc").hidden = true; const n = document.querySelector('.main-nav a[href="#misc"]'); if (n) n.hidden = true; }

  /* ---------- contact ---------- */
  $("#email").textContent = P.email;
  $("#email").href = "mailto:" + P.email;
  $("#socials").innerHTML = P.socials.map((s) => linkButton(s, "button")).join("");
  $("#note-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.target;
    const body = `${f.note.value}\n\n— ${f.name.value} (${f.email.value})`;
    location.href = `mailto:${P.email}?subject=${encodeURIComponent("Hello from your portfolio — " + f.name.value)}&body=${encodeURIComponent(body)}`;
  });
  $("#year").textContent = new Date().getFullYear();

  /* ---------- header + nav ---------- */
  const header = $(".site-header");
  const onScroll = () => header.classList.toggle("is-solid", scrollY > 40);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  $(".nav-toggle").addEventListener("click", (e) => {
    const nav = $(".main-nav"); const open = nav.classList.toggle("is-open");
    e.currentTarget.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".main-nav a").forEach((a) => a.addEventListener("click", () => $(".main-nav").classList.remove("is-open")));

  /* ---------- reveal ---------- */
  function observe() {
    if (!("IntersectionObserver" in window)) { document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in")); return; }
    io = io || new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal:not(.is-in)").forEach((el) => io.observe(el));
  }
  observe();
})();
