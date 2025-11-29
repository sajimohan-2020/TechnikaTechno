<script lang="ts">
  import Heading from "$lib/components/heading/Heading.svelte";

  interface Industry {
    icon: string;
    title: string;
  }

  const industries: Industry[] = [
    { icon: "/assets/logo/oilandgas.png", title: "Oil & Gas" },
    { icon: "/assets/logo/power.png", title: "Powergen" },
    { icon: "/assets/logo/marine.png", title: "Marine" },
    { icon: "/assets/logo/steel.svg", title: "Steel" },
    { icon: "/assets/logo/chemical.svg", title: "Chemical" },
    { icon: "/assets/logo/wind.svg", title: "Wind" },
    { icon: "/assets/logo/automotive.svg", title: "Automotive" },
    { icon: "/assets/logo/mining.svg", title: "Mining" },
    { icon: "/assets/logo/paper.svg", title: "Pulp & Paper" },
    { icon: "/assets/logo/food.svg", title: "Food & Beverage" },
    { icon: "/assets/logo/pharmacy.svg", title: "Pharma" },
    { icon: "/assets/logo/construction.png", title: "Construction" },
  ];
</script>

<section
  class=" scroll-mt-[100px] w-full py-6 sm:py-8 md:py-12 lg:py-14 bg-gradient-to-r from-[#2196D6] to-[#1566A0] flex flex-col items-center px-4"
  id="industries"
>
  <Heading
    size="bannerMaih1"
    className="font-bold text-white mb-6 sm:mb-8 md:mb-10 text-center"
  >
    Serving Key Industries
  </Heading>

  <div
    class="flex flex-wrap justify-center gap-4 w-full container mx-auto px-5 md:px-[55px]"
  >
    {#each industries as item}
      <div
        class="bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg
               flex-[1_1_calc(14.28%-1rem)] max-w-[14.28%] min-w-[120px] min-h-[160px]"
      >
        <img
          src={item.icon}
          alt={item.title}
          class="w-16 h-16 object-contain transition-transform duration-300 hover:scale-110"
        />
        <span class="font-bold text-[#0B60B0] text-sm text-center mt-4">
          {item.title}
        </span>
      </div>
    {/each}
  </div>
</section>
