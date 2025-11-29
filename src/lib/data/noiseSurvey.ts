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
interface cardMain {
  cardHeader: string;
}

export const noiceCardMain: cardMain[] = [
  {
    cardHeader: "Advantages of Environmental Noise Surveys and Monitoring",
  },
];

export const noiceCardData: cardData[] = [
  {
    cardNo: "01",
    cardtitle: " Regulatory Compliance",
    cardText: `Ensures adherence to local and international environmental noise regulations.
`,
  },
  {
    cardNo: "02",
    cardtitle: " Health Protection ",
    cardText: `Reduces risks of stress, sleep disturbance, and long-term hearing damage for communities.

`,
  },
  {
    cardNo: "03",
    cardtitle: "Community Relations",
    cardText: ` Minimizes complaints by identifying and addressing nuisance noise sources.

`,
  },
  {
    cardNo: "04",
    cardtitle: "Urban and Industrial Planning",
    cardText: ` Provides data for zoning, infrastructure development, and noise mitigation strategies.


`,
  },
  {
    cardNo: "05",
    cardtitle: "Trend Analysis",
    cardText: `Enables organizations to track noise levels over time and take proactive measures.


`,
  },
  {
    cardNo: "06",
    cardtitle: "Sustainability Goals",
    cardText: `Supports corporate environmental responsibility and contributes to reducing overall noise pollution.


`,
  },
];

interface properties {
  title: string;
  text: string;
  bullets?: string[];
}
export const noiseProperty: properties[] = [
  {
    title: "Spot Noise Measurements",
    text: `It captures the noise level at a specific location and moment in time.`,
  },
  {
    title: "Continuous Noise Measurements",
    text: ` Records noise levels continuously over a set duration to evaluate variations.`,
  },
  {
    title: " Equivalent Continuous Noise Level",
    text: `  Represents the average noise energy over the measuring period.
`,
  },
  {
    title: "Maximum and Peak Noise Levels",
    text: `The highest sound level recorded during the survey.`,
  },
  {
    title: "Statistical Noise Levels",
    text: `Describe noise exceeded for 10, 50, and 90 percent of the time, denoting fluctuating and background levels.`,
  },
  {
    title: "Time-Weighted Average Noise (TWA)",
    text: `The average exposure of a person to noise during a standard work shift. 
`,
  },
  {
    title: "Octave Band or Frequency Analysis",
    text: ` Breaks noise into frequency bands to find dominant sources and plan control measures.
`,
  },
];

interface name {
  title: string;
  text?: string;
}

export const noiceFaqs = [
  {
    q: "What is Leq in a noise survey?",
    a: "  Leq (Equivalent Continuous Noise Level) is the average noise level measured over a specific period, representing the overall noise exposure.",
  },
  {
    q: " How often should noise surveys be conducted?",
    a: " Surveys should be conducted regularly, especially when new equipment is introduced, processes change, or community complaints arise.",
  },
  {
    q: "What are the benefits of conducting an environmental noise survey?",
    a: "  It ensures compliance, protects public health, reduces complaints, and assists in effective planning and noise management.",
  },
  {
    q: "What are the risks of ignoring occupational noise surveys?",
    a: " Failure to monitor workplace noise can lead to noise-induced hearing loss, employee health issues, legal non-compliance, and increased liabilities.",
  },
  {
    q: "Who should conduct a noise survey?",
    a: " Qualified professionals or accredited consultants with experience in noise monitoring and assessment should conduct the survey.",
  },
];

interface navitems {
  href: string;
  text: string;
}
export const noiceitems: navitems[] = [
  { href: "#what-is", text: "What is ENS? " },
  { href: "#type-of-noise-survey", text: "Types" },
  {
    href: "#advantages",
    text: "Advantages of ENS",
  },
  {
    href: "#why-choose-us",
    text: "Why Choose Us",
  },
];
