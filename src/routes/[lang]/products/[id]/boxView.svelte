<script lang="ts">
  import YellowDot from "$lib/icons/svgs/yellowDot.svelte";

  interface boxData {
    img?: string;
    title?: string;
    text?: string;
    list?: string[];
  }

  export let datas: boxData[] = [];
  export let attribute: string = "";
</script>

<section class="mt-16">
  <div class="container mx-auto px-4 md:px-[55px]">
    <div class="flex justify-center gap-4 md:gap-6 lg:gap-8 flex-wrap">
      {#each datas as data}
        <div
          class="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(50%-1rem)] max-w-[600px] h-auto border rounded-xl shadow-xl bg-gradient-to-br from-[#F0F7FA] to-[#FCFDF2] flex flex-col lg:flex-row gap-2"
        >
          <img
            src={data.img}
            alt=""
            class={`w-full lg:w-[35%] h-auto max-h-[350px] lg:max-h-none object-cover ${attribute} object-center rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none`}
          />
          <div class="w-full space-y-5 pb-4">
            <p class="px-4 text-left font-bold text-[16px] pt-4">
              {data.title}
            </p>
            <p class="mx-4 pt-4 text-left text-gray-700 text-[14px] leading-tight pb-4 font-bold">
              {data.text}
            </p>

            <ul class="mx-4 mb-4 list-inside space-y-4 text-gray-700 font-normal text-[12px]">
              {#if data.list}
                {#each data.list as item}
                  <li class="flex items-start">
                    <span><YellowDot data="w-2 h-2 inline-block mr-2" /></span>
                    {item}
                  </li>
                {/each}
              {/if}
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>