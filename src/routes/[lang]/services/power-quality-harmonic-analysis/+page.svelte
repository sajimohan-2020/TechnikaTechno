<script lang="ts">
  // @ts-nocheck
  import * as Accordion from "$lib/components/ui/accordion";
  import { PUBLIC_APIURL } from "$env/static/public";
  import { slide } from "svelte/transition";
  import Faq from "$lib/components/faq/Faq.svelte";
  import Contacts from "$lib/components/contactus/ContactUs.svelte";
  import Serviceui from "$lib/components/serviceui/ServiceUI.svelte";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  import Listview from "$lib/components/listview/ListView.svelte";
  import Bookmarknav from "$lib/components/bookmarknav/BookMarkNav.svelte";
  import Page from "$lib/components/dropdown/DropDown.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  import Slidecard from "$lib/components/slidecard/SlideCard.svelte";
  import WhyChooseus from "./whyChooseus.svelte";
  import Rectanglebox from "$lib/components/rectanglebox/RectangleBox.svelte";
  import Yellowarrow from "$lib/icons/svgs/yellowarrow.svelte";
  import {
    powerHarmonyProperty,
    powerAndHarmony,
  } from "$lib/data/powerHarmony";

  import { text } from "@sveltejs/kit";

  /** @type {import('./$types').PageData} */
  export let data;
  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/Power Quality & Harmonic Analysis.webp`,
      title: "Power Quality & Harmonic Analysis Service",
      titlesubheading:
        "Comprehensive Power Quality Solutions for Sustainable Performance",
      titleText: `At Asset Condition Monitoring, our Power Quality & Harmonic Analysis service helps you detect, diagnose, and correct electrical disturbances that degrade performance, reduce equipment life, or cause unexpected failures in three-phase systems. Drawing on the latest research and industry best practices, we analyze voltage and current waveforms for harmonics, distortion, frequency imbalances, voltage sags/swells, and more. Then we deliver actionable insights and mitigation strategies to restore power integrity and optimize system efficiency.`,
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
  const name: name[] = [
    {
      title: "Need better power quality? get a harmonic analysis today!",
      text: "Contact us",
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
  items={powerAndHarmony}
/>

<section class="scroll-mt-20" id="why-is">
  <div
    class="container px-5 mx-auto py-14 rounded-lg scroll-mt-20 md:px-[55px] text-left"
  >
    <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
      <div class="space-y-6 md:col-span-3">
        <div class="flex gap-3">
          <Heading
            size="bannerMaih1"
            id="what-is-vibration"
            className="font-bold text-[#1e3a8a] flex gap-[2px]"
          >
            Why Power Quality & Harmonic Analysis Matters <span
              class="pt-2
        "
            >
              <Yellowline />
            </span>
          </Heading>
        </div>
        <P
          size="texts18"
          id="vibration-description"
          className="text-gray-700 leading-relaxed"
        >
          Maintaining stable power quality is essential for protecting
          electrical assets, improving operational efficiency, and preventing
          costly downtime. Fluctuations and disturbances in the power
          supply—such as voltage sags and swells, surges, transients, grounding
          faults, and harmonic distortions—can shorten equipment life, trigger
          unexpected shutdowns, and increase energy consumption
        </P>
        <P
          size="texts18"
          id="vibration-description"
          className="text-gray-700 leading-relaxed"
        >
          At <span class="font-bold">Asset Condition Monitoring</span> , we
          offer expert
          <span class="font-bold"> Power Quality and Harmonic Analysis</span> services
          to uncover and resolve underlying causes of electrical disturbances. Our
          approach improves system reliability while meeting international standards,
          enabling businesses to operate safely, efficiently, and cost-effectively.
        </P>
      </div>

      <Contacts allServices={eletricalTestingItems} />
    </div>
    <div class="flex gap-4 pt-14">
      <Heading
        size="headingS25"
        id="what-is-vibration"
        className="font-bold text-[#1e3a8a]"
      >
        Understanding Harmonics
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
      className="text-gray-700 leading-relaxed pt-4"
    >
      <span class="font-bold">Harmonics</span> are deviations from the ideal sinusoidal
      waveform of voltage or current in an electrical system, often caused by nonlinear
      loads. Devices like variable speed drives, switch-mode power supplies, and
      electronic equipment draw current in short, high-amplitude pulses, generating
      harmonic distortion.
    </P>
    <div class="flex gap-4 pt-6 scroll-mt-20" id="importance">
      <Heading size="headingS20" className="font-semibold text-[#2F2F2F] mb-8">
        Performing harmonic analysis is vital to:
      </Heading>
    </div>
    <Rectanglebox
      property={powerHarmonyProperty}
      titlewidth="md:w-[30%] lg:w-[33%]"
      textwidth="md:w-[70%] lg:w-[67%] "
    />

    <div class="mt-8 container mx-auto px-5 md:px-[55px]">
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        At <span class="font-bold">Asset Condition Monitoring</span>, our team
        performs in-depth harmonic analysis and implements solutions to ensure
        your electrical systems remain safe, reliable, and efficient.
      </P>
    </div>
  </div>
</section>

<section class="bg-[#F4F9FF] pb-8 scroll-mt-20" id="key-services">
  <div class="pt-8 container mx-auto px-5 md:px-[55px]">
    <div class="flex gap-3">
      <Heading
        size="bannerMaih1"
        className="text-[#1E3A8A] font-bold text-xl md:text-2xl mb-6 ml-3 md:ml-3 lg:ml-9"
      >
        Power Quality & Harmonic Analysis Services
      </Heading>
      <div class="pt-2"><Yellowline /></div>
    </div>

    <P size="texts18" className="ml-3 md:ml-3 lg:ml-9">
      Our engineers employ advanced diagnostic tools and proven methodologies to
      assess and optimize your electrical systems. Each analysis provides
      actionable insights and customized recommendations to maintain consistent,
      high-quality power.
    </P>
    <Heading
      size="headingS20"
      className="text-[#1E3A8A] font-bold text-xl md:text-2xl pt-6 ml-3 md:ml-3 lg:ml-9"
    >
      Key Services:
    </Heading>
  </div>
  <div
    class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pb-[30px] px-5 md:px-[55px] md:pl-[117px] lg:pl-[155px]"
  >
    <div class="text-[15px] space-y-6 px-5 md:px-10">
      <div>
        <div class="flex items-center rounded-lg pl-3">
          <span class="flex items-center gap-3">
            <div class="flex flex-shrink-0">
              <Yellowarrow />
              <Yellowarrow />
            </div>
            <Heading size="headingS16" className="text-[#1E3A8A] font-bold">
              Voltage & Current Profiling
            </Heading>
          </span>
        </div>
        <P size="texts16" className="text-gray-800 italic pl-10">
          Monitor fluctuations and irregularities affecting performance.
        </P>
      </div>

      <div>
        <div class="flex items-center rounded-lg pl-3">
          <span class="flex items-center gap-3">
            <div class="flex flex-shrink-0">
              <Yellowarrow />
              <Yellowarrow />
            </div>
            <Heading size="headingS16" className="text-[#1E3A8A] font-bold">
              Harmonic Measurement & Mitigation
            </Heading>
          </span>
        </div>
        <P size="texts16" className="text-gray-800 italic pl-10">
          Detects distortion and implements corrective strategies to enhance
          system stability.
        </P>
      </div>

      <div>
        <div class="flex items-center rounded-lg pl-3">
          <span class="flex items-center gap-3">
            <div class="flex flex-shrink-0">
              <Yellowarrow />
              <Yellowarrow />
            </div>
            <Heading size="headingS16" className="text-[#1E3A8A] font-bold">
              Load Distribution Analysis
            </Heading>
          </span>
        </div>
        <P size="texts16" className="text-gray-800 italic pl-10">
          Optimize load flow for balanced energy usage and efficiency.
        </P>
      </div>
    </div>

    <div class="text-[15px] space-y-6 px-5 md:px-10">
      <div>
        <div class="flex items-center rounded-lg pl-3">
          <span class="flex items-center gap-3">
            <div class="flex flex-shrink-0">
              <Yellowarrow />
              <Yellowarrow />
            </div>
            <Heading size="headingS16" className="text-[#1E3A8A] font-bold">
              Transient & Flicker Studies
            </Heading>
          </span>
        </div>
        <P size="texts16" className="text-gray-800 italic pl-10">
          Identify sudden disturbances that may damage sensitive equipment.
        </P>
      </div>

      <div>
        <div class="flex items-center rounded-lg pl-3">
          <span class="flex items-center gap-3">
            <div class="flex flex-shrink-0">
              <Yellowarrow />
              <Yellowarrow />
            </div>
            <Heading size="headingS16" className="text-[#1E3A8A] font-bold">
              Power Factor Optimization
            </Heading>
          </span>
        </div>
        <P size="texts16" className="text-gray-800 italic pl-10">
          Improve power factor using filters and corrective measures to reduce
          losses.
        </P>
      </div>
    </div>
  </div>
</section>

<section class="scroll-mt-20 mt-14" id="what-is">
  <div
    class="container px-5 mx-auto rounded-lg scroll-mt-20 md:px-[55px] text-left"
  >
    <P size="texts18" className="text-gray-800  ">
      With our expertise in power quality monitoring and condition assessment,
      we help industries achieve long-term operational reliability, reduced
      downtime, and improved energy efficiency.
    </P>
  </div>
</section>

<section class="scroll-mt-20" id="why-choose-us">
  <WhyChooseus />
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
        Get Your Power System Assessed
      </Heading>
    </div>
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed"
    >
      Protect your electrical assets and ensure reliable operations with our
      Power Quality & Harmonic Analysis services. Our expert engineers provide
      accurate diagnostics, actionable insights, and effective solutions to
      optimize system performance and prevent costly downtime.
    </P>
  </div>
</section>
<section class="mt-5 mb-14">
  <Explore {name} data={`/${data.langParam}/contact-us`} />
</section>
