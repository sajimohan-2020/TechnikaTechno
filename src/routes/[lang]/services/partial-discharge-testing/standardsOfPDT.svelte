<script lang="ts">
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import GrayCircle from "$lib/icons/svgs/grayCircle.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  import Yellowarrow from "$lib/icons/svgs/yellowarrow.svelte";

  interface standards {
    title: string;
    bullet1?: string;
    bullet2?: string;
    bullet3?: string;
    bullet4?: string;
  }
  export let standards: standards[] = [];
</script>

<section class="mt-14 bg-[#F4F9FF]">
  <div class="container md:px-[55px]">
    <div class="flex gap-3">
      <Heading
        size="headingS25"
        className=" font-extrabold text-[#1e3a8a] mb-6 text-left pt-6"
        >What is the standard for partial discharge testing?
      </Heading>
    </div>

    <P
      size="texts18"
      className="text-gray-700 leading-relaxed text-justify pb-6"
    >
      The standards for partial discharge (PD) testing are defined by various
      international bodies to ensure consistency, safety, and accuracy across
      different applications. Here are the most widely recognized standards:
    </P>
  </div>
  <div class="container pb-6">
    <ul class="flex flex-col items-start gap-4 py-4">
      {#each standards as points}
        <p class="flex items-start">
          <span class="pt-1 flex">
            <Yellowarrow />
            <Yellowarrow /></span
          >

          <span class="pl-2 text-[#1E3A8A] font-semibold">{points.title}</span>
        </p>

        {#if points.bullet1}
          <li class="flex gap-3 items-start pl-5 italic">
            <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
            {points.bullet1}
          </li>
        {/if}

        {#if points.bullet2}
          <li class="flex gap-3 items-start pl-5 italic">
            <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
            {points.bullet2}
          </li>
        {/if}

        {#if points.bullet3}
          <li class="flex gap-3 items-start pl-5 italic">
            <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
            {points.bullet3}
          </li>
        {/if}
      {/each}
    </ul>
  </div>
</section>
