<script lang="ts">
  import { PUBLIC_APIURL } from "$env/static/public";
  import Services from "$lib/components/services/Services.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  import Arrow from "$lib/icons/svgs/arrow.svelte";
  import GrayCircle from "$lib/icons/svgs/grayCircle.svelte";
  import Bulletins from "$lib/components/bulletins/Bulletins.svelte";
  import Faqs from "$lib/components/faq/Faq.svelte";
  /** @type {import('./$types').PageData} */
  export let data;

  interface bulletsSentence {
    title?: string;
    paragraph?: string;
    text?: string;
    bullets?: string[];
  }
  const bulletins: bulletsSentence[] = [
    {
      title: "Best Practices for Effective Earth Pit Testing",
      paragraph:
        "To ensure accuracy and consistency in earth pit testing, certain practices should always be followed:",
      text: "These practices not only improve accuracy but also ensure long-term reliability of grounding systems.",
      bullets: [
        "Always use calibrated earth resistance testers.",
        "Wear appropriate safety gear (PPE, gloves, safety shoes).",
        "Temporarily disconnect the earth pit from live systems to avoid measurement interference.",
        "Maintain correct spacing when placing test probes",
        "Avoid testing immediately after heavy rain or during extremely dry conditions — normal soil moisture levels give more reliable results.",
        "Take at least three readings by moving the potential rod slightly forward or backward to confirm consistency.",
        "Record all data with details such as date, time, weather conditions, and site information.",
        "Ensure measured resistance values comply with local or international standards.",
        "Carry out routine inspections and maintenance of earth pits and grounding systems.",
        "Regularly review resistance values and take corrective steps to strengthen the grounding system when necessary.",
      ],
    },
  ];

  interface SidebarItem {
    title: string;
    subtitle: string;
  }

  const sidebarImages: SidebarItem[] = [
    {
      title: "Dui At At, Urna Nec Sapien Tortor, Consectetur Vitae",
      subtitle: "Leo. Vel Vehicula, Elit.",
    },
    {
      title: "Dui At At, Urna Nec Sapien Tortor, Consectetur Vitae",
      subtitle: "Leo. Vel Vehicula, Elit.",
    },
    {
      title: "Dui At At, Urna Nec Sapien Tortor, Consectetur Vitae",
      subtitle: "Leo. Vel Vehicula, Elit.",
    },
    {
      title: "Dui At At, Urna Nec Sapien Tortor, Consectetur Vitae",
      subtitle: "Leo. Vel Vehicula, Elit.",
    },
  ];

  interface list2 {
    title?: string;
    paragraph1?: string;
    paragraph2?: string;
    bullet?: string[];
  }

  const list2Row: list2[] = [
    {
      title: " Stakeless Testing",
      paragraph1:
        "This method makes use of two clamps — one to inject a signal and the other to receive it. It is especially useful when it is not possible to drive stakes into the ground (e.g., on concrete surfaces). Stakeless testing provides quick diagnostics and approximate resistance values for looped systems.",
    },
    {
      title: "Soil Resistivity Testing",
      paragraph1:
        "This test is usually performed before installing an earthing system. The most widely applied technique is the Wenner 4-point method. Four equally spaced probes are inserted in a straight line, with current applied through the outer rods and voltage measured across the inner rods. This test helps determine how resistance changes with seasonal variations in soil composition, temperature, and moisture.",
    },
    {
      title: " Fall-of-Potential Testing (3-Point Method)",
      paragraph1:
        "One of the most accurate and commonly used methods, this technique requires two auxiliary electrodes aligned with the earth electrode under test. By measuring voltage and current, the earth resistance can be calculated. It is widely used as part of preventive maintenance programs.",
    },
    {
      title: "Selective Testing",
      paragraph1:
        "This method uses one clamp along with two auxiliary rods. It allows the measurement of resistance at specific points within a larger installation. By isolating the electrode under test, selective testing provides targeted readings, making it ideal for checking individual earth pits in interconnected grounding networks.",
    },
  ];

  const listRow3: list2[] = [
    {
      title: "Preparation",
      paragraph1:
        "Gather all required tools and equipment before starting the test:",
      bullet: [
        "Earth resistance tester (digital tester or Megger)",
        "Auxiliary test rods (stakes/probes)",
        "Insulated test leads/wires",
        "Measuring tape",
        "Tools to drive rods into the ground",
        "Safety equipment (PPE, gloves, safety shoes)",
      ],
    },
    {
      title: " Testing Process",
      paragraph1:
        "Select the appropriate testing method based on the site requirements. For example, in the 3-point fall-of-potential method, auxiliary rods are placed in a straight line at set distances, the tester is connected, and the resistance measurements are recorded. Care must be taken to ensure secure connections and proper spacing of rods for accurate results.",
    },
    {
      title: "  Interpreting Measurements",
      paragraph1:
        "The resistance values obtained are compared with recommended standards. Based on these readings, corrective measures can be planned if required.",
    },
  ];

  interface lists {
    title?: string;
    paragraph1?: string;
    paragraph2?: string;
    line: boolean;
  }

  const listRow: lists[] = [
    {
      title: "Electrical and equipment safety",
      paragraph1:
        "Carrying out earth pit testing on a regular basis reduces the chances of electrocution and safeguards electrical and electronic systems from sudden surges, lightning strikes, and faults. A properly functioning earth pit ensures a low-resistance path for fault currents to discharge into the ground. Without regular testing and upkeep, the protection offered by the grounding system may be compromised.",
      paragraph2:
        "For example, if maintenance of an earthing pit is neglected, corrosion or physical deterioration of its components can raise resistance levels, making the pit ineffective in handling fault currents. This increases the chances of electric shock, fire hazards, or damage to equipment.",
      line: true,
    },
    {
      title: "Compliance with standards",
      paragraph1:
        "Earthing systems must follow international and local standards such as IEEE Std 81, BS 7430, and NFPA 70 (NEC). Adhering to these standards ensures the system is safe and effective, protecting both people and equipment during operations. Compliance also minimizes electrical hazards and enhances both operational reliability and safety performance.",
      line: true,
    },
    {
      title: "Efficiency of grounding functions",
      paragraph1:
        "Routine earth pit testing helps maintain continuity and stability of electrical systems while confirming the effectiveness of grounding. By measuring the integrity of the earthing arrangement, potential failures can be identified early, and appropriate corrective actions can be taken promptly.",
      line: false,
    },
  ];
  interface FactorImpact {
    factor: string;
    impact: string;
  }

  const factorsData: FactorImpact[] = [
    {
      factor: "Soil Composition",
      impact:
        "Loamy And Clay Soils Have Better Conductivity Compared To Sandy Or Rocky Soils.",
    },
    {
      factor: "Soil Resistivity",
      impact:
        "Sandy And Rocky Soils Tend To Have High Resistivity, Which Increases Overall Earth Resistance.",
    },
    {
      factor: "Temperature",
      impact:
        "Extreme Conditions (Frozen Ground Or Very Dry/Hot Soil) Can Significantly Raise Resistance Levels.",
    },
    {
      factor: "Moisture Level",
      impact: "Moist Soil Lowers Resistance, While Dry Soil Increases It.",
    },
    {
      factor: "Corrosion & Ageing",
      impact:
        "Deterioration Or Corrosion Of Earthing Components Increases Resistance Over Time.",
    },
    {
      factor: "Electrode Depth",
      impact:
        "Deeper Electrodes Typically Reach More Conductive, Moist Soil Layers, Thereby Lowering Resistivity.",
    },
  ];
  const factorsData2: FactorImpact[] = [
    {
      factor: "< 1 Ω",
      impact: "Excellent – suitable for highly sensitive systems",
    },
    {
      factor: "1 – 5 Ω",
      impact: "Good – acceptable for most installations",
    },
    {
      factor: "5 – 10 Ω",
      impact: "Moderate – may require improvement",
    },
    {
      factor: "> 10 Ω",
      impact: "Moist Soil Lowers Resistance, While Dry Soil Increases It.",
    },
  ];

  const BlogEPFaqs = [
    {
      q: "How is earth resistance measured using a Megger?",
      a: `A Megger is used to measure earth resistance by connecting the earth electrode to the E terminal, placing two auxiliary rods (P and C terminals) in a straight line, and reading the resistance value directly from the tester.`,
    },
    {
      q: " What is the 3-point earth resistance test?",
      a: "The 3-point test determines the resistance of an earth electrode by placing a potential rod and a test electrode in a straight line with the electrode under test. The Megger measures voltage and current to calculate resistance.",
    },
    {
      q: "How do you test an earthing system?",
      a: "An earth resistance tester with auxiliary rods is used to measure the resistance between the earth electrode and surrounding soil. Methods include 3-point testing, selective testing, and stakeless testing, depending on the installation.",
    },
    {
      q: "What is an earth inspection pit?",
      a: "An earth pit is a dedicated enclosure providing access to the earth electrode for inspection, testing, and maintenance of the grounding system.",
    },
  ];
</script>

<!-- Banner Section -->
<div class="pt-24 sm:pt-28 lg:pt-28">
  <div
    class="flex items-center justify-center relative top-[20px] sm:top-[6px] md:top-0"
  >
    <div
      class="w-full h-[215px] md:h-[230px] lg:h-[300px] xl:h-[360px] 2xl:h-[385px] 2.5xl:h-[470px] 5xl:h-[1000px]"
    >
      <img
        src="{PUBLIC_APIURL}/assets/{data.services.blog_banner}"
        alt="IPEC"
        class="h-full object-cover object-right md:object-fill xl:w-full"
      />
    </div>
    <div class="absolute inset-0 bg-black opacity-20"></div>
    <div
      class="hidden md:block absolute bottom-0 right-12 bg-white px-8 py-4 5xl:px-[15rem] 5xl:py-[4rem] shadow-md"
    >
      <nav class="flex space-x-2 5xl:text-[4rem] text-base">
        <P
          size="texts18"
          className="text-[#1E3A8A] 5xl:text-[4rem] hover:text-[#00245a]"
        >
          <a href="/" class=""> Home </a>
        </P>
        <span>/</span>
        <P
          size="texts18"
          className="text-[#1E3A8A] 5xl:text-[4rem] hover:text-[#00245a]"
        >
          <a href={`/${data.langParam}/blogs`} class=""> blog </a>
        </P>
        <span>/</span>
        <P
          size="texts18"
          className="text-[#1E3A8A] 5xl:text-[4rem] hover:text-[#00245a]"
        >
          <a href={`/${data.langParam}/blogs/earth-pit-testing`} class="">
            Earth-pit
          </a>
        </P>
      </nav>
    </div>
  </div>
</div>
<div class="md:container px-4 mx-auto md:px-[55px] text-left">
  <div class=" pt-14">
    <div class="flex items-center justify-center pt-10 gap-3">
      <Heading
        size="h2bold"
        as="h1"
        className=" font-bold text-center text-[#1E3A8A] 5xl:text-[60px]"
      >
        Blogs
      </Heading>
      <Yellowline
        topLine="lg:w-10 lg:h-4 w-8 h-3 pt-2"
        bottomLine="lg:h-4 lg:w-10 ml-4 w-8 h-3 pt-2"
      />
    </div>
  </div>
  <div class=" pt-5">
    <div class="flex items-center justify-center gap-3">
      <Heading
        size="headingS25"
        as="h1"
        className=" font-semibold text-center text-[#1E3A8A] 5xl:text-[60px]"
      >
        EARTH PIT TESTING
      </Heading>
    </div>
  </div>
</div>

<section class="mt-6">
  <div class="h-auto">
    <div class="container mx-auto px-4 md:px-[70px] 5xl:px-[800px] py-8">
      <!-- Add items-start to align tops on large screens -->
      <div class="flex flex-col lg:flex-row items-start gap-8">
        <!-- Main Content -->
        <div class="flex-1 pt-6 lg:pt-0">
          <Heading
            size="bannerMaih1"
            as="h1"
            className=" font-semibold text-left text-[#1E3A8A] 5xl:text-[60px]"
          >
            A Complete Guide To Earth Pit Testing: Importance, Methods, And
            Standards
          </Heading>

          <div class="space-y-6 text-[#2F2F2F] leading-relaxed pt-6">
            <P size="texts18" className="5xl:text-[47px]">
              Earth Pit Testing is an essential electrical safety process that
              verifies the reliability and security of grounding systems in
              residential, commercial, and industrial electrical installations.
              In this guide, we will look into the importance of performing
              proper earth pit testing procedures.
            </P>
            <P size="texts18" className="5xl:text-[47px]">
              Electricity is an inseparable part of modern life, powering almost
              everything around us. From the Stone Age to advanced technologies,
              we have reached a point where dependence on electricity is
              unavoidable. With this heavy reliance, one crucial concern arises,
              ensuring the safety and effectiveness of electrical systems.
            </P>
            <P size="texts18" className="5xl:text-[47px]">
              Electrical safety focuses on preventing risks to protect people,
              property, and equipment. In this context, proper grounding is not
              merely a technical necessity but a lifesaving practice. If
              neglected, it can result in serious hazards. One effective way to
              evaluate grounding efficiency is by conducting earth pit testing.
            </P>
            <P size="texts18" className="5xl:text-[47px]">
              This testing process measures the resistance of the earth pit and
              its capacity to dissipate fault currents into the ground, ensuring
              grounding effectiveness and preventing electrical faults. Earth
              pit testing holds significant importance, particularly in
              engineering and electrical industries, where safety cannot be
              compromised. Conducting regular and accurate earth pit testing
              ensures compliance with safety regulations, minimizes accident
              risks, and enhances the reliability of electrical systems across
              different facilities.
            </P>
            <P size="texts18" className="5xl:text-[47px]">
              Earth pit testing is also a part of many scheduled preventive
              maintenance programs, designed to protect electrical assets and
              ensure uninterrupted operations. Let's now go deeper into the
              details of earth pit testing.
            </P>
          </div>
        </div>

        <!-- Sidebar -->
        <div
          class="lg:w-80 5xl:w-[70rem] space-y-4 5xl:space-y-16 px-5 md:px-[32px] lg:px-0"
        >
          {#each sidebarImages as item, index}
            <div
              class="flex bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow 5xl:rounded-2xl"
            >
              <!-- Image LEFT -->
              <div
                class="w-40 h-32 5xl:w-[28rem] 5xl:h-[24rem] flex-shrink-0 relative p-3 5xl:p-8"
              >
                <img
                  src="/assets/img/Rectangle 23.png"
                  alt="Electrical testing {index + 1}"
                  class="w-full h-full object-cover rounded 5xl:rounded-lg"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent rounded-lg"
                ></div>
              </div>
              <!-- Text RIGHT -->
              <div class="flex flex-col justify-center p-4 5xl:p-12 flex-1">
                <h3
                  class="text-sm font-semibold text-gray-800 mb-1 5xl:text-5xl 5xl:mb-4 5xl:leading-tight"
                >
                  {item.title}
                </h3>
                <p
                  class="text-xs text-gray-600 5xl:text-[47px] 5xl:leading-relaxed"
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container mx-auto px-5 md:px-[70px] 5xl:px-[800px]">
    <Heading
      size="bannerMaih1"
      as="h1"
      className=" font-semibold text-left text-[#1E3A8A] 5xl:text-[60px]"
    >
      What is Earth Pit Testing?
    </Heading>

    <div class="space-y-6 text-[#2F2F2F] leading-relaxed pt-6">
      <P size="texts18" className="5xl:text-[47px]">
        Earth Pit testing assesses the earth’s resistance to the grounding
        system through the earth pit to make sure that the earth pit installed
        can safely conduct fault currents into the ground. The earth pit is a
        special area dug from the ground used in the electrical earthing system
        installation to dissipate electrical current.
      </P>
      <P size="texts18" className="5xl:text-[47px]">
        Fault currents, lightning strikes, static electricity, and surges
        scatter through the earth pit into the ground safely. The earth pit is
        usually embedded in soil with an earth electrode (copper rod, plate or
        galvanised iron pipe), and other conductive earthing compounds. The
        earth pit typically features a removable cover for safety and access
        into the chamber for inspection and maintenance. The earth pit is the
        central part of the earthing system and ensures the safety of electrical
        assets by providing a low-resistance path for the current to flow
        through to the ground.
      </P>
      <P size="texts18" className="5xl:text-[47px]">
        The main purpose of earth pit testing is to check the effectiveness of
        the grounding system. A low earth resistance signals a reliable earthing
        system, essential for preventing electric shocks and equipment damage,
        It also provides lightning protection, fault clearance and regulatory
        compliance. The grounding system’s integrity must be regularly verified
        to ensure the grounding path exists for the fault currents to be
        channelled correctly and to identify the earthing defects early. This is
        always crucial to ensure electrical safety and equipment protection.
      </P>
    </div>
  </div>
</section>
<section>
  <div class="container mx-auto px-5 md:px-[70px] mt-6 5xl:px-[800px]">
    <Heading
      size="bannerMaih1"
      as="h1"
      className=" font-semibold text-left text-[#1E3A8A] 5xl:text-[60px]"
    >
      Importance of Earth Pit Testing
    </Heading>

    <div class="space-y-6 text-[#2F2F2F] leading-relaxed pt-6">
      <P size="texts18" className="5xl:text-[47px]">
        The significance of regular earth pit testing cannot be overlooked.
        Conducting checks at intervals helps technicians and operators identify
        problems early and apply corrective measures to maintain the reliability
        and accuracy of grounding systems.
      </P>
    </div>

    <div class="mt-14 flex flex-col justify-start">
      {#each listRow as list}
        <div class="w-full flex items-center gap-3 pt-4">
          <span><Arrow data="lg:w-5 lg:h-5 h-3 w-3 " /></span>
          <Heading
            size="headingS20"
            as="h1"
            className=" font-semibold text-left text-[#1E3A8A] 5xl:text-[47px]"
          >
            {list.title}
          </Heading>
        </div>
        <div class=" px-6 md:px-6 lg:px-8 pt-3">
          <P size="texts18" className="5xl:text-[47px]">
            {list.paragraph1}
          </P>
          {#if list.paragraph2}
            <P size="texts18" className="pt-3 5xl:text-[47px]">
              {list.paragraph2}
            </P>
          {/if}
        </div>
        {#if list.line === true}
          <div class="w-full border-t-2 border-[#C3C3C3] mt-8"></div>
        {/if}
      {/each}
    </div>
  </div>
</section>
<section class="mt-10">
  <div class="container mx-auto px-5 md:px-[70px] mt-6 5xl:px-[800px]">
    <Heading
      size="bannerMaih1"
      as="h1"
      className=" font-semibold text-left text-[#1E3A8A] 5xl:text-[60px]"
    >
      Factors Affecting Earth Resistance
    </Heading>
    <P size="texts18" className=" text-[#2F2F2F] 5xl:text-[47px]">
      The effectiveness of an earthing system depends on several conditions, as
      the resistance is directly influenced by soil properties, environmental
      factors, and the condition of the grounding components. Below are the main
      factors that affect earth resistance:
    </P>

    <div class="w-full pt-14">
      <div
        class="bg-gray-100 border border-gray-100 rounded-lg overflow-hidden shadow-sm"
      >
        <!-- Table Header -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-px bg-gray-300">
          <div class="bg-gray-100 px-2 py-3 md:py-6 col-span-1">
            <Heading
              size="headingS25"
              as="h1"
              className=" font-semibold text-left text-[#2F2F2F] 5xl:text-[50px]"
            >
              Factor
            </Heading>
          </div>
          <div class="bg-gray-100 px-2 py-3 md:py-6 col-span-1 md:col-span-4">
            <Heading
              size="headingS25"
              as="h1"
              className=" font-semibold text-left text-[#2F2F2F] 5xl:text-[50px]"
            >
              Impact
            </Heading>
          </div>
        </div>

        <!-- Table Body -->
        <div class="divide-y divide-gray-300">
          {#each factorsData as item}
            <div class="grid grid-cols-2 md:grid-cols-5 gap-px bg-gray-300">
              <div
                class="bg-white px-2 py-3 md:py-6 5xl:py-14 5xl:px-5 col-span-1"
              >
                <p
                  class="text-[10px] sm:text-xs md:text-sm lg:text-base font-medium text-gray-800 5xl:text-[47px]"
                >
                  {item.factor}
                </p>
              </div>
              <div
                class="bg-white px-2 py-3 md:py-6 col-span-1 md:col-span-4 5xl:py-14 5xl:px-5"
              >
                <p
                  class="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed 5xl:text-[47px]"
                >
                  {item.impact}
                </p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
    <P size="texts18" className=" text-[#2F2F2F] pt-4 5xl:text-[47px]">
      These factors need to be considered both during installation and
      throughout the maintenance cycle to ensure the earthing system remains
      effective.
    </P>
  </div>
</section>

<section class="mt-10">
  <div class="container mx-auto px-5 md:px-[70px] mt-6 5xl:px-[800px]">
    <Heading
      size="bannerMaih1"
      as="h1"
      className=" font-semibold text-left text-[#1E3A8A] 5xl:text-[60px] "
    >
      Methods of Earth Pit Testing
    </Heading>
    <P size="texts18" className=" text-[#2F2F2F] 5xl:text-[47px]">
      There are several standard techniques for carrying out earth pit testing,
      each suited to specific site conditions and grounding setups. The choice
      of method depends on factors such as system layout, accessibility, and
      whether active loads are present. The most common methods are:
    </P>

    <div class="mt-14 flex flex-col justify-start">
      {#each list2Row as list}
        <div class="w-full flex items-center gap-3 pt-4">
          <Heading
            size="headingS20"
            as="h1"
            className=" font-semibold text-left text-[#2F2F2F] 5xl:text-[47px]"
          >
            {list.title}
          </Heading>
        </div>
        <div class=" pt-3">
          <P size="texts18" className="5xl:text-[47px]">
            {list.paragraph1}
          </P>
          {#if list.paragraph2}
            <P size="texts18" className="pt-3 5xl:text-[47px]">
              {list.paragraph2}
            </P>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="mt-10">
  <div class="container mx-auto px-5 md:px-[70px] mt-6 5xl:px-[800px]">
    <Heading
      size="bannerMaih1"
      as="h1"
      className=" font-semibold text-left text-[#1E3A8A] 5xl:text-[60px]"
    >
      Procedure for Earth Pit Testing
    </Heading>
    <P size="texts18" className=" text-[#2F2F2F] 5xl:text-[47px]">
      The process of earth pit testing involves preparation, execution, and
      evaluation of results. A typical procedure includes:
    </P>

    <div class="mt-14 flex flex-col justify-start">
      {#each listRow3 as list}
        <div class="w-full flex items-center gap-3 pt-4">
          <Heading
            size="headingS20"
            as="h1"
            className=" font-semibold text-left text-[#2F2F2F] 5xl:text-[47px]"
          >
            {list.title}
          </Heading>
        </div>
        <div class=" pt-3">
          <P size="texts18" className="5xl:text-[47px]">
            {list.paragraph1}
          </P>
          {#if list.paragraph2}
            <P size="texts18" className="pt-3 5xl:text-[47px]">
              {list.paragraph2}
            </P>
          {/if}
          {#if list.bullet}
            <ul
              class="list-disc pl-10 space-y-4 text-gray-700 pb-5 pt-6 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] 5xl:text-[47px]"
            >
              {#each list.bullet as bullet}
                <li class="flex gap-3 items-start">
                  <span class="max-w-2 5xl:max-w-8 5xl:max-h-8 max-h-2"
                    ><GrayCircle data="w-2 h-2 5xl:h-8 5xl:w-8" /></span
                  >{bullet}
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      {/each}
    </div>
    <div class="w-full pt-14">
      <div
        class="bg-gray-100 border border-gray-100 rounded-lg overflow-hidden shadow-sm"
      >
        <!-- Table Header -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-px bg-gray-300">
          <div class="bg-gray-100 px-2 py-3 md:py-6 col-span-1">
            <Heading
              size="headingS25"
              as="h1"
              className=" font-semibold text-left text-[#2F2F2F] 5xl:text-[50px]"
            >
              Resistance Value
            </Heading>
          </div>
          <div class="bg-gray-100 px-2 py-3 md:py-6 col-span-1 md:col-span-4">
            <Heading
              size="headingS25"
              as="h1"
              className=" font-semibold text-left text-[#2F2F2F] 5xl:text-[50px]"
            >
              Interpretation
            </Heading>
          </div>
        </div>

        <!-- Table Body -->
        <div class="divide-y divide-gray-300">
          {#each factorsData2 as item}
            <div class="grid grid-cols-2 md:grid-cols-5 gap-px bg-gray-300">
              <div
                class="bg-white 5xl:py-14 5xl:px-5 px-2 py-3 md:py-6 col-span-1"
              >
                <p
                  class="text-[10px] sm:text-xs md:text-sm lg:text-base font-medium text-gray-800 5xl:text-[47px]"
                >
                  {item.factor}
                </p>
              </div>
              <div
                class="bg-white 5xl:py-14 5xl:px-5 px-2 py-3 md:py-6 col-span-1 md:col-span-4"
              >
                <p
                  class="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed 5xl:text-[47px]"
                >
                  {item.impact}
                </p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="mt-14 5xl:px-[800px]">
  <!--  -->

  <Bulletins {bulletins} />
</section>

<section class="mt-14">
  <div class="container mx-auto px-5 md:px-[70px] mt-6 5xl:px-[800px]">
    <Heading
      size="bannerMaih1"
      as="h1"
      className=" font-semibold text-left text-[#1E3A8A] 5xl:text-[60px]"
    >
      How do we do earth pit testing at Assetconditionmonitoring.com?
    </Heading>
    <P size="texts18" className="pt-6 5xl:text-[47px]">
      Assetconditionmonitoring.com, powered by Technomax, a trusted engineering
      company in the UAE with over 19 years of expertise, delivers earth pit
      testing with precision and care. Our team of skilled engineers and
      electrical technicians understands the critical importance and sensitivity
      of this process, ensuring all testing and reviews are carried out to the
      highest safety standards.
    </P>
    <P size="texts18" className="pt-3 5xl:text-[47px]">
      We perform earth resistance and earth pit testing using advanced equipment
      and proven techniques, guaranteeing accurate and reliable results. Our
      approach emphasizes transparency, compliance, and reliability, which has
      earned us recognition as a preferred condition monitoring service provider
      across the GCC.
    </P>
    <P size="texts18" className="pt-3 5xl:text-[47px]">
      In addition to earth pit testing, our expertise extends to a wide range of
      condition monitoring solutions, including:
    </P>
    <div
      class="text-[#1E3A8A] px-5 pt-10 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] 5xl:text-[47px]"
    >
      <ul
        class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 font-semibold"
      >
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2">
            <img src="/assets/circlehook.svg" alt="" />
          </span>
          <span>Partial Discharge Testing</span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2">
            <img src="/assets/circlehook.svg" alt="" />
          </span>
          <span>CFD Analysis</span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2">
            <img src="/assets/circlehook.svg" alt="" />
          </span>
          <span>FEA Analysis</span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2">
            <img src="/assets/circlehook.svg" alt="" />
          </span>
          <span>Vibration Analysis</span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2">
            <img src="/assets/circlehook.svg" alt="" />
          </span>
          <span>Ultrasound Testing</span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2">
            <img src="/assets/circlehook.svg" alt="" />
          </span>
          <span>Oil Analysis</span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2">
            <img src="/assets/circlehook.svg" alt="" />
          </span>
          <span>Laser Shaft Alignment Services</span>
        </li>
      </ul>
    </div>

    <P size="texts18" className="pt-6 5xl:text-[47px]">
      By combining advanced technology with a commitment to safety, Technomax
      ensures that your grounding systems remain effective and reliable. Regular
      inspection and maintenance with us not only improve compliance but also
      safeguard your electrical assets and uninterrupted operations.
    </P>
  </div>
</section>

<section class="mt-14">
  <Faqs faqs={BlogEPFaqs} />
</section>
