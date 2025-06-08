// src/app/page.tsx
import { Hero } from "@/components/Hero";
import { events } from "@/data/events";
import { EventCard } from "@/components/EventCard";

export default function Home() {
  const nextEvent = events.find((e) => !e.past);
  return (
    <>
      <Hero />
      {nextEvent && (
        <section className="content-section upcoming-event">
          <h2 className="section-title fade-slide fade-delay-7">Next Event</h2>
          <div className="fade-slide fade-delay-8">
            <EventCard {...nextEvent} />
          </div>
        </section>
      )}
    </>
  );
}
