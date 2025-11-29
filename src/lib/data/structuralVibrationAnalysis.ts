export const structralFaqs = [
  {
    q: "What is used for vibration analysis of a structure?",
    a: " Generally, experts use sensors such as accelerometers and vibration analyzers. These tools measure movement, frequency, and energy to detect how the structure is behaving under load or during operation.",
  },
  {
    q: "What are structural vibrations?",
    a: "Structural vibrations are the repetitive motions of a structure caused by forces like machinery, wind, or loads. If uncontrolled, they can lead to wear, cracks, or even structural damage over time.",
  },
  {
    q: "What is the ISO standard for structural vibration?",
    a: " The commonly used standard is ISO 10816 and its updated version, ISO 20816, which provide guidelines for evaluating vibration levels in machines and structures to ensure safety and reliability.",
  },
  {
    q: "What is the method of vibration analysis?",
    a: "It typically involves placing sensors on the structure, collecting vibration data, and analyzing it using specialised software. The results help identify issues like resonance, imbalance, or looseness in structures or machine components.",
  },
];

interface properties {
  title: string;
  text: string;
  bullets?: string[];
}
export const structureProperty: properties[] = [
  {
    title: "Identify resonance and fatigue issues",
    text: "Structural Vibration Analysis detects abnormal vibration frequencies that lead to fatigue failure, cracks, structural degradation over time, and enhances the system's reliability.",
  },
  {
    title: "Optimise Design and Modifications",
    text: "Engineers use this vibration data to improve structural designs and for easy modifications. This ensures the system stays robust and compliant with operating conditions. ",
  },
  {
    title: "Enhances equipment Life",
    text: " Reducing vibration in equipment and structures helps avoid fatigue and stress, prolonging the operational life of the equipment, piping, and structural components.",
  },
  {
    title: "Improves Safety Compliance",
    text: " Adhering to safety systems and standards is critical to meet industrial regulatory requirements. This enhances safety compliance and provides improved safety to assets and personnel. ",
  },
];

interface name {
  title: string;
  text?: string;
}
export const structralName: name[] = [
  {
    title:
      "Protect the integrity of your infrastructure with expert structural vibration analysis",
    text: "Connect now",
  },
];
  interface listmodel {
    img?: string;
    title?: string;
    text?: string;
  }
export const svalists: listmodel[] = [
  {img:"/assets/logo/earlyfault.svg",
    title: "Early fault detection",
    text: ` Identifies abnormal vibrations caused by fatigue, imbalance, looseness, or misalignment before they escalate to shutdown or failure..
`,
  },
  {img:"/assets/logo/structuralintegrity.svg",
    title: "Structural Integrity",
    text: `Enhances and improves durability of frames, supports, and foundations under dynamic loads.
`,
  },
  {img:"/assets/logo/equipmentlife.svg",
    title: "Extended Equipment Life",
    text: `Regular maintenance and inspection reduce wear and tear by avoiding vibration-caused stress on machinery and components.

`,
  },
  {img:"/assets/logo/costeffective.svg",
    title: "Cost-effective",
    text: ` Timely maintenance planning minimises unplanned downtime, costly breakdowns, repairs, or replacements, helping save costs in the long run.
`,
  },
  {img:"/assets/logo/safetysecurity.svg",
    title: "Safety and Security",
    text: `Prevents catastrophic failures by ensuring structures operate within safe vibration limits.`,
  },
  {img:"/assets/logo/energyefficency.svg",
    title: "Energy efficiency",
    text: `Ensures equipment operates smoothly, improving energy efficiency and productivity, through which the industries can optimise their performance.
`,
  },
];

interface navitems {
  href: string;
  text: string;
}
export const SVAitems: navitems[] = [
  { href: "#what-is", text: "What Is Structural Vibration Analysis " },
  { href: "#advanced-structural-vibration-analysis", text: "Advanced Structural Vibrational analysis" },
  { href: "#benefits", text: "Benefits Of Structural Vibration Analysis" },
  { href: "#why-choose-us", text: "Why Choose Us" },
];