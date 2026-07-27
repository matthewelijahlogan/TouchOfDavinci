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
  },
  {
    index: "003",
    title: "PodWatch",
    subtitle: "The Podcast TV Guide",
    description:
      "A familiar, channel-surfing way to discover full video podcast episodes from official sources.",
    url: "https://podwatch.onrender.com/",
    page: "projects/podwatch.html",
    status: "Beta",
    tags: ["Media Discovery", "Video Podcasts", "Product"],
    visual: "image",
    image: "assets/projects/podwatch.png"
  },
  {
    index: "004",
    title: "Axis",
    subtitle: "Staffing Solutions",
    description:
      "A secure staffing operations environment with role-aware access, protected views, and administrative control.",
    url: "https://wheel-of-destiny-iww1.onrender.com/",
    page: "projects/axis-staffing-solutions.html",
    status: "Beta",
    tags: ["Workforce Ops", "Access Control", "SaaS"],
    visual: "image",
    image: "assets/projects/axis-staffing-solutions.png"
  },
  {
    index: "005",
    title: "Heart & Soul",
    subtitle: "Volleyball Training",
    description:
      "A digital home for athlete development, private coaching, volleyball services, and earned player trust.",
    url: "https://heartsoulvolleyball.onrender.com/",
    page: "projects/heart-soul-volleyball.html",
    status: "Beta",
    tags: ["Sports", "Coaching", "Local Business"],
    visual: "image",
    image: "assets/projects/heart-soul-volleyball.png"
  },
  {
    index: "006",
    title: "Cupid’s Arrow",
    subtitle: "A Game for Two",
    description:
      "A playful couples experience built around randomized prompts, timed challenges, and shared momentum.",
    url: "https://cupidsarrow.onrender.com/",
    page: "projects/cupids-arrow.html",
    status: "Beta",
    tags: ["Interactive", "Game Design", "Couples"],
    visual: "image",
    image: "assets/projects/cupids-arrow.png"
  },
  {
    index: "007",
    title: "Book of Elijah",
    subtitle: "Comparative Scripture Reader",
    description:
      "An ancient-text reading room placing the KJV beside an independent, source-language translation in progress.",
    url: "https://book-of-elijah.onrender.com/",
    page: "projects/book-of-elijah.html",
    status: "Live",
    tags: ["Ancient Texts", "AI Translation", "Reader"],
    visual: "scroll"
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

function createImageVisual(project) {
  return `
    <div class="product-capture" aria-hidden="true">
      <img src="${project.image}" alt="">
      <span>BETA BUILD / LIVE CAPTURE</span>
    </div>`;
}

function createScrollVisual() {
  return `
    <div class="scroll-screen" aria-hidden="true">
      <div class="scroll-cap"></div>
      <div class="scroll-page">
        <div class="scroll-brand"><i>E</i><span>THE BOOK OF ELIJAH</span></div>
        <div class="scroll-rule"></div>
        <div class="scroll-columns">
          <div><b>ELIJAH</b><p><em>1</em> A record of the origin, approached again through the ancient language.</p></div>
          <div><b>KING JAMES</b><p><em>1</em> The book of the generation of Jesus Christ, the son of David.</p></div>
        </div>
        <div class="scroll-folio">READ / COMPARE / QUESTION</div>
      </div>
      <div class="scroll-cap scroll-cap-bottom"></div>
    </div>`;
}

function projectMarkup(project) {
  const visual = project.visual === "signal"
    ? createSignalVisual()
    : project.visual === "console"
      ? createConsoleVisual()
      : project.visual === "scroll"
        ? createScrollVisual()
        : createImageVisual(project);
  const projectUrl = project.page || project.url;
  const targetAttributes = project.page ? "" : 'target="_blank" rel="noopener"';

  return `
    <article class="project-card reveal" data-visual="${project.visual}">
      <a class="project-visual" href="${projectUrl}" ${targetAttributes}
         aria-label="Explore ${project.title}">
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
          <a href="${projectUrl}" ${targetAttributes}>${project.page ? "View project" : "Launch"} ↗</a>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
    </article>`;
}

const projectGrid = document.getElementById("projectGrid");
if (projectGrid) {
  projectGrid.innerHTML = projects.map(projectMarkup).join("");
}

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

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
