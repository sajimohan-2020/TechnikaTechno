<script lang="ts">
  // @ts-nocheck
  import * as Accordion from "$lib/components/ui/accordion";
  import { PUBLIC_APIURL } from "$env/static/public";
  import { slide } from "svelte/transition";
  import Contactus from "$lib/components/contactus/ContactUs.svelte";
  import Serviceui from "$lib/components/serviceui/ServiceUI.svelte";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  import Box from "$lib/components/boxes/Boxes.svelte";
  import Listview from "$lib/components/listview/ListView.svelte";
  import Faqs from "$lib/components/faq/Faq.svelte";
  import Bookmarknav from "$lib/components/bookmarknav/BookMarkNav.svelte";
  import Slidercards from "$lib/components/slidercards/SliderCards.svelte";
  import Whychoose from "$lib/components/whychoose/WhyChoose.svelte";
  import PracticeEpt from "./practiceEPT.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Slidertables from "$lib/components/slidertables/SliderTables.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";

  import {
    EarthPit,
    EarthPitCardData,
    earthPitFaqs,
    earthpitItems,
  } from "$lib/components/data/assets";
  import { practices } from "$lib/data/earthPitTesting";

  /** @type {import('./$types').PageData} */

  export let data;
  const name: name[] = [
    {
      title: "Let's talk about our earth-pit testing",
      titlesubheading:
        "Safety Grounding System via reliable Earth Pit Testing.",
      text: "Enquire Now",
    },
  ];

  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/Earth Pit testing.webp`,
      title: "Earth Pit Testing",
      titlesubheading:
        "Safety Grounding System via reliable Earth Pit Testing.",
      titleText: `
                 ‘Earth pit testing for a reliable grounding system’– safeguard the integrity of your electrical network with our advanced Earth pit testing services. 
`,
    },
  ];

  const earthpitlists: listmodel[] = [
    {
      img: "/assets/logo/earlydetection.svg",
      title: "Early detection of degradation",
      text: ` Regular testing identifies corrosion, loose connections, increased resistance levels, or soil composition changes early, allowing for corrective actions to be taken before failure occurs.
`,
    },
    {
      img: "/assets/logo/eletricalhazard.svg",
      title: "Reduced electrical Hazards",
      text: `Proper earth pit testing minimizes the risks of electrical shocks, arc flashes, and asset malfunctions by ensuring safe ground resistance limits.
`,
    },
    {
      img: "/assets/logo/preventdamage.svg",
      title: "Prevents Equipment damage",
      text: `Unstable grounding can result in voltage fluctuations and fault currents. Earth pit testing helps maintain a reliable path for the fault currents' dissipation, thereby preventing outages or equipment damage
`,
    },
    {
      img: "/assets/logo/enhancesystem.svg",
      title: "Enhances system reliability",
      text: `A low-resistance ground system improves overall electrical system stability, especially in industrial settings with sensitive control systems or high-load equipment.
`,
    },
    {
      img: "/assets/logo/reducedowntime.svg",
      title: "Reduces Downtime",
      text: ` With predictive insight from test results, shutdowns for grounding repairs can be scheduled during planned maintenance windows, not during critical operations.`,
    },
  ];

  const heading = "Why Choose Us?";
  const items = [
    "Reliable Earth pit testing service provider in the UAE and the Middle East",
    "Advanced testing equipment and techniques.",
    "Tailored solutions for every industry",
    "Proven track record and high expertise",
    "Highly experienced team",
    "Hassle-free Predictive maintenance integration",
    "Rapid response and flexible scheduling with minimal disruption",
    "Long-term cost saving",
  ];

  const letstalk: name[] = [
    {
      title:
        "Explore our comprehensive earth pit testing strategies and condition monitoring services.",
      text: "Contact us",
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
<Serviceui {bannerItems} href={`/${data.langParam}/contact-us`} />

<Bookmarknav
  bgColor="bg-[#0074BD]"
  textcolor="text-[#FFFFFF]"
  items={earthpitItems}
/>

<div
  class="container px-5 mx-auto py-14 rounded-lg scroll-mt-20 md:px-[55px]"
  id="what-is"
>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
    <div class="space-y-6 md:col-span-3">
      <div class="flex gap-4">
        <Heading
          size="bannerMaih1"
          id="what-is-vibration"
          className="font-bold text-[#1e3a8a]"
        >
          What is Earth Pit Testing
        </Heading>
        <div class="pt-2">
          <Yellowline />
        </div>
      </div>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed text-justify"
      >
        Earth pit testing is a critical preventive maintenance strategy used to
        evaluate the effectiveness of a grounding system by measuring the
        earth’s resistance to fault currents. A reliable grounding system,
        backed by regular earth pit testing, helps maintain low resistance in
        the grounding path, prevents electrical hazards, supports compliance
        with quality standards, and enhances safety assurances in the long term.
      </P>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        <span class="text-[#1e3a8a] font-semibold text-justify"
          >assetconditionmonitoring.com</span
        > provides reliable earth pit testing services to keep your electrical assets
        safe and powered. Our expert services ensure that the earth pit safely dissipates
        power surges or any kind of residual currents into the ground safely and
        effectively.
      </P>
      <div class="mt-8 md:hidden block">
        <Heading
          size="bannerMaih1"
          id="what-is-vibration"
          className="font-bold mb-6 text-[#1e3a8a]"
        >
          How does Earth pit testing detect grounding faults?
        </Heading>
        <P
          size="texts18"
          id="vibration-description"
          className="text-gray-700 leading-relaxed  text-justify"
        >
          Earth Pit testing detects grounding faults by evaluating the
          resistance between the grounding system and the earth. A properly
          functioning earth pit should have low resistance, allowing fault
          currents (surges or lightning) to safely dissipate into the ground. If
          the test shows high resistance, it may indicate issues such as
          corrosion, broken conductors, loose connections, or dried-out soil;
          factors that can compromise the grounding system’s effectiveness.
          Identifying these faults early helps prevent electric shocks,
          equipment failure, or fire hazards.
        </P>
      </div>
    </div>

    <Contactus allServices={eletricalTestingItems} />
  </div>
  <div class="mt-8 hidden md:block">
    <Heading
      size="bannerMaih1"
      id="what-is-vibration"
      className="font-bold mb-6 text-[#1e3a8a]"
    >
      How does Earth pit testing detect grounding faults?
    </Heading>
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed  text-justify"
    >
      Earth Pit testing detects grounding faults by evaluating the resistance
      between the grounding system and the earth. A properly functioning earth
      pit should have low resistance, allowing fault currents (surges or
      lightning) to safely dissipate into the ground. If the test shows high
      resistance, it may indicate issues such as corrosion, broken conductors,
      loose connections, or dried-out soil; factors that can compromise the
      grounding system’s effectiveness. Identifying these faults early helps
      prevent electric shocks, equipment failure, or fire hazards.
    </P>
  </div>
</div>

<section class="scroll-mt-20 mt-14" id="procedures-of-earth-pit-testing">
  <Slidercards cardMain={EarthPit} cardData={EarthPitCardData} />
</section>

<section class="mt-14">
  <Explore {name} data={`/${data.langParam}/contact-us`} />
</section>

<section class=" scroll-mt-52" id="benefits">
  <Listview
    mainheading="Benefits of Earth Pit testing in predictive maintenance:"
    paragraph="By ensuring the integrity and safe operation of grounding systems, earth
      pit testing serves as a crucial tool in predictive maintenance. At
      assetconditionmonitoring.com, we understand that proper grounding is
      essential for electrical safety, equipment protection, and system
      reliability. Let us look at the key benefits of earth pit testing as a
      part of predictive maintenance:"
    lists={earthpitlists}
  />
</section>

<section
  class="container px-5 mx-auto bg-white mt-14 w-full scroll-mt-52"
  id="why-choose-us"
>
  <Whychoose {heading} practices={items} />
</section>

<section class="mb-14">
  <Explore name={letstalk} data={`/${data.langParam}/contact-us`} />
</section>

<Faqs faqs={earthPitFaqs} />
