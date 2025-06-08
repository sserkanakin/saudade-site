import Link from "next/link";
import { Event } from "@/data/events";

export function EventCard({ title, date, venue, description, cta }: Event) {
  const disabled = cta.disabled ? "pointer-events-none opacity-70" : "";
  return (
    <div
      className="relative bg-gray-800 border-l-4 border-amber-600 p-6 rounded-lg shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
    >
      <h3 className="text-2xl font-bold text-gray-100 mb-3">{title}</h3>
      <p className="text-gray-400 italic mb-4">
        <span>{date}</span> | <span>{venue}</span>
      </p>
      <p className="text-gray-300 leading-relaxed mb-6 max-w-prose">
        {description}
      </p>
      <div className="flex gap-4">
        {cta.href.startsWith("http") || cta.href.startsWith("/") ? (
          <Link
            href={cta.href}
            className={`bg-amber-600 text-gray-900 font-bold px-6 py-2 rounded-full transition hover:bg-amber-700 ${disabled}`}
          >
            {cta.label}
          </Link>
        ) : (
          <span className="bg-gray-600 text-gray-300 font-bold px-6 py-2 rounded-full cursor-not-allowed opacity-70">
            {cta.label}
          </span>
        )}
      </div>
    </div>
  );
}
