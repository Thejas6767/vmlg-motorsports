export interface Sponsor {
  id: number;
  name: string;
  logo: string;
  tier: "title" | "official" | "partner";
}

export const sponsors: Sponsor[] = [
  {
    id: 1,
    name: "VMLG",
    logo: "",
    tier: "title",
  },
  {
    id: 2,
    name: "Official Partner",
    logo: "",
    tier: "official",
  },
  {
    id: 3,
    name: "Motorsport Partner",
    logo: "",
    tier: "partner",
  },
  {
    id: 4,
    name: "Official Sponsor",
    logo: "",
    tier: "partner",
  },
  {
    id: 5,
    name: "Racing Partner",
    logo: "",
    tier: "partner",
  },
];