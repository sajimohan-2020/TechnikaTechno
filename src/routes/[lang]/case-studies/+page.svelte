<script lang="ts">
  // @ts-nocheck
  import { PUBLIC_APIURL } from "$env/static/public";
  /** @type {import('./$types').PageData} */
  export let data;
</script>
<svelte:head>
  <meta name="robots" content="index, follow" />
</svelte:head>
<div class="pt-24 sm:pt-28 lg:pt-28">
  <div
    class="flex items-center justify-center relative top-[20px] sm:top-[6px] md:top-0"
  >
    <div
      class="w-full h-[215px] md:h-[230px] lg:h-[300px] xl:h-[360px] 2xl:h-[385px] 2.5xl:h-[470px] 5xl:h-[1000px]"
    >
      <img
        src="{PUBLIC_APIURL}/assets/{data.caseStudies.banner_image}"
        alt="IPEC"
        class="h-full object-cover object-center md:object-fill xl:w-full"
      />
    </div>
    <div class="absolute inset-0 bg-black opacity-20"></div>
    <div
      class="hidden md:block absolute bg-white bottom-0 right-12 px-8 py-4 5xl:px-[15rem] 5xl:py-[4rem]"
    >
      <nav class="flex space-x-2 5xl:text-[4rem] text-base">
        <a href="/" class="text-[#0B60B0] hover:text-[#00245a]">
          {data.caseStudies.translations[0].breadcrumb_text1}
        </a>
        <span>/</span>
        <a href="#." class="text-[#0B60B0] hover:text-[#00245a]">
          {data.caseStudies.translations[0].breadcrumb_text2}
        </a>
      </nav>
    </div>
  </div>
</div>

<div class="text-center pt-14">
  <div class="pb-4">
    <h2
      class="text-3xl md:text-4xl lg:text-5xl text-blue-900 font-bold text-center mb-10 5xl:text-[60px]"
    >
      {data.caseStudies.translations[0].title}
    </h2>
  </div>
</div>

<div class="max-w-[1147px] 5xl:max-w-[1709px] container py-8 5xl:py-[7.3rem]">
  <div class="columns-1 md:columns-2 gap-6 lg:gap-8 lg:px-14">
    {#each data.caseStudiesItems as item}
      <a href={`/${data.langParam}/case-studies/${item.casestudy_link}`}>
        <div class="break-inside-avoid mb-6 rounded overflow-hidden">
          <div class="relative group">
            <img
              src="{PUBLIC_APIURL}/assets/{item.image}"
              alt=""
              class="w-full h-[300px] md:h-auto transform transition-transform duration-500 group-hover:scale-110"
            />

            <div
              class="absolute top-8 left-0 bg-white text-xs md:text-sm text-[#0070B9] font-bold py-2 px-4"
            >
              Case study
            </div>

            <!-- Black overlay -->
            <div
              class="absolute inset-0 bg-black opacity-5 transition-opacity duration-500 group-hover:opacity-10"
            ></div>

            <!-- Title + Download Button in Same Line -->
            <div class="absolute bottom-8 px-4 xl:px-8 w-full">
              <div class="flex items-center justify-between">
                <!-- Title Text -->
                <h4
                  class="text-sm md:text-[20px] 5xl:text-[37px] font-medium text-white"
                >
                  {item.translations[0].title}
                </h4>

                <!-- Download Button -->
                <div
                  class="bg-white p-2 rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center 5xl:w-20 5xl:h-20 w-10 h-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 5xl:h-[3.25rem] 5xl:w-[3.25rem] text-[#0070B0]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
