import Link from "next/link";
import { GalleryOverviewItem } from "@/data/gallery";

interface Props {
  item: GalleryOverviewItem;
}

export function GalleryItem({ item }: Props) {
  return (
    <Link
      href={`/gallery/${item.slug}`}
      className="group relative block overflow-hidden rounded-lg shadow-lg"
    >
      <img
        src={item.thumbnail}
        alt={`${item.title} thumbnail`}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div
        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900/90 to-gray-900/0 p-4 text-gray-100 opacity-0 translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
      >
        <div className="font-bold">{item.title}</div>
        <div className="text-sm text-gray-400">{item.date}</div>
      </div>
    </Link>
  );
}
