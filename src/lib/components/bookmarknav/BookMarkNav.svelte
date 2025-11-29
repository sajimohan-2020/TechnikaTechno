<script lang="ts">
  export let hoverColor: string = "";
  export let bgColor: string = "";
  export let textcolor: string = "";

  interface navitems {
    href: string;
    text: string;
  }
  export let items: navitems[] = [];
</script>

<div class={`${bgColor} sticky top-0 z-50 hidden sm:block`}>
  <div class="container mx-auto px-4">
    <nav class="flex justify-between items-center py-6">
      {#each items as item}
        <a
          href={item.href}
          class={`${textcolor} hover:${hoverColor} transition-colors duration-300 relative group flex-1 text-center text-[10px] md:text-[11px] lg:text-sm`}
        >
          {item.text}
          <span
            class="absolute bottom-0 left-0 w-full h-0.5 bg-[#E6FF00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          ></span>
        </a>
      {/each}
    </nav>
  </div>
</div>
