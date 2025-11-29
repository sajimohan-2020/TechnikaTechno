<script>
  // @ts-nocheck
  import { PUBLIC_APIURL } from "$env/static/public";
  import Video from "$lib/components/ui/videos/Videos.svelte";
  // Add any necessary Svelte logic here
  /** @type {import('./$types').PageData} */
  export let data;
</script>
<svelte:head>
  <meta name="robots" content="index, follow" />
</svelte:head>
<!-- <img src="{PUBLIC_APIURL}/assets/{data.caseStudyDetails.banner_image}" alt="IPEC" class="w-full h-full" /> -->
<div class="pt-24 sm:pt-28 lg:pt-28">
  <div
    class="flex items-center justify-center relative top-[20px] sm:top-[6px] md:top-0"
  >
    <div
      class="w-full h-[215px] md:h-[230px] lg:h-[300px] xl:h-[360px] 2xl:h-[385px]"
    >
      <img
        src="{PUBLIC_APIURL}/assets/{data.caseStudyDetails.banner_image}"
        alt="IPEC"
        class="h-full object-cover object-left md:object-fill xl:w-full"
      />
    </div>

    <div class="hidden md:block absolute bg-white bottom-0 right-12 px-8 py-4">
      <nav class="flex space-x-2 text-base">
        <a href="/" class="text-[#0B60B0] hover:text-text-[#00245a]"
          >{data.caseStudyDetails.translations[0].breadcrumb_text1}</a
        >
        <span>/</span>
        <a
          href="/{data.langParam}/case-studies"
          class="text-[#0B60B0] hover:text-text-[#00245a]"
          >{data.caseStudyDetails.translations[0].breadcrumb_text2}</a
        >
        <span>/</span>
        <a href="#." class="text-[#0B60B0] hover:text-text-[#00245a]"
          >{data.caseStudyDetails.translations[0].breadcrumb_text3}</a
        >
      </nav>
    </div>
  </div>
</div>

<div class=" text-center pt-14">
  <div class="pb-4">
    <h2
      class="text-3xl md:text-4xl lg:text-5xl text-blue-900 font-bold text-center"
    >
      {data.caseStudyDetails.translations[0].title}
    </h2>
  </div>
</div>

<div class="py-8">
  <div class="container mx-auto md:px-[55px]">
    {#if data.caseStudyDetails.translations[0]?.section1}
      <div class="flex flex-wrap">
        <div class="w-full md:w-2/5 p-2">
          <div class="">
            <img
              src="{PUBLIC_APIURL}/assets/{data.caseStudyDetails
                .section1_image}"
              alt="service-details"
              class="w-full"
            />
          </div>
        </div>
        <div class="w-full md:w-3/5 p-2">
          <!-- <div class="py-3">
                  <h4 class="text-2xl lg:text-3xl font-bold text-[#00245a]">{data.caseStudyDetails.translations[0].section1_title}</h4>
                </div> -->
          <div class="space-y-4 text-lg font-normal text-justify">
            {@html data.caseStudyDetails.translations[0].section1}
          </div>
        </div>
      </div>
    {/if}
    {#if data.caseStudyDetails.translations[0]?.section2}
      <div class="flex flex-wrap pt-10">
        <div class="w-full md:w-3/5 p-2">
          <!-- <div class="py-3">
                  <h4 class="text-2xl lg:text-3xl font-bold text-[#00245a]">{data.caseStudyDetails.translations[0].section2_title}</h4>
                </div> -->
          <div class="space-y-4 text-lg text-black font-normal text-justify">
            {@html data.caseStudyDetails.translations[0].section2}
          </div>
        </div>
        <div class="w-full md:w-2/5 p-2 flex items-center justify-center">
          <img
            src="{PUBLIC_APIURL}/assets/{data.caseStudyDetails.section2_image}"
            alt="service-details"
            class="w-full"
          />
        </div>
      </div>
    {/if}
    {#if data.caseStudyDetails.video_link}
      <div class="flex justify-center pt-10">
        <div
          class="w-full md:w-[90%] lg:w-[70%] flex justify-center items-center p-2"
        >
          <!-- <video 
           controls src="{PUBLIC_APIURL}/assets/{data.caseStudyDetails.video_link}">
             <track kind="captions" src="" label="English captions" default>
           </video> -->
          <Video
            videoSrc="{PUBLIC_APIURL}/assets/{data.caseStudyDetails.video_link}"
          />
          <!-- src="{PUBLIC_APIURL}/assets/{data.caseStudyDetails.video_link}   -->
        </div>
      </div>
    {/if}
    {#if data.caseStudyDetails.translations[0]?.section3}
      <div class="flex flex-wrap pt-10">
        <div class="w-full md:w-2/5 p-2 flex items-center justify-center">
          <img
            src="{PUBLIC_APIURL}/assets/{data.caseStudyDetails.section3_image}"
            alt="service-details"
            class="w-full"
          />
        </div>
        <div class="w-full md:w-3/5 p-2">
          <div class="space-y-4 text-lg text-black font-normal text-justify">
            {@html data.caseStudyDetails.translations[0].section3}
          </div>
        </div>
      </div>
    {/if}
    {#if data.caseStudyDetails.translations[0]?.section4}
      <div class="flex flex-wrap pt-10">
        <div class="w-full md:w-3/5 p-2">
          <!-- <div class="py-3">
                  <h4 class="text-2xl font-bold text-[#00245a]">{data.caseStudyDetails.translations[0].section3_title}</h4>
                </div> -->
          <div class="space-y-4 text-lg text-black font-normal text-justify">
            {@html data.caseStudyDetails.translations[0].section4}
          </div>
        </div>
        <div class="w-full md:w-2/5 p-2 flex items-center justify-center">
          <img
            src="{PUBLIC_APIURL}/assets/{data.caseStudyDetails.section4_image}"
            alt="service-details"
            class="w-full"
          />
        </div>
      </div>
    {/if}

    {#if data.caseStudyDetails.translations[0]?.section5}
      <div class="flex flex-wrap pt-10">
        <div class="w-full md:w-2/5 p-2 flex items-center justify-center">
          <img
            src="{PUBLIC_APIURL}/assets/{data.caseStudyDetails.section5_image}"
            alt="service-details"
            class="w-full"
          />
        </div>
        <div class="w-full md:w-3/5 p-2">
          <!-- <div class="py-3">
            <h4 class="text-2xl font-bold text-[#00245a]">{data.caseStudyDetails.translations[0].section3_title}</h4>
          </div> -->
          <div class="space-y-4 text-lg text-black font-normal text-justify">
            {@html data.caseStudyDetails.translations[0].section5}
          </div>
        </div>
      </div>
    {/if}

    {#if data.caseStudyDetails.translations[0]?.section6}
      <div class="flex flex-wrap pt-10">
        <div class="w-full md:w-3/5 p-2">
          <!-- <div class="py-3">
                  <h4 class="text-2xl font-bold text-[#00245a]">{data.caseStudyDetails.translations[0].section3_title}</h4>
                </div> -->
          <div class="space-y-4 text-lg text-black font-normal text-justify">
            {@html data.caseStudyDetails.translations[0].section6}
          </div>
        </div>
        <div class="w-full md:w-2/5 p-2 flex items-center justify-center">
          <img
            src="{PUBLIC_APIURL}/assets/{data.caseStudyDetails.section6_image}"
            alt="service-details"
            class="w-full"
          />
        </div>
      </div>
    {/if}

    {#if data.caseStudyDetails.translations[0]?.section7}
      <div class="flex flex-wrap pt-10">
        <div class="w-full md:w-2/5 p-2 flex items-center justify-center">
          <img
            src="{PUBLIC_APIURL}/assets/{data.caseStudyDetails.section7_image}"
            alt="service-details"
            class="w-full"
          />
        </div>
        <div class="w-full md:w-3/5 p-2">
          <!-- <div class="py-3">
            <h4 class="text-2xl font-bold text-[#00245a]">{data.caseStudyDetails.translations[0].section3_title}</h4>
          </div> -->
          <div class="space-y-4 text-lg text-black font-normal text-justify">
            {@html data.caseStudyDetails.translations[0].section7}
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>
