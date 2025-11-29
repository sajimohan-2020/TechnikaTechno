<script lang="ts">
  // @ts-nocheck
  import * as Accordion from "$lib/components/ui/accordion";
  import { PUBLIC_APIURL } from "$env/static/public";
  import { slide } from "svelte/transition";
  import Faqs from "$lib/components/faq/Faq.svelte";
  import { ultraSonicFaqs, ultrasoundItems } from "$lib/components/data/assets";
  import Contactus from "$lib/components/contactus/ContactUs.svelte";
  import Serviceui from "$lib/components/serviceui/ServiceUI.svelte";
  import Dropdown from "$lib/components/dropdown/DropDown.svelte";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  import Slidecards from "$lib/components/slidecard/SlideCard.svelte";
  import { ultraDropdown } from "$lib/components/data/assets";
  import { text } from "@sveltejs/kit";
  import Bookmarknav from "$lib/components/bookmarknav/BookMarkNav.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import GrayCircle from "$lib/icons/svgs/grayCircle.svelte";
  import Yellowarrow from "$lib/icons/svgs/yellowarrow.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  import Listview from "$lib/components/listview/ListView.svelte";
  import {
    ultraSonicCard,
    ultrasonicCardData,
  } from "$lib/components/data/assets";

  /** @type {import('./$types').PageData} */

  export let data;

  interface bannerItems {
    img?: string;
    title: string;
    titleText?: string;
  }
  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/Ultrasound Bearing Testing.webp`,
      title: " Ultrasound Bearing Inspection",
      titleText: ` Ultrasound Inspection, a versatile non-destructive testing (NDT) method
        to check the inside of a material without causing any damage. Sound
        waves are sent into the object to see changes within. A great advantage
        of ultrasound inspection is that it can find anomalies early, even
        before any faults come to the surface.`,
    },
  ];

  interface cardMain {
    cardHeader: string;
    cardPara: string;
  }

  const ultrasoundlists: listmodel[] = [
    {
      img: "/assets/logo/costeffective.svg",
      title: "User-Friendly & Cost-Effective",
      text: ` Simple to operate and comparatively more affordable than many other diagnostic methods`,
    },
    {
      img: "/assets/logo/versatile.svg",
      title: "Versatile Across Environments",
      text: `Suitable for use in a wide range of industrial and environmental conditions.`,
    },
    {
      img: "/assets/logo/datacollection.svg",
      title: "Data Collection & Trend Monitoring",
      text: `Advanced ultrasound equipment enables the collection and storage of inspection data for future analysis—ideal for trend monitoring over time.`,
    },
    {
      img: "/assets/logo/realtime.svg",
      title: "Enhanced Productivity",
      text: `Facilitates accurate fault detection, helping to minimize downtime and maximize operational efficiency.`,
    },
    {
      img: "/assets/logo/maintancetools.svg",
      title: "Reliable Predictive Maintenance Tool",
      text: `Identifies early signs of failure before they escalate, enabling timely corrective action and reducing maintenance costs.`,
    },
    {
      img: "/assets/logo/remotescreen.svg",
      title: "Supports Remote Monitoring",
      text: `Capable of being integrated into remote monitoring systems for both mechanical and electrical applications`,
    },
  ];

  const name: name[] = [
    {
      title: "Lets talk about our advanced  ultrasonic testing ",
      // and ultrasonic testing NDT services in the UAE and the MENA region
      text: "Enquire now",
    },
  ];

  const contact: name[] = [
    {
      title:
        "Detect internal flaws before they become failures—schedule ultrasonic testing today",
      text: "Lets talk",
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
<svelte:head>
  <meta name="robots" content="index, follow" />
</svelte:head>
<!-- Banner Section -->
<Serviceui {bannerItems} href={`/${data.langParam}/contact-us`} />

<!-- Bookmark Link Bar -->
<Bookmarknav
  bgColor="bg-[#0074BD]"
  textcolor="text-[#FFFFFF]"
  items={ultrasoundItems}
/>

<!-- New Section Below Bookmark Bar -->
<div
  class="container md:px-[55px] mx-auto px-5 py-14 rounded-lg scroll-mt-20"
  id="what-is"
>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
    <!-- Left Side -->
    <div class="space-y-6 md:col-span-3">
      <div class="flex gap-3">
        <Heading
          size="bannerMaih1"
          id="what-is-vibration"
          className="font-bold text-[#1e3a8a] "
        >
          Ultrasonic Testing (UT) & Inspection Services
        </Heading>
        <div class="pt-3"><Yellowline /></div>
      </div>

      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        AssetConditionMonitoring.com provides expert Ultrasonic Testing services
        for industrial and mechanical <span class="font-semibold"
          >equipment health monitoring</span
        >
        in the UAE and the Middle East.
        <span class="font-semibold">Our services include</span> laser ultrasonic
        inspection, mechanical inspections, Partial Discharge in switchgear, steam
        trap inspections, valve leak detection, and Compressed Air System Inspection.
        All these services can be performed while the plant is running.
      </P>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        Our non-invasive ultrasound inspection services help catch early signs
        of wear, friction, leaks, electrical discharge, and other faults,
        aligning with our clients' long-term <span class="font-semibold"
          >predictive or preventive maintenance and real-time condition
          monitoring strategies</span
        >.
      </P>
      <P
        size="texts20"
        className="font-bold text-[#1e3a8a] mb-12 text-center md:text-left"
      >
        Why use Ultrasound for maintenance?
      </P>

      <ul
        id="vibration-points"
        class="space-y-4 text-[#1E3A8A] pl-10 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
      >
        <li class="list-disc font-inter font-medium">
          Non-invasive, fast, and highly reliable
        </li>
        <li class="list-disc font-inter font-medium">
          Improves operational efficiency and safety.
        </li>
        <li class="list-disc font-inter font-medium">
          Facilitates predictive maintenance strategies.
        </li>
        <li class="list-disc font-inter font-medium">
          Avoid breakdown due to early fault detection.
        </li>
      </ul>
    </div>

    <!-- Right Side -->
    <Contactus allServices={conditionMonitiringItems} />
  </div>
</div>
<Explore {name} width="w-[90%]" data={`/${data.langParam}/contact-us`} />

<section class="scroll-mt-20" id="ultrasonic-process">
  <Slidecards cardMain={ultraSonicCard} cardData={ultrasonicCardData} />
</section>

<section class="">
  <Listview
    lists={ultrasoundlists}
    mainheading="Benefits of Ultrasound Analysis in Predictive Maintenance"
    sideheading="Key Advantages of Ultrasound Analysis:"
    paragraph="Ultrasound analysis can be implemented as a one-time inspection or as part
      of a long-term monitoring strategy, allowing for periodic data collection
      and proactive fault detection. Whether used for mechanical or electrical
      systems, ultrasound analysis offers numerous advantages:"
  />
</section>

<section class="bg-[#F7F7F7] h-auto mt-20">
  <div class="px-5 lg:pl-[75px] pt-[50px]">
    <div class="flex gap-3">
      <Heading size="bannerMaih1" className="text-[#1E3A8A] font-bold">
        Ultrasound Analysis Services We offer
      </Heading>
      <div class="pt-2"><Yellowline /></div>
    </div>

    <P size="texts18" className="pt-2">
      Ultrasound technology is a powerful diagnostic tool used across a wide
      range of industrial applications. Our specialized ultrasound analysis
      services help detect hidden issues early, reduce downtime, and enhance
      overall system performance. Here's a detailed look at the key services we
      provide:
    </P>
  </div>
  <div class="px-5 lg:px-[75px] pt-6 pb-16 scroll-mt-52" id="services">
    <Dropdown contents={ultraDropdown} />
  </div>
</section>

<section class="bg-white py-16 scroll-mt-20" id="advanced-applications">
  <div class="container mx-auto px-5 md:px-[55px]">
    <div class="flex gap-3">
      <Heading size="bannerMaih1" className="font-bold text-[#1846A3] mb-6">
        Advanced Ultrasonic Applications in Industrial Inspections
      </Heading>
      <div class="pt-3"><Yellowline /></div>
    </div>

    <P size="texts18" className="text-gray-700 leading-relaxed mb-8">
      Ultrasonic testing is a proven, non-destructive evaluation method used
      across a variety of industries to ensure safety, detect flaws, and
      maintain quality. Below are three key applications where ultrasonic
      technology plays a crucial role:
    </P>
    <Heading
      size="headingS20"
      className=" font-bold text-[#1e3a8a] mb-4 text-center md:text-left"
    >
      Ultrasonic Pipeline Inspection
    </Heading>

    <P size="texts18" className="text-gray-700 leading-relaxed mb-8">
      In sectors like oil and gas, pipelines are frequently exposed to high
      pressures, extreme temperatures, and chemically aggressive substances. To
      prevent failures and enhance operational safety, continuous quality
      control is critical.
    </P>
    <P size="texts18" className="text-gray-700 leading-relaxed mb-8">
      <span class="font-bold">Ultrasonic pipeline inspection</span> is typically
      carried out using intelligent inspection devices known as smart pigs. These
      devices:</P
    >
    <ul
      class=" pl-10 space-y-2 text-gray-700 pb-5 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <li class="flex gap-3 items-start">
        <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
        Detect wall thickness loss due to corrosion or erosion
      </li>
      <li class="flex gap-3 items-start">
        <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
        Identify cracks and material discontinuities
      </li>
      <li class="flex gap-3 items-start">
        <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
        Operate without significant interruption to pipeline flow
      </li>
    </ul>
    <P size="texts18" className="pb-8">
      The transducers used in these pigs must deliver consistent acoustic
      performance and withstand the harsh conditions within pipeline systems.
    </P>

    <P
      size="texts18"
      className="font-bold text-[#1e3a8a] mb-4 text-center md:text-left"
    >
      Flaw Detection in Railways
    </P>

    <P size="texts18" className="text-gray-700 leading-relaxed mb-8">
      Ultrasonic inspection has long been a reliable method for testing rail
      integrity in the railway industry. Specialized transducers are used
      globally in the quality assurance processes of rail networks.
    </P>
    <P size="texts18" className="text-gray-700 leading-relaxed mb-8">
      Common approaches include:</P
    >
    <ul
      class=" pl-10 space-y-2 text-gray-700 pb-5 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <li class="flex gap-3 items-start">
        <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
        Direct-contact probes mounted using mechanical holders
      </li>
      <li class="flex gap-3 items-start">
        <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
        Integrated sensors within liquid-filled test wheels
      </li>
    </ul>
    <P size="texts18" className="pb-8">
      These inspections detect internal rail defects such as cracks by
      transmitting ultrasonic waves at various angles—typically between 35° and
      70°—and orientations. Techniques such as Pulse-Echo and Split-Element (SE)
      modes are employed to ensure comprehensive fault detection and rail
      safety.
    </P>

    <P
      size="texts18"
      className=" font-bold text-[#1e3a8a] mb-4 text-center md:text-left"
    >
      Ultrasonic Testing of Volume Defects and Thickness Tolerances in Sheet
      Metals
    </P>

    <P size="texts18" className="text-gray-700 leading-relaxed mb-8">
      Industries such as shipbuilding, mechanical engineering, and aerospace
      rely heavily on sheet metals, where material quality is paramount.
      Ultrasonic inspection is widely used to verify:
    </P>
    <ul
      class="list-disc pl-10 space-y-2 text-gray-700 pb-5 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <li class="flex gap-3 items-start">
        <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span
        >Internal volume defects
      </li>
      <li class="flex gap-3 items-start">
        <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span
        >Thickness uniformity and tolerances
      </li>
    </ul>
    <P size="texts18" className="pb-5">
      These tests are often automated using integrable ultrasonic transducers,
      which are engineered for:
    </P>
    <ul
      class=" pl-10 space-y-2 text-gray-700 pb-5 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <li class="flex gap-3 items-start">
        <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>High
        reproducibility of acoustic performance
      </li>
      <li class="flex gap-3 items-start">
        <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>Robust
        operation in demanding production environments
      </li>
    </ul>

    <P size="texts18" className="pb-5">
      Such testing ensures compliance with strict industry standards and
      improves structural integrity and product reliability.
    </P>
  </div>
</section>

<section id="why-conditions" class="bg-white">
  <div class="container mx-auto px-5 md:px-[55px]">
    <Heading
      size="bannerMaih1"
      className="font-bold text-[#1846A3] mb-6 text-left"
    >
      Ultrasound Analysis Services by assetconditionmonitoring.com
    </Heading>
    <P size="texts18" className="text-gray-700 leading-relaxed">
      At <span class="font-semibold">assetconditionmonitoring.com</span>, we
      provide industry-leading
      <span class="font-semibold">ultrasound analysis services</span>
      using advanced diagnostic technology and a highly experienced team. Our solutions
      are designed for
      <span class="font-semibold">precision-driven reliability</span>
      and <span class="font-semibold">asset health monitoring</span> across
      critical sectors including
      <span class="font-semibold"> power, oil & gas, aviation</span>, and more.
    </P>
    <P size="texts18" className="text-gray-700 leading-relaxed mb-8">
      As a trusted name in predictive and preventive maintenance, our clients
      count on us to monitor and protect their mission-critical assets. We are
      proud to be an essential contributor to their safety and operational
      efficiency.
    </P>
  </div>
</section>
<section class="bg-[#F4F9FF] mt-10 pb-[40px]">
  <div class="container mx-auto px-5 md:px-[55px] pt-[50px]">
    <div class="flex gap-3">
      <Heading
        size="bannerMaih1"
        className="text-[#1E3A8A] font-bold text-xl md:text-2xl"
      >
        Transform Your Maintenance Strategy
      </Heading>
      <div class="pt-2"><Yellowline /></div>
    </div>

    <P size="texts18" className="pt-4">
      With our specialised ultrasonic testing services, you can take proactive
      control of your equipment health and operational uptime. Here's what makes
      assetconditionmonitoring.com your ideal partner:
    </P>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 md:pl-[75px] py-[10px] pb-[30px]">
    <div class="text-[15px] px-8">
      <!-- Expert Consultation & Smooth Installation -->
      <div class="pt-3 pl-3">
        <div class="flex items-start gap-3">
          <div class="flex flex-shrink-0">
            <Yellowarrow />
            <Yellowarrow />
          </div>
          <div>
            <Heading size="headingS16" className="text-[#1E3A8A] font-bold">
              Expert Consultation & Smooth Installation
            </Heading>
            <P size="texts16" className="text-[#2F2F2F] italic mt-1">
              Customised system setup with minimal downtime.
            </P>
          </div>
        </div>
      </div>

      <!-- Fast Fault Detection -->
      <div class="pt-8 pl-3">
        <div class="flex items-start gap-3">
          <div class="flex flex-shrink-0">
            <Yellowarrow />
            <Yellowarrow />
          </div>
          <div>
            <Heading size="headingS16" className="text-[#1E3A8A] font-bold">
              Fast Fault Detection
            </Heading>
            <P size="texts16" className="text-[#2F2F2F] italic mt-1">
              Ensure maximum uptime with early issue identification.
            </P>
          </div>
        </div>
      </div>

      <!-- Real-Time Monitoring & Alerts -->
      <div class="pt-8 pl-3">
        <div class="flex items-start gap-3">
          <div class="flex flex-shrink-0">
            <Yellowarrow />
            <Yellowarrow />
          </div>
          <div>
            <Heading size="headingS16" className="text-[#1E3A8A] font-bold">
              Real-Time Monitoring & Alerts
            </Heading>
            <P size="texts16" className="text-[#2F2F2F] italic mt-1">
              Get immediate insights into anomalies for quicker response.
            </P>
          </div>
        </div>
      </div>
    </div>

    <div class="text-[15px]">
      <!-- Effortless Integration -->
      <div class="pt-8 md:pt-3 pl-3">
        <div class="flex items-start gap-3">
          <div class="flex flex-shrink-0">
            <Yellowarrow />
            <Yellowarrow />
          </div>
          <div>
            <Heading size="headingS16" className="text-[#1E3A8A] font-bold">
              Effortless Integration
            </Heading>
            <P size="texts16" className="text-[#2F2F2F] italic mt-1">
              Seamless compatibility with your current systems and workflows.
            </P>
          </div>
        </div>
      </div>

      <!-- Prescriptive Maintenance Insights -->
      <div class="pt-8 pl-3">
        <div class="flex items-start gap-3">
          <div class="flex flex-shrink-0">
            <Yellowarrow />
            <Yellowarrow />
          </div>
          <div>
            <Heading size="headingS16" className="text-[#1E3A8A] font-bold">
              Prescriptive Maintenance Insights
            </Heading>
            <P size="texts16" className="text-[#2F2F2F] italic mt-1">
              Turn data into action with targeted recommendations for preventive
              care.
            </P>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="mt-16 mb-10">
  <Explore
    name={contact}
    data={`/${data.langParam}/contact-us`}
    width="w-[90%]"
  />
</div>

<!-- Accordion Section (Manual, like Services page) -->
<Faqs faqs={ultraSonicFaqs} />
