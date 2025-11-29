<script lang="ts">
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import CircleHook from "$lib/icons/svgs/circlehook.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
</script>

<section id="why-conditions" class="bg-white py-10 scroll-mt-[100px]">
  <div class="container mx-auto px-5 md:px-[55px] text-left leading-relaxed">
    <div class="flex gap-3">
      <Heading size="bannerMaih1" className="text-[#1846A3] mb-6">
        Condition Monitoring Services
      </Heading>
      <div class="pt-2">
        <Yellowline />
      </div>
    </div>

    <Heading size="headingS25" className="text-[#1846A3] mb-4 font-semibold">
      Expert Condition Monitoring Services to Ensure Maximum Equipment
      Reliability
    </Heading>
    <P
      size="texts18"
      className="text-gray-700 leading-relaxed mb-8 font-normal"
    >
      Condition Monitoring and Maintenance will give you the power to choose the
      right action at the right time! Condition-Based Monitoring (CBM) is both
      predictive and proactive. It uses real-time data to assess the current
      condition of your equipment, providing valuable time to plan and execute
      an appropriate maintenance strategy, avoiding unexpected equipment
      crashes. Unlike reactive maintenance, CBM doesn't wait for equipment to
      fail. Instead, it equips you to take informed action before damage occurs,
      ensuring optimal performance and reduced downtime.
    </P>
    <!-- <Heading size="headingS20" className="text-[#1846A3] font-medium mb-2">
      AssetConditionMonitoring Predictive Maintenance
    </Heading> -->
    <P size="texts18" className="text-[#1846A3] leading-relaxed mb-4 font-base">
      "AssetConditionMonitoring – The Trusted Condition Monitoring Division of
      Technomax"
    </P>
    <P
      size="texts18"
      className="text-gray-700 leading-relaxed mb-4 font-normal"
    >
      <span class="font-semibold"
        >With over 18 years of experience, AssetConditionMonitoring.com</span
      >
      – the Condition Monitoring division of
      <span class="font-semibold">Technomax Middle East Engineering LLC</span>
      – is dedicated to delivering
      <span class="font-semibold"
        >high-quality Condition Monitoring Services</span
      > for the industrial sector.
    </P>
    <P
      size="texts18"
      className="text-gray-700 leading-relaxed mb-8 font-normal"
    >
      Backed by a team of <span class="font-bold"
        >45+ experienced certified professionals</span
      >, we leverage the latest technologies and provide
      <span class="font-semibold">value-driven solutions</span>
      that enhance reliability, improve efficiency, and ensure the
      <span class="font-semibold">long-term performance of critical assets</span
      > across diverse industries.
    </P>
    <ul class="space-y-5 mt-8">
      <li class="flex items-center gap-3">
        <CircleHook data="w-4 h-5 mr-2" />
        <p class="font-semibold text-[#1846A3]">
          Wireless condition monitoring
        </p>
      </li>
      <li class="flex items-center gap-3">
        <CircleHook data="w-4 h-5 mr-2" />
        <p class="font-semibold text-[#1846A3]">
          Smart sensors & IoT integration
        </p>
      </li>
      <li class="flex items-center gap-3">
        <CircleHook data="w-4 h-5 mr-2" />
        <p class="font-semibold text-[#1846A3]">AI & data-driven diagnostics</p>
      </li>
      <li class="flex items-center gap-3">
        <CircleHook data="w-4 h-5 mr-2" />
        <p class="font-semibold text-[#1846A3]">
          Cloud-based analytics platforms
        </p>
      </li>
      <li class="flex items-center gap-3">
        <CircleHook data="w-4 h-5 mr-2" />
        <p class="font-semibold text-[#1846A3]">
          Expert engineering strategies
        </p>
      </li>
    </ul>
  </div>
</section>
