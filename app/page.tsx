const services = [
  {
    number: '01',
    title: 'Montáž svietidiel',
    description: 'Interiérové, exteriérové, dizajnové aj luxusné svietidlá — od jedného kusu po rozsiahlu zostavu.',
    items: ['Stropné, nástenné a závesné svietidlá', 'Lustre a viacbodové kompozície', 'LED svietidlá všetkých kategórií'],
  },
  {
    number: '02',
    title: 'LED & smart riešenia',
    description: 'Úsporné technológie, čisté línie a svetlo, ktoré sa prispôsobí priestoru aj vašim návykom.',
    items: ['Montáž a zapájanie LED pásov', 'Prestavba pôvodných svietidiel na LED', 'Stmievanie a diaľkové ovládanie'],
  },
  {
    number: '03',
    title: 'Servis a elektro práce',
    description: 'Diagnostika, opravy a doplnkové práce potrebné pre bezpečnú a spoľahlivú prevádzku.',
    items: ['Servis exkluzívnych svietidiel', 'Zásuvky, vypínače, krabice a ističe', 'Akumulátory núdzových svietidiel'],
  },
  {
    number: '04',
    title: 'Návrh a kompletizácia',
    description: 'Pomôžeme od prvého nápadu a výberu svietidla až po posledné zapojenie na mieste.',
    items: ['Návrh interiérového a exteriérového svetla', 'Poradenstvo, nákup a dovoz', 'Montáž digestorov, TV a závesných spotrebičov'],
  },
];

const projects = [
  { src: '/media/project-03.jpg', alt: 'Viacramenné závesné svietidlo s drobnými sklenenými guľami', title: 'Svetelná kompozícia', tag: 'Dizajnové svietidlo', className: 'gallery-tall' },
  { src: '/media/project-01.jpg', alt: 'Čierne lineárne svietidlo nad kuchynským ostrovčekom', title: 'Čistá línia nad stolom', tag: 'Interiér', className: 'gallery-wide' },
  { src: '/media/project-05.jpg', alt: 'Biely zdobený sklenený luster v obývacej izbe', title: 'Jemná klasika', tag: 'Luster', className: '' },
  { src: '/media/project-08.jpg', alt: 'Veľká kaskáda desiatok závesných svetelných gulí', title: 'Svetlo vo veľkom meradle', tag: 'Komplexná montáž', className: 'gallery-wide' },
  { src: '/media/project-02.jpg', alt: 'Minimalistické kruhové LED svietidlo nad stolom', title: 'Minimalistický kruh', tag: 'LED osvetlenie', className: '' },
  { src: '/media/project-06.jpg', alt: 'Bohato zdobený krištáľový luster so zapnutými žiarovkami', title: 'Krištáľ bez kompromisov', tag: 'Luxusné svietidlo', className: 'gallery-tall' },
];

export default function Home() {
  return (
    <main>
      <section className="hero hero-3d" id="domov">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-ambient" aria-hidden="true" />

        <header className="site-header shell">
          <a className="brand" href="#domov" aria-label="Flash of Light – domov">
            <span className="brand-mark"><span /></span>
            <span className="brand-name">FLASH <b>OF LIGHT</b></span>
          </a>
          <nav className="desktop-nav" aria-label="Hlavná navigácia">
            <a href="#sluzby">Služby</a>
            <a href="#realizacie">Realizácie</a>
            <a href="#o-nas">O nás</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <div className="header-end">
            <a className="header-call" href="tel:+421902842055"><span>Volajte</span>+421 902 842 055</a>
            <details className="mobile-menu">
              <summary aria-label="Otvoriť menu"><i /><i /></summary>
              <nav aria-label="Mobilná navigácia">
                <a href="#sluzby">Služby</a>
                <a href="#realizacie">Realizácie</a>
                <a href="#o-nas">O nás</a>
                <a href="#kontakt">Kontakt</a>
              </nav>
            </details>
          </div>
        </header>

        <div className="hero-content shell">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Profesionálna montáž svietidiel</div>
            <h1>Svetlo.<br />Namontované <em>s presnosťou.</em></h1>
            <p>Montáž, servis a návrh osvetlenia pre domácnosti, firmy, architektov aj developerov.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#kontakt">Nezáväzná konzultácia <span>↗</span></a>
              <a className="button button-ghost" href="#realizacie">Pozrieť realizácie</a>
            </div>
          </div>

          <div className="lamp-stage" aria-hidden="true">
            <div className="scene-chip scene-chip-top"><i /> 14+ rokov praxe</div>
            <div className="scene-chip scene-chip-bottom"><i /> Bratislava</div>
            <div className="lamp-beam" />
            <div className="lamp-assembly">
              <span className="lamp-canopy" />
              <i className="lamp-wire wire-left" />
              <i className="lamp-wire wire-right" />
              <i className="lamp-wire wire-center" />
              <span className="lamp-ring ring-one" />
              <span className="lamp-ring ring-two" />
              <span className="lamp-ring ring-three" />
              <span className="lamp-orb"><i /></span>
            </div>
            <span className="lamp-shadow" />
          </div>
        </div>

        <div className="hero-footer shell">
          <span className="scroll-cue"><i /> Objavte viac</span>
          <span>Montáž · servis · poradenstvo</span>
        </div>
      </section>

      <section className="trust-strip" aria-label="Naše zameranie">
        <div className="ticker">
          <span>Interiérové svietidlá</span><i />
          <span>Exteriérové osvetlenie</span><i />
          <span>LED technológie</span><i />
          <span>Dizajnové lustre</span><i />
          <span>Servis a opravy</span><i />
          <span aria-hidden="true">Interiérové svietidlá</span><i aria-hidden="true" />
          <span aria-hidden="true">Exteriérové osvetlenie</span><i aria-hidden="true" />
          <span aria-hidden="true">LED technológie</span><i aria-hidden="true" />
          <span aria-hidden="true">Dizajnové lustre</span><i aria-hidden="true" />
        </div>
      </section>

      <section className="services section" id="sluzby">
        <div className="shell">
          <div className="section-heading reveal">
            <p className="section-label">01 — Služby</p>
            <h2>Všetko pre vaše<br /><em>nové svetlo.</em></h2>
            <p className="section-intro">Od technického návrhu a výberu až po precíznu montáž, zapojenie a následný servis.</p>
          </div>
          <div className="service-grid service-grid-simple">
            {services.map((service) => (
              <article className="service-card service-card-3d reveal" key={service.number}>
                <div className="service-top"><span>{service.number}</span><i /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery section" id="realizacie">
        <div className="shell">
          <div className="section-heading gallery-heading reveal">
            <div><p className="section-label">02 — Realizácie</p><h2>Výsledok, ktorý<br /><em>mení atmosféru.</em></h2></div>
            <p className="section-intro">Výber z reálnych montáží — od minimalistických LED línií až po rozmerné krištáľové a závesné zostavy.</p>
          </div>
          <div className="gallery-grid">
            {projects.map((project, index) => (
              <figure className={`gallery-item reveal ${project.className}`} key={project.src}>
                <a href={project.src} target="_blank" aria-label={`Zobraziť fotografiu: ${project.title}`}>
                  <img src={project.src} alt={project.alt} width="1080" height="1440" loading={index < 2 ? 'eager' : 'lazy'} />
                  <span className="gallery-open">↗</span>
                </a>
                <figcaption><span>{project.tag}</span><strong>{project.title}</strong></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="about-simple section" id="o-nas">
        <div className="shell about-grid">
          <div className="about-media reveal">
            <video autoPlay muted loop playsInline poster="/media/project-03.jpg" aria-label="Ukážka profesionálnej montáže svietidla">
              <source src="/media/installation-loop.mp4" type="video/mp4" />
            </video>
            <div className="about-media-label"><span>Proces</span><strong>Precízna montáž</strong></div>
          </div>
          <div className="about-copy reveal">
            <p className="section-label light">03 — O nás</p>
            <h2>Skúsenosť,<br /><em>ktorú vidieť.</em></h2>
            <p className="about-lead">Viac ako 14 rokov montujeme a servisujeme svietidlá všetkých kategórií.</p>
            <p>Máme skúsenosti s domácnosťami, firmami, architektmi aj developermi. Poradíme pri výbere, vyriešime technické detaily a svietidlo bezpečne uvedieme do prevádzky.</p>
            <div className="about-facts">
              <div><strong>14+</strong><span>rokov skúseností</span></div>
              <div><strong>100s</strong><span>spokojných klientov</span></div>
              <div><strong>1×</strong><span>kontakt od návrhu po montáž</span></div>
            </div>
            <a className="text-link text-link-light" href="https://www.daibau.sk/clanok/383/osvetlenie_interieru_ako_zladit_funkcnost_a_dizajn#flash-of-light-sro" target="_blank" rel="noreferrer">Náš článok o osvetlení <span>↗</span></a>
          </div>
        </div>

        <div className="shell compact-process reveal">
          <div><span>01</span><strong>Ozvete sa</strong><p>Fotografia alebo stručný popis projektu.</p></div>
          <div><span>02</span><strong>Dohodneme riešenie</strong><p>Technický postup, rozsah a termín.</p></div>
          <div><span>03</span><strong>Namontujeme</strong><p>Čisto, bezpečne a s kontrolou výsledku.</p></div>
        </div>

        <div className="shell partner-bar reveal">
          <small>Skúsenosti zo spoluprác</small>
          <span>Slnečnice</span><span>Maskaľ</span><span>Compass Architekti</span><span>Casca</span><span>Quazar</span><span>Sikard</span>
        </div>
      </section>

      <section className="contact contact-simple" id="kontakt">
        <div className="contact-glow" />
        <div className="shell contact-inner">
          <div className="contact-heading reveal">
            <p className="section-label light">04 — Kontakt</p>
            <h2>Máte svietidlo?<br /><em>My máme riešenie.</em></h2>
            <p>Pošlite nám fotografiu alebo krátky popis. Ozveme sa a dohodneme ďalší postup.</p>
          </div>
          <div className="contact-actions reveal">
            <a href="tel:+421902842055" className="contact-card contact-phone"><small>Zavolajte</small><strong>+421 902 842 055</strong><span>↗</span></a>
            <a href="mailto:info@montaze-svietidiel.eu?subject=Dopyt%20na%20montáž%20svietidla" className="contact-card"><small>Napíšte nám</small><strong>info@montaze-svietidiel.eu</strong><span>↗</span></a>
          </div>
          <div className="contact-details reveal">
            <div><small>Firma</small><strong>FLASH of LIGHT, s. r. o.</strong><span>IČO 48211222 · IČ DPH SK2120092535</span></div>
            <div><small>Adresa</small><a href="https://www.google.com/maps/search/?api=1&query=Kr%C3%ADkov%C3%A1+4%2C+821+07+Bratislava" target="_blank" rel="noreferrer">Kríková 4<br />821 07 Bratislava ↗</a></div>
            <div><small>Kontakt</small><strong>Marek Letko</strong><span>konateľ / svetelný technik</span><a href="mailto:marek.letko@gmail.com">marek.letko@gmail.com</a></div>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <a className="brand brand-dark" href="#domov" aria-label="Flash of Light – späť hore"><span className="brand-mark"><span /></span><span className="brand-name">FLASH <b>OF LIGHT</b></span></a>
          <p>Profesionálna montáž a servis svietidiel.</p>
          <div className="footer-links"><a href="https://www.facebook.com/FoLmontazesvietidiel/" target="_blank" rel="noreferrer">Facebook ↗</a><a href="mailto:info@montaze-svietidiel.eu">E-mail</a><a href="#domov">Hore ↑</a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 FLASH of LIGHT, s. r. o.</span><span>DIČ 2120092535</span></div>
      </footer>

      <a className="floating-call" href="tel:+421902842055" aria-label="Zavolať na +421 902 842 055"><span>☎</span> Zavolať</a>
    </main>
  );
}
