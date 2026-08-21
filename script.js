const members = [
  {
    name: "王少楠",
    role: "Assistant Professor",
    image: "assets/members/shaonan-wang.jpg",
    profile: "https://wangshaonan.github.io/",
    research: "Research interests forthcoming",
  },
  {
    name: "张霁雯",
    role: "Student",
    image: "assets/members/jiwen-zhang.jpg",
    profile: "https://wendie0219.github.io/",
    research: "Research interests forthcoming",
  },
  {
    name: "Yang Fan",
    role: "Student",
    image: "assets/members/yang-fan.png",
    profile: "https://yvofun.github.io/",
    research: "Research interests forthcoming",
  },
  {
    name: "江城子",
    role: "Student",
    image: "assets/members/chengzi-jiang.jpg",
    profile: null,
    research: "Research interests forthcoming",
  },
  {
    name: "宽以待己",
    role: "Student",
    image: "assets/members/kuan-yi-daiji.jpg",
    profile: null,
    research: "Research interests forthcoming",
  },
  {
    name: "Song Qingyi",
    role: "Student",
    image: "assets/members/qingyi-song.jpg",
    profile: "https://sqy1225.github.io/",
    research: "Research interests forthcoming",
  },
  {
    name: "刘冠廷",
    role: "Student",
    image: "assets/members/guanting-liu.png",
    profile: "https://quentin2026.github.io/",
    research: "Research interests forthcoming",
  },
];

const currentGrid = document.querySelector("#current-grid");

if (currentGrid) {
  currentGrid.innerHTML = members
    .map(
      (member, index) => `
        <article class="person-card reveal" style="transition-delay: ${Math.min(index * 50, 150)}ms">
          <div class="person-portrait">
            <img src="${member.image}" alt="Portrait of ${member.name}" loading="lazy" decoding="async" />
          </div>
          <div class="person-body">
            <h3>${
              member.profile
                ? `<a href="${member.profile}" target="_blank" rel="noopener noreferrer">${member.name}</a>`
                : member.name
            }</h3>
            <p class="person-role">${member.role}</p>
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
