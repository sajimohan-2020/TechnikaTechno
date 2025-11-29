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

  import { pDM, pDMData, pDMFaqs, pDMMain } from "$lib/data/pDM";
  /** @type {import('./$types').PageData} */
  export let data;
  interface bannerItems {
    img?: string;
    title: string;
    titleText?: string;
  }
  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/Partial Discharge Measurement.webp`,
      title: "Offline Partial Discharge (PD) Measurement",
      titlesubheading:
        "Ensure Electrical Asset Reliability with Offline PD Testing",
      titleText: `At Asset Condition Monitoring, we provide specialized Offline Partial Discharge (PD) Measurement Services to assess the insulation health of your medium- and high-voltage equipment. Using IPEC’s industry-leading PD testing technology, our engineers deliver accurate diagnostics that help prevent failures, minimize risks, and extend the life of critical assets.
`,
    },
  ];

  const pDMlists: listmodel[] = [
    {
      img: "/assets/logo/mute.png",
      title: "Noise-Free Results",
      text: ` Eliminates interference for more accurate measurement
`,
    },
    {
      img: "/assets/logo/search.png",
      title: "Early Fault Detection",
      text: ` Identifies insulation defects before they cause breakdowns
`,
    },
    {
      img: "/assets/logo/safety.svg",
      title: "Improved Safety",
      text: `Reduces risk of catastrophic equipment failure
`,
    },
    {
      img: "/assets/logo/testing.png",
      title: "Supports Maintenance Planning",
      text: `  Informs repair, refurbishment, or replacement strategies
`,
    },
    {
      img: "/assets/logo/planning.png",
      title: "Compliance Ready",
      text: `Aligns with international standards for electrical asset testing

`,
    },
  ];

  const contact: contact[] = [
    {
      title: "Schedule your pd testing service or speak with our experts.",
      text: "Contact us",
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

<!-- Banner Section -->
<Serviceui {bannerItems} href={`/${data.langParam}/contact-us`} />

<!-- Bookmark Link Bar -->
<Bookmarknav bgColor="bg-[#0074BD]" textcolor="text-[#FFFFFF]" items={pDM} />

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
        What is Offline PD Testing?
      </Heading>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        Offline PD testing is a controlled diagnostic method where electrical
        equipment is temporarily taken out of service (planned shutdown) and
        tested under applied voltage stress. This approach eliminates background
        noise and interference, allowing for highly sensitive detection of
        partial discharge activity within insulation systems.
      </P>
      <div class="mt-20">
        <img
          src="/assets/img/pdt-26.png"
          alt="service-details"
          class="w-full"
        />
      </div>
    </div>

    <!-- Right Side -->
    <Contactus allServices={eletricalTestingItems} />
  </div>
</div>

<section>
  <Slidecard cardMain={pDMMain} cardData={pDMData} />
</section>

<Listview
  mainheading="Benefits:
"
  lists={pDMlists}
/>

<!-- <section class="mt-14 scroll-mt-20" id="steps"></section> -->

<section class="bg-white pt-14 scroll-mt-20" id="why-choose-us">
  <div class="container mx-auto md:px-[55px] text-left px-5">
    <div class="flex gap-4">
      <Heading
        size="bannerMaih1"
        id="what-is-vibration"
        className="font-bold text-[#1e3a8a]"
      >
        Why Choose Us?
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
      At Asset Condition Monitoring, we deliver reliable and precise Offline PD
      Testing services backed by advanced technology and proven expertise. Our
      team ensures seamless project execution from shutdown planning to
      reporting
    </P>
    <div
      class="grid grid-cols-1 text-[#1E3A8A] gap-8 px-5 pt-10 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <ul class="space-y-5 font-semibold">
        <li class="flex items-start xl:item-center">
          <span class="inline-block w-4 h-4 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span
            >Expert CBM engineers with extensive PD diagnostics experience
          </span>
        </li>
        <li class="flex items-start xl:item-center">
          <span class="inline-block w-4 h-4 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span
            >IPEC’s advanced offline PD testing solutions for superior accuracy
          </span>
        </li>
        <li class="flex items-start xl:item-center">
          <span class="inline-block w-4 h-4 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span
            >Support for multiple assets such as cables, switchgear,
            transformers, and rotating machines
          </span>
        </li>
        <li class="flex items-start xl:item-center">
          <span class="inline-block w-4 h-4 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span
            >End-to-end project support from shutdown planning, testing, and
            detailed reporting
          </span>
        </li>
        <li class="flex items-start xl:item-center">
          <span class="inline-block w-4 h-4 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span
            >Certified and trusted partner in electrical condition monitoring
            services
          </span>
        </li>
        <li class="flex items-start xl:item-center">
          <span class="inline-block w-4 h-4 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span
            >Quick turnaround with preliminary onsite results with full reports
            delivered post-test
          </span>
        </li>
        <li class="flex items-start xl:item-center">
          <span class="inline-block w-4 h-4 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span
            >Flexible onsite service delivery across industrial, utility, and
            infrastructure sectors
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
      <Heading
        size="headingS25"
        id="what-is-vibration"
        className=" text-[#1e3a8a] font-semibold"
      >
        Get Started Today
      </Heading>
    </div>
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed"
    >
      Protect your electrical assets with reliable Offline PD Measurement from
      Asset Condition Monitoring. Ensure compliance, detect insulation faults
      early, and reduce the risk of unexpected failures. Schedule your test
      today and secure long-term performance and safety for your equipment.
    </P>
  </div>
</section>

<section>
  <Explore
    name={contact}
    width="w-[100%]"
    data={`/${data.langParam}/contact-us`}
  />
</section>

<section class="scroll-mt-20 mt-8" id="faqs">
  <Faq faqs={pDMFaqs} />
</section>
