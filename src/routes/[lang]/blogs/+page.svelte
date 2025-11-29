<script lang="ts">
  import { PUBLIC_APIURL } from "$env/static/public";
  import Services from "$lib/components/services/Services.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<!-- Banner Section -->

<!-- Blog + Services Section -->

<div class=" bg-[linear-gradient(135deg,#e0f2ff,#fffde7)] w-full h-fill">
  <div class="pt-24 sm:pt-28 lg:pt-28">
    <div
      class="flex items-center justify-center relative top-[20px] sm:top-[6px] md:top-0"
    >
      <div
        class="w-full h-[215px] md:h-[230px] lg:h-[300px] xl:h-[360px] 2xl:h-[385px] 2.5xl:h-[470px] 5xl:h-[1000px]"
      >
        <img
          src="{PUBLIC_APIURL}/assets/{data.services.service_image17}"
          alt="IPEC"
          class="h-full object-cover object-center md:object-fill xl:w-full"
        />
      </div>
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div
        class="hidden md:block absolute bottom-0 right-12 bg-white px-8 py-4 shadow-md 5xl:px-[15rem] 5xl:py-[4rem]"
      >
        <nav class="flex space-x-2 5xl:text-[4rem] text-base">
          <P
            size="texts18"
            className="text-[#1E3A8A] 5xl:text-[4rem] hover:text-[#00245a]"
          >
            <a href="/" class=""> Home </a>
          </P>
          <span>/</span>
          <P
            size="texts18"
            className="text-[#1E3A8A] 5xl:text-[4rem] hover:text-[#00245a]"
          >
            <a href="/" class=""> Blogs </a>
          </P>
        </nav>
      </div>
    </div>
  </div>
  <div class="md:container px-4 mx-auto md:px-[55px] text-left">
    <div class=" pt-14">
      <div class="flex items-center justify-center pt-10 gap-3">
        <Heading
          size="h2bold"
          as="h1"
          className=" font-bold text-center text-[#1E3A8A] "
        >
          Blogs
        </Heading>
        <Yellowline
          topLine="lg:w-10 lg:h-4 w-8 h-3 pt-2"
          bottomLine="lg:h-4 lg:w-10 ml-4 w-8 h-3 pt-2"
        />
      </div>
    </div>

    <!-- Services List -->

    <div
      class="
    w-full
    h-auto
    pb-20 pt-10 mx-auto
  "
    >
      <div class="flex gap-6 5xl:gap-12">
        <Services lang={data.langParam} blogData={data.blogs} />
      </div>
    </div>
  </div>
  <!-- link="/{data.langParam}/blogitems"
      description="Earth Pit Testing is an essential electrical safety process that verifies the reliability and..."
      imgSrc="{PUBLIC_APIURL}/assets/{data.services.service_image20}"
      title={data.services.translations[0].service_title18} -->
</div>
