export const irResistanceFaqs = [
  {
    q: "What is the IR and PI value?",
     points: [
      {
        b1:"IR (Insulation Resistance):",
        b1text: " Resistance measured between conductors and ground, indicating insulation quality.",
        b2:"PI (Polarization Index):",
        b2text: "Ratio of 10-minute to 1-minute IR readings, assessing long-term insulation health.",
      },
    ],
    },
  {
    q: "What is an acceptable PI value?",
   points: [
      {
        b1:"PI > 2.0 → ",
        b1text: " Good insulation",
        b2:"PI 1.0–2.0 → ",
        b2text: "Marginal; may require maintenance",
        b3:"PI < 1.0 →  ",
        b3text: "Poor insulation; unsafe",
      },
    ],
  },
  {
    q: "What is a good PI reading on a motor?",
    points: [
      {
        b1:"Above 2.0 →",
        b1text: " Healthy insulation",
        b2:"Below 2.0 → ",
        b2text: "Possible moisture, dirt, or insulation deterioration",
      },
    ],
  },
  {
    q: "What is a good IR value?",
    points: [
      {
        b1:"Low-voltage systems:",
        b1text: ">1 MΩ",
        b2:"Medium/high-voltage equipment: ",
        b2text: "(kV + 1) MΩ",
      },
    ],
  },
  {
    q: "What is the purpose of IR and PI testing?",
    points: [
      {
        b1:"Evaluate insulation integrity",
        b2:"Detect moisture, dirt, or aging",
        b3: " Prevent electrical failures and safety hazards",
      },
    ],
  },
];

interface navitems {
  href: string;
  text: string;
}
export const irPr: navitems[] = [
  { href: "#what-is", text: "What Is IR"},
  { href: "#what-is-pi", text: "What is PI Resistance" },
  { href: "#why-choose-us", text: "Why Choose US" },
    { href: "#faqs", text: "FAQS" },
];