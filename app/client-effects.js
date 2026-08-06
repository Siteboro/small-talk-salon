"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
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

    const toggleMenu = () => {
      if (!menuToggle || !mobileNav) return;
      const open = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      mobileNav.classList.toggle("is-open", open);
      body.classList.toggle("menu-open", open);
    };

    menuToggle?.addEventListener("click", toggleMenu);
    const mobileLinks = mobileNav ? Array.from(mobileNav.querySelectorAll("a")) : [];
    mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

    const reveals = Array.from(document.querySelectorAll(".reveal"));
    let observer;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      reveals.forEach((element) => element.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries, currentObserver) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.13, rootMargin: "0px 0px -6% 0px" },
      );
      reveals.forEach((element, index) => {
        element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
        observer.observe(element);
      });
    }

    let ticking = false;
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      root.style.setProperty("--scroll-progress", `${Math.min((scrollTop / maxScroll) * 100, 100)}%`);
      header?.classList.toggle("is-scrolled", scrollTop > 18);
      if (!reducedMotion) {
        root.style.setProperty("--hero-shift", `${Math.min(scrollTop * 0.055, 32)}px`);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateScroll);
    };

    const onResize = () => {
      if (window.innerWidth > 1050) closeMenu();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    updateScroll();

    return () => {
      menuToggle?.removeEventListener("click", toggleMenu);
      mobileLinks.forEach((link) => link.removeEventListener("click", closeMenu));
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      observer?.disconnect();
      body.classList.remove("menu-open", "reveal-ready");
    };
  }, []);

  return null;
}
