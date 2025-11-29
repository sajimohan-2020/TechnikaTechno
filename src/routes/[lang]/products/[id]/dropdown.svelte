<script lang="ts">
  import { slide } from "svelte/transition";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  let openIndex: number = 0;

  interface contents {
    title?: string;
    bulletin?: bulletin[];
    img?: string;
  }
  export let contents: contents[] = [];

  interface bulletin {
    b1?: string;
    b1text?: string;
    b2?: string;
    b2text?: string;
    b3?: string;
    b3text?: string;
    b4?: string;
    b4text?: string;
    b5?: string;
    b5text?: string;
    b6?: string;
    b6text?: string;
    b7?: string;
    b7text?: string;
  }
</script>

<div class="">
  {#each contents as content, i}
    <div class="bg-white w-full rounded-xl mb-[20px]">
      <button
        class="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        on:click={() => (openIndex = openIndex === i ? -1 : i)}
      >
        <Heading size="headingS20" className="font-semibold text-[#1E3A8A] pl-5"
          >{content.title}</Heading
        >
        {#if openIndex === i}
          <span class="text-[#C7D200] text-3xl font-light pr-5">
            <svg
              width="30"
              height="15"
              viewBox="0 0 35 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.3909 0.763552C18.8979 0.274651 18.2294 0 17.5323 0C16.8352 0 16.1667 0.274651 15.6737 0.763552L0.802546 15.5163C0.551467 15.7569 0.351198 16.0446 0.213425 16.3628C0.0756516 16.681 0.00313242 17.0232 9.92544e-05 17.3695C-0.00293391 17.7157 0.0635802 18.0591 0.195759 18.3796C0.327938 18.7001 0.523136 18.9913 0.769962 19.2362C1.01679 19.481 1.3103 19.6747 1.63337 19.8058C1.95644 19.9369 2.3026 20.0029 2.65165 19.9999C3.00071 19.9969 3.34566 19.925 3.66638 19.7883C3.98711 19.6516 4.27719 19.4529 4.51969 19.2038L17.5323 6.29486L30.5449 19.2038C31.0407 19.6789 31.7048 19.9418 32.394 19.9358C33.0833 19.9299 33.7426 19.6556 34.23 19.1721C34.7174 18.6886 34.9939 18.0345 34.9999 17.3507C35.0059 16.6669 34.7409 16.0082 34.2621 15.5163L19.3909 0.763552Z"
                fill="#0B60B0"
              />
            </svg>
          </span>
        {:else}
          <span class="text-3xl font-light pr-5">
            <svg
              width="30"
              height="15"
              viewBox="0 0 35 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.3909 19.2364C18.8979 19.7253 18.2294 20 17.5323 20C16.8352 20 16.1667 19.7253 15.6737 19.2364L0.802546 4.48369C0.551467 4.24312 0.351198 3.95536 0.213425 3.63719C0.0756516 3.31902 0.00313242 2.97681 9.92544e-05 2.63054C-0.00293391 2.28427 0.0635802 1.94086 0.195759 1.62036C0.327938 1.29987 0.523136 1.00869 0.769962 0.763829C1.01679 0.518968 1.3103 0.325325 1.63337 0.194199C1.95644 0.0630726 2.3026 -0.00291054 2.65165 9.84657e-05C3.00071 0.00310748 3.34566 0.0750491 3.66638 0.211725C3.98711 0.348402 4.27719 0.547074 4.51969 0.796153L17.5323 13.7051L30.5449 0.796153C31.0407 0.321107 31.7048 0.0582483 32.394 0.0641901C33.0833 0.070132 33.7426 0.344399 34.23 0.82792C34.7174 1.31144 34.9939 1.96553 34.9999 2.64931C35.0059 3.33308 34.7409 3.99184 34.2621 4.48369L19.3909 19.2364Z"
                fill="#0B60B0"
              />
            </svg>
          </span>
        {/if}
      </button>
      {#if openIndex === i}
        <div
          class=" pt-5 flex flex-col md:flex-row justify-between lg:px-10"
          transition:slide
        >
          {#if content.bulletin}
            <ul
              class="pl-6 text-gray-900 md:text-sm text-xs leading-relaxed space-y-4 pb-5 font-semibold md:pt-10"
            >
              {#each content.bulletin as bullet}
                {#if bullet.b1}
                  <li class="flex items-start">
                    <span class="inline-block w-4 h-5 mr-2 shrink-0">
                      <img src="/assets/circlehook.svg" alt="" />
                    </span>
                    <div
                      class="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2"
                    >
                      <span class="font-semibold">{bullet.b1}</span>
                      <span>{bullet.b1text}</span>
                    </div>
                  </li>
                {/if}

                {#if bullet.b2}
                  <li class="flex items-start">
                    <span class="inline-block w-4 h-5 mr-2 shrink-0">
                      <img src="/assets/circlehook.svg" alt="" />
                    </span>
                    <div
                      class="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2"
                    >
                      <span class="font-semibold">{bullet.b2}</span>
                      <span>{bullet.b2text}</span>
                    </div>
                  </li>
                {/if}

                {#if bullet.b3}
                  <li class="flex items-start">
                    <span class="inline-block w-4 h-5 mr-2 shrink-0">
                      <img src="/assets/circlehook.svg" alt="" />
                    </span>
                    <div
                      class="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2"
                    >
                      <span class="font-semibold">{bullet.b3}</span>
                      <span>{bullet.b3text}</span>
                    </div>
                  </li>
                {/if}
              {/each}
            </ul>

            <div
              class="lg:h-[230px] lg:w-[300px] md:h-[200px] md:w-[250px] h-[150px] w-[190px] ml-12 mb-3 mr-3"
            >
              <img src={content.img} alt="" />
            </div>
          {/if}
        </div>
      {/if}
      <div class="border-t border-white"></div>
    </div>
  {/each}
</div>
