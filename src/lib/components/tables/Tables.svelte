<script lang="ts">
  interface tables {
    title: string;
    description: string;
    descriptiontxt: string;
    typicalLocation: string;
    typicalLocationtxt: string;
    cause: string;
    causetxt: string;
  }
  export let tables: tables[] = [];
</script>

<div
  class="bg-[#F4F9FF] p-5 md:p-[30px] lg:p-[50px] flex justify-center items-center mt-6"
>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
    {#each tables as items}
      <div
        class="h-auto xl:w-[400px] lg:w-[300px] md:w-[350px] bg-white rounded-xl shadow-md p-7 space-y-4"
      >
        <p class="text-center font-bold text-sm md:text-lg text-[#1E3A8A] py-3">
          {items.title}
        </p>
        <p
          class="text-[#787878] flex gap-2 text-sm md:text-sm lg:text-sm xl:text-md"
        >
          <span>
            <svg
              width="5"
              height="20"
              viewBox="0 0 5 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="5" height="20" fill="#C7D200" />
            </svg>
          </span>
          {items.description}
        </p>
        <p
          class="text-[#2F2F2F] text-xs md:text-sm lg:text-sm xl:text-md bg-[#F9F9F9] p-2 rounded-md"
        >
          {items.descriptiontxt}
        </p>
        <p
          class="text-[#787878] text-sm md:text-sm lg:text-sm xl:text-md flex gap-2"
        >
          <span>
            <svg
              width="5"
              height="20"
              viewBox="0 0 5 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="5" height="20" fill="#C7D200" />
            </svg>
          </span>
          {items.typicalLocation}
        </p>
        <p
          class="text-[#2F2F2F] bg-[#F9F9F9] text-xs md:text-sm lg:text-sm xl:text-md p-2 rounded-md"
        >
          {items.typicalLocationtxt}
        </p>
        <p
          class="text-[#787878] text-sm md:text-sm lg:text-sm xl:text-md flex gap-2"
        >
          <span>
            <svg
              width="5"
              height="20"
              viewBox="0 0 5 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="5" height="20" fill="#C7D200" />
            </svg>
          </span>
          {items.cause}
        </p>
        <p
          class="text-[#2F2F2F] text-xs md:text-sm lg:text-sm xl:text-md bg-[#F9F9F9] p-2 rounded-md"
        >
          {items.causetxt}
        </p>
      </div>
    {/each}
  </div>
</div>
