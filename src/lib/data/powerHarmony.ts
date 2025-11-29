
interface properties {
  title: string;
  text: string;
  bullets?: string[];
}
export const powerHarmonyProperty: properties[] = [
  {
    title: "Prevent Equipment Overheating",
    text: "Reduces excessive heating in transformers, cables, and other components that can lead to failures",
  },
  {
    title: "Avoid System Malfunctions",
    text: " Distorted waveforms can disrupt sensitive equipment, causing operational issues. ",
  },
  {
    title: "Minimize Energy Losses ",
    text: "Harmonics increase internal energy losses, reducing overall efficiency.",
  },
  {
    title: "Prevent False Tripping",
    text: " Harmonic distortion can trigger protective devices unnecessarily, leading to downtime. ",
  },
  {
    title: "Enhance Overall Power Quality",
    text: " Identifying and mitigating harmonics stabilizes voltage and current, improving reliability across the system ",
  },
];

interface navitems {
  href: string;
  text: string;
}
export const powerAndHarmony: navitems[] = [
  { href: "#why-is", text: "Why is Power Quality & Harmonic Analysis"},
  { href: "#importance", text: "Importance" },
  { href: "#key-services", text: "Key Services" },
  { href: "#why-choose-us", text: "Why Choose Us" },
];