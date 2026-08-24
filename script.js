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

// Keep project photographs on the page in an accessible modal gallery.
const galleryLinks = [...document.querySelectorAll('[data-lightbox]')];
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox?.querySelector('.lightbox-media img');
const lightboxCategory = lightbox?.querySelector('figcaption div span');
const lightboxTitle = lightbox?.querySelector('figcaption strong');
const lightboxNumber = lightbox?.querySelector('figcaption small b');
const lightboxClose = lightbox?.querySelector('.lightbox-close');
const lightboxPrevious = lightbox?.querySelector('.lightbox-prev');
const lightboxNext = lightbox?.querySelector('.lightbox-next');

let activeImage = 0;
let galleryReturnFocus = null;

const showGalleryImage = (index) => {
  activeImage = (index + galleryLinks.length) % galleryLinks.length;
  const link = galleryLinks[activeImage];
  const image = link.querySelector('img');
  const figure = link.closest('.gallery-item');

  lightboxImage.src = link.getAttribute('href');
  lightboxImage.alt = image?.alt || '';
  lightboxCategory.textContent = figure?.querySelector('figcaption span')?.textContent || 'Realizácia';
  lightboxTitle.textContent = figure?.querySelector('figcaption strong')?.textContent || 'Montáž svietidla';
  lightboxNumber.textContent = String(activeImage + 1);
};

if (lightbox && typeof lightbox.showModal === 'function' && galleryLinks.length) {
  galleryLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      galleryReturnFocus = link;
      showGalleryImage(index);
      lightbox.showModal();
      document.body.classList.add('modal-open');
    });
  });

  lightboxClose.addEventListener('click', () => lightbox.close());
  lightboxPrevious.addEventListener('click', () => showGalleryImage(activeImage - 1));
  lightboxNext.addEventListener('click', () => showGalleryImage(activeImage + 1));

  lightbox.addEventListener('click', (event) => {
    if (event.target !== lightbox) return;
    const bounds = lightbox.getBoundingClientRect();
    const clickedOutside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;

    if (clickedOutside) lightbox.close();
  });

  lightbox.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    galleryReturnFocus?.focus();
  });

  document.addEventListener('keydown', (event) => {
    if (!lightbox.open) return;
    if (event.key === 'ArrowLeft') showGalleryImage(activeImage - 1);
    if (event.key === 'ArrowRight') showGalleryImage(activeImage + 1);
  });
}

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
