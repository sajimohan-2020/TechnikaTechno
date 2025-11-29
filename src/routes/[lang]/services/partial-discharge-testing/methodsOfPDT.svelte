<script lang="ts">
  import Heading from "$lib/components/heading/Heading.svelte";
  import GrayCircle from "$lib/icons/svgs/grayCircle.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  interface points {
    title: string;
    detects: string;
    howitworks: string;
    usecase?: string;
  }
  export let points: points[];
  export let leftPoints = points.slice(0, 3);
  export let rightPoints = points.slice(3);
</script>

<section class="mt-14 h-auto">
  <div class="container md:px-[55px] text-justify">
    <!-- Heading -->
    <div class="flex gap-3">
      <Heading
        size="bannerMaih1"
        className="font-extrabold text-[#1e3a8a] mb-8 text-center md:text-left"
      >
        What are the methods of detection of partial discharge?
      </Heading>
    </div>
  </div>

  <!-- First Row: Left points + Right Image -->
  <div
    class="relative w-full md:flex flex-col justify-between gap-16 px-4 md:px-10"
  >
    <div class="flex flex-col lg:flex-row w-full justify-center gap-14 md:px-7">
      <!-- Left Column -->
      <div class="w-full lg:w-[55%] space-y-6">
        {#each leftPoints as point}
          <div class="xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]">
            <h2 class="text-[#1E3A8A] font-semibold mb-3">{point.title}</h2>
            <ul class="md:pl-10 space-y-4 text-gray-700">
              {#if point.detects}
                <li class="flex gap-3 items-start">
                  <span class="max-w-2 max-h-2"
                    ><GrayCircle data="w-2 h-2" /></span
                  >
                  {point.detects}
                </li>
              {/if}
              {#if point.howitworks}
                <li class="flex gap-3 items-start">
                  <span class="max-w-2 max-h-2"
                    ><GrayCircle data="w-2 h-2" /></span
                  >
                  {point.howitworks}
                </li>
              {/if}
              {#if point.usecase}
                <li class="flex gap-3 items-start">
                  <span class="max-w-2 max-h-2"
                    ><GrayCircle data="w-2 h-2" /></span
                  >
                  {point.usecase}
                </li>
              {/if}
            </ul>
          </div>
        {/each}
      </div>

      <!-- Right Image -->
      <div class="flex justify-center items-center w-full lg:w-[40%]">
        <div
          class="relative bg-[#3380C7] rounded-lg w-full aspect-square max-w-[280px] md:max-w-[350px] 2xl:max-w-[400px]"
        >
          <div
            class="absolute top-[16px] right-[16px] md:top-[34px] md:right-[34px] bg-[#D9D9D9] rounded-lg w-full h-full z-20"
          >
            <img
              src="/assets/img/pdt23.png"
              alt=""
              class="object-cover h-full w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Second Row: Left Image + Right points -->
    <div
      class="flex flex-col-reverse lg:flex-row justify-center gap-16 w-full md:px-5 py-8"
    >
      <!-- Left Image -->
      <div
        class="flex items-center justify-center lg:justify-start 2xl:justify-center w-full lg:w-[40%]"
      >
        <div
          class="relative bg-[#3380C7] rounded-lg w-full aspect-square max-w-[280px] md:max-w-[350px] 2xl:max-w-[400px]"
        >
          <div
            class="absolute top-[16px] left-[16px] md:top-[34px] md:left-[34px] bg-[#D9D9D9] rounded-lg w-full h-full z-20"
          >
            <img
              src="/assets/img/pdt22.png"
              alt=""
              class="object-cover h-full w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div
        class="w-full lg:w-[55%] flex flex-col justify-end space-y-6 mt-10 md:mt-0"
      >
        {#each rightPoints as point}
          <div class="xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]">
            <h2 class="text-[#1E3A8A] font-semibold mb-3">{point.title}</h2>
            <ul class="md:pl-10 space-y-4 text-gray-700">
              {#if point.detects}
                <li class="flex gap-3 items-start">
                  <span class="max-w-2 max-h-2"
                    ><GrayCircle data="w-2 h-2" /></span
                  >
                  {point.detects}
                </li>
              {/if}
              {#if point.howitworks}
                <li class="flex gap-3 items-start">
                  <span class="max-w-2 max-h-2"
                    ><GrayCircle data="w-2 h-2" /></span
                  >
                  {point.howitworks}
                </li>
              {/if}
              {#if point.usecase}
                <li class="flex gap-3 items-start">
                  <span class="max-w-2 max-h-2"
                    ><GrayCircle data="w-2 h-2" /></span
                  >
                  {point.usecase}
                </li>
              {/if}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
