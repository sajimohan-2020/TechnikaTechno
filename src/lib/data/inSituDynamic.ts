interface cardMain {
  cardHeader: string;
  cardPara?: string;
}
interface cardData {
  cardNo: string;
  cardtitle: string;
  cardText?: string;
  cardText2?: string;
  bullet?: points[];
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
export const inSituCardMain: cardMain[] = [
  {
    cardHeader:
      "How We Do In-Situ Dynamic  Balancing at AssetConditionMonitoring",
  },
];

export const inSituCardData: cardData[] = [
  {
    cardNo: "01",
    cardtitle: " First assessment",
    cardText: `At first, our team of trained experts assesses the work site to understand the actual condition of the equipment. They perform a basic inspection and vibration analysis to find imbalance-based issues and determine the scope of work.
`,
  },
  {
    cardNo: "02",
    cardtitle: "Measurement and Analysis",
    cardText: `In the second phase, we use the latest vibration analysers or portable balancers to give us the vibration levels and other important data, such as amplitude, frequency, and phase details. These data are recorded and analysed to locate exact areas or the severity of imbalances.
`,
  },
  {
    cardNo: "03",
    cardtitle: "Correction",
    cardText: `In the next stage, based on the measurements, our technicians appropriately balance the equipment by either adding, removing, or shifting weights using clamp-on, adhesive, or weld-on weights to bring back the desired balance to the rotating components.
`,
  },
  {
    cardNo: "04",
    cardtitle: "Very and Adjustment",
    cardText: `After correction, the vibration levels are again measured to confirm desirable results. If needed, further adjustments are made until vibration levels are within the acceptable range. This provides double assurance for the precision and proper performance of the equipment.
`,
  },
  {
    cardNo: "05",
    cardtitle: " Documenting and Reporting",
    cardText: `The complete procedure is documented from the initial assessment to the final vibration readings. Additionally, the corrective actions and maintenance recommendations are also clearly provided. These reports aid in future maintenance and improve machine reliability. 
`,
  },
];

export const inSituFaqs = [
  {
    q: " What is In-Situ Balancing?",
    a: `In-situ Dynamic Balancing is a process of correcting the imbalances in rotating machinery on-site while the machinery is installed and operational. This is particularly beneficial as there is no need for dismantling and transporting the equipment, which prevents downtime.`,
  },
  {
    q: " Is dynamic balancing important?",
    a: "When an unbalanced rotating component operates, it causes excessive vibrations, noise, wear, and may lead to partial or complete equipment failure. Dynamic balancing ensures imbalances are properly cleared and verified for smoother, more efficient operations and extended equipment life.",
  },
  {
    q: "Which equipment can be balanced on-site?",
    a: "Generally, machinery such as motors, pumps, rotors, fans, compressors, turbines, blowers, drive shafts, and couplings, etc, can be balanced on-site. Most rotating components that are accessible and can be safely operated on-site can be dynamically balanced.",
  },
  {
    q: " How is in-situ balancing performed?",
    a: "Technicians use portable balancing instruments and tools to measure vibration and phase data while in operation. Counterweights or adjustments are then given to correct the imbalance directly at the site.",
  },
  {
    q: "Is it safe to perform balancing without removing the machine?",
    a: "Yes. In-situ balancing is performed under strict safety protocols and is only carried out when the equipment can be operated under controlled, safe conditions during testing.",
  },
  {
    q: "How often should equipment be dynamically balanced?",
    a: "There’s no fixed interval. It depends on usage, wear, and operating conditions. But regular condition monitoring can help understand when balancing is needed.",
  },
];

interface bulletsSentence {
  title?: string;
  paragraph?: string;
  text?: string;
  bullets?: string[];
}
export const insituBulletins: bulletsSentence[] = [
  {
    title: ` In-situ dynamic balancing on components
`,
    paragraph: `
Our on-site dynamic balancing services are all-inclusive and cover a broad spectrum of rotating components. The balancing services we provide cater to a wide range of rotating machinery, including the following and more:
`,
    text: `We make sure each component is precisely balanced to improve machine performance, prevent unwanted vibrations, and extend your assets' operational life.`,
    bullets: [
      " Electrical Motors and Engines",
      " Industrial Centrifuges",
      " Fans and Air Blowers",
      "Pumps and Mechanical Compressors",
      " Steam & Gas Turbines, as well as Power Generators",
      "HVAC systems and chiller components",
      "Pulleys, flywheels, and rotors",
    ],
  },
];

interface navitems {
  href: string;
  text: string;
}
export const inSituitems: navitems[] = [
  { href: "#what-is", text: "What Is In-situ Balancing"},
  { href: "#procedures", text: "Procedures in In-situ Balancing" },
  { href: "#benefits", text: "Benefits Of In-situ Balancing" },
  { href: "#why-choose-us", text: "Why Choose Us" },
];