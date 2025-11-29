<script lang="ts">
  // @ts-nocheck
  import * as Accordion from "$lib/components/ui/accordion";
  import { PUBLIC_APIURL } from "$env/static/public";
  import { slide } from "svelte/transition";
  import Faqs from "$lib/components/faq/Faq.svelte";
  import { ptapcFaqs, performanceItems } from "$lib/components/data/assets";
  import Conactus from "$lib/components/contactus/ContactUs.svelte";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  import Serviceui from "$lib/components/serviceui/ServiceUI.svelte";
  import Slidecards from "$lib/components/slidecard/SlideCard.svelte";
  import { ptapcCardMain, ptapcCardData } from "$lib/components/data/assets";
  import Bookmarknav from "$lib/components/bookmarknav/BookMarkNav.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  import Listview from "$lib/components/listview/ListView.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
  const name: name[] = [
    {
      title:
        " Let's talk about our performance testing & analysis of pumps and compressors",
      text: "Enquire now",
    },
  ];
  const contact: contact[] = [
    {
      title:
        "Ensure optimal efficiency — get your pumps tested for peak performance",
      text: "Get in touch",
    },
  ];

  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/Performance Testing pumps and compressors.webp`,
      title: "  Performance Testing & Analysis of Pumps and Compressors",
      titleText: ` Performance tests of centrifugal pumps are crucial for ensuring the efficiency of your pumping systems and the integrity of industrial pumps.  The stability, flow rates, design integrity, and reliability are thoroughly verified to make sure these pumps run safely and efficiently.`,
    },
  ];

  const perfomancelists: listmodel[] = [
    {
      img: "/assets/logo/designcomplince.svg",
      title: "Design compliance",
      text: " Verifies the pumps meet flow rate, efficiency and head as per the requirement.",
    },
    {
      img: "/assets/logo/reliable.svg",
      title: "Reliable",
      text: `Ensure operational
          reliability by finding impellere sizing issues, poor assembly or
          manufacturing defect before site installations.`,
    },
    {
      img: "/assets/logo/energy.svg",
      title: "Energy Efficiency",
      text: `Checks efficiency
          curves, the best operating point (BEP) can be found and selected to
          reduce energy wastage and operating cost.`,
    },
    {
      img: "/assets/logo/systemintegration.svg",
      title: "System Integration",
      text: ` Ensure proper pump
          performance when integrated with other components such as pipes,
          valves etc.`,
    },
    {
      img: "/assets/logo/customer.svg",
      title: "Customer confidence",
      text: `Proper performance
          tests improve the client trust in equipment quality and the vendors
          credibility.`,
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

<!-- Banner Section -->
<Serviceui
  {bannerItems}
  href={`/${data.langParam}/contact-us`}
  data="object-top"
/>

<!-- Bookmark Link Bar -->
<Bookmarknav
  bgColor="bg-[#0074BD]"
  textcolor="text-[#FFFFFF]"
  items={performanceItems}
/>

<!-- New Section Below Bookmark Bar -->
<div
  class="container mx-auto px-5 py-14 rounded-lg scroll-mt-20 md:px-[55px] text-left"
  id="what-is"
>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
    <!-- Left Side -->
    <div class="space-y-6 md:col-span-3">
      <div class="flex gap-1">
        <Heading
          size="bannerMaih1"
          id="what-is-vibration"
          className="font-bold text-[#1e3a8a]"
        >
          Performance testing of pumps and compressors
        </Heading>
        <div class="pt-3"><Yellowline /></div>
      </div>

      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        Performance testing of centrifugal pumps is done to calculate their
        performance efficiency, design, and mechanical integrity. The pump
        performance test verifies the flow rate, total head, power consumption,
        and efficiency to comply with the design, customer references, machine
        compatibility, and operating range.
      </P>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        At assetconditionmonitoring.com, we provide expert assistance with
        Centrifugal pump performance testing and maintenance. We implement
        all-inclusive testing procedures, fully automated using the most
        advanced diagnostic tools to detect any anomalies and optimize pump
        performance.
      </P>
    </div>

    <!-- Right Side -->
    <Conactus allServices={conditionMonitiringItems} />
  </div>
</div>

<Explore {name} width="w-[90%]" data={`/${data.langParam}/contact-us`} />

<section class="scroll-mt-20" id="our-process">
  <Slidecards cardMain={ptapcCardMain} cardData={ptapcCardData} />
</section>

<section id="benefits-of-pump-testing" class="scroll-mt-20">
  <Listview
    mainheading="Benefits of Performance of pump testing"
    lists={perfomancelists}
  />
</section>

<section class="bg-white py-16 scroll-mt-20" id="why-choose-us">
  <div class="container mx-auto px-5 md:px-[55px] text-left">
    <Heading size="bannerMaih1" className="font-bold text-[#1E3A8A] mb-6 ">
      Why Choose Us ?
    </Heading>
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed"
    >
      At assetconditionmonitoring.com, we bring you reliable, precise and
      ISO-compliant pump testing services to guarantee your equipment meet your
      performance and reliability metrics. Weather its a single-unit check or an
      entire project series, our centrifugal pump testing services deliver the
      confidence and precision.
    </P>
    <div
      class="grid grid-cols-1 text-[#1E3A8A] gap-8 pt-5 px-5 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <ul class="space-y-6 font-semibold">
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>ISO/ANSI/API compliant testing</span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Advanced test facilities</span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Certified & experienced engineering team</span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Detailed reports with performance curves</span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Customise testing for different pump types and sizes</span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Trusted by Major OEMs and EPCs</span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Quality and precision services</span>
        </li>
      </ul>
      <ul class="space-y-3"></ul>
    </div>
  </div>
</section>
<Explore name={contact} width="w-[90%]" data={`/${data.langParam}/contact-us`} />

<!-- Accordion Section (Manual, like Services page) -->
<Faqs faqs={ptapcFaqs} />
