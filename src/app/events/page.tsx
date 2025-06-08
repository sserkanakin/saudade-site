// src/app/events/page.tsx
import { events } from "@/data/events"
import { EventCard } from "@/components/EventCard"

export default function EventsPage() {
  const upcoming = events.filter((e) => !e.past)
  const past = events.filter((e) => e.past)

  return (
    <main className="max-w-5xl mx-auto py-16 space-y-16">
      {/* Upcoming Events :contentReference[oaicite:2]{index=2}:contentReference[oaicite:3]{index=3} */}
      <section className="content-section events-list">
        <h2 className="section-title">Upcoming Events</h2>
        {upcoming.map((e) => (
          <EventCard key={e.title} {...e} />
        ))}
      </section>

      {/* Past Events :contentReference[oaicite:4]{index=4}:contentReference[oaicite:5]{index=5} */}
      <section className="content-section events-list past-events">
        <h2 className="section-title">Past Events</h2>
        {past.map((e) => (
          <EventCard key={e.title} {...e} />
        ))}
      </section>
    </main>
  )
}
