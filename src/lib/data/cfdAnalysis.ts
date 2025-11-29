  export const cfdAnalysisFaqs = [
  {
    q: "What can CFD simulations analyze?",
    a: " CFD can analyze fluid flow, heat transfer, pressure distribution, turbulence, combustion, multiphase flows, and aerodynamics.",
  },
  {
    q: " How accurate are CFD results?",
    a: " CFD provides highly accurate results when supported with correct input data, boundary conditions, and mesh quality, often validated against experimental or real-world data.",
  },
  {
    q: " What software is commonly used for CFD?",
    a: " Popular CFD software includes ANSYS Fluent, OpenFOAM, COMSOL Multiphysics, STAR-CCM+, and Autodesk CFD.",
  },
  {
    q: "Why is CFD important in product design?",
    a: " CFD reduces the need for costly prototypes, accelerates product development, and ensures designs meet performance and safety standards before real-world application.",
  },
  {
    q: "Can CFD simulate both gases and liquids?",
    a: " Yes, CFD can simulate the flow of gases, liquids, and even multiphase systems e.g., gas-liquid mixtures, particle-fluid interactions",
  },
];

interface navitems {
  href: string;
  text: string;
}
export const cfdAnalysis: navitems[] = [
  { href: "#what-is", text: "What Is CFD"},
  { href: "#cfd-services", text: "CFD Services" },
  { href: "#why-choose-us", text: "Why Choose Us" },
  { href: "#faqs", text: "FAQS" },
];