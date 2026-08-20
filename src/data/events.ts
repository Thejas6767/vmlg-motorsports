export interface EventData {
  round: string;
  title: string;
  location: string;
  date: string;
  description: string;
  image: string;
  status: "upcoming" | "completed";
}

export const upcomingEvent: EventData = {
  round: "ROUND 01",
  title: "VMLG MOTORSPORT EVENT",
  location: "India",
  date: "COMING SOON",
  description:
    "Experience the next chapter of VMLG motorsport with high-octane competition, precision and passion.",
  image: "",
  status: "upcoming",
};