export default function ContactPage() {
  return (
    <section className="content-section contact-page">
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-info">
        <p className="contact-email">
          Email us at <a href="mailto:info@saudade.com">info@saudade.com</a>
        </p>
        <p>Enschede, Netherlands</p>
      </div>
      <div className="social-links">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="#" aria-label="Instagram">
              <span className="sr-only">Instagram</span>📸
            </a>
          </li>
          <li>
            <a href="#" aria-label="SoundCloud">
              <span className="sr-only">SoundCloud</span>🎵
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
