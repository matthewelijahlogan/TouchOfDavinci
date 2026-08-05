const projects = [
  {
    index: "001",
    collection: "business",
    category: "intelligence",
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
    collection: "business",
    category: "intelligence",
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
    collection: "personal",
    category: "experiences",
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
    collection: "business",
    category: "operations",
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
    collection: "personal",
    category: "experiences",
    title: "Book of Elijah",
    subtitle: "Comparative Scripture Reader",
    description:
      "An ancient-text reading room placing the KJV beside an independent, source-language translation in progress.",
    url: "https://book-of-elijah.onrender.com/",
    page: "projects/book-of-elijah.html",
    status: "Live",
    tags: ["Ancient Texts", "AI Translation", "Reader"],
    visual: "scroll"
  },
  {
    index: "006",
    collection: "business",
    category: "intelligence",
    title: "MONA",
    subtitle: "Elemental Cancer Research",
    description:
      "An evidence-aware computational workspace for exploring any elemental combination across cancer-response data.",
    url: "https://mona-frontend-2vie.onrender.com/",
    page: "projects/mona.html",
    status: "Live",
    tags: ["Computational Oncology", "118 Elements", "Applied AI"],
    visual: "mona"
  },
  {
    index: "007",
    collection: "personal",
    category: "experiences",
    title: "Moments",
    subtitle: "The Meaning Archive",
    description:
      "A retro social camera that scores photos and short clips for presence, depth, connection, atmosphere, and coherence.",
    url: "https://github.com/matthewelijahlogan/moments",
    page: "projects/moments.html",
    status: "In development",
    tags: ["Human Experience", "Photo Scoring", "Mobile"],
    visual: "image",
    image: "assets/projects/moments-banner.png"
  },
  {
    index: "008",
    collection: "business",
    category: "intelligence",
    title: "Sentinel AI",
    subtitle: "Multi-Sensor Aerial Awareness",
    description:
      "A red-line command center combining drone-focused visual detection, persistent motion tracks, RF spectrum signals, and time-window sensor fusion.",
    url: "https://sentinel-ai-dwjz.onrender.com/",
    status: "Alpha",
    tags: ["Computer Vision", "RF Signals", "Sensor Fusion"],
    visual: "sentinel"
  },
  {
    index: "009",
    collection: "personal",
    category: "experiences",
    title: "I Call Bullsh!t",
    subtitle: "Calibrated Interview",
    description:
      "A calibrated voice-pattern interview experience that runs privately in your browser.",
    url: "https://icb-calibrated-interview.onrender.com/",
    status: "Live",
    tags: ["Voice Patterns", "Private by Design", "Interview"],
    visual: "bullshit"
  },
  {
    index: "010",
    collection: "personal",
    category: "experiences",
    title: "Dinner Bell",
    subtitle: "The Family Supper Board",
    description:
      "A warm, local-first meal planner that brings the weekly menu, family cookbook, shopping list, and kitchen timer back around one table.",
    url: "https://dinner-bell-byh5.onrender.com/",
    status: "Live",
    tags: ["Family Life", "Local First", "Meal Planning"],
    visual: "image",
    image: "assets/projects/dinner-bell.png"
  },
  {
    index: "011",
    collection: "personal",
    category: "experiences",
    title: "EyeSay",
    subtitle: "See It. Say It. Live It.",
    description:
      "An offline-first assistive communication board with touch, keyboard, speech, and optional experimental webcam-gaze access.",
    url: "https://eyesay.onrender.com/",
    status: "Beta",
    tags: ["Assistive Communication", "Offline First", "Accessible Design"],
    visual: "image",
    image: "assets/projects/eyesay.png"
  },
  {
    index: "012",
    collection: "business",
    category: "intelligence",
    title: "TensorBook",
    subtitle: "Quantitative Sports Intelligence",
    description:
      "A source-aware sports research terminal built around transparent projections, market comparison, uncertainty, and responsible analysis.",
    url: "https://tensor-book-web.onrender.com/",
    status: "Live",
    tags: ["Sports Intelligence", "Transparent Models", "Market Research"],
    visual: "image",
    image: "assets/projects/tensor-book.png"
  }
];

const categoryLabels = {
  intelligence: "Intelligence systems",
  experiences: "Human experiences",
  operations: "Operational products",
  business: "Business and industry applications",
  personal: "Personal applications",
  all: "All studio work"
};

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

function createMonaVisual() {
  return `
    <div class="mona-screen" aria-hidden="true">
      <svg class="mona-flow mona-flow-top" viewBox="0 0 700 180" preserveAspectRatio="none">
        <path d="M-30 128C115 25 219 211 362 91S576 21 739 102"></path>
        <path d="M-20 151C120 51 228 224 371 112S578 44 731 124"></path>
        <path d="M-18 96C102 12 210 177 349 64S569 1 731 74"></path>
      </svg>
      <div class="mona-card-head">
        <img src="assets/projects/mona-logo-transparent.png" alt="">
        <span>ELEMENTAL INTELLIGENCE / 118</span>
      </div>
      <div class="mona-card-body">
        <p>COMPOUND WORKSPACE</p>
        <h4>Na <i>+</i> Au <i>+</i> O</h4>
        <div class="mona-evidence">
          <span><b>03</b> ELEMENTS</span>
          <span><b>12</b> STUDIES</span>
          <span><b>87%</b> COVERAGE</span>
        </div>
      </div>
      <div class="mona-mode-strip"><span>DIRECT</span><span>HYBRID</span><span>PROJECTED</span></div>
      <svg class="mona-flow mona-flow-bottom" viewBox="0 0 700 150" preserveAspectRatio="none">
        <path d="M-24 94C118 4 210 162 357 67S574 14 729 77"></path>
        <path d="M-22 119C115 31 228 187 371 91S580 42 729 101"></path>
      </svg>
    </div>`;
}

function createSentinelVisual() {
  return `
    <div class="sentinel-screen" aria-hidden="true">
      <div class="sentinel-grid"></div>
      <div class="sentinel-beam"></div>
      <div class="sentinel-lock">
        <span class="sentinel-crosshair"></span>
        <strong>S</strong>
        <i>TRACK / 008</i>
      </div>
      <div class="sentinel-readout">
        <span>SENTINEL AI // MULTI-SENSOR</span>
        <b>OPTICAL <i>●</i> RF <i>●</i> FUSION</b>
      </div>
      <div class="sentinel-signals"><i></i><i></i><i></i><i></i><i></i></div>
    </div>`;
}

function createBullshitVisual() {
  return `
    <div class="bullshit-screen" aria-hidden="true">
      <div class="bullshit-lines"></div>
      <div class="bullshit-mark"><span>ICB</span><i>CALIBRATED INTERVIEW</i></div>
      <div class="bullshit-copy">
        <span>I CALL BULLSH!T / VOICE PATTERN</span>
        <strong>LISTEN.<br>CALIBRATE.</strong>
      </div>
    </div>`;
}

function projectMarkup(project) {
  const visual = project.visual === "signal"
    ? createSignalVisual()
    : project.visual === "console"
      ? createConsoleVisual()
      : project.visual === "scroll"
        ? createScrollVisual()
      : project.visual === "mona"
          ? createMonaVisual()
          : project.visual === "sentinel"
            ? createSentinelVisual()
            : project.visual === "bullshit"
              ? createBullshitVisual()
              : createImageVisual(project);
  const projectUrl = project.page || project.url;
  const targetAttributes = project.page ? "" : 'target="_blank" rel="noopener"';

  return `
    <article class="project-card reveal" id="project-${project.index}" data-visual="${project.visual}">
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
const categorySummary = document.getElementById("categorySummary");
const categoryButtons = [...document.querySelectorAll("[data-category]")];
const pageCollection = document.body.dataset.collection;
const hashProject = projects.find(
  project => window.location.hash === `#project-${project.index}`
);
let activeCategory = pageCollection || (hashProject ? hashProject.category : "experiences");

function renderProjects(category, animate = false) {
  if (!projectGrid) return;

  activeCategory = category;
  const visibleProjects = category === "all"
    ? projects
    : projects.filter(project =>
      project.category === category || project.collection === category
    );

  projectGrid.innerHTML = visibleProjects.map(projectMarkup).join("");
  categoryButtons.forEach(button => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.category === activeCategory)
    );
  });

  if (categorySummary) {
    categorySummary.textContent =
      `${categoryLabels[category]} / ${visibleProjects.length} ` +
      `${visibleProjects.length === 1 ? "project" : "projects"}`;
  }

  if (animate && typeof revealObserver !== "undefined") {
    projectGrid.querySelectorAll(".reveal").forEach(element => {
      revealObserver.observe(element);
    });
  }
}

if (projectGrid) renderProjects(activeCategory);

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    renderProjects(button.dataset.category, true);
  });
});

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
