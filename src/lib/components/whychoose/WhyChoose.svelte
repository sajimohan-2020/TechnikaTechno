<script lang="ts">
  import Heading from "$lib/components/heading/Heading.svelte";
  export let heading: string;
  export let practices: string[];
  export let firstparagraph: String;
  export let lastparagraph: String;
  export let subheading: string;
</script>

<div class="mx-auto lg:px-8 xl:px-10 flex flex-col gap-12">
  <Heading size="bannerMaih1" className="font-bold text-[#1e3a8a]">
    {heading}
  </Heading>
  {#if firstparagraph}
    <p
      class="mb-8 text-center md:text-left md:pr-20 tracking-wide md:leading-8 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] text-[#2F2F2F] font-medium"
    >
      {firstparagraph}
    </p>
  {/if}

  <div
    class="grid grid-cols-1 gap-8 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
  >
    <ul class="space-y-4">
      {#each practices as item}
        <li
          class="flex items-start md:items-center text-[#1E3A8A] font-semibold"
        >
          <span class="inline-block max-w-4 max-h-4 mr-2">
            <img src="/assets/circlehook.svg" alt="check icon" class="w-full" />
          </span>
          {#if subheading}
            <span class="text-[#1E3A8A] font-semibold">{subheading}</span>
          {/if}
          <span class="">{item}</span>
        </li>
      {/each}
    </ul>
  </div>

  <p
    class=" text-center md:text-left md:pr-20 tracking-wide md:leading-8 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] text-[#2F2F2F] font-medium"
  >
    {lastparagraph}
  </p>
</div>
