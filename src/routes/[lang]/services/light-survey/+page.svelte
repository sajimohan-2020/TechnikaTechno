<script lang="ts">
  // @ts-nocheck
  import * as Accordion from "$lib/components/ui/accordion";
  import { PUBLIC_APIURL } from "$env/static/public";
  import { slide } from "svelte/transition";
  import Faq from "$lib/components/faq/Faq.svelte";
  import Contacts from "$lib/components/contactus/ContactUs.svelte";
  import Serviceui from "$lib/components/serviceui/ServiceUI.svelte";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  import Listview from "$lib/components/listview/ListView.svelte";
  import Bookmarknav from "$lib/components/bookmarknav/BookMarkNav.svelte";
  import Page from "$lib/components/dropdown/DropDown.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  import Slidecard from "$lib/components/slidecard/SlideCard.svelte";
  import WhyChooseus from "./whyChooseus.svelte";
  import {
    lightSurvey,
    lightSurveyCardMain,
    lightSurveyCardData,
    lightSurveyFaqs,
  } from "$lib/data/lightSurvey";

  /** @type {import('./$types').PageData} */
  export let data;

  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/Light Survey.webp`,
      title: "Light Survey Services",
      titleText: `Light survey is a predictive maintenance analysis performed to assess the lighting condition in workplaces, industrial sites, offshore and onshore locations, or buildings. Lux levels, shadow zones, color temperature, color rendering, and energy consumption of lighting are measured to ensure the safety and reliability of lighting systems.`,
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

<!-- Banner -->
<Serviceui {bannerItems} href={`/${data.langParam}/contact-us`} />

<!-- Bookmark Navigation -->
<Bookmarknav
  bgColor="bg-[#0074BD]"
  textcolor="text-[#FFFFFF]"
  items={lightSurvey}
/>

<!-- What is Light Survey -->
<section class="scroll-mt-20" id="what-is">
  <div class="container px-5 mx-auto py-14 rounded-lg md:px-[55px] text-left">
    <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
      <div class="space-y-6 md:col-span-3">
        <!-- Heading -->
        <div class="flex gap-4 mb-6">
          <Heading
            size="bannerMaih1"
            id="what-is-vibration"
            className="font-bold text-[#1e3a8a]"
          >
            What is Light Survey?
          </Heading>
          <div class="pt-2">
            <Yellowline />
          </div>
        </div>

        <!-- Paragraphs -->
        <P
          size="texts18"
          id="vibration-description"
          className="text-gray-700 leading-relaxed mb-6"
        >
          A light survey is the process of professionally analysing the
          illumination level, quality and distribution of the lighting system in
          a specified area. A lighting survey is essential for assessing the
          efficiency and reliability of lighting systems, as it enhances
          visibility and ensures a safe work environment. It helps understand if
          the lighting system complies with standards such as OSHA, HSE, CIBSE,
          and ISO. Through a detailed lighting assessment, industries can
          identify underperforming areas, enhance energy efficiency, and create
          well-illuminated environments that ensure safety and productivity.
        </P>

        <P
          size="texts18"
          id="vibration-description"
          className="text-gray-700 leading-relaxed mb-8"
        >
          At assetconditionmonitoring.com, we provide full-scale lighting
          assessments specially designed to evaluate and improve the lighting in
          your commercial or industrial setting. Our innovative lighting tools
          and expert engineers make sure your lighting systems are spot-on,
          dependable, and efficient.
        </P>
      </div>

      <Contacts allServices={lightSurveyItems} />
    </div>
  </div>
</section>

<!-- Process Section -->
<section class="scroll-mt-40 mt-14" id="what-are-the-process">
  <Slidecard cardMain={lightSurveyCardMain} cardData={lightSurveyCardData} />
</section>

<!-- How We Do It -->
<section class="mt-14">
  <div class="container mx-auto px-5 md:px-[55px] text-left">
    <!-- Heading -->
    <div class="flex gap-4 mb-6">
      <Heading
        size="headingS25"
        id="what-is-vibration"
        className="font-semibold text-[#1e3a8a]"
      >
        How assetconditionmonitoring.com Does Light Survey
      </Heading>
      <div class="pt-2">
        <Yellowline />
      </div>
    </div>

    <!-- Paragraph -->
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed mb-8"
    >
      With our in-depth knowledge of the industries we serve and the most modern
      lighting technology we use, our team of expert engineers conducts thorough
      lighting analyses. This makes sure your operational space achieves maximum
      efficiency, visual comfort, and the highest safety standards.
    </P>
  </div>
</section>

<!-- Why Choose Us -->
<section class="mt-16 scroll-mt-20" id="why-choose-us">
  <WhyChooseus />
</section>

<!-- FAQs -->
<section class="mt-16 scroll-mt-20" id="faqs">
  <Faq faqs={lightSurveyFaqs} />
</section>
