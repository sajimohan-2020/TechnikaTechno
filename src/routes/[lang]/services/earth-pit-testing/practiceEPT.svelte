<script lang="ts">
  import Circlehook from "$lib/icons/svgs/circlehook.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  import GrayCircle from "$lib/icons/svgs/grayCircle.svelte";

  interface Practice {
    text: string;
  }

  export let practices: Practice[] = [];
</script>

<section class="container bg-white mt-16">
  <div class="mx-auto px-5">
    <div class="flex gap-3">
      <Heading size="bannerMaih1" className="font-bold text-[#1e3a8a] mb-5">
        Best Practices for Accurate Earth Pit Testing
      </Heading>
      <div class="pt-3"><Yellowline /></div>
    </div>

    <div class="grid grid-cols-1 gap-8">
      <ul class="space-y-6">
        {#each practices as practice}
          <li class="flex items-start gap-3">
            <!-- <img src="/assets/circlehook.svg" alt="" class="w-4 h-5 mt-1" /> -->
            <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>

            <span class="text-[14px] md:text-base">{practice.text}</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>
