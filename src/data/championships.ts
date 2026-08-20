export interface Championship {
  id: number;
  name: string;
  season: string;
  description: string;
  image: string;
  rounds: number;
}

export const championships: Championship[] = [
  {
    id: 1,
    name: "VMLG CHAMPIONSHIP",
    season: "2026",
    description:
      "High-performance motorsport competition bringing together drivers, teams and racing enthusiasts.",
    image: "",
    rounds: 0,
  },
  {
    id: 2,
    name: "MOTORSPORT SERIES",
    season: "2026",
    description:
      "A competitive racing series built around speed, precision and the passion of motorsport.",
    image: "",
    rounds: 0,
  },
];