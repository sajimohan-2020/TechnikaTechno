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
  import Listview from "$lib/components/listview/ListView.svelte";
  import {
    inSituCardData,
    inSituCardMain,
    insituBulletins,
    inSituFaqs,
    inSituitems,
  } from "$lib/data/inSituDynamic";
  import Bulletins from "$lib/components/bulletins/Bulletins.svelte";

  /** @type {import('./$types').PageData} */

  export let data;

  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/In Situ Dynamic Balancing.webp`,
      title: " In-situ Dynamic Balancing",
      titlesubheading:
        "Get reliable machinery health with In-situ dynamic balancing",
      titleText: `Expert In-situ dynamic Balancing for a vibration-free operation, Guarantee your equipment’s prime performance and longevity without moving it an inch. Use our smart precision on-site balancing solutions for hassle-free operation.
`,
    },
  ];

  const insitulists: listmodel[] = [
    {
      img: "/assets/logo/insitu3.svg",
      text: ` In situ dynamic balancing can be done without needing to dismantle or relocate the machinery. This allows the maintenance work to be directly carried out at the site of the machinery.
`,
    },
    {
      img: "/assets/logo/reducedowntime.svg",
      text: `In situ balancing significantly reduces the downtime and the logistical hurdles to transporting the critical machinery to a separate facility for maintenance.
`,
    },
    {
      img: "/assets/logo/improvesenergy.svg",
      text: `It promotes accurate and reliable balancing because the maintenance is done under actual working conditions.
`,
    },
    {
      img: "/assets/logo/safety.svg",
      text: `The reduced vibration levels and mechanical stress add to the prolonged life of the equipment and other components like seals, bearings, and couplings.
`,
    },
    {
      img: "/assets/logo/maintancetools.svg",
      text: `Improved balance results in smoother operation, and consistent vibration data contributes to the accuracy of predictive maintenance strategies.
`,
    },
    {
      img: "/assets/logo/insitu1.svg",
      text: `Finding the imbalance-related issues early avoids unexpected breakdowns and failures, aiding in long-term reliability.
`,
    },
    {
      img: "/assets/logo/insitu2.svg",
      text: `In-Situ Balancing reduces the overall maintenance cost by minimising the repetition of repairs and the need for sudden interventions.
`,
    },
  ];

  const heading = "Why Choose Us?";
  const items = [
    "Expert on-site balancing of rotating machinery across",
    "Minimal downtime with no dismantling or transporting equipment.",
    "ISO compliant and balancing performed by certified field engineers",
    "Prolonged equipment and components life; targeted balancing solutions",
    "Advanced vibration analysis tools.",
    "Precision result with real-time operating data.",
    "Rapid response and flexible scheduling with minimal disruption",
    "Customised balancing services.",
  ];

  const letstalk: name[] = [
    {
      title:
        "Ensure the integrity and reliability of your rotating equipment with assetconditionmonitoring’s dynamic rotor balancing services",
      text: "Lets talk",
    },
  ];
  const maintananceServiceItems: services[] = [
    {
      name: "In-situ Dynamic Balancing ",
      link: `/${data.langParam}/services/insitu-dynamic-balancing`,
    },
    {
      name: "Laser Shaft Alignment",
      link: `/${data.langParam}/services/laser-shaft-alignment-services`,
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
  items={inSituitems}
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
          In-situ Dynamic Balancing
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
        In-situ Dynamic Balancing is a specialised non-intrusive field balancing
        technique performed on-site to correct imbalances in rotating machinery
        while the equipment is still operational, without needing to dismantle
        or haul it out. The balancing corrections are performed directly by
        adding or adjusting weights externally. This process reduces vibration
        in machines, improves their performance, and prolongs the equipment's
        life, which is why in-situ dynamic balancing is the smartest choice for
        critical assets where downtime or disassembly could cost a fortune.
      </P>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        <span class="text-[#1e3a8a] font-semibold"
          >assetconditionmonitoring.com</span
        > offers expert in-situ dynamic balancing services across the UAE and the
        Middle East. We use advanced technology and the latest tools to attain the
        precision your equipment requires for reliable and optimal performance.
      </P>
      <div class="md:hidden block">
        <Heading
          size="headingS20"
          className=" font-extrabold text-[#1e3a8a] mb-5 md:text-left mt-10"
        >
          How does In-situ dynamic Balancing aid in Predictive maintenance
        </Heading>
        <P
          size="texts18"
          id="vibration-description"
          className="text-gray-700 leading-relaxed"
        >
          In-situ dynamic balancing benefits equipment reliability by reducing
          the abnormal vibrations and preventing unwanted mechanical stress that
          often occurs due to imbalance in rotating parts. When the machine
          operates with reduced vibration, critical parts like bearings, seals,
          and couplings are not worn easily, this way, which leads to fewer
          sudden failures and a longer service period.
        </P>
        <P
          size="texts18"
          id="vibration-description"
          className="text-gray-700 leading-relaxed"
        >
          The smoother operations not only maintain the integrity of the
          equipment but also provide the stability that predictive maintenance
          programs require. Precise vibration patterns make detecting anomalies
          early, allowing maintenance teams to easily diagnose, preventing the
          escalation of the problem, and taking the right action at the right
          time. So, In-situ Balancing is a key factor in optimising the
          performance, improving precision, and backing the predictive
          maintenance.
        </P>
      </div>
    </div>

    <Contactus allServices={maintananceServiceItems} />
  </div>
  <div class="hidden md:block">
    <Heading
      size="headingS20"
      className=" font-extrabold text-[#1e3a8a] mb-5 md:text-left mt-10"
    >
      How does In-situ dynamic Balancing aid in Predictive maintenance
    </Heading>
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed"
    >
      In-situ dynamic balancing benefits equipment reliability by reducing the
      abnormal vibrations and preventing unwanted mechanical stress that often
      occurs due to imbalance in rotating parts. When the machine operates with
      reduced vibration, critical parts like bearings, seals, and couplings are
      not worn easily, this way, which leads to fewer sudden failures and a
      longer service period.
    </P>
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed"
    >
      The smoother operations not only maintain the integrity of the equipment
      but also provide the stability that predictive maintenance programs
      require. Precise vibration patterns make detecting anomalies early,
      allowing maintenance teams to easily diagnose, preventing the escalation
      of the problem, and taking the right action at the right time. So, In-situ
      Balancing is a key factor in optimising the performance, improving
      precision, and backing the predictive maintenance.
    </P>
  </div>
</div>

<section class="scroll-mt-[150px]" id="procedures">
  <Slidecard cardMain={inSituCardMain} cardData={inSituCardData} />
</section>

<section class="scroll-mt-52" id="benefits">
  <Listview
    lists={insitulists}
    mainheading=" Benefits of In-Situ Dynamic Balancing"
    paragraph="  Integrating in-situ dynamic balancing into your predictive maintenance
      schedules can improve machine reliability and ensure smoother and stable
      operations. At AssetConditionMonitoring, we carry out each step
      meticulously, analyzing every phase with precision and care. We use
      advanced technology and the expertise of our qualified engineers to
      improve quality and operational efficiency for our clients."
  />
</section>

<section class="mt-10"><Bulletins bulletins={insituBulletins} /></section>

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
        Best In-Situ Dynamic Balancing by <span class="underline"
          >assetconditionmonitoring.com</span
        >
      </Heading>
    </div>
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed"
    >
      Protect your rotating equipment’s longevity and reliability with precise
      In-Situ Dynamic Balancing Services from assetconditionmonitoring.com. We
      balance the rotating machinery without tearing down or taking it
      elsewhere, and while it's still operational and intact. We offer advanced
      technology and non-invasive techniques, assuring the most accurate and
      reliable balancing of equipment.
    </P>
  </div>
</section>
<section class="container px-5 bg-white w-full scroll-mt-52" id="why-choose-us">
  <Whychoose {heading} practices={items} />
</section>

<Explore name={letstalk} data={`/${data.langParam}/contact-us`} />

<Faqs faqs={inSituFaqs} />
