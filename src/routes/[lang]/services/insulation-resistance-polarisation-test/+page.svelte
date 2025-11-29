<script lang="ts">
  // @ts-nocheck
  import * as Accordion from "$lib/components/ui/accordion";
  import { PUBLIC_APIURL } from "$env/static/public";
  import { slide } from "svelte/transition";
  import Faq from "$lib/components/faq/Faq.svelte";

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
  import { irPr, irResistanceFaqs } from "$lib/data/insulationResistance";
  /** @type {import('./$types').PageData} */
  export let data;
  interface bannerItems {
    img?: string;
    title: string;
    titleText?: string;
  }
  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/Insulation Resistance & Polarization Index.webp`,
      title: "Insulation Resistance & Polarization Index Testing",
      titlesubheading:
        "Secure your electrical assets with expert Insulation Resistance Testing",
      titleText: `Ensure the safety, reliability, and efficiency of your electrical systems with professional Insulation Resistance (IR) and Polarization Index (PI) testing services. At AssetConditionMonitoring.com, we provide advanced diagnostic solutions across the UAE and the Middle East to identify insulation weaknesses, moisture ingress, or aging before they result in costly failures.
`,
    },
  ];

  const contact: contact[] = [
    {
      title: "Safeguard your assets with a professional insulation resistance ",
      text: "Lets talk",
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
<Bookmarknav bgColor="bg-[#0074BD]" textcolor="text-[#FFFFFF]" items={irPr} />

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
        What is Insulation Resistance (IR) Testing?
      </Heading>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        <span class="font-bold">Insulation Resistance (IR) testing</span> , also
        known as the Megger test, measures the resistance of electrical insulation
        in cables, motors, switchgear, transformers, and entire electrical networks.
        High resistance readings indicate healthy insulation, while low values may
        signal issues such as moisture, contamination, surface dirt, or material
        aging.
      </P>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        By detecting weak spots early, IR testing reduces the risk of equipment
        failure and enhances safety and operational reliability. Our team uses
        advanced tools and industry best practices to provide accurate
        measurements, detailed diagnostics, and professional reports for
        preventive maintenance and compliance.
      </P>
      <p class="font-bold text-[#1e3a8a] mb-12 text-left text-xl md:text:2xl">
        How Insulation Resistance is Measured?
      </p>

      <ul
        class="list-disc pl-10 space-y-7 text-[#1E3A8A] xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
      >
        <li>
          <span class="font-bold"> Test Voltage & Duration:</span> Selected according
          to equipment ratings to ensure safe, precise evaluation
        </li>
        <li>
          <span class="font-bold"> Circuit Preparation: </span>Equipment is
          de-energized and isolated for safety
        </li>
        <li>
          <span class="font-bold">Measurement: </span>Resistance is measured
          between live, neutral, and earth points using a DC voltage source.
        </li>
        <li>
          <span class="font-bold"> Interpretation: </span>Readings are compared
          with standard thresholds (e.g., &gt 1 MΩ for low-voltage systems) to
          determine insulation health.
        </li>
      </ul>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed mt-10 md:hidden block"
      >
        Environmental factors, such as humidity and temperature, can affect
        results. Consistent or rising readings indicate sound insulation,
        whereas sudden drops may signal deterioration.
      </P>
    </div>

    <!-- Right Side -->
    <Contactus allServices={eletricalTestingItems} />
  </div>
  <P
    size="texts18"
    id="vibration-description"
    className="text-gray-700 leading-relaxed mt-10 hidden md:block"
  >
    Environmental factors, such as humidity and temperature, can affect results.
    Consistent or rising readings indicate sound insulation, whereas sudden
    drops may signal deterioration.
  </P>
</div>

<section class="bg-[#F4F9FF] mt-14 pb-[40px] scroll-mt-20" id="what-is-pi">
  <div class=" pt-[50px] container mx-auto px-4 md:px-[55px]">
    <div class="flex gap-3">
      <Heading
        size="bannerMaih1"
        className="text-[#1E3A8A] font-bold text-xl md:text-2xl"
      >
        Polarization Index (PI) Testing
      </Heading>
      <div class="pt-2"><Yellowline /></div>
    </div>

    <P size="texts18" className="pt-6 pr-5 md:pr-[55px]">
      The Polarization Index (PI) test complements IR testing by assessing
      insulation condition over time. It measures the ratio of insulation
      resistance at 10 minutes to that at 1 minute:
    </P>
    <Heading
      size="headingS20"
      className="text-[#1E3A8A] font-bold text-xl md:text-2xl pt-8"
    >
      PI = IR at 10 minutes ÷ IR at 1 minute
    </Heading>
  </div>
  <div class="grid grid-cols-1 md:pl-[75px] py-[10px] pb-[30px]">
    <div class=" text-[15px]">
      <div class="flex items-center rounded-lg pt-3 pl-3">
        <span class="flex items-center gap-3">
          <div class="flex">
            <Yellowarrow />
            <Yellowarrow />
          </div>

          <Heading size="headingS16" className="text-[#1E3A8A] font-bold">
            PI &gt 2.0 → Good insulation
          </Heading>
        </span> <br />
      </div>

      <div class="flex items-center rounded-lg pt-6 pl-3">
        <span class="flex items-center gap-3">
          <div class="flex">
            <Yellowarrow />
            <Yellowarrow />
          </div>
          <Heading size="headingS16" className="text-[#1E3A8A] font-bold"
            >PI 1.0 – 2.0 → Marginal; may require maintenance</Heading
          >
        </span> <br />
      </div>

      <div class="flex items-center rounded-lg pt-6 pl-3">
        <span class="flex items-center gap-3">
          <div class="flex">
            <Yellowarrow />
            <Yellowarrow />
          </div>
          <Heading size="headingS16" className="text-[#1E3A8A] font-bold"
            >PI &lt 1.0 → Poor insulation; unsafe</Heading
          >
        </span> <br />
      </div>
      <P size="texts18" className="pt-8 px-9 pr-5 md:pr-[55px]">
        The PI test reveals long-term insulation health by accounting for
        moisture, dirt, and insulation deterioration that may not be visible in
        a standard IR test. It evaluates the combined effects of:
      </P>
    </div>
    <div class=" text-[15px]">
      <div class="flex items-center rounded-lg pt-8 pl-3">
        <span class="flex items-center gap-3">
          <div class="flex">
            <Yellowarrow />
            <Yellowarrow />
          </div>
          <Heading size="headingS16" className="text-[#1E3A8A] font-bold"
            >Capacitive current (Ic) – insulation’s charge storage ability</Heading
          >
        </span> <br />
      </div>
      <div class="flex items-center rounded-lg pt-6 pl-3">
        <span class="flex items-center gap-3">
          <div class="flex">
            <Yellowarrow />
            <Yellowarrow />
          </div>
          <Heading size="headingS16" className="text-[#1E3A8A] font-bold">
            Conductive current (Ig) – leakage through insulation material
          </Heading>
        </span> <br />
      </div>
      <div class="flex items-center rounded-lg pt-6 pl-3">
        <span class="flex items-center gap-3">
          <div class="flex">
            <Yellowarrow />
            <Yellowarrow />
          </div>
          <Heading size="headingS16" className="text-[#1E3A8A] font-bold">
            Surface leakage (Is) – contamination and moisture effects
          </Heading>
        </span> <br />
      </div>
      <div class="flex items-center rounded-lg pt-6 pl-3">
        <span class="flex items-center gap-3">
          <div class="flex">
            <Yellowarrow />
            <Yellowarrow />
          </div>
          <Heading size="headingS16" className="text-[#1E3A8A] font-bold">
            Polarization current (Ip) – alignment of molecular dipoles under a
            DC field
          </Heading>
        </span> <br />
      </div>
    </div>
    <P size="texts18" className="pt-8 px-9 pr-5 md:pr-[55px]">
      By measuring these components, PI testing provides a clear picture of
      insulation reliability and helps schedule preventive maintenance
      effectively.
    </P>
  </div>
</section>

<section class="bg-white pt-14 scroll-mt-20" id="why-choose-us">
  <div class="container mx-auto md:px-[55px] text-left px-5">
    <Heading size="bannerMaih1" className="font-bold text-[#1E3A8A] mb-6 ">
      Why Choose Us ?
    </Heading>

    <div class="grid grid-cols-1 text-[#1E3A8A] gap-8 px-5">
      <ul
        class="space-y-6 font-semibold xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
      >
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span
            >19+ years of expertise in electrical testing and condition
            monitoring</span
          >
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span
            >Certified engineers and technicians providing on-site solutions
          </span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span
            >Standards-compliant services following IEC, IEEE, and international
            guidelines
          </span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span
            >Accurate, reliable testing for cables, motors, switchgear, and
            transformers</span
          >
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span
            >Accurate, reliable testing for cables, motors, switchgear, and
            transformers</span
          >
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span
            >Comprehensive reports with actionable insights for preventive
            maintenance</span
          >
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span
            >EnFocused on enhancing equipment life, safety, and operational
            efficiency</span
          >
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
        Protect your assets and ensure electrical safety
      </Heading>
    </div>
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed"
    >
      Schedule your <span class="font-bold"
        >Insulation Resistance and Polarization Index testing</span
      >
      with <span class="font-bold">AssetConditionMonitoring.com</span> today. Our
      experts provide accurate, reliable, and standards-compliant testing to safeguard
      your equipment and extend its operational life.
    </P>
  </div>
</section>

<Explore name={contact} width="w-[90%]" data={`/${data.langParam}/contact-us`} />

<section class="scroll-mt-20" id="faqs">
  <Faq faqs={irResistanceFaqs} />
</section>
