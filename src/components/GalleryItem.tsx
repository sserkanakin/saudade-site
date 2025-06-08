import Link from "next/link";
import { GalleryOverviewItem } from "@/data/gallery";

interface Props {
  item: GalleryOverviewItem;
}

export function GalleryItem({ item }: Props) {
  return (
    <Link
      href={`/gallery/${item.slug}`}
      className="gallery-item block overflow-hidden rounded-lg shadow-lg"
    >
      <img
        src={item.thumbnail}
        alt={`${item.title} thumbnail`}
        className="gallery-thumbnail"
      />
      <div className="gallery-item-overlay">
        <div className="gallery-item-title">{item.title}</div>
        <div className="gallery-item-date">{item.date}</div>
      </div>
    </Link>
  );
}
