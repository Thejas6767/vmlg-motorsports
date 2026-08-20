export interface MotorsportVideo {
  id: number;
  title: string;
  category: string;
  description: string;
  video: string;
  poster: string;
}

export const motorsportVideos: MotorsportVideo[] = [
  {
    id: 1,
    title: "RACE DAY",
    category: "EVENT HIGHLIGHTS",
    description:
      "Experience the speed, skill and intensity of VMLG motorsport.",
    video: "/src/assets/videos/13820397_1920_1080_120fps.mp4",
    poster: "/src/assets/hero.png",
  },
];