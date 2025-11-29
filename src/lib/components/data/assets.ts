import { text } from "@sveltejs/kit";

export interface Asset {
  id: string;
  name: string;
  link: string;
  logo?: string;
}

export const assets: Asset[] = [
  {
    id: "1",
    name: "Condition Monitoring Services",
    link: "/services/condition-monitoring-services",
    logo: "/assets/icon1.svg",
  },
  {
    id: "2",
    name: "Electrical Testing Solutions",
    link: "",
    logo: "/assets/icon6.svg",
  },
  {
    id: "3",
    name: "Acoustic Testing Solutions",
    link: "",
    logo: "/assets/icon4.svg",
  },
  {
    id: "4",
    name: "Advanced Troubleshooting Solutions",
    link: "",
    logo: "/assets/icon3.svg",
  },
  {
    id: "5",
    name: "Computational Engineering",
    link: "",
    logo: "/assets/icon5.svg",
  },
  {
    id: "6",
    name: "Maintenance Services",
    link: "",
    logo: "/assets/icon7.svg",
  },
  {
    id: "7",
    name: "Environmental & Occupational Health and Safety (EHS) Assessments",
    link: "",
    logo: "/assets/icon2.svg",
  },
];

// condition monitoring analysis
export const conditionFaqs = [
  {
    q: "What are condition monitoring services?",
    a: ` Condition monitoring services involve assessing the health of machinery and equipment by tracking performance indicators such as vibration, temperature, or lubrication. The goal is to detect potential issues early and prevent costly breakdowns.`,
  },
  {
    q: "What are the three types of condition monitoring?",
    a: " The three main types are vibration monitoring, acoustic or ultrasonic monitoring, and thermal/infrared monitoring. Each method focuses on identifying specific faults like imbalance, wear, or overheating in equipment.",
  },
  {
    q: " What is RMS in condition monitoring?",
    a: "RMS (Root Mean Square) is a measurement used in vibration analysis to represent the overall energy or intensity of vibration signals. It helps determine whether equipment is operating normally or if faults are developing.",
  },
  {
    q: "Which is an example of monitoring conditions?",
    a: " An example is using infrared thermography to check for hotspots in electrical panels. This helps identify loose connections or overloaded circuits before they lead to failure.",
  },
];

// faqs machine vibratory analysis
export const machineFaqs = [
  {
    q: "What types of machines do you test?",
    a: "We test a range of rotating and mechanical equipment like motors, turbines, compressors, fans, shafts, and rotors. Question: Will it move or rotate? We will monitor it for you.",
  },
  {
    q: "How often should vibration analysis be performed?",
    a: "The frequency depends on the equipment. For high-value, high-speed machinery, we recommend regular monitoring. For less critical machines, monthly or quarterly checks would suffice.",
  },
  {
    q: "Do you offer remote or wireless options?",
    a: "Yes, we offer both remote and wireless vibration monitoring solutions. We use the latest non-invasive and smart sensor system, which will promote real-time data access without physical inspections",
  },
  {
    q: "How fast can I get a report?",
    a: "Generally, the reports are generated within 24 to 48 hours after the data collection. For critical and sensitive components, continuous monitoring is suggested, which will deliver notifications and alerts instantly. Preliminary findings are also received instantly, based on which actions can be taken.",
  },
];
// infrared faqs
export const infraRedFaqs = [
  {
    q: "What is the use of infrared thermography?",
    a: " Infrared thermography is used to detect heat patterns and temperature variations on the surface of objects. It helps identify issues like overheating, insulation failures, or electrical faults without direct contact.",
  },
  {
    q: "What are the methods of infrared testing?",
    a: " Common methods include passive thermography, where natural heat emissions are observed, and active thermography, where external heat is applied to reveal hidden defects. Both are used based on the application, such as electrical, mechanical, or building inspections.",
  },
  {
    q: "What is the purpose of a thermography test?",
    a: " The purpose is to detect abnormal heat signatures that may indicate faults, inefficiencies, or safety risks. It enables early detection and preventive maintenance without shutting down equipment.",
  },
  {
    q: "What conditions can be diagnosed using infrared thermography?",
    a: "Infrared thermography can diagnose electrical faults, overloaded circuits, mechanical wear, heat loss, moisture intrusion, and insulation breakdowns. It is widely used in industrial, electrical, and building diagnostics.",
  },
];
//  ultrasound faqs
export const ultraSonicFaqs = [
  {
    q: "What does ultrasonic testing test for?",
    a: `Ultrasonic Testing (UT) is a non-destructive evaluation (NDE) technique that uses high-frequency sound waves to measure material thickness or examine internal structures. Typically, UT operates within a frequency range of 500 kHz to 20 MHz.`,

    a2:`Because it does not damage the test material, UT is ideal for identifying internal flaws, discontinuities, or weld imperfections without altering or destroying the component.`,
    
    a3:`Beyond its application in quality control during manufacturing, ultrasonic inspection is widely used in maintenance routines—especially for detecting corrosion or material degradation in existing assets like pipelines. This makes it a critical tool in predictive and preventive maintenance strategies across many industries.`,
  },
  {
    q: "What is the ASME standard for ultrasonic testing?",
    a: " ASME Section V outlines the standards and procedures for Non-Destructive Examination (NDE) methods, including ultrasonic testing. This section provides detailed guidance on how to perform inspections that reveal internal or surface flaws in materials without compromising their structural integrity. It serves as a critical reference for ensuring the reliability and safety of components across various industries.",
  },
  {
    q: "What are three types of ultrasonic inspection methods?",
    a: " The purpose is to detect abnormal heat signatures that may indicate faults, inefficiencies, or safety risks. It enables early detection and preventive maintenance without shutting down equipment.",
    points: [
      {
        b1: "Pulse-Echo Testing:",
        b1text:
          "In this widely adopted method, a single transducer emits high-frequency sound waves into a material and receives the echoes that bounce back from internal features or flaws. By measuring the time it takes for these echoes to return, inspectors can determine the depth and size of any irregularities or defects. It is especially useful for evaluating internal conditions and measuring thickness without accessing both sides of the object.",
        b2: "Through-Transmission Testing:",
        b2text:
          "This technique involves two transducers positioned on opposite sides of the test material. One sends ultrasonic waves while the other receives them. If there is a defect between the transducers, the signal will weaken or be lost altogether, indicating the presence of a flaw. This method is effective for identifying significant discontinuities and is often used when full-volume inspection is necessary.",
        b3: " Phased Array Ultrasonic Testing (PAUT):",
        b3text:
          "PAUT utilizes an array of small transducer elements that can be electronically manipulated to control the direction and focus of the ultrasonic beam. This enables comprehensive scanning and real-time imaging of internal structures. PAUT is highly accurate, allowing for precise defect detection, sizing, and visualization, making it ideal for complex geometries and critical components.",
      },
    ],
  },
];
// lubeoil amnalysis faqs
export const Lubefaqs = [
  {
    q: " What can lube oil analysis detect?",
    a: "Lube oil analysis can detect contamination (water, fuel, dirt), wear particles from engine or machine components, oil degradation, and improper oil usage. It helps identify potential issues early, preventing sudden equipment failure.",
  },
  {
    q: "How often should I perform oil analysis?",
    a: "Oil analysis should be performed depending on factors such as equipment type, its criticality, and manufacturer recommendations. For critical machinery, monthly sampling is considered ideal. Regular oil analysis is beneficial for companies focusing on a proactive approach. The frequency of sampling may vary from equipment to equipment.",
  },
  {
    q: "Is lube-oil analysis expensive?",
    a: "No, lube oil analysis is comparatively inexpensive to the cost of equipment repairs or failures. Generally, Oil analysis cost depends on the lab and the test scope.",
  },
  {
    q: "What is the proper method for collecting an oil sample?",
    a: "Use a clean, dry sampling bottle. Take the sample while the engine or machine is running or just after shutdown to make sure the oil is well mixed. Avoid collecting from the drain plug; use a vacuum pump or a live sampling port if available.",
  },
];
// ptapc faqs

export const ptapcFaqs = [
  {
    q: "What is the performance test of a centrifugal pump?",
    a: "The performance test of a pumps is a controlled process followed to check the pump meets the design specifics, mainly flow rates, pressure, power consumption and efficiency under controlled conditions, following standards like ISO or API.",
  },
  {
    q: "How is pump performance evaluated?",
    a: "Typically the pump performance is understood by measuring key parameters such as flow rate (Q), Total head (H), Power input (P), pump efficiency (η) and NPSHr. The values measured are compared with the performance curves.",
  },
  {
    q: "What are the performance criteria for pumps?",
    a: "The general performance criteria include Rated Flow and Head, Efficiency at Best Efficiency POint (EBP), Power Consumption, NPSHr, vibration and noise; all within accepted tolerances.",
  },
  {
    q: " How long does pump performance testing take?",
    a: "Depending on the pump type, size and scope, a typical performance test may take a few hours to one day, including the setup, testing, data analysis.",
  },
];
// pipingfaqs
export const pipingFaqs = [
  {
    q: "How to measure piping vibration?",
    a: "Piping vibration is measured using special tools such as an accelerometer or velocity transducer, which is mounted on the pipe surface. The sensors record vibration (acceleration, velocity, or displacement). Generally, the data is analysed in the FFT to identify frequency and amplitude.",
  },
  {
    q: "What is the standard for piping vibration?",
    a: "Several industry standards guide piping vibration assessments, including:",
    points: [
      {
        b1: "Energy Institute Guidelines (EI 2008/2022) for small bore and mainline piping.",
        b2: "API 618 and API 674 for reciprocating and centrifugal pumps.",
        b3: "ASME B31.3 Appendix F for design-based vibration analysis.",
       
      },
    ],
    text:"These standards provide acceptance criteria based on vibration amplitude, frequency, and piping layout.",
  },
  {
    q: "What is the frequency of piping vibration?",
    a: "Piping vibration can occur across a wide frequency range:",
    points: [
      {
        b1: "Low-frequency (0–20 Hz): ",
        b1text:
          "Typically caused by mechanical imbalance, reciprocating machinery, or surge.",
        b2: "Mid-frequency (20–200 Hz): ",
        b2text:
          "Often associated with fluid-induced forces, acoustic excitation, or structural resonance.",
        b3: "High-frequency (>500 Hz): ",
        b3text:
          "Usually linked to acoustic-induced vibration (AIV), especially near PSV/BDV discharges.",
      },
    ],
  },
  {
    q: "How do you analyse vibration?",
    a: "Vibration is analyzed using a combination of:",
    points: [
      {
        b1: "Field measurements (accelerometers, strain gauges, pressure sensors)",
        b2: "Signal processing (FFT, time waveform analysis)",
        b3: "Modal and harmonic FEA (to determine natural frequencies and mode shapes)",
        b4: "Simulation tools like CAESAR II, ANSYS, AFT Impulse, and AutoPIPE for dynamic response evaluations.",
      },
    ],
  },
];
// pdFaqs
export const pdFaqs = [
  {
    q: "What are the methods of detection of partial discharge?",
    a: `Partial discharge (PD) can be detected using electrical, acoustic, and electromagnetic methods. Instruments like PD detectors, ultrasonic sensors, and high-frequency current transformers (HFCT) are commonly used. The detection method is selected based on the type of equipment and the testing environment.`,
  },
  {
    q: "What is the standard for partial discharge testing?",
    a: `Partial discharge testing is primarily governed by the IEC 60270 standard. This standard outlines reliable measurement techniques and acceptable PD thresholds. Additional standards may be referenced depending on the specific equipment or industry.`,
  },
  {
    q: "What is the IEC standard for partial discharge test?",
    a: `The internationally recognized standard for PD testing is IEC 60270. It defines procedures for detecting and measuring partial discharges in high-voltage insulation systems. This ensures consistent and accurate testing results across various applications.`,
  },
  {
    q: "What is the principle of partial discharge?",
    a: `Partial discharge occurs when a small electrical spark bridges part of the insulation, usually due to defects or voids. While it doesn't completely break down the insulation, repeated discharges can cause deterioration over time. Monitoring PD is essential for early fault detection and asset protection.`,
  },
];
// earthpit testing
export const earthPitFaqs = [
  {
    q: "How to test for earthing?",
    a: `Earthing is tested using an earth resistance tester, typically through the 3-point or 4-point method. This involves driving auxiliary probes into the ground to measure the resistance between the earth electrode and the surrounding soil.
,`,
  },
  {
    q: `What is the ISO for earth pit testing?`,
    a: ` While there's no ISO specifically named "earth pit testing," ISO/IEC 17025 outlines general requirements for testing and calibration labs. Earth testing also aligns with standards like IEEE 81, BS 7430, and IEC 60364 for safe and accurate grounding measurements.
,`,
  },
  {
    q: "What is the purpose of an earth pit?",
    a: ` An earth pit provides a secure and accessible location to house a grounding electrode or conductor. It allows for easy inspection, measurement, and maintenance of the grounding system to ensure electrical safety.`,
  },
  {
    q: "What is an earth inspection pit?",
    a: "It’s a concrete or plastic chamber installed at ground level that covers and protects the earth electrode connections. It features a removable cover, allowing technicians to safely access and test the earthing system.",
  },
];
export const mcsaFaqs = [
  {
    q: " What is motor speed signature analysis?",
    a: `Motor speed signature analysis is a diagnostic technique that studies variations in motor speed to detect mechanical or electrical faults. It helps identify problems like misalignment, rotor issues, or load fluctuations.

,`,
  },
  {
    q: `What is induction motor current analysis?
`,
    a: `  Induction motor current analysis involves examining the current signals of a motor to assess its condition. This method can reveal faults such as rotor bar damage, unbalanced loads, or electrical asymmetry.

,`,
  },
  {
    q: " What is motor current waveform analysis?",
    a: ` Motor current waveform analysis looks at the shape and characteristics of current waveforms drawn by the motor. By analyzing distortions or irregularities, potential faults such as bearing issues or insulation problems can be detected.`,
  },
  {
    q: "What is electrical signature analysis?",
    a: " Electrical signature analysis (ESA) is a condition monitoring method that uses voltage and current signals to evaluate the health of motors and driven equipment. It helps identify both electrical and mechanical issues without interrupting operation.",
  },
];

// card data infrared
export interface cardMain {
  cardHeader: string;
  cardPara: string;
}
export const cardMain: cardMain[] = [
  {
    cardHeader: "Industry-Specific Applications of Infrared Thermography",
    cardPara: `Experience fast, effective infrared testing with AssetConditionMonitoring. We deliver
      precision and performance through advanced IR testing technology that
      meets your needs.`,
  },
];
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
export const cardData: cardData[] = [
  {
    cardNo: "01",
    cardtitle: " Planning and Preparation",
    cardText: `Infrared testing starts with careful planning and preparation. Our
          inspection team evaluates the equipment under normal load and
          operational conditions to ensure a thermal signal. Then, based on the
          application, the appropriate thermal imaging device is chosen,
          ensuring accurate temperature detection across different distances and
          ranges. Once the site is prepared, using high-resolution thermal
          cameras, heat emissions are captured, locating any abnormal
          temperature patterns that may indicate underlying faults.`,
  },
  {
    cardNo: "02",
    cardtitle: " Thermal Analysis",
    cardText: ` The thermal data or the thermograms collected are put under careful
          analysis to evaluate temperature anomalies such as hotspots, cold
          zones, or uneven heat distribution. The variances signal defects like
          corroded electrical connections, overload, worn components, and
          insulation defects early. We analyse and interpret these thermal
          patterns to understand the root cause of the issue and its severity.`,
  },
  {
    cardNo: "03",
    cardtitle: "Diagnosis and reporting",
    cardText: `After the analysis, the collected data are documented in a simple and
          comprehensive report that includes thermal images, detailing of the
          found anomalies, and recommended corrective actions. This enables the
          maintenance team to address the issues proactively, preventing
          equipment failure and reducing shutdowns.`,
  },
  {
    cardNo: "04",
    cardtitle: "After inspection services",
    cardText: `We present a detailed client briefing where the findings are
            presented through comprehensive reports. This report helps the
            client clearly understand the identified anomalies and their
            implications. The IR data is then integrated into the client's
            predictive or preventive maintenance strategy, supporting timely and
            informed decision-making. If necessary, follow-up inspections are
            also scheduled to monitor the previously identified issues and check
            the effectiveness of corrective actions taken.
           `,
    cardText2: `As a non-invasive technique, infrared testing is an efficient and
              accurate method to monitor and maintain system integrity. At assetconditionmonitoring.com, we execute precision with leading thermal imaging tools and expert services, bringing reliable results and long-term value to our clients.`,
  },
];

// ultraSound cards
export const ultraSonicCard: cardMain[] = [
  {
    cardHeader: " Ultrasonic Testing (UT) Process",
    cardPara: ` Ultrasonic Testing is a non-destructive testing (NDT) method used to
      detect internal flaws in materials using high-frequency sound waves.
      Here's a step-by-step breakdown of the procedure`,
  },
];

export const ultrasonicCardData: cardData[] = [
  {
    cardNo: "01",
    cardtitle: " Equipment Preparation & Surface Setup",
    bullet: [
      {
        b1: "Transducer Selection",
        b1text:
          "Choose the right ultrasonic transducer based on the material type, thickness, and inspection purpose (contact, immersion, or phased array).",
        b2: "Apply Couplant",
        b2text:
          "Use a suitable couplant (gel, oil, or water) on the test surface to eliminate air gaps and ensure proper sound wave transmission from the probe into the material.",
      },
    ],
  },
  {
    cardNo: "02",
    cardtitle: " Emission of Ultrasonic Waves",
    bullet: [
      {
        b1: "Sound Wave Generation",
        b1text:
          "The transducer emits high-frequency ultrasonic waves (typically 1–10 MHz) into the material.",
        b2: "Wave Types",
        b2text:
          "Depending on inspection needs, different wave modes—longitudinal, shear, or surface—are used to probe the material.",
      },
    ],
  },
  {
    cardNo: "03",
    cardtitle: " Interaction with Internal Features",
    bullet: [
      {
        b1: "Defect Detection",
        b1text:
          "As waves travel, they reflect or scatter upon encountering flaws such as cracks, voids, or inclusions.",
        b2: "Partial Transmission",
        b2text:
          "Some waves continue through the material, while others return to the surface as echoes.",
      },
    ],
  },
  {
    cardNo: "04",
    cardtitle: "Echo Reception & Signal Capture",
    bullet: [
      {
        b1: "Wave Detection",
        b1text:
          "The same transducer (or a separate one in some setups) captures the returning echoes.",
        b2: "Signal Display",
        b2text: "The system converts the received signals into visual formats:",
        b3: "A-Scan: amplitude vs. time",
        b4: "B-Scan: cross-sectional view",
        b5: "C-Scan: Top-down (plan view) image",
      },
    ],
  },
  {
    cardNo: "05",
    cardtitle: "Data Measurement & Interpretation",
    bullet: [
      {
        b1: "Time-of-Flight (ToF)",
        b1text:
          "Measure the delay between wave emission and echo reception to determine the depth/location of defects.",
        b2: "Amplitude Analysis",
        b2text: "Evaluate signal strength to estimate defect size and nature.",
      },
    ],
  },
  {
    cardNo: "06",
    cardtitle: "Evaluation & Reporting",
    bullet: [
      {
        b1: "Data Interpretation",
        b1text:
          " Technicians analyze scan outputs to characterize defects—size, type, and exact location within the material.",
        b2: "Documentation",
        b2text:
          "A detailed report is compiled, summarizing inspection results, including the type, location, and severity of detected flaws.",
      },
    ],
  },
];

// ptapc card
export const ptapcCardMain: cardMain[] = [
  {
    cardHeader: " The process of evaluating a pump's performance",
    cardPara: `At Assetmonitoring.com we make sure your pumps work reliably. The main types of tests include.`,
  },
];

export const ptapcCardData: cardData[] = [
  {
    cardNo: "01",
    cardtitle: " Pump Performance Test",
    cardText: ` The pump performance test checks whether the pump delivers the specified
          flow rate, head, and efficiency. During the procedure, the pump is connected
          to a test rig with calibrated instruments, and the flow rate is changed
          using a throttle valve. The flow rate, discharge pressure, suction pressure,
          power consumption, and efficiency are measured. The measured results are
          then compared with the manufacturer’s performance curves to see if the
          pumps are working satisfactorily or underperforming.`,
  },
  {
    cardNo: "02",
    cardtitle: " NPSHr test",
    cardText: `The main purpose of this
          test is find the NPSHr to prevent cavitation at the pumps inlet
          section. The Net Positive Suction Head available or NPSHA is given to
          the manufacturer for designing, if the measured NPSHR (actual measured
          value) is less than NPSHA, provided by the customer; then the NPSH
          test is considered satisfactory.`,
  },
  {
    cardNo: "03",
    cardtitle: "Mechanical run test",
    cardText: `After completing
          the pump performance test and net positive suction head test, The
          mechanical integrity of the pumps is checked via mechanical run test.
          The operating parameters such as bearing temperature, lube oil
          temperature and pressure, shaft speed and vibration, mechanical seal
          leak rate, power consumption etc are checked and recorded.`,
  },
];

export const motorCardMain: cardMain[] = [
  {
    cardHeader: "Step-by-Step Process for Conducting MCSA in Electric Motors",
    cardPara: `Explore Our MCSA Process At assetconditionmonitoring.com, we continuously monitor motor current signals to proactively detect faults before they escalate. This predictive approach minimizes unexpected downtimes and maximizes motor performance, ensuring your operations run efficiently and reliably.
`,
  },
];

export const motorCardData: cardData[] = [
  {
    cardNo: "01",
    cardtitle: " Data Collection",
    cardText: `The first step is acquiring the motor’s current signal under standard operating conditions. This is achieved using specialized sensors without interfering with machine performance. Data is typically gathered at varying loads to capture a full performance profile.
`,
  },
  {
    cardNo: "02",
    cardtitle: "Signal Processing",
    cardText: `Collected current data is analyzed through advanced signal processing methods. By evaluating harmonic content, sideband frequencies, and other spectral features, the system reveals signs of abnormalities that differ from healthy motor profiles.
`,
  },
  {
    cardNo: "03",
    cardtitle: "Fault Detection",
    cardText: `Unique patterns in the frequency spectrum are correlated with known fault indicators. Whether the issue is electrical (e.g., stator winding faults) or mechanical (e.g., misalignment or unbalance), the analysis helps pinpoint the defect and assess its severity.`,
  },
  {
    cardNo: "04",
    cardtitle: "Trend Monitoring",
    cardText: `Rather than relying on a single test, MCSA is most effective when performed periodically. Trend analysis enables early detection of wear and degradation, supporting timely maintenance interventions before breakdowns occur.
           `,
  },
  {
    cardNo: "05",
    cardtitle: "Diagnosis and Reporting",
    cardText: `A detailed report is generated outlining any anomalies found, severity levels, and actionable insights. This helps decision-makers plan timely maintenance, thus reducing unscheduled downtimes.

           `,
  },
  {
    cardNo: "06",
    cardtitle: " Maintenance Planning",
    cardText: `With accurate diagnostics in hand, maintenance teams can prioritize repairs, order parts, and reduce emergency fixes. Continued MCSA tracking ensures that corrective actions are effective and asset performance remains optimal.
           `,
  },
];

interface contents {
  title?: string;
  text1?: string;
  text2?: string;
  bulletin?: bulletin[];
  result?: string;
  explore?: string;
}
  interface tables {
    th1: string;
    th2: string;
    td1: string[];
    td2: string[];
  }
interface bulletin {
  b1?: string;
  b2?: string;
  b3?: string;
  b4?: string;
  b5?: string;
  b6?: string;
  b7?: string;
}
export const ultraDropdown: contents[] = [
  {
    title: "Steam Trap Inspection",
    text1: `Steam traps produce both sonic and ultrasonic signals as steam flows through them. Faulty traps can allow steam to escape, resulting in significant energy loss.
`,
    text2: "Our trained technicians use ultrasonic instruments to:",
    result:
      " Increased system efficiency and substantial cost savings through early fault detection",
    bulletin: [
      {
        b1: "Accurately detect trap failures",
        b2: "Identify inefficient or leaking traps",
        b3: "Reduce energy waste and operational costs",
      },
    ],
    explore: "STREAM TRAP TESTING",
  },
  {
    title: "Valve Leak Detection",
    text1: `Any fluid leakage through a valve creates turbulence that emits ultrasonic signals. These leaks, if undetected, can severely impact system efficiency and inflate energy costs.
`,
    text2: "We use advanced leak detection technology to:",
    result:
      " Reduced energy consumption and maintenance costs with routine inspections.",
    bulletin: [
      {
        b1: "Identify even minor valve leaks",
        b2: "Eliminate compressed air or gas loss",
        b3: "Enhance long-term system reliability",
      },
    ],
    explore: "VALVE LEAK DETECTION",
  },
  {
    title: " Mechanical Inspections (Bearings & Rotating Equipment)",
    text1: `Mechanical components like bearings and valves generate distinct ultrasonic signatures when operating abnormally.
`,
    text2: "Our ultrasound mechanical inspections include:",
    result:
      "Improved asset longevity, minimized breakdown risk, and proactive maintenance planning.",
    bulletin: [
      {
        b1: "Detection of early-stage bearing failure",
        b2: "Identification of lubrication issues",
        b3: "Monitoring for misalignment, imbalance, or wear",
      },
    ],
    explore: "MECHANICAL INSPECTIONS (Bearings & Rotating Equipment)",
  },
  {
    title: "Compressed Air System Inspection",
    text1: `Compressed air leaks can be a major energy drain and often go unnoticed without specialized tools.
`,
    text2: "We offer:",
    result: "Enhanced energy efficiency and reduced unplanned downtime.",
    bulletin: [
      {
        b1: "Continuous ultrasound-based monitoring solutions",
        b2: "Analysis of KPIs like pressure drops and flow rates",
        b3: "Recommendations for optimization and upgrades",
      },
    ],
    explore: "COMPRESSED AIR SYSTEM INSPECTION",
  },
  {
    title: "Partial Discharge Testing in Switchgear Panels",
    text1: `Defects in electrical insulation such as cracks, moisture, or wear can lead to partial discharges (PD)—a precursor to electrical failure.
`,
    text2: "Our PD testing services help:",
    result:
      "Safer operations, reduced fire risk, and extended equipment lifespan.",
    bulletin: [
      {
        b1: "Detect early-stage insulation faults",
        b2: "Prevent potential switchgear failures",
        b3: "Ensure safety and regulatory compliance",
      },
    ],
    explore: "PARTIAL DISCHARGE TESTING IN SWITCHGEAR PANELS",
  },
];

export const EarthPit: cardMain[] = [
  {
    cardHeader: "Explore reliable Earth Pit Testing Specialities.",
    cardPara: `At assetconditionmonitoring.com, we execute the earth ground resistance test and maintenance,
     ensuring compliance with quality standards, understanding the criticality and sensitivity of the tasks
     we undertake. By providing continuous assistance and regular support, we provide dependable services to
     our clients. Let us delve in detail procedure of conducting Earth Pit Testing.`,
  },
];

export const EarthPitCardData: cardData[] = [
  {
    cardNo: "01",
    cardtitle: " Preparation",
    cardText: 
  
      `The required tools and equipment are prepared such as an earth resistance tester (Megger/Digital),
         auxiliary rods, insulated wires, measuring tape, driving tools, and safety gear (gloves, shoes, PPE).`,
  
   
  },
  {
    cardNo: "02",
    cardtitle: "Testing Procedure",
    cardText:  `Choose the ideal method suiting the requirements. For a 3-Point testing method, the technicians 
        carry out a detailed analysis of the earth pit. Set up the equipment, place rods correctly, connect 
        wires, and take resistance measurements.`,
   
  
  },
  {
    cardNo: "03",
    cardtitle: "Interpreting Results",
    bullet: [
      {
        b1: "Defect Detection",
        b1text:
          "As waves travel, they reflect or scatter upon encountering flaws such as cracks, voids, or inclusions.",
        b2: "Partial Transmission",
        b2text:
          "Some waves continue through the material, while others return to the surface as echoes.",
      },
    ],

    
  },

];

interface navitems {
  href: string;
  text: string;
}
export const items: navitems[] = [
  { href: "#why-conditions", text: "Why Conditions Monitoring " },
  { href: "#our-services", text: "Our Services" },
  { href: "#industries", text: "Industries we Serve" },
  { href: "#why-choose-us", text: "Why Choose Us" },
];
export const machineItems: navitems[] = [
  { href: "#specialities", text: "Our Specialities" },
  { href: "#why", text: "Why MVA Matters?" },
  { href: "#services", text: "Our Services" },
  { href: "#why-choose-us", text: "Why Choose Us" },
];
export const infraredItems: navitems[] = [
  { href: "#benefits", text: "Benefits" },
  { href: "#applications", text: "Applications" },
  { href: "#services", text: "Our Steps" },
  { href: "#why-choose-us", text: "Why Choose Us" },
];
export const ultrasoundItems: navitems[] = [
  { href: "#what-is", text: "What Is Ultrasonic Testing?" },
  { href: "#ultrasonic-process", text: "Ultrasonic Process" },
  { href: "#services", text: "Our Services" },
  { href: "#advanced-applications", text: "Advanced Applications" },
];
export const lubeoilItems: navitems[] = [
  { href: "#what-is", text: "What Is Lube Oil Analysis?" },
  { href: "#benefits", text: "Benefits" },
  { href: "#services", text: "Our Services" },
  { href: "#why-choose-us", text: "Why Choose Us" },
];
export const performanceItems: navitems[] = [
  { href: "#what-is", text: "What Is Performance Testing?" },
  { href: "#our-process", text: "Our Process" },
  { href: "#benefits-of-pump-testing", text: "Benefits Of Pump Testing" },
  { href: "#why-choose-us", text: "Why Choose Us" },
];
export const pipingVibrationItems: navitems[] = [
  { href: "#what-is", text: "What Is Piping Vibration Analysis?" },
  { href: "#benefits-of-piping-stress", text: "Benefits of Piping Stress" },
  { href: "#why-choose-us", text: "Why Choose Us" },
  { href: "#faqs", text: "FAQs" },
];
export const motorCurrentItems: navitems[] = [
  { href: "#what-is", text: "What Is MCSA?" },
  { href: "#process-of-mcsa", text: "Process For Conducting MCSA" },
  { href: "#benefits-of-mcsa", text: "Benefits Of MCSA" },
  { href: "#why-choose-us", text: "Why Choose Us" },
];
export const pdItems: navitems[] = [
  { href: "#what-is", text: "What Is Partial Discharge" },
  { href: "#type-of-partial-discharge", text: "Types of Partial Discharge" },
  { href: "#why-choose-us", text: "Why Choose Us" },
  {
    href: "#methods-of-partial-discharge",
    text: "Methods of Partial Discharge",
  },
];
export const earthpitItems: navitems[] = [
  { href: "#what-is", text: "What Is Earth Pit Testing" },
  { href: "#procedures-of-earth-pit-testing", text: "Procedures Of Earth Pit Testing" },
  { href: "#benefits", text: "Benefits Of Earth Pit Testing" },
  {
    href: "#why-choose-us",
    text: "Why Choose Us",
  },
];
