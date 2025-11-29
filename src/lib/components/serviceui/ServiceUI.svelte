<script lang="ts">
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";

  export let href: string = "";

  interface bannerItems {
    img?: string;
    title: string;
    titlesubheading?: string;
    titleText?: string;
    titleText2?: string;
  }
  export let bannerItems: bannerItems[] = [
    {
      img: "",
      title: "",
      titleText: "",
    },
  ];
  export let data = "object-right md:object-center object-fit";
</script>

{#each bannerItems as items}
  <div
    class="relative w-full overflow-hidden bg-[#E6F0FA] pt-24 h-[540px] md:h-[560px] lg:h-[586px] xl:h-[800pxvh] sm:pt-28 lg:pt-28"
    id="servicebanner"
  >
    <!-- Mobile background image with subtle blur -->
    <div class="absolute inset-0 block md:hidden top-10">
      <img
        src={items.img}
        alt="Background"
        class="w-full h-full object-cover object-top"
      />
      <div class="absolute inset-0 bg-slate-800/30 backdrop-blur-sm"></div>
    </div>

    <!-- Text container -->
    <div
      class="relative z-20 h-full flex flex-col justify-center md:mt-[9px] md:w-100 md:mr-auto md:pr-[32px] md:pl-[30px] xl:pl-[73px] px-4"
    >
      <div
        class="w-[100%] md:w-[40%] lg:w-[48%] xl:w-[46%] 2xl:mt-20 space-y-6 text-left pt-20 pb-10 md:py-8 xl:pb-32 md:mt-[0px] xl:mt-[60px]"
      >
        <Heading
          size="mainheading"
          className="font-bold [text-shadow:_3px_3px_4px_black] md:[text-shadow:_0px_0px_0px_] text-[#FFFFFF] md:text-[#1e3a8a] leading-tight "
        >
          {items.title}
        </Heading>

        {#if items.titlesubheading}
          <P
            size="servicetxt"
            className=" font-extrabold [text-shadow:_2px_2px_4px_black] md:[text-shadow:_0px_0px_0px_] text-[#439FD9] md:text-black"
          >
            {items.titlesubheading}
          </P>
        {/if}

        <P size="servicetxt" className="text-white md:text-gray-900">
          {items.titleText}
        </P>

        <P size="servicetxt" className="text-white md:text-gray-900">
          {items.titleText2}
        </P>
      </div>
    </div>

    <!-- Desktop image -->
    <div class="hidden md:flex flex-col w-1/2">
      <div
        class="absolute right-[-12%] top-[54%] md:top-[55%] lg:top-[50%] transform -translate-y-1/2 w-[66vw] h-[80vw]
        rounded-full xl:h-full xl:w-[700px] lg:h-full lg:w-[580px] md:h-full md:w-[531px] lg:right-[-7%] md:right-[-13%] xl:right-[-5%] 2xl-right-[-5%]
        overflow-hidden shadow-2xl z-10"
      >
        <img
          src={items.img}
          alt="Engineers analyzing machinery"
          class={`w-full h-full ${data} `}
          style="transform: translateX(-10%) translateY(10%);"
        />
      </div>

      <a {href}>
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
            <span
              class="text-white font-bold"
              style="font-size: clamp(1rem, 3vw, 2rem);"
            >
              Lets Talk
            </span>
            <svg
              class="w-7 h-7 text-white ml-3"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </a>
    </div>
  </div>
{/each}

<style>
  @media screen and (height: 1366px) {
    #servicebanner {
      height: 40vh;
    }
  }
</style>
