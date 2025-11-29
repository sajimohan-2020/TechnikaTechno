<script lang="ts">
  // @ts-nocheck
  import * as Accordion from "$lib/components/ui/accordion";
  import { PUBLIC_APIURL } from "$env/static/public";
  import { slide } from "svelte/transition";
  import Contactus from "$lib/components/contactus/ContactUs.svelte";
  import Serviceui from "$lib/components/serviceui/ServiceUI.svelte";
  import Faqs from "$lib/components/faq/Faq.svelte";
  import Bookmarknav from "$lib/components/bookmarknav/BookMarkNav.svelte";
  import Tables from "$lib/components/tables/Tables.svelte";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  import Rectanglebox from "$lib/components/rectanglebox/RectangleBox.svelte";
  import MethodsOfPdt from "./methodsOfPDT.svelte";
  import StandardsOfPdt from "./standardsOfPDT.svelte";
  import WhyChooseUs from "./whyChooseUs.svelte";
  import Bulletins from "$lib/components/bulletins/Bulletins.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import { pdFaqs, pdItems } from "$lib/components/data/assets";
  import GrayCircle from "$lib/icons/svgs/grayCircle.svelte";
  import {
    tables,
    bulletins,
    standards,
    name,
    property,
    points,
    bulletins2,
  } from "$lib/data/partialDischargeTesting";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  /** @type {import('./$types').PageData} */

  export let data;

  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/Partial Discharge Testing & Analysis.webp`,
      title: "Partial Discharge Testing",
      titleText: `   Partial discharge (PD) is an early indicator of insulation degradation
        in medium and high voltage equipment. These small electrical sparks
        occur within air pockets in insulation, gradually causing damage that
        can lead to equipment failure.
`,
    },
  ];
  const eletricalTestingItems: services[] = [
    {
      name: "Partial Discharge Testing",
      link: `/${data.langParam}/services/partial-discharge-testing`,
    },
    {
      name: "Power Quality & Harmonic Analysis Service",
      link: `/${data.langParam}/services/power-quality-harmonic-analysis`,
    },
    {
      name: "Earth-Pit Testing",
      link: `/${data.langParam}/services/earth-pit-testing`,
    },
  ];
</script>
<svelte:head>
  <meta name="robots" content="index, follow" />
</svelte:head>
<!-- Banner Section -->
<Serviceui {bannerItems} href={`/${data.langParam}/contact-us`} />

<Bookmarknav
  bgColor="bg-[#0074BD]"
  textcolor="text-[#FFFFFF]"
  items={pdItems}
/>

<div
  class="container mx-auto px-5 py-14 rounded-lg scroll-mt-20 md:px-[55px] text-left"
  id="what-is"
>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
    <div class="space-y-6 md:col-span-3">
      <!-- Heading Row -->
      <div class="flex gap-3 mb-6">
        <Heading
          size="bannerMaih1"
          id="what-is-vibration"
          className="font-bold text-[#1e3a8a]"
        >
          What is Partial Discharge?
        </Heading>
        <div class="pt-1">
          <Yellowline
            topLine="lg:w-10 lg:h-4 w-8 h-3 pt-3"
            bottomLine="lg:h-4 lg:w-10 ml-4 w-8 h-3 pt-3"
          />
        </div>
      </div>

      <!-- Paragraph 1 -->
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed mb-6"
      >
        Partial discharge (PD) testing is a non-invasive method used to evaluate
        the condition of electrical insulation systems. This technique detects
        insulation breakdowns that occur when certain components fail to
        withstand the electrical field, often due to aging, design flaws, subpar
        workmanship, inferior materials, or contamination like sludge. With a
        strong track record in the UAE and Middle East, AssetConditionMonitoring
        offers PD testing solutions utilizing a range of measurement
        technologies suited to various applications. Recognized widely for its
        reliability, PD testing has become an essential tool for monitoring the
        health of electrical infrastructure. Reach out to us to learn more about
        our partial discharge testing services in UAE & MENA Region.
      </P>

      <!-- Paragraph 2 -->
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed mb-6"
      >
        <span class="font-semibold">Online Partial Discharge Testing</span> and
        <span class="font-semibold">Partial Discharge Monitoring Systems</span> are
        essential for assessing the condition of:
      </P>

      <!-- List -->
      <ul
        class="list-disc text-[#1E3A8A] font-medium space-y-4 md:pl-7 lg:pl-10 pl-5 mb-6 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
      >
        <li>Electrical cables and terminations</li>
        <li>Power transformers and bushings</li>
        <li>Switchgear (with PD monitoring systems)</li>
        <li>Motors and generators</li>
      </ul>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed mt-4 block md:hidden"
      >
        PD testing helps predict asset reliability and prevent costly outages.
        Implementing an
        <span class="font-semibold"
          >Online Partial Discharge Monitoring System</span
        >
        ensures continuous tracking and early fault detection.
      </P>
    </div>

    <!-- Contact Component -->
    <Contactus allServices={eletricalTestingItems} />
  </div>
  <!-- Final Paragraph -->
  <P
    size="texts18"
    id="vibration-description"
    className="text-gray-700 leading-relaxed mt-4 hidden md:block"
  >
    PD testing helps predict asset reliability and prevent costly outages.
    Implementing an
    <span class="font-semibold">Online Partial Discharge Monitoring System</span
    >
    ensures continuous tracking and early fault detection.
  </P>
</div>

<section class="mt-5 scroll-mt-52 md:px-[55px]" id="type-of-partial-discharge">
  <div class="px-5">
    <!-- Heading Row -->
    <div class="flex justify-center gap-3 mb-6">
      <Heading
        size="bannerMaih1"
        className="font-extrabold text-[#1e3a8a] mb-6 text-center"
      >
        Types of Partial Discharge
      </Heading>
      <div class="pt-1"><Yellowline /></div>
    </div>

    <!-- Intro Paragraph -->
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed text-center mb-8"
    >
      Here are the main types of partial discharge (PD) commonly observed in
      electrical insulation systems:
    </P>
  </div>

  <!-- Table -->
</section>
<Tables {tables} />

<section class="mt-14">
  <div class="md:px-[55px] container px-5 pt-6">
    <!-- Heading Row -->
    <div class="flex justify-center gap-3 mb-6">
      <Heading
        size="headingS25"
        className="font-extrabold text-[#1e3a8a] mb-6 text-center"
      >
        Effective Partial Discharge (PD) Testing Methods
      </Heading>
      <div class="pt-1"><Yellowline /></div>
    </div>

    <!-- Intro Paragraph -->
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed mx-3 mb-8"
    >
      <span class="font-semibold"> Partial discharge testing </span>is best
      performed online to avoid power interruptions. Advanced techniques support
      accurate <span class="font-semibold">partial discharge monitoring</span> across
      MV/HV assets like switchgear, cables, and bus ducts.
    </P>
  </div>

  <!-- Rectangle Box -->
  <Rectanglebox {property} titlewidth="md:w-[25%]" textwidth="md:w-[75%]" />
  <div class="md:px-[55px] container px-5 pt-6">
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed mx-3 mb-8"
    >
      Deploying an online partial discharge monitoring system ensures early
      fault detection and asset reliability. Use a dedicated partial discharge
      monitoring system for switchgear for continuous PD tracking.
    </P>
  </div>
</section>

<section class="scroll-mt-20" id="why-choose-us">
  <WhyChooseUs />
</section>

<section class="mt-14">
  <Explore {name} width="w-[90%]" data={`/${data.langParam}/contact-us`} />
</section>

<section class="scroll-mt-52" id="methods-of-partial-discharge">
  <MethodsOfPdt {points} />
</section>

<section>
  <StandardsOfPdt {standards} />
</section>

<section class="mt-14">
  <div class="container mx-auto px-5 md:px-[55px]">
    <div class="flex gap-3">
      <Heading
        size="headingS25"
        className=" font-extrabold text-[#1e3a8a] mb-6 text-left "
      >
        What is the IEC standard for partial discharge tests?
      </Heading>
    </div>

    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed mb-6"
    >
      The primary IEC standard for partial discharge (PD) tests is :
    </P>
    <span class="pl-2 text-[#1E3A8A] font-semibold"
      >IEC 60270 – High-Voltage Test Techniques – Partial Discharge Measurements</span
    >
    <p class="pl-2 text-[#1E3A8A] pt-4 font-semibold">Key points</p>
    <ul
      class=" gap-4 space-y-4 pl-10 pt-6 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <li class="flex gap-3 items-start">
        <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
        Scope: Defines the methods for measuring partial discharge in electrical
        insulation systems under high-voltage stress.
      </li>
      <li class="flex gap-3 items-start">
        <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
        Measurement: Focuses on the measurement of apparent charge (in picocoulombs,
        pC) produced by PD.
      </li>
      <li class="flex gap-3 items-start">
        <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
        Application: Used for testing:
      </li>
      <ul class=" pl-16 pt-5 space-y-2">
        <li class="flex items-center gap-3">
          <svg
            width="10"
            height="10"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8.5" cy="8.5" r="7" stroke="#0074BD" stroke-width="3" />
          </svg>
          Power transformers
        </li>
        <li class="flex items-center gap-3">
          <svg
            width="10"
            height="10"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8.5" cy="8.5" r="7" stroke="#0074BD" stroke-width="3" />
          </svg>
          Switchgear
        </li>
        <li class="flex items-center gap-3">
          <svg
            width="10"
            height="10"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8.5" cy="8.5" r="7" stroke="#0074BD" stroke-width="3" />
          </svg>
          High-voltage cables
        </li>
        <li class="flex items-center gap-3">
          <svg
            width="10"
            height="10"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8.5" cy="8.5" r="7" stroke="#0074BD" stroke-width="3" />
          </svg>
          Motors and generators
        </li>
        <li class="flex items-center gap-3">
          <svg
            width="10"
            height="10"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8.5" cy="8.5" r="7" stroke="#0074BD" stroke-width="3" />
          </svg>
          Capacitors and insulators
        </li>
      </ul>
    </ul>

    <div>
      <p class="pl-2 text-[#1E3A8A] font-semibold">Test Type</p>
      <ul>
        <ul
          class=" gap-4 py-6 pl-10 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
        >
          <li class="flex gap-3 items-start">
            <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
            Mainly used for offline testing under controlled conditions.
          </li>
        </ul>
      </ul>
    </div>
    <div>
      <p class="pl-2 text-[#1E3A8A] font-semibold">Purpose</p>
      <ul>
        <ul
          class=" gap-4 py-4 pl-10 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
        >
          <li class="flex gap-3 items-start pb-4">
            <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
            Helps assess the quality and integrity of insulation
          </li>
          <li class="flex gap-3 items-start">
            <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
            Detects early-stage defects that could lead to failure.
          </li>
        </ul>
      </ul>
      <p class="pl-2 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]">
        For non-conventional or online PD detection, additional IEC standards
        such as IEC 62478 and IEC 60034-27-2 are used.
      </p>
    </div>
  </div>
</section>

<Bulletins {bulletins} />

<Bulletins bulletins={bulletins2} />

<Faqs faqs={pdFaqs} />
