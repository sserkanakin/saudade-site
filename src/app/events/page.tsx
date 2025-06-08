// src/app/events/page.tsx
import { events } from "@/data/events"
import { EventCard } from "@/components/EventCard"

export default function EventsPage() {
  const upcoming = events.filter((e) => !e.past)
  const past = events.filter((e) => e.past)

  return (
    <main className="max-w-5xl mx-auto py-16 space-y-16 px-4">
      <section>
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-amber-500 inline-block">Upcoming Events</h2>
        <div className="space-y-8">
          {upcoming.map((e) => (
            <EventCard key={e.title} {...e} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-amber-500 inline-block">Past Events</h2>
        <div className="space-y-8">
          {past.map((e) => (
            <EventCard key={e.title} {...e} />
          ))}
        </div>
      </section>
    </main>
  )
}
