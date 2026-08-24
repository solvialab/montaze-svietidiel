document.documentElement.classList.remove('no-js');

// Reveal sections as they enter the viewport.
const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

// Close the mobile menu after choosing a section.
const mobileMenu = document.querySelector('.mobile-menu');
mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => mobileMenu.removeAttribute('open'));
});

// Lightweight 3D parallax. The page remains fully usable without JavaScript.
const hero = document.querySelector('.hero');
const lampStage = document.querySelector('.lamp-stage');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (hero && lampStage && !reduceMotion.matches) {
  hero.addEventListener('pointermove', (event) => {
    const bounds = hero.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    lampStage.style.setProperty('--pointer-x', `${x * 7}deg`);
    lampStage.style.setProperty('--pointer-y', `${y * -5}deg`);
  });

  hero.addEventListener('pointerleave', () => {
    lampStage.style.setProperty('--pointer-x', '0deg');
    lampStage.style.setProperty('--pointer-y', '0deg');
  });
}
