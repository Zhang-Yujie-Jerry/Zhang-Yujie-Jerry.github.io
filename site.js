(function () {
  const page = document.body.dataset.page || "home";
  const items = [
    ["home", "Homepage", "/"],
    ["team", "Team", "/team/"],
    ["publications", "Publications", "/publications/"],
    ["awards", "Awards and Honors", "/awards/"],
    ["services", "Services", "/services/"],
    ["news", "News", "/news/"],
    ["openings", "Openings", "/openings/"],
    ["contact", "Contact", "/contact/"]
  ];

  const newsItems = [
    { date: "2026-08", label: "August 2026", text: "Prof. Zhang delivered an invited talk at APCAP 2026 in Chengdu." },
    { date: "2026-07", label: "July 2026", text: "Prof. Zhang received the Young Scientist Award at the PhotonIcs and Electromagnetics Research Symposium (PIERS) 2026.", shortText: "Prof. Zhang received the PIERS Young Scientist Award." },
    { date: "2026-07", label: "July 2026", text: "Dr. Guo Xiaoxuan and Ph.D. student Chen Yihua joined the group." },
    { date: "2026-06", label: "June 2026", text: "Dr. Cui Jinyuan and Chen Haibiao joined the group." },
    { date: "2026-01", label: "January 2026", text: "Prof. Zhang joined the IEEE Singapore MTT/AP Chapter as a committee member." },
    { date: "2025-11", label: "November 2025", text: "Prof. Zhang was appointed Associate Editor of the <em>International Journal of Numerical Modelling: Electronic Networks, Devices and Fields</em> (IJNM)." },
    { date: "2025-10", label: "October 2025", text: "Prof. Zhang joined Nanyang Technological University as an Assistant Professor." }
  ].sort((a, b) => b.date.localeCompare(a.date));

  const navItems = items.map(([key, label, href], index) => {
    const classes = ["masthead__menu-item"];
    if (index === 0) classes.push("persist");
    if (key === page) classes.push("is-active");
    return `<li class="${classes.join(" ")}"><a href="${href}">${label}</a></li>`;
  }).join("");

  document.getElementById("site-header").innerHTML = `
    <div class="masthead">
      <div class="masthead__inner-wrap">
        <a class="site-identity" href="/" aria-label="IDEAS Lab homepage">
          <span class="site-identity__mark" aria-hidden="true"><i></i><i></i><i></i></span>
          <span class="site-identity__copy"><strong>IDEAS Lab</strong><small>NTU · Singapore</small></span>
        </a>
        <div class="masthead__menu">
          <nav id="site-nav" class="greedy-nav" aria-label="Primary navigation">
            <button aria-label="Open navigation"><div class="navicon"></div></button>
            <ul class="visible-links">${navItems}</ul>
            <ul class="hidden-links hidden"></ul>
          </nav>
        </div>
      </div>
    </div>`;

  document.getElementById("site-sidebar").innerHTML = `
    <div itemscope itemtype="https://schema.org/Person">
      <div class="author__avatar"><img src="/assets/yujie-zhang.png" class="author__avatar" alt="Zhang Yujie"></div>
      <div class="author__content">
        <h3 class="author__name">Zhang Yujie</h3>
        <p class="author__bio">Assistant Professor at Nanyang Technological University</p>
      </div>
      <div class="author__urls-wrapper">
        <button class="btn btn--inverse">Follow</button>
        <ul class="author__urls social-icons">
          <li><a href="mailto:yujie.zhang@ntu.edu.sg">Email</a></li>
          <li><a href="https://scholar.google.com/citations?hl=zh-TW&amp;user=020190QAAAAJ">Google Scholar</a></li>
          <li><a href="https://orcid.org/0000-0002-5989-4892">ORCID</a></li>
          <li><a href="https://www.researchgate.net/profile/Yujie-Zhang-23">ResearchGate</a></li>
          <li><a href="https://www.linkedin.com/in/yujie-zhang-a240b3287/">LinkedIn</a></li>
        </ul>
      </div>
    </div>`;

  const pageHeader = document.querySelector(".page__inner-wrap > header");
  if (page !== "home" && pageHeader) {
    const bannerArt = document.createElement("div");
    bannerArt.className = `section-banner__art section-banner__art--${page}`;
    bannerArt.setAttribute("aria-hidden", "true");
    bannerArt.innerHTML = "<span></span>".repeat(6);
    pageHeader.prepend(bannerArt);

    const createWave = (className, phase, amplitude) => {
      const wave = document.createElement("div");
      wave.className = `section-banner__wave ${className}`;
      wave.setAttribute("aria-hidden", "true");
      wave.innerHTML = Array.from({ length: 64 }, (_, index) => {
        const angle = (index / 63) * Math.PI * 4 + phase;
        const offset = (Math.sin(angle) * amplitude).toFixed(1);
        const delay = (-index * 0.045).toFixed(2);
        return `<i style="--wave-y:${offset}px;--wave-delay:${delay}s"></i>`;
      }).join("");
      return wave;
    };
    pageHeader.prepend(createWave("section-banner__wave--secondary", Math.PI / 2, 16));
    pageHeader.prepend(createWave("section-banner__wave--primary", 0, 25));
  }

  document.querySelectorAll("[data-news-list]").forEach((list) => {
    const isLatest = list.dataset.newsList === "latest";
    const entries = isLatest ? newsItems.slice(0, 3) : newsItems;
    list.innerHTML = entries.map((entry) => {
      const content = isLatest && entry.shortText ? entry.shortText : entry.text;
      const articleClass = isLatest ? "" : " class=\"news-item\"";
      return `<article${articleClass}><time datetime="${entry.date}">${entry.label}</time><p>${content}</p></article>`;
    }).join("");
  });

  document.getElementById("site-footer").innerHTML = `
    <div class="page__footer"><footer class="ideas-footer">
      <div class="ideas-footer__brand">Yujie Zhang · IDEAS Lab @ NTU</div>
      <img class="ideas-footer__logo" src="/assets/ntu-logo.png" alt="Nanyang Technological University Singapore">
      <div class="ideas-footer__copyright">Copyright © 2026 Yujie Zhang · All rights reserved.</div>
    </footer></div>`;
})();
