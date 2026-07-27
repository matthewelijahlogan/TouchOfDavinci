const projects = [
  {
    index: "001",
    title: "PredIQT",
    subtitle: "Market Intelligence Terminal",
    description:
      "A live forecasting interface that turns market data into focused predictions across four time horizons.",
    url: "https://prediqt-ws34.onrender.com/",
    status: "Live",
    tags: ["Applied AI", "Market Data", "Product"],
    visual: "signal"
  },
  {
    index: "002",
    title: "PredIQT API",
    subtitle: "Developer Signal Console",
    description:
      "The intelligence layer behind the ecosystem—analytics, predictions, market context, and portfolio endpoints.",
    url: "https://prediqt-api.onrender.com/docs",
    status: "Live API",
    tags: ["FastAPI", "Analytics", "Infrastructure"],
    visual: "console"
  }
];

function createSignalVisual() {
  return `
    <div class="signal-screen" aria-hidden="true">
      <div class="signal-top"><span>PREDIQT / SIGNAL</span><i>LIVE</i></div>
      <div class="signal-value">+12.84%</div>
      <div class="signal-chart">
        <span></span><span></span><span></span><span></span><span></span>
        <svg viewBox="0 0 500 130" preserveAspectRatio="none">
          <polyline points="0,105 52,92 102,99 154,58 205,72 260,39 314,48 365,18 420,34 500,8"></polyline>
        </svg>
      </div>
      <div class="signal-foot"><span>HOUR</span><span>DAY</span><span>WEEK</span><span>MONTH</span></div>
    </div>`;
}

function createConsoleVisual() {
  return `
    <div class="console-screen" aria-hidden="true">
      <div class="console-chrome"><i></i><i></i><i></i><span>api.touchofdavinci / v0.2</span></div>
      <div class="console-line"><b>GET</b><span>/api/predict/{symbol}</span><em>200</em></div>
      <div class="console-line"><b>GET</b><span>/api/analytics/summary</span><em>200</em></div>
      <div class="console-line"><b>POST</b><span>/api/train/{symbol}</span><em>202</em></div>
      <div class="console-code">
        <span>{</span><br>
        &nbsp;&nbsp;<i>"signal"</i>: <strong>"bullish"</strong>,<br>
        &nbsp;&nbsp;<i>"confidence"</i>: <strong>0.87</strong><br>
        <span>}</span>
      </div>
    </div>`;
}

function projectMarkup(project) {
  const visual = project.visual === "signal"
    ? createSignalVisual()
    : createConsoleVisual();

  return `
    <article class="project-card reveal" data-visual="${project.visual}">
      <a class="project-visual" href="${project.url}" target="_blank" rel="noopener"
         aria-label="Launch ${project.title}">
        ${visual}
        <span class="launch-orb">↗</span>
      </a>
      <div class="project-info">
        <div class="project-meta">
          <span>PROJECT / ${project.index}</span>
          <span class="live-status"><i></i>${project.status}</span>
        </div>
        <div class="project-title-row">
          <div>
            <h3>${project.title}</h3>
            <p>${project.subtitle}</p>
          </div>
          <a href="${project.url}" target="_blank" rel="noopener">Launch ↗</a>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
    </article>`;
}

const projectGrid = document.getElementById("projectGrid");
projectGrid.innerHTML = projects.map(projectMarkup).join("");

document.getElementById("year").textContent = new Date().getFullYear();

if (window.location.hash) {
  requestAnimationFrame(() => {
    const target = document.querySelector(window.location.hash);
    if (target) target.scrollIntoView();
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const cursorGlow = document.querySelector(".cursor-glow");
if (window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("pointermove", (event) => {
    cursorGlow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
  });
}
