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
      header: "Lux level testing and reporting",
    },
    {
      header: "Compliance with lighting regulations.",
    },
    {
      header: "Recommendations for LED retrofits.",
    },
    {
      header: "Energy-saving lighting solutions.",
    },
    {
      header: "On-site and remote lighting consultations",
    },
  ];
</script>

<section class="bg-white">
  <div class="container px-5 mx-auto text-left md:px-[55px]">
    <div class="flex gap-3">
      <Heading size="bannerMaih1" className="font-bold text-[#1E3A8A] mb-6 ">
        Why Choose Us ?
      </Heading>
    </div>
    <div
      class="grid grid-cols-1 pt-5 w-full px-5 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <ul class="space-y-6">
        {#each points as point}
          <li class="flex items-center gap-4">
            <img src="/assets/circlehook.svg" alt="" class="w-4 h-5" />
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
