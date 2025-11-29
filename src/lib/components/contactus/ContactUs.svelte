<script lang="ts">
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import BlueArrow from "$lib/icons/svgs/blueArrow.svelte";

  interface services {
    name: string;
    link: string;
  }

  export let allServices: services[] = [];
</script>

<div
  class="bg-[#F8F8F8] p-6 rounded-lg shadow-md space-y-8 md:col-span-2 h-fit border border-[#0B60B0]"
>
  <div>
    <Heading size="bannerMaih1" className="font-bold text-[#1e3a8a] mb-4">
      Contact us
    </Heading>
    <div class="space-y-4 text-gray-700">
      <div class="flex items-center gap-3">
        <span class="flex items-center lg:pt-1 lg:max-w-5 max-w-3">
          <img src="/assets/mail.svg" alt="" />
        </span>

        <a
          href="mailto:info@assetconditionmonitoring.com"
          class="xl:text-[16px] lg:text-[14px] md:text-[10px] text-[15px]"
          >info@assetconditionmonitoring.com</a
        >
      </div>
      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="lg:h-5 lg:w-5 h-4 w-4 mr-2 text-[#0B60B0]"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
          />
        </svg>
        <p class="xl:text-[16px] lg:text-[14px] md:text-[15px] text-[15px]">
          +971-2-555-1-783
        </p>
      </div>
    </div>
  </div>
  <div>
    <h2 class="text-2xl font-bold text-[#1e3a8a] mb-4">Related services</h2>
    <ul class="space-y-6 text-gray-700">
      {#each allServices as service}
        <li
          class="flex items-start hover:ml-2 transition-all duration-300 ease-in-out"
        >
          <a href={service.link} class="flex items-start">
            <span class="flex items-center lg:pt-1">
              <BlueArrow />
            </span>
            <p class="xl:text-[16px] lg:text-[14px] md:text-[15px] text-[15px]">
              {service.name}
            </p>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
