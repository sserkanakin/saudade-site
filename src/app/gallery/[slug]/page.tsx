// src/app/gallery/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { galleryOverview, galleryDetails } from "@/data/gallery";
import { EmbedPlayer } from "@/components/EmbedPlayer";

interface Props {
  params: { slug: string };
}

export default function GalleryPage({ params: { slug } }: Props) {
  const overview = galleryOverview.find((g) => g.slug === slug);
  const detail = galleryDetails[slug];

  if (!overview || !detail) {
    notFound();
  }

  return (
    <section className="content-section single-gallery">
      <h2 className="section-title">{detail.title}</h2>
      <p className="event-date-venue">
        {detail.date}
        {detail.venue ? ` | ${detail.venue}` : ""}
      </p>

      {detail.embedUrl && (
        <div className="set-recording">
          <h3>Listen Back</h3>
          <EmbedPlayer url={detail.embedUrl} />
        </div>
      )}

      <div className="photo-grid">
        <h3>Photos</h3>
        <div className="grid-container">
          {detail.photos.map((src, i) => (
            <img key={i} src={src} alt={`${detail.title} photo ${i + 1}`} />
          ))}
        </div>
      </div>

      <div className="back-to-gallery">
        <Link
          href="/gallery"
          className="event-link inline-block font-bold text-amber-500 hover:text-amber-700 transition"
        >
          ← Back to All Galleries
        </Link>
      </div>
    </section>
  );
}
