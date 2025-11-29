<script lang="ts">
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Longbar from "$lib/components/longbar/LongBar.svelte";

  interface name {
    title: string;
    text?: string;
  }
  let name: name[] = [
    {
      title: "Get a free consultation or schedule a site survey today?",
      text: "Let's Talk",
    },
  ];

  const points: string[] = [
    "Access world-class condition",
    "Solutions tailored to the",
    "Comprehensive, technology",
    "measurable result",
  ];
</script>

<div class="w-full flex flex-col gap-6 pb-10">
  <div class="container mx-auto px-5">
    <div class="flex flex-col justify-center items-start">
      <Heading size="bannerMaih1" className="font-bold text-[#1846A3] mb-4">
        Ready to Monitor Your Machinery Smarter?
      </Heading>
      <Longbar />
      <P size="texts18" className="text-gray-700 pr-10 pt-8">
        At AssetConditionMonitoring, we deliver cutting-edge condition
        monitoring and machine health solutions designed to meet the unique
        challenges of industries across the UAE and MENA region. Our goal is to
        enhance reliability, reduce downtime, and maximize operational
        efficiency through advanced technology and expert support.
      </P>
    </div>
  </div>

  <div class="container">
    <div class="flex flex-col md:flex-row md:items-start gap-8 w-full">
      <!-- List Section -->
      <div class="flex-1 min-w-0 ml-8 md:ml-8 lg:ml-15 xl:ml-10">
        <ul class="space-y-3 mb-4">
          {#each points as point}
            <li class="flex items-center gap-3">
              <img src="/assets/circletick.svg" alt="" />
              <P size="texts18" className="text-gray-800">{point}</P>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- CTA Button -->
    <!-- <div class="flex-1 flex md:justify-end w-full md:mt-0 mt-4">
      <div
        class="relative w-full md:w-[420px] h-32 flex items-center justify-center"
      >
        <div
          class="absolute inset-0 bg-[#D1D800] rounded-tl-2xl"
          style="clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)"
        ></div>
        <div class="relative z-10 flex items-center justify-center w-full h-full">
          <span class="text-white font-bold text-2xl md:text-3xl mr-4">
            Let's Talk
          </span>
          <svg
            class="w-10 h-10 text-white"
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
    </div> -->
  </div>
</div>
