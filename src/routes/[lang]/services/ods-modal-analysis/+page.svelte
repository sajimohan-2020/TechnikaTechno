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
    ods,
    odsCardData,
    odsCardMain,
    odsFaqs,
    odsLists,
  } from "$lib/data/odsAndModalAnalysis";
  import { text } from "@sveltejs/kit";

  /** @type {import('./$types').PageData} */
  export let data;
  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/ODS & Modal Analysis.webp`,
      title: "ODS and Modal Analysis",
      titleText: `ODS  and Modal analysis are highly effective non-invasive predictive maintenance techniques for predicting machine or structure vibrations and inspecting the integrity of structures to detect faults. `,
    },
  ];

  const advancedTrubleshootingItems: services[] = [
    {
      name: "Structural Vibration Analysis",
      link: `/${data.langParam}/services/structural-vibration-analysis`,
    },
    {
      name: "ODS (Operating Deflection Shapes) and Modal Analysis",
      link: `/${data.langParam}/services/ods-modal-analysis`,
    },
  ];
  const name: name[] = [
    {
      title:
        "Enhance performance and reliability with precise ODS & modal analysis. To learn more...",
      text: "Contact us",
    },
  ];
</script>

<Serviceui {bannerItems} href={`/${data.langParam}/contact-us`} />
<Bookmarknav bgColor="bg-[#0074BD]" textcolor="text-[#FFFFFF]" items={ods} />

<section class="scroll-mt-20" id="what-is">
  <div
    class="container px-5 mx-auto py-14 rounded-lg scroll-mt-20 md:px-[55px] text-left"
  >
    <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
      <div class="space-y-4 md:col-span-3">
        <div class="flex gap-4">
          <Heading
            size="bannerMaih1"
            id="what-is-vibration"
            className="font-bold text-[#1e3a8a]"
          >
            ODS & Modal Analysis
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
          Operating Deflection Shapes (ODS) vibration analysis is a robust
          diagnostic tool for predicting and analyzing how equipment or a
          structure vibrates during operation. ODS helps detect anomalies and
          hidden defects that a conventional testing setup might miss. When
          integrating with Structural analysis, ODS and Modal analysis give
          deeper insights into the dynamic response and structural integrity.
        </P>
        <P
          size="texts18"
          id="vibration-description"
          className="text-gray-700 leading-relaxed"
        >
          At <span class="underline text-[#1e3a8a]"
            >assetconditionmonitoring.com</span
          > , we employ ODS and Modal analysis as part of our Structural Vibration
          analysis routine. With this combined technique, we aim to optimise predictive
          maintenance, troubleshoot, and enhance the reliability of your assets.
        </P>
        <div class=" rounded-lg scroll-mt-20 text-left block md:hidden">
          <div class="flex gap-4">
            <Heading
              size="bannerMaih1"
              id="what-is-vibration"
              className="font-bold text-[#1e3a8a]"
            >
              Structural Vibration Analysis
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
            Structural analysis, Modal, and ODS analysis are deeply
            interconnected techniques that are often employed together to get a
            comprehensive picture of the entire structural dynamics. Structural
            analysis provides the theoretical account, predicting how a
            structure should respond under different loads. Modal Analysis
            identifies the basic vibration features and frequencies to provide a
            structural model. ODS analysis evaluates how the structure actually
            behaves under real operation scenarios. By integrating all three
            analyses, the precision can be significantly improved, the data can
            be cross-checked, compared for deviations, and ensure reliability.
          </P>
          <P
            size="texts18"
            id="vibration-description"
            className="text-gray-700 leading-relaxed"
          >
            <span class="underline text-[#1e3a8a]"
              >assetconditionmonitoring.com</span
            > uses high-accuracy instruments with experts delivering world-class
            solutions to the industries. Our integrated techniques ensure reliable
            fault detection, prompt correction, and performance validation.
          </P>
        </div>
      </div>

      <Contacts allServices={advancedTrubleshootingItems} />
    </div>
  </div>
  <div
    class="container px-5 mx-auto rounded-lg scroll-mt-20 md:px-[55px] text-left hidden md:block"
  >
    <div class="flex gap-4">
      <Heading
        size="bannerMaih1"
        id="what-is-vibration"
        className="font-bold text-[#1e3a8a]"
      >
        Structural Vibration Analysis
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
      Structural analysis, Modal, and ODS analysis are deeply interconnected
      techniques that are often employed together to get a comprehensive picture
      of the entire structural dynamics. Structural analysis provides the
      theoretical account, predicting how a structure should respond under
      different loads. Modal Analysis identifies the basic vibration features
      and frequencies to provide a structural model. ODS analysis evaluates how
      the structure actually behaves under real operation scenarios. By
      integrating all three analyses, the precision can be significantly
      improved, the data can be cross-checked, compared for deviations, and
      ensure reliability.
    </P>
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed"
    >
      <span class="underline text-[#1e3a8a]">assetconditionmonitoring.com</span>
      uses high-accuracy instruments with experts delivering world-class solutions
      to the industries. Our integrated techniques ensure reliable fault detection,
      prompt correction, and performance validation.
    </P>
  </div>
</section>

<section class="scroll-mt-40 mt-14" id="ods-analysis-procedure">
  <Slidecard cardMain={odsCardMain} cardData={odsCardData} />
</section>

<section class="scroll-mt-52" id="ods-benefits">
  <Listview lists={odsLists} mainheading="Benefits of ODS Vibration Analysis" />
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
        Advanced ODS and Modal Analysis by <span class="underline"
          >assetconditionmonitoring.com</span
        >
      </Heading>
      <h4
        class=" text-[#2F2F2F] font-bold pt-3 lg:text-[18px] text-[12px] md:text-[14px]"
      >
        Explore our latest Technology on ODS and Modal Analysis
      </h4>
    </div>
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed"
    >
      Ensure the long-term ODS and Modal analysis and Structural Vibration
      Analysis efficiency and reliability of your machine and structures with
      assetconditionmonitoring.com’s advanced ODS and Modal Vibration Analysis.
      We help you optimise your operations and improve the dependability of your
      assets. From detecting the faults early to regular and continuous
      maintenance, we have got you covered. To know more, contact us now!
    </P>
  </div>
</section>

<section class=" scroll-mt-20" id="why-choose-us">
  <WhyChooseus />
</section>
<section class="mt-5">
  <Explore {name} data={`/${data.langParam}/contact-us`} />
</section>

<section class="mt-10 scroll-mt-20" id="faqs">
  <Faq faqs={odsFaqs} />
</section>
