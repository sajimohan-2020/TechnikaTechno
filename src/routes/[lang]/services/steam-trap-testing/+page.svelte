<script lang="ts">
  // @ts-nocheck
  import * as Accordion from "$lib/components/ui/accordion";
  import { PUBLIC_APIURL } from "$env/static/public";
  import { slide } from "svelte/transition";
  import Contactus from "$lib/components/contactus/ContactUs.svelte";
  import Serviceui from "$lib/components/serviceui/ServiceUI.svelte";
  import Faqs from "$lib/components/faq/Faq.svelte";
  import Bookmarknav from "$lib/components/bookmarknav/BookMarkNav.svelte";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  import Slidecard from "$lib/components/slidecard/SlideCard.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import {
    steamCardData,
    steamCardMain,
    name,
    steamFaqs,
    steamTrapitems,
  } from "$lib/data/staemTrapTesting";
  import SteamTrapListing from "./steamTrapListing.svelte";
  import MethodsSteamTrap from "./methodsSteamTrap.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  /** @type {import('./$types').PageData} */

  export let data;

  let video;
  let isPlaying = false;

  function toggleVideo() {
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
    }
  }

  function handlePlay() {
    isPlaying = true;
  }

  function handlePause() {
    isPlaying = false;
  }

  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/Steam Trap Testing.webp`,
      title: "Steam Trap Testing",
      titleText: `Steam Trap Testing is a critical maintenance strategy that ensures steam systems perform efficiently by promptly detecting leaks, blockages, and faulty traps. This non-invasive testing combines ultrasonic tools and sensors to redefine the precision of trap testing.
`,
    },
  ];
  const acousticTestingItems: services[] = [
    {
      name: "Compressed Air Leak Detection Services",
      link: `/${data.langParam}/services/compressed-air-leak-detection`,
    },
    {
      name: "Flow Measurement Services",
      link: `/${data.langParam}/services/flow-measurement-services`,
    },
    {
      name: "Steam Trap Testing",
      link: `/${data.langParam}/services/steam-trap-testing`,
    },
  ];
</script>

<Serviceui {bannerItems} href={`/${data.langParam}/contact-us`} />
<Bookmarknav
  bgColor="bg-[#0074BD]"
  textcolor="text-[#FFFFFF]"
  items={steamTrapitems}
/>

<div
  class="container md:px-[55px] text-left mx-auto px-5 py-14 rounded-lg scroll-mt-20"
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
          Steam Trap Testing
        </Heading>
        <div class="pt-3">
          <Yellowline />
        </div>
      </div>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        Steam Trap Testing is a pivotal part of any predictive maintenance
        strategy, as it enables the efficiency and safety of steam systems with
        minimal energy loss. Faulty steam traps can cause major steam leakage,
        increased fuel consumption, equipment damage, and other safety concerns.
        Regular Trap testing helps uncover faults early, preventing breakdowns
        and maintaining integrity as well as production quality. Proper steam
        trap testing reduces operational cost, improves system reliability, and
        enhances equipment longevity.
      </P>

      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed  md:hidden"
      >
        Assetconditionmonitoring.com offers expert steam trap testing services
        in the UAE and the Middle East. Our team of experts understands how
        different traps work, what issues to look for, and how to find faults
        before they escalate. With the latest tools and years of experience, we
        provide accurate inspections and practical advice that you can simply
        trust. That’s why renowned industries rely on us to keep the steam
        system safe, reliable, and efficient.
      </P>
    </div>
    <Contactus allServices={acousticTestingItems} />
  </div>
  <P
    size="texts18"
    id="vibration-description"
    className="text-gray-700 leading-relaxed pt-4 hidden md:block"
  >
    Assetconditionmonitoring.com offers expert steam trap testing services in
    the UAE and the Middle East. Our team of experts understands how different
    traps work, what issues to look for, and how to find faults before they
    escalate. With the latest tools and years of experience, we provide accurate
    inspections and practical advice that you can simply trust. That’s why
    renowned industries rely on us to keep the steam system safe, reliable, and
    efficient.
  </P>
</div>
<section class="scroll-mt-20" id="procedure-of-steam-trap">
  <Slidecard cardMain={steamCardMain} cardData={steamCardData} />
</section>

<section class="scroll-mt-52" id="ultrasound-testing-in-steamtrap">
  <SteamTrapListing />
</section>
<MethodsSteamTrap />
<section class="mt-10">
  <Explore {name} data={`/${data.langParam}/contact-us`} />
</section>

<section class="mt-10"><Faqs faqs={steamFaqs} /></section>
