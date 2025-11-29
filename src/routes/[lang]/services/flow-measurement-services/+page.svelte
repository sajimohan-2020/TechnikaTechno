<script lang="ts">
  // @ts-nocheck
  import * as Accordion from "$lib/components/ui/accordion";
  import { PUBLIC_APIURL } from "$env/static/public";
  import { slide } from "svelte/transition";
  import Faq from "$lib/components/faq/Faq.svelte";
  import Slidecard from "$lib/components/slidecard/SlideCard.svelte";
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

  import {
    flowMeasurements,
    flowMeasurementsFaqs,
  } from "$lib/data/flowMeasurementServices";
  /** @type {import('./$types').PageData} */
  export let data;
  interface bannerItems {
    img?: string;
    title: string;
    titleText?: string;
  }
  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/Flow Measurement Services.webp`,
      title: "Flow Measurement Services",
      titlesubheading:
        "Unlock High-Precision Flow Measurement Solutions for Industrial Efficiency",
      titleText: `At Assetconditionmonitoring.com, we provide professional flow measurement services as part of our condition monitoring solutions across the Middle East. Monitoring the flow of liquids, gases, or steam within machinery systems is critical in  maintaining the machine's efficiency and preventing unexpected downtimes.
`,
    },
  ];

  const fMSlists: listmodel[] = [
    {
      img: "/assets/logo/carbon.png",
      title: "",
      text: `Non-intrusive clamp-on meters that enable flow measurement without pipe cutting or system shutdown
`,
    },
    {
      img: "/assets/logo/settings.png",
      text: `High accuracy to support decision making in operational efficiency
`,
    },
    {
      img: "/assets/logo/time.png",
      text: `Rapid response time so changes in flow are detected nearly in real time

`,
    },
    {
      img: "/assets/logo/sensors.png",
      text: `Wide variety of sensors and transducer options for different pipe sizes and media

`,
    },
    {
      img: "/assets/logo/report.png",
      text: `Detailed reports to inform maintenance, energy optimization, and compliance needs

`,
    },
    {
      img: "/assets/logo/accountservices.png",
      text: `Optional technician-led service including training, device configuration, and interpretation of results

`,
    },
  ];

  const contact: contact[] = [
    {
      title: "Optimize your operations with precision flow measurement.",
      text: "Contact us",
    },
  ];

  const acousticTestingItems: services[] = [
    {
      name: "Compressed Air Leak Detection Services",
      link: `/${data.langParam}/services/compressed-air-leak-detection`,
    },
    {
      name: "Flow Measurement Services",
      link: `/${data.langParam}/services/flow-measurement-services`,
    },
    {
      name: "Steam Trap Testing",
      link: `/${data.langParam}/services/steam-trap-testing`,
    },
  ];
</script>

<!-- Banner Section -->
<Serviceui {bannerItems} href={`/${data.langParam}/contact-us`} />

<!-- Bookmark Link Bar -->
<Bookmarknav
  bgColor="bg-[#0074BD]"
  textcolor="text-[#FFFFFF]"
  items={flowMeasurements}
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
        What is Ultrasonic Flow Measurement?
      </Heading>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        <span class="font-bold"> Ultrasonic flow measurement</span> is a reliable,
        non-invasive technique that uses high-frequency sound waves to determine
        the flow rate of liquids or gases in pipelines. By either measuring the time
        it takes for ultrasonic pulses to travel through the fluid or analyzing the
        Doppler shift from waves reflected off particles. This technology delivers
        high accuracy and is widely applied in industries such as water treatment,
        oil and gas, HVAC, and process manufacturing.
      </P>
      <p class="font-bold text-[#1e3a8a] mb-12 text-left text-xl md:text:2xl">
        Key Features & Applications:
      </p>

      <ul
        class="list-disc pl-10 space-y-7 text-[#1E3A8A] xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
      >
        <li>
          Accurate measurement of liquid velocity and flow rates inside pipes
        </li>
        <li>
          Suitable for temporary monitoring or permanent installations across
          industries
        </li>
        <li>
          Provides leak detection, energy efficiency analysis, and system
          performance checks
        </li>
        <li>
          Ideal for routine inspections, diagnostics, and compliance audits
        </li>
        <li>
          Supports diverse applications including liquids, gases, steam, open
          channels, effluent flow, and resource monitoring
        </li>
        <li>
          Delivers professional, customized reports tailored to operational
          requirements
        </li>
      </ul>
    </div>

    <!-- Right Side -->
    <Contactus allServices={acousticTestingItems} />
  </div>
</div>

<Listview
  mainheading="Benefits Of Flow Measurement Services:"
  lists={fMSlists}
/>

<section class=" scroll-mt-20" id="steps"></section>

<section class="bg-white pt-16 scroll-mt-20" id="why-choose-us">
  <div class="container mx-auto md:px-[55px] text-left px-5">
    <div class="flex gap-4">
      <Heading
        size="bannerMaih1"
        id="what-is-vibration"
        className="font-bold text-[#1e3a8a]"
      >
        Why choose Us?
      </Heading>
      <div
        class="pt-2
        "
      >
        <Yellowline />
      </div>
    </div>
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed pt-6"
    >
      <span class="font-bold"
        >With over 19 years of expertise in condition monitoring,
        Assetconditionmonitoring.com is your trusted partner for precision flow
        measurement in the UAE.</span
      >
      Our ultrasonic services provide accurate, non-intrusive monitoring to help
      detect leaks to optimize performance and reliability. It improves energy efficiency,
      and prevents costly failure to empower industries.
    </P>
    <div
      class="grid grid-cols-1 text-[#1E3A8A] gap-8 px-5 pt-10 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <ul class="space-y-6 font-semibold">
        <li class="flex items-start lg:items-center">
          <span class="inline-block w-4 h-4 mr-2 shrink-0">
            <img
              src="/assets/circlehook.svg"
              alt=""
              class="w-full h-full object-contain"
            />
          </span>
          <span>Over 19 years of proven expertise in condition monitoring</span>
        </li>
        <li class="flex items-start lg:items-center">
          <span class="inline-block w-4 h-4 mr-2 shrink-0">
            <img
              src="/assets/circlehook.svg"
              alt=""
              class="w-full h-full object-contain"
            />
          </span>
          <span
            >Non-intrusive monitoring for liquids, gases, and steam in pipelines
          </span>
        </li>
        <li class="flex items-start lg:items-center">
          <span class="inline-block w-4 h-4 mr-2 shrink-0">
            <img
              src="/assets/circlehook.svg"
              alt=""
              class="w-full h-full object-contain"
            />
          </span>
          <span
            >Reliable detection of leaks and flow irregularities Enhances
            preventive maintenance and energy efficiency
          </span>
        </li>
        <li class="flex items-start lg:items-center">
          <span class="inline-block w-4 h-4 mr-2 shrink-0">
            <img
              src="/assets/circlehook.svg"
              alt=""
              class="w-full h-full object-contain"
            />
          </span>
          <span>Enhances preventive maintenance and energy efficiency </span>
        </li>
        <li class="flex items-start lg:items-center">
          <span class="inline-block w-4 h-4 mr-2 shrink-0">
            <img
              src="/assets/circlehook.svg"
              alt=""
              class="w-full h-full object-contain"
            />
          </span>
          <span
            >Supports optimized machine performance and industrial operations
          </span>
        </li>
        <li class="flex items-start lg:items-center">
          <span class="inline-block w-4 h-4 mr-2 shrink-0">
            <img
              src="/assets/circlehook.svg"
              alt=""
              class="w-full h-full object-contain"
            />
          </span>
          <span
            >Professional consultation and end-to-end support in the UAE
          </span>
        </li>
      </ul>
      <ul class="space-y-6 font-semibold"></ul>
    </div>
  </div>
</section>

<section
  class="bg-[#F7F7F7] w-full px-5 p-10 my-14 flex justify-center items-center"
>
  <div class="w-full md:w-[85%] text-center flex flex-col gap-5 px-5">
    <div>
      <P size="texts18 " id="what-is-vibration" className="text-[#2F2F2F]">
        Looking for reliable flow measurement solutions in the UAE? Our advanced
        technologies ensure accuracy, efficiency, and consistent performance for
        your operations. Contact Assetconditionmonitoring.com today to schedule
        your ultrasonic flow measurement service and start saving on energy
        costs while preventing costly failures.
      </P>
    </div>
  </div>
</section>

<section>
  <a href={`/${data.langParam}/contact-us`}>
    <Explore
      name={contact}
      width="w-[90%]"
      data={`/${data.langParam}/contact-us`}
    />
  </a>
</section>

<section class="scroll-mt-20 mt-14" id="faqs">
  <Faq faqs={flowMeasurementsFaqs} />
</section>
