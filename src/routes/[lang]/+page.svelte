<script lang="ts">
  // @ts-nocheck
  import Slider from "$lib/components/slider/Slider.svelte";
  import Client from "$lib/components/client/Client.svelte";
  import * as Card from "$lib/components/ui/card";
  import Products from "$lib/components/products/Products.svelte";
  import * as Carousel from "$lib/components/ui/carousel";
  import Autoplay from "embla-carousel-autoplay";
  import { PUBLIC_APIURL } from "$env/static/public";
  import Countup from "svelte-countup";
  import { onMount } from "svelte";
  import Linkedin from "$lib/components/linkedin/Linkedin.svelte";
  import { assets, type Asset } from "$lib/components/data/assets";
  import Videos from "$lib/components/ui/videos/Videos.svelte";
  import Verticalline from "$lib/icons/svgs/verticalline.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Page from "./about/+page.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";

  const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
  /** @type {import('./$types').PageData} */

  export let data;

  // Reactive states for each box hover
  let isHoveredBox1 = false;
  let isHoveredBox2 = false;
  let isHoveredBox3 = false;

  // Functions to toggle hover state for each box
  function handleMouseEnterBox1(event: MouseEvent) {
    isHoveredBox1 = true;
  }
  function handleMouseLeaveBox1(event: MouseEvent) {
    isHoveredBox1 = false;
  }

  function handleMouseEnterBox2(event: MouseEvent) {
    isHoveredBox2 = true;
  }
  function handleMouseLeaveBox2(event: MouseEvent) {
    isHoveredBox2 = false;
  }

  function handleMouseEnterBox3(event: MouseEvent) {
    isHoveredBox3 = true;
  }
  function handleMouseLeaveBox3(event: MouseEvent) {
    isHoveredBox3 = false;
  }
  let video;
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

  if (data?.home?.translations?.[0]?.services) {
    const services = data.home.translations[0].services;
    const idx = services.findIndex(
      (s) =>
        s.Items &&
        s.Items.includes("Environmental & Occupational Health and Safety")
    );
    if (idx !== -1 && idx !== services.length - 1) {
      const [item] = services.splice(idx, 1);
      services.push(item);
    }
  }
</script>
<svelte:head>
  <meta name="robots" content="index, follow" />
</svelte:head>

<!-- heading section -->
<div class="pt-16 md:pt-24 h-auto">
  <div
    class="hero-bg bg-cover bg-center h-[700px] relative -mt-16 md:-mt-24"
    id="imacs"
    style="background-image: url('{PUBLIC_APIURL}/assets/{data.home
      .banner_image}');"
  >
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black opacity-40"></div>
    <div class="pb-14 pt-16 container">
      <div
        class=" absolute -translate-y-1/2 left- md:left-[4.5rem] lg:top-1/2 md:top-[331px] top-[250px] z-50"
        id="banner-text"
      >
        <div class="flex items-start w-full md:w-fit flex-col" id="title">
          <h1
            class="    text-white text-left xl:text-[50px] lg:text-[40px] md:text-[30px] sm:text-[26px] text-[26px] font-bold"
            id="header-title"
          >
            {data.home.translations[0].title1}
          </h1>
        </div>
        <p
          class="text-[13px] sm:text-[13px] md:text-[15px] lg:text-[14px] xl:text-[16px] text-white pb-10"
          id="subtitle"
        >
          {data.home.translations[0].title1_line2}
        </p>
      </div>
      <div class="relative h-[650px]">
        <img
          src="/assets/img/monitoring 2.webp"
          alt=""
          class="transition-transform duration-700 absolute right-0 md:top-52 lg:top-32 md:h-[400px] lg:h-[450px] 5xl:h-[770px] object-cover border-2 border-white md:z-0"
          id="img2"
          class:scale-100={isHoveredBox2}
          class:scale-0={!isHoveredBox2}
        />
        <img
          src="/assets/conditionmontoring.jpg"
          alt=""
          class="transition-transform duration-700 absolute right-0 md:top-52 lg:top-32 md:h-[400px] 5xl:h-[770px] lg:h-[450px] object-cover border-2 border-white md:z-0 z-20"
          id="img1"
          class:scale-100={isHoveredBox1}
          class:scale-0={!isHoveredBox1}
        />
        <img
          src="/assets/img/products.webp"
          alt=""
          class="transition-transform duration-700 absolute right-0 md:top-52 lg:top-32 md:h-[400px] lg:h-[450px] 5xl:h-[770px] object-cover border-2 border-white md:z-0 z-20"
          id="img3"
          class:scale-100={isHoveredBox3}
          class:scale-0={!isHoveredBox3}
        />
        <!-- box1 -->
        <div
          class="absolute bottom-[27px] md:bottom-24 md:right-1 md:flex md:items-end md:justify-end gap-44 md:gap-4
           2xl:gap-10 space-y-5 w-full md:space-y-0 z-10 group md:w-fit md:h-[175px]"
          id="imac-boxes"
        >
          <div
            class=" box w-full md:w-51 h-[50px] px-4 pb-2 md:pb-0 pt-2 md:group-hover:box-shrink
            bg-white/10 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 flex md:flex-col items-start
              justify-between relative overflow-hidden"
            role="button"
            tabindex="0"
            on:mouseenter={handleMouseEnterBox1}
            on:mouseleave={handleMouseLeaveBox1}
            id="mybutton"
          >
            <div
              class="absolute top-3 left-4 right-4 border-t-2 border-white"
            ></div>
            <a
              href={`/${data.langParam}/services/condition-monitoring-services`}
            >
              <P
                size="texts20"
                className="flex items-center gap-2  5xl:text-[30px]
              text-white font-bold pt-4 transition-all duration-300 md:text-start"
              >
                <span
                  class="group-hover:text-black transition-all duration-300"
                  id="bannersubtext"
                >
                  {data.home.translations[0].title1_line3}
                </span>
              </P>
            </a>
            <!-- Arrow container -->
            <div
              class="
    absolute bottom-2 right-3
    transition-all duration-300
    group-hover:top-1/2 group-hover:bottom-auto group-hover:-translate-y-1/2
  "
            >
              <svg
                width="32"
                height="8"
                viewBox="0 0 64 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="text-white group-hover:text-black transition-all duration-500"
              >
                <path
                  d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 8V9H63V8V7H0V8Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

          <!-- Box 2 -->
          <div
            class="rounded-md box w-full md:w-51 h-[50px] px-4 pb-2 md:pb-0 pt-2 group-hover:box-shrink
            bg-white/10 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 flex md:flex-col items-start
              justify-between relative overflow-hidden"
            role="button"
            tabindex="0"
            on:mouseenter={handleMouseEnterBox2}
            on:mouseleave={handleMouseLeaveBox2}
            id="mybutton"
          >
            <div
              class="absolute top-3 left-4 right-4 border-t-2 border-white"
            ></div>
            <P
              size="texts20"
              className="text-white  5xl:text-[30px] flex items-center gap-2 font-bold pt-4 transition-all duration-300"
            >
              <span class="group-hover:text-black transition-all duration-300">
                {data.home.translations[0].subtitle1}
              </span>
            </P>
            <div
              class="
    absolute bottom-2 right-3
    transition-all duration-300
    group-hover:top-1/2 group-hover:bottom-auto group-hover:-translate-y-1/2
  "
            >
              <svg
                width="32"
                height="8"
                viewBox="0 0 64 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="text-white group-hover:text-black transition-all duration-500"
              >
                <path
                  d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 8V9H63V8V7H0V8Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

          <!-- Box 3 -->
          <div
            class="rounded-md box w-full md:w-51 h-[50px] px-4 pb-2 md:pb-0 pt-2 group-hover:box-shrink
            bg-white/10 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 flex md:flex-col items-start
              justify-between relative overflow-hidden"
            role="button"
            tabindex="0"
            on:mouseenter={handleMouseEnterBox3}
            on:mouseleave={handleMouseLeaveBox3}
            id="mybutton"
          >
            <div
              class="absolute top-3 left-4 right-4 border-t-2 border-white"
            ></div>
            <a href={`/${data.langParam}/products`}>
              <P
                size="texts20"
                className="flex items-center gap-2 
              text-white font-bold pt-4  5xl:text-[30px] transition-all duration-300 md:text-start"
              >
                <span
                  class="group-hover:text-black transition-all duration-300"
                >
                  {data.home.translations[0].title2}
                </span>
              </P>
            </a>
            <div
              class="
    absolute bottom-2 right-3
    transition-all duration-300
    group-hover:top-1/2 group-hover:bottom-auto group-hover:-translate-y-1/2
  "
            >
              <svg
                width="32"
                height="8"
                viewBox="0 0 64 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="text-white group-hover:text-black transition-all duration-500"
              >
                <path
                  d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 8V9H63V8V7H0V8Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- assets -->
<section class="h-auto w-full block md:hidden lg:block">
  <div
    class="flex flex-col lg:flex-row items-center lg:items-start relative z-10 gap-8 mt-[40px]"
    id="assets-section"
  >
    <div class="w-full lg:w-[40%]">
      <div
        class="relative pt-[100px] lg:pt-[125px] w-full md:w-[60%] lg:w-auto"
      >
        <div
          class="absolute top-[50px] md:top-[50px] xl:top-[55px] lg:top-[70px] left-[-60px] w-full z-0 2xl:top-[55px]"
          id="blueimg"
        >
          <img
            src="/assets/blueimage.png"
            alt="Background Shape"
            class="w-full h-[350px] md:h-[400px] object-cover rounded-2xl rounded-r-[50px] 2.5xl:h-[760px]"
            id="bgshape"
          />
        </div>
        <img
          src="{PUBLIC_APIURL}/assets/{data.home.image1}"
          alt="About Thumbnail"
          id="aboutimg"
          class="relative z-10 w-full h-[350px] md:h-[400px] 2.5xl:h-[760px] xl:h-[500px] landscape:object-top object-cover rounded-2xl rounded-l-none rounded-r-[50px] md:rounded-r-[50px]"
        />
      </div>
    </div>

    <div
      id="imac-content"
      class="w-full lg:w-[60%] px-4 sm:px-6 lg:px-10 pt-6 lg:pt-16"
    >
      <h1
        id="imac-heading"
        class="2.5xl:text-[50px] xl:text-[30px] lg:text-[25px] md:text-[25px] text-[20px] font-bold text-[#1E3A8A] text-center md:text-left"
      >
        Asset Condition Monitoring Services
      </h1>

      <div
        id="imac-paragraph"
        class="w-full md:max-w-[600px] 2.5xl:max-w-[900px] mt-5 mx-auto md:mx-0"
      >
        <p
          class=" 2.5xl:text-[25px] xl:text-[15px] lg:text-[14px] md:text-[17px] text-[12px] text-black text-center font-normal md:text-left"
          id="imac-paragraph"
        >
          Explore our condition monitoring services below to maximize uptime and
          minimize unplanned failures.
        </p>
      </div>

      <div id="imac-grid" class="pt-6 sm:pt-8">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-5 font-semibold text-sm 2.5xl:gap-[5.25rem]"
        >
          {#each assets as asset}
            {#if asset.link === ""}
              <div
                class={`w-auto p-6 shadow-md rounded-lg ${
                  asset.id === "7" ? "md:col-span-2" : ""
                }`}
                id="assetlink"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="bg-[#C7D200] rounded-full flex items-center justify-center min-w-[27px] h-[27px] 2.5xl:h-[50px] 2.5xl:w-[50px]"
                    id="assetlogodiv"
                  >
                    <img
                      src={asset.logo}
                      alt={asset.name}
                      class="w-4 h-4 2.5xl:h-[27px] 2.5xl:w-[27px] object-contain"
                      id="assetlogo"
                    />
                  </div>
                  <p
                    class="2.5xl:text-[25px] xl:text-[13px] lg:text-[12px] md:text-[14px] text-[12px] text-black imac:text-2xl"
                    id="assettext"
                  >
                    {asset.name}
                  </p>
                </div>
              </div>
            {:else}
              <div
                class={`w-auto p-6 shadow-md rounded-lg ${
                  asset.id === "7" ? "md:col-span-2" : ""
                }`}
              >
                <a
                  href="/{data.langParam}{asset.link}"
                  class="flex items-center gap-3 hover:ml-2 transition-all duration-300"
                >
                  <div
                    class="bg-[#C7D200] rounded-full flex items-center justify-center min-w-[27px] h-[27px] 2.5xl:h-[50px] 2.5xl:w-[50px]"
                    id="assetlogodiv"
                  >
                    <img
                      src={asset.logo}
                      alt={asset.name}
                      class="w-4 h-4 2.5xl:h-[27px] 2.5xl:w-[27px] object-contain"
                      id="assetlogo"
                    />
                  </div>
                  <p
                    class="2.5xl:text-[25px] xl:text-[13px] lg:text-[12px] md:text-[14px] text-[12px] text-black imac:text-2xl"
                    id="assettext"
                  >
                    {asset.name}
                  </p>
                </a>
              </div>
            {/if}
          {/each}
        </div>
      </div>

      <div class="flex justify-center md:justify-start mt-6 lg:mt-10">
        <p
          id="imac-button"
          class="xl:text-[15px] lg:text-[14px] md:text-[13px] text-[12px] font-semibold gap-3 group inline-flex items-center hover:bg-white px-6 py-2 border hover:border-[#0B60B0] hover:text-[#0B60B0]
        rounded-full bg-[#0B60B0] uppercase text-white transition-colors duration-300"
        >
          {data.home.translations[0].know_more_button}
          <svg
            width="24"
            height="23"
            viewBox="0 0 24 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0263 21.9998C17.7092 21.9998 22.3158 17.3932 22.3158 11.7104C22.3158 6.0275 17.7092 1.4209 12.0263 1.4209C6.34341 1.4209 1.73682 6.0275 1.73682 11.7104C1.73682 17.3932 6.34341 21.9998 12.0263 21.9998Z"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linejoin="round"
              class="transition-colors duration-300"
            />
            <path
              d="M10.6842 16.6317L15.1579 11.7106L10.6842 6.78955"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="transition-colors duration-300"
            />
          </svg>
        </p>
      </div>
    </div>
  </div>
</section>

<section class="h-auto w-full overflow-hidden hidden md:block lg:hidden">
  <div
    class=" px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 md:py-12 lg:py-16"
  >
    <div
      class="flex flex-col lg:flex-row items-center lg:items-start relative z-10 gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 mt-8 md:mt-10 lg:mt-12"
      id="assets-section"
    >
      <!-- Image Section -->
      <div
        class="w-full lg:w-5/12 xl:w-2/5 flex justify-center lg:justify-start"
      >
        <div
          class="relative w-full max-w-md lg:max-w-none pt-14 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28"
        >
          <!-- Background Blue Image -->
          <div
            class="absolute top-6 sm:top-8 md:top-10 lg:top-12 xl:top-14 left-0 lg:-left-12 xl:-left-16 w-full lg:w-[calc(100%+3rem)] xl:w-[calc(100%+4rem)] z-0"
            id="blueimg"
          >
            <img
              src="/assets/blueimage.png"
              alt="Background Shape"
              class="w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[480px] 2xl:h-[560px] object-cover rounded-2xl rounded-r-[40px] md:rounded-r-[50px]"
              id="bgshape"
            />
          </div>
          <!-- Main Image -->
          <img
            src="{PUBLIC_APIURL}/assets/{data.home.image1}"
            alt="About Thumbnail"
            id="aboutimg"
            class="relative z-10 w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[480px] 2xl:h-[560px] object-cover rounded-2xl rounded-l-none rounded-r-[40px] md:rounded-r-[50px]"
          />
        </div>
      </div>

      <!-- Content Section -->
      <div id="imac-content" class="w-full lg:w-7/12 xl:w-3/5 flex flex-col">
        <!-- Heading -->
        <h1
          id="imac-heading"
          class=" xl:text-[30px] lg:text-[25px] md:text-[25px] text-[20px] text-[#1E3A8A] font-bold 5xl:text-[50px] text-center lg:text-left leading-tight mb-4 md:mb-5 lg:mb-6"
        >
          Asset Condition Monitoring Services
        </h1>

        <!-- Paragraph -->
        <div class="mb-6 md:mb-8 lg:mb-10">
          <p
            class="2.5xl:text-[25px] xl:text-[15px] lg:text-[14px] md:text-[17px] text-[12px] text-gray-700 text-center lg:text-left font-normal leading-relaxed max-w-3xl mx-auto lg:mx-0"
            id="imac-paragraph"
          >
            Explore our condition monitoring services below to maximize uptime
            and minimize unplanned failures.
          </p>
        </div>

        <!-- Grid Section -->
        <div id="imac-grid" class="mb-6 md:mb-8 lg:mb-10 flex-grow">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8"
          >
            {#each assets as asset}
              {#if asset.link === ""}
                <div
                  class={`w-full p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8 shadow-md hover:shadow-xl rounded-xl transition-all duration-300 bg-white  ${
                    asset.id === "7" ? "sm:col-span-2" : ""
                  }`}
                  id="assetlink"
                >
                  <div class="flex items-center gap-3 md:gap-4">
                    <div
                      class="bg-[#C7D200] rounded-full flex items-center justify-center flex-shrink-0 w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16"
                      id="assetlogodiv"
                    >
                      <img
                        src={asset.logo}
                        alt={asset.name}
                        class="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 object-contain"
                        id="assetlogo"
                      />
                    </div>
                    <p
                      class="2.5xl:text-[25px] xl:text-[13px] lg:text-[12px] md:text-[14px] text-[12px] text-gray-800 font-semibold leading-snug"
                      id="assettext"
                    >
                      {asset.name}
                    </p>
                  </div>
                </div>
              {:else}
                <div
                  class={`w-full p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8 shadow-md rounded-xl transition-all duration-300 hover:shadow-xl bg-white ${
                    asset.id === "7" ? "sm:col-span-2" : ""
                  }`}
                >
                  <a
                    href="/{data.langParam}{asset.link}"
                    class="flex items-center gap-3 md:gap-4 hover:ml-2 transition-all duration-300 group"
                  >
                    <div
                      class="bg-[#C7D200] rounded-full flex items-center justify-center flex-shrink-0 w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16"
                      id="assetlogodiv"
                    >
                      <img
                        src={asset.logo}
                        alt={asset.name}
                        class="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 object-contain"
                        id="assetlogo"
                      />
                    </div>
                    <p
                      class="2.5xl:text-[25px] xl:text-[13px] lg:text-[12px] md:text-[14px] text-[12px] text-gray-800 font-semibold leading-snug group-hover:text-[#0B60B0] transition-colors duration-300"
                      id="assettext"
                    >
                      {asset.name}
                    </p>
                  </a>
                </div>
              {/if}
            {/each}
          </div>
        </div>

        <!-- Button Section -->
        <div class="flex justify-center lg:justify-start">
          <button
            id="imac-button"
            class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold gap-2 md:gap-3 group inline-flex items-center hover:bg-white px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 border-2 border-[#0B60B0] hover:border-[#0B60B0] hover:text-[#0B60B0] rounded-full bg-[#0B60B0] uppercase text-white transition-all duration-300 hover:shadow-lg"
          >
            {data.home.translations[0].know_more_button}
            <svg
              class="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0263 21.9998C17.7092 21.9998 22.3158 17.3932 22.3158 11.7104C22.3158 6.0275 17.7092 1.4209 12.0263 1.4209C6.34341 1.4209 1.73682 6.0275 1.73682 11.7104C1.73682 17.3932 6.34341 21.9998 12.0263 21.9998Z"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linejoin="round"
              />
              <path
                d="M10.6842 16.6317L15.1579 11.7106L10.6842 6.78955"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- our products -->
<div class="mt-[100px] pb-5 bg-[#EDF6FF]" id="ourproductsmain">
  <div class=" text-center pt-10" id="ourproducts1">
    <div class="relative justify-center flex px-12 pb-5 gap-3">
      <p
        class=" 2.5xl:text-[50px] xl:text-[25px] lg:text-[22px] md:text-[20px] text-[18px] text-[#1E3A8A] font-bold 5xl:text-[60px]"
      >
        {data.home.translations[0].subtitle2}
      </p>
      <span class="pt-2 md:pt-1 5xl:pt-10">
        <Yellowline
          topLine="5xl:w-18 "
          bottomLine="5xl:w-20 5xl:pt-2 5xl:ml-3"
        />
      </span>
    </div>
    <P
      size="texts15"
      className="font-medium text-[#1E3A8A] pb-2 2.5xl:text-[20px]  5xl:text-[40px]"
    >
      Meet our principals—global leaders in asset condition monitoring
      excellence.
    </P>
  </div>
  <div class="pt-2 5xl:pt-[6.5rem]">
    <Products
      products_button1={data.home.translations[0].products_slider_button1}
      products_button2={data.home.translations[0].products_slider_button2}
      products_button3={data.home.translations[0].products_slider_button3}
      products_button4={data.home.translations[0].products_slider_button4}
      language={data.langParam}
    />
  </div>
</div>

<!-- strive for perfection -->
<div class="py-14 relative">
  <div
    class="lg:mr-[200px] absolute tb:hidden hidden md:block left-6 right-6 top-1/2 transform -translate-y-1/2 border
     border-[#0B60B0] rounded-3xl h-[320px] z-0 lg:ml-[20px] 2xl:right-[370px] 5xl:right-[560px] 2.5xl:ml-[17rem] 5xl:ml-[972px]"
  ></div>

  <div
    class=" 2.5xl:ml-[300px] md:ml-8 mx-auto px-4 pl-[3rem] relative z-10 mr-8 lg:mr-0 5xl:ml-[70rem]"
  >
    <div class="flex flex-col md:flex-row items-center md:space-x-5">
      <div class="w-full md:w-1/2 p-4 md:p-2 lg:p-4">
        <div
          class="max-w-md text-left md:ml-0 xl:ml-10 lg:ml-[3rem] md:text-left xl:pl-[24px] 5xl:max-w-[90rem]"
        >
          <div
            class="inline-flex items-center gap-4 justify-center md:justify-start mb-4"
          >
            <Heading
              size="headingS20"
              className="text-[#0B60B0] 5xl:text-[40px] 2.5xl:text-[25px]"
            >
              {data.home.translations[0].subtitle3}
            </Heading>
            <span class="mr-2 flex flex-col">
              <Yellowline
                topLine="top-[8px] w-8 h-[25px]"
                bottomLine="top-[4px] ml-[15px] w-[32px]"
              />
            </span>
          </div>
          <div>
            <P
              size="base"
              className="text-[#1E3A8A] font-bold 5xl:text-[45px] 2.5xl:text-[30px]"
            >
              {data.home.link}
            </P>
            <P
              className=" text-[#1E3A8A] 5xl:text-[40px] 2xl:text-[20px]"
              size="texts20 "
            >
              <span>powered by Technomax delivers</span>
              <span>over 19 years of expertise in the</span>
              <span>oil and gas industry with reliable</span>
              <span>and efficient maintenance solutions.</span>
            </P>
          </div>
        </div>
      </div>
      <Videos videoSrc="{PUBLIC_APIURL}/assets/{data.home.video_file}" />
    </div>
  </div>
</div>

<!-- columns -->
<section
  class="relative py-8 sm:py-12 lg:py-16 xl:py-24 bg-cover bg-center"
  style="background-image: url('{PUBLIC_APIURL}/assets/{data.home
    .partner_banner}');"
>
  <!-- Overlay -->
  <div class="absolute inset-0 bg-black/40"></div>

  <div class="relative xl:container mx-auto px-4 z-10">
    <!-- Changed to flexbox layout for better mobile control -->
    <div
      class="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 5xl:gap-[9rem]"
    >
      <!-- Card -->
      <div
        class="square-card flex flex-col items-center justify-center text-center
               rounded-xl sm:rounded-2xl bg-gradient-to-b from-white/0 to-gray-400/20
               border border-white/60 backdrop-blur-sm shadow-md
               hover:shadow-xl hover:scale-105
               transition-transform duration-300
               p-3 sm:p-4 lg:p-5
               w-[140px] sm:w-[160px] md:w-[130px] lg:w-[170px] xl:w-[170px] 2xl:w-[200px] 5xl:w-[500px]"
      >
        <Heading
          size="headingH3"
          className="text-[#d4e157] text-lg sm:text-2xl lg:text-3xl 5xl:text-[60px]"
          >19+</Heading
        >
        <p
          class="text-white text-[10px] sm:text-xs lg:text-[13px] mt-1 sm:mt-2 5xl:mt-[2rem] 5xl:text-[40px]/10"
        >
          <b>years of expertise</b> in the Oil & Gas Industry
        </p>
      </div>

      <!-- Card -->
      <div
        class="square-card flex flex-col items-center justify-center text-center
               rounded-xl sm:rounded-2xl bg-gradient-to-b from-white/0 to-gray-400/20
               border border-white/60 backdrop-blur-sm shadow-md
               hover:shadow-xl hover:scale-105
               transition-transform duration-300
               p-3 sm:p-4 lg:p-6
               w-[140px] sm:w-[160px] md:w-[130px] lg:w-[170px] xl:w-[170px] 2xl:w-[200px] 5xl:w-[500px]"
      >
        <Heading
          size="headingH3"
          className="text-[#d4e157] text-lg sm:text-2xl lg:text-3xl 5xl:text-[60px]"
          >45+</Heading
        >
        <p
          class="text-white text-[10px] sm:text-xs lg:text-[13px] mt-1 5xl:mt-[2rem] sm:mt-2 5xl:text-[40px]/10"
        >
          <b>certified professionals</b> with extensive experience
        </p>
      </div>

      <!-- Card -->
      <div
        class="square-card flex flex-col items-center justify-center text-center
               rounded-xl sm:rounded-2xl bg-gradient-to-b from-white/0 to-gray-400/20
               border border-white/60 backdrop-blur-sm shadow-md
               hover:shadow-xl hover:scale-105
               transition-transform duration-300
               p-3 sm:p-4 lg:p-6
               w-[140px] sm:w-[160px] md:w-[130px] lg:w-[170px] xl:w-[170px] 2xl:w-[200px] 5xl:w-[500px]"
      >
        <Heading
          size="headingH3"
          className="text-[#d4e157] text-lg sm:text-2xl lg:text-3xl 5xl:text-[60px]"
          >70%</Heading
        >
        <p
          class="text-white text-[10px] sm:text-xs lg:text-[13px] mt-1 5xl:mt-[2rem] sm:mt-2 5xl:text-[40px]/10"
        >
          Recurring Clients
        </p>
      </div>

      <!-- Card -->
      <div
        class="square-card flex flex-col items-center justify-center text-center
               rounded-xl sm:rounded-2xl bg-gradient-to-b from-white/0 to-gray-400/20
               border border-white/60 backdrop-blur-sm shadow-md
               hover:shadow-xl hover:scale-105
               transition-transform duration-300
               p-3 sm:p-4 lg:p-6
               w-[140px] sm:w-[160px] md:w-[130px] lg:w-[170px] xl:w-[170px] 2xl:w-[200px] 5xl:w-[500px]"
      >
        <Heading
          size="headingH3"
          className="text-[#d4e157] text-lg sm:text-2xl lg:text-3xl 5xl:text-[60px] "
          >100%</Heading
        >
        <p
          class="text-white text-[10px] sm:text-xs lg:text-[13px] mt-1 5xl:mt-[2rem] sm:mt-2 5xl:text-[40px]/10"
        >
          Commitment to Excellence.
        </p>
      </div>

      <!-- Card -->
      <div
        class="square-card flex flex-col items-center justify-center text-center
               rounded-xl sm:rounded-2xl bg-gradient-to-b from-white/0 to-gray-400/20
               border border-white/60 backdrop-blur-sm shadow-md
               hover:shadow-xl hover:scale-105
               transition-transform duration-300
               p-3 sm:p-4 lg:p-6
               w-[140px] sm:w-[160px] md:w-[130px] lg:w-[170px] xl:w-[170px] 2xl:w-[200px] 5xl:w-[500px]"
      >
        <Heading
          size="headingH3"
          className="text-[#d4e157] text-lg sm:text-2xl lg:text-3xl 5xl:text-[60px]"
          >250+</Heading
        >
        <p
          class="text-white text-[10px] sm:text-xs lg:text-[13px] mt-1 5xl:mt-[2rem] sm:mt-2 5xl:text-[40px]/10"
        >
          <b>successful projects</b> delivered across the globe
        </p>
      </div>
    </div>
  </div>
</section>
<!-- map -->
<section class="relative">
  <div class="absolute left-0 top-0">
    <img src="/assets/blueeclipse.png" alt="" class="md:h-[200px] h-[100px]" />
  </div>
  <div class=" pt-20">
    <Heading
      size="sectionMainHeading"
      as="h1"
      className="text-[#1E3A8A] text-center font-bold 5xl:text-[60px]"
    >
      WHERE WE <span class="text-[#C7D200]">SERVE</span>
    </Heading>
  </div>
  <div class="w-full bg-[linear-gradient(180deg,#0074BD,#003557)]">
    <div
      class="w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] flex items-center justify-center
           mt-4 md:mt-0 pb-4
           min-h-[290px] md:min-h-[450px] lg:min-h-[550px]"
    >
      <!-- Desktop/Large -->
      <img
        src="/assets/img/worldmap4webp.webp"
        alt="World Map"
        class="hidden md:flex w-full md:w-[93%] lg:w-[91%] xl:w-[82%] object-contain"
      />
      <!-- Mobile/Tablet -->
      <img
        src="/assets/img/mobileworldmap.png"
        alt="World Map"
        class="flex md:hidden w-full object-contain"
      />
    </div>
  </div>
</section>
<!-- getintouch -->
<section class="h-auto relative mt-[30px] md:mt-[150px]">
  <div class="relative">
    <div class="relative w-full">
      <img
        src="/assets/curve2.png"
        alt=""
        class="w-full h-[350px] sm:h-[350px] md:h-auto lg:h-[450px] relative top-0 left-0 z-10"
      />

      <!-- Mobile content - centered layout -->
      <div
        class="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 md:hidden"
      >
        <!-- Circular image at top -->
        <div class="mb-6">
          <img
            src="/assets/imagecircle.svg"
            alt=""
            class="w-[120px] h-[120px] rounded-full object-cover shadow-lg"
          />
        </div>

        <!-- Content below image -->
        <div class="text-center max-w-[280px]">
          <h1 class="text-[22px] font-bold text-[#1E3A8A] leading-tight mb-3">
            Concerned About <span class="text-[#C7D200]">Asset Performance</span
            >?
          </h1>

          <p
            class="text-[14px] font-medium text-[#1E3A8A] leading-relaxed mb-6"
          >
            Interested in working with a bunch of talented and dedicated
            professionals?
          </p>

          <!-- Contact button centered - keeping original styling -->

          <div class="flex items-center justify-center">
            <a href={`/${data.langParam}/contact-us`}>
              <div class="flex items-center space-x-[-0.5rem]">
                <div class="relative z-10">
                  <div
                    class="flex items-center justify-center h-[55px] w-[55px] bg-white rounded-full"
                  >
                    <div
                      class="flex items-center justify-center w-[35px] h-[35px] bg-gradient-to-l from-[#B8C302] to-[#C7D200] rounded-full shadow-md"
                    >
                      <svg
                        width="59"
                        height="58"
                        viewBox="0 0 59 58"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-[20px] h-[20px]"
                      >
                        <ellipse
                          cx="29.5"
                          cy="29"
                          rx="29.5"
                          ry="29"
                          fill="#B8C302"
                        />
                        <path
                          d="M29.5 58C21.6761 58 14.1727 54.9447 8.64035 49.5061C3.10803 44.0675 -2.17646e-07 36.6913 0 29C2.17646e-07 21.3087 3.10803 13.9325 8.64035 8.4939C14.1727 3.05535 21.6761 -9.17176e-08 29.5 0V29L29.5 58Z"
                          fill="#C7D200"
                        />
                        <path
                          d="M42.3667 43C39.1259 43 35.9241 42.2938 32.7611 40.8813C29.5981 39.4689 26.7204 37.4659 24.1278 34.8722C21.5352 32.2786 19.5327 29.4008 18.1202 26.2389C16.7078 23.077 16.001 19.8751 16 16.6333C16 16.1667 16.1556 15.7778 16.4667 15.4667C16.7778 15.1556 17.1667 15 17.6333 15H23.9333C24.2963 15 24.6204 15.1234 24.9056 15.3702C25.1907 15.617 25.3593 15.9084 25.4111 16.2444L26.4222 21.6889C26.4741 22.1037 26.4611 22.4537 26.3833 22.7389C26.3056 23.0241 26.163 23.2704 25.9556 23.4778L22.1833 27.2889C22.7019 28.2481 23.3173 29.1747 24.0298 30.0687C24.7422 30.9626 25.5267 31.8249 26.3833 32.6556C27.187 33.4593 28.0296 34.2049 28.9111 34.8924C29.7926 35.58 30.7259 36.2084 31.7111 36.7778L35.3667 33.1222C35.6 32.8889 35.9049 32.7141 36.2813 32.598C36.6578 32.4819 37.027 32.4492 37.3889 32.5L42.7556 33.5889C43.1185 33.6926 43.4167 33.8808 43.65 34.1536C43.8833 34.4263 44 34.7307 44 35.0667V41.3667C44 41.8333 43.8444 42.2222 43.5333 42.5333C43.2222 42.8444 42.8333 43 42.3667 43Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-white rounded-lg z-0 h-[35px] w-[100px] flex items-center pl-[25px] pr-2"
                >
                  <h1 class="text-[8px] font-bold text-blue-800 tracking-wider">
                    CONTACT US
                  </h1>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Desktop/Tablet layout (existing) -->
      <div
        class="absolute top-[30px] md:top-[30px] lg:top-[140px] xl:top-[80px] left-[5%] z-20 get-in-touch hidden md:block"
      >
        <div class="flex flex-col md:gap-5 gap-3">
          <Heading
            size="bannerMaih1SM10"
            as="h1"
            className="text-[#1E3A8A] w-[300px] xl:w-[700px] lg:w-[400px] 5xl:text-[50px]   5xl:w-[1000px]"
          >
            Concerned About <span class="text-[#C7D200]"
              >Asset Performance?</span
            >
          </Heading>

          <P
            size="textSm"
            className="font-bold text-[#1E3A8A] xl:w-[500px] lg:w-[400px] md:w-[300px] 5xl:w-[780px] 5xl:text-[37px]"
          >
            Reach out to our specialists for reliable, real-time assistance and
            expert guidance.
          </P>

          <div>
            <a
              href={`/${data.langParam}/contact-us`}
              class="flex items-center space-x-[-2rem] w-fit"
            >
              <div class="relative z-10">
                <div
                  class="flex items-center justify-center xl:h-[95px] xl:w-[95px] lg:h-[85px] lg:w-[85px] md:h-[75px] md:w-[75px] bg-white rounded-full"
                >
                  <div
                    class="flex items-center justify-center xl:w-[65px] xl:h-[65px] md:w-[3rem] md:h-[2.75rem] bg-gradient-to-l from-[#B8C302] to-[#C7D200] rounded-full shadow-md"
                  >
                    <svg
                      width="59"
                      height="58"
                      viewBox="0 0 59 58"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="29.5"
                        cy="29"
                        rx="29.5"
                        ry="29"
                        fill="#B8C302"
                      />
                      <path
                        d="M29.5 58C21.6761 58 14.1727 54.9447 8.64035 49.5061C3.10803 44.0675 -2.17646e-07 36.6913 0 29C2.17646e-07 21.3087 3.10803 13.9325 8.64035 8.4939C14.1727 3.05535 21.6761 -9.17176e-08 29.5 0V29L29.5 58Z"
                        fill="#C7D200"
                      />
                      <path
                        d="M42.3667 43C39.1259 43 35.9241 42.2938 32.7611 40.8813C29.5981 39.4689 26.7204 37.4659 24.1278 34.8722C21.5352 32.2786 19.5327 29.4008 18.1202 26.2389C16.7078 23.077 16.001 19.8751 16 16.6333C16 16.1667 16.1556 15.7778 16.4667 15.4667C16.7778 15.1556 17.1667 15 17.6333 15H23.9333C24.2963 15 24.6204 15.1234 24.9056 15.3702C25.1907 15.617 25.3593 15.9084 25.4111 16.2444L26.4222 21.6889C26.4741 22.1037 26.4611 22.4537 26.3833 22.7389C26.3056 23.0241 26.163 23.2704 25.9556 23.4778L22.1833 27.2889C22.7019 28.2481 23.3173 29.1747 24.0298 30.0687C24.7422 30.9626 25.5267 31.8249 26.3833 32.6556C27.187 33.4593 28.0296 34.2049 28.9111 34.8924C29.7926 35.58 30.7259 36.2084 31.7111 36.7778L35.3667 33.1222C35.6 32.8889 35.9049 32.7141 36.2813 32.598C36.6578 32.4819 37.027 32.4492 37.3889 32.5L42.7556 33.5889C43.1185 33.6926 43.4167 33.8808 43.65 34.1536C43.8833 34.4263 44 34.7307 44 35.0667V41.3667C44 41.8333 43.8444 42.2222 43.5333 42.5333C43.2222 42.8444 42.8333 43 42.3667 43Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div
                class="flex items-center bg-white rounded-lg z-0 md:h-[40px] md:w-[160px] lg:h-[50px] lg:w-[180px] xl:h-[60px] xl:w-[200px] md:px-8"
              >
                <h1
                  class="md:text-[12px] lg:text-[15px] xl:text-[18px] font-bold text-blue-800 tracking-wider"
                >
                  CONTACT US
                </h1>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Desktop circular image -->
      <div
        class="absolute z-20 md:top-0 lg:top-5 right-16 xl:right-20 hidden md:block"
      >
        <img
          src="/assets/imagecircle.svg"
          alt=""
          class="md:w-[350px] lg:w-[450px] xl:w-[93%] md:h-auto"
        />
      </div>
    </div>
  </div>
</section>

<!-- LinkedIn Posts Section -->
<Linkedin />

<style lang="postcss">
  .square-card {
    aspect-ratio: 1 / 1;
  }
  .shrink {
    flex-direction: row !important;
    height: auto !important;
    min-height: 4rem;
    transition: all 0.3s;
  }

  .box {
    min-height: 8rem;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
  }

  .box::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(180deg, #bbbbbb, #00000000);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  .group:hover .box {
    flex-direction: row !important;
    height: 100px !important;
    min-height: 100px;
  }

  .group:hover .box:hover {
    flex-direction: row !important;
  }

  @media (min-width: 768px) {
    .box-hover-horizontal:hover {
      flex-direction: row;
      height: auto;
    }
  }
  @media only screen and (max-width: 768px) {
    .hero-bg {
      background-position: right center !important;
    }
    .title-container {
      position: relative;
      top: 80px;
      left: 0;
      transform: none;
      margin-bottom: 20px;
    }
    #img1,
    #img2,
    #img3 {
      display: none;
    }
    .box1,
    .box2,
    .box3 {
      margin-top: 20px;
    }
    .sec_mob {
      padding-right: 23px;
    }
  }
  @media only screen and (max-width: 361px) {
    .sec_mob {
      font-size: 1.1rem;
      padding-right: 25px;
    }
    .box {
      min-height: 6rem !important;
    }
    .banner-heading {
      font-size: 22px;
      line-height: 32px;
    }
  }
  @media only screen and (max-width: 430px) {
    .box {
      min-height: 6rem !important;
    }
  }

  @media only screen and (max-width: 480px) {
    .box {
      min-height: 6rem !important;
    }
  }
  @media only screen and (max-width: 736px) {
    .box {
      min-height: 6rem !important;
    }
  }

  #img1.scale-100,
  #img2.scale-100,
  #img3.scale-100 {
    transform: scale(1);
  }
  #img1.scale-0,
  #img2.scale-0,
  #img3.scale-0 {
    transform: scale(0);
  }

  #img1,
  #img2,
  #img3 {
    transition: transform 0.3s ease;
  }

  .service-box {
    @apply border border-blue-200 rounded-md bg-white/60 backdrop-blur-md transition-all duration-300 relative overflow-hidden;
    min-height: 56px;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    box-shadow: 0 2px 8px rgba(11, 96, 176, 0.04);
    cursor: pointer;
  }
  .service-box::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background: #0b60b0;
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }
  .service-box:hover {
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 4px 24px rgba(11, 96, 176, 0.1);
  }
  .service-box:hover::before {
    transform: scaleY(1);
  }

  .aspect-video {
    aspect-ratio: 16 / 9;
  }

  .counter-bg {
    background-image: url("/assets/img/counter-bg.png"); /* Use your actual image path */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .counter-card {
    position: relative;
    background: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(153, 153, 153, 0.2)
    );
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
    padding: 2rem 1rem 1.5rem 1rem;
    text-align: center;

    min-width: 180px;
    min-height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition:
      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      backdrop-filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .counter-card:hover {
    transform: scale(1.06);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(12px);
    z-index: 2;
  }
  .counter-number {
    color: #d4e157;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
  }
  .counter-label {
    color: #fff;
    font-size: 1.05rem;
    font-weight: 500;
    line-height: 1.3;
  }
  @media (max-width: 1024px) {
    .counter-card {
      min-width: 140px;
      padding: 1.5rem 0.5rem;
    }
    .counter-number {
      font-size: 2rem;
    }
  }
  @media (max-width: 640px) {
    .counter-card {
      min-width: 100px;
      padding: 1rem 0.25rem;
    }
    .counter-number {
      font-size: 1.5rem;
    }
  }
  .contact-section {
    background-image: url("/path/to/curve.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
  }

  @media (min-width: 5120px) {
    #imacs {
      height: 1690px;
    }

    #imac-boxes {
      bottom: -111%;
      min-width: 1334px;
      right: 50rem;
    }
    #mybutton {
      height: 175px;
    }
    #img1,
    #img2,
    #img3 {
      top: 42rem;
      right: 50rem;
    }
    #banner-text {
      left: 56rem;
    }
    #header-title {
      font-size: 100px;
      line-height: 72px;
    }
    #subtitle {
      font-size: 50px;
      line-height: 32px;
      padding-top: 41px;
    }
    #assets-section {
      padding-top: 42px;
    }
    #bgshape {
      height: 1000px;
    }
    #aboutimg {
      height: 1459px;
    }
    #imac-content {
      padding-top: 8rem; /* more vertical spacing */
      padding-left: 6rem;
      padding-right: 6rem;
    }

    #imac-heading {
      font-size: 5rem; /* much larger heading */
    }

    #imac-paragraph {
      font-size: 40px; /* bigger paragraph */
      max-width: 1836px; /* wider paragraph container */
    }
    #assettext {
      font-size: 34px;
      padding: 100px 20px;
    }
    #assetlogodiv {
      min-width: 100px;
      height: 100px;
    }
    #assetlogo {
      width: 50px;
      height: 50px;
    }
    #imac-button {
      width: 350px;
      height: 100px;
      font-size: 34px;
    }

    #imac-button svg {
      width: 50px;
      height: 50px;
    }
    #ourproductsmain {
      margin-top: 200px;
    }
    #ourproducts1 {
      padding-top: 100px;
    }
  }
</style>
