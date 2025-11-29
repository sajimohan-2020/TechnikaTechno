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
    compressionAirLeakCardMain,
    compressionAirLeakCardData,
    compressionAirLeakFaqs,
    compressionAirLeak,
  } from "$lib/data/compressedAirLeak";
  /** @type {import('./$types').PageData} */
  export let data;
  interface bannerItems {
    img?: string;
    title: string;
    titleText?: string;
  }
  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/Compressed Air Leak Detection.webp`,
      title: "Compressed Air Leak Detection Services",
      titlesubheading:
        "Achieve Energy Savings with Professional Air Leak Detection Solutions",
      titleText: `Compressed air leaks are one of the biggest hidden costs in industrial operations to reduce energy waste, lower costs, and improve system reliability. At Assetconditionmonitoring.com, we provide ultrasonic compressed air leak detection services that quickly locate and quantify leaks.
`,
    },
  ];

  const contact: contact[] = [
    {
      title: "Book your compressed air leak audit today! ",
      text: "Lets talk",
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
  items={compressionAirLeak}
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
        What is Compressed Air Leak Detection?
      </Heading>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        Compressed air leak detection is the process of identifying leaks within
        your compressed air system, typically using advanced <span
          class="font-bold">ultrasonic detection technology</span
        > . Unlike traditional methods, ultrasonic tools can pinpoint even the smallest
        leaks in noisy industrial environments, without shutting down operations.
        This allows maintenance teams to take quick and data-driven action to prevent
        costly energy losses.
      </P>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        <span class="font-bold">Assetconditionmonitoring.com</span> is the authorized
        SONOTEC supplier in the Middle East, offering advanced ultrasonic testing
        devices that support a wide range of applications, including compressed air
        leak detection, partial discharge testing, bearing condition monitoring,
        steam trap inspection, and more. These devices provide reliable, non-intrusive
        diagnostics to help maintenance teams improve efficiency, prevent failures,
        and reduce operational costs.
      </P>
      <p class="font-bold text-[#1e3a8a] mb-12 text-left text-xl md:text:2xl">
        Why Compressed Air Leak Detection Matters
      </p>

      <ul
        class="list-disc pl-10 space-y-7 text-[#1E3A8A] xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
      >
        <li>Up to 30–40% of compressed air is lost due to undetected leaks.</li>
        <li>
          Even a small leak can cost thousands in wasted electricity every year.
        </li>
        <li>
          Leaks increase compressor workload, causing premature wear and costly
          breakdowns.
        </li>
        <li>
          Early detection reduces downtime, improves efficiency, and cuts
          operational costs.
        </li>
      </ul>
    </div>

    <!-- Right Side -->
    <Contactus allServices={acousticTestingItems} />
  </div>
</div>

<section class=" scroll-mt-80" id="scope">
  <div class="container mx-auto px-5 md:px-[55px]">
    <div class="flex gap-4">
      <Heading
        size="bannerMaih1"
        id="what-is-vibration"
        className="font-semibold text-[#1e3a8a]"
      >
        Scope of Compressed Air Leak Audit Services
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
      className="text-gray-700 leading-relaxed pt-5"
    >
      Our air leak detection audits are designed to give you a clear picture of
      your system’s health and potential savings:
    </P>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:pl-[90px] lg:pr-[90px] 2xl:pl-[200px] 2xl:pr-[200px] pt-8 items-stretch xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <div
        class="flex items-baseline border border-[#0B60B0] rounded-lg px-6 py-4 bg-white min-h-[65px]"
      >
        <span class="flex items-baseline mr-4">
          <Yellowarrow />
          <Yellowarrow />
        </span>
        <span class="text-gray-800 leading-snug"
          >Ultrasonic air leak detection using handheld devices and acoustic
          cameras
        </span>
      </div>
      <div
        class="flex items-baseline border border-[#0B60B0] rounded-lg px-6 py-4 bg-white min-h-[65px]"
      >
        <span class="flex items-baseline mr-4">
          <Yellowarrow />
          <Yellowarrow />
        </span>
        <span class="text-gray-800 leading-snug"
          >Leak mapping and quantification with precise loss calculations
        </span>
      </div>

      <div
        class="flex items-baseline border border-[#0B60B0] rounded-lg px-6 py-4 bg-white min-h-[65px]"
      >
        <span class="flex items-baseline mr-4">
          <Yellowarrow />
          <Yellowarrow />
        </span>
        <span class="text-gray-800 leading-snug">
          Prioritized repair recommendations for maximum ROI
        </span>
      </div>

      <div
        class="flex item-start 2xl:items-center border border-[#0B60B0] rounded-lg px-6 py-4 bg-white min-h-[65px]"
      >
        <span class="flex mr-4 md:pt-1 xl:pt-0">
          <Yellowarrow />
          <Yellowarrow />
        </span>
        <span class="text-gray-800 leading-snug"
          >On-the-spot fixes for minor leaks
        </span>
      </div>

      <div
        class="flex items-baseline border border-[#0B60B0] rounded-lg px-6 py-4 bg-white min-h-[65px]"
      >
        <span class="flex items-baseline mr-4">
          <Yellowarrow />
          <Yellowarrow />
        </span>
        <span class="text-gray-800 leading-snug">
          Professional reporting with photos, spectrograms, and cost analysis
        </span>
      </div>

      <div
        class="flex item-start 2xl:items-center border border-[#0B60B0] rounded-lg px-6 py-4 bg-white min-h-[65px]"
      >
        <span class="flex mr-4 md:pt-1 xl:pt-0">
          <Yellowarrow />
          <Yellowarrow />
        </span>
        <span class="text-gray-800 leading-snug"
          >Post-repair verification and follow-up audits
        </span>
      </div>
    </div>
  </div>
</section>

<section class="mt-16 scroll-mt-20" id="steps">
  <Slidecard
    cardMain={compressionAirLeakCardMain}
    cardData={compressionAirLeakCardData}
  />
</section>

<section class="bg-white pt-16 scroll-mt-20" id="why-choose-us">
  <div class="container mx-auto md:px-[55px] text-left px-5">
    <div class="flex gap-4">
      <Heading
        size="bannerMaih1"
        id="what-is-vibration"
        className="font-bold text-[#1e3a8a]"
      >
        Why Partner with Assetconditionmonitoring.com?
      </Heading>
      <div
        class="pt-2
        "
      >
        <Yellowline />
      </div>
    </div>

    <div
      class="grid grid-cols-1 text-[#1E3A8A] gap-8 px-5 pt-10 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <ul class="space-y-4 font-semibold">
        <li class="flex items-start">
          <span class="inline-block w-4 h-4 mr-2 shrink-0">
            <img
              src="/assets/circlehook.svg"
              alt=""
              class="w-full h-full object-contain"
            />
          </span>
          <span
            >19+ years of expertise in industrial condition monitoring, with
            certified and experienced professionals</span
          >
        </li>
        <li class="flex items-start">
          <span class="inline-block w-4 h-4 mr-2 shrink-0">
            <img
              src="/assets/circlehook.svg"
              alt=""
              class="w-full h-full object-contain"
            />
          </span>
          <span
            >Authorized SONOTEC partner in the UAE, providing access to advanced
            ultrasonic technology
          </span>
        </li>
        <li class="flex items-start">
          <span class="inline-block w-4 h-4 mr-2 shrink-0">
            <img
              src="/assets/circlehook.svg"
              alt=""
              class="w-full h-full object-contain"
            />
          </span>
          <span>Non-intrusive testing that requires no shutdown </span>
        </li>
        <li class="flex items-start">
          <span class="inline-block w-4 h-4 mr-2 shrink-0">
            <img
              src="/assets/circlehook.svg"
              alt=""
              class="w-full h-full object-contain"
            />
          </span>
          <span
            >Customized reports and documentation according to your requirements
          </span>
        </li>
        <li class="flex items-start">
          <span class="inline-block w-4 h-4 mr-2 shrink-0">
            <img
              src="/assets/circlehook.svg"
              alt=""
              class="w-full h-full object-contain"
            />
          </span>
          <span
            >Trusted by leading industries across oil & gas, manufacturing, food
            & beverage, and utilities in the Middle East
          </span>
        </li>
        <li class="flex items-start">
          <span class="inline-block w-4 h-4 mr-2 shrink-0">
            <img
              src="/assets/circlehook.svg"
              alt=""
              class="w-full h-full object-contain"
            />
          </span>
          <span>Dedicated after-sales support and training for your team </span>
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
      <Heading
        size="headingS25"
        id="what-is-vibration"
        className=" text-[#1e3a8a] font-semibold"
      >
        Don’t let hidden leaks drain your profits.Contact
        Assetconditionmonitoring.com today to schedule your Compressed Air Leak
        Detection Service in the UAE.
      </Heading>
    </div>
  </div>
</section>

<Explore name={contact} width="w-[90%]" data={`/${data.langParam}/contact-us`} />

<section class="scroll-mt-20 mt-14" id="faqs">
  <Faq faqs={compressionAirLeakFaqs} />
</section>
