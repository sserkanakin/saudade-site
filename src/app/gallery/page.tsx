import { galleryOverview } from "@/data/gallery";
import { GalleryGrid } from "@/components/GalleryGrid";

export default function GalleryPage() {
  return (
    <section className="content-section">
      <h2 className="section-title">Event Galleries</h2>
      <GalleryGrid items={galleryOverview} />
    </section>
  );
}
