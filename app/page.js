import Image from "next/image";
import ClientEffects from "./client-effects";

const mapsUrl =
  "https://www.google.com/maps/place/Small+Talk+Salon/@30.4314777,-90.2046606,20.13z/data=!4m6!3m5!1s0x86274474c6984d25:0x3ca703ba4960e695!8m2!3d30.4315973!4d-90.2047952!16s%2Fg%2F11gh0118q2?entry=ttu";
const imageRoot = "/generated/small-talk-salon/images";

const salonSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": "https://smalltalksalon.siteboro.com/#salon",
  name: "Small Talk Salon",
  url: "https://smalltalksalon.siteboro.com",
  image: [
    `https://smalltalksalon.siteboro.com${imageRoot}/04-long-balayage.jpg`,
    `https://smalltalksalon.siteboro.com${imageRoot}/03-platinum-blonde.jpg`,
    `https://smalltalksalon.siteboro.com${imageRoot}/06-dimensional-blonde.jpg`,
  ],
  telephone: "+1-985-206-9410",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1519 LA-22 #7",
    addressLocality: "Madisonville",
    addressRegion: "LA",
    postalCode: "70447",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.4315973,
    longitude: -90.2047952,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "38",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  hasMap: mapsUrl,
};

function SalonImage({ src, alt, priority = false }) {
  return (
    <Image
      src={`${imageRoot}/${src}`}
      alt={alt}
      width={1200}
      height={1600}
      priority={priority}
      sizes="(max-width: 760px) 86vw, (max-width: 1100px) 50vw, 38vw"
    />
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(salonSchema) }}
      />
      <ClientEffects />
      <div className="scroll-progress" aria-hidden="true" />

      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Small Talk Salon home">
          <Image
            className="brand-logo"
            src={`${imageRoot}/small-talk-logo-clean-v2.png`}
            alt=""
            width={320}
            height={150}
            priority
            unoptimized
            sizes="140px"
          />
          <span className="brand-name">Small Talk Salon + Boutique</span>
        </a>
        <nav className="desktop-nav" aria-label="Main links">
          <a href="#story">Our salon</a>
          <a href="#services">Services</a>
          <a href="#work">The work</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="header-call" href="tel:+19852069410">
          <span>Call</span>
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M5 12h14M14 7l5 5-5 5" />
          </svg>
        </a>
        <button className="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">
          <span />
          <span />
        </button>
      </header>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        <a href="#story">Our salon</a>
        <a href="#services">Services</a>
        <a href="#work">The work</a>
        <a href="#visit">Visit</a>
        <a href="tel:+19852069410">Call (985) 206-9410</a>
      </nav>

      <main>
        <section className="hero" id="top">
          <div className="hero-art" aria-hidden="true">
            <figure className="hero-main-image">
              <SalonImage src="04-long-balayage.jpg" alt="" priority />
            </figure>
            <figure className="hero-card hero-card-top">
              <SalonImage src="03-platinum-blonde.jpg" alt="" priority />
            </figure>
            <figure className="hero-card hero-card-bottom">
              <SalonImage src="02-golden-waves.jpg" alt="" priority />
            </figure>
            <span className="hero-orbit" />
          </div>

          <div className="hero-copy">
            <p className="eyebrow reveal">Madisonville, Louisiana</p>
            <h1 className="hero-title reveal">
              <span>Small</span>
              <span className="hero-title-accent">Talk.</span>
            </h1>
            <div className="hero-intro reveal">
              <p>
                Good hair, honest conversation, and a salon visit that feels like
                catching up with your best friend.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="tel:+19852069410">
                  Call for an appointment
                </a>
                <a className="text-link" href="#work">
                  See the work <span aria-hidden="true">↘</span>
                </a>
              </div>
            </div>
          </div>

          <div className="rating-card reveal">
            <span className="rating-number">4.7</span>
            <span className="rating-stars" aria-label="4.7 out of 5 stars">★★★★★</span>
            <span>38 Google reviews</span>
          </div>

          <a className="scroll-cue" href="#story">
            <span>Scroll to meet us</span>
            <span className="scroll-line" aria-hidden="true" />
          </a>
        </section>

        <section className="talk-strip" aria-label="Salon highlights">
          <div className="talk-track">
            <span>Cuts</span><i /><span>Color</span><i /><span>Curls</span><i /><span>Good conversation</span><i />
            <span>Cuts</span><i /><span>Color</span><i /><span>Curls</span><i /><span>Good conversation</span><i />
          </div>
        </section>

        <section className="story section" id="story">
          <div className="section-kicker reveal">
            <span>01</span>
            <span>The salon</span>
          </div>
          <div className="story-grid">
            <h2 className="display-heading reveal">
              Come for the hair.<br /><em>Stay for the small talk.</em>
            </h2>
            <div className="story-copy reveal">
              <p className="story-lead">
                A friendly neighborhood salon where polished results meet a relaxed,
                welcoming atmosphere.
              </p>
              <p>
                Guests describe the space as clean, fun, and comfortable. Every
                appointment starts with a conversation, so your cut, color, or style
                fits the way you actually live.
              </p>
              <a className="arrow-link" href="tel:+19852069410">
                Talk with the salon <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <figure className="story-image reveal">
            <SalonImage
              src="06-dimensional-blonde.jpg"
              alt="Dimensional blonde waves styled at Small Talk Salon"
            />
            <figcaption>
              <span>Dimensional color</span>
              <span>Madisonville, LA</span>
            </figcaption>
          </figure>
        </section>

        <section className="services section" id="services">
          <div className="section-kicker reveal">
            <span>02</span>
            <span>Services</span>
          </div>
          <div className="services-heading">
            <h2 className="display-heading reveal">Made for <em>your</em> hair.</h2>
            <p className="reveal">
              Every service is tailored through conversation. Call the salon for
              availability, details, and a consultation.
            </p>
          </div>
          <div className="service-list">
            <article className="service-item reveal">
              <span className="service-number">01</span>
              <h3>Cuts &amp; shaping</h3>
              <p>Fresh shapes, clean lines, and wearable finishes designed around you.</p>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
            <article className="service-item reveal">
              <span className="service-number">02</span>
              <h3>Color &amp; highlights</h3>
              <p>Natural dimension, bright blondes, rich brunettes, and thoughtful color work.</p>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
            <article className="service-item reveal">
              <span className="service-number">03</span>
              <h3>Curls &amp; texture</h3>
              <p>Shape and styling that work with your natural pattern instead of against it.</p>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
            <article className="service-item reveal">
              <span className="service-number">04</span>
              <h3>Styling &amp; finishing</h3>
              <p>Smooth, waved, polished, or undone: the finishing touch for your next moment.</p>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
            <article className="service-item reveal">
              <span className="service-number">05</span>
              <h3>Wigs &amp; consultations</h3>
              <p>Call to ask about curl care, wigs, and a one-to-one salon consultation.</p>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
            <article className="service-item reveal">
              <span className="service-number">06</span>
              <h3>Boutique finds</h3>
              <p>A small in-salon edit of clothes, candles, earrings, and giftable finds.</p>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
          </div>
        </section>

        <section className="work section" id="work">
          <div className="section-kicker section-kicker-light reveal">
            <span>03</span>
            <span>The work</span>
          </div>
          <div className="work-heading">
            <h2 className="display-heading reveal">Real work.<br /><em>Real shine.</em></h2>
            <p className="reveal">A lookbook made only from Small Talk Salon&apos;s Google Maps gallery.</p>
          </div>
          <div className="gallery">
            <figure className="gallery-card gallery-card-tall reveal">
              <SalonImage src="04-long-balayage.jpg" alt="Long brunette balayage waves" />
              <figcaption><span>Soft dimension</span><span>01</span></figcaption>
            </figure>
            <figure className="gallery-card reveal">
              <SalonImage src="03-platinum-blonde.jpg" alt="Smooth platinum blonde hairstyle" />
              <figcaption><span>Bright blonde</span><span>02</span></figcaption>
            </figure>
            <figure className="gallery-card reveal">
              <SalonImage src="02-golden-waves.jpg" alt="Short golden blonde waves" />
              <figcaption><span>Golden waves</span><span>03</span></figcaption>
            </figure>
            <figure className="gallery-card gallery-card-wide reveal">
              <SalonImage src="06-dimensional-blonde.jpg" alt="Dimensional blonde waves" />
              <figcaption><span>Blended light</span><span>04</span></figcaption>
            </figure>
            <figure className="gallery-card reveal">
              <SalonImage src="01-precision-bob.jpg" alt="Smooth precision brunette bob" />
              <figcaption><span>Clean shape</span><span>05</span></figcaption>
            </figure>
            <figure className="gallery-card reveal">
              <SalonImage src="05-salon-team.jpg" alt="A member of the Small Talk Salon team" />
              <figcaption><span>Warm welcome</span><span>06</span></figcaption>
            </figure>
          </div>
        </section>

        <section className="reviews section" aria-label="Customer reviews">
          <div className="section-kicker reveal">
            <span>04</span>
            <span>Kind words</span>
          </div>
          <div className="review-stage">
            <div className="review-score reveal">
              <strong>4.7</strong>
              <span>from 38 Google reviews</span>
            </div>
            <div className="review-quotes">
              <blockquote className="reveal">
                <p>“Friendly staff, clean environment, and great atmosphere!”</p>
                <cite>Google review</cite>
              </blockquote>
              <blockquote className="reveal">
                <p>“The atmosphere is always fun and feels like a visit to your bestie.”</p>
                <cite>Google review</cite>
              </blockquote>
              <blockquote className="reveal">
                <p>“Cute boutique of clothes, candles, earrings, reasonably priced.”</p>
                <cite>Google review</cite>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="visit section" id="visit">
          <div className="visit-map reveal">
            <iframe
              title="Small Talk Salon location on Google Maps"
              src="https://www.google.com/maps?q=1519+LA-22+%237,+Madisonville,+LA+70447&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="visit-content">
            <div className="section-kicker reveal">
              <span>05</span>
              <span>Visit</span>
            </div>
            <h2 className="display-heading reveal">Your chair is<br /><em>waiting.</em></h2>
            <div className="visit-details reveal">
              <div>
                <span className="detail-label">Find us</span>
                <p>1519 LA-22 #7<br />Madisonville, LA 70447</p>
              </div>
              <div>
                <span className="detail-label">Call us</span>
                <a href="tel:+19852069410">(985) 206-9410</a>
              </div>
              <div>
                <span className="detail-label">Hours</span>
                <dl>
                  <div><dt>Tue–Fri</dt><dd>9:30 AM–6 PM</dd></div>
                  <div><dt>Saturday</dt><dd>9 AM–4 PM</dd></div>
                  <div><dt>Sun–Mon</dt><dd>Closed</dd></div>
                </dl>
              </div>
            </div>
            <div className="visit-actions reveal">
              <a className="button button-dark" href="tel:+19852069410">Call the salon</a>
              <a className="button button-outline" href={mapsUrl} target="_blank" rel="noopener noreferrer">
                Get directions
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#top">Small Talk Salon</a>
        <p>Good hair. Good company. Madisonville, Louisiana.</p>
        <div className="footer-links">
          <a href="tel:+19852069410">(985) 206-9410</a>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer">Google Maps</a>
        </div>
        <span className="footer-year">© {new Date().getFullYear()}</span>
      </footer>

      <a
        className="preview-cta"
        href="https://app.siteboro.com/lets-go?site=small-talk-salon"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Buy this Small Talk Salon website"
      >
        <span className="preview-dot" aria-hidden="true" />
        <span>If you like it, buy it now</span>
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M5 12h14M14 7l5 5-5 5" />
        </svg>
      </a>
    </>
  );
}
