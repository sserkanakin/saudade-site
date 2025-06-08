import Link from "next/link";
import { Event } from "@/data/events";

export function EventCard({ title, date, venue, description, cta }: Event) {
  return (
    <div className="event-listing">
      <h3 className="event-title">{title}</h3>
      <p className="event-date-venue">
        <span>{date}</span> | <span>{venue}</span>
      </p>
      <p className="event-description">{description}</p>
      <div className="event-links">
        {cta.href.startsWith("http") || cta.href.startsWith("/") ? (
          <Link
            href={cta.href}
            className={`event-ticket-button ${cta.disabled ? "disabled" : ""}`}
          >
            {cta.label}
          </Link>
        ) : (
          <span className="event-ticket-button disabled">{cta.label}</span>
        )}
      </div>
    </div>
  );
}
