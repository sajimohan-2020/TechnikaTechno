interface listmodel {
  img?: string;
  title?: string;
  text?: string;
}

export const odsLists: listmodel[] = [
  {
    img: "/assets/logo/earlyfault.svg",
    title: "Visualises real-time vibration behaviour",
    text: ` ODS analysis gives a dynamic, visual representation of how structures or equipment vibrate while in actual operation, making complex issues easier to understand.

`,
  },
  {
    img: "/assets/logo/non-destructive testing.svg",
    title: "Accurate failure diagnosis",
    text: `By identifying abnormal patterns or deformations, ODS Analysis helps pinpoint the underlying issues and root causes, thereby improving reliability and preventing mechanical failures.
`,
  },
  {
    img: "/assets/logo/equipmentlife.svg",
    title: "Integrates Finite Element Models(FEM)",
    text: ` ODS readings can be directly compared with FEM simulated mode shapes, helping the engineer verify their structural models.

`,
  },
  {
    img: "/assets/logo/costeffective.svg",
    title: "Minimises unnecessary maintenance",
    text: `With clear ideas of the actual condition of the equipment or structure under analysis, unnecessary repairs or replacements can be avoided, saving time and cost.

`,
  },
  {
    img: "/assets/logo/safetysecurity.svg",
    title: "Supports Predictive Maintenance",
    text: `Combining ODS into a broader condition monitoring schedule supports predictive maintenance, preventing unplanned downtime and costly breakdowns.
`,
  },
  {
    img: "/assets/logo/energyefficency.svg",
    title: "Improves machinery performance and reliability",
    text: `The ODS results support efficient management of the issues and aid in corrective actions, supporting smoother operation, ensuring long-term efficiency and reliability.  `,
  },
];

export interface cardMain {
  cardHeader: string;
  cardPara?: string;
}
export interface cardData {
  cardNo: string;
  cardtitle?: string;
  cardText?: string;
  cardText2?: string;
  bullet?: points[];
  tables?: tables[];
}
interface points {
  b1?: string;
  b1text?: string;
  b2?: string;
  b2text?: string;
  b3?: string;
  b3text?: string;
  b4?: string;
  b4text?: string;
  b5?: string;
  b5text?: string;
  b6?: string;
  b6text?: string;
  b7?: string;
  b7text?: string;
  b8?: string;
  b8text?: string;
}
interface tables {
  th1: string;
  th2: string;
  td1: string[];
  td2: string[];
}

export const odsCardMain: cardMain[] = [
  {
    cardHeader: "How do we do the ODS Analysis Procedure?",
  },
];

export const odsCardData: cardData[] = [
  {
    cardNo: "01",
    cardText: `At assetconditionmonitoring.com, our team performs all-inclusive inspections and vibration testing throughout the critical points of the equipment that needs to be analyzed wholly.
  `,
  },
  {
    cardNo: "02",
    cardText: `The vibration and the phases are measured at every point of the equipment while it operates at its mechanical frequency.
  `,
  },
  {
    cardNo: "03",
    cardText: `Using advanced ODS analysis software, we accurately map these parameters to construct a realistic 3D model.

`,
  },
  {
    cardNo: "04",
    cardText: `The software then performs curve fitting and animates the deflection shapes to visualize the actual motion of the structure.
             `,
  },
  {
    cardNo: "05",
    cardText: `Abnormal vibration patterns are identified, analyzed, and presented in a detailed report, along with expert recommendations for corrective action.
  
             `,
  },
];

export const odsFaqs = [
  {
    q: "Is ODS or Modal Analysis a Non-Destructive Test (NDT)?",
    a: "  Yes, both are non-invasive and non-destructive methods. They do not damage the structure and are used only to measure and analyze vibrations.",
  },
  {
    q: "Why is ODS important?",
    a: "ODS helps identify vibration problems, resonance issues, looseness, or misalignment by visualizing how the structure actually moves."
  },
  {
    q: "Why is Modal Analysis important?",
    a: " Modal analysis is essential for design validation, troubleshooting structural issues, and ensuring systems avoid resonance during operation.",
  },
  {
    q: "Can ODS and Modal Analysis be used together?",
    a: " Yes. ODS provides real-world operational vibration patterns, while Modal Analysis explains the root cause by revealing the structure’s natural dynamic behavior.",
  },
  {
    q: "What tools are used for ODS and Modal Analysis?",
    a: " Accelerometers, impact hammers, shakers, and advanced vibration analysis software are commonly used.",
  },
  {
    q: "Which industries benefit from these techniques?",
    a: " Power plants, aerospace, automotive, heavy machinery, civil engineering (bridges, buildings), and rotating equipment industries.",
  },
  {
    q: "What are the advantages of ODS & Modal Analysis?",
    points: [
      {b1:"Non-destructive",},
      {b2:"Detect hidden structural issues",},
      {b3:"Improve design and reliability",},
      {b4:"Prevent costly failures by identifying problems early",},
    ],
  },
];

interface navitems {
  href: string;
  text: string;
}
export const ods: navitems[] = [
  { href: "#what-is", text: "What Is ODS?" },
  { href: "#ods-analysis-procedure", text: "ODS Analysis Procedures" },
  { href: "#ods-benefits", text: "Benefits of ODS" },
  { href: "#why-choose-us", text: "Why Choose Us" },
];
