<script lang="ts">
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import CircleHook from "$lib/icons/svgs/circlehook.svelte";
  import Gray from "$lib/icons/svgs/grayCircle.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  import GrayCircle from "$lib/icons/svgs/grayCircle.svelte";

  const topPoints = [
    "Access world-class condition monitoring and machine health solutions with AssetConditionMonitoring",
    "Solutions tailored to the operational and environmental needs of the UAE and MENA region",
    "Comprehensive, technology-driven approach combining:",
  ];

  const combinedPoints = [
    "Advanced hardware & software",
    "Expert technical support",
    "Skilled maintenance professionals",
  ];

  const focusPoints = [
    "Minimising unplanned downtime",
    "Extending asset lifespan",
    "Ensuring compliance with industry standards",
    "Delivering cost-effective results",
  ];
</script>

<div
  class="container mx-auto px-5 md:px-[55px] text-left leading-relaxed pb-6 mt-10 scroll-mt-[150px]"
  id="why-choose-us"
>
  <div class="flex gap-3"></div>
  <Heading size="bannerMaih1" className="font-bold text-[#1846A3] mb-6">
    Why Choose Us?
  </Heading>

  <P size="texts18" className="text-[#2F2F2F] font-normal leading-relaxed mb-8">
    At AssetConditionMonitoring, we deliver cutting-edge condition monitoring
    and machine health solutions designed to meet the unique challenges of
    industries across the UAE and MENA region. Our goal is to enhance
    reliability, reduce downtime, and maximize operational efficiency through
    advanced technology and expert support.
  </P>

  <!-- Main Bullet Points -->
  <ul class="space-y-5 mt-8 px-5">
    {#each topPoints as point}
      <li class="flex gap-3 items-start pl-5 text-[#1E3A8A] font-semibold">
        <span class="max-w-4 max-h-4"><CircleHook data="w-4 h-5 mr-2" /></span>
        <P size="texts18" className="">{point}</P>
      </li>
    {/each}

    <!-- Nested Points under "Comprehensive, technology-driven..." -->
    <ul class="px-5 space-y-2">
      {#each combinedPoints as nested}
        <li class="flex gap-3 items-center pl-5">
          <GrayCircle data="w-2 h-2" />
          <P size="texts16" className="text-[#2F2F2F]">{nested}</P>
        </li>
      {/each}
    </ul>

    <!-- Focus Section -->
    <li class="flex items-center gap-3 mt-5 px-5">
      <CircleHook data="w-4 h-5 mr-2" />
      <P size="texts18" className="font-semibold text-[#1E3A8A]">Focused on:</P>
    </li>

    <ul class=" space-y-2 px-9">
      {#each focusPoints as item}
        <li class="flex gap-3 items-center">
          <GrayCircle data="w-2 h-2" />
          <P size="texts16" className="text-gray-700">{item}</P>
        </li>
      {/each}
    </ul>
  </ul>
</div>
