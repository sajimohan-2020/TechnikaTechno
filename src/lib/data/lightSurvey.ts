interface navitems {
  href: string;
  text: string;
}
export const lightSurvey: navitems[] = [
  { href: "#what-is", text: "What Is Light Survey"},
  { href: "#what-are-the-process", text: "What are The Process" },
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

  export const lightSurveyCardMain: cardMain[] = [
    {
      cardHeader: "The Lighting Survey Process.",
     
    },
  ];

  export const lightSurveyCardData: cardData[] = [
    {
      cardNo: "01",
      cardtitle: "Site Survey",
      cardText: `A thorough evaluation of the existing lighting system is carried out, noting and documenting the fixture types, lamp watts, control systems, ceiling heights, and the area layout. This step is particularly very important because it lays out the picture of the operational environment and the specifics of the analysis site.
  `,
    },
    {
      cardNo: "02",
      cardtitle: "Lux Level Analysis",
      cardText: `Using specialized tools like light meters or lux meters, the technicians measure the intensity of light hitting the surface. These measurements are taken at certain points and compared with the standard levels to understand the deviations that may need corrective actions and ensure adequate lighting.

  `,
    },
    {
      cardNo: "03",
      cardtitle: "Uniformity Assessment",
      cardText: `This process is done to evaluate the consistency of lighting throughout the area. Irregular or inadequate lighting can cause glare, eye fatigue, and unsafe working conditions. Accurately measuring the light levels at specific areas helps identify over- or under-lit areas.
`,
    },
    {
      cardNo: "04",
      cardtitle: "Colour rendering evaluation",
      cardText: `It evaluates the ability of the lighting system to reproduce colours accurately. The colour rendering evaluation is measured using the Colour Rendering Index (CRI). This is crucial in areas where colour identification is critical, such as the aviation industry, the medical sector, design studios, or retail stores.
             `,
    },
    {
      cardNo: "05",
      cardtitle: "Glare or Shadow analysis",
      cardText: `The visibility and decision-making could be adversely affected by excessive glare or unwanted shadows. Glare and shadow analysis identify risky and challenging lighting angles or fixture placements and facilitate adjustments to improve visibility.
  
             `,
    },
    {
      cardNo: "06",
      cardtitle: " Energy Consumption Review",
      cardText: `The energy efficiency of the existing lighting system is analysed to look at the usage levels, patterns, and power ratings. By doing this review, the technicians can identify the weak spots and recommend ways to improve energy efficiency through LED upgrades, motion sensors, or daylight integration systems.
             `,
    },
    {
      cardNo: "07",
      cardtitle: "Compliance and standards check",
      cardText: `The lighting system must be compliant with the quality standard and compared with the regulatory guidelines, such as OSHA (Occupational Safety and Health Administration), EN 12464-1, or local building codes. This is crucial to ensure safety and legal compliance.
             `,
    },
    {
      cardNo: "08",
      cardtitle: "Reports and Recommendations",
      cardText: `The light survey is concluded by generating a thorough and complete report laying out the measurement data, findings, lux readings, compliance report, and actionable insights. This report also comprises fixture upgrades, layout redesigns, and energy-saving fittings as per the customer’s preferences.
             `,
    },
  ];

  export const lightSurveyFaqs = [
  {
    q: "What is a light survey?",
    a: "A light survey or lighting analysis is a thorough inspection of the lighting condition in an area, like offices, workplaces, onshore or offshore sites, etc. A lighting survey involves finding out how much light is present, how evenly it is distributed, if there are any blind spots or glares, and making sure it meets safety and performance standards.",
  },
  {
    q: "How to perform a light survey?",
    a: "Expert technicians initially gather information about the layout and the existing lighting system setup, like fixtures, lamp wattages, etc. After which, the lux readings are taken using light meters. These readings are compared to the desirable standards, and adjustments are then made. The process generally involves uniformity assessment, glare tests, and energy efficiency tests.",
  },
  {
    q: "How to conduct a light assessment?",
    a: "Conducting a light assessment involves evaluating the technical performance as well as the practical effectiveness of the lighting in a given area. It starts with documenting what’s currently installed and why. Next, you take measurements using specialized tools to determine if the lighting meets task-specific needs. The assessment finishes with a report that outlines problem areas and suggests improvements, like switching to LED fixtures or repositioning lights.",
  },
  {
    q: "How to conduct a light study?",
    a: "A light survey is an in-depth analysis done generally at the design planning or retrofitting stage.  It combines real lighting data with modeling tools to simulate different lighting scenarios. By collecting on-site measurements and inputting details into lighting design software. This allows for testing various layouts or fixture types before making changes, ensuring the new setup is efficient and reliable.",
  },
  {
    q: "What is the difference between light assessment and light study?",
    a: "A light assessment is the evaluation of the existing lighting setup, where measurements are taken on-site to check illumination levels, uniformity, and energy usage. It helps determine whether the current lighting meets safety, comfort, and compliance standards. On the other hand, a light study is done at the planning or designing phase, where the lighting setup is simulated before the installation. Light study is applicable in new construction and renovations to optimise fixture placement, light distribution, and energy efficiency. While assessments focus on current performance, studies are predictive and design-focused.",
  },
];