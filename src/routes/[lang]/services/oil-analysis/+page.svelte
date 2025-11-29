<script lang="ts">
  // @ts-nocheck
  import * as Accordion from "$lib/components/ui/accordion";
  import { PUBLIC_APIURL } from "$env/static/public";
  import { slide } from "svelte/transition";
  import Faq from "$lib/components/faq/Faq.svelte";
  import { Lubefaqs, lubeoilItems } from "$lib/components/data/assets";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  import Serviceui from "$lib/components/serviceui/ServiceUI.svelte";
  import Contactus from "$lib/components/contactus/ContactUs.svelte";
  import Box from "$lib/components/boxes/Boxes.svelte";
  import Bookmarknav from "$lib/components/bookmarknav/BookMarkNav.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  import Yellowarrow from "$lib/icons/svgs/yellowarrow.svelte";
  import type { Contact } from "lucide-svelte";
  import Listview from "$lib/components/listview/ListView.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
  interface bannerItems {
    img?: string;
    title: string;
    titleText?: string;
  }
  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/Lube Oil Analysis.webp`,
      title: "Lube Oil Analysis",
      titleText: `Discover what lube oil analysis is, how it helps monitor machinery
        health, detect damage and debris, and extend equipment life through
        predictive maintenance.`,
    },
  ];

  const name: name[] = [
    { title: "Let's talk about our lube oil analysis", text: "Enquire now" },
  ];
  const contact: contact[] = [
    {
      title:
        "Don’t let equipment failure sneak up on you — schedule an oil analysis today!",
      text: "Get in touch",
    },
  ];
  const lubeoillists: listmodel[] = [
    {
      img: "/assets/logo/detectsearly.svg",
      title: "Detects early equipment wear",
      text: `Timely detection
        of wear before it becomes an equipment failure.`,
    },
    {
      img: "/assets/logo/oillife.svg",
      title: "Improves machinery and oil life",
      text: ` Engine oil
        analysis improves the equipment life and extends the service lifespan significantly.`,
    },
    {
      img: "/assets/logo/reducecost.svg",
      title: "Reduces maintenance costs",
      text: `Proper and Regular
        oil testing helps detect debris and degradation, cutting repair expenses.`,
    },
    {
      img: "/assets/logo/breakdowns.svg",
      title: "Prevents unexpected breakdowns",
      text: `spotting
        wear timely before failure helps prevent sudden unexpected operational
        shutdowns.`,
    },
    {
      img: "/assets/logo/contamination.svg",
      title: "Identifies contamination",
      text: `Detects harmful
        substances like water, fuel, dirt, or colland that can damage the components.`,
    },
    {
      img: "/assets/logo/aidsdata.svg",
      title: "Aids data-driven maintenance",
      text: `Provides
        actionable strategies to plan maintenance based on the real condition of
        equipment.`,
    },
    {
      img: "/assets/logo/longterm.svg",
      title: "Tracks long-term equipment status",
      text: `Monitors
        oil and machine to generate patterns and recurrent issues.`,
    },
    {
      img: "/assets/logo/improvesenergy.svg",
      title: "Improves efficiency and sustainability",
      text: `Regular Oil analysis enhances performance, avoids energy loss, and
        minimizes environmental impact.`,
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
  items={lubeoilItems}
/>

<!-- New Section Below Bookmark Bar -->
<div
  class="container mx-auto px-4 py-14 rounded-lg scroll-mt-20 md:px-[55px] text-left leading-tight hyphens-auto"
  id="what-is"
>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
    <!-- Left Side -->
    <div class="space-y-6 md:col-span-3">
      <Heading
        size="bannerMaih1"
        id="what-is-vibration"
        className="font-bold text-[#1e3a8a]"
      >
        What is Lube Oil Analysis?
      </Heading>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        Lube Oil analysis is a critical machine health monitoring tool to
        understand the condition of lubricating oils in engines, transmissions
        and other industrial components. By testing the oils for wear,
        particles, contaminants, and degradation, industries can find issues and
        correct them before they escalate into more significant problems. At
        assetconditionmonitoring.com, we offer expert oil testing that helps
        extend equipment life and reduce costly downtime.
      </P>
      <p class="font-bold text-[#1e3a8a] mb-12 text-left text-xl md:text:2xl">
        How we perform lube oil analysis for clients:
      </p>

      <ul
        class="list-disc pl-10 space-y-7 text-[#1E3A8A] xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
      >
        <li>
          <span class="font-bold"> Sample collection:</span> Sampling kits are supplied
          to collect samples directly from the equipment, following best practices
          to avoid contamination.
        </li>
        <li>
          <span class="font-bold"> Lab testing: </span>The sample oils are
          tested in a certified laboratory for their viscosity, wear,
          contaminants such as water or fuel, oxidation, and additive depletion.
        </li>
        <li>
          <span class="font-bold"> Analysis:</span>Our expert engineers
          interpret the collected data to assess the machine's health and oil
          condition.
        </li>
        <li>
          <span class="font-bold"> Reporting: </span>The clients are provided
          with detailed reports with simple visuals, performance ratings, and
          recommendations.
        </li>
        <li>
          <span class="font-bold">Continued Monitoring: </span> We track the equipment
          on an ongoing basis to identify trends and optimise maintenance schedules
          to prevent unplanned downtime.
        </li>
      </ul>
    </div>

    <!-- Right Side -->
    <Contactus allServices={conditionMonitiringItems} />
  </div>
</div>

<Explore {name} width="w-[90%]" data={`/${data.langParam}/contact-us`} />

<section id="benefits" class="scroll-mt-20">
  <Listview
    mainheading="Benefits of engine oil analysis"
    lists={lubeoillists}
    paragraph="Oil analysis is crucial for maintaining equipment reliability. By finding
      early signs of wear or oil degradation, unexpected failures, and costly
      downtimes can be prevented. This proactive approach improves safety and
      enhances overall operational efficiency. Let’s look at the benefits of
      engine oil analysis:"
  />
</section>

<section class="bg-white py-14 scroll-mt-20" id="services">
  <div class="container mx-auto px-5 md:px-[55px] hyphens-auto">
    <div class="text-center flex justify-center item-center gap-3">
      <Heading
        size="bannerMaih1"
        className="font-bold text-[#1E3A8A] mb-6 text-center"
      >
        Our Services
      </Heading>
      <div class="pt-3"><Yellowline /></div>
    </div>
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed text-left pb-10"
    >
      At asstconditionmonitoring.com, we provide advanced oil testing services
      to improve the performance and longevity of your critical equipment. Our
      in-depth diagnostics detect oil degradation and contamination, allowing
      you to act before failures occur. From routine monitoring to expert
      services, we help optimize your maintenance strategies, reducing operating
      costs and maximizing asset reliability. Our comprehensive services
      include:
    </P>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:pl-[90px] lg:pr-[90px] 2xl:pl-[200px] 2xl:pr-[200px] xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <div class="space-y-6">
        <div
          class="flex md:items-start lg:item-center border border-[#0B60B0] rounded-lg px-6 py-4 bg-white"
        >
          <span class="flex items-center mr-4 md:mt-1">
            <Yellowarrow />
            <Yellowarrow />
          </span>
          <span class="text-gray-800">Lubricant condition evaluation</span>
        </div>
        <div
          class="flex md:items-start lg:item-center border border-[#0B60B0] rounded-lg px-6 py-4 bg-white"
        >
          <span class="flex items-center mr-4 md:mt-1">
            <Yellowarrow />
            <Yellowarrow />
          </span>
          <span class="text-gray-800">Wear metal detection</span>
        </div>
        <div
          class="flex md:items-start lg:item-center border border-[#0B60B0] rounded-lg px-6 py-4 bg-white"
        >
          <span class="flex items-center mr-4 md:mt-1">
            <Yellowarrow />
            <Yellowarrow />
          </span>
          <span class="text-gray-800">Additive depletion monitoring</span>
        </div>
      </div>
      <div class="space-y-6">
        <div
          class="flex md:items-start lg:item-center border border-[#0B60B0] rounded-lg px-6 py-4 bg-white"
        >
          <span class="flex items-center mr-4 md:mt-1">
            <Yellowarrow />
            <Yellowarrow />
          </span>
          <span class="text-gray-800">Viscosity and oxidation inspection</span>
        </div>
        <div
          class="flex items-start lg:item-center border border-[#0B60B0] rounded-lg px-6 py-4 bg-white"
        >
          <span class="flex items-center mr-4 md:mt-1">
            <Yellowarrow />
            <Yellowarrow />
          </span>
          <span class="text-gray-800"
            >Root cause analysis via oil diagnostics</span
          >
        </div>
        <div
          class="flex md:items-start lg:item-center border border-[#0B60B0] rounded-lg px-6 py-4 bg-white"
        >
          <span class="flex items-center mr-4 md:mt-1">
            <Yellowarrow />
            <Yellowarrow />
          </span>
          <span class="text-gray-800">Regular oil monitoring support</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-white py-16 scroll-mt-20" id="why-choose-us">
  <div class="container mx-auto md:px-[55px] text-left px-5">
    <Heading size="bannerMaih1" className="font-bold text-[#1E3A8A] mb-6 ">
      Why Choose Us ?
    </Heading>
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed pb-10 "
    >
      As a trusted provider of Lube oil analysis services,
      assetconditionmonitoring.com delivers precision diagnostics and proactive
      maintenance solutions for industries. With the advanced testing
      technology, we help you monitor the health of your machinery and
      lubricants with utmost accuracy. Partner with us to gain an in-depth
      understanding of component wear, contamination, and overall system
      performance. We provide:
    </P>
    <div
      class="grid grid-cols-1 text-[#1E3A8A] gap-8 px-5 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <ul class="space-y-6 font-semibold">
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Service consultation and sample collection</span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Non-invasive diagnostics with no equipment shutdown</span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Motor oil analysis and oil condition monitoring</span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Maintenance planning and lubricant support</span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Easy-to-read, actionable reports</span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Root cause analysis</span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Engine oil analysis and oil sample analysis</span>
        </li>
      </ul>
      <ul class="space-y-6 font-semibold"></ul>
    </div>
  </div>
</section>
<Explore name={contact} width="w-[90%]" data={`/${data.langParam}/contact-us`} />

<Faq faqs={Lubefaqs} />
