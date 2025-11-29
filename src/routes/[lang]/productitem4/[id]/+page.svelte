<script lang="ts">
  import { PUBLIC_APIURL } from "$env/static/public";
  import Thickline from "$lib/icons/svgs/thickline.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import ShadowArrow from "$lib/icons/svgs/shadowArrow.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  import YellowDot from "$lib/icons/svgs/yellowDot.svelte";
  import { slide } from "svelte/transition";
  import Productexplore from "$lib/components/ui/productExplore/ProductExplore.svelte";
  export let data;
  import { goto } from "$app/navigation";
  import Circlehook from "$lib/icons/svgs/circlehook.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  import Boxes from "$lib/components/boxes/Boxes.svelte";
  import GrayCircle from "$lib/icons/svgs/grayCircle.svelte";

  // Add safety checks for data
  $: safeData = data || {};
  $: langParam = safeData.langParam || "en";

  interface name {
    title: string;
    text?: string;
    link?: string;
  }

  // Use reactive statements for safer array initialization
  $: name = [
    {
      title: " For more Pruftechnik products ",
      text: "EXPLORE",
      link: `/${langParam}/productitems/pruftechnik`,
    },
  ];

  $: name2 = [
    {
      title: "  Interested to know more ",
      text: "Let's Talk",
      link: `/${langParam}/contact-us`,
    },
  ];

  interface box {
    title?: string;
    text?: string;
  }

  // Ensure boxes is always an array
  $: boxes = [
    {
      text: "Airborne and Structure-Borne Sound Detection, Leak Detection, Electrical Inspection, Condition Monitoring, Steam Trap Testing",
    },
    {
      text: "Intuitive apps provide step-by-step guidance throughout the entire testing process.",
    },
    {
      text: "Capture and organize key information at each measurement point by recording the spectrogram and levels, & adding photos, voice notes, & text comments.",
    },
    {
      text: "Perform broadband ultrasound analysis by simultaneously recording signals from 20 kHz to 100 kHz.",
    },
    {
      text: "Optional modular software platform, DataSuite, for organizing measurement points, planning inspection routes, performing trend analysis, and generating documentation",
    },
    {
      text: "Generate professional PDF test reports directly on the device with just a few clicks.",
    },
    {
      text: "Features a 5-inch multi-touch display with touchscreen technology",
    },
    {
      text: "Durable, smartly designed housing, ideal for harsh industrial environments.",
    },
    {
      text: "Realizing Maintenance 4.0,Detect problems early and avoid downtimes",
    },
    {
      text: "Captures fast-occurring events with 100 frames per second",
    },
    {
      text: "Built-in flashlight for enhanced visibility",
    },
    {
      text: "Suitable for use in a wide range of indoor and outdoor industrial applications",
    },
  ];
</script>

<section>
  <div class="pt-24 sm:pt-28 lg:pt-28">
    <div class="flex items-center justify-center relative">
      <img
        src="/assets/img/sonotech.webp"
        alt="sono"
        class="w-full h-[300px] md:h-[300px] lg:h-[450px] object-cover"
      />
      <div class="absolute inset-0 bg-black opacity-40"></div>
      <div class="absolute left-[2%] w-fit h-auto">
        <div class="flex items-center gap-1 h-[50px] md:h-[70px]">
          {#if Thickline}
            <Thickline data="w-[1.5rem] md:w-[3rem] h-20px" />
          {/if}
          <div class="flex flex-col leading-none">
            {#if Heading}
              <Heading
                size="h2bold2"
                className="font-bold text-white m-0 leading-none"
              >
                SONOTEC
              </Heading>
            {:else}
              <h2 class="font-bold text-white m-0 leading-none">SONOTEC</h2>
            {/if}
            <p
              class="text-white font-bold m-0 text-xs md:text-sm lg:text-md xl:text-[20px] leading-none"
            >
              ULTRASONIC TESTING DEVICES
            </p>
          </div>
        </div>
      </div>
      <a href={`/${data.langParam}/contact-us`}>
        <div
          class="absolute right-0 bottom-0 z-20 w-[223px] md:w-[400px] xl:w-[620px] lg:w-[500px] md:h-[80px] h-16 sm:h-24"
        >
          <svg
            class="absolute inset-0 w-full h-full"
            viewBox="0 0 620 96"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,96 L60,20 Q80,0 120,0 L620,0 L620,96 Z"
              fill="#C9D400"
            />
          </svg>

          <div
            class="relative z-10 flex items-center justify-center w-full h-full px-4"
          >
            <div class="flex items-center">
              <span
                class="text-white font-bold"
                style="font-size: clamp(1rem, 3vw, 2rem);"
              >
                Lets Talk
              </span>
              <span class="md:pt-2 pt-1">
                {#if ShadowArrow}
                  <ShadowArrow data="md:h-8 md:w-5 h-5 w-5 ml-2 md:ml-4" />
                {/if}
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>

<section class="mt-16">
  <div class="container mx-auto md:px-[35px] mt-10">
    <div class="flex justify-between items-center">
      <div
        class="h-[57px] md:h-[75px] w-[151px] md:w-[200px] 2.5xl:h-[100px] 2.5xl:w-[250px]"
      >
        <img
          src="/assets/logo/sonotec-logo.png"
          alt="sonotec Logo"
          class="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container mx-auto md:px-[55px] mt-10">
    <div class="flex flex-col lg:flex-row gap-6 justify-between mt-6">
      <div class="w-full lg:w-3/5">
        <div class="w-[55%] sm:w-[55%] md:w-[45%] rounded-xl mx-auto lg:hidden">
          <img
            src="/assets/img/sonotec-ultrasonic-img-1.png"
            alt="Underground cables IPEC"
            class="w-full h-auto md:h-[258px] object-cover rounded-xl"
          />
        </div>
        {#if Heading}
          <Heading
            size="headingS25"
            className="font-bold text-[#0B60B0] mb-6 pt-4 lg:pt-0"
          >
            Ultrasonic Testing Devices
          </Heading>
        {:else}
          <h2 class="font-bold text-[#0B60B0] mb-6">
            Ultrasonic Testing Devices
          </h2>
        {/if}
        {#if P}
          <P size="texts18" className="text-gray-700 text-justify mt-5 lg:mt-0">
            Assetconditionmonitoring.com, the authorised distributor of the
            SONAPHONE Ultrasonic Testing Device, takes ultrasound detection to
            the next level. Optimizing processes, enhancing operational
            reliability, and improving energy efficiency are more important than
            ever. Our ultrasonic testing devices enable fast, reliable
            inspections to prevent failures — whether it's detecting leaks,
            identifying defects in rotating components, monitoring lubrication,
            testing steam traps, or inspecting electrical systems.
          </P>
        {:else}
          <p class="text-gray-700 text-justify mt-5 lg:mt-0">
            Assetconditionmonitoring.com, the authorised distributor of the
            SONAPHONE Ultrasonic Testing Device, takes ultrasound detection to
            the next level. Optimizing processes, enhancing operational
            reliability, and improving energy efficiency are more important than
            ever. Our ultrasonic testing devices enable fast, reliable
            inspections to prevent failures — whether it's detecting leaks,
            identifying defects in rotating components, monitoring lubrication,
            testing steam traps, or inspecting electrical systems.
          </p>
        {/if}
      </div>
      <div
        class="hidden lg:block w-[80%] sm:w-[80%] md:w-[60%] lg:w-2/5 rounded-xl mx-auto lg:mx-0"
      >
        <img
          src="/assets/img/sonotec-ultrasonic-img-1.png"
          alt="Underground cables IPEC"
          class="w-full h-auto md:h-[300px] lg:h-[350px] object-cover rounded-xl"
        />
      </div>
    </div>
  </div>
</section>

<section class="mt-20 relative">
  <div class="absolute right-0 top-[-220px] z-0">
    <img src="/assets/right-eclipse.svg" alt="" />
  </div>
  <div class="flex gap-3 justify-center">
    {#if Heading}
      <Heading size="headingS25" className="font-bold text-[#2F2F2F] mb-6">
        Key Features
      </Heading>
    {:else}
      <h2 class="font-bold text-[#2F2F2F] mb-6">Key Features</h2>
    {/if}
    <div class="pt-1">
      {#if Yellowline}
        <Yellowline />
      {/if}
    </div>
  </div>
  <div class="absolute bottom-[-254px] z-0">
    <img src="/assets/left-eclipse.svg" alt="" />
  </div>
  <div class="container px-5 md:px-[55px] mt-16">
    {#if Boxes && boxes.length > 0}
      <Boxes {boxes} />
    {/if}
  </div>
</section>

<section class="mt-24">
  <div class="flex gap-3 justify-center">
    {#if Heading}
      <Heading size="headingS25" className="font-bold text-[#2F2F2F] mb-6">
        Product Range
      </Heading>
    {:else}
      <h2 class="font-bold text-[#2F2F2F] mb-6">Product Range</h2>
    {/if}
    <div class="pt-1">
      {#if Yellowline}
        <Yellowline />
      {/if}
    </div>
  </div>
</section>

<div class="container mx-auto md:px-[55px] mt-24">
  <div class="flex gap-3 mt-16">
    {#if Heading}
      <Heading size="headingS25" className="font-semibold text-[#0B60B0]">
        SONAPHONE
      </Heading>
    {:else}
      <h2 class="font-semibold text-[#0B60B0]">SONAPHONE</h2>
    {/if}
    <div class="pt-1">
      {#if Yellowline}
        <Yellowline />
      {/if}
    </div>
  </div>
</div>

<section class="mt-10">
  <div class="container mx-auto md:px-[55px]">
    <div class="flex flex-col lg:flex-row gap-6 justify-between mt-6">
      <div
        class="hidden lg:block w-[80%] sm:w-[80%] md:w-[60%] lg:w-2/5 rounded-xl mx-auto lg:mx-0"
      >
        <img
          src="/assets/img/sonotec-ultrasonic-img-2.png"
          alt="emaint"
          class="w-full h-auto md:h-[300px] lg:h-[350px] object-cover object-center rounded-xl"
        />
      </div>
      <div class="w-full lg:w-3/5">
        <div class="w-[55%] sm:w-[55%] md:w-[45%] rounded-xl mx-auto lg:hidden">
          <img
            src="/assets/img/sonotec-ultrasonic-img-2.png"
            alt="Underground cables IPEC"
            class="w-full h-auto md:h-[258px] object-contain object-center rounded-xl"
          />
        </div>

        {#if P}
          <P size="texts18" className="text-gray-700 text-justify mt-5 lg:mt-0">
            Featuring broadband sensor technology for high-frequency ultrasonic
            testing, SONAPHONE also incorporates an intuitive Web & App concept
            for recording and documenting findings. The software and apps guide
            users through the entire preventive maintenance workflow — from
            planning and testing to documentation and analysis — with
            touchscreen operation and centralized access to all relevant
            information. Compatible with a wide range of airborne and
            structure-borne sound sensors, SONAPHONE devices are versatile tools
            for any maintenance strategy, and all sensors are developed and
            manufactured in-house to ensure exceptional quality, precision, and
            reliability.
          </P>
        {:else}
          <p class="text-gray-700 text-justify mt-5 lg:mt-0">
            Featuring broadband sensor technology for high-frequency ultrasonic
            testing, SONAPHONE also incorporates an intuitive Web & App concept
            for recording and documenting findings. The software and apps guide
            users through the entire preventive maintenance workflow — from
            planning and testing to documentation and analysis — with
            touchscreen operation and centralized access to all relevant
            information. Compatible with a wide range of airborne and
            structure-borne sound sensors, SONAPHONE devices are versatile tools
            for any maintenance strategy, and all sensors are developed and
            manufactured in-house to ensure exceptional quality, precision, and
            reliability.
          </p>
        {/if}
      </div>
    </div>
  </div>
</section>

<div class="container mx-auto md:px-[55px] mt-24">
  <div class="flex gap-3 mt-16">
    {#if Heading}
      <Heading size="headingS25" className="font-semibold text-[#0B60B0]">
        SONAPHONE® Pocket
      </Heading>
    {:else}
      <h2 class="font-semibold text-[#0B60B0]">SONAPHONE® Pocket</h2>
    {/if}
    <div class="pt-1">
      {#if Yellowline}
        <Yellowline />
      {/if}
    </div>
  </div>
</div>

<section class="mt-10">
  <div class="container mx-auto md:px-[55px]">
    <div class="flex flex-col lg:flex-row gap-6 justify-between mt-6">
      <div class="w-full lg:w-3/5">
        <div class="w-[55%] sm:w-[55%] md:w-[45%] rounded-xl mx-auto lg:hidden">
          <img
            src="/assets/img/sonotec-ultrasonic-img-3.png"
            alt="Underground cables IPEC"
            class="w-full h-auto md:h-[258px] object-contain object-center rounded-xl"
          />
        </div>

        {#if P}
          <P size="texts18" className="text-gray-700 text-justify mt-5 lg:mt-0">
            eMaint, a powerful solution from Fluke Reliability, is a
            cutting-edge maintenance software platform offered by
            assetconditionmonitoring.com. Combining the capabilities of CMMS,
            EAM, and IIoT in a single, cloud-based ecosystem, eMaint enables
            organizations to maximize uptime, improve asset reliability, and
            streamline maintenance operations. By connecting hardware and
            software, this innovative tool provides real-time insights and
            control, empowering maintenance teams to make data-driven decisions
            and enhance overall operational performance.
          </P>
        {:else}
          <p class="text-gray-700 text-justify mt-5 lg:mt-0">
            eMaint, a powerful solution from Fluke Reliability, is a
            cutting-edge maintenance software platform offered by
            assetconditionmonitoring.com. Combining the capabilities of CMMS,
            EAM, and IIoT in a single, cloud-based ecosystem, eMaint enables
            organizations to maximize uptime, improve asset reliability, and
            streamline maintenance operations. By connecting hardware and
            software, this innovative tool provides real-time insights and
            control, empowering maintenance teams to make data-driven decisions
            and enhance overall operational performance.
          </p>
        {/if}

        {#if P}
          <P size="texts18" className="text-gray-700 text-justify pt-5">
            The SONAPHONE Pocket is perfectly suited for:
          </P>
        {:else}
          <p class="text-gray-700 text-justify pt-5">
            The SONAPHONE Pocket is perfectly suited for:
          </p>
        {/if}

        <!-- Fixed list structure -->
        <ul
          class="xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] text-[#2F2F2F] pt-6"
        >
          <li class="relative pl-5 flex items-start mb-2">
            <span class="text-[#2F2F2F] mr-2">•</span>
            <span>Leak detection on compressed air systems</span>
          </li>
          <li class="relative pl-5 flex items-start mb-2">
            <span class="text-[#2F2F2F] mr-2">•</span>
            <span>Detection of partial discharges</span>
          </li>
          <li class="relative pl-5 flex items-start mb-2">
            <span class="text-[#2F2F2F] mr-2">•</span>
            <span>Tightness testing</span>
          </li>
        </ul>
      </div>
      <div
        class="hidden lg:block w-[80%] sm:w-[80%] md:w-[60%] lg:w-2/5 rounded-xl mx-auto lg:mx-0"
      >
        <img
          src="/assets/img/sonotec-ultrasonic-img-3.png"
          alt="emaint"
          class="w-full h-auto md:h-[300px] lg:h-[350px] object-cover object-center rounded-xl"
        />
      </div>
    </div>
  </div>
</section>

<div class="container mx-auto md:px-[55px] mt-24">
  <div class="flex gap-3 mt-16">
    {#if Heading}
      <Heading size="headingS25" className="font-semibold text-[#0B60B0]">
        SONAPHONE® T & SONOSPHERE
      </Heading>
    {:else}
      <h2 class="font-semibold text-[#0B60B0]">SONAPHONE® T & SONOSPHERE</h2>
    {/if}
    <div class="pt-1">
      {#if Yellowline}
        <Yellowline />
      {/if}
    </div>
  </div>
</div>

<section class="mt-10">
  <div class="container mx-auto md:px-[55px]">
    <div class="flex flex-col lg:flex-row gap-6 justify-between mt-6">
      <div
        class="hidden lg:block w-[80%] sm:w-[80%] md:w-[60%] lg:w-2/5 rounded-xl mx-auto lg:mx-0"
      >
        <img
          src="/assets/img/sonotec-ultrasonic-img-2.png"
          alt="emaint"
          class="w-full h-auto md:h-[300px] lg:h-[350px] object-cover object-center rounded-xl"
        />
      </div>
      <div class="w-full lg:w-3/5">
        <div class="w-[55%] sm:w-[55%] md:w-[45%] rounded-xl mx-auto lg:hidden">
          <img
            src="/assets/img/sonotec-ultrasonic-img-2.png"
            alt="Underground cables IPEC"
            class="w-full h-auto md:h-[258px] object-contain object-center rounded-xl"
          />
        </div>

        {#if P}
          <P size="texts18" className="text-gray-700 text-justify mt-5 lg:mt-0">
            The SONAPHONE T enables fast, reliable detection of seal failures in
            windows, doors, cabins, vehicles, and containers, and is also used
            in shipbuilding, fire safety doors, climate chambers, and clean
            rooms. Paired with a SONAPHONE ultrasonic receiver, it provides
            efficient, cost-effective tightness testing with minimal staff
            training. Featuring an integrated LC display, adjustable sound
            intensity, and modulated transmission signals, the device accurately
            detects both small leaks and large leakage areas. The optional
            omnidirectional SONOSPHERE transmitter extends testing to large or
            irregular surfaces, making SONAPHONE T a versatile solution for
            preventive maintenance.
          </P>
        {:else}
          <p class="text-gray-700 text-justify mt-5 lg:mt-0">
            The SONAPHONE T enables fast, reliable detection of seal failures in
            windows, doors, cabins, vehicles, and containers, and is also used
            in shipbuilding, fire safety doors, climate chambers, and clean
            rooms. Paired with a SONAPHONE ultrasonic receiver, it provides
            efficient, cost-effective tightness testing with minimal staff
            training. Featuring an integrated LC display, adjustable sound
            intensity, and modulated transmission signals, the device accurately
            detects both small leaks and large leakage areas. The optional
            omnidirectional SONOSPHERE transmitter extends testing to large or
            irregular surfaces, making SONAPHONE T a versatile solution for
            preventive maintenance.
          </p>
        {/if}
      </div>
    </div>
  </div>
</section>

<section class="mt-24 bg-[#F7F7F7] h-fit relative">
  <div class="absolute bottom-[225px] z-[-10]">
    <img src="/assets/left-eclipse.svg" alt="" />
  </div>
  <div class="pt-10 container mx-auto md:px-[55px] pb-10">
    {#if Heading}
      <Heading
        size="bannerMaih1"
        className="font-bold text-center text-[#2F2F2F] mt-7"
      >
        Get Sonotec's acoustic testing products at
        <span>AssetConditionMonitoring.com</span>
      </Heading>
    {:else}
      <h1 class="font-bold text-center text-[#2F2F2F] mt-7">
        Get Sonotec's acoustic testing products at
        <span>AssetConditionMonitoring.com</span>
      </h1>
    {/if}

    {#if P}
      <P
        size="texts18"
        className="text-gray-700 text-left mt-4 leading-relaxed px-4 md:px-0"
      >
        Assetconditionmonitoring.com is the authorized SONOTEC partner in the
        UAE, offering expert support and training for the SONAPHONE series. With
        over 18 years of experience, we provide reliable solutions for leak
        detection, partial discharge testing, and condition monitoring, helping
        you optimize preventive maintenance efficiently. Enhance your preventive
        maintenance strategy through Sonotec's advanced ultrasonic testing
        solutions from Assetconditionmonitoring.com
      </P>
    {:else}
      <p class="text-gray-700 text-left mt-4 leading-relaxed px-4 md:px-0">
        Assetconditionmonitoring.com is the authorized SONOTEC partner in the
        UAE, offering expert support and training for the SONAPHONE series. With
        over 18 years of experience, we provide reliable solutions for leak
        detection, partial discharge testing, and condition monitoring, helping
        you optimize preventive maintenance efficiently. Enhance your preventive
        maintenance strategy through Sonotec's advanced ultrasonic testing
        solutions from Assetconditionmonitoring.com
      </p>
    {/if}

    <div class="mt-16 mb-20">
      <!-- Safe fallback approach -->
      {#if typeof Explore === "function" && Array.isArray(name2) && name2.length > 0}
        <Explore name={name2} data={`/${data.langParam}/contact-us`} />
      {:else}
        <div class="text-center">
          <a
            href={`/${langParam}/contact-us`}
            class="inline-block px-8 py-4 bg-[#0B60B0] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Let's Talk
          </a>
        </div>
      {/if}
    </div>
  </div>
</section>
