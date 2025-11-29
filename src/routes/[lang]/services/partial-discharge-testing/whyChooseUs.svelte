<script lang="ts">
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  interface points {
    header: string;
    text: string;
  }
  const points: points[] = [
    {
      header: "Extensive Industry Experience",
      text: "Years of successful PD testing across power, oil & gas, utilities, and industrial sectors in the Middle East.",
    },
    {
      header: "Advanced Testing Technologies",
      text: "Utilizes ultrasonic, TEV, UHF, and HFCT/RFCT methods for accurate online partial discharge monitoring.",
    },
    {
      header: "Comprehensive Asset Coverage",
      text: "Expertise in PD testing for switchgear, transformers, cables, motors, and generators",
    },
    {
      header: "Customized Solutions",
      text: "Tailored monitoring systems designed to meet specific asset and industry requirements.",
    },
    {
      header: "Real-Time Monitoring Systems",
      text: "Deployment of online partial discharge monitoring systems for continuous condition tracking.",
    },
    {
      header: "Skilled Technical Team",
      text: "Certified professionals with deep knowledge of insulation systems and PD interpretation",
    },
    {
      header: " Non-Invasive Testing",
      text: "Testing carried out without disrupting operations, ensuring zero downtime.",
    },
    {
      header: " End-to-End Support",
      text: "From system design and installation to data analysis and reporting.",
    },
  ];
</script>

<section class="bg-white mt-14">
  <div class="container px-5 mx-auto text-left md:px-[55px]">
    <div class="flex gap-3">
      <Heading size="bannerMaih1" className="font-bold text-[#1E3A8A] mb-6 ">
        Why Choose Us ?
      </Heading>
    </div>

    <P size="texts18" className="text-gray-700 leading-relaxed">
      Technomax is a trusted name in partial discharge monitoring services,
      backed by years of experience in condition monitoring across diverse
      industries throughout the Middle East. Our in-depth expertise spans power,
      oil & gas, manufacturing, and utilities—enabling us to deliver reliable
      <span class="font-semibold">online partial discharge testing</span> tailored
      to each sector's unique needs. With advanced diagnostic tools and a proven
      track record, Technomax ensures early fault detection, extended asset life,
      and uninterrupted operations.
    </P>
    <div
      class="grid grid-cols-1 pt-8 w-full px-5 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <ul class="space-y-6">
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
