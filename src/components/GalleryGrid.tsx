import { GalleryOverviewItem } from "@/data/gallery";
import { GalleryItem } from "./GalleryItem";

interface Props {
  items: GalleryOverviewItem[];
}

export function GalleryGrid({ items }: Props) {
  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <GalleryItem key={item.slug} item={item} />
      ))}
    </div>
  );
}
