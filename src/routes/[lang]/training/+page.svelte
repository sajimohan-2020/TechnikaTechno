<script>
  // @ts-nocheck
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  /** @type {import('./$types').PageData} */
  export let data;

  import { PUBLIC_APIURL } from "$env/static/public";

  // Reactive variable to track selected event index
  let selectedEventIndex = 0;

  // Function to handle event selection from dropdown
  function selectEvent(event) {
    selectedEventIndex = +event.target.value;
  }
</script>

<div class="pt-24 sm:pt-28 lg:pt-28">
  <div
    class="flex items-center justify-center relative top-[20px] sm:top-[6px] md:top-0"
  >
    <div
      class="w-full h-[215px] md:h-[230px] lg:h-[300px] xl:h-[360px] 2xl:h-[385px]"
    >
      <img
        src="{PUBLIC_APIURL}/assets/{data.training.banner_image}"
        alt="IPEC"
        class="h-full object-cover object-left md:object-fill xl:w-full"
      />
    </div>

    <div class="hidden md:block absolute bg-white bottom-0 right-12 px-8 py-4">
      <nav class="flex space-x-2 text-base">
        <P size="texts18" className="text-[#0B60B0] hover:text-[#00245a]">
          <a href="/" class="">
            {#if data.training}
              {data.training.translations[0].breadcrumb_text1}
            {/if}
          </a>
        </P>
        <span>/</span>
        <P size="texts18" className="text-[#0B60B0] hover:text-[#00245a]">
          <a href="#." class="">
            {#if data.training}
              {data.training.translations[0].breadcrumb_text2}
            {/if}
          </a>
        </P>
      </nav>
    </div>
  </div>
</div>

<div class=" text-center pt-10">
  <div class="pb-1 md:pb-8">
    <div class="flex justify-center item-center mt-10 gap-3">
      <Heading
        size="h2bold"
        as="h1"
        className="text-[#1E3A8A] font-bold text-center "
      >
        {#if data.training}
          {data.training.translations[0].title}
        {/if}
      </Heading>
      <span class="pt-5 lg:pt-7">
        <Yellowline />
      </span>
    </div>
  </div>
</div>

<!-- <div class="container mx-auto">
  {#if data.training.translations[0].section1_title}
    <div class="flex flex-wrap">
      <div class="w-full p-2 lg:p-4">
        <div class="info-area flex flex-col justify-center pl-15 h-full">
          <div class="sub-title">
            <h5 class="text-2xl font-bold capitalize text-[#383838]">
              {data.training.translations[0].section1_title}
            </h5>
          </div>
          <ul class="info">
            <li class="flex border-b border-gray-300 py-4">
              <h6 class="font-bold capitalize w-1/4">
                {data.training.translations[0].information_item1_title}
              </h6>
              <p class="w-3/4 capitalize">
                {data.training.translations[0].information_item1_content}
              </p>
            </li>
            <li class="flex border-b border-gray-300 py-4">
              <h6 class="font-bold capitalize w-1/4">
                {data.training.translations[0].information_item2_title}
              </h6>
              <p class="w-3/4 capitalize">
                {data.training.translations[0].information_item2_content}
              </p>
            </li>
            <li class="flex border-b border-gray-300 py-4">
              <h6 class="font-bold capitalize w-1/4">
                {data.training.translations[0].information_item3_title}
              </h6>
              <p class="w-3/4 capitalize">
                {data.training.translations[0].information_item3_content}
              </p>
            </li>
          </ul>
        </div>
      </div>
      {#if data.training.translations[0].content_header1 || data.training.translations[0].content_para1}
        <div class="w-full p-2 lg:p-4">
          <div class="title">
            <h4 class="text-2xl leading-10 font-bold capitalize">
              {data.training.translations[0].content_header1}
            </h4>
          </div>
          <p class="mt-4 text-justify">
            {data.training.translations[0].content_para1}
          </p>
        </div>
      {/if}

      <div class="w-full p-2 lg:p-4">
        <div class="sub-title mb-2">
          <h5 class="text-base font-bold capitalize">
            {data.training.translations[0].section1_title2}
          </h5>
        </div>
        <ul class="list-disc pl-5 space-y-2">
          {#each data.training.translations[0].content_list as tra}
            <li>{tra.content_list_item}</li>
          {/each}
        </ul>
      </div>
    </div>
  {:else}
    <div class="p-2 lg:p-4"></div>
  {/if}
</div> -->
<div class="pt-4 pb-8">
  {#if selectedEventIndex !== null}
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        {#if data.past_events[selectedEventIndex].section1_image != null}
          <div class="w-full lg:w-1/2 md:w-1/2">
            <div class="projetct-details-image">
              <img
                src="{PUBLIC_APIURL}/assets/{data.past_events[
                  selectedEventIndex
                ].section1_image}"
                alt="Service"
                class="w-full p-2 lg:p-4"
              />
            </div>
          </div>
        {/if}
        <div
          class="w-full {data.past_events[selectedEventIndex].section1_image
            ? 'md:w-1/2 p-2 lg:p-4'
            : 'p-2 lg:p-4'}"
        >
          <div class="info-area flex flex-col justify-start pl-15 h-full">
            <P size="texts18" className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </P>
          </div>
        </div>

        <div
          class="w-full mt-[25px] {data.past_events[selectedEventIndex]
            .section2_image
            ? 'md:w-1/2 p-2 lg:p-4'
            : 'p-2 lg:p-4'}"
        >
          <div class="info-area flex flex-col justify-start pl-15 h-full">
            <P size="texts18" className="text-justify">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </P>
          </div>
        </div>
        {#if data.past_events[selectedEventIndex].section2_image != null}
          <div class="w-full lg:w-1/2 md:w-1/2 mt-[25px]">
            <div class="projetct-details-image">
              <img
                src="{PUBLIC_APIURL}/assets/{data.past_events[
                  selectedEventIndex
                ].section2_image}"
                alt="Service"
                class="w-full p-2 lg:p-4"
              />
            </div>
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>

{#if data.training.grid_image1}
  <div class="md:gird-cols-3 grid-cols-1">
    {#if data.training.grid_image1}
      <img
        src="{PUBLIC_APIURL}/assets/{data.training.grid_image1}"
        alt="Service"
        class="w-full p-2 lg:p-4"
      />
    {/if}
    {#if data.training.grid_image2}
      <img
        src="{PUBLIC_APIURL}/assets/{data.training.grid_image2}"
        alt="Service"
        class="w-full p-2 lg:p-4"
      />
    {/if}
    {#if data.training.grid_image3}
      <img
        src="{PUBLIC_APIURL}/assets/{data.training.grid_image3}"
        alt="Service"
        class="w-full p-2 lg:p-4"
      />
    {/if}
  </div>
{/if}
