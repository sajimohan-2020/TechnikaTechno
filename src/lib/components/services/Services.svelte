<script>
    import { PUBLIC_APIURL } from "$env/static/public";
  import { language } from "$lib/lang";
  // export let imgSrc;
  // export let title;
  // export let description;
  // export let link;
  export let lang;
  export let blogData;
</script>

{#each blogData as blogItems}
    <a href={`/${lang}/blogs/${blogItems.blog_link}`} class="block bg-white rounded-xl  w-[40%] shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-auto">
  <!-- Image -->
  <div class="p-4 ">
    <img src="{PUBLIC_APIURL}/assets/{blogItems.blog_banner}" alt="blogs" class="w-full h-48 xl:h-72 5xl:h-[36rem] object-cover rounded-md">
  </div>

  <!-- Content -->
  <div class="px-4 pb-4 flex flex-col h-[calc(100%-theme(spacing.48)-theme(spacing.8))] xl:h-[calc(100%-theme(spacing.72)-theme(spacing.8))] 5xl:h-[calc(100%-36rem-theme(spacing.8))]">
    <h3 class="text-lg xl:text-xl 5xl:text-6xl font-semibold text-[#1E3A8A] leading-snug mb-2 5xl:mb-6">
      {blogItems.translations[0].blog_title}
    </h3>
    <p class="text-sm xl:text-base 5xl:text-[55px]/[5rem] text-[#2F2F2F] mb-4 5xl:mb-8 flex-grow">
      {blogItems.translations[0].blog_text}
    </p>

    <!-- Read More -->
    <div class="flex items-center justify-end gap-2 text-[#0070B9] font-medium cursor-pointer hover:text-[#C7D200] transition-colors duration-300 mt-auto">
      <span class="text-sm xl:text-base 5xl:text-4xl">Read More</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke-width="2" stroke="#C7D200" class="w-5 h-5 xl:w-6 xl:h-6 5xl:w-16 5xl:h-16">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
</a>

{/each}

