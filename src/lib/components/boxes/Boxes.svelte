<script lang="ts">
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";

  interface box {
    title?: string;
    text?: string;
  }
  export let boxes: box[] = [];
</script>

<div class="flex flex-wrap justify-center items-stretch gap-8">
  {#each boxes as box}
    <div
      class="relative rounded-lg bg-[#EAF5FF] text-[#0B60B0] px-5 h-[160px] lg:h-[160px] xl:h-[200px] w-[260px] flex flex-col"
    >
      {#if box.title}
        <div class="h-12 flex items-center justify-center mb-4">
          <Heading
            size="headingS20"
            className="font-semibold text-center leading-tight"
          >
            {box.title}
          </Heading>
        </div>
      {/if}

      <!-- Align text at the top instead of center -->
      <div class="flex-1 flex items-center justify-center pt-4">
        <P size="texts16" className="font-medium text-center pb-4">
          {box.text}
        </P>
      </div>
    </div>
  {/each}
</div>
