<script lang="ts">
  // @ts-nocheck
  import * as Accordion from "$lib/components/ui/accordion";
  import { PUBLIC_APIURL } from "$env/static/public";
  import { slide } from "svelte/transition";
  import Contactus from "$lib/components/contactus/ContactUs.svelte";
  import Serviceui from "$lib/components/serviceui/ServiceUI.svelte";
  import Faqs from "$lib/components/faq/Faq.svelte";
  import Bookmarknav from "$lib/components/bookmarknav/BookMarkNav.svelte";
  import MethodsOfSva from "./methodsOfSVA.svelte";
  import Box from "$lib/components/boxes/Boxes.svelte";
  import Listview from "$lib/components/listview/ListView.svelte";
  import Whychoose from "$lib/components/whychoose/WhyChoose.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  import {
    structureProperty,
    structralFaqs,
    structralName,
    svalists,
    SVAitems,
  } from "$lib/data/structuralVibrationAnalysis";
  import Rectanglebox from "$lib/components/rectanglebox/RectangleBox.svelte";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  import ImportanceOfSva from "./importanceOfSVA.svelte";
  /** @type {import('./$types').PageData} */

  export let data;

  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/Structural Vibration Analysis.webp`,
      title: "Structural Vibration Analysis",
      titleText: `Structural Vibration Analysis is a robust technique for engineers to study the behaviour of structures under vibrations. By adopting this strategy, potential resonance problems can be identified and prevented, thereby enhancing the safety and stability of the structures involved.
`,
    },
  ];
  const heading = "Why Choose Us?";
  const items = [
    "Trusted Vibration Analysis Experts in the UAE & Middle East",
    "Precise fault detection using advanced vibration tools",
    "Customized Structural Solutions for Complex Systems",
    "Field-Tested Methods Backed by Engineering Expertise",
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
</script>
<svelte:head>
  <meta name="robots" content="index, follow" />
</svelte:head>
<Serviceui {bannerItems} href={`/${data.langParam}/contact-us`} />
<Bookmarknav
  bgColor="bg-[#0074BD]"
  textcolor="text-[#FFFFFF]"
  items={SVAitems}
/>

<div
  class="container mx-auto px-5 py-14 rounded-lg scroll-mt-20 md:px-[55px] text-left"
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
          Structural Vibration Analysis
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
        Structural Vibration Analysis is integral to predictive maintenance
        strategies and aids in a proactive approach as well. Vibration analysis
        evaluates the structural integrity of equipment and infrastructure
        regularly, detecting early signs of fatigue, imbalances, or failure.
        This enables the engineers to predict and prevent structural anomalies
        before they actually fail. Proper structural vibration analysis helps
        identify the root causes of issues like misalignment or resonance, so
        they can be fixed before leading to failure, instead of just treating
        the symptoms.
      </P>

      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        At <span class="text-[#1e3a8a]">assetconditionmonitoring.com</span>, we
        provide expert Structural Vibration Analysis services customised for
        highly accurate and critical asset setups. Our non-intrusive sensors and
        high-end condition monitoring systems can be easily integrated into your
        existing infrastructure or equipment, ensuring ongoing monitoring and
        diagnostics without disrupting operations.
      </P>
    </div>
    <Contactus allServices={advancedTrubleshootingItems} />
  </div>
</div>

<section class="scroll-mt-52" id="advanced-structural-vibration-analysis">
  <MethodsOfSva />
</section>

<ImportanceOfSva />
<section class="mt-14 scroll-mt-52" id="benefits">
  <Listview
    lists={svalists}
    mainheading="Benefits of Vibration Structural Analysis"
  />
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
        Reliable structural Vibration Analysis Services by <span
          class="underline">assetconditionmonitoring.com</span
        >
      </Heading>
    </div>
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed"
    >
      Ensure the safety and integrity of your infrastructure and equipment with
      our comprehensive structural vibration analysis services. We help detect
      and fix abnormal vibrations in your system to ensure the optimal safety
      and performance of your assets. Issues like fatigue cracks, foundation and
      support damage, wear and tear on bearings, loosening of bolts, etc, are
      precisely detected and corrective measures are implemented.
    </P>
  </div>
</section>
<section
  class="container lg:mx-5 bg-white w-full scroll-mt-52"
  id="why-choose-us"
>
  <Whychoose {heading} practices={items} />
</section>
<Explore name={structralName} data={`/${data.langParam}/contact-us`} />
<Faqs faqs={structralFaqs} />
