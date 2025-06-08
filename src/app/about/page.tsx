export default function AboutPage() {
  return (
    <section className="content-section about-page">
      <h2 className="section-title">About Saudade</h2>
      <div className="about-content-layout">
        <div className="about-text">
          <p>
            Saudade is a collective of music lovers hosting events and sessions
            in Enschede. We aim to bring people together through deep and
            soulful house music.
          </p>
          <p>
            Our team curates unique experiences where everyone can feel the
            rhythm and share good vibes. Join us for our next session or browse
            the gallery of our past events.
          </p>
        </div>
        <div className="about-image">
          <img src="/assets/images/about-image.png" alt="About Saudade" />
        </div>
      </div>
    </section>
  );
}
