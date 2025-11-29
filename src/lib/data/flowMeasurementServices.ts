
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

export const flowMeasurementsFaqs = [
  {
    q: "What is flow measurement in condition monitoring?",
    a: " Flow measurement involves tracking the movement of liquids, gases, or steam within pipelines and equipment. It helps identify inefficiencies, blockages, or leaks, ensuring machines operate at peak performance and preventing costly breakdowns.",
  },
  {
    q: "How do ultrasonic flow measurement services work?",
    a: " Ultrasonic flow meters use non-intrusive, clamp-on sensors to send and receive sound waves through the pipe. By measuring the time difference between upstream and downstream signals, they calculate flow velocity and volume accurately—without cutting pipes or interrupting operations.",
  },
  {
    q: "  What are the benefits of flow measurement services?",
    points: [
      {
        b1: "Detect inefficiencies, leaks, or blockages early",
        b2: "Improve energy efficiency and reduce operating costs",
        b3: "Support preventive maintenance and extend equipment lifespan",
        b4: "Provide accurate, real-time flow data for better decision making",
      },
    ],
  },
  {
    q: "Which industries benefit from flow measurement?",
    a: " Flow measurement is widely used in oil & gas, water treatment, HVAC, process manufacturing, power generation, and chemical industries, where accurate monitoring of liquids and gases is critical.",
  },
  {
    q: "How much do flow measurement services cost?",
    a: " The cost depends on factors such as the size of the system, type of fluid, pipe diameter, and whether the requirement is for temporary testing or permanent monitoring. While pricing varies, the return on investment comes quickly through energy savings and reduced downtime.",
  },
  {
    q: " Do I need to shut down my system for flow measurement?",
    a: "No. Ultrasonic clamp-on flow meters allow non-intrusive measurement without cutting pipes or stopping operations, making the process fast, safe, and cost-effective.",
  },
];

interface navitems {
  href: string;
  text: string;
}
export const flowMeasurements: navitems[] = [
  { href: "#what-is", text: "What Is UFM?" },
  { href: "#benefits", text: "Benefits" },
  { href: "#why-choose-us", text: "Why Choose Us" },
  { href: "#faqs", text: "FAQS" },
];
