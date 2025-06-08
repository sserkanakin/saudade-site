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
        <section className="max-w-5xl mx-auto my-16 px-4">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-amber-500 inline-block fade-slide fade-delay-7">
            Next Event
          </h2>
          <div className="fade-slide fade-delay-8">
            <EventCard {...nextEvent} />
          </div>
        </section>
      )}
    </>
  );
}
