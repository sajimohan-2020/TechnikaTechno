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
  import {
    tanDelta,
    tanDeltaLists,
    tanDeltaCardMain,
    tandeltaCardData,
    tanDeltaFaqs,
  } from "$lib/data/tanDelta";
  import { text } from "@sveltejs/kit";

  /** @type {import('./$types').PageData} */
  export let data;
  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/Tan-Delta and Capacitance Measurement.webp`,
      title: "Tan-Delta and Capacitance Measurement",
      titleText: `Tan Delta measurement is an advanced and reliable non-invasive diagnostic test to assess the insulation quality and concerns in electrical systems.`,
    },
  ];
  const name: name[] = [
    {
      title:
        "Protect your assets and get accurate tan delta diagnostics with assetconditionmonitoring.com expert services",
      text: "Contact us",
    },
  ];
  const eletricalTestingItems: services[] = [
    {
      name: "Insulation Resistance & Polarization Index",
      link: `/${data.langParam}/subservices19/infrared-thermography-testing`,
    },
    {
      name: "Winding Resistance Measurement",
      link: `/${data.langParam}/subservices20/infrared-thermography-testing`,
    },
    {
      name: "Tan-Delta and Capacitance Measurement",
      link: `/${data.langParam}/subservices16/infrared-thermography-testing`,
    },
    {
      name: "Partial Discharge Measurement",
      link: `/${data.langParam}/subservices23/infrared-thermography-testing`,
    },
  ];
</script>

<Serviceui {bannerItems} href={`/${data.langParam}/contact-us`} />
<Bookmarknav
  bgColor="bg-[#0074BD]"
  textcolor="text-[#FFFFFF]"
  items={tanDelta}
/>

<section class="scroll-mt-20" id="what-is">
  <div
    class="container px-5 mx-auto pt-14 rounded-lg scroll-mt-20 md:px-[55px] text-left"
  >
    <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
      <div class="space-y-4 md:col-span-3">
        <div class="flex gap-4">
          <Heading
            size="bannerMaih1"
            id="what-is-vibration"
            className="font-bold text-[#1e3a8a]"
          >
            What is Tan Delta?
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
          Tan delta is one of the most reliable diagnostic tests for detecting
          insulation defects in electrical systems. The longevity of
          high-voltage equipment greatly depends on the reliability of its
          insulation system. Tan Delta provides a detailed picture of the
          condition of these insulation systems, enabling timely action and
          avoiding unplanned downtime.
        </P>

        <div class="mt-14">
          <div class="flex flex-col justify-center"></div>
          <img
            src="/assets/img/tan-delta-img.png"
            alt="service-details"
            class="w-full"
          />

          <P
            size="texts18"
            id="vibration-description"
            className="text-gray-700 font-bold text-center leading-relaxed"
          >
            Fig.1.Current(I) v/s Voltage(U) Phase Diagram
          </P>
        </div>
        <P
          size="texts18"
          id="vibration-description"
          className="text-gray-700 leading-relaxed pt-5 md:hidden block"
        >
          At <span class="underline text-[#1E3A8A]"
            >assetconditionmonitoring.com</span
          > , we analyse each system's performance and conduct TD testing with advanced
          tools to assess the condition of high-voltage insulation accurately. In
          transformers, power cables, motors, and switchgear, insulation serves as
          a protective barrier. Unfortunately, it can degrade over time, resulting
          in unexpected failures and hazards. With our advanced Tan Delta testing,
          early detection of insulation deterioration can be hassle-free, avoiding
          costly interruptions and prolonging the lifespan of the equipment.
        </P>
      </div>

      <Contacts allServices={eletricalTestingItems} />
    </div>
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed pt-5 hidden md:block"
    >
      At <span class="underline text-[#1E3A8A]"
        >assetconditionmonitoring.com</span
      > , we analyse each system's performance and conduct TD testing with advanced
      tools to assess the condition of high-voltage insulation accurately. In transformers,
      power cables, motors, and switchgear, insulation serves as a protective barrier.
      Unfortunately, it can degrade over time, resulting in unexpected failures and
      hazards. With our advanced Tan Delta testing, early detection of insulation
      deterioration can be hassle-free, avoiding costly interruptions and prolonging
      the lifespan of the equipment.
    </P>
  </div>
</section>

<section class="scroll-mt-52" id="purpose-of-tan-delta">
  <Listview
    lists={tanDeltaLists}
    mainheading="Why Tan Delta Testing is done?"
    paragraph="Tan Delta Testing is pivotal for finding insulation faults in high-volt assets like cables, transformers, and bushings. The loss angle (δ), measured in a tan delta test, represents the phase difference between the ideal capacitive current (IC) and the total leakage current (IL).A larger δ means more resistive losses, indicating the insulation is no longer performing like a pure capacitor. Tan Delta Testing is performed for several key benefits, including:
"
  />
</section>

<section class="scroll-mt-40 mt-14" id="process-of-tan-delta">
  <Slidecard cardMain={tanDeltaCardMain} cardData={tandeltaCardData} />
</section>

<section class="mt-20">
  <div class="container mx-auto px-5 md:px[55px] text-left">
    <div class="flex gap-4">
      <Heading
        size="headingS25"
        id="what-is-vibration"
        className="font-semibold text-[#1e3a8a]"
      >
        How do we do Tan Delta Testing?
      </Heading>
      <!-- <div
        class="pt-2
        "
      >
        <Yellowline />
      </div> -->
    </div>
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed pt-8"
      >At Assetconditionmonitoring.com, we offer expert Tan Delta Testing
      services, ensuring complete insulation health assessments that help the
      reliability and efficiency of high-voltage assets. We employ advanced
      technology combining expert analysis and risk-based knowledge to identify
      early signs of wear, aging, and contamination. We ensure reliable results,
      minimal downtime, and aid in asset optimisation.
    </P>
  </div>
</section>

<section class=" scroll-mt-20" id="why-choose-us">
  <WhyChooseus />
</section>
<section class="mt-5">
  <Explore {name} data={`/${data.langParam}/contact-us`} />
</section>

<section class="mt-10 scroll-mt-20" id="faqs">
  <Faq faqs={tanDeltaFaqs} />
</section>
