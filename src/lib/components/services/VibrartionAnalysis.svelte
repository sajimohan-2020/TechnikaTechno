<script lang="ts">
  // @ts-nocheck
  import * as Accordion from "$lib/components/ui/accordion";
  import { PUBLIC_APIURL } from "$env/static/public";
  import { slide } from "svelte/transition";
  import Contactus from "$lib/components/contactus/ContactUs.svelte";
  import Faq from "$lib/components/faq/Faq.svelte";
  import { machineFaqs, machineItems } from "$lib/components/data/assets";
  import Serviceui from "$lib/components/serviceui/ServiceUI.svelte";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  import Bookmarknav from "$lib/components/bookmarknav/BookMarkNav.svelte";
  import Circlehook from "$lib/icons/svgs/circlehook.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  import Yellowarrow from "$lib/icons/svgs/yellowarrow.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Listview from "$lib/components/listview/ListView.svelte";
  import Analysis from "./DuringOurAnalysis.svelte";
  import Subservices1 from "/src/routes/[lang]/subservices1/[id]/+page.svelte";
  import Subservices2 from "/src/routes/[lang]/subservices2/[id]/+page.svelte";

  export let data;

  interface service {
    title: string;
    text: string;
  }
  const services: listmodel[] = [
    {
      img: "",
      title: "Install sensors",
      text: "The latest sensors and accelerometers are mounted on the external surface of rotating machinery.",
    },
    {
      img: "",
      title: "Collect Real time data",
      text: "Vibration signals and patterns are recorded while the equipment runs.",
    },
    {
      img: "",
      title: "Analysis",
      text: "The vibration pattern is analysed to identify imbalances, misalignments, resonance issues, bearing damage, or other underlying faults.",
    },
    {
      title: "Machinery diagnosis",
      text: "Collected data is interpreted to diagnose machine condition and pinpoint potential faults.",
    },
    {
      img: "",
      title: "Recommendations",
      text: "Strategies and actionable insights are provided for corrective maintenance.",
    },
  ];
  const bannerItems = [
    {
      img: `${PUBLIC_APIURL}/assets/${data.serviceDetails.banner_image}`,
      title:
        "     Machinery Vibration Analysis Services to Maximize Operational Efficiency",
      titleText:
        "    Machinery Vibration Analysis is a non-invasive and highly critical predictive maintenance tool that precisely detects the vibration levels and patterns in a machine's components.",
    },
  ];
  const name: name[] = [
    {
      title: "Looking to ensure reliable operation of your rotating equipment?",
      text: "Lets talk",
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
{#if data.serviceDetails.translations[0].title.includes("Vibration")}
  <Serviceui {bannerItems} href={`/${data.langParam}/contactus`} />

  <!-- Bookmark Link Bar -->
  <Bookmarknav
    bgColor="bg-[#0074BD]"
    textcolor="text-[#FFFFFF]"
    items={machineItems}
  />

  <div class="container mx-auto px-5 py-14 rounded-lg text-left md:px-[55px]">
    <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
      <div class="space-y-6 md:col-span-3">
        <Heading
          size="bannerMaih1"
          id="what-is-vibration"
          className="font-bold text-[#1e3a8a]"
        >
          What is Vibration Analysis?
        </Heading>
        <P
          size="texts18"
          id="vibration-description"
          className="text-gray-700 leading-relaxed"
        >
          Vibration analysis is a critical predictive maintenance strategy used
          in machinery monitoring to measure and assess vibration patterns,
          helping identify early faults such as rotor imbalances, misalignments,
          and bearing wear. Advanced vibration sensors are employed to capture
          accurate data that enables maintenance teams to detect issues early,
          prevent unplanned downtime, and schedule timely maintenance. This
          approach extends the lifespan of machinery and its critical
          components, including motors, pumps, fans, and other rotating parts.
        </P>
        <div class="mt-20">
          <img
            src="{PUBLIC_APIURL}/assets/{data.serviceDetails
              .service_detail_image}"
            alt="service-details"
            class="w-full"
          />
        </div>
      </div>

      <Contactus allServices={conditionMonitiringItems} />
    </div>
  </div>

  <!-- <Explore {name} width="w-[90%]" /> -->

  <section id="specialities" class="scroll-mt-[150px]">
    <Analysis />
  </section>

  <section class="bg-white py-16 scroll-mt-20" id="why">
    <div class="container mx-auto px-5 md:px-[55px]">
      <Heading size="bannerMaih1" className=" text-[#1E3A8A] mb-6">
        Why Machinery Vibration Analysis Matters?
      </Heading>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        In today's fast-paced industrial landscape, unplanned downtime is a
        costly risk. That's where vibration analysisbecomes a
        game-changer—providing real-time insights into the health of your
        machinery and helping detect issues before they turn into failures.
        Here's why it matters:
      </P>
      <ul
        class="space-y-5 mt-8 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
      >
        <li class="flex items-center gap-3">
          <Circlehook data="w-4 h-5" />
          <span class="font-semibold text-[#1E3A8A]"
            >Early detection of equipment faults.</span
          >
        </li>
        <li class="flex items-center gap-3">
          <Circlehook data="w-4 h-5" />
          <span class="font-semibold text-[#1E3A8A]"
            >Identification of underlying causes.</span
          >
        </li>
        <li class="flex items-center gap-3">
          <Circlehook data="w-4 h-5" />
          <span class="font-semibold text-[#1E3A8A]"
            >Prioritised corrective actions.</span
          >
        </li>
        <li class="flex items-center gap-3">
          <Circlehook data="w-4 h-5" />
          <span class="font-semibold text-[#1E3A8A]"
            >Extended operational equipment life.</span
          >
        </li>
        <li class="flex items-center gap-3">
          <Circlehook data="w-4 h-5" />
          <span class="font-semibold text-[#1E3A8A]"
            >Condition-based intervention to avoid sudden repairs and costs.</span
          >
        </li>
        <li class="flex items-center gap-3">
          <Circlehook data="w-4 h-5" />
          <span class="font-semibold text-[#1E3A8A]"
            >Minimal to no unplanned shutdown.</span
          >
        </li>
      </ul>
    </div>
  </section>

  <!-- Our Services  -->
  <section class="bg-white py-16 scroll-mt-20" id="services">
    <div class="container mx-auto px-5 md:px-[55px]">
      <div class="text-center flex justify-center items-center gap-5">
        <div class="pt-2 flex gap-3">
          <Heading size="bannerMaih1" className="text-[#1E3A8A] mb-6">
            Our Services
          </Heading>
          <div class="pt-1">
            <Yellowline
              topLine="lg:w-10 lg:h-4 w-8 h-3"
              bottomLine="lg:h-4 lg:w-10 ml-4 w-8 h-3"
            />
          </div>
        </div>
      </div>

      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed "
      >
        At Technomax, we deliver advanced vibration analysis services designed
        to keep your machinery running at peak performance. Our comprehensive
        approach helps detect early signs of mechanical issues, improve
        equipment reliability, and reduce costly downtime. From precision
        diagnostics to continuous monitoring, we ensure your assets stay
        healthy, efficient, and productive.
      </P>

      <div
        class=" grid grid-cols-1 md:grid-cols-2 gap-8 2xl:pl-[200px] 2xl:pr-[200px] lg:pl-[90px] lg:pr-[90px] pt-8 items-stretch xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
      >
        <div
          class="flex items-center border border-[#0B60B0] rounded-lg px-6 py-4 bg-white min-h-[65px]"
        >
          <span class="flex items-center mr-4 flex-shrink-0">
            <Yellowarrow />
            <Yellowarrow />
          </span>
          <span class="text-gray-800 leading-snug flex-1"
            >Bearing wear assessment</span
          >
        </div>

        <div
          class="flex items-center border border-[#0B60B0] rounded-lg px-6 py-4 bg-white min-h-[65px]"
        >
          <span class="flex items-center mr-4 flex-shrink-0">
            <Yellowarrow />
            <Yellowarrow />
          </span>
          <span class="text-gray-800 leading-snug flex-1">
            Data acquisition with compact, handheld, and wireless sensors
          </span>
        </div>

        <div
          class="flex items-center border border-[#0B60B0] rounded-lg px-6 py-4 bg-white min-h-[65px]"
        >
          <span class="flex items-center mr-4 flex-shrink-0">
            <Yellowarrow />
            <Yellowarrow />
          </span>
          <span class="text-gray-800 leading-snug flex-1"
            >Misalignment or imbalance checks</span
          >
        </div>

        <div
          class="flex items-center border border-[#0B60B0] rounded-lg px-6 py-4 bg-white min-h-[65px]"
        >
          <span class="flex items-center mr-4 flex-shrink-0">
            <Yellowarrow />
            <Yellowarrow />
          </span>
          <span class="text-gray-800 leading-snug flex-1">
            Spectrum analysis and root cause analysis
          </span>
        </div>

        <div
          class="flex items-center border border-[#0B60B0] rounded-lg px-6 py-4 bg-white min-h-[65px]"
        >
          <span class="flex items-center mr-4 flex-shrink-0">
            <Yellowarrow />
            <Yellowarrow />
          </span>
          <span class="text-gray-800 leading-snug flex-1"
            >Structural integrity evaluation</span
          >
        </div>

        <div
          class="flex items-center border border-[#0B60B0] rounded-lg px-6 py-4 bg-white min-h-[65px]"
        >
          <span class="flex items-center mr-4 flex-shrink-0">
            <Yellowarrow />
            <Yellowarrow />
          </span>
          <span class="text-gray-800 leading-snug flex-1"
            >Continuous monitoring assistance.</span
          >
        </div>
      </div>
    </div>
  </section>

  <!-- Why Partner Section (Image Banner with Centered Text) -->
  <section
    class="relative w-full h-56 md:h-64 lg:h-72 my-8 scroll-mt-20"
    id="why-choose-us"
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
      <Heading
        size="sectionMainHeading"
        className="font-bold text-white text-center"
      >
        Why Partner with our company?
      </Heading>
    </div>
  </section>

  <!-- Why Partner Details Section -->
  <section class="bg-white py-16">
    <div class="container mx-auto px-5 md:px-[55px]">
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed "
      >
        As a leading vibration analysis service provider, we impart quality
        services in the maintenance and reliability industry, combining decades
        of experience with the latest predictive maintenance technology. We
        offer advanced vibration monitoring solutions that allow you to remotely
        track the conditions of your machines. With Technomax, you are not just
        monitoring your components, you gain comprehensive insights into your
        machinery's health through real-time monitoring and automated fault
        detection. We offer:
      </P>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
      >
        <ul class="space-y-6">
          <li class="flex items-center gap-3">
            <Circlehook data="w-4 h-5" />
            <span>Service consultation & installation</span>
          </li>
          <li class="flex items-center gap-3">
            <Circlehook data="w-4 h-5" />
            <span>24/7 monitoring</span>
          </li>
          <li class="flex items-center gap-3">
            <Circlehook data="w-4 h-5" />
            <span>Wireless vibration monitoring</span>
          </li>
          <li class="flex items-center gap-3">
            <Circlehook data="w-4 h-5" />
            <span>Non-invasive testing, no dismantling</span>
          </li>
        </ul>
        <ul class="space-y-6">
          <li class="flex items-center gap-3">
            <Circlehook data="w-4 h-5" />
            <span>Real-time data and alerts</span>
          </li>
          <li class="flex items-center gap-3">
            <Circlehook data="w-4 h-5" />
            <span>Clear actionable reports</span>
          </li>
          <li class="flex items-center gap-3">
            <Circlehook data="w-4 h-5" />
            <span>Automated fault detection</span>
          </li>
          <li class="flex items-center gap-3">
            <Circlehook data="w-4 h-5" />
            <span>Maintenance and parts support</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="mt-10">
    <Explore {name} width="w-[100%]" data={`/${data.langParam}/contactus`} />
  </section>

  <Faq faqs={machineFaqs} />
{/if}

{#if data.serviceDetails.translations[0].title.includes("Infrared Thermography Testing")}
  <Subservices1 {data} />
{/if}
{#if data.serviceDetails.translations[0].title.includes("Ultrasound Bearing Inspection")}
  <Subservices2 {data} />
{/if}
