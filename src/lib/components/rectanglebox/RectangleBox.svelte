<script lang="ts">
  import Yellowarrow from "$lib/icons/svgs/yellowarrow.svelte";
  interface properties {
    title: string;
    text: string;
    bullets?: string[];
  }
  export let data: string = "xl:items-center";
  export let titlewidth: string = "md:w-2/5 lg:w-1/5";
  export let textwidth: string = "md:w-3/5 lg:w-4/5";
  export let property: properties[] = [];
</script>

<div class="flex flex-col gap-5 items-center justify-center pt-[10px] mb-5">
  {#each property as item}
    <div
      class="flex flex-col md:flex-row gap-3 p-4 mt-2 w-[80%] rounded-lg border border-[#2D8AE7] xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
    >
      <div
        class={`flex gap-3  ${titlewidth} items-start justify-start text-left`}
      >
        <div class={`flex items-start  ${data} gap-3`}>
          <span class="flex pt-[5px]">
            <Yellowarrow />
            <Yellowarrow />
          </span>

          <p class="text-[#1E3A8A] font-semibold flex gap-5">
            {item.title}
          </p>
        </div>
      </div>
      <div
        class={`flex flex-col justify-start gap-2 ${textwidth} text-left `}
      >
        <p class="text-gray-700 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]">{item.text}</p>
        {#if item.bullets}
          <ul class="list-disc pl-5 text-gray-700 ml-5">
            {#each item.bullets as bullet}
              <li><b>{bullet}</b></li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>
  {/each}
</div>
