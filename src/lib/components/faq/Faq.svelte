<script lang="ts">
  import { slide } from "svelte/transition";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";

  let openIndex: number = 0;

  interface points {
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
  }

  interface faqs {
    q?: string;
    a?: string;
    a2?: string;
    a3?: string;
    text?: string;
    points?: points[];
  }

  export let faqs: faqs[] = [];
</script>

<div class="w-full flex justify-center items-center py-12 bg-transparent">
  <div
    class="w-full mx-4 sm:mx-5 md:max-w-[51rem] lg:max-w-[58rem] xl:max-w-[80rem] 2xl:max-w-[85rem] bg-[#0B60B0] rounded-2xl p-6 sm:p-8 md:p-12"
  >
    <Heading size="bannerMaih1" className=" font-bold text-white mb-8">
      Frequently Asked Questions
    </Heading>
    <div>
      {#each faqs as faq, i}
        <div>
          <button
            class="flex justify-between items-center w-full py-4 text-left focus:outline-none"
            on:click={() => (openIndex = openIndex === i ? -1 : i)}
          >
            <P size="texts18" className="font-medium text-white ">{faq.q}</P>
            {#if openIndex === i}
              <span class="text-white text-3xl font-light">−</span>
            {:else}
              <span class="text-white text-3xl font-light">+</span>
            {/if}
          </button>
          {#if openIndex === i}
            <div class="pl-1 pb-2 pr-2" transition:slide>
              {#if faq.a}
                <P size="texts16" className="text-white leading-relaxed"
                  >{faq.a} <br /></P
                >
              {/if}
              {#if faq.a2}
                <P size="texts16" className="text-white leading-relaxed pt-3"
                  >{faq.a2} <br /></P
                >
              {/if}
              {#if faq.a3}
                <P size="texts16" className="text-white leading-relaxed pt-3"
                  >{faq.a3} <br /></P
                >
              {/if}
              {#if faq.points}
                <ul
                  class="list-disc pl-6 text-white xl:text-[16px] lg:text-[14px] md:text-[12px] text-[10px] leading-relaxed space-y-1"
                >
                  {#each faq.points as point}
                    {#if point.b1 || point.b1text}
                      <li><b>{point.b1}</b> {point.b1text}</li>
                    {/if}
                    {#if point.b2 || point.b2text}
                      <li><b>{point.b2}</b> {point.b2text}</li>
                    {/if}
                    {#if point.b3}
                      <li><b>{point.b3}</b> {point.b3text}</li>
                    {/if}
                    {#if point.b4}
                      <li><b>{point.b4}</b> {point.b4text}</li>
                    {/if}
                    {#if point.b5}
                      <li><b>{point.b5}</b> {point.b5text}</li>
                    {/if}
                    {#if point.b6}
                      <li><b>{point.b6}</b> {point.b6text}</li>
                    {/if}
                  {/each}
                </ul>
              {/if}
              <p
                class="text-white xl:text-[16px] lg:text-[14px] md:text-[12px] text-[10px] leading-relaxed"
              >
                {faq.text}
              </p>
            </div>
          {/if}

          <div class="border-t border-white"></div>
        </div>
      {/each}
    </div>
  </div>
</div>
