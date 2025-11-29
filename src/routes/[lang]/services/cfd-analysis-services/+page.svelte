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
  import { cfdAnalysisFaqs, cfdAnalysis } from "$lib/data/cfdAnalysis";
  import Bulletins from "$lib/components/bulletins/Bulletins.svelte";

  /** @type {import('./$types').PageData} */

  export let data;

  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/CFD Analysis 2.webp`,
      title: " Computational Fluid (CFD)",
      titleText: `Computational Fluid (CFD)  Analysis is a powerful tool to optimise asset performance and ensure safety.  At AssetConditionmonitoring.com, we bring precision and reliability to your operations through advanced CFD services tailored to meet your specific industrial needs.
`,
    },
  ];

  interface whychooseus {
    heading?: string;
    text?: string;
  }
  const whyChooseUs: whychooseus[] = [
    {
      heading: "Domain Expertise ",
      text: "Deep understanding of fluid mechanics, thermodynamics, and real-world operational challenges",
    },
    {
      heading: "Custom Analysis",
      text: "Tailored CFD simulations to match your exact industrial setup and objectives",
    },
    {
      heading: " Visual Reports ",
      text: " Clear visuals, animations, and engineer-to-engineer communication",
    },
    {
      heading: " Actionable Recommendations",
      text: "we provide practical engineering suggestions for design or process improvements",
    },
  ];

  const letstalk: name[] = [
    {
      title: " To learn more, bring the precision your industry need.",
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
          What is CFD Analysis?
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
        <b> Computational Fluid Dynamics (CFD)</b> is a simulation technique
        that predicts how fluids (liquids and gases) behave under different
        conditions. By solving complex mathematical equations that describe
        fluid flow, CFD helps visualize pressure distribution, velocity,
        turbulence, heat transfer, and more. This allows engineers to test,
        validate, and optimize designs <b>before physical implementation</b>,
        saving both time and cost. CFD is widely applied in industries such as
        aerospace, automotive, energy, and HVAC to improve performance,
        efficiency, and safety. With advanced modeling and visualization, it
        provides in-depths into real-world fluid behavior that are difficult or
        costly to measure experimentally.
      </P>
      <div class="md:hidden block mt-6">
        <Heading
          size="bannerMaih1"
          className=" font-extrabold text-[#1e3a8a] mb-5 md:text-left"
        >
          Why CFD Matters for Asset Performance
        </Heading>
        <P
          size="texts18"
          id="vibration-description"
          className="text-gray-700 leading-relaxed"
        >
          Industries such as oil & gas, power generation, HVAC, water treatment,
          and manufacturing often deal with fluid systems that are critical to
          performance and safety. Even minor inefficiencies in flow design can
          lead to energy losses, equipment wear, or operational failure.
        </P>
        <Heading
          size="headingS25"
          className=" font-semibold text-[#1E3A8A] mb-5 md:text-left"
        >
          CFD enables for:
        </Heading>
        <ul
          class="list-disc text-[#1E3A8A] font-medium space-y-4 md:pl-7 lg:pl-10 pl-5 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
        >
          <li>Improved design validation</li>
          <li>Reduction in downtime</li>
          <li>Enhanced thermal management</li>
          <li>Early detection of design flaws</li>
          <li>Compliance with safety and environmental regulations</li>
        </ul>
      </div>
    </div>

    <Contactus allServices={maintananceServiceItems} />
  </div>
  <div class="hidden md:block mt-6">
    <Heading
      size="bannerMaih1"
      className=" font-extrabold text-[#1e3a8a] mb-5 md:text-left"
    >
      Why CFD Matters for Asset Performance
    </Heading>
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed"
    >
      Industries such as oil & gas, power generation, HVAC, water treatment, and
      manufacturing often deal with fluid systems that are critical to
      performance and safety. Even minor inefficiencies in flow design can lead
      to energy losses, equipment wear, or operational failure.
    </P>
    <Heading
      size="headingS25"
      className=" font-semibold text-[#1E3A8A] mb-5 md:text-left"
    >
      CFD enables for:
    </Heading>
    <ul
      class="list-disc text-[#1E3A8A] font-medium space-y-4 md:pl-7 lg:pl-10 pl-5 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <li>Improved design validation</li>
      <li>Reduction in downtime</li>
      <li>Enhanced thermal management</li>
      <li>Early detection of design flaws</li>
      <li>Compliance with safety and environmental regulations</li>
    </ul>
  </div>
</div>

<section class=" scroll-mt-80" id="cfd-services">
  <div class="container mx-auto px-5 md:px-[55px]">
    <div class="flex gap-4">
      <Heading
        size="headingS25"
        id="what-is-vibration"
        className="font-semibold text-[#1e3a8a]"
      >
        AssetConditionmonitoring.com CFD Services
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
      At AssetConditionmonitoring, we offer end-to-end expert CFD consulting and
      simulation services for industrial systems. Our CFD experts use leading
      simulation platforms to deliver results that are both technically rigorous
      and practically actionable.
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
          >Flow optimization in pipelines and ducts</span
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
          Heat exchanger and cooling system analysis
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
          >Airflow and HVAC system simulations
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
          Pump and valve performance evaluation
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
          >Particulate/dust dispersion studies
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
          >Contaminant control in clean rooms</span
        >
      </div>
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
    <div class="w-full pt-4">
      {#each whyChooseUs as items}
        <div class="flex md:gap-5 gap-20 pt-8 item-center">
          <h6 class="flex gap-3 font-semibold text-[#1E3A8A] w-[25%] lg:w-1/5">
            <span><Circlehook /></span>
            <span
              class="text-[11px] md:text-[15px] lg:text-[17px] xl:text-[18px]"
              >{items.heading}</span
            >
          </h6>

          <P
            size="texts18"
            id="vibration-description"
            className="leading-relaxed w-3/5 text-[#2F2F2F]"
          >
            {items.text}
          </P>
        </div>
      {/each}
      <P
        size="texts18"
        id="vibration-description"
        className="leading-relaxed pt-8 text-[#2F2F2F] font-medium text-left"
      >
        Whether you're optimizing a process plant, validating a new HVAC layout,
        or troubleshooting an existing asset, CFD analysis can give you the edge
        you need. With AssetConditionmonitoring as your partner, you gain access
        to top-tier simulation capabilities backed by expert assistance from our
        engineers
      </P>
    </div>
  </div>
</section>

<section class="mt-14">
  <Explore
    name={letstalk}
    width="w-[90%]"
    data={`/${data.langParam}/contact-us`}
  />
</section>

<section class="mt-14 scroll-mt-20" id="faqs">
  <Faqs faqs={cfdAnalysisFaqs} />
</section>
