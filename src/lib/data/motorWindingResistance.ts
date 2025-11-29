interface navitems {
  href: string;
  text: string;
}
export const motorWindingResistance : navitems[] = [
  { href: "#what-is", text: "What Is MWR"},
  { href: "#steps", text: "Steps Of MWR" },
  { href: "#why-choose-us", text: "Why Choose Us" },
  { href: "#faqs", text: "FAQS" },
];

export interface cardMain {
  cardHeader: string;
  cardPara?: string;
}
export interface cardData {
  cardNo: string;
  cardtitle: string;
  cardText?: string;
  cardText2?: string;
  bullet?: points[];
  tables?:tables[];
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

  export const motorWindingResistanceCardMain: cardMain[] = [
    {
      cardHeader: "Steps of a Motor Winding Resistance Test",
      cardPara:"At assetconditionmonitoring.com, we help industries protect their investments with accurate and professional motor testing services.",
     
    },
  ];

  export const motorWindingResistanceCardData: cardData[] = [
    {
      cardNo: "01",
      cardtitle: "Visual Inspection",
      cardText: `Check for visible damage, overheating, or corrosionc
  `,
    },
    {
      cardNo: "02",
      cardtitle: "Continuity Check ",
      cardText: `Ensure each winding is electrically continuous.

  `,
    },
    {
      cardNo: "03",
      cardtitle: "Insulation Resistance Test",
      cardText: `Assess insulation condition between windings and ground.
`,
    },
    {
      cardNo: "04",
      cardtitle: "Resistance Measurement",
      cardText: ` Measure winding resistance phase-to-phase (U-V, V-W, W-U) using precision low-ohm meters.
             `,
    },
    {
      cardNo: "05",
      cardtitle: "Temperature Correction",
      cardText: `Adjust readings to reference temperature (20 °C or 75 °C).
  
             `,
    },
    {
      cardNo: "06",
      cardtitle: " Analysis & Reporting",
      cardText: ` Compare resistance across phases (imbalances > 2–3% may indicate faults) and deliver a full diagnostic report.

             `,
    },
  ];

  export const motorWindingResistanceFaqs = [
  {
    q: "How much resistance should a motor winding have?",
    a: "The resistance of a motor winding should always be a small, finite value , never zero. For small motors, it is usually in the range of a few ohms. For medium motors, it falls in the fraction of an ohm range. For large motors, it is typically in the milliohm range. Regardless of size, the winding resistances must be balanced across all phases within about 2 to 3%.",
  },
  {
    q: "What is the winding resistance test?",
    a: "A winding resistance test measures the electrical resistance of a motor’s windings (coils) to check their condition",
  },
  {
    q: "What is the winding resistance of a 7.5 kW motor?",
    a: "In general, 7.5 kW motors have low winding resistance, typically ranging from a few milliohms to a few ohms. For three-phase motors, all windings should be nearly equal, with deviations kept within 2–3%, ensuring balanced performance and safe operation.",
  },
  {
    q: "How many ohms is a 3-phase motor?",
    a: "A three-phase motor winding normally has 5 to 50 ohms, depending on the power and design of the motor.",
  },
];