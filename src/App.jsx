<<<<<<< HEAD
import { useEffect, useMemo, useState } from 'react';
=======
import { useMemo, useState } from 'react';
>>>>>>> 5dab93069b00b6bf4480fbb88dd1503546a8ad6e
import data from './data/siteData.json';

const defaultLang = 'en';
const imageMap = [
  'https://images.unsplash.com/photo-1517841905240-472988c2477c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
];

<<<<<<< HEAD
const arabicContent = {
  brand: 'WENSA',
  nav: [
    { label: 'الرئيسية', href: '#home' },
    { label: 'من نحن', href: '#about' },
    { label: 'الفعاليات', href: '/events.html' },
    { label: 'المتجر', href: '/store.html' },
    { label: 'تواصل', href: '#contact' },
  ],
  hero: {
    eyebrow: 'الأمل يبدأ منا',
    title: 'معا نصنع الأمل.',
    text: 'مجتمع متضامن يقف بجانب المصابين بالسرطان ويحول التعاطف إلى أثر حقيقي.',
    primaryCta: 'اكتشف WENSA',
    secondaryCta: 'كيف نساعد',
  },
  about: {
    eyebrow: 'من نحن',
    title: 'أكثر من مجموعة. رسالة إنسانية.',
    body: [
      'WENSA مبادرة مجتمعية تبني الدعم النفسي والاجتماعي للأسر المتأثرة بالسرطان.',
      'نحوّل النية الطيبة إلى مبادرات عملية: زيارات، فعاليات، ومنتجات داعمة.',
    ],
  },
  story: {
    eyebrow: 'أصوات من المجتمع',
    title: 'الناس يتذكرون الدفء.',
    cards: [
      {
        quote: 'وجود WENSA بجانبي خفف عني كثيرا وجعلني أشعر أني لست وحدي.',
        name: 'فاطمة',
        role: 'متطوعة',
      },
      {
        quote: 'كل زيارة وكل كلمة طيبة كانت سببا في رفع المعنويات داخل العائلة.',
        name: 'حسن',
        role: 'داعم مجتمعي',
      },
      {
        quote: 'حين يجتمع الناس بنية صادقة يصبح الأمل شيئا نراه ونعيشه.',
        name: 'ليلى',
        role: 'مشاركة',
      },
    ],
  },
  visits: [
    {
      title: 'زيارة المجتمع في الرباط',
      location: 'الرباط',
      text: 'زيارات إنسانية للدعم والاستماع وتشجيع الأسر في أوقات صعبة.',
      image: 'https://images.unsplash.com/photo-1517841905240-472988c2477c?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'يوم الرعاية واللطف',
      location: 'الدار البيضاء',
      text: 'مبادرات بسيطة تصنع فرقا كبيرا عبر الحوار والدعم المحلي.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'لقاء المجتمع المفتوح',
      location: 'مراكش',
      text: 'لقاء للتوعية وتقوية روح التضامن واستقبال داعمين جدد.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
    },
  ],
  events: [
    {
      title: 'مسيرة التضامن',
      city: 'الرباط',
      date: 'السبت - 10:00 صباحا',
      description: 'مسيرة هادئة لرفع الوعي ودعم الأسر المتأثرة بالسرطان.',
      tag: 'مجتمع',
    },
    {
      title: 'ليلة الرعاية واللطف',
      city: 'الدار البيضاء',
      date: 'الجمعة - 7:00 مساء',
      description: 'أمسية استماع ومساندة وتقديم خطوات عملية للمساعدة.',
      tag: 'دعم',
    },
    {
      title: 'مقهى المجتمع المفتوح',
      city: 'مراكش',
      date: 'الأحد - 9:30 صباحا',
      description: 'لقاء دافئ لتبادل الأفكار والانخراط في مبادرات WENSA.',
      tag: 'لقاء',
    },
  ],
  shop: [
    {
      name: 'تيشيرت الأمل',
      price: '240 MAD',
      type: 'مجموعة الدعم',
      description: 'قطعة يومية تعبر عن التضامن والانتماء.',
    },
    {
      name: 'كوب التضامن',
      price: '120 MAD',
      type: 'تفاصيل يومية',
      description: 'هدية بسيطة تحمل معنى دافئا.',
    },
    {
      name: 'دفتر WENSA',
      price: '150 MAD',
      type: 'هدية مجتمعية',
      description: 'دفتر أنيق للتدوين والتأمل.',
    },
  ],
  contact: {
    eyebrow: 'تواصل معنا',
    title: 'لنصنع الأمل معا.',
    text: 'للتعاون أو التطوع أو الاستفسار عن أنشطتنا، راسلونا.',
    email: 'hello@wensa.org',
    location: 'المغرب',
  },
};

const pageText = {
  en: {
    mission: 'Our mission',
    missionBody: 'Stand with patients and families through compassion and action.',
    vision: 'Our vision',
    visionBody: 'A more aware, supportive and connected community.',
    placesEyebrow: 'OUR PLACES',
    placesTitle: 'Where WENSA shows up.',
    videosEyebrow: 'VIDEO MOMENTS',
    videosTitle: 'Short stories from the field.',
    storyCta: 'Be part of the story',
    eventsTitle: 'Join the movement. Be part of the next act of hope.',
    contactButton: 'Contact us',
    shopTitle: 'Support WENSA with purpose.',
    formName: 'Your name',
    formEmail: 'Email address',
    formMessage: 'Your message',
    send: 'Send message',
    footerTag: 'Together, we bring hope.',
  },
  fr: {
    mission: 'Notre mission',
    missionBody: 'Accompagner les patients et leurs familles avec compassion et engagement.',
    vision: 'Notre vision',
    visionBody: 'Une communauté plus sensibilisée, solidaire et unie.',
    placesEyebrow: 'NOS LIEUX',
    placesTitle: 'La ou WENSA agit.',
    videosEyebrow: 'MOMENTS VIDEO',
    videosTitle: 'Des histoires courtes du terrain.',
    storyCta: 'Participez a cette histoire',
    eventsTitle: 'Rejoignez le mouvement et le prochain acte d espoir.',
    contactButton: 'Contactez-nous',
    shopTitle: 'Soutenez WENSA avec sens.',
    formName: 'Votre nom',
    formEmail: 'Adresse e-mail',
    formMessage: 'Votre message',
    send: 'Envoyer le message',
    footerTag: 'Ensemble, nous portons l espoir.',
  },
  ar: {
    mission: 'رسالتنا',
    missionBody: 'مساندة المرضى وعائلاتهم بالتعاطف والعمل الميداني.',
    vision: 'رؤيتنا',
    visionBody: 'مجتمع أكثر وعيا وتضامنا وترابطا.',
    placesEyebrow: 'أماكننا',
    placesTitle: 'هنا نحضر ونخدم.',
    videosEyebrow: 'لحظات فيديو',
    videosTitle: 'قصص قصيرة من الميدان.',
    storyCta: 'كن جزءا من القصة',
    eventsTitle: 'انضموا للحركة وكونوا جزءا من الأمل القادم.',
    contactButton: 'تواصل معنا',
    shopTitle: 'ادعم WENSA بهدف.',
    formName: 'الاسم',
    formEmail: 'البريد الإلكتروني',
    formMessage: 'رسالتك',
    send: 'إرسال الرسالة',
    footerTag: 'معا نصنع الأمل.',
  },
};

export default function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('wensa_lang') || defaultLang);
  const [menuOpen, setMenuOpen] = useState(false);
  const languages = useMemo(() => ({ ...data.languages, ar: arabicContent }), []);
  const content = useMemo(() => languages[language] || languages[defaultLang], [language, languages]);
  const labels = pageText[language] || pageText[defaultLang];
  const isArabic = language === 'ar';
=======
export default function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('wensa_lang') || defaultLang);
  const content = useMemo(() => data.languages[language] || data.languages[defaultLang], [language]);
>>>>>>> 5dab93069b00b6bf4480fbb88dd1503546a8ad6e
  const navItems = content.nav || [];
  const stories = content.story?.cards || [];
  const visitCards = content.visits || [];
  const eventCards = content.events || [];
  const shopItems = content.shop || [];
<<<<<<< HEAD
  const placeCards = [
    { name: 'Rabat', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Casablanca', image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73d7e?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Marrakech', image: 'https://images.unsplash.com/photo-1597212720389-80f2f6f7f0f7?auto=format&fit=crop&w=1200&q=80' },
  ];
  const videoCards = [
    { title: 'Community visit', src: 'https://www.youtube.com/embed/ScMzIvxBSi4?rel=0' },
    { title: 'Volunteer day', src: 'https://www.youtube.com/embed/ysz5S6PUM-U?rel=0' },
  ];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  }, [language, isArabic]);

  const onLanguageChange = (nextLang) => {
    setLanguage(nextLang);
    setMenuOpen(false);
=======

  const onLanguageChange = (nextLang) => {
    setLanguage(nextLang);
>>>>>>> 5dab93069b00b6bf4480fbb88dd1503546a8ad6e
    localStorage.setItem('wensa_lang', nextLang);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <img src="/assets/wensa-logo.jpeg" alt="WENSA logo" className="brand-logo" />
          <span>{content.brand}</span>
        </div>

<<<<<<< HEAD
        <button
          type="button"
          className="topbar-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          <a href="#home" onClick={() => setMenuOpen(false)}>{navItems[0]?.label || 'Home'}</a>
          <a href="/store.html" onClick={() => setMenuOpen(false)}>{language === 'ar' ? 'المتجر' : language === 'fr' ? 'Boutique' : 'Store'}</a>
          <a href="/events.html" onClick={() => setMenuOpen(false)}>{language === 'ar' ? 'الفعاليات' : language === 'fr' ? 'Événements' : 'Events'}</a>
          <a href="#donation" onClick={() => setMenuOpen(false)}>{language === 'ar' ? 'التبرع' : language === 'fr' ? 'Faire un don' : 'Donation'}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{language === 'ar' ? 'تواصل' : language === 'fr' ? 'Contact' : 'Contact'}</a>
          <a className="support-pill" href="#donation" onClick={() => setMenuOpen(false)}>{language === 'ar' ? 'ساندونا ↗' : language === 'fr' ? 'Nous soutenir ↗' : 'Support us ↗'}</a>
        </nav>

        <div className="lang-switch" aria-label="Language selector">
          {Object.keys(languages).map((key) => (
=======
        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="lang-switch" aria-label="Language selector">
          {Object.keys(data.languages).map((key) => (
>>>>>>> 5dab93069b00b6bf4480fbb88dd1503546a8ad6e
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
<<<<<<< HEAD
              {content.about.body.map((paragraph, index) => (
                <p key={paragraph} className={index > 0 ? 'mobile-trim' : ''}>{paragraph}</p>
=======
              {content.about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
>>>>>>> 5dab93069b00b6bf4480fbb88dd1503546a8ad6e
              ))}

              <div className="mini-grid">
                <article>
                  <strong>♡</strong>
<<<<<<< HEAD
                  <h3>{labels.mission}</h3>
                  <p>{labels.missionBody}</p>
                </article>
                <article>
                  <strong>✧</strong>
                  <h3>{labels.vision}</h3>
                  <p>{labels.visionBody}</p>
=======
                  <h3>Our mission</h3>
                  <p>Stand with patients and families through compassion and action.</p>
                </article>
                <article>
                  <strong>✧</strong>
                  <h3>Our vision</h3>
                  <p>A more aware, supportive and connected community.</p>
>>>>>>> 5dab93069b00b6bf4480fbb88dd1503546a8ad6e
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
<<<<<<< HEAD
            <a href="#contact" className="button ghost">{labels.storyCta}</a>
=======
            <a href="#contact" className="button ghost">Be part of the story</a>
>>>>>>> 5dab93069b00b6bf4480fbb88dd1503546a8ad6e
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
<<<<<<< HEAD
              <small className="eyebrow">{labels.placesEyebrow}</small>
              <h2>{labels.placesTitle}</h2>
=======
              <small className="eyebrow">OUR VISITS</small>
              <h2>Moments that move people.</h2>
>>>>>>> 5dab93069b00b6bf4480fbb88dd1503546a8ad6e
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

<<<<<<< HEAD
        <section className="section">
          <div className="place-grid">
            {placeCards.map((place) => (
              <article className="place-card" key={place.name}>
                <img src={place.image} alt={place.name} />
                <div>
                  <small>{place.name}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="videos">
          <div className="section-header">
            <small className="eyebrow">{labels.videosEyebrow}</small>
            <h2>{labels.videosTitle}</h2>
          </div>
          <div className="video-grid">
            {videoCards.map((video) => (
              <article className="video-card" key={video.title}>
                <iframe
                  src={video.src}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </article>
            ))}
          </div>
        </section>

=======
>>>>>>> 5dab93069b00b6bf4480fbb88dd1503546a8ad6e
        <section className="section" id="events">
          <div className="section-header split">
            <div>
              <small className="eyebrow">OUR EVENTS</small>
<<<<<<< HEAD
              <h2>{labels.eventsTitle}</h2>
            </div>
            <a href="#contact" className="button ghost">{labels.contactButton}</a>
=======
              <h2>Join the movement. Be part of the next act of hope.</h2>
            </div>
            <a href="#contact" className="button ghost">Contact us</a>
>>>>>>> 5dab93069b00b6bf4480fbb88dd1503546a8ad6e
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

<<<<<<< HEAD
        <section className="section" id="donation">
          <div className="section-header split">
            <div>
              <small className="eyebrow">{language === 'ar' ? 'الدعم' : language === 'fr' ? 'SOUTIEN' : 'SUPPORT'}</small>
              <h2>{language === 'ar' ? 'كل مساهمة تصنع أثرا.' : language === 'fr' ? 'Chaque geste compte.' : 'Every act of support matters.'}</h2>
            </div>
            <a href="#contact" className="button ghost">{labels.contactButton}</a>
          </div>
        </section>

=======
>>>>>>> 5dab93069b00b6bf4480fbb88dd1503546a8ad6e
        <section className="section" id="shop">
          <div className="section-header split">
            <div>
              <small className="eyebrow">STORE</small>
<<<<<<< HEAD
              <h2>{labels.shopTitle}</h2>
=======
              <h2>Support WENSA with purpose.</h2>
>>>>>>> 5dab93069b00b6bf4480fbb88dd1503546a8ad6e
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
<<<<<<< HEAD
              {labels.formName}
              <input type="text" placeholder="Name" />
            </label>
            <label>
              {labels.formEmail}
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              {labels.formMessage}
              <textarea rows="5" placeholder="Write your message..." />
            </label>
            <button type="button" className="button primary">{labels.send}</button>
=======
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
>>>>>>> 5dab93069b00b6bf4480fbb88dd1503546a8ad6e
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="brand-wrap">
          <img src="/assets/wensa-logo.jpeg" alt="WENSA logo" className="brand-logo" />
          <span>{content.brand}</span>
        </div>
<<<<<<< HEAD
        <p>{labels.footerTag}</p>
=======
        <p>Together, we bring hope.</p>
>>>>>>> 5dab93069b00b6bf4480fbb88dd1503546a8ad6e
        <small>© 2026 WENSA</small>
      </footer>
    </div>
  );
}
