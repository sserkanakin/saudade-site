// src/data/events.ts

export interface Event {
    title: string
    date: string
    venue: string
    description: string
    cta: { href: string; label: string; disabled?: boolean }
    past?: boolean
  }
  
  // — Upcoming + Past Events exactly as in events.html :contentReference[oaicite:0]{index=0}:contentReference[oaicite:1]{index=1}
  export const events: Event[] = [
    {
      title: "Summer Saudade Session",
      date: "Friday, May 29th, 2025",
      venue: "TBA, Enschede",
      description: "Welcoming summer with Saudade. More details coming soon!",
      cta: { href: "#", label: "Tickets Coming Soon", disabled: true },
      past: false,
    },
    {
      title: "The House Ritual",
      date: "Thursday, April 17th, 2025",
      venue: "5ifty7even, Enschede",
      description:
        "An intimate session diving deep into the rhythms of house music.",
      cta: { href: "/gallery/house-ritual", label: "View Gallery & Details" },
      past: true,
    },
    {
      title: "Saudade Launch Night",
      date: "Friday, February 28th, 2025",
      venue: "Het Laadperron, Enschede",
      description:
        "The night it all began! Featuring Sarp Onkahraman, Yigit Horasan and Hakan Yeginer. Thanks for joining us!",
      cta: { href: "/gallery/saudade-launch-night", label: "View Gallery & Details" },
      past: true,
    },
    {
      title: "Saudade: Bloom River",
      date: "Saturday, December 14th, 2024",
      venue: "Enschede",
      description: "A night of energetic beats.",
      cta: { href: "/gallery/saudade-bloom-river", label: "View Gallery & Details" },
      past: true,
    },
    {
      title: "Saudade: Red Sunshine",
      date: "Saturday, November 16th, 2024",
      venue: "Enschede",
      description: "Kicking things off. Thanks for joining us!",
      cta: { href: "/gallery/saudade-red-sunshine", label: "View Gallery & Details" },
      past: true,
    },
  ]
  