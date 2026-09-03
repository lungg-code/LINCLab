const members = [
  {
    name: "Shaonan Wang",
    chineseName: "王少楠",
    role: "Assistant Professor",
    image: "assets/members/optimized/shaonan-wang.webp",
    profile: "https://wangshaonan.github.io/",
    research: "Computational neurolinguistics; computational models for language understanding; brain–computer interfaces; AI applications in education and healthcare",
  },
  {
    name: "Chuhan Lang",
    chineseName: "郎楚涵",
    role: "PhD Student",
    start: "Starting September 2026",
    image: "assets/members/optimized/chuhan-lang.webp",
    imagePosition: "50% 64%",
    profile: "https://yesod-box.github.io/",
    research: "Computational language acquisition; LLM interpretability; multimodal AI systems",
  },
  {
    name: "Fan Yang",
    chineseName: "杨帆",
    role: "PhD Student",
    start: "Starting September 2026",
    image: "assets/members/optimized/yang-fan.webp",
    profile: "https://yvofun.github.io/",
    research: "Computational neurolinguistics; brain dynamics",
  },
  {
    name: "Na Li",
    chineseName: "李娜",
    role: "PhD Student",
    start: "Starting September 2026",
    image: "assets/members/optimized/na-li.webp",
    imagePosition: "30% 56%",
    profile: "https://lnxxx0712.github.io/",
    research: "Neural mechanisms of language understanding; computational neurolinguistics; neural encoding and decoding; language-guided action",
  },
  {
    name: "Qingyi Song",
    chineseName: "宋庆一",
    role: "PhD Student",
    start: "Starting September 2026",
    image: "assets/members/optimized/qingyi-song.webp",
    profile: "https://sqy1225.github.io/",
    research: "Computational neurolinguistics; brain–model alignment; cognitive neuroscience; language cognition modeling",
  },
  {
    name: "Guangting Liu",
    chineseName: "刘冠廷",
    role: "PhD Student",
    start: "Starting September 2026",
    image: "assets/members/optimized/guanting-liu.webp",
    profile: "https://quentin2026.github.io/",
    supervision: {
      name: "Prof. Chaoming Wang",
      url: "https://wangchaoming.com/en/",
    },
    research: "Computational neuroscience; brain simulation; computational neurolinguistics; brain–computer interfaces",
  },
  {
    name: "Jiwen Zhang",
    chineseName: "张霁雯",
    role: "Visiting Student",
    image: "assets/members/optimized/jiwen-zhang.webp",
    imagePosition: "50% 53%",
    profile: "https://wendie0219.github.io/",
    research: "Neural encoding and decoding of language; lexical-semantic representation; AI applications in education",
  },
  {
    name: "Beiqing Huang",
    chineseName: "黄倍清",
    role: "Incoming Research Assistant",
    image: "assets/members/optimized/beiqing-huang.webp",
    profile: "https://huangbeiqing.github.io/",
    research: "Neural mechanisms of natural language; predictive processing; semantic composition; statistical learning in language comprehension",
  },
  {
    name: "Fei Chen",
    chineseName: "陈飞",
    role: "Incoming Research Assistant",
    image: "assets/members/optimized/fei-chen.webp",
    imagePosition: "58% 38%",
    profile: "https://chenfei0611.github.io/",
    research: "Corpus linguistics; computational linguistics; cognitive effects of LLM usage; AI in education",
  },
];

const collaborators = [
  {
    name: "Nan Lin",
    role: "Professor",
    affiliation: "Institute of Psychology, Chinese Academy of Sciences",
    image: "assets/members/collaborators/nan-lin.jpg",
    imagePosition: "35% 50%",
    profile: "http://eyemind.psych.ac.cn/Faculty/linn/enlinn2024.html",
  },
  {
    name: "Liina Pylkkänen",
    role: "Professor",
    affiliation: "New York University",
    image: "assets/members/collaborators/liina-pylkkanen.jpg",
    imagePosition: "50% 38%",
    profile: "https://wp.nyu.edu/neurolinglab/people/liina-pylkkanen/",
  },
  {
    name: "Jixing Li",
    role: "Assistant Professor",
    affiliation: "Department of Linguistics and Translation, City University of Hong Kong",
    image: "assets/members/collaborators/jixing-li.jpg",
    imagePosition: "50% 42%",
    profile: "https://lt.cityu.edu.hk/en/people/academic-staff/li-jixing",
  },
  {
    name: "Nai Ding",
    role: "Professor",
    affiliation: "Zhejiang University",
    image: "assets/members/collaborators/nai-ding.jpg",
    profile: "https://person.zju.edu.cn/person/en/dingnai",
  },
  {
    name: "Chaoming Wang",
    role: "Principal Investigator",
    affiliation: "Guangdong Institute of Intelligence Science and Technology",
    image: "assets/members/collaborators/chaoming-wang.jpg",
    imagePosition: "50% 38%",
    profile: "https://wangchaoming.com/en/",
  },
  {
    name: "Xin Sun",
    role: "Assistant Professor",
    affiliation: "The Hong Kong Polytechnic University (PolyU)",
    image: "assets/members/collaborators/xin-sun.jpg",
    imagePosition: "50% 36%",
    profile: "https://www.polyu.edu.hk/lst/people/academic-staff/sun-xin/",
  },
  {
    name: "Yaran Chen",
    role: "Associate Professor",
    affiliation: "Xi’an Jiaotong-Liverpool University",
    image: "assets/members/collaborators/yaran-chen.jpg",
    imagePosition: "50% 32%",
    profile: "https://scholar.xjtlu.edu.cn/en/persons/YaranChen/",
  },
  {
    name: "Yu-yin Hsu",
    role: "Associate Professor",
    affiliation: "The Hong Kong Polytechnic University (PolyU)",
    image: "assets/members/collaborators/yu-yin-hsu.jpg",
    imagePosition: "50% 34%",
    profile: "https://www.polyu.edu.hk/lst/people/academic-staff/hsu-yu-yin/",
  },
  {
    name: "Xi Yu",
    role: "Ph.D.",
    affiliation: "Beijing Normal University",
    image: "assets/members/collaborators/xi-yu.jpg",
    imagePosition: "50% 24%",
    profile: "https://brain.bnu.edu.cn/English/Faculty/CurrentFaculty/Yzz/83e53e8f21614ea19de70877b01142a3.htm",
  },
  {
    name: "Zheng Lian",
    role: "Associate Professor",
    affiliation: "Tongji University",
    image: "assets/members/collaborators/zheng-lian.jpg",
    imagePosition: "50% 30%",
    profile: "https://zeroqiaoba.github.io/Homepage/",
  },
];

const currentGrid = document.querySelector("#current-grid");

if (currentGrid) {
  currentGrid.innerHTML = members
    .map(
      (member, index) => `
        <article class="person-card reveal" style="transition-delay: ${Math.min(index * 50, 150)}ms">
          ${
            member.image
              ? `<div class="person-portrait">
                  <img src="${member.image}" alt="Portrait of ${member.name} (${member.chineseName})" width="800" height="1000" loading="${index < 3 ? "eager" : "lazy"}" decoding="async" fetchpriority="${index < 3 ? "high" : "low"}"${member.imagePosition ? ` style="object-position: ${member.imagePosition}"` : ""} />
                </div>`
              : `<div class="person-portrait person-portrait-empty" aria-label="Portrait forthcoming"></div>`
          }
          <div class="person-body">
            <div class="person-name">
              <h3>${
                member.profile
                  ? `<a href="${member.profile}" target="_blank" rel="noopener noreferrer">${member.name}</a>`
                  : member.name
              }</h3>
              <p class="person-name-zh">${member.chineseName}</p>
            </div>
            <p class="person-role">${member.role}</p>
            ${member.start ? `<p class="person-start">${member.start}</p>` : ""}
            ${
              member.supervision
                ? `<p class="person-supervision">Co-supervised with <a href="${member.supervision.url}" target="_blank" rel="noopener noreferrer">${member.supervision.name} <span aria-hidden="true">↗</span></a></p>`
                : ""
            }
            <div class="person-research">
              <span>Research interests</span>
              <p>${member.research}</p>
            </div>
            ${
              member.profile
                ? `<a class="person-profile" href="${member.profile}" target="_blank" rel="noopener noreferrer">Personal homepage <span aria-hidden="true">↗</span></a>`
                : `<span class="person-profile person-profile-muted">Homepage forthcoming</span>`
            }
          </div>
        </article>
      `,
    )
    .join("");
}

const collaboratorGrid = document.querySelector("#collaborator-grid");

if (collaboratorGrid) {
  collaboratorGrid.innerHTML = collaborators
    .map(
      (collaborator, index) => `
        <article class="person-card collaborator-card reveal" style="transition-delay: ${Math.min(index * 50, 150)}ms">
          <div class="person-portrait">
            <img src="${collaborator.image}" alt="Portrait of ${collaborator.name}" width="800" height="1000" loading="lazy" decoding="async" fetchpriority="low"${collaborator.imagePosition ? ` style="object-position: ${collaborator.imagePosition}"` : ""} />
          </div>
          <div class="person-body">
            <div class="person-name person-name-single">
              <h3><a href="${collaborator.profile}" target="_blank" rel="noopener noreferrer">${collaborator.name}</a></h3>
            </div>
            <p class="person-role">${collaborator.role}</p>
            <div class="person-affiliation">
              <span>Affiliation</span>
              <p>${collaborator.affiliation}</p>
            </div>
            <a class="person-profile" href="${collaborator.profile}" target="_blank" rel="noopener noreferrer">Personal homepage <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      `,
    )
    .join("");
}

const copyEmailButton = document.querySelector("[data-copy-email]");
let copyEmailResetTimer;

copyEmailButton?.addEventListener("click", async () => {
  const email = copyEmailButton.dataset.copyEmail;
  const status = copyEmailButton.querySelector("[data-copy-label]");
  let copied = false;

  try {
    await navigator.clipboard.writeText(email);
    copied = true;
  } catch {
    const helper = document.createElement("textarea");
    helper.value = email;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.append(helper);
    helper.select();
    copied = document.execCommand("copy");
    helper.remove();
  }

  if (status) status.textContent = copied ? "Copied" : "Try again";
  copyEmailButton.classList.toggle("is-copied", copied);
  window.clearTimeout(copyEmailResetTimer);
  copyEmailResetTimer = window.setTimeout(() => {
    if (status) status.textContent = "Copy";
    copyEmailButton.classList.remove("is-copied");
  }, 1800);
});

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

const closeMenu = () => {
  menuButton?.setAttribute("aria-expanded", "false");
  navigation?.classList.remove("open");
  document.body.classList.remove("menu-open");
};

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  navigation?.classList.toggle("open", !open);
  document.body.classList.toggle("menu-open", !open);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation?.classList.contains("open")) {
    closeMenu();
    menuButton?.focus();
  }
});

navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

const pageMain = document.querySelector("main");
const pageFooter = document.querySelector(".site-footer");

if (pageMain && !pageMain.dataset.navTheme) pageMain.dataset.navTheme = "light";
if (pageFooter && !pageFooter.dataset.navTheme) pageFooter.dataset.navTheme = "dark";

const themedSections = [...document.querySelectorAll("[data-nav-theme]")];
let headerUpdateQueued = false;

const updateHeader = () => {
  if (!header) return;

  header.classList.toggle("scrolled", window.scrollY > 20);

  const sampleY = Math.max(1, header.offsetHeight / 2);
  let theme = "light";

  themedSections.forEach((section) => {
    const bounds = section.getBoundingClientRect();
    if (bounds.top <= sampleY && bounds.bottom > sampleY) {
      theme = section.dataset.navTheme || "light";
    }
  });

  header.dataset.theme = theme;
  headerUpdateQueued = false;
};

const queueHeaderUpdate = () => {
  if (headerUpdateQueued) return;
  headerUpdateQueued = true;
  window.requestAnimationFrame(updateHeader);
};

window.addEventListener("scroll", queueHeaderUpdate, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 1120) closeMenu();
  queueHeaderUpdate();
});
updateHeader();

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const loopVisual = document.querySelector(".loop-visual");

if (loopVisual) {
  const hero = loopVisual.closest(".hero");
  const loopControls = [...loopVisual.querySelectorAll("[data-loop-focus]")];
  let pinnedLoopFocus = null;

  const setRightHover = (isActive) => {
    if (!hero) return;
    if (isActive) hero.dataset.rightHover = "true";
    else delete hero.dataset.rightHover;
  };

  const resetRightInteraction = () => setRightHover(false);

  const showLoopFocus = (focusName) => {
    if (focusName) {
      loopVisual.dataset.active = focusName;
      if (hero) hero.dataset.loopActive = focusName;
    } else {
      delete loopVisual.dataset.active;
      if (hero) delete hero.dataset.loopActive;
    }
  };

  const syncPressedState = () => {
    loopControls.forEach((control) => {
      control.setAttribute("aria-pressed", String(control.dataset.loopFocus === pinnedLoopFocus));
    });
  };

  loopControls.forEach((control) => {
    const focusName = control.dataset.loopFocus;

    control.addEventListener("mouseenter", () => showLoopFocus(focusName));
    control.addEventListener("mouseleave", () => showLoopFocus(pinnedLoopFocus));
    control.addEventListener("focus", () => showLoopFocus(focusName));
    control.addEventListener("blur", () => showLoopFocus(pinnedLoopFocus));
    control.addEventListener("click", () => {
      pinnedLoopFocus = pinnedLoopFocus === focusName ? null : focusName;
      syncPressedState();
      showLoopFocus(pinnedLoopFocus);
    });
  });

  loopVisual.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      pinnedLoopFocus = null;
      syncPressedState();
      showLoopFocus(null);
    }
  });

  window.addEventListener("pointermove", (event) => {
    if (!hero) return;

    const heroBounds = hero.getBoundingClientRect();
    const isStacked = window.innerWidth <= 960;
    const isRightRegion = isStacked
      ? loopVisual.contains(event.target)
      : event.clientX >= heroBounds.left + heroBounds.width / 2;

    setRightHover(isRightRegion);

  });

  window.addEventListener("pointerout", (event) => {
    if (!event.relatedTarget) resetRightInteraction();
  });
}

const revealItems = document.querySelectorAll(".reveal");

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -30px" },
  );
  revealItems.forEach((item) => observer.observe(item));
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
