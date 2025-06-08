// src/data/gallery.ts

export interface GalleryOverviewItem {
    slug: string
    title: string
    date: string
    thumbnail: string
  }
  
  // Two overview items from gallery.html :contentReference[oaicite:8]{index=8}:contentReference[oaicite:9]{index=9}
  export const galleryOverview: GalleryOverviewItem[] = [
    {
      slug: "saudade-launch-night",
      title: "Saudade Launch Night",
      date: "May 10th, 2025",
      thumbnail: "/assets/images/test-event-pic.JPG",
    },
    {
      slug: "chaos-collaboration",
      title: "Chaos Collaboration",
      date: "April 4th, 2025",
      thumbnail: "/assets/images/test-event-pic.JPG",
    },
  ]
  
  export interface GalleryDetail {
    title: string
    date: string
    venue?: string
    photos: string[]
  }
  
  // Details for each gallery — based on test-gallery-page.html :contentReference[oaicite:10]{index=10}:contentReference[oaicite:11]{index=11}
  export const galleryDetails: Record<string, GalleryDetail> = {
    "saudade-launch-night": {
      title: "Saudade Launch Night",
      date: "May 10th, 2025",
      venue: "Venue Name Placeholder",
      photos: Array(6).fill("/assets/images/test-event-pic.JPG"),
    },
    "chaos-collaboration": {
      title: "Chaos Collaboration",
      date: "April 4th, 2025",
      venue: "Venue Name Placeholder",
      photos: Array(6).fill("/assets/images/test-event-pic.JPG"),
    },
  }
  