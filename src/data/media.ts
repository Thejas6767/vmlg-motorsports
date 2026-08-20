export type MediaType = "image" | "video";

export interface MediaItem {
  id: number;
  title: string;
  category: string;
  type: MediaType;
  image: string;
}

export const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: "Race Day",
    category: "EVENT",
    type: "image",
    image: "Screenshot 2026-08-19 175240.jpg",
  },
  {
    id: 2,
    title: "Track Action",
    category: "RACING",
    type: "image",
    image: "Screenshot 2026-08-19 175320.jpg",
  },
  {
    id: 3,
    title: "Championship",
    category: "CHAMPIONSHIP",
    type: "image",
    image: "Screenshot 2026-08-19 175341.jpg",
  },
  {
    id: 4,
    title: "Motorsport",
    category: "VMLG",
    type: "image",
    image: "Screenshot 2026-08-19 175359.jpg",
  },
  {
    id: 5,
    title: "Race Highlights",
    category: "VIDEO",
    type: "video",
    image: "hero.png",
  },
];