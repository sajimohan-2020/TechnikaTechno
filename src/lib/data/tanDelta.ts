interface listmodel {
  img?: string;
  title?: string;
  text?: string;
}

export const tanDeltaLists: listmodel[] = [
  {
    img: "/assets/logo/earlyfault.svg",
    title: "Early fault Detection",
    text: `TD testing detects moisture content, any contamination, and insulation wear early, before any failure sets in.
`,
  },
  {
    img: "/assets/logo/non-destructive testing.svg",
    title: "Non-destructive testing",
    text: `TD testing is generally done at lower frequencies and controlled coltages to prevent equipment damage.
`,
  },
  {
    img: "/assets/logo/equipmentlife.svg",
    title: "Trend Analysis",
    text: `Tan Delta testing gives deterioration patterns when testing the results at normal and elevated voltages.
`,
  },
  {
    img: "/assets/logo/costeffective.svg",
    title: "Cost Savings",
    text: `Tan Delta Testing aids in planning maintenance schedules and avoiding unplanned outages.
`,
  },
  {
    img: "/assets/logo/safetysecurity.svg",
    title: "Extended asset life",
    text: `TD testing ensures safe operating conditions for heavy-volt assets and extends the asset life.
`,
  },
  {
    img: "/assets/logo/energyefficency.svg",
    title: "Improved precision",
    text: `TD testing picks up the slightest changes in insulation properties and gives improved protection and precision.
`,
  },
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

  export const tanDeltaCardMain: cardMain[] = [
    {
      cardHeader: "Process of Tan Delta Testing",
      cardPara:"Tan Delta testing is a reliable diagnostic method that must be carried out with precision, calibrated equipment, and strict adherence to international testing standards to ensure accurate results and maintain insulation health. The following are the processes involved in the Tan Delta Test:"
     
    },
  ];

  export const tandeltaCardData: cardData[] = [
    {
      cardNo: "01",
      cardtitle: " Preparation of Equipment",
      cardText: `Before the insulation is assessed, the cable, potential transformer, bushings, current transformer, and winding are properly disconnected from the rest of the system.
  `,
    },
    {
      cardNo: "02",
      cardtitle: " Apply Test Voltage",
      cardText: `Start the evaluation using the lowest frequency level of test voltage on the equipment whose insulation is being assessed.
  `,
    },
    {
      cardNo: "03",
      cardtitle: " Initial measurement at normal Voltage",
      cardText: `Set the equipment to its specified operating voltage. Capture the tan delta readings at this voltage using the tan delta controller. This will act as the initial reference measurement.
`,
    },
    {
      cardNo: "04",
      cardtitle: " Increase to High Voltage",
      cardText: `Increase the voltage applied between 1.5 and 2 times the typical operating voltage to evaluate the insulation being tested.
             `,
    },
    {
      cardNo: "05",
      cardtitle: "Data comparison and Analysis",
      cardText: `Use a loss angle analyzer to check the tan delta values from the normal voltage test (Step 3) against those from the high voltage test (Step 5). If the values remain steady, the insulation is likely in good shape. However, if the values go up significantly at higher voltage, it may indicate that the insulation is deteriorating.
  
             `,
    },
  ];

    export const tanDeltaFaqs = [
  {
    q: "What does a Tan Delta test reveal?",
    a: " A Tan Delta test reflects the health of electrical insulation by comparing the leakage current against the ideal capacitive current.",
  },
  {
    q: "How is Tan Delta testing different from Hipot testing?",
    a: " Hipot testing provides a simple pass/fail result to verify whether insulation can withstand a high voltage. In contrast, Tan Delta testing evaluates insulation performance in detail, including aging, deterioration, and moisture presence.",
  },
  {
    q: " How is Tan Delta measured?",
    a: "Tan Delta is measured by applying a controlled voltage to the insulation using dedicated test instruments and recording the dissipation factor, also known as the loss angle.",
  },
  {
    q: "How are Tan Delta results interpreted?",
    a: " Stable Tan Delta readings across different test voltages indicate sound insulation. Increasing values with rising voltage suggest insulation deterioration, moisture ingress, or contamination.",
  },
];

interface navitems {
  href: string;
  text: string;
}
export const tanDelta: navitems[] = [
  { href: "#what-is", text: "What Is Tan Delta?"},
  { href: "#purpose-of-tan-delta", text: "Purpose of Tan Delta" },
  { href: "#process-of-tan-delta", text: "Process of Tan Delta" },
  { href: "#why-choose-us", text: "Why Choose Us" },
];