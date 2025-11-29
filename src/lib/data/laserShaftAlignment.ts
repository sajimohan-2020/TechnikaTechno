interface listmodel {
  img?: string;
  title?: string;
  text?: string;
}
export const lsalists: listmodel[] = [
  {
    img: "/assets/logo/precision.svg",
    title: "High precision",
    text: "Laser alignment systems detect misalignment with high accuracy, ensuring precise shaft positioning for critical assets.",
  },
  {
    img: "/assets/logo/efficienteffective.svg",
    title: "Efficient and effective",
    text: "The laser alignment process is much faster than the conventional methods, with real-time measurements and easy adjustments, reducing downtime significantly.",
  },
  {
    img: "/assets/logo/reducedcomponentwear.svg",
    title: "Reduced component wear",
    text: " Properly aligned shafts and shaft components reduce the vibration and mechanical fatigue, promoting the life of seals, bearings, and couplings.",
  },
  {
    img: "/assets/logo/improvedperfomance.svg",
    title: "Improved performance",
    text: "Well-aligned shafts improve power transmission, leading to smoother and energy-efficient operation.",
  },
];

export const lsaFaqs = [
  {
    q: "What is the cost of laser alignment?",
    a: "The laser alignment cost can vary depending on factors like machine type, complexity, number of alignments, the equipment size, and on-site service requirements. For an accurate quote, it's best to seek a site-specific assessment.",
  },
  {
    q: "What is the laser shaft alignment procedure?",
    a: "The procedure involves mounting a laser sensor and detector on the coupled shafts, taking initial alignment readings, rotating the shafts to detect angular and offset misalignment, making adjustments based on real-time data, and then verifying alignment within set tolerances. The final step is generating a report for documentation and compliance.",
  },
  {
    q: "Is laser alignment good?",
    a: "Yes, laser alignment is very effective. It offers great accuracy compared to other traditional methods, reduces machine wear and energy loss, and significantly improves the lifespan and reliability of rotating equipment. It also minimizes downtime due to quicker and more precise adjustments.",
  },
  {
    q: "What is the accuracy of a laser shaft alignment system?",
    a: "Modern laser shaft alignment systems give accuracy down to ±0.001 mm (1 micron) or better. This level of precision is crucial for high-performance machinery and applications needing exact tolerances, such as in turbomachinery, compressors, and precision pumps. ",
  },
];

interface navitems {
  href: string;
  text: string;
}
export const lsaitems: navitems[] = [
  { href: "#what-is", text: "What Is Laser Shaft Alignment " },
  { href: "#procedure", text: "Procedures of Laser shaft Alignment" },
  { href: "#benefits", text: "Benefits of Laser Shaft Alignment" },
  { href: "#why-choose-us", text: "Why Choose Us" },
];
