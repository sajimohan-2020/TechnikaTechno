<script lang="ts">
  import { PUBLIC_APIURL } from "$env/static/public";
  import Thickline from "$lib/icons/svgs/thickline.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import ShadowArrow from "$lib/icons/svgs/shadowArrow.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Dropdown from "./dropdown.svelte";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  import YellowDot from "$lib/icons/svgs/yellowDot.svelte";
  import Boxview from "$lib/components/boxview/BoxView.svelte";
  import Pellete from "./boxView.svelte";
  import Downarrow from "$lib/icons/svgs/downarrow.svelte";
  import { slide } from "svelte/transition";
  import Productexplore from "$lib/components/ui/productExplore/ProductExplore.svelte";
  import { goto } from "$app/navigation";
  import Circlehook from "$lib/icons/svgs/circlehook.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  export let data;
  interface name {
    title: string;
    text?: string;
    link?: string;
  }
  const name: name[] = [
    {
      title:
        "Explore world-class sonotec products from assetconditionmonitoring.com",

      text: "EXPLORE",
      link: `/${data.langParam}/contact-us`,
    },
  ];
  const name2: name[] = [
    {
      title: "Interested to know more?",
      text: "Lets Talk",
      link: ``,
    },
  ];

  const href = [
    {
      link: `/${data.langParam}/products/sonotec-acoustic-camera-uae`,
    },
  ];
</script>

<section>
  <div class="pt-24 sm:pt-28 lg:pt-28">
    <div class="flex items-center justify-center relative">
      <img
        src={`${PUBLIC_APIURL}/assets/${data.productDetails.banner_image}`}
        alt="banner_image"
        class="w-full h-[300px] md:h-[300px] lg:h-[450px] object-cover"
      />
      <div class="absolute inset-0 bg-black opacity-40"></div>
      <div class="absolute left-[2%] w-fit h-auto">
        <div class="flex items-center gap-1 h-[50px] md:h-[70px]">
          <Thickline data="w-[1.5rem] md:w-[3rem] h-20px" />
          <Heading size="h2bold2" className=" font-bold text-white ">
            SONOTEC
          </Heading>
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
                <ShadowArrow data="md:h-8 md:w-5 h-5 w-5 ml-2 md:ml-4" />
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
        class="h-[57px] md:h-[85px] w-[131px] md:w-[225px] 2.5xl:w-[250px] 2.5xl:h-[100px]"
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
    <P size="texts18" className="text-gray-700 text-justify mt-5 lg:mt-0">
      assetconditionmonitoring.com has been the authorised distributor of
      SONOTEC multipurpose ultrasonic testing devices in the UAE. Since 2017, we
      have been delivering the most modern ultrasonic acoustic testing devices
      to the leading companies in the oil and gas, petrochemical, marine, and
      power industrial sectors.
    </P>
    <P size="texts18" className="text-gray-700 text-justify mt-6">
      At assetconditiomonitoring.com, we bring Sonotec’s advanced ultrasonic
      measurement technology with a variety of ultrasonic testing devices for
      hassle-free preventive maintenance. With advanced German-engineered
      testing solutions trusted worldwide for durability, precision, and
      efficient operations, assetconditionmonitoring.com brings you Sonotec’s
      Acoustic cameras and Ultrasonic testing devices, offering versatile tools
      for detecting leaks, monitoring bearing conditions, inspecting steam traps
      and valves, and identifying partial discharges in electrical systems. From
      compact, user-friendly devices to robust solutions designed for demanding
      industrial settings, we provide a comprehensive range of ultrasonic
      testing devices from the house of SONOTEC, helping industries reduce
      energy losses, enhance safety, and prevent costly outages.
    </P>
  </div>
</section>

<div class="container mx-auto md:px-[55px] lg:hidden">
  <div class="flex items-center mt-16 w-full">
    <Heading size="headingS25" className="font-semibold text-[#0B60B0]">
      SONOTEC’s Ultrasonic measurement brought to you by
      Assetconditionmonitoring.com.
    </Heading>
  </div>
</div>

<section class="lg:mt-24">
  <div class="container mx-auto md:px-[55px]">
    <div class="flex flex-col lg:flex-row gap-6 justify-between mt-6">
      <div class="w-full lg:w-3/5">
        <div class="w-[55%] sm:w-[55%] md:w-[45%] rounded-xl mx-auto lg:hidden">
          <img
            src="/assets/img/sonotec 2.webp"
            alt="Underground cables IPEC"
            class="w-full h-auto md:h-[258px] object-cover rounded-xl"
          />
        </div>
        <Heading
          size="headingS25"
          className="font-semibold text-[#0B60B0] hidden lg:block"
        >
          SONOTEC’s Ultrasonic measurement brought to you by
          Assetconditionmonitoring.com.
        </Heading>
        <P size="texts18" className="text-gray-700 text-justify mt-5 lg:mt-8">
          Being the pioneer of ultrasonic testing solutions, Sonotec has been
          serving the industries worldwide with innovative technologies,
          ensuring reliable asset performance. With a strong focus on
          world-class standards and advanced engineering excellence, Sonotec’s
          product line delivers unmatched precision in the ultrasonic testing
          field. As an experienced and premier distributor in the region,
        </P>
        <P size="texts18" className="text-gray-700 text-justify mt-4 ">
          assetconditionmonitoring.com strives to be your trusted partner in
          providing Sonotec’s latest ultrasonic solutions. Whether you require
          portable handheld testers or advanced systems, we deliver customised
          solutions to meet your preventive maintenance and condition monitoring
          requirements all across the UAE and the Middle East.
        </P>
      </div>
      <div
        class="hidden lg:block w-[80%] sm:w-[80%] md:w-[60%] lg:w-2/5 rounded-xl mx-auto lg:mx-0"
      >
        <img
          src="/assets/img/sonotec 2.webp"
          alt="Underground cables IPEC"
          class="w-full h-auto md:h-[300px] lg:h-[350px] xl:h-[100%] object-cover rounded-xl"
        />
      </div>
    </div>

    <section class="mt-20"></section>
    <Productexplore {name} />
  </div>
</section>

<section class="lg:mt-20 relative z-50">
  <div class="absolute right-0 top-0 z-0">
    <img src="/assets/right-eclipse.svg" alt="" />
  </div>
  <div class="container mx-auto md:px-[55px] relative">
    <div class="flex item-start gap-3 pt-20 lg:pt-0">
      <Heading size="headingS25" className="font-bold text-[#0B60B0] ">
        SONASCREEN® 2 - Acoustic Camera for Preventive Maintenance
      </Heading>
      <div class="pt-2">
        <Yellowline />
      </div>
    </div>

    <div class="flex flex-col lg:flex-row gap-6 justify-between mt-10">
      <div
        class="hidden lg:block w-[80%] sm:w-[80%] md:w-[70%] lg:w-2/5 xl:w-[64%] rounded-xl mx-auto lg:mx-0"
      >
        <img
          src="/assets/img/sonotec-img-2.png"
          alt=""
          class="w-full h-auto md:h-[300px] lg:h-[200px] xl:h-[280px] object-cover rounded-xl"
        />
      </div>
      <div class="w-full lg:w-3/5 flex flex-col items-start justify-between">
        <div class="w-[55%] sm:w-[55%] md:w-[45%] rounded-xl mx-auto lg:hidden">
          <img
            src="/assets/img/sonotec-img-2.png"
            alt="Underground cables IPEC"
            class="w-full h-auto md:h-[174px] object-cover rounded-xl"
          />
        </div>
        <P size="texts18" className="text-gray-700 text-justify mt-5 lg:mt-0">
          Handheld, Accurate, easy-to-use acoustic camera that localises sound
          and enables quick detection of leaks, electrical partial discharges,
          and mechanical faults.
        </P>

        <a
          href={`/${data.langParam}/products/sonotec-acoustic-camera-uae`}
          class="flex items-center border border-[#0B60B0] rounded overflow-hidden group mt-8 lg:mt-0"
        >
          <!-- Left side text -->
          <span
            class="px-3 py-1.5 text-sm bg-white text-black font-semibold transition-colors duration-300
           group-hover:bg-[#0B60B0] group-hover:text-white
           sm:px-4 sm:py-2 sm:text-base"
          >
            KNOW MORE
          </span>

          <!-- Right side arrow -->
          <span
            class="px-3 py-1.5 bg-[#0B60B0] flex items-center justify-center transition-colors duration-300
           group-hover:bg-white
           sm:px-4 sm:py-2"
          >
            <svg
              class="transition-colors duration-300 fill-white group-hover:fill-[#0B60B0] w-3 h-5 sm:w-4 sm:h-7"
              viewBox="0 0 16 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.3673 12.3702C15.7578 12.7609 15.9772 13.2907 15.9772 13.8432C15.9772 14.3956 15.7578 14.9254 15.3673 15.3161L3.58185 27.1015C3.38967 27.3005 3.15979 27.4592 2.90561 27.5684C2.65144 27.6775 2.37806 27.735 2.10144 27.7374C1.82481 27.7398 1.55048 27.6871 1.29445 27.5824C1.03841 27.4776 0.805804 27.3229 0.610194 27.1273C0.414584 26.9317 0.25989 26.6991 0.155138 26.4431C0.0503863 26.187 -0.00232512 25.9127 7.86605e-05 25.6361C0.00248244 25.3594 0.0599539 25.0861 0.169139 24.8319C0.278325 24.5777 0.437037 24.3478 0.636016 24.1557L10.9485 13.8432L0.636016 3.53065C0.256521 3.13773 0.0465323 2.61147 0.051279 2.06523C0.0560258 1.51899 0.275127 0.996461 0.661394 0.610194C1.04766 0.223927 1.57019 0.00482546 2.11643 7.87555e-05C2.66267 -0.00466795 3.18893 0.20532 3.58185 0.584816L15.3673 12.3702Z"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  </div>
</section>

<section class="lg:mt-20">
  <div class="container mx-auto md:px-[55px]">
    <div class="flex item-start gap-3 pt-20 lg:pt-0">
      <Heading size="headingS25" className="font-bold text-[#0B60B0] ">
        SONAPHONE® - Ultrasonic Testing Devices for preventive maintenance
      </Heading>
      <div class="pt-2">
        <Yellowline />
      </div>
    </div>

    <div class="flex flex-col lg:flex-row gap-6 justify-between mt-10 relative">
      <div class="w-full lg:w-3/5 flex flex-col items-start justify-between">
        <div class="w-[55%] sm:w-[55%] md:w-[45%] rounded-xl mx-auto lg:hidden">
          <img
            src="/assets/img/sonotec-img-3.png"
            alt="sonotec"
            class="w-full h-auto md:h-[174px] object-cover rounded-xl"
          />
        </div>
        <P size="texts18" className="text-gray-700 text-justify mt-5 lg:mt-0">
          Handheld, Accurate, easy-to-use acoustic camera that localises sound
          and enables quick detection of leaks, electrical partial discharges,
          and mechanical faults.
        </P>
        <P size="texts18" className="text-gray-700 text-justify mt-5 lg:mt-0">
          They feature broadband sensors that operate above the range of human
          hearing (20 kHz and above), enabling early detection of potential
          damage before it becomes noticeable.
        </P>
        <a
          href={`/${data.langParam}/products/sonotec-ultrasonic-testing-uae`}
          class="flex items-center border border-[#0B60B0] rounded overflow-hidden group mt-8 lg:mt-5 xl:mt-0 relative"
        >
          <!-- Left side text -->
          <span
            class="px-3 py-1.5 text-sm bg-white text-black font-semibold transition-colors duration-300
           group-hover:bg-[#0B60B0] group-hover:text-white
           sm:px-4 sm:py-2 sm:text-base"
          >
            KNOW MORE
          </span>

          <!-- Right side arrow -->
          <span
            class="px-3 py-1.5 bg-[#0B60B0] flex items-center justify-center transition-colors duration-300
           group-hover:bg-white
           sm:px-4 sm:py-2"
          >
            <svg
              class="transition-colors duration-300 fill-white group-hover:fill-[#0B60B0] w-3 h-5 sm:w-4 sm:h-7"
              viewBox="0 0 16 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.3673 12.3702C15.7578 12.7609 15.9772 13.2907 15.9772 13.8432C15.9772 14.3956 15.7578 14.9254 15.3673 15.3161L3.58185 27.1015C3.38967 27.3005 3.15979 27.4592 2.90561 27.5684C2.65144 27.6775 2.37806 27.735 2.10144 27.7374C1.82481 27.7398 1.55048 27.6871 1.29445 27.5824C1.03841 27.4776 0.805804 27.3229 0.610194 27.1273C0.414584 26.9317 0.25989 26.6991 0.155138 26.4431C0.0503863 26.187 -0.00232512 25.9127 7.86605e-05 25.6361C0.00248244 25.3594 0.0599539 25.0861 0.169139 24.8319C0.278325 24.5777 0.437037 24.3478 0.636016 24.1557L10.9485 13.8432L0.636016 3.53065C0.256521 3.13773 0.0465323 2.61147 0.051279 2.06523C0.0560258 1.51899 0.275127 0.996461 0.661394 0.610194C1.04766 0.223927 1.57019 0.00482546 2.11643 7.87555e-05C2.66267 -0.00466795 3.18893 0.20532 3.58185 0.584816L15.3673 12.3702Z"
              />
            </svg>
          </span>
        </a>
      </div>
      <div
        class="hidden lg:block w-[80%] sm:w-[80%] md:w-[70%] lg:w-2/5 xl:w-[64%] rounded-xl mx-auto lg:mx-0"
      >
        <img
          src="/assets/img/sonotec-img-3.png"
          alt="Underground cables IPEC"
          class="w-full h-auto md:h-[300px] lg:h-[200px] xl:h-[280px] object-cover rounded-xl"
        />
      </div>
    </div>
  </div>
</section>

<section class="mt-36 relative z-[-10]">
  <div class="absolute z-0 top-[-250px]">
    <img src="/assets/left-eclipse.svg" alt="" />
  </div>
</section>

<section class=" bg-[#F7F7F7] h-fit relative">
  <div class="pt-10 container mx-auto md:px-[55px] pb-10">
    <!-- <a href={` /${data.langParam}/contact-us`}>    <div
      class="w-[50%] md:w-[25%] max-w-fit px-4 py-2 lg:px-4 lg:py-2 border-4 border-[#C7D200] bg-white rounded-full text-center mx-auto"
    >
      <span
        class="font-bold text-[#1E3A8A] text-sm sm:text-base md:text-lg lg:text-xl break-words"
      >
        Get a Quote
      </span>
    </div></a> -->

    <Heading
      size="bannerMaih1"
      className=" font-bold text-center text-[#2F2F2F] mt-7"
    >
      Get Sonotec’s acoustic testing products at <span class=""
        >AssetConditionMonitoring.com</span
      >
    </Heading>
    <P
      size="texts18"
      className="text-gray-700 text-left mt-4 leading-relaxed px-4 md:px-0"
    >
      Enhance your preventive maintenance strategy through Sonotec’s advanced
      ultrasonic testing solutions from Assetconditionmonitoring.com
    </P>
    <div class="mt-16 mb-20">
      <Explore name={name2} data={` /${data.langParam}/contact-us`} />
    </div>
  </div>
</section>
