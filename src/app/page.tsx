// src/app/page.tsx
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Next Event */}
      <section className="content-section upcoming-event">
        <h2 className="section-title fade-slide fade-delay-7">Next Event</h2>
        <div className="event-details fade-slide fade-delay-8">
          <h3 className="event-title">Saudade Summer Sessions</h3>
          <p className="event-date-venue">
            <span className="event-date">Saturday, May 10th, 2025</span> |{" "}
            <span className="event-venue">TBA, Enschede</span>
          </p>
          <p className="event-description">
            Welcoming summer with Saudade. More details coming soon!
          </p>
          <div className="event-links">
            <a href="#" className="event-ticket-button disabled">
              Tickets Coming Soon
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
