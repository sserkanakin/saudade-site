import { galleryOverview } from "@/data/gallery";
import { GalleryGrid } from "@/components/GalleryGrid";

export default function GalleryPage() {
  return (
    <section className="max-w-5xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold mb-8 border-b-2 border-amber-500 inline-block">
        Event Galleries
      </h2>
      <GalleryGrid items={galleryOverview} />
    </section>
  );
}
