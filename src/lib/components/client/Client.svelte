<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { goto } from "$app/navigation";

    let carousel2Inner: HTMLDivElement;
    let currentIndex2 = 0;
    let itemsPerScreen2: number;
    let totalItems2: number;
    let interval: ReturnType<typeof setInterval>;
    let startX2: number | null = null;
    let endX2: number | null = null;

    const moveCarousel2 = (direction = 1) => {
        currentIndex2 += direction;
        const offset2 = currentIndex2 * -100 / itemsPerScreen2;
        carousel2Inner.style.transform = `translateX(${offset2}%)`;

        if (currentIndex2 >= totalItems2) {
            setTimeout(() => {
                carousel2Inner.style.transition = 'none';
                currentIndex2 = 0;
                carousel2Inner.style.transform = `translateX(0)`;
                setTimeout(() => {
                    carousel2Inner.style.transition = 'transform 0.5s ease-in-out';
                }, 50);
            }, 500);
        } else if (currentIndex2 < 0) {
            setTimeout(() => {
                carousel2Inner.style.transition = 'none';
                currentIndex2 = totalItems2 - 1;
                const offset2 = currentIndex2 * -100 / itemsPerScreen2;
                carousel2Inner.style.transform = `translateX(${offset2}%)`;
                setTimeout(() => {
                    carousel2Inner.style.transition = 'transform 0.5s ease-in-out';
                }, 50);
            }, 500);
        }
    };

    const handleResize = () => {
        if (typeof window !== 'undefined') {
            currentIndex2 = 0;
            itemsPerScreen2 = getItemsPerScreen();
            carousel2Inner.style.transition = 'none';
            carousel2Inner.style.transform = `translateX(0)`;
            setTimeout(() => {
                carousel2Inner.style.transition = 'transform 0.5s ease-in-out';
            }, 50);
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

    const getItemsPerScreen = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth <= 678) return 1;
            if (window.innerWidth <= 991) return 3;
            return 4;
        }
        return 4; // Default value for SSR
    };

    onMount(() => {
        if (typeof window !== 'undefined') {
            itemsPerScreen2 = getItemsPerScreen();
            totalItems2 = carousel2Inner.children.length;
            for (let i = 0; i < itemsPerScreen2; i++) {
                carousel2Inner.appendChild(carousel2Inner.children[i].cloneNode(true));
            }
            interval = setInterval(() => moveCarousel2(1), 3000);

            window.addEventListener('resize', handleResize);

            return () => {
                clearInterval(interval);
                window.removeEventListener('resize', handleResize);
            };
        }
    });

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        }
    });

    export let imgSrc1;
    export let imgSrc2;
    export let imgSrc3;
    export let imgSrc4;
    export let imgSrc5;
    export let imgAlt1;
    export let imgAlt2;
    export let imgAlt3;
    export let imgAlt4;
    export let imgAlt5;
    export let productLink1;
    export let productLink2;
    export let productLink3;
    export let productLink4;
    export let productLink5;
    export let language;
</script>



<style lang="postcss">
    .carousel2 {
        @apply overflow-hidden w-full relative h-12;
    }
    
    .carousel2-inner {
        @apply flex transition-transform ease-in-out duration-500 will-change-transform;
    }
    
    .carousel2-item {
        @apply box-border px-5 flex justify-center items-center;
        min-width: 25%;
    }
    
    .carousel2-item img {
        @apply w-auto block h-12 text-center;
    }
    
    @media (min-width: 2001px) {
        .carousel2-item {
            min-width: 16.66%;
        }
    }
    
    @media (max-width: 991px) {
        .carousel2-item {
            min-width: 33.33%;
        }
    }
    
    @media (max-width: 678px) {
        .carousel2-item {
            min-width: 100%;
        }
    }
</style>
   

<div class="carousel2">
    <div
        class="carousel2-inner"
        bind:this={carousel2Inner}
        on:touchstart={handleTouchStart2}
        on:touchmove={handleTouchMove2}
        on:touchend={handleTouchEnd2}
    >
        <div class="carousel2-item">
            <a href="#.">
                <img src="{imgSrc1}" alt="{imgAlt1}" />
            </a>
        </div>
        <div class="carousel2-item">
            <a href="#.">
                <img src="{imgSrc2}" alt="{imgAlt2}" />
            </a>
        </div>
        <!-- <div class="carousel2-item">
            <a href="#.">
                <img src="{imgSrc3}" alt="{imgAlt3}" />
            </a>
        </div> -->
        <div class="carousel2-item">
            <a href="/{language}/productdetails/{productLink3}" on:click|preventDefault={() => goto(`/${language}/productdetails/${productLink3}`)}>
                <img src="{imgSrc3}" alt="{imgAlt3}" />
            </a>
        </div>
        <div class="carousel2-item">
            <a href="/{language}/productdetails/{productLink4}" on:click|preventDefault={() => goto(`/${language}/productdetails/${productLink4}`)}>
                <img src="{imgSrc4}" alt="{imgAlt4}" />
            </a>
        </div>
        <div class="carousel2-item">
            <a href="/{language}/productdetails/{productLink5}" on:click|preventDefault={() => goto(`/${language}/productdetails/${productLink5}`)}>
                <img src="{imgSrc5}" alt="{imgAlt5}" />
            </a>
        </div>
        <!-- Add more items as needed -->
    </div>
</div>
    
