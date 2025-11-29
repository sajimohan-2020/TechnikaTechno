<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { PUBLIC_APIURL } from "$env/static/public";

  let carousel2Inner: HTMLDivElement;
  let currentIndex2 = 0;
  let totalItems2: number;
  let interval: ReturnType<typeof setInterval>;
  let startX2: number | null = null;
  let endX2: number | null = null;

  const moveCarousel2 = (direction = 1) => {
    currentIndex2 += direction;
    const offset2 = currentIndex2 * -100;
    carousel2Inner.style.transform = `translateX(${offset2}%)`;

    if (currentIndex2 === totalItems2) {
      // Reached the cloned slide, jump to the first slide smoothly
      setTimeout(() => {
        carousel2Inner.style.transition = "none"; // Disable transition
        currentIndex2 = 0;
        carousel2Inner.style.transform = `translateX(0)`; // Jump to the first slide
        setTimeout(() => {
          carousel2Inner.style.transition = "transform 2.4s ease-in-out"; // Re-enable smooth transition
        }, 60);
      }, 2400); // Match this timeout with the transition duration
    } else if (currentIndex2 < 0) {
      // Handling left overflow
      setTimeout(() => {
        carousel2Inner.style.transition = "none";
        currentIndex2 = totalItems2 - 1;
        const offset2 = currentIndex2 * -100;
        carousel2Inner.style.transform = `translateX(${offset2}%)`;
        setTimeout(() => {
          carousel2Inner.style.transition = "transform 2.4s ease-in-out";
        }, 60);
      }, 600);
    }
  };

  const handleResize = () => {
    if (typeof window !== "undefined") {
      currentIndex2 = 0;
      carousel2Inner.style.transition = "none";
      carousel2Inner.style.transform = `translateX(0)`;
      setTimeout(() => {
        carousel2Inner.style.transition = "transform 2.4s ease-in-out";
      }, 60);
    }
  };

  const handleTouchStart2 = (event: TouchEvent) => {
    const firstTouch = event.touches[0];
    startX2 = firstTouch.clientX;
  };

  const handleTouchMove2 = (event: TouchEvent) => {
    if (!startX2) return;
    const touch = event.touches[0];
    endX2 = touch.clientX;
  };

  const handleTouchEnd2 = () => {
    if (!startX2 || !endX2) return;
    const diffX2 = startX2 - endX2;
    if (Math.abs(diffX2) > 50) {
      if (diffX2 > 0) {
        moveCarousel2(1);
      } else {
        moveCarousel2(-1);
      }
    }
    startX2 = null;
    endX2 = null;
  };

  onMount(() => {
    if (typeof window !== "undefined") {
      totalItems2 = carousel2Inner.children.length;
      carousel2Inner.appendChild(carousel2Inner.children[0].cloneNode(true)); // Clone the first slide
      interval = setInterval(() => moveCarousel2(1), 6000);

      window.addEventListener("resize", handleResize);

      return () => {
        clearInterval(interval);
        window.removeEventListener("resize", handleResize);
      };
    }
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    }
  });
  export let sliderText1;
  export let sliderText2;
  export let sliderButton1;
  export let sliderButton2;
  export let homeData;
  export let language;
</script>

<div class="carousel2">
  <div
    class="carousel2-inner"
    bind:this={carousel2Inner}
    on:touchstart={handleTouchStart2}
    on:touchmove={handleTouchMove2}
    on:touchend={handleTouchEnd2}
  >
    <div class="carousel2-item relative">
      <img
        src="{PUBLIC_APIURL}/assets/{homeData.slider_image1}"
        alt="SONOTEC"
        class="w-full hidden md:block h-full"
      />
      <img
        src="{PUBLIC_APIURL}/assets/{homeData.slider_image1_responsive}"
        alt="SONOTEC"
        class="w-full md:hidden h-full"
      />
      <div
        class="absolute -z-1 inset-0 w-full md:w-2/3 bg-white opacity-70 md:opacity-80 rounded-md custom-clip-path"
      >
        <div
          class="absolute grid inset-1 flex items-center justify-left z-50 md:pl-4 lg:pl-14 slideleft"
        >
          <div
            class="text-[#00245a] pl-2 text-4xl md:text-3xl lg:text-4xl xl:text-[3.4rem] xl:leading-[3.2rem] 2xl:text-[4.1rem] 2xl:leading-[4rem] font-bold z-50 opacity-100 lg:space-y-4"
          >
            {@html sliderText1}
            <div class="flex justify-left opacity-100 pt-4 gap-4">
              <button
                class="bg-[#0B60B0] hover:bg-[#19142d] text-white rounded-lg"
              >
                <a href="/{language}/services">
                  <div class="flex text-sm xl:text-sm px-4 py-2">
                    {sliderButton1}
                  </div>
                </a>
              </button>
              <button
                class="bg-[#0B60B0] hover:bg-[#19142d] text-white rounded-lg"
              >
                <a href="/{language}/products">
                  <div class="flex text-sm xl:text-sm px-4 py-2">
                    {sliderButton2}
                  </div>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel2-item relative">
      <img
        src="{PUBLIC_APIURL}/assets/{homeData.slider_image2}"
        alt="SONOTEC"
        class="w-full hidden md:block h-full"
      />
      <img
        src="{PUBLIC_APIURL}/assets/{homeData.slider_image2_responsive}"
        alt="SONOTEC"
        class="w-full md:hidden h-full"
      />
      <div
        class="absolute -z-1 inset-0 w-full md:w-2/3 bg-white opacity-70 md:opacity-80 rounded-md custom-clip-path"
      >
        <div
          class="absolute grid inset-1 flex items-center justify-left z-50 md:pl-4 lg:pl-14 slideleft"
        >
          <div
            class="text-[#00245a] pl-2 text-4xl md:text-3xl lg:text-4xl xl:text-[3.4rem] xl:leading-[3.2rem] 2xl:text-[4.1rem] 2xl:leading-[5rem] font-bold z-50 opacity-100 lg:space-y-4 md:w-3/4 2xl:w-3/4"
          >
            {@html sliderText2}
            <div class="flex justify-left opacity-100 pt-4 gap-4">
              <button
                class="bg-[#0B60B0] hover:bg-[#19142d] text-white rounded-lg"
              >
                <a href="/{language}/services">
                  <div class="flex text-sm xl:text-sm px-4 py-2">
                    {sliderButton1}
                  </div>
                </a>
              </button>
              <button
                class="bg-[#0B60B0] hover:bg-[#19142d] text-white rounded-lg"
              >
                <a href="/{language}/products">
                  <div class="flex text-sm xl:text-sm px-4 py-2">
                    {sliderButton2}
                  </div>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Add more items as needed -->
  </div>
</div>

<style lang="postcss">
  .carousel2 {
    @apply overflow-hidden w-full relative;
  }

  .carousel2-inner {
    @apply flex transition-transform ease-in-out duration-[2.4s] will-change-transform;
    /* Add a 300ms delay before the transition starts */
  }

  .carousel2-item {
    @apply box-border grid justify-center items-center;
    min-width: 100%; /* Adjusted to 100% for one item per screen */
    max-width: 100%;
    height: 100%;
  }

  .carousel2-item img {
    @apply w-full h-full object-cover;
    width: 100%;
  }
  @media only screen and (min-width: 767px) {
    .custom-clip-path {
      clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);
    }
  }
  @media only screen and (min-width: 2000px) {
    .slideleft {
      padding-left: 24rem;
    }
  }
</style>
