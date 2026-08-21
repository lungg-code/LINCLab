const members = [
  {
    name: "Shaonan Wang",
    chineseName: "王少楠",
    role: "Assistant Professor",
    image: "assets/members/shaonan-wang.jpg",
    profile: "https://wangshaonan.github.io/",
    research: "Forthcoming",
  },
  {
    name: "Chuhan Lang",
    chineseName: "郎楚涵",
    role: "PhD Student",
    start: "Starting September 2026",
    image: "assets/members/chuhan-lang.jpg",
    imagePosition: "50% 64%",
    profile: null,
    research: "Forthcoming",
  },
  {
    name: "Fan Yang",
    chineseName: "杨帆",
    role: "PhD Student",
    start: "Starting September 2026",
    image: "assets/members/yang-fan.png",
    profile: "https://yvofun.github.io/",
    research: "Forthcoming",
  },
  {
    name: "Na Li",
    chineseName: "李娜",
    role: "PhD Student",
    start: "Starting September 2026",
    image: "assets/members/na-li.jpg",
    imagePosition: "30% 56%",
    profile: null,
    research: "Forthcoming",
  },
  {
    name: "Qingyi Song",
    chineseName: "宋庆一",
    role: "PhD Student",
    start: "Starting September 2026",
    image: "assets/members/qingyi-song.jpg",
    profile: "https://sqy1225.github.io/",
    research: "Forthcoming",
  },
  {
    name: "Guangting Liu",
    chineseName: "刘冠廷",
    role: "PhD Student",
    start: "Starting September 2026",
    image: "assets/members/guanting-liu.png",
    profile: "https://quentin2026.github.io/",
    supervision: {
      name: "Prof. Chaoming Wang",
      url: "https://wangchaoming.com/en/",
    },
    research: "Forthcoming",
  },
  {
    name: "Jiwen Zhang",
    chineseName: "张霁雯",
    role: "Visiting Student",
    image: "assets/members/jiwen-zhang.jpg?v=2",
    imagePosition: "50% 53%",
    profile: "https://wendie0219.github.io/",
    research: "Forthcoming",
  },
  {
    name: "Beiqing Huang",
    chineseName: "黄倍清",
    role: "Incoming Research Assistant",
    image: "assets/members/beiqing-huang.jpg",
    profile: null,
    research: "Forthcoming",
  },
  {
    name: "Fei Chen",
    chineseName: "陈飞",
    role: "Incoming Research Assistant",
    image: "assets/members/fei-chen.jpg",
    imagePosition: "58% 38%",
    profile: null,
    research: "Forthcoming",
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
                  <img src="${member.image}" alt="Portrait of ${member.name} (${member.chineseName})" loading="lazy" decoding="async"${member.imagePosition ? ` style="object-position: ${member.imagePosition}"` : ""} />
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
