<script lang="ts">
  // @ts-nocheck
  import * as Accordion from "$lib/components/ui/accordion";
  import { PUBLIC_APIURL } from "$env/static/public";
  import { slide } from "svelte/transition";
  import Contactus from "$lib/components/contactus/ContactUs.svelte";
  import Faq from "$lib/components/faq/Faq.svelte";
  import CardTitle from "$lib/components/ui/card/card-title.svelte";
  import { infraRedFaqs, infraredItems } from "$lib/components/data/assets";
  import Slidecards from "$lib/components/slidecard/SlideCard.svelte";
  import { cardData, cardMain } from "$lib/components/data/assets";
  import Serviceui from "$lib/components/serviceui/ServiceUI.svelte";
  import Listview from "$lib/components/listview/ListView.svelte";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  import Bookmarknav from "$lib/components/bookmarknav/BookMarkNav.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";

  import Circlehook from "$lib/icons/svgs/circlehook.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  import Rectanglebox from "$lib/components/rectanglebox/RectangleBox.svelte";
  import Verticalline from "$lib/icons/svgs/verticalline.svelte";

  export let data = {};

  let hiddenCardsContainer;
  let currentIndex = 0;
  let innerWidth = 0;

  $: isMobile = innerWidth < 768;
  $: cardWidth = isMobile ? innerWidth - 32 : 460;
  $: cardsPerView = isMobile ? 1 : 2;
  $: totalCards = 4;

  function scrollHiddenCards(direction) {
    if (!hiddenCardsContainer) return;

    if (direction === "left") {
      currentIndex = Math.max(0, currentIndex - 1);
    } else if (direction === "right") {
      currentIndex = Math.min(totalCards - cardsPerView, currentIndex + 1);
    }

    const scrollAmount = currentIndex * (isMobile ? cardWidth : cardWidth + 32);
    hiddenCardsContainer.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  }

  $: canScrollLeft = currentIndex > 0;
  $: canScrollRight = currentIndex < totalCards - cardsPerView;

  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/infrared thermography testing.webp`,
      title: "Expert Infrared Thermography Testing for Predictive Maintenance",
      titleText: `Infrared thermography testing (IR) is a non-destructive testing
        technique used to assess the thermal condition of electrical and
        mechanical systems.
`,
    },
  ];

  const lists: listmodel[] = [
    {
      img: "/assets/logo/noninvasive.svg",
      title: "Non-invasive",
      text: "Thermographic testing uses external sensors to inspect, monitor, and diagnose. No need to shut down, Inspections are done during normal operation.",
    },
    {
      img: "/assets/logo/realtime.svg",
      title: "Real-time analysis",
      text: "Delivers real-time thermal images for quick assessments.",
    },
    {
      img: "/assets/logo/costeffective.svg",
      title: "Cost-effective",
      text: "Minimises unplanned downtime and expensive repairs through early fault detection.",
    },
    {
      img: "/assets/logo/safety.svg",
      title: "Improves Safety",
      text: "Identifies potential faults without physical contact, reducing risk to personnel.",
    },
    {
      img: "/assets/logo/highprecision.svg",
      title: "High-Precision",
      text: "Detects small temperature differences, preventing overheating, misalignment, or inadequate lubrication.",
    },
  ];
  interface appTexts {
    appTitle: string;
    appText: string;
  }
  const appTexts: appTexts[] = [
    {
      appTitle: "Electrical systems",
      appText:
        "IRT is instrumental in detecting overheating, faulty components, and overloaded circuits—minimizing the risk of electrical fires and equipment failure.",
    },
    {
      appTitle: "Mechanical Systems",
      appText:
        "IRT is instrumental in detecting overheating, faulty components, and overloaded circuits—minimizing the risk of electrical fires and equipment failure.  ",
    },
    {
      appTitle: "Fluid Systems",
      appText:
        "We detect pipeline blockages, irregular fluid temperatures, and tank level inconsistencies—providing early alerts that  prevent costly system failures.  ",
    },
    {
      appTitle: "Construction & Building   Diagnostics ",
      appText:
        "IRT is used to uncover insulation gaps, moisture intrusion, plumbing leaks, and air leakages—improving energy efficiency and structural integrity.",
    },
    {
      appTitle: "Low-Slope Roofing",
      appText:
        "Thermographic scans help identify trapped moisture, leaks, and deteriorated insulation within roofing systems, preventing extensive water damage.",
    },
  ];

  interface industrialData {
    title: string;
    text: string;
  }
  const industrialData: industrialdata[] = [
    {
      title: "Test & Measurement",
      text: "  Infrared cameras, thermometers, and pyrometers are extensively used in R&D, such as measuring particle temperatures in coal combustion to analyze combustion dynamics.",
    },
    {
      title: "Injection Molding",
      text: "Thermal imagers help monitor surface temperatures in distribution products through automated systems, ensuring consistency and quality.",
    },
    {
      title: "Manufacturing",
      text: "Infrared cameras, thermometers, and pyrometers are extensively used in R&D, such as measuring particle temperatures in coal combustion to analyze combustion dynamics.",
    },
    {
      title: "Condition Monitoring",
      text: " Thermal imaging plays a pivotal role in predictive maintenance. It helps detect early signs of equipment failure, reducing downtime and avoiding catastrophic breakdowns, making it a cost-effective and essential tool for asset health monitoring.",
    },
  ];

  interface thermography {
    title: string;
    text: string;
  }

  const thermography: thermography[] = [
    {
      title: "Electrical thermography",
      text: "Inspection of electrical systems to find hotspots, loose connections, or phase imbalance in switchboards, transformers, circuit breakers.",
    },
    {
      title: "Mechanical Thermography",
      text: "Evaluating and monitoring equipment components such as bearings, shafts, pumps, and gearboxes to identify heat patterns due to friction, misalignment, or wear.",
    },
    {
      title: "Building and HVAC",
      text: "Monitoring building components or enclosures to detect insulation defects, moisture intrusion, air leaks, and thermal bridging to maintain structural integrity and energy efficiency.",
    },
  ];
  const name: name[] = [
    {
      title: "Let's talk about our infrared thermography testing",
      text: "Enquire now",
    },
  ];
  const contact: contact[] = [
    {
      title:
        "Don’t let overheating catch you off guard — get a thermography inspection today",
      text: "Get in touch",
    },
  ];
  const conditionMonitiringItems: services[] = [
    {
      name: "Machinery Vibration Analysis",
      link: `/${data.langParam}/services/vibration-analysis`,
    },
    {
      name: "Infrared Thermography Testing",
      link: `/${data.langParam}/services/infrared-thermography-testing`,
    },
    {
      name: "Ultrasound Bearing Inspection",
      link: `/${data.langParam}/services/ultrasonic-inspection`,
    },
    {
      name: "Lube oil Analysis ",
      link: `/${data.langParam}/services/oil-analysis`,
    },
    {
      name: "Performance Testing & Analysis of Pumps and Compressors",
      link: `/${data.langParam}/services/performance-testing-of-pumps-compressors`,
    },
    {
      name: "Piping Vibration Analysis",
      link: `/${data.langParam}/services/piping-vibration-analysis`,
    },
    {
      name: "Motor Current Signature Analysis",
      link: `/${data.langParam}/services/motor-current-signature-analysis`,
    },
  ];
</script>

<Serviceui {bannerItems} href={`/${data.langParam}/contact-us`} />
<Bookmarknav
  bgColor="bg-[#0074BD]"
  textcolor="text-[#FFFFFF]"
  items={infraredItems}
/>
<div class="container mx-auto px-5 py-14 rounded-lg text-left md:px-[55px]">
  <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
    <div class="space-y-6 md:col-span-3">
      <Heading
        size="bannerMaih1"
        id="what-is-vibration"
        className="font-bold text-[#1e3a8a]"
      >
        What is Infrared Thermography testing?
      </Heading>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        <span class="font-semibold"> Infrared Thermography testing</span> is crucial
        in predictive maintenance, allowing early identification of potential problems
        before they lead to equipment failure or unplanned downtime. This method
        maps and visualises thermal energy emitted by equipment, revealing temperature
        variations and abnormal heat patterns that indicate issues such as overheating,
        insulation defects, and electrical faults, all without the need for direct
        contact.
      </P>
      <P
        size="texts18"
        id="vibration-description"
        class="text-gray-700 leading-relaxed"
      >
        With a strong presence in the UAE and the Middle East,
        AssetConditionMonitoring.com provides <span class="font-semibold"
          >thermographic testing</span
        >
        and advanced electrical infrared inspection services tailored to various
        industrial applications. Known for its precision and efficiency, thermographic
        testing is crucial for ensuring operational safety and system
        <reliability class="span font-semibold">
          Our Infrared thermography inspection</reliability
        >
        services and
        <span class="font-semibold">electrical infrared inspection</span> are crucial
        in evaluating the condition of:
      </P>
      <ul
        id="vibration-points"
        class="space-y-2 text-blue-700 pl-10 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
      >
        <li class="list-disc font-inter font-medium">
          <span class="font-semibold"
            >Infrared Thermography Electrical inspection</span
          > for Electrical systems (switchgear, circuit breakers, transformers)
        </li>
        <li
          class="list-disc font-inter font-medium xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
        >
          Machine parts (Motors, pumps, bearings)
        </li>
        <li
          class="list-disc font-inter font-medium xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
        >
          HVAC and Duct systems
        </li>
        <li
          class="list-disc font-inter font-medium xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
        >
          Insulations
        </li>
        <li
          class="list-disc font-inter font-medium xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
        >
          Infrastructure and buildings for heat loss or moisture intrusion.
        </li>
      </ul>
    </div>

    <Contactus allServices={conditionMonitiringItems} />
  </div>
</div>

<Explore {name} width="w-[90%]" data={`/${data.langParam}/contact-us`} />

<Listview
  {lists}
  mainheading="Benefits Of Infrared Thermography Testing"
  paragraph="Infrared thermography testing is a technique that detects abnormal heat
        patterns in machines. It uses thermal imaging technology to identify
        temperature differences that may point to issues like electrical
        resistance, insulation failure, or fluid leaks. High-resolution Infrared
        cameras capture thermal images (thermograms), giving insights into
        real-time equipment condition assessment."
/>

<section class="bg-white py-16 w-full">
  <div
    class="px-2 flex flex-col text-center leading-tight hyphens-auto md:px-[55px]"
  >
    <Heading
      size="bannerMaih1"
      className="font-bold text-[#1E3A8A] mb-6 text-center "
    >
      Infrared Thermography Testing Procedure with AssetConditionMonitoring.com
    </Heading>
    <P size="texts18" className="text-gray-700 leading-relaxed mb-12 px-5">
      We have different categories of thermal assessment for preventive
      maintenance and fault detection, conducted through careful execution. Our
      expert services include:
    </P>
    <Rectanglebox
      property={thermography}
      titlewidth="md:w-[27%]"
      textwidth="md:w-[73%]"
    />
  </div>
</section>

<!-- Applications -->
<section class=" h-auto scroll-mt-52" id="applications">
  <div class="md:pl-[30px] lg:pl-[45px] xl:pl-[121px] flex md:px-[55px]">
    <div
      class="flex gap-5 w-full lg:w-[812px] justify-center md:justify-start items-center text-left"
    >
      <Heading size="bannerMaih1" className="font-bold text-[#1E3A8A]">
        Applications Across Key Systems
      </Heading>
      <div class="">
        <Yellowline />
      </div>
    </div>
  </div>
</section>

<section
  class="flex flex-col md:flex-row mx-5 md:mx-5 xl:pb-5 lg:mx-10 xl:ml-[100px]"
>
  <div
    class="flex flex-col md:flex-row justify-center items-center md:items-start gap-2 md:gap-20 lg:gap-[6rem] xl:gap-16 mt-10 md:mt-0"
  >
    <div
      class="flex justify-center md:block md:mt-[57px] lg:mt-[100px] xl:mt-[55px] w-full md:w-[40%] lg:w-[40%]"
    >
      <div
        class="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[277px] md:h-[300px] lg:w-[340px] lg:h-[360px] xl:w-[420px] xl:h-[420px] 2xl:w-[400px] 2xl:h-[400px] bg-[#3380C7] rounded-lg relative"
      >
        <div
          class="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[277px] md:h-[300px] lg:w-[340px] lg:h-[360px] xl:w-[420px] xl:h-[420px] 2xl:w-[400px] 2xl:h-[400px] bg-[#D9D9D9] rounded-lg absolute top-[20px] left-[20px] sm:top-[24px] sm:left-[24px] md:top-[34px] md:left-[34px] z-20"
        >
          <img
            src="/assets/img/infrareddummy.png"
            alt=""
            class="object-cover h-full w-full rounded-lg"
          />
        </div>
      </div>
    </div>

    <div class="mt-12 w-full md:w-[60%] lg:w-[60%] xl:mx-5">
      <div class="space-y-5">
        {#each appTexts as object}
          <div>
            <Heading
              size="headingS20"
              className="text-[#1E3A8A] font-extrabold"
            >
              {object.appTitle}
            </Heading>
            <P size="texts18" className="font-normal">
              {object.appText}
            </P>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- industrial -->
<section class="h-auto mt-[160px]">
  <div class="text-center flex justify-center item-center gap-5">
    <div class="flex justify-center gap-3">
      <Heading size="bannerMaih1" className="font-extrabold text-[#1E3A8A]">
        Industry-Specific Applications of Infrared Thermography
      </Heading>
      <div class="pt-3">
        <Yellowline />
      </div>
    </div>
  </div>
  <div class="mt-12">
    {#each industrialData as data}
      <div
        class="mt-5 container mx-auto px-5 flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 md:gap-5 h-full items-start md:px-[55px] text-justify"
      >
        <Verticalline />
        <div class="flex-1 min-w-0">
          <Heading size="headingS20" className="text-[#1E3A8A] font-extrabold">
            {data.title}
          </Heading>
          <P size="texts16" className="text-gray-700 break-words">
            {data.text}
          </P>
        </div>
      </div>
    {/each}
  </div>
</section>

<section class="scroll-mt-20" id="services">
  <Slidecards {cardData} {cardMain} />
</section>

<section id="why-choose-us" class="bg-white py-16 scroll-mt-20">
  <div class="w-full px-5 container mx-auto md:px-[55px] text-left">
    <Heading size="bannerMaih1" className="font-bold text-[#1E3A8A] mb-6">
      Looking for the Best Infrared Thermography Testing in the Middle East?
    </Heading>
    <P size="texts18" className="text-gray-700 leading-relaxed">
      If you're seeking reliable and expert <span class="font-semibold"
        >Infrared Thermography (IRT) services</span
      >
      in the Middle East to ensure consistent inspections and maximize survey outcomes,
      look no further than
      <span class="font-semibold">AssetConditionMonitoring.com—</span>a trusted
      name in advanced thermal imaging solutions across the UAE.
    </P>

    <P size="texts16" className="text-gray-700 leading-relaxed mb-8">
      Our accredited and highly trained specialists are equipped with
      industry-leading thermal imaging technology to detect abnormal temperature
      patterns and their root causes with precision. By identifying faults
      early, we help prevent equipment failure and offer sustainable,
      cost-effective solutions under our comprehensive <span
        class="font-bold text-[#0B60B0]">condition monitoring services.</span
      >
    </P>
    <Heading
      size="bannerMaih1"
      id="what-is-vibration"
      className="font-bold text-[#1e3a8a]"
    >
      Why Choose Our Infrared Thermography Services?
    </Heading>
    <P size="texts18" className="text-[#2F2F2F] pt-5">
      In today's fast-paced industrial landscape, unplanned downtime is a costly
      risk. That's where vibration analysisbecomes a game-changer—providing
      real-time insights into the health of your machinery and helping detect
      issues before they turn into failures. Here's why it matters:
    </P>

    <ul
      class="space-y-5 mt-8 px-5 text-[#1E3A8A] xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <li class="flex items-center gap-3">
        <span class="max-w-4 max-h-4">
          <Circlehook data="w-4 h-4" />
        </span>

        <span class="font-semibold"
          >Non-contact, non-invasive diagnostics for a wide range of assets.</span
        >
      </li>
      <li class="flex items-center gap-3">
        <span class="max-w-4 max-h-4">
          <Circlehook data="w-4 h-4" />
        </span>

        <span class="font-semibold"
          >Early fault detection to prevent major equipment breakdowns</span
        >
      </li>
      <li class="flex items-center gap-3">
        <span class="max-w-4 max-h-4">
          <Circlehook data="w-4 h-4" />
        </span>

        <span class="font-semibold"
          >Timely defect resolution to minimize downtime and operational costs</span
        >
      </li>
      <li class="flex items-center gap-3">
        <span class="max-w-4 max-h-4">
          <Circlehook data="w-4 h-4" />
        </span>

        <span class="font-semibold"
          >Over a decade of industry experience, ensuring dependable and
          accurate results</span
        >
      </li>
      <li class="flex items-center gap-3">
        <span class="max-w-4 max-h-4">
          <Circlehook data="w-4 h-4" />
        </span>

        <span class="font-semibold"
          >Affordable thermal imaging services tailored to your needs.</span
        >
      </li>
    </ul>

    <P size="texts18" className="text-gray-700 leading-relaxed mt-8">
      From electrical panels to mechanical components and fluid systems, our IRT
      solutions are engineered to protect your assets, reduce risks, and improve
      operational efficiency.
    </P>
    <P size="texts18" className="text-gray-700 leading-relaxed mt-8">
      <span class="font-semibold">Contact AssetConditionMonitoring.com</span> today
      to detect hidden anomalies before they become costly failures—and safeguard
      your business with confidence.
    </P>
  </div>
</section>

<Explore name={contact} width="w-[90%]" data={`/${data.langParam}/contact-us`} />

<Faq faqs={infraRedFaqs} />

<style>
  div::-webkit-scrollbar {
    display: none;
  }
</style>
