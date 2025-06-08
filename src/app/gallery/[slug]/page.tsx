// src/app/gallery/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { galleryOverview, galleryDetails } from "@/data/gallery";
import { EmbedPlayer } from "@/components/EmbedPlayer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function GalleryPage({ params }: any) {
  const { slug } = params as { slug: string };
  const overview = galleryOverview.find((g) => g.slug === slug);
  const detail = galleryDetails[slug];

  if (!overview || !detail) {
    notFound();
  }

  return (
    <section className="max-w-5xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold mb-2 border-b-2 border-amber-500 inline-block">
        {detail.title}
      </h2>
      <p className="text-gray-400 italic mb-8">
        {detail.date}
        {detail.venue ? ` | ${detail.venue}` : ""}
      </p>

      {detail.embedUrl && (
        <div className="bg-gray-800 p-4 rounded-md mb-10 text-center">
          <h3 className="text-xl font-bold mb-4">Listen Back</h3>
          <EmbedPlayer url={detail.embedUrl} />
        </div>
      <div className="mb-10">
        <h3 className="text-xl font-bold text-center mb-6">Photos</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      <div className="text-center">
          className="inline-block font-bold text-amber-500 hover:text-amber-700 transition"
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
