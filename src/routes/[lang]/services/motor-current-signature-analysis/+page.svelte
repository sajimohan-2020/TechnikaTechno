<script lang="ts">
  // @ts-nocheck
  import * as Accordion from "$lib/components/ui/accordion";
  import Faq from "$lib/components/faq/Faq.svelte";
  import { PUBLIC_APIURL } from "$env/static/public";
  import { slide } from "svelte/transition";
  import Contactus from "$lib/components/contactus/ContactUs.svelte";
  import Serviceui from "$lib/components/serviceui/ServiceUI.svelte";
  import Linkedin from "$lib/components/linkedin/Linkedin.svelte";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  import Listview from "$lib/components/listview/ListView.svelte";
  import {
    motorCardMain,
    motorCardData,
    motorCurrentItems,
    pipingFaqs,
    mcsaFaqs,
  } from "$lib/components/data/assets";
  import Slidecards from "$lib/components/slidecard/SlideCard.svelte";
  import Bookmarknav from "$lib/components/bookmarknav/BookMarkNav.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
  const name: name[] = [
    {
      title: "Let's talk about our motor current signature analysis",
      text: "Enquire Now",
    },
  ];
  const footername: name[] = [
    {
      title: "Protect your assets with smarter motor diagnostics ",
      text: "Contact us",
    },
  ];
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

  // Update isPlaying reactively when video actually plays/pauses
  function handlePlay() {
    isPlaying = true;
  }

  function handlePause() {
    isPlaying = false;
  }

  const bannerItems: bannerItems[] = [
    {
      img: `/assets/img/mcsa9.webp`,
      title: " Motor Current Signature Analysis",
      titleText: ` Motor Current Signature Analysis (MCSA) is a proven predictive maintenance method used to assess the health of electric motors by analyzing the current waveform. This non-invasive technique helps detect early signs of mechanical issues, bearing faults, rotor problems, and insulation deterioration, without requiring the disassembly of equipment.
     `,
      titleText2: ` At assetconditionmonitoring.com, we offer advanced MCSA solutions that are easy to integrate and designed for high-precision environments. Our system is conveniently installed within the motor control cabinet, eliminating the need for intrusive setups.`,
    },
  ];

  const mcsalists: listmodel[] = [
    {
      img: "/assets/logo/proactivefault.svg",
      title: `Proactive Fault Identification`,
      text: `  MCSA detects early-stage issues such as rotor defects, bearing degradation, air-gap irregularities, and mechanical imbalances, allowing maintenance teams to address them before they escalate into critical failures.`,
    },
    {
      img: "/assets/logo/fault.svg",
      title: "Precise Fault Characterization",
      text: `Every defect type generates a distinct electrical current pattern. By analyzing these current waveforms, MCSA helps maintenance professionals accurately differentiate between faults like rotor bar breaks and bearing wear.
`,
    },
    {
      img: "/assets/logo/motorliability.svg",
      title: " Increased Motor Reliability",
      text: `Routine MCSA monitoring leads to early intervention, which prolongs equipment life and ensures smoother, more dependable operations across industrial systems.
`,
    },
    {
      img: "/assets/logo/minimizeddowntime.svg",
      title: " Minimized Downtime",
      text: `By enabling planned interventions instead of reactive repairs, MCSA significantly reduces unplanned stoppages and associated productivity losses.
`,
    },
    {
      img: "/assets/logo/safety.svg",
      title: "Improved Safety and Regulatory Compliance",
      text: `Early detection of electrical and mechanical anomalies helps avoid hazardous failures and supports compliance with industry safety and environmental standards.
`,
    },
    {
      img: "/assets/logo/focusdetection.svg",
      title: " Focused Detection of Critical Motor Faults",
      text: `MCSA excels at identifying gradually developing issues like bearing wear, rotor damage, and eccentricity—problems that are typically hard to detect with conventional inspections.

`,
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
<svelte:head>
  <meta name="robots" content="index, follow" />
</svelte:head>
<!-- Banner Section -->
<Serviceui {bannerItems} href={`/${data.langParam}/contact-us`} />

<!-- Bookmark Link Bar -->
<Bookmarknav
  bgColor="bg-[#0074BD]"
  textcolor="text-[#FFFFFF]"
  items={motorCurrentItems}
/>

<!-- New Section Below Bookmark Bar -->
<div
  class="container mx-auto px-5 py-14 rounded-lg scroll-mt-20 md:px-[55px]"
  id="what-is"
>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
    <!-- Left Side -->
    <div class="space-y-6 md:col-span-3">
      <Heading
        size="bannerMaih1"
        id="what-is-vibration"
        className="font-bold text-[#1e3a8a]"
      >
        How Does Motor Current Signature Analysis Detect Fault Frequencies?
      </Heading>
      <script lang="ts">
        import { PUBLIC_APIURL } from "$env/static/public";
        export let data: any;

        let video: HTMLVideoElement | null = null;
        let isPlaying = false;

        function toggleVideo() {
          if (video) {
            if (isPlaying) {
              video.pause();
            } else {
              video.play();
            }
            isPlaying = !isPlaying;
          }
        }

        function handlePlay() {
          isPlaying = true;
        }

        function handlePause() {
          isPlaying = false;
        }
      </script>

      <div
        class="group bg-[#0B60B0]/80 backdrop-blur rounded-lg overflow-hidden
         md:h-[400px] md:w-full mt-[20px] mb-5 relative"
      >
        <!-- Play/Pause Button -->
        <button
          class="absolute inset-0 flex items-center justify-center z-10 bg-black/30
           transition-opacity duration-300
           {isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}"
          on:click={toggleVideo}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          <div
            class="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center
             transition-transform duration-300 hover:scale-110"
          >
            {#if isPlaying}
              <!-- Pause Icon (only appears on hover) -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-[#0B60B0]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            {:else}
              <!-- Play Icon (always visible until clicked) -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-[#0B60B0] ml-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            {/if}
          </div>
        </button>

        <!-- Thumbnail (only visible when paused) -->
        {#if !isPlaying}
          <img
            src="/assets/img/about-thumb.jpg"
            alt="Video Thumbnail"
            class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          />
        {/if}

        <!-- Video -->
        <video
          bind:this={video}
          on:play={handlePlay}
          on:pause={handlePause}
          class="w-full h-full object-cover"
          loop
          playsinline
        >
          <source
            src="{PUBLIC_APIURL}/assets/{data.serviceDetails.video_file}"
            type="video/mp4"
          />
          <track
            kind="captions"
            src=""
            srclang="en"
            label="English captions"
            default
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed text-justify"
      >
        <span class="font-semibold">
          Motor Current Signature Analysis (MCSA)</span
        > is a cutting-edge diagnostic tool used in predictive maintenance to assess
        the condition of electric motors without halting operations. This technique
        involves analyzing the frequency spectrum derived from the motor’s current
        signal. Any deviation in the frequency pattern from a healthy baseline can
        indicate faults such as rotor bar defects, stator issues, bearing degradation,
        or air-gap eccentricities.
      </P>
      <P
        size="texts18"
        id="vibration-description"
        className="text-gray-700 leading-relaxed"
      >
        At <span class="font-semibold">assetconditionmonitoring.com</span>, we
        utilize advanced MCSA techniques to provide accurate, real-time
        assessments of motor health. By examining current signatures in the
        decibel (dB) vs. frequency domain, we can detect individual or combined
        faults with high reliability.
      </P>
    </div>

    <!-- Right Side -->
    <Contactus allServices={conditionMonitiringItems} />
  </div>
</div>

<Explore {name} width="w-[90%]" data={`/${data.langParam}/contact-us`} />

<section class="scroll-mt-52" id="process-of-mcsa">
  <Slidecards cardMain={motorCardMain} cardData={motorCardData} />
</section>
<section class="scroll-mt-52" id="benefits-of-mcsa">
  <Listview
    mainheading="Benefits of MCSA in Predictive Maintenance:"
    paragraph="Motor Current Signature Analysis (MCSA) is an essential technique in
      predictive maintenance programs, enabling organizations to assess motor
      health and prevent unexpected failures. Here’s how it adds value:"
    lists={mcsalists}
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
        Reliable MCSA Services by <span class="underline"
          >assetconditionmonitoring.com</span
        >
      </Heading>
    </div>
    <P
      size="texts18"
      id="vibration-description"
      className="text-gray-700 leading-relaxed"
    >
      Ensure the health and performance of your electric motors with expert
      Motor Current Signature Analysis (MCSA) from <span class="font-semibold"
        >assetconditionmonitoring.com</span
      >. We help detect faults early, like rotor bar damage, bearing wear, or
      electrical imbalance, reducing downtime and extending equipment life.
    </P>
  </div>
</section>

<section class="bg-white pb-16 scroll-mt-20" id="why-choose-us">
  <div class="container mx-auto px-5 text-left md:px-[55px]">
    <Heading size="bannerMaih1" className="font-bold text-[#1E3A8A] mb-6 ">
      Why Choose Us ?
    </Heading>

    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-8 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <ul class="space-y-6 text-[#1E3A8A] font-semibold">
        <li class="flex items-start">
          <span class="inline-block max-w-4 max-h-4 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span
            >Trusted MCSA and condition monitoring provider in the UAE & Middle
            East
          </span>
        </li>
        <li class="flex items-start">
          <span class="inline-block max-w-4 max-h-4 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Accurate fault detection using advanced tools </span>
        </li>
        <li class="flex items-start">
          <span class="inline-block max-w-4 max-h-4 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span> Tailored solutions for various industries </span>
        </li>
        <li class="flex items-start">
          <span class="inline-block max-w-4 max-h-4 mr-2"
            ><img src="/assets/circlehook.svg" alt="" /></span
          >
          <span>Proven reliability and expert support </span>
        </li>
      </ul>
    </div>
  </div>
</section>

<section class=" mb-10">
  <Explore name={footername} data={`/${data.langParam}/contact-us`} />
</section>
<section class="scroll-mt-20" id="faqs">
  <Faq faqs={mcsaFaqs} />
</section>
