<script lang="ts">
  // @ts-nocheck
  import * as Accordion from "$lib/components/ui/accordion";
  import { PUBLIC_APIURL } from "$env/static/public";
  import { slide } from "svelte/transition";
  import Contactus from "$lib/components/contactus/ContactUs.svelte";
  import Serviceui from "$lib/components/serviceui/ServiceUI.svelte";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  import Faqs from "$lib/components/faq/Faq.svelte";
  import Bookmarknav from "$lib/components/bookmarknav/BookMarkNav.svelte";
  import Whychoose from "$lib/components/whychoose/WhyChoose.svelte";
  import MethodsOfLsa from "./methodsOfLSA.svelte";
  import Rectanglebox from "$lib/components/rectanglebox/RectangleBox.svelte";
  import { lsalists, lsaFaqs, lsaitems } from "$lib/data/laserShaftAlignment";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  import Listview from "$lib/components/listview/ListView.svelte";

  /** @type {import('./$types').PageData} */

  export let data;
  const name: name[] = [
    {
      title:
        "Up your machinery performance today! contact us for advanced laser shaft alignment solutions across the UAE and the middle east.",
      text: "Contact us",
    },
  ];

  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/Laser Shaft Alignment.webp`,
      title: "Laser Shaft Alignment Services",
      titlesubheading: "Precision Maintenance with Laser shaft alignment.",
      titleText: `Laser shaft alignment is a critical process in a condition monitoring system that utilises the high-accuracy laser measurement to align the rotational axes of coupled machinery. By fixing angular and offset misalignment, this process ensures machine reliability.
`,
    },
  ];

  const heading = "Why Choose Us?";
  const items = [
    "Expert Engineers",
    "High-accuracy laser alignment system and tools",
    "Cost-effective",
    "On-site services",
    "Reduced downtime",
  ];
  const lastparagraph =
    "Up your machinery performance today! Contact us for advanced laser shaft alignment solutions across the UAE and the Middle East.";

  const letstalk: name[] = [
    {
      title: "CONCERNED ABOUT INSULATION HEALTH?  SCHEDULE A PD TEST TODAY.",
      text: "LET’S TALK",
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

<Serviceui {bannerItems} href={`/${data.langParam}/contact-us`} />

<Bookmarknav
  bgColor="bg-[#0074BD]"
  textcolor="text-[#FFFFFF]"
  items={lsaitems}
/>

<div
  class="container px-5 text-left leading-tight md:px-[55px] mx-auto py-14 rounded-lg scroll-mt-20"
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
          What is laser shaft alignment?
        </Heading>
        <!-- <div class="pt-2">
<Yellowline />
        </div> -->
      </div>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        Shaft alignment is a specialised method to precisely position the
        rotational centers or the axes of two or more coupled shafts so they
        remain colinear during routine working conditions. This meticulous
        process involves carefully minimising the angular as well as offset
        misalignment across both horizontal and vertical levels. These
        misalignments can arise due to various reasons such as thermal
        expansion, installation or manufacturing errors, base shifts, and they
        can cause disruptive vibrations, excess noises, early bearing or seal
        wear, and fatigue to the equipment. The advanced shaft alignment employs
        laser-based tools to detect even the smallest deviation in shaft
        position with high precision. This allows for taking corrective fixes
        efficiently and accurately.
      </P>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed pt-6 md:hidden block"
      >
        At AssetConditionMonitoring, we provide top-quality laser shaft
        alignment tools and services using the latest technology. We help you
        accurately detect even the smallest misalignments in real-time. Our
        experienced engineers carefully consider factors like thermal expansion
        and dynamic loads, and address the concerns with utmost effectiveness.
        We ensure your equipment runs efficiently, with reduced wear and
        prolonged operational life.
      </P>
    </div>

    <Contactus allServices={maintananceServiceItems} />
  </div>
  <P
    size="texts18"
    id="vibration-description"
    className="text-gray-700 leading-relaxed pt-6 hidden md:block"
  >
    At AssetConditionMonitoring, we provide top-quality laser shaft alignment
    tools and services using the latest technology. We help you accurately
    detect even the smallest misalignments in real-time. Our experienced
    engineers carefully consider factors like thermal expansion and dynamic
    loads, and address the concerns with utmost effectiveness. We ensure your
    equipment runs efficiently, with reduced wear and prolonged operational
    life.
  </P>
</div>

<section class="scroll-mt-52" id="procedure">
  <MethodsOfLsa />
</section>
<section class="scroll-mt-52" id="benefits">
  <Listview mainheading="Benefits of Laser shaft alignment" lists={lsalists} />
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
        Reliable Laser alignment with <span class="underline"
          >assetconditionmonitoring.com</span
        >
      </Heading>
    </div>
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed text-justify"
    >
      <span class="font-semibold">assetconditionmonitoring.com</span>. is a
      leading expert in laser shaft alignment systems and laser shaft alignment
      services in the UAE and the Middle East. We provide high-precision laser
      alignment solutions employing the most modern laser technology to ensure
      reliable shaft alignment. Committed to excellence in condition monitoring,
      we have earned the trust of renowned industries across the region. Our
      skilled engineers conduct thorough inspections and on-site alignments,
      avoiding the need to relocate equipment and reducing downtime
      significantly. With a strong focus on precision and efficiency, our team
      ensures optimal machinery performance, helping clients enhance
      productivity and reduce operational costs.
    </P>
  </div>
</section>

<section
  class="container bg-white my-10 w-full scroll-mt-52"
  id="why-choose-us"
>
  <Whychoose {heading} practices={items} />
</section>

<Explore {name} data={`/${data.langParam}/contact-us`} />

<Faqs faqs={lsaFaqs} />
