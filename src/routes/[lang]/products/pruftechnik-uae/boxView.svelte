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
  export let height: string = "";
</script>

<section class="mt-16">
  <div class="container mx-auto md:px-[55px]">
    <div class="flex justify-center gap-8 lg:gap-14 flex-wrap">
      {#each datas as data}
        <div
          class={`w-[75%] max-w-[600px] ${height} border rounded-xl shadow-xl bg-gradient-to-br from-[#F0F7FA] to-[#FCFDF2] flex flex-col md:flex-row gap-2`}
        >
          <img
            src={data.img}
            alt=""
            class={`w-full md:w-1/2 h-auto max-h-[350px] ${attribute}  rounded-t-xl md:rounded-l-xl md:rounded-tr-none`}
          />
          <div class="w-full md:w-1/2 space-y-5 pb-4">
            <p class="px-4 text-left font-bold text-[16px] pt-4">
              {data.title}
            </p>
            <p
              class="mx-4 pt-4 text-left text-gray-700 text-[14px] leading-normal pb-4 font-normal"
            >
              {data.text}
            </p>
           
              <ul
                class="mx-4 mb-4 list-inside space-y-5 text-gray-700 font-normal text-[14px]"
              > {#if data.list}
              {#each data.list as item}
                <li class="flex item-start">
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
