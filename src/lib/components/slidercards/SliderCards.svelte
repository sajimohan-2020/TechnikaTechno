<script lang="ts">
  import Slidertables from "$lib/components/slidertables/SliderTables.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";

  let hiddenCardsContainer: HTMLDivElement | null = null;
  let innerWidth = 0;

  $: isMobile = innerWidth < 640;
  $: isTablet = innerWidth >= 640 && innerWidth < 1024;
  $: isDesktop = innerWidth >= 1024 && innerWidth < 1280;
  $: isXl = innerWidth >= 1280;

  // Match card widths with design
  $: cardWidth = isMobile
    ? 300
    : innerWidth < 768
      ? 340
      : isTablet
        ? 400
        : isDesktop
          ? 580
          : 460;

  $: gap = isMobile ? 12 : isTablet ? 24 : 24;

  // Container width + cards per view (kept for layout logic if needed)
  $: containerWidth = isMobile
    ? innerWidth - 32
    : isTablet
      ? innerWidth * 0.6
      : isDesktop
        ? innerWidth * 0.6
        : innerWidth * 0.65;

  // More conservative calculation for Safari compatibility (still available if needed)
  $: cardsPerView = Math.floor((containerWidth - gap) / (cardWidth + gap));
  $: actualCardsPerView = Math.max(1, cardsPerView);

  // Keep the data interfaces
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
    b7?: string;
    b7text?: string;
    b8?: string;
    b8text?: string;
  }
  interface tables {
    th1: string;
    th2: string;
    td1: string[];
    td2: string[];
  }
  interface cardData {
    cardNo: string;
    cardtitle: string;
    cardText?: string;
    cardText2?: string;
    bullet?: points[];
    tables?: tables[];
  }

  export let cardData: cardData[] = [];

  interface cardMain {
    cardHeader: string;
    cardPara?: string;
  }
  export let cardMain: cardMain[] = [];

  // SAFARI-SAFE SCROLL FUNCTION (NO RESTRICTIONS)
  function scrollHiddenCards(direction: "left" | "right") {
    if (!hiddenCardsContainer) return;

    const maxScroll =
      hiddenCardsContainer.scrollWidth - hiddenCardsContainer.clientWidth;

    const scrollStep = cardWidth + gap;

    if (direction === "left") {
      hiddenCardsContainer.scrollLeft = Math.max(
        0,
        hiddenCardsContainer.scrollLeft - scrollStep
      );
    } else {
      hiddenCardsContainer.scrollLeft = Math.min(
        maxScroll,
        hiddenCardsContainer.scrollLeft + scrollStep
      );
    }
  }

  // Reset scroll on screen size change (keeps behavior consistent)
  let previousIsMobile = isMobile;
  $: if (previousIsMobile !== isMobile) {
    if (hiddenCardsContainer) {
      hiddenCardsContainer.scrollLeft = 0;
    }
    previousIsMobile = isMobile;
  }
</script>

<svelte:window bind:innerWidth />

<section class="bg-[#F4F9FF] flex flex-col gap-5 p-4">
  <!-- Keep this block -->
  <div class="md:px-[3rem] pt-10">
    <Heading size="headingS25" className="font-bold text-[#1E3A8A] mb-3">
      Step-by-step procedure of conducting Earth Pit Testing
    </Heading>
  </div>

  <div class="flex flex-col lg:flex-row gap-5 px-4 xl:px-9">
    <!-- Left Section -->
    <div class="lg:pl-8 lg:pt-5 lg:w-[30%] xl:w-[35%] w-full px-4 lg:px-0 pt-8">
      {#each cardMain as cardDetails}
        <p class="text-2xl font-semibold text-[#1E3A8A] mb-6">
          {cardDetails.cardHeader}
        </p>
        <p
          class="text-gray-700 xl:text-[18px] lg:text-[16px] md:text-[15px] text-[15px] mb-8 lg:mb-12 text-left"
        >
          {cardDetails.cardPara}
        </p>
      {/each}

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex justify-start items-center gap-10 mt-4 mb-4">
        <button
          class="bg-[#2D8AE7] text-white rounded-full h-16 w-16 p-2 hover:bg-blue-600 transition-colors
          flex items-center justify-center"
          on:click={() => scrollHiddenCards("left")}
          aria-label="Scroll left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          class="bg-[#2D8AE7] text-white rounded-full h-16 w-16 p-2 hover:bg-blue-600 transition-colors
          flex items-center justify-center"
          on:click={() => scrollHiddenCards("right")}
          aria-label="Scroll right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Right (Card Slider) -->
    <div
      class="lg:relative lg:w-[60%] xl:w-[65%] w-full lg:mr-5 lg:mt-16 mt-8 md:ml-[1.1rem] lg:ml-10"
    >
      <div
        class="flex gap-3 md:gap-6 lg:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
        bind:this={hiddenCardsContainer}
        style="scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;"
      >
        {#each cardData as card}
          <div
            class="bg-white w-[300px] sm:w-[340px] md:w-[400px] lg:w-[580px] xl:w-[460px]
            mx-auto rounded-xl mb-4 p-2 sm:p-6 lg:p-[45px] xl:p-[55px]
            min-h-fit h-auto shrink-0 snap-start"
          >
            <p class="text-4xl lg:text-6xl text-[#2D8AE7] font-[700]">
              {card.cardNo}
            </p>
            <p
              class="text-lg lg:text-[20px] text-[#1E3A8A] font-[500] py-4 text-wrap"
            >
              {card.cardtitle}
            </p>
            <p class="text-sm text-left">
              {card.cardText}<br />{card.cardText2}
            </p>

            {#if card.bullet}
              {#each card.bullet as point}
                <ul
                  class="list-disc pl-4 text-sm leading-relaxed space-y-1 m-4"
                >
                  {#if point.b1}<li><b>{point.b1}</b>: {point.b1text}</li>{/if}
                  {#if point.b2}<li><b>{point.b2}</b>: {point.b2text}</li>{/if}
                  {#if point.b3}<li><b>{point.b3}</b> {point.b3text}</li>{/if}
                  {#if point.b4}<li><b>{point.b4}</b> {point.b4text}</li>{/if}
                  {#if point.b5}<li><b>{point.b5}</b> {point.b5text}</li>{/if}
                  {#if point.b6}<li><b>{point.b6}</b> {point.b6text}</li>{/if}
                  {#if point.b7}<li><b>{point.b7}</b> {point.b7text}</li>{/if}
                  {#if point.b8}<li><b>{point.b8}</b> {point.b8text}</li>{/if}
                </ul>
              {/each}
            {/if}

            {#if card.cardNo == "03"}
              <div class="mt-3">
                <Slidertables />
              </div>
            {/if}
          </div>
        {/each}
      </div>

      <!-- Mobile Navigation -->
      <div
        class="flex lg:hidden justify-center items-center gap-6 mt-6 pb-8 mb-4"
      >
        <button
          class="bg-[#2D8AE7] text-white rounded-full h-16 w-16 p-2 hover:bg-blue-600 transition-colors
          flex items-center justify-center"
          on:click={() => scrollHiddenCards("left")}
          aria-label="Scroll left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          class="bg-[#2D8AE7] text-white rounded-full h-16 w-16 p-2 hover:bg-blue-600 transition-colors
          flex items-center justify-center"
          on:click={() => scrollHiddenCards("right")}
          aria-label="Scroll right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>

<style>
  .no-scrollbar {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
</style>
