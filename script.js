const members = [
  {
    name: "王少楠",
    role: "Assistant Professor",
    group: "faculty",
    image: "assets/members/shaonan-wang.jpg",
    profile: "https://wangshaonan.github.io/",
  },
  {
    name: "张霁雯",
    role: "Student",
    group: "student",
    image: "assets/members/jiwen-zhang.jpg",
    profile: "https://wendie0219.github.io/",
  },
  {
    name: "Yang Fan",
    role: "Student",
    group: "student",
    image: "assets/members/yang-fan.png",
    profile: "https://yvofun.github.io/",
  },
  {
    name: "江城子",
    role: "Student",
    group: "student",
    image: "assets/members/chengzi-jiang.jpg",
    profile: null,
  },
  {
    name: "宽以待己",
    role: "Student",
    group: "student",
    image: "assets/members/kuan-yi-daiji.jpg",
    profile: null,
  },
  {
    name: "Song Qingyi",
    role: "Student",
    group: "student",
    image: "assets/members/qingyi-song.jpg",
    profile: "https://sqy1225.github.io/",
  },
];

const facultyGrid = document.querySelector("#faculty-grid");
const studentGrid = document.querySelector("#student-grid");

const renderMembers = (group, container) => {
  if (!container) return;

  container.innerHTML = members
    .filter((member) => member.group === group)
    .map(
      (member, index) => `
        <article class="member-card reveal" style="transition-delay: ${Math.min(index * 60, 180)}ms">
          <div class="member-image">
            <img
              src="${member.image}"
              alt="Portrait of ${member.name}"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="member-info">
            <div>
              <h3>${
                member.profile
                  ? `<a href="${member.profile}" target="_blank" rel="noopener noreferrer">${member.name}</a>`
                  : member.name
              }</h3>
              <p>${member.role}</p>
            </div>
            ${
              member.profile
                ? `<a class="profile-link" href="${member.profile}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${member.name}'s personal homepage">↗</a>`
                : `<span class="profile-status">Profile<br />forthcoming</span>`
            }
          </div>
        </article>
      `,
    )
    .join("");
};

renderMembers("faculty", facultyGrid);
renderMembers("student", studentGrid);

const updateGroupCount = (group, target) => {
  const count = document.querySelector(target);
  if (count) {
    count.textContent = String(members.filter((member) => member.group === group).length).padStart(2, "0");
  }
};

updateGroupCount("faculty", "#faculty-count");
updateGroupCount("student", "#student-count");

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

window.addEventListener(
  "scroll",
  () => header?.classList.toggle("scrolled", window.scrollY > 24),
  { passive: true },
);

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
    { threshold: 0.1, rootMargin: "0px 0px -40px" },
  );
  revealItems.forEach((item) => observer.observe(item));
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
