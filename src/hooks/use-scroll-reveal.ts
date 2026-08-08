import { useEffect } from "react";

/** Recreates the original IntersectionObserver scroll-reveal behaviour. */
export function useScrollReveal() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            revealObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(".anim, .gallery-item")
      .forEach((el) => revealObserver.observe(el));

    const trustObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            trustObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    const trustBar = document.querySelector(".trust-bar");
    if (trustBar) trustObserver.observe(trustBar);

    const animateCount = (el: HTMLElement, target: number, duration = 1200) => {
      const start = performance.now();
      const update = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        const val = target * ease;
        el.textContent = String(target >= 10 ? Math.round(val) : val.toFixed(0));
        if (p < 1) requestAnimationFrame(update);
        else el.textContent = el.dataset['final'] ?? "";
      };
      requestAnimationFrame(update);
    };

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("counted");
          const numEl = e.target.querySelector<HTMLElement>(".stat-num");
          if (numEl) {
            const final = numEl.dataset['final'] ?? "";
            animateCount(numEl, parseFloat(final.replace(/[^0-9.]/g, "")));
          }
          statsObserver.unobserve(e.target);
        });
      },
      { threshold: 0.6 },
    );
    document.querySelectorAll<HTMLElement>(".stat-item").forEach((item) => {
      const numEl = item.querySelector<HTMLElement>(".stat-num");
      if (numEl) {
        numEl.dataset['final'] = numEl.textContent ?? "";
        statsObserver.observe(item);
      }
    });

    const onScroll = () => {
      const nav = document.getElementById("main-nav");
      nav?.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      revealObserver.disconnect();
      trustObserver.disconnect();
      statsObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}
