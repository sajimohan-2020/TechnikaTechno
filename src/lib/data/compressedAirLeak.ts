

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

  export const compressionAirLeakCardMain: cardMain[] = [
    {
      cardHeader: "Steps in Ultrasonic Compressed Air Leak Testing",
      
    },
  ];

  export const compressionAirLeakCardData: cardData[] = [
    {
      cardNo: "01",
      cardtitle: "  Planning",
      cardText: `Organize measurement points and plan inspection routes using a modular web or software tool.

  `,
    },
    {
      cardNo: "02",
      cardtitle: "  Inspection",
      cardText: `Follow the planned routes to carry out the test using the appropriate ultrasonic application.

  `,
    },
    {
      cardNo: "03",
      cardtitle: " Recording Ultrasonic Signals",
      cardText: `Capture broadband ultrasonic signals in the 20 kHz to 100 kHz frequency range for accurate detection.
`,
    },
    {
      cardNo: "04",
      cardtitle: " Documentation",
      cardText: `Attach photos, videos, voice memos, and text notes to each measurement point for detailed records.

             `,
    },
    {
      cardNo: "05",
      cardtitle: "Trend & Analysis",
      cardText: `Evaluate collected data using thresholds, alarm levels, status indicators, and trend analysis in the software.
  
             `,
    },
    {
      cardNo: "06",
      cardtitle: " Reporting",
      cardText: `Generate professional PDF reports directly from the system for easy sharing and record-keeping.
  
             `,
    },
  ];

    export const compressionAirLeakFaqs = [
  {
    q: "How much does an air leak test cost?",
    a: "The cost depends on the size of your facility and the scope of the audit. In most cases, the savings from  fixing leaks are greater than testing cost.",
  },
  {
    q: "How do you detect a compressed air leak?",
    a: "We use ultrasonic detectors and acoustic cameras that identify high-frequency sounds produced by leaks to detect compressed air leaks",
  },
  {
    q: "How do you test for a leak in an air compressor?",
    a: "Our technicians perform a full system survey — from compressors to pipelines and end-use equipment — to detect leaks without interrupting operations.",
  },
  {
    q: "How much does compressed air leakage cost?",
    a: " A single 3 mm leak can waste thousands of dirhams annually. Multiple leaks in a facility can add up to 30–40% of the total compressed air output being lost.",
  },
];

interface navitems {
  href: string;
  text: string;
}
export const compressionAirLeak: navitems[] = [
  { href: "#what-is", text: "What Is Compression Air Leak?"},
  { href: "#scope", text: "Scope" },
  { href: "#steps", text: "Steps" },
  { href: "#why-choose-us", text: "Why Choose Us" },
];