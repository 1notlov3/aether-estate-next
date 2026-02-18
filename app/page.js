import InteractiveEffects from '@/components/InteractiveEffects';

const listings = [
  {
    title: 'Ocean Penthouse',
    subtitle: '145 м² · 3 спальни · панорамные окна',
    city: 'Сочи',
    price: '34.5 млн ₽',
    image: '/assets/listing-ocean.svg',
    alt: 'Ocean penthouse',
  },
  {
    title: 'Skyline Loft',
    subtitle: '98 м² · 2 спальни · smart home',
    city: 'Москва-Сити',
    price: '28.9 млн ₽',
    image: '/assets/listing-loft.svg',
    alt: 'Skyline loft',
  },
  {
    title: 'Private Villa',
    subtitle: '220 м² · 4 спальни · закрытый клубный посёлок',
    city: 'Новая Рига',
    price: '62 млн ₽',
    image: '/assets/listing-villa.svg',
    alt: 'Private villa',
  },
];

export default function HomePage() {
  return (
    <>
      <InteractiveEffects />

      <header className="topbar container" data-scroll-speed="0.1">
        <a href="#" className="logo">
          Aether <span>Estate</span>
        </a>
        <nav>
          <a href="#listings">Объекты</a>
          <a href="#advantages">Преимущества</a>
          <a href="#contact">Контакты</a>
        </nav>
        <button className="btn btn-outline magnetic">Подбор за 2 минуты</button>
      </header>

      <main>
        <section className="hero container" id="hero">
          <div className="hero-copy" data-scroll-speed="0.2">
            <p className="eyebrow">NEXT GEN PROPERTY EXPERIENCE</p>
            <h1>
              Недвижимость, которая
              <span> выглядит дороже</span>
            </h1>
            <p className="hero-lead">
              Продажа квартир, вилл и smart-лофтов в премиум-сегменте.
              Виртуальные 3D-туры, прозрачная аналитика и сделки без стресса.
            </p>
            <div className="hero-actions">
              <button className="btn btn-solid magnetic">Смотреть объекты</button>
              <button className="btn btn-ghost magnetic">
                Назначить консультацию
              </button>
            </div>
            <div className="metrics">
              <div>
                <strong>1,420+</strong>
                <span>сделок закрыто</span>
              </div>
              <div>
                <strong>97%</strong>
                <span>клиентов по рекомендации</span>
              </div>
              <div>
                <strong>48ч</strong>
                <span>средний срок подбора</span>
              </div>
            </div>
          </div>

          <div className="hero-scene" aria-hidden="true">
            <div className="scene-layer scene-glow" data-depth="0.08" />
            <div className="scene-layer scene-grid" data-depth="0.16" />
            <div className="scene-layer scene-city" data-depth="0.26" />
            <div className="scene-layer scene-card" data-depth="0.38">
              <p>Featured</p>
              <h3>Ocean Residence</h3>
              <span>от 34.5 млн ₽</span>
            </div>
          </div>
        </section>

        <section className="listings container" id="listings" data-scroll-speed="0.08">
          <div className="section-head">
            <p className="eyebrow">TOP PICKS</p>
            <h2>Актуальные объекты</h2>
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

        <section className="advantages container" id="advantages">
          <div className="section-head">
            <p className="eyebrow">WHY AETHER</p>
            <h2>Сильная подача + быстрый результат</h2>
          </div>

          <div className="adv-grid">
            <article>
              <h3>3D-тур и AR-превью</h3>
              <p>
                Клиент видит атмосферу объекта до показа: свет, фактура, планировка,
                сценарии жизни.
              </p>
            </article>
            <article>
              <h3>AI-оценка цены</h3>
              <p>
                Считаем реальную рыночную стоимость на базе спроса, района и
                инфраструктуры.
              </p>
            </article>
            <article>
              <h3>Сделка под ключ</h3>
              <p>
                Ипотека, юрист, проверка, переговоры — все этапы в одном окне и с
                понятным таймлайном.
              </p>
            </article>
          </div>
        </section>

        <section className="contact container" id="contact" data-scroll-speed="0.05">
          <div>
            <p className="eyebrow">LET&apos;S TALK</p>
            <h2>Подберём объект под твой сценарий жизни</h2>
            <p>
              Оставь контакт — менеджер вернётся с выборкой и финансовой моделью за
              15 минут.
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
              Бюджет
              <input type="text" placeholder="25–45 млн ₽" />
            </label>
            <button className="btn btn-solid magnetic" type="button">
              Получить подборку
            </button>
          </form>
        </section>
      </main>

      <footer className="container footer">
        <p>© 2026 Aether Estate</p>
        <p>Design language: 3D urban noir</p>
      </footer>
    </>
  );
}
