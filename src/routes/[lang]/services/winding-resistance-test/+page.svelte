<script lang="ts">
  // @ts-nocheck
  import * as Accordion from "$lib/components/ui/accordion";
  import { PUBLIC_APIURL } from "$env/static/public";
  import { slide } from "svelte/transition";
  import Contactus from "$lib/components/contactus/ContactUs.svelte";
  import Serviceui from "$lib/components/serviceui/ServiceUI.svelte";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  import Box from "$lib/components/boxes/Boxes.svelte";
  import Faqs from "$lib/components/faq/Faq.svelte";
  import Bookmarknav from "$lib/components/bookmarknav/BookMarkNav.svelte";
  import Slidecard from "$lib/components/slidecard/SlideCard.svelte";
  import Whychoose from "$lib/components/whychoose/WhyChoose.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  import Yellowarrow from "$lib/icons/svgs/yellowarrow.svelte";
  import Listview from "$lib/components/listview/ListView.svelte";
  import Circlehook from "$lib/icons/svgs/circlehook.svelte";
  import GrayCircle from "$lib/icons/svgs/grayCircle.svelte";
  import MotorWindingResistance from "./MotorWindingResistance.svelte";

  import {
    motorWindingResistance,
    motorWindingResistanceCardData,
    motorWindingResistanceCardMain,
    motorWindingResistanceFaqs,
  } from "$lib/data/motorWindingResistance";
  import Bulletins from "$lib/components/bulletins/Bulletins.svelte";

  /** @type {import('./$types').PageData} */

  export let data;

  const contact: contact[] = [
    {
      title: "Want to reduce downtime with a certified resistance test?",
      text: "Contact us",
    },
  ];

  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/Winding Resistance Measurement.webp`,
      title: " Motor Winding Resistance Test",
      titlesubheading:
        "Maintain Peak Motor Performance with a Professional Winding Resistance Test",
      titleText: `At Asset Condition Monitoring, we specialize in precision testing to keep your motors reliable, efficient, and safe. Our Motor Winding Resistance Test identifies hidden faults such as shorted turns, open circuits, or poor connections before they lead to costly breakdowns.

`,
    },
  ];

  interface whychooseus {
    heading?: string;
    text?: string;
  }
  const whyChooseUs: whychooseus[] = [
    {
      heading: "Expertise in industrial motor diagnostics ",
    },
    {
      heading: "Advanced, calibrated test equipment",
    },
    {
      heading: "ISO-compliant testing procedures ",
    },
    {
      heading: " Comprehensive reporting and recommendations",
    },
    {
      heading: "Onsite or workshop-based testing services",
    },
  ];

  const letstalk: name[] = [
    {
      title:
        "Ensure the integrity and reliability of your rotating equipment with assetconditionmonitoring’s dynamic rotor balancing services",
      text: "LET’S TALK",
    },
  ];
  const eletricalTestingItems: services[] = [
    {
      name: "Insulation Resistance & Polarization Index",
      link: `/${data.langParam}/services/insulation-resistance-polarisation-test`,
    },
    {
      name: "Winding Resistance Measurement",
      link: `/${data.langParam}/services/winding-resistance-test`,
    },
    {
      name: "Tan-Delta and Capacitance Measurement",
      link: `/${data.langParam}/services/tan-delta-capacitance-test`,
    },
    {
      name: "Partial Discharge Measurement",
      link: `/${data.langParam}/services/partial-discharge-monitoring`,
    },
  ];
</script>
<svelte:head>
  <meta name="robots" content="index, follow" />
</svelte:head>
<Serviceui {bannerItems} href={`/${data.langParam}/contact-us`} />

<Bookmarknav
  bgColor="bg-[#0074BD]"
  textcolor="text-[#FFFFFF]"
  items={motorWindingResistance}
/>

<div
  class="container px-5 mx-auto py-14 rounded-lg scroll-mt-20 md:px-[55px] text-left"
  id="what-is"
>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
    <div class="space-y-4 md:col-span-3">
      <div class="flex gap-4">
        <Heading
          size="bannerMaih1"
          id="what-is-vibration"
          className="font-bold text-[#1e3a8a]"
        >
          What is Motor Winding Resistance?
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
        className="text-gray-700 leading-relaxed"
      >
        Motor winding resistance is the direct current (DC) resistance of the
        copper or aluminum wire inside a motor’s coils. It is a fundamental
        parameter that directly impacts efficiency, performance, and lifespan.
        Measuring winding resistance ensures that your motor operates within
        safe limits and that its windings remain balanced.
      </P>
      <Heading
        size="bannerMaih1"
        className=" font-extrabold text-[#1e3a8a] mb-5 md:text-left"
      >
        Why is Winding Resistance Testing Crucial?
      </Heading>
      <Heading
        size="headingS18"
        className=" font-medium text-[#2F2F2F] mb-5 md:text-left"
      >
        Winding resistance testing helps identify:
      </Heading>
      <ul
        class="list-disc text-[#1E3A8A] font-medium space-y-4 md:pl-7 lg:pl-10 pl-5 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
      >
        <li>Shorted or open turns in coils</li>
        <li>Loose or corroded connections</li>
        <li>Phase imbalances in 3-phase motors</li>
        <li>Incorrect winding or poor workmanship</li>
        <li>Insulation deterioration (when combined with other tests)</li>
      </ul>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        By detecting these issues early, you can prevent unplanned downtime,
        avoid costly repairs, and extend motor service life.
      </P>
    </div>

    <Contactus allServices={eletricalTestingItems} />
  </div>
</div>

<section class=" scroll-mt-80" id="cfd-services">
  <div class="container mx-auto px-5 md:px-[55px]">
    <div class="flex gap-4">
      <Heading
        size="bannerMaih1"
        id="what-is-vibration"
        className="font-bold text-[#1e3a8a]"
      >
        When Does Your Motor Need Winding Resistance Testing?
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
      Motor winding resistance testing is crucial for maintaining optimal
      machine performance. In addition to regular inspections, consider booking
      a test if you notice any of the following:
    </P>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:pl-[80px] lg:pr-[80px] pt-8 items-stretch xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <div
        class="flex item-center lg:items-center md:items-baseline border border-[#0B60B0] rounded-lg px-6 py-4 bg-white min-h-[65px]"
      >
        <span class="flex items-baseline mr-4 lg:pt-0">
          <Yellowarrow />
          <Yellowarrow />
        </span>
        <span class="text-gray-800 leading-snug"
          >Overheating or burning smells
        </span>
      </div>

      <div
        class="flex items-center lg:items-center md:items-baseline border border-[#0B60B0] rounded-lg px-6 py-4 bg-white min-h-[65px]"
      >
        <span class="flex items-baseline mr-4 lg:pt-0">
          <Yellowarrow />
          <Yellowarrow />
        </span>
        <span class="text-gray-800 leading-snug">
          Tripping of circuit breakers or fuses
        </span>
      </div>

      <div
        class="flex items-center lg:items-center md:items-baseline border border-[#0B60B0] rounded-lg px-6 py-4 bg-white min-h-[65px]"
      >
        <span class="flex items-baseline mr-4 lg:pt-0">
          <Yellowarrow />
          <Yellowarrow />
        </span>
        <span class="text-gray-800 leading-snug"
          >Excessive noise, humming, or vibration
        </span>
      </div>

      <div
        class="flex items-center lg:items-center md:items-baseline border border-[#0B60B0] rounded-lg px-6 py-4 bg-white min-h-[65px]"
      >
        <span class="flex items-baseline mr-4 lg:pt-0">
          <Yellowarrow />
          <Yellowarrow />
        </span>
        <span class="text-gray-800 leading-snug">
          Reduced torque or efficiency
        </span>
      </div>

      <div
        class="flex items-center lg:items-center md:items-baseline border border-[#0B60B0] rounded-lg px-6 py-4 bg-white min-h-[65px]"
      >
        <span class="flex items-baseline mr-4 lg:pt-0">
          <Yellowarrow />
          <Yellowarrow />
        </span>
        <span class="text-gray-800 leading-snug"
          >Frequent motor failures or downtime
        </span>
      </div>
    </div>
  </div>
</section>

<section class="scroll-mt-20" id="steps">
  <Slidecard
    cardMain={motorWindingResistanceCardMain}
    cardData={motorWindingResistanceCardData}
  />
</section>

<section>
  <MotorWindingResistance />
</section>

<section class="mt-14">
  <section
    class="bg-[#F7F7F7] w-full px-5 p-10 my-14 flex justify-center items-center"
  >
    <div class="w-full md:w-[85%] text-left flex flex-col gap-5">
      <div>
        <Heading
          size="headingS25"
          id="what-is-vibration"
          className=" text-[#1e3a8a] font-semibold"
        >
          Tools used for Motor Winding Resistance test
        </Heading>
      </div>
      <ul
        class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-[#2F2F2F] pb-5 pt-6 pl-4 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
      >
        <li class="flex gap-3 items-start">
          <span class="flex-shrink-0"><GrayCircle data="w-2 h-2" /></span>
          Precision low-ohm meters (e.g., digital micro-ohmmeters)
        </li>
        <li class="flex gap-3 items-start">
          <span class="flex-shrink-0"><GrayCircle data="w-2 h-2" /></span>
          Insulation testers (meggers)
        </li>
        <li class="flex gap-3 items-start">
          <span class="flex-shrink-0"><GrayCircle data="w-2 h-2" /></span>
          High-potential (Hi-Pot) testing equipment
        </li>
        <li class="flex gap-3 items-start">
          <span class="flex-shrink-0"><GrayCircle data="w-2 h-2" /></span>
          Temperature compensation instruments
        </li>
        <li class="flex gap-3 items-start">
          <span class="flex-shrink-0"><GrayCircle data="w-2 h-2" /></span>
          Certified calibration equipment
        </li>
      </ul>
    </div>
  </section>
</section>

<section class="mt-14 scroll-mt-80" id="why-choose-us">
  <div class="container mx-auto px-5 md:px-[55px]">
    <div class="flex gap-4">
      <Heading
        size="bannerMaih1"
        id="what-is-vibration"
        className="font-bold text-[#1E3A8A]"
      >
        Why Choose Us?
      </Heading>
    </div>
    <div class="w-full pt-5">
      {#each whyChooseUs as items}
        <div class="flex md:gap-5 gap-20 pt-8 item-center">
          <h6 class="flex gap-3 font-semibold text-[#1E3A8A]">
            <span><Circlehook /></span>
            <span
              class="text-[11px] md:text-[15px] lg:text-[17px] xl:text-[18px]"
              >{items.heading}</span
            >
          </h6>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="mt-20">
  <Explore name={contact} data={`/${data.langParam}/contact-us`} />
</section>

<section class="mt-16 scroll-mt-20" id="faqs">
  <Faqs faqs={motorWindingResistanceFaqs} />
</section>
