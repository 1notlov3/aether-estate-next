import InteractiveEffects from '@/components/InteractiveEffects';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const withBasePath = (path) => `${basePath}${path}`;

const listings = [
  {
    title: 'Orbital Penthouse',
    subtitle: 'Панорама 270° · smart glass · private lounge',
    city: 'Москва-Сити',
    price: '41 млн ₽',
    image: withBasePath('/assets/listing-loft.svg'),
    alt: 'Orbital Penthouse',
  },
  {
    title: 'Aether Villa',
    subtitle: '220 м² · infinity pool · клубный посёлок',
    city: 'Новая Рига',
    price: '67 млн ₽',
    image: withBasePath('/assets/listing-villa.svg'),
    alt: 'Aether Villa',
  },
  {
    title: 'Neon Coast Residence',
    subtitle: '145 м² · первая линия · private SPA',
    city: 'Сочи',
    price: '36.8 млн ₽',
    image: withBasePath('/assets/listing-ocean.svg'),
    alt: 'Neon Coast Residence',
  },
];

const scenes = [
  {
    title: 'Сцена 01 — Establishing Shot',
    text: 'Aerial shot of a futuristic luxury skyline at blue hour, cinematic, smooth drone movement, premium real estate advertisement style.',
  },
  {
    title: 'Сцена 02 — Interior Reveal',
    text: 'Ultra modern penthouse interior, floor-to-ceiling windows, sun rays, elegant camera dolly movement, glossy surfaces.',
  },
  {
    title: 'Сцена 03 — Lifestyle Moment',
    text: 'Rooftop infinity pool, subtle human silhouettes, warm sunset, slow motion details, high-end cinematic look.',
  },
  {
    title: 'Сцена 04 — Final CTA',
    text: 'Night city lights, logo reveal, text overlay “Own The Future”, dramatic depth of field, premium ad ending.',
  },
];

export default function HomePage() {
  return (
    <>
      <InteractiveEffects />

      <header className="topbar container" data-scroll-speed="0.08">
        <a href="#" className="logo">
          Aether <span>District</span>
        </a>
        <nav>
          <a href="#showcase">Каталог</a>
          <a href="#video">AI Video</a>
          <a href="#contact">Контакты</a>
        </nav>
        <button className="btn btn-outline magnetic">Собрать подборку</button>
      </header>

      <main>
        <section className="hero container" id="hero">
          <div className="hero-copy" data-scroll-speed="0.18">
            <p className="eyebrow">FUTURE REAL ESTATE ENGINE</p>
            <h1>
              Не просто
              <span> недвижимость,</span>
              <em> а визуальный статус</em>
            </h1>
            <p className="hero-lead">
              Делаем продажу объектов как fashion-кампанию: необычный дизайн,
              AI-визуалы, motion-подача, digital-воронка под лиды.
            </p>

            <div className="hero-actions">
              <button className="btn btn-solid magnetic">Открыть каталог</button>
              <button className="btn btn-ghost magnetic">Запросить стратегию</button>
            </div>

            <div className="metrics">
              <div>
                <strong>+38%</strong>
                <span>рост конверсии на лендинге</span>
              </div>
              <div>
                <strong>12 дней</strong>
                <span>от концепта до запуска</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>онлайн-витрина объектов</span>
              </div>
            </div>
          </div>

          <div className="hero-scene" aria-hidden="true">
            <div className="scene-layer scene-glow" data-depth="0.06" />
            <div className="scene-layer scene-grid" data-depth="0.14" />
            <div className="scene-layer scene-orbit" data-depth="0.22" />
            <div className="scene-layer scene-city" data-depth="0.3">
              <img
                src={withBasePath('/assets/hero-city.svg')}
                alt=""
                className="scene-city-image"
                aria-hidden="true"
              />
            </div>
            <div className="scene-layer scene-card" data-depth="0.42">
              <p>Signature Object</p>
              <h3>Orbital Penthouse</h3>
              <span>41 млн ₽</span>
            </div>
          </div>
        </section>

        <section className="ticker-wrap" aria-hidden="true">
          <div className="ticker">
            <span>AI STAGING</span>
            <span>3D PARALLAX</span>
            <span>MOTION STORYTELLING</span>
            <span>PREMIUM BRANDING</span>
            <span>AI STAGING</span>
            <span>3D PARALLAX</span>
            <span>MOTION STORYTELLING</span>
            <span>PREMIUM BRANDING</span>
          </div>
        </section>

        <section className="showcase container" id="showcase" data-scroll-speed="0.05">
          <div className="section-head">
            <p className="eyebrow">CURATED LISTINGS</p>
            <h2>Объекты в необычной подаче</h2>
          </div>

          <div className="cards">
            {listings.map((item) => (
              <article className="property-card tilt-card" key={item.title}>
                <div className="image-wrap">
                  <img src={item.image} alt={item.alt} />
                </div>
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                  <div className="meta">
                    <span>{item.city}</span>
                    <strong>{item.price}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="video-block container" id="video">
          <div className="section-head">
            <p className="eyebrow">GOOGLE VIDS / VEO FLOW</p>
            <h2>Готовый storyboard для AI-видео</h2>
          </div>

          <div className="scene-grid-cards">
            {scenes.map((scene) => (
              <article className="scene-prompt" key={scene.title}>
                <h3>{scene.title}</h3>
                <p>{scene.text}</p>
              </article>
            ))}
          </div>

          <div className="video-note">
            <strong>Формат:</strong> 4 сцены × 4–6 сек · cinematic · 24fps · premium color grading
          </div>
        </section>

        <section className="contact container" id="contact" data-scroll-speed="0.03">
          <div>
            <p className="eyebrow">LET&apos;S BUILD</p>
            <h2>Соберём витрину, от которой сложно уйти без заявки</h2>
            <p>
              Оставь контакт — пришлю концепт, структуру блоков, storyboard и
              визуальный стиль под твой рынок.
            </p>
          </div>

          <form className="lead-form">
            <label>
              Имя
              <input type="text" placeholder="Максим" />
            </label>
            <label>
              Телефон
              <input type="tel" placeholder="+7 (___) ___-__-__" />
            </label>
            <label>
              Регион / город
              <input type="text" placeholder="Москва" />
            </label>
            <button className="btn btn-solid magnetic" type="button">
              Хочу такой же сайт
            </button>
          </form>
        </section>
      </main>

      <footer className="container footer">
        <p>© 2026 Aether District</p>
        <p>Visual mode: experimental urban noir</p>
      </footer>
    </>
  );
}
