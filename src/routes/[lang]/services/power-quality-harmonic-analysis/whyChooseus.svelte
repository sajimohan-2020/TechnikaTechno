<script lang="ts">
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  interface points {
    header?: string;
    text?: string;
  }
  const points: points[] = [
    {
      header: "Expert Engineers",
      text: " Certified CBM professionals with extensive experience in power quality and harmonic diagnostics.",
    },
    {
      header: "Advanced Testing Solutions",
      text: " Use of state-of-the-art measurement tools for precise analysis and mitigation.",
    },
    {
      header: "Comprehensive Services",
      text: "From detailed assessment and data collection to tailored corrective measures",
    },
    {
      header: "Fast and Reliable Reporting",
      text: "Preliminary results onsite with full, actionable reports delivered promptly.",
    },
    {
      header: "Wide Asset Coverage",
      text: "Expertise in analyzing cables, switchgear, transformers, motors, and other critical equipment.",
    },
    {
      header: "Compliance & Standards",
      text: " Adherence to IEC and international power quality standards.",
    },
    {
      header: "Flexible Onsite Support",
      text: " Services delivered across industrial, utility, and infrastructure sectors with minimal disruption.",
    },
  ];
</script>

<section class="bg-white mt-14 mb-14">
  <div class="container px-5 mx-auto text-left md:px-[55px]">
    <div class="flex gap-3">
      <Heading size="bannerMaih1" className="font-bold text-[#1E3A8A] mb-6 ">
        Why Choose Us ?
      </Heading>
    </div>
    <P size="texts18" className="text-gray-700 leading-relaxed mb-8">
      At <span class="font-semibold">Asset Condition Monitoring</span>, we
      combine technical expertise, advanced tools, and industry best practices
      to deliver reliable Power Quality and Harmonic Analysis services. Our
      approach ensures accurate diagnostics, actionable insights, and solutions
      that enhance system performance and protect your electrical assets.
    </P>
    <div
      class="grid grid-cols-1 pt-5 w-full px-5 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <ul class="space-y-4">
        {#each points as point}
          <li class="flex items-start gap-4">
            <img src="/assets/circlehook.svg" alt="" class="w-4 h-5 mt-1" />
            <div>
              <p class="text-[#1E3A8A] font-semibold">
                {point.header}
              </p>
              <p class="text-[#2F2F2F]">
                {point.text}
              </p>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>
