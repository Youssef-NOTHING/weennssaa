import { useMemo, useState } from 'react';
import data from './data/siteData.json';

const defaultLang = 'en';
const imageMap = [
  'https://images.unsplash.com/photo-1517841905240-472988c2477c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
];

export default function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('wensa_lang') || defaultLang);
  const content = useMemo(() => data.languages[language] || data.languages[defaultLang], [language]);
  const navItems = content.nav || [];
  const stories = content.story?.cards || [];
  const visitCards = content.visits || [];
  const eventCards = content.events || [];
  const shopItems = content.shop || [];

  const onLanguageChange = (nextLang) => {
    setLanguage(nextLang);
    localStorage.setItem('wensa_lang', nextLang);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <img src="/assets/wensa-logo.jpeg" alt="WENSA logo" className="brand-logo" />
          <span>{content.brand}</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="lang-switch" aria-label="Language selector">
          {Object.keys(data.languages).map((key) => (
            <button
              key={key}
              type="button"
              className={language === key ? 'active' : ''}
              onClick={() => onLanguageChange(key)}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <small className="eyebrow">{content.hero.eyebrow}</small>
            <h1>{content.hero.title}</h1>
            <p>{content.hero.text}</p>
            <div className="cta-row">
              <a className="button primary" href="#about">{content.hero.primaryCta}</a>
              <a className="button secondary" href="#contact">{content.hero.secondaryCta}</a>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/assets/wensa-logo.jpeg" alt="WENSA emblem" />
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-header">
            <small className="eyebrow">{content.about.eyebrow}</small>
            <h2>{content.about.title}</h2>
          </div>

          <div className="two-col">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1000&q=85"
              alt="Care and support"
              className="feature-image"
            />
            <div className="about-copy">
              {content.about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <div className="mini-grid">
                <article>
                  <strong>♡</strong>
                  <h3>Our mission</h3>
                  <p>Stand with patients and families through compassion and action.</p>
                </article>
                <article>
                  <strong>✧</strong>
                  <h3>Our vision</h3>
                  <p>A more aware, supportive and connected community.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section stories">
          <div className="section-header split">
            <div>
              <small className="eyebrow">{content.story.eyebrow}</small>
              <h2>{content.story.title}</h2>
            </div>
            <a href="#contact" className="button ghost">Be part of the story</a>
          </div>

          <div className="story-grid">
            {stories.map((card, index) => (
              <article key={card.name} className={index === 1 ? 'quote-card highlight' : 'quote-card'}>
                <span className="quote-mark">“</span>
                <p>{card.quote}</p>
                <div className="quote-author">
                  <strong>{card.name}</strong>
                  <small>{card.role}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section visits">
          <div className="section-header split">
            <div>
              <small className="eyebrow">OUR VISITS</small>
              <h2>Moments that move people.</h2>
            </div>
          </div>

          <div className="visit-grid">
            {visitCards.map((visit, index) => (
              <article className="visit-card" key={`${visit.title}-${index}`}>
                <img src={visit.image || imageMap[index % imageMap.length]} alt={visit.title} />
                <div className="visit-copy">
                  <small>{visit.location}</small>
                  <h3>{visit.title}</h3>
                  <p>{visit.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="events">
          <div className="section-header split">
            <div>
              <small className="eyebrow">OUR EVENTS</small>
              <h2>Join the movement. Be part of the next act of hope.</h2>
            </div>
            <a href="#contact" className="button ghost">Contact us</a>
          </div>

          <div className="event-list">
            {eventCards.map((event, index) => (
              <article className="event-row" key={`${event.title}-${index}`}>
                <div
                  className="event-thumb"
                  style={{
                    backgroundImage: `linear-gradient(rgba(16,47,53,0.16), rgba(16,47,53,0.16)), url('${imageMap[index % imageMap.length]}')`,
                  }}
                />
                <div className="event-copy">
                  <span className="event-tag">{event.tag}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <div className="event-meta">
                    <span>{event.date}</span>
                    <span>{event.city}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="shop">
          <div className="section-header split">
            <div>
              <small className="eyebrow">STORE</small>
              <h2>Support WENSA with purpose.</h2>
            </div>
          </div>

          <div className="shop-grid">
            {shopItems.map((item) => (
              <article key={item.name} className="shop-card">
                <div className="shop-visual" />
                <small>{item.type}</small>
                <h3>{item.name}</h3>
                <strong>{item.price}</strong>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-box" id="contact">
          <div className="contact-copy">
            <small className="eyebrow">{content.contact.eyebrow}</small>
            <h2>{content.contact.title}</h2>
            <p>{content.contact.text}</p>
            <ul>
              <li>{content.contact.email}</li>
              <li>@wensa</li>
              <li>{content.contact.location}</li>
            </ul>
          </div>

          <form className="contact-form">
            <label>
              Your name
              <input type="text" placeholder="Name" />
            </label>
            <label>
              Email address
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Your message
              <textarea rows="5" placeholder="Write your message..." />
            </label>
            <button type="button" className="button primary">Send message</button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="brand-wrap">
          <img src="/assets/wensa-logo.jpeg" alt="WENSA logo" className="brand-logo" />
          <span>{content.brand}</span>
        </div>
        <p>Together, we bring hope.</p>
        <small>© 2026 WENSA</small>
      </footer>
    </div>
  );
}
