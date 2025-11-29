<script lang="ts">
  import { PUBLIC_APIURL } from "$env/static/public";
  import Faq from "$lib/components/faq/Faq.svelte";
  import { conditionFaqs, items } from "$lib/components/data/assets";
  import Bookmarknav from "$lib/components/bookmarknav/BookMarkNav.svelte";
  import Whycondition from "./WhyCondition.svelte";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import OurService from "./OurService.svelte";
  import WhyChoose from "./WhyChoose.svelte";

  import IndustriesSection from "./IndusriesSection.svelte";
  import Thickline from "$lib/icons/svgs/thickline.svelte";

  /** @type {import('./$types').PageData} */

  export let data;
  let isOpen = false;

  interface name {
    title: string;
    text?: string;
  }
  const name: name[] = [
    {
      title:
        " Partner with assetconditionmonitoring for reliable, predictive solutions.",
      text: "Lets talk",
    },
  ];
</script>

<div class="pt-24 sm:pt-28 lg:pt-28">
  <div class="flex items-center justify-center relative">
    <img
      src={`${PUBLIC_APIURL}/assets/${data.services.banner_img}`}
      alt="condition-monitoring-services"
      class="w-full h-[300px] md:h-[300px] lg:h-[450px] object-cover object-right"
    />
    <div class="absolute left-[2%] w-fit h-auto">
      <div class="flex items-center gap-1 h-[50px] md:h-[70px]">
        <Thickline data="w-[1.5rem] md:w-[3rem] h-20px" />
        <Heading size="headingH3" className=" font-bold text-white ">
          {data?.services?.translations?.[0]?.title}
        </Heading>
      </div>
    </div>
  </div>
</div>
<Bookmarknav bgColor="bg-[#F7FAFE]" textcolor="text-[#777777]" {items} />
<div class="flex flex-col items-center justify-center gap-8">
  <Whycondition />
  <Explore {name} width="w-[90%]" data={`/${data.langParam}/contact-us`} />
  <div class="container mx-auto px-5 md:px-[55px] mt-16">
    <Heading size="bannerMaih1" className="text-[#1846A3] mb-6 text-left ">
      What is Condition Monitoring and Why Does It Matter?
    </Heading>
    <P size="texts18" className="text-gray-700 leading-relaxed mb-8">
      Track equipment health in real time using smart sensors to measure
      vibration, temperature, and pressure. Regular monitoring turns maintenance
      into a strategic advantage — cutting costs, preventing failures, and
      boosting performance. At AssetConditionMonitoring, we make condition
      monitoring easy with smart, efficient solutions that keep your operations
      running safely and smoothly.
    </P>
  </div>
  <OurService {data} />
  <IndustriesSection />
  <WhyChoose />
  <div class="container mx-auto px-5 md:px-[55px]">
    <h2
      class="text-[#1846A3] text-xl font-bold capitalize
font-style: italic"
    >
      "Stay ahead with smarter,faster and more accurate monitoring. Partner with
      us today for smarter, more efficient maintenance solutions."
    </h2>
  </div>
  <Faq faqs={conditionFaqs} />
  <!-- <Calltoaction /> -->
</div>
