<script lang="ts">
  import GrayCircle from "$lib/icons/svgs/grayCircle.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  interface bulletsSentence {
    title?: string;
    paragraph?: string;
    text?: string;
    bullets?: string[];
  }

  export let bulletins: bulletsSentence[] = [];
</script>

<div class="container mt-14 md:px-[55px] text-left">
  {#each bulletins as items}
    <!-- Bulletin Heading -->
    <h1 class="text-[#1E3A8A] xl:text-[30px] lg:text-[25px] md:text-[22px] text-[20px] font-bold mb-6 5xl:text-[60px]">
      {items.title}
    </h1>

    <!-- First Paragraph -->
    <p class="mb-6 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] 5xl:text-[47px]">
      {items.paragraph}
    </p>

    <!-- Optional Bullet List -->
    {#if items.bullets?.length}
      <ul class="space-y-4 mb-6 pl-10 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] 5xl:text-[47px]">
        {#each items.bullets as bullet}
          <li class="flex gap-3 items-start">
            <span class="max-w-2 max-h-2 5xl:max-w-8 5xl:max-h-8"><GrayCircle data="w-2 h-2 5xl:w-8 5xl:h-8" /></span>
            {bullet}
          </li>
        {/each}
      </ul>
    {/if}

    <!-- Final Paragraph -->
    <p class="mb-8 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] 5xl:text-[47px]">
      {items.text}
    </p>
  {/each}
</div>

