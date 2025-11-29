<script lang="ts">
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  interface listmodel {
    img?: string;
    title?: string;
    text?: string;
  }
  export let lists: listmodel[] = [];
  export let mainheading: string = "";
  export let paragraph: string = "";
  export let sideheading: string = "";
</script>

<section id="benefits" class=" py-16 scroll-mt-20 bg-[#E2EFFF] w-full mt-14">
  <div class="container mx-auto px-5 md:px-[55px] text-left">
    <div>
      <Heading size="headingS25" className="font-semibold text-[#383C48] mb-6">
        {mainheading}
      </Heading>
      {#if paragraph}
        <P
          size="texts18"
          className="text-gray-700 leading-relaxed mb-8 xl:text-[18px] lg:text-[16px] md:text-[15px] text-[15px]"
        >
          {paragraph}
        </P>
      {/if}
      {#if sideheading}
        <h2
          class=" font-bold text-[#1e3a8a] mb-12 text-center md:text-left xl:text-[18px] lg:text-[16px] md:text-[15px] text-[14px]"
        >
          {sideheading}
        </h2>
      {/if}
    </div>

    <div class="mt-16">
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-11">
        {#each lists as listboxes}
          <li class="gap-3 flex items-start px-4">
            <div class="mt-1 flex-shrink-0">
              <img
                src={listboxes.img}
                alt={listboxes.title}
                class="md:w-7 md:h-7 w-4 h-4 object-contain"
              />
            </div>
            <div>
              <h5
                class="font-semibold text-[#0B60B0] capitalize xl:text-[22px] lg:text-[18px] md:text-[17px] text-[16px]"
              >
                {listboxes.title}
              </h5>
              <p
                class="font-normal xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px]"
              >
                {listboxes.text}
              </p>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>
