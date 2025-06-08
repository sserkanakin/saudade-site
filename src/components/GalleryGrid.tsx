import { GalleryOverviewItem } from "@/data/gallery";
import { GalleryItem } from "./GalleryItem";

interface Props {
  items: GalleryOverviewItem[];
}

export function GalleryGrid({ items }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {items.map((item) => (
        <GalleryItem key={item.slug} item={item} />
      ))}
    </div>
  );
}
