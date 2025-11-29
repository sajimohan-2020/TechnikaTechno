<script>
  // @ts-nocheck
  import Client from "$lib/components/client/Client.svelte";
  import { PUBLIC_APIURL } from "$env/static/public";
  import Countup from "svelte-countup";
  import Thickline from "$lib/icons/svgs/thickline.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  /** @type {import('./$types').PageData} */
  export let data;

  const stats = [
    {
      value: "19+",
      description:
        " <b> Years of expertise</b> in<br /> the oil & gas industry",
    },
    {
      value: "45+",
      description:
        " <b>Certified professionals</b> with<br />extensive experience",
    },
    {
      value: "70%",
      description: " <b>Recurring Clients</b>",
    },
    {
      value: "100%",
      description: " <b>Commitment to Excellence</b>",
    },
    {
      value: "250+",
      description:
        " <b>Successful Projects</b><br />delivered across the globe",
    },
  ];
</script>
<svelte:head>
  <meta name="robots" content="index, follow" />
</svelte:head>
<!-- Add Font Awesome CDN -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>

<div class="pt-24 sm:pt-28 lg:pt-28">
  <div
    class="flex items-center justify-center relative top-[20px] sm:top-[6px] md:top-0"
  >
    <div
      class="w-full h-[215px] md:h-[230px] lg:h-[300px] xl:h-[360px] 2xl:h-[385px] 2.5xl:h-[470px] 5xl:h-[1000px]"
    >
      <img
        src="{PUBLIC_APIURL}/assets/{data.about_us.banner_image}"
        alt="IPEC"
        class="h-full object-cover object-right md:object-fill xl:w-full"
      />
    </div>
    <div class="absolute inset-0 bg-black opacity-20"></div>

    <!-- <div class="absolute inset-1 flex items-center justify-left pl-14"></div> -->
    <div class="absolute md:left-[2%] w-[90%] md:w-[40%] h-auto">
      <div class="flex items-center gap-1 h-[50px] md:h-[70px]">
        <Thickline data="w-[1.5rem] md:w-[3rem] h-20px" />
        <Heading
          size="bannerMaih1"
          as="h1"
          className="text-white font-bold text-left 2.5xl:text-[40px] 5xl:text-[60px]"
        >
          {data.about_us.translations[0].title1}
        </Heading>
      </div>
    </div>

    <div
      class="hidden md:block absolute bg-white bottom-0 right-12 px-8 py-4 5xl:px-[15rem] 5xl:py-[4rem]"
    >
      <nav class="flex space-x-2 5xl:text-[4rem] text-base">
        <P
          size="texts18"
          className="text-[#0B60B0] 5xl:text-[4rem] hover:text-[#00245a] "
        >
          <a href="/" class=""
            >{data.about_us.translations[0].breadcrumb_text1}</a
          >
        </P>
        <span>/</span>
        <P
          size="texts18"
          className="text-[#0B60B0] 5xl:text-[4rem] hover:text-[#00245a]"
        >
          <a href="#." class="">
            {data.about_us.translations[0].breadcrumb_text2}
          </a>
        </P>
      </nav>
    </div>
  </div>
</div>

<div>
  <div class="relative">
    <div class="absolute mt-[23px] md:mt-0 md:top-0">
      <img
        src="/assets/blueeclipse.png"
        alt=""
        class="xl:h-[200px] md:h-[160px] h-[100px] z-0"
      />
    </div>
    <div class="flex items-center justify-center pt-10 gap-3">
      <Heading
        size="h2bold"
        as="h1"
        className=" font-bold text-center text-[#1E3A8A] 5xl:text-[60px]"
      >
        About Us
      </Heading>
      <Yellowline
        topLine="lg:w-10 lg:h-4 w-8 h-3 pt-2"
        bottomLine="lg:h-4 lg:w-10 ml-4 w-8 h-3 pt-2"
      />
    </div>
  </div>
</div>

<div class="pb-7 pt-10">
  <div class="px-4">
    <div
      class="grid lg:grid-cols-2 xl:gap-10 5xl:px-[800px] 2.5xl:px-[150px] 2xl:px-[50px]"
    >
      <!-- Left Content -->
      <div class="p-0 md:px-7 lg:p-6 lg:pl-14">
        <P
          size="texts18"
          className="text-left leading-relaxed hyphens-auto 2.5xl:text-[23px] 5xl:text-[45px]"
        >
          {@html data.about_us.translations[0].about_us_para}
        </P>
      </div>
      <div class="px-0 md:px-6 p-6">
        <div class="flex flex-wrap items-center gap-4 justify-center">
          {#each stats as stat}
            <div
              class="bg-[#C3E8FF] text-[#0B60B0] text-center p-6 rounded-lg flex flex-col
              justify-center items-center md:h-[10rem] lg:h-[10rem] 2.5xl:w-[260px] 2.5xl:h-[13rem] 5xl:h-[21rem] 5xl:w-[620px] xl:w-[246px] lg:w-[200px] md:w-[20rem] w-full"
            >
              <Heading size="headingH3" className="5xl:text-[60px]">
                <span class="text-[#1E3A8A] font-bold">{stat.value}</span>
              </Heading>
              <P
                size="textS13"
                className="text-[#1E3A8A] text-center leading-normal break-words 2.5xl:text-[18px] 5xl:text-[45px]"
              >
                {@html stat.description}
              </P>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
<div class="pb-10">
  <div class="text-center flex justify-center items-center gap-5">
    <Heading size="bannerMaih1" className="text-[#1E3A8A] 5xl:text-[60px]">
      Certifications
    </Heading>
    <div class="pt-2">
      <Yellowline
        topLine="lg:w-10 lg:h-4 w-8 h-3"
        bottomLine="lg:h-4 lg:w-10 ml-4 w-8 h-3"
      />
    </div>
  </div>

  <div class="px-4 sm:px-8 md:px-12 lg:px-16 mt-10 mb-10">
    <div class="flex justify-center items-center py-10">
      <div
        class="relative group w-[270px] md:w-[390px] lg:w-[400px] 5xl:w-[320px] transform transition duration-500 hover:scale-120"
      >
        <img
          src="{PUBLIC_APIURL}/assets/{data.about_us.certificate2}"
          alt="Certificate"
          class="w-full h-auto rounded-md shadow-md transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(0,0,0,0.8)]"
        />

        <!-- Animated border -->
        <svg
          class="absolute inset-0 w-full h-full rounded-md pointer-events-none"
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            rx="8"
            ry="8"
            class="stroke-black fill-transparent stroke-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 borderPath"
          />
        </svg>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes borderFlow {
    0% {
      stroke-dasharray: 0 400;
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dasharray: 400 0;
      stroke-dashoffset: -400;
    }
  }

  .borderPath {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    transition: stroke-dashoffset 0.8s ease-in-out;
  }

  .group:hover .borderPath {
    animation: borderFlow 1s ease-in-out forwards;
  }
</style>
