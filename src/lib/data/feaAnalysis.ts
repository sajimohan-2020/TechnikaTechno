export const feaAnalysisFaqs = [
  {
    q: "How accurate is FEA?",
    a: " Accuracy depends on the quality of input data (material properties, loads, boundary conditions) and mesh refinement; validation with experimental or real-world data is often required.",
  },
  {
    q: " What is meshing in FEA?",
    a: " Meshing is the process of dividing a model into smaller finite elements; finer meshes usually increase accuracy but also increase computational cost.",
  },
  {
    q: "What are boundary conditions in FEA?",
    a: "Boundary conditions define how a structure is constrained or loaded (e.g., fixed supports, pressures, thermal gradients) to simulate real-life scenarios.",
  },
  {
    q: "What software is commonly used for FEA?",
    a: "Popular FEA software includes ANSYS, Abaqus, NASTRAN, COMSOL, and SolidWorks Simulation.",
  },
  {
    q: " What is the difference between linear and nonlinear FEA?",
    points: [
      {
        b1:"Linear FEA",
        b1text: " assumes small deformations, linear material properties, and proportional load response.",
        b2:"Nonlinear FEA",
        b2text: " accounts for large deformations, plasticity, contact, and other nonlinear behaviors.",
      },
    ],
  },
];

interface navitems {
  href: string;
  text: string;
}
export const cfdAnalysis: navitems[] = [
  { href: "#what-is", text: "What Is FEA"},
  { href: "#applications", text: "Applications" },
  { href: "#what-we-offer", text: "What We Offer" },
  { href: "#why-choose-us", text: "Why Choose US" },
];