<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  import Sonotec from "$lib/logos/sonotec.svelte";
  import Sonites from "$lib/logos/sonites.svelte";
  import Fluck from "$lib/logos/fluck.svelte";
  import Erbassed from "$lib/logos/erbassed.svelte";
  import Bluedark from "$lib/logos/bluedark.svelte";

  let carousel2Inner: HTMLDivElement;
  let animationFrame: number;
  let isPaused = false;
  let startTime = Date.now();
  let totalWidth = 0;

  const scrollSpeed = 120; // pixels per second - much faster

  const calculateTotalWidth = () => {
    if (carousel2Inner && carousel2Inner.children.length > 0) {
      const itemCount = carousel2Inner.children.length / 3; // We have 3 sets of items
      let width = 0;
      for (let i = 0; i < itemCount; i++) {
        const item = carousel2Inner.children[i] as HTMLElement;
        width +=
          item.offsetWidth +
          parseInt(getComputedStyle(item).marginLeft) +
          parseInt(getComputedStyle(item).marginRight);
      }
      totalWidth = width;
    }
  };

  const moveCarousel = () => {
    if (!isPaused && carousel2Inner && totalWidth > 0) {
      const currentTime = Date.now();
      const elapsed = (currentTime - startTime) / 1000; // seconds
      let translateX = -(elapsed * scrollSpeed) % totalWidth;

      carousel2Inner.style.transform = `translateX(${translateX}px)`;
      animationFrame = requestAnimationFrame(moveCarousel);
    }
  };

  const handleMouseEnter = () => {
    isPaused = true;
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
  };

  const handleMouseLeave = () => {
    if (isPaused) {
      // Resume from current position
      const currentTransform = carousel2Inner.style.transform;
      const currentX = parseFloat(
        currentTransform.match(/translateX\(([^)]+)px\)/)?.[1] || "0"
      );
      startTime = Date.now() + (currentX / scrollSpeed) * 1000;
      isPaused = false;
      moveCarousel();
    }
  };

  const handleTouchStart = () => {
    isPaused = true;
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
  };

  const handleTouchEnd = () => {
    if (isPaused) {
      const currentTransform = carousel2Inner.style.transform;
      const currentX = parseFloat(
        currentTransform.match(/translateX\(([^)]+)px\)/)?.[1] || "0"
      );
      startTime = Date.now() + (currentX / scrollSpeed) * 1000;
      isPaused = false;
      moveCarousel();
    }
  };

  onMount(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        calculateTotalWidth();
        startTime = Date.now();
        moveCarousel();
      }, 100);

      const handleResize = () => {
        calculateTotalWidth();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  });

  onDestroy(() => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
  });

  export let language;
</script>

<div class="w-full">
  <div
    class="carousel2 container"
    role="region"
    aria-label="Product carousel"
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
  >
    <div
      class="carousel2-inner"
      bind:this={carousel2Inner}
      on:touchstart={handleTouchStart}
      on:touchend={handleTouchEnd}
    >
      <!-- First set -->
      <div class="carousel2-item">
        <a href={`/${language}/products/sonotec`}><Sonotec /></a>
      </div>
      <div class="carousel2-item">
        <a href={`/${language}/products/ipec-uae`}><Bluedark /></a>
      </div>
      <div class="carousel2-item">
        <a href={`/${language}/products/fluke-distributor-uae`}><Fluck /></a>
      </div>
      <div class="carousel2-item">
        <p class=""><Sonites /></p>
      </div>
      <div class="carousel2-item">
        <p><Erbassed /></p>
      </div>

      <!-- Second set for seamless loop -->
      <div class="carousel2-item">
        <a href={`/${language}/products/sonotec`}><Sonotec /></a>
      </div>
      <div class="carousel2-item">
        <a href={`/${language}/products/ipec-uae`}><Bluedark /></a>
      </div>
      <div class="carousel2-item">
        <a href={`/${language}/products/fluke-distributor-uae`}><Fluck /></a>
      </div>
      <div class="carousel2-item">
        <p class=""><Sonites /></p>
      </div>
      <div class="carousel2-item">
        <p><Erbassed /></p>
      </div>

      <!-- Third set to ensure continuous flow -->
      <div class="carousel2-item">
        <a href={`/${language}/productdetails/sonotec`}><Sonotec /></a>
      </div>
      <div class="carousel2-item">
        <a href={`/${language}/productdetails/ipec-uae`}><Bluedark /></a>
      </div>
      <div class="carousel2-item">
        <a href={`/${language}/productdetails/fluke-distributor-uae`}
          ><Fluck /></a
        >
      </div>
      <div class="carousel2-item">
        <p class=""><Sonites /></p>
      </div>
      <div class="carousel2-item">
        <p><Erbassed /></p>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .carousel2 {
    @apply overflow-hidden w-full relative;
    height: 100px;
    background-color: #edf6ff;
  }

  .carousel2-inner {
    @apply flex;
    height: 100px;
    width: max-content;
    will-change: transform;
  }

  .carousel2-item {
    @apply box-border px-2 flex-shrink-0 flex items-center justify-center;
    min-width: 12%;
    height: 80px;
    border-radius: 0.5rem;
    margin: 0 2px;
    transform: translateZ(0);
  }

  @media (min-width: 2001px) {
    .carousel2-item {
      min-width: 16.66%;
    }
  }

  @media (max-width: 991px) {
    .carousel2-item {
      min-width: 15.33%;
      margin: 0 1px;
      padding: 0 4px;
    }
  }

  @media (max-width: 678px) {
    .carousel2-item {
      min-width: 10%;
      margin: 0;
      padding: 0 2px;
    }
  }
  @media (min-width: 5120px) {
    .carousel2 {
      height: 200px;
    }

    .carousel2-inner {
      height: 200px;
    }

    .carousel2-item {
      min-width: 20%;
      height: 180px;
      border-radius: 0.75rem;
      margin: 0 8px;
      padding: 0 16px;
      transform: translateZ(0);
    }
  }
</style>
