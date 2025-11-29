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
  import Rectanglebox from "$lib/components/rectanglebox/RectangleBox.svelte";
  import {
    noiceCardData,
    noiceCardMain,
    noiceFaqs,
    noiceitems,
    noiseProperty,
  } from "$lib/data/noiseSurvey";
  /** @type {import('./$types').PageData} */
  export let data;
  interface bannerItems {
    img?: string;
    title: string;
    titleText?: string;
  }
  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/Noise Survey.webp`,
      title: "Noise Survey Services",
      titleText: `Noise Monitoring & Survey Onboard Marine Vessels refers to the process of measuring and evaluating noise levels in different areas of a ship to ensure they remain within safe and acceptable limits. This is essential for protecting the health and hearing of crew members, especially in high-noise zones like engine rooms, machinery spaces, and deck areas during operations.
`,
    },
  ];

  const contact: contact[] = [
    {
      title: "Schedule your pd testing service or speak with our experts.",
      text: "Contact us",
    },
  ];

  const lightSurveyItems: services[] = [
    {
      name: "Environmental Noise Survey ",
      link: `/${data.langParam}/services/noise-monitoring`,
    },
    {
      name: "Light Survey",
      link: `/${data.langParam}/services/light-services`,
    },
  ];
</script>
<svelte:head>
  <meta name="robots" content="index, follow" />
</svelte:head>
<!-- Banner Section -->
<Serviceui {bannerItems} href={`/${data.langParam}/contact-us`} />

<!-- Bookmark Link Bar -->
<Bookmarknav
  bgColor="bg-[#0074BD]"
  textcolor="text-[#FFFFFF]"
  items={noiceitems}
/>

<!-- New Section Below Bookmark Bar -->
<div
  class="container mx-auto px-4 py-14 rounded-lg scroll-mt-20 md:px-[55px] text-left leading-tight hyphens-auto"
  id="what-is"
>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
    <!-- Left Side -->
    <div class="space-y-6 md:col-span-3">
      <div class="flex gap-4">
        <Heading
          size="bannerMaih1"
          id="what-is-vibration"
          className="font-bold text-[#1e3a8a]"
        >
          Environment Noise Survey Services
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
        Assetconditionmonitoring.com offers professional noise monitoring
        services to identify high-risk areas with excessive sound levels in
        industrial and marine environments. Using precision instruments, we
        assess noise exposure, especially where workers must speak loudly to
        communicate at close distances. Common zones include ship decks, plant
        floors, and airport operations. These surveys help implement effective
        safety measures to protect workers and ensure compliance. As part of our
        marine services, we also provide condition monitoring to detect issues
        early and extend equipment life.
      </P>
      <div class="pt-4 block md:hidden">
        <Heading
          size="bannerMaih1"
          id="what-is-vibration"
          className="font-bold text-[#1e3a8a] "
        >
          What is Environmental and occupational noise
        </Heading>

        <P
          size="texts18"
          id="vibration-description"
          className="text-gray-700 leading-relaxed pt-6"
        >
          Environmental noise and occupational noise serve different contexts
          and are assessed using distinct standards due to their varying
          sources, exposure patterns, and health impacts.
        </P>

        <P
          size="texts18"
          id="vibration-description"
          className="text-gray-700 leading-relaxed pt-6"
        >
          <span class="font-bold">Environmental noise</span> refers to unwanted or
          disturbing sound that originates from sources in the external environment,
          particularly around residential or public areas. Common sources include
          road traffic, railways, aircraft, and industrial facilities such as factories
          or construction sites. This type of noise is generally lower in intensity
          but can affect large populations over extended periods. It is often considered
          a public health concern, contributing to stress, sleep disturbance, and
          reduced quality of life. Environmental noise is commonly regulated by local
          environmental agencies and measured in terms of its impact on communities
          rather than individual exposure.
        </P>
        <P
          size="texts18"
          id="vibration-description"
          className="text-gray-700 leading-relaxed"
        >
          In contrast, <span class="font-bold">occupational noise</span> is the sound
          experienced in the workplace as a result of machinery, tools, engines,
          or industrial processes. While some level of noise is considered part of
          many working environments, prolonged or excessive exposure can pose serious
          risks to hearing and overall worker health. Unlike environmental noise,
          occupational noise is measured against specific exposure limits defined
          by occupational health and safety regulations (e.g., OSHA, HSE, or ISO
          standards). Employers are required to assess noise levels, provide protective
          equipment, and implement controls where necessary to protect workers from
          hearing loss and other health risks.
        </P>
      </div>
    </div>
    <!-- Right Side -->
    <Contactus allServices={lightSurveyItems} />
  </div>
  <div class="pt-4 hidden md:block">
    <Heading
      size="bannerMaih1"
      id="what-is-vibration"
      className="font-bold text-[#1e3a8a] "
    >
      What is Environmental and occupational noise
    </Heading>

    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed pt-6"
    >
      Environmental noise and occupational noise serve different contexts and
      are assessed using distinct standards due to their varying sources,
      exposure patterns, and health impacts.
    </P>

    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed pt-6"
    >
      <span class="font-bold">Environmental noise</span> refers to unwanted or disturbing
      sound that originates from sources in the external environment, particularly
      around residential or public areas. Common sources include road traffic, railways,
      aircraft, and industrial facilities such as factories or construction sites.
      This type of noise is generally lower in intensity but can affect large populations
      over extended periods. It is often considered a public health concern, contributing
      to stress, sleep disturbance, and reduced quality of life. Environmental noise
      is commonly regulated by local environmental agencies and measured in terms
      of its impact on communities rather than individual exposure.
    </P>
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed"
    >
      In contrast, <span class="font-bold">occupational noise</span> is the sound
      experienced in the workplace as a result of machinery, tools, engines, or industrial
      processes. While some level of noise is considered part of many working environments,
      prolonged or excessive exposure can pose serious risks to hearing and overall
      worker health. Unlike environmental noise, occupational noise is measured against
      specific exposure limits defined by occupational health and safety regulations
      (e.g., OSHA, HSE, or ISO standards). Employers are required to assess noise
      levels, provide protective equipment, and implement controls where necessary
      to protect workers from hearing loss and other health risks.
    </P>
  </div>
</div>

<section class="scroll-mt-52" id="type-of-noise-survey">
  <div class="container mx-auto md:px-[55px] text-left px-5">
    <div class="flex gap-4">
      <Heading
        size="bannerMaih1"
        id="what-is-vibration"
        className="font-semibold text-[#1e3a8a]"
      >
        Types of Noise Measurements
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
      className="text-gray-700 leading-relaxed pt-6 pb-10"
    >
      For a noise survey, different types of noise measurements are carried out,
      depending on the requirement, for instance, occupational, environmental,
      or community noise. A few are listed below:
    </P>
    <Rectanglebox
      property={noiseProperty}
      textwidth="w-full md:w-[67%]"
      titlewidth=" w-full md:w-[33%] "
    />
  </div>
</section>

<section class="scroll-mt-52 mt-16" id="advantages">
  <div class="container mx-auto md:px-[55px] text-left px-5">
    <div class="flex gap-4">
      <Heading
        size="headingS25"
        id="what-is-vibration"
        className="font-semibold text-[#1e3a8a]"
      >
        Advantages Of Environmental Noise Surveys and Monitoring
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
      className="text-gray-700 leading-relaxed pt-6 pb-10"
    >
      Environmental noise is the unwanted outdoor sound that affects a specific
      area and its surrounding locality. It generally occurs through human
      activities and includes industrial noises such as welding, hammering,
      drilling, and grinding, transportation noises, domestic noises, etc.
    </P>
  </div>
</section>

<section>
  <Slidecard cardMain={noiceCardMain} cardData={noiceCardData} />
</section>

<section class="mt-16 scroll-mt-20" id="steps"></section>

<section class="bg-white pt-16 scroll-mt-20" id="why-choose-us">
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
      At Assetconditionmonitoring.com, we utilize advanced sound level meters
      such as the Optimus+ Red by Cirrus Research PLC to carry out both
      continuous and short-term noise assessments. These high-performance
      instruments are specifically designed for accurate occupational noise
      monitoring, helping us capture precise data in various workplace
      environments. Sound itself is a variation in air pressure, measured in
      decibels (dB), ranging from 0 dB—the softest sound the average human ear
      can detect—to levels above 120 dB, which are considered dangerous. In
      industrial settings, noise levels can often rise significantly, posing
      serious risks to workers if not properly managed.
    </P>
    <div
      class="grid grid-cols-1 text-[#1E3A8A] gap-8 px-5 pt-10 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <ul class="space-y-6 font-semibold">
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Qualified experts with industry experience </span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Advanced and accurate monitoring equipment </span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Compliance with global standards </span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Clear reports with practical recommendations </span>
        </li>
        <li class="flex items-center">
          <span class="inline-block w-4 h-5 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Customisable for every industry </span>
        </li>
      </ul>
    </div>
  </div>
</section>

<section class="scroll-mt-20" id="faqs">
  <Faq faqs={noiceFaqs} />
</section>
