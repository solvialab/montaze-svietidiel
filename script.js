document.documentElement.classList.remove('no-js');

// A short light-switch sequence on a direct first visit. Internal navigation,
// reloads and reduced-motion visits skip it without writing browser storage.
const pageLoader = document.querySelector('.site-loader');
const skipPageLoader = document.documentElement.classList.contains('skip-loader');

if (!pageLoader || skipPageLoader) {
  document.body.classList.remove('is-loading');
  pageLoader?.remove();
} else {
  const loaderStartedAt = performance.now();
  let loaderDismissed = false;

  const dismissPageLoader = () => {
    if (loaderDismissed) return;
    loaderDismissed = true;

    const remainingTime = Math.max(0, 1550 - (performance.now() - loaderStartedAt));
    window.setTimeout(() => {
      pageLoader.classList.add('is-leaving');
      pageLoader.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('is-loading');
      window.setTimeout(() => pageLoader.remove(), 650);
    }, remainingTime);
  };

  if (document.readyState === 'complete') {
    dismissPageLoader();
  } else {
    window.addEventListener('load', dismissPageLoader, { once: true });
    window.setTimeout(dismissPageLoader, 3500);
  }
}

const isEnglish = document.documentElement.lang.toLowerCase().startsWith('en');
const interfaceCopy = isEnglish
  ? {
      galleryCategory: 'Project',
      galleryTitle: 'Light fitting installation',
      generalEnquiry: 'General enquiry',
      notProvided: 'Not provided',
      agreed: 'To be agreed',
      noMessage: 'No additional message',
      subject: (category) => `Website enquiry — ${category}`,
      emailBody: ({ category, name, phone, email, location, scope, term, message }) => [
        'Hello,',
        '',
        `I am interested in: ${category}`,
        '',
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Installation location: ${location}`,
        `Project scope: ${scope}`,
        `Preferred timing: ${term}`,
        '',
        'Enquiry details:',
        message,
        '',
        'I can attach photos to this email.',
      ].join('\n'),
      openingEmail: 'Your enquiry is ready. Opening your email app…',
      emailFallback: 'If your email app did not open, please send your enquiry directly to info@montaze-svietidiel.eu.',
    }
  : {
      galleryCategory: 'Realizácia',
      galleryTitle: 'Montáž svietidla',
      generalEnquiry: 'Všeobecný dopyt',
      notProvided: 'Neuvedené',
      agreed: 'Dohodou',
      noMessage: 'Bez doplňujúcej správy',
      subject: (category) => `Dopyt z webu — ${category}`,
      emailBody: ({ category, name, phone, email, location, scope, term, message }) => [
        'Dobrý deň,',
        '',
        `mám záujem o službu: ${category}`,
        '',
        `Meno: ${name}`,
        `Telefón: ${phone}`,
        `E-mail: ${email}`,
        `Lokalita montáže: ${location}`,
        `Rozsah zákazky: ${scope}`,
        `Preferovaný termín: ${term}`,
        '',
        'Popis dopytu:',
        message,
        '',
        'Fotografie môžem priložiť do tohto e-mailu.',
      ].join('\n'),
      openingEmail: 'Dopyt je pripravený. Otváram váš e-mailový program…',
      emailFallback: 'Ak sa e-mail neotvoril, pošlite dopyt priamo na info@montaze-svietidiel.eu.',
    };

// Compact sticky navigation after the visitor leaves the top of the page.
const siteHeader = document.querySelector('.site-header');
const keepHeaderSolid = document.body.classList.contains('legal-page');
const updateStickyHeader = () => siteHeader?.classList.toggle('is-scrolled', keepHeaderSolid || window.scrollY > 24);
updateStickyHeader();
window.addEventListener('scroll', updateStickyHeader, { passive: true });

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

// Visitors can pause the two continuously moving content elements.
const updateMotionButton = (button, isPaused) => {
  if (!button) return;
  button.setAttribute('aria-pressed', String(isPaused));
  button.setAttribute('aria-label', isPaused ? button.dataset.playLabel : button.dataset.pauseLabel);
  button.querySelector('span').textContent = isPaused ? '▶' : 'Ⅱ';
};

const trustStrip = document.querySelector('.trust-strip');
const tickerToggle = trustStrip?.querySelector('.ticker-toggle');

tickerToggle?.addEventListener('click', () => {
  const isPaused = trustStrip.classList.toggle('is-paused');
  updateMotionButton(tickerToggle, isPaused);
});

const installationVideo = document.querySelector('.about-media video');
const mediaToggle = document.querySelector('.media-toggle');

const syncMediaToggle = () => updateMotionButton(mediaToggle, installationVideo?.paused ?? true);

mediaToggle?.addEventListener('click', () => {
  if (!installationVideo) return;

  if (installationVideo.paused) {
    const playRequest = installationVideo.play();
    playRequest?.catch(syncMediaToggle);
  } else {
    installationVideo.pause();
  }
});

installationVideo?.addEventListener('play', syncMediaToggle);
installationVideo?.addEventListener('pause', syncMediaToggle);
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) installationVideo?.pause();
syncMediaToggle();

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
  lightboxCategory.textContent = figure?.querySelector('figcaption span')?.textContent || interfaceCopy.galleryCategory;
  lightboxTitle.textContent = figure?.querySelector('figcaption strong')?.textContent || interfaceCopy.galleryTitle;
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

// The site stays fully static: the form prepares a structured e-mail locally.
const inquiryForm = document.querySelector('#contact-form');
const formStatus = inquiryForm?.querySelector('.form-status');

inquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(inquiryForm);
  const category = String(formData.get('category') || interfaceCopy.generalEnquiry);
  const name = String(formData.get('name') || interfaceCopy.notProvided);
  const phone = String(formData.get('phone') || interfaceCopy.notProvided);
  const email = String(formData.get('email') || interfaceCopy.notProvided);
  const location = String(formData.get('location') || interfaceCopy.notProvided);
  const scope = String(formData.get('scope') || interfaceCopy.notProvided);
  const term = String(formData.get('term') || interfaceCopy.agreed);
  const message = String(formData.get('message') || interfaceCopy.noMessage);

  const subject = interfaceCopy.subject(category);
  const body = interfaceCopy.emailBody({ category, name, phone, email, location, scope, term, message });

  formStatus.textContent = interfaceCopy.openingEmail;
  window.location.href = `mailto:info@montaze-svietidiel.eu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.setTimeout(() => {
    formStatus.textContent = interfaceCopy.emailFallback;
  }, 1400);
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
