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
  import { feaAnalysisFaqs, cfdAnalysis } from "$lib/data/feaAnalysis";
  import Bulletins from "$lib/components/bulletins/Bulletins.svelte";

  /** @type {import('./$types').PageData} */

  export let data;

  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/FEA Analysis.webp`,
      title:
        " Ensuring Structural Integrity with FEA Analysis by AssetCondition",
      titleText: `In industries where structural reliability and performance are critical, Finite Element Analysis (FEA) is a critical engineering tool. Employed in multiple layers, such as designing heavy machinery, assessing equipment fatigue, or investigating failure points, FEA provides the clarity and accuracy industries need to make informed decisions.

`,
      titleText2: `At AssetConditionmonitroing.com, we specialize in providing high-fidelity FEA services that support safe, efficient, and cost-effective asset management.
`,
    },
  ];

  interface whychooseus {
    heading?: string;
  }
  const whyChooseUs: whychooseus[] = [
    {
      heading: "Identify critical stress concentrations",
    },
    {
      heading: "Justify safe operation under current load conditions",
    },
    {
      heading: "Avoid unplanned shutdowns and costly repairs",
    },
    {
      heading: "Industry-Centric Expertise",
    },
    {
      heading: "Simulation to Solution",
    },
    {
      heading: "Clear Reporting ",
    },
    {
      heading: "Operational safety and asset longevity",
    },
  ];

  const grayBullets = [
    "Detailed reports with stress maps, deformation plots, and failure predictions",
    "Compliance with industry codes (ASME, API, Eurocode, etc.)",
    "Realistic material modeling and boundary conditions",
    "Customized suggestions for design improvements and reinforcements",
  ];

  const letstalk: name[] = [
    {
      title: "To discuss your FEA requirements or request a sample report.",
      text: "Contact us",
    },
  ];
  const maintananceServiceItems: services[] = [
    {
      name: "Computational Fluid (CFD)",
      link: `/${data.langParam}/services/cfd-analysis-services`,
    },
    {
      name: "Finite Element Analysis (FEA)",
      link: `/${data.langParam}/services/fea-services`,
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
  items={cfdAnalysis}
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
          What is FEA?
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
        Finite Element Analysis (FEA) is a numerical method used to predict how
        physical structures behave under various loads, vibrations, heat, and
        other real-world forces. By breaking down complex geometries into small,
        manageable elements, FEA simulates stress, strain, displacement, and
        fatigue with high accuracy.
      </P>
      <P
        size="texts18"
        id="vibration-description"
        className="text-[#2F2F2F] font-semibold leading-relaxed"
      >
        Through this, engineers can:
      </P>
      <ul
        class="list-disc text-[#1E3A8A] font-medium space-y-4 md:pl-7 lg:pl-10 pl-5 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
      >
        <li>Detect weak points before failure occurs</li>
        <li>Validate designs against safety standards</li>
        <li>Extend the life of the equipment</li>
        <li>Reduce the need for costly physical prototypes</li>
      </ul>
    </div>

    <Contactus allServices={maintananceServiceItems} />
  </div>
</div>

<section class="mt-16 scroll-mt-80" id="applications">
  <div class="container mx-auto px-5 md:px-[55px]">
    <div class="flex gap-4">
      <Heading
        size="headingS25"
        id="what-is-vibration"
        className="font-semibold text-[#1e3a8a]"
      >
        FEA with Assetconditionmonitroing.com
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
      At assetconditionmonitoring.com we provide expert Finite Element Analysis
      from offshore platforms to pressure vessels, and rotating equipment to
      structural frames. This technique helps you visualize and quantify risk,
      allowing proactive measures to ensure safety, reliability, and
      performance.
    </P>
    <P
      size="texts18"
      id="vibration-description"
      className="text-[#2F2F2F] font-semibold leading-relaxed pt-5"
    >
      Common Applications:
    </P>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-8 2xl:pl-[200px] 2xl:pr-[200px] lg:pl-[90px] lg:pr-[90px] pt-8 items-stretch xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <div
        class="flex items-baseline border border-[#0B60B0] rounded-lg px-6 py-4 bg-white min-h-[65px]"
      >
        <span class="flex items-baseline mr-4">
          <Yellowarrow />
          <Yellowarrow />
        </span>
        <span class="text-gray-800 leading-snug"
          >Static and dynamic stress analysis</span
        >
      </div>

      <div
        class="flex items-baseline border border-[#0B60B0] rounded-lg px-6 py-4 bg-white min-h-[65px]"
      >
        <span class="flex items-baseline mr-4">
          <Yellowarrow />
          <Yellowarrow />
        </span>
        <span class="text-gray-800 leading-snug">
          Thermal stress evaluation
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
          >Vibration and modal analysis
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
          Fatigue and lifecycle prediction
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
          >Buckling and structural instability checks
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
          >Impact and drop testing simulations</span
        >
      </div>
    </div>
  </div>
</section>

<section
  class="relative w-full h-56 md:h-64 lg:h-72 mt-24 scroll-mt-20"
  id="what-we-offer"
>
  <img
    src="{PUBLIC_APIURL}/assets/{data.serviceDetails.partner_banner}"
    alt="Handshake partnership"
    class="absolute inset-0 w-full h-full object-cover object-center"
    style="z-index: 1;"
  />
  <div
    class="absolute inset-0 bg-[#00000099] bg-opacity-60 flex items-center justify-center"
    style="z-index: 2;"
  >
    <div>
      <Heading size="bannerMaih1" className="font-bold text-white text-center">
        Why Partner with AssetConditionmonitoring?
      </Heading>
      <P
        size="texts18"
        id="vibration-description"
        className="text-white text-center leading-relaxed pt-5 container mx-auto px-5 md:px-[55px]"
      >
        At assetconditionmonitoring.com we provide expert Finite Element
        Analysis from offshore platforms to pressure vessels, and rotating
        equipment to structural frames. This technique helps you visualize and
        quantify risk, allowing proactive measures to ensure safety,
        reliability, and performance.
      </P>
    </div>
  </div>
</section>

<section class="mt-24">
  <div class="container mx-auto px-5 md:px-[55px]">
    <div class="flex gap-4">
      <Heading
        size="bannerMaih1"
        id="what-is-vibration"
        className="font-bold text-[#1E3A8A]"
      >
        What we offer
      </Heading>
      <div
        class="pt-2
        "
      >
        <Yellowline />
      </div>
    </div>
    <div>
      <ul class="space-y-5 mt-8">
        {#each grayBullets as item}
          <li class="flex items-start md:item-center gap-3">
            <div class="w-5 h-5 flex items-center justify-center pt-1">
              <GrayCircle data="w-2 h-2" />
            </div>
            <P size="texts18" class="text-[#2F2F2F] leading-tight">{item}</P>
          </li>
        {/each}
      </ul>
    </div>
  </div>
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
        <div class="flex md:gap-5 gap-20 pt-6 item-center">
          <h6 class="flex gap-3 font-semibold text-[#1E3A8A]">
            <span><Circlehook /></span>
            <span
              class="text-[11px] md:text-[15px] lg:text-[17px] xl:text-[18px]"
              >{items.heading}</span
            >
          </h6>
        </div>
      {/each}
      <P
        size="texts18"
        id="vibration-description"
        className="leading-relaxed pt-8 text-[#2F2F2F] font-medium text-left"
      >
        <b> FEA provides the insight to act early and act wisely</b>. Whether
        you're validating a new design or assessing an existing asset,
        AssetCondition monitoring is your trusted partner in precision
        engineering
      </P>
    </div>
  </div>
</section>

<section class="mt-16">
  <Explore
    name={letstalk}
    width="w-[90%]"
    data={`/${data.langParam}/contact-us`}
  />
</section>

<section class="mt-16 scroll-mt-20" id="faqs">
  <Faqs faqs={feaAnalysisFaqs} />
</section>
