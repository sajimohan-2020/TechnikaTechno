<script lang="ts">
  // @ts-nocheck
  import * as Accordion from "$lib/components/ui/accordion";
  import { PUBLIC_APIURL } from "$env/static/public";
  import { slide } from "svelte/transition";
  import Faq from "$lib/components/faq/Faq.svelte";
  import {
    pipingFaqs,
    pipingVibrationItems,
  } from "$lib/components/data/assets";
  import Contacts from "$lib/components/contactus/ContactUs.svelte";
  import Serviceui from "$lib/components/serviceui/ServiceUI.svelte";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  import Listview from "$lib/components/listview/ListView.svelte";
  import Bookmarknav from "$lib/components/bookmarknav/BookMarkNav.svelte";
  import Page from "$lib/components/dropdown/DropDown.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";

  /** @type {import('./$types').PageData} */
  export let data;

  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/Piping Vibration Analysis.webp`,
      title: " Piping Vibration Analysis",
      titleText: `Piping vibration analysis is used to find how and why a pipe vibrates in
        a mechanical system, identifying the source of vibration and whether it
        poses a threat to the safety of piping systems. We combine non-invasive
        testing, such as advanced Ultrasonic technology, to pinpoint the faults.`,
    },
  ];
  const name: name[] = [
    {
      title: "Let's talk about our piping vibration analysis",
      text: "Enquire now",
    },
  ];
  const contact: contact[] = [
    {
      title:
        "Detect Internal Flaws Before They Become Failures—Schedule Ultrasonic Testing Today!",
      text: "Enquire now",
    },
  ];

  const lubeoillists: listmodel[] = [
    {
      img: "/assets/logo/increasedsafety.svg",
      title: "Increased safety",
      text: "Prompt piping vibration analysis enhances the safety and integrity of equipment and personnel.",
    },
    {
      img: "/assets/logo/improvedtime.svg",
      title: "Improved uptime",
      text: ` Detecting and addressing vibrations early reduces downtime and improves operations and efficiency.`,
    },
    {
      img: "/assets/logo/efficientims.svg",
      title: "Efficient IMS",
      text: `Relying on data-driven and action-oriented reports provides error-free statistics for an efficient Integrated Management System.
`,
    },
    {
      img: "/assets/logo/operatingrisk.svg",
      title: "Reduced operating Risk",
      text: `Piping stress and vibration analysis significantly reduces operating risk by finding vibrations early, thereby improving overall safety and efficiency.
`,
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
<Serviceui {bannerItems} href={`/${data.langParam}/contact-us`} />

<!-- Bookmark Link Bar -->
<Bookmarknav
  bgColor="bg-[#0074BD]"
  textcolor="text-[#FFFFFF]"
  items={pipingVibrationItems}
/>

<!-- New Section Below Bookmark Bar -->
<div
  class="container mx-auto px-5 py-14 rounded-lg scroll-mt-20 md:px-[55px] text-left"
  id="what-is"
>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
    <!-- Left Side -->
    <div class="space-y-6 md:col-span-3">
      <div class="gap-3 flex">
        <Heading
          size="bannerMaih1"
          id="what-is-vibration"
          className="font-bold text-[#1e3a8a]"
        >
          Piping Stress and Vibration Analysis
        </Heading>
        <div class="pt-3"><Yellowline /></div>
      </div>

      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        Piping Vibration monitoring is vital in ensuring the safety and
        integrity of piping mechanical systems. It involves detecting vibration
        sources in pumps, compressors, etc, measuring vibration levels, and
        evaluating the severity of fatigue, noise, and the probability of
        failure. Extreme vibrations in pipes may cause issues such as fatigue
        cracks, loosening of clamps, premature wear, damage to connected
        equipment, and acoustic resonance.
      </P>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        We at <span class="text-[#1e3a8a] underline"
          >assetconditionmonitoring.com</span
        > provide expert services for piping stress and vibration analysis, offering
        precise assistance even in high-risk locations.
      </P>
      <div class="pt-6">
        <Heading
          size="headingS25"
          id="what-is-vibration"
          className="font-bold text-[#1e3a8a] pb-6"
        >
          Why are we trusted across industries?
        </Heading>
        <ul
          class="list-disc space-y-8 text-[#1E3A8A] ml-[50px] xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
        >
          <li>
            Extensive experience with diverse piping systems in refineries,
            petrochemicals, pipeline stations, water injection units, and
            onshore/offshore platforms.
          </li>
          <li>
            cost-effective piping evaluations, error-free vibration
            measurements, and ensures compliance with industrial standards.
          </li>
          <li>
            We employ generic tools and software to model piping, assess
            anomalies, and implement actionable solutions, customised to your
            needs, enhancing reliability.
          </li>
        </ul>
      </div>
    </div>

    <!-- Right Side -->
    <Contacts allServices={conditionMonitiringItems} />
  </div>
</div>
<Explore {name} width="w-[90%]" data={`/${data.langParam}/contact-us`} />

<section class=" scroll-mt-20" id="benefits-of-piping-stress">
  <Listview
    mainheading="Benefits of Piping Stress and Vibration Analysis"
    lists={lubeoillists}
  />
</section>

<!-- <section id="why-choose-us" class="bg-white scroll-mt-20">
  <div class="container mx-auto px-5"></div>
</section> -->

<section class="bg-white py-16 scroll-mt-20" id="why-choose-us">
  <div class="container mx-auto px-5 md:px-[55px] text-left">
    <Heading size="bannerMaih1" className="font-bold text-[#1E3A8A] mb-6 ">
      Why Partner with our company?
    </Heading>
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed pb-8"
    >
      As one of the leading Vibration analysis companies,
      <span class="text-[#1e3a8a] underline">assetconditionmonitoring.com</span
      >, we offer the best piping stress and vibration analysis services to our
      clients. With proven expertise, customised services, and reliable results,
      we combine the most modern solutions and advanced tools to optimise your
      piping systems. With decades in the field, our team carefully imparts
      precise piping vibration solutions for high-risk zones with no compromise
      on safety and quality. Choose
      <span class="text-[#1e3a8a] underline">assetconditionmonitoring.com</span>
      to evaluate the condition of your piping systems and ensure reliability in
      the long run. We provide:
    </P>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-8 px-5 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <ul class="space-y-6 font-semibold text-[#1E3A8A]">
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span> Multi-Industry Piping Expertise. </span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Advanced Vibration and Stress Analysis </span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span> Failure investigation and RCA</span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span> Design compliance & optimization </span>
        </li>

        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Custom mitigation Strategies </span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>3D scanning and smart piping layouts</span>
        </li>
      </ul>
    </div>
  </div>
</section>

<Explore name={contact} width="w-[90%]" data={`/${data.langParam}/contact-us`} />
<section class="scroll-mt-20" id="faqs">
  <Faq faqs={pipingFaqs} />
</section>
