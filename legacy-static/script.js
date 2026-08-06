const root = document.documentElement;
const body = document.body;
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

body.classList.add("reveal-ready");

const closeMenu = () => {
  if (!menuToggle || !mobileNav) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  mobileNav.classList.remove("is-open");
  body.classList.remove("menu-open");
};

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    menuToggle.setAttribute("aria-label", willOpen ? "Close navigation" : "Open navigation");
    mobileNav.classList.toggle("is-open", willOpen);
    body.classList.toggle("menu-open", willOpen);
  });

  mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
}

const reveals = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  reveals.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.13, rootMargin: "0px 0px -6% 0px" }
  );

  reveals.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    revealObserver.observe(element);
  });
}

let ticking = false;

const updateScrollEffects = () => {
  const scrollTop = window.scrollY;
  const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  const progress = Math.min((scrollTop / maxScroll) * 100, 100);

  root.style.setProperty("--scroll-progress", `${progress}%`);
  header?.classList.toggle("is-scrolled", scrollTop > 18);

  if (!reducedMotion) {
    const heroShift = Math.min(scrollTop * 0.055, 32);
    root.style.setProperty("--hero-shift", `${heroShift}px`);
  }

  ticking = false;
};

window.addEventListener(
  "scroll",
  () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateScrollEffects);
  },
  { passive: true }
);

window.addEventListener("resize", () => {
  if (window.innerWidth > 1050) closeMenu();
});

document.getElementById("year").textContent = new Date().getFullYear();
updateScrollEffects();
