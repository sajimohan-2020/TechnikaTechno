<script lang="ts">
  // @ts-nocheck
  import Productsitem from "$lib/components/productsitem/ProductsItem.svelte";
  import { PUBLIC_APIURL } from "$env/static/public";

  let email = "";
  let reviewCheck = false;

  export let data;
</script>

<div class="pt-24 sm:pt-28 lg:pt-28">
  <div
    class="flex items-center justify-center relative top-[20px] sm:top-[6px] md:top-0"
  >
    <div class="absolute inset-0 bg-black opacity-20"></div>
    <div
      class="w-full h-[215px] md:h-[230px] lg:h-[300px] xl:h-[360px] 2xl:h-[385px] 2.5xl:h-[470px] 5xl:h-[1000px]"
    >
      <img
        src="{PUBLIC_APIURL}/assets/{data.products.banner_image}"
        alt="IPEC"
        class="h-full object-cover object-left md:object-fill xl:w-full"
      />
    </div>

    <div
      class="hidden md:block absolute bg-white bottom-0 right-12 5xl:px-[15rem] 5xl:py-[4rem] px-8 py-4"
    >
      <nav class="flex space-x-2 5xl:text-[4rem] text-base">
        <a href="/" class="text-[#0B60B0] hover:text-text-[#00245a]"
          >{data.products.translations[0].breadcrumb_text1}</a
        >
        <span class="">/</span>
        <a href="#." class="text-[#0B60B0] hover:text-text-[#00245a]"
          >{data.products.translations[0].breadcrumb_text2}</a
        >
      </nav>
    </div>
  </div>
</div>

<div class="container 5xl:px-[800px] 2.5xl:px-[150px] 2xl:px-[50px]">
  <div class=" text-center pt-10 5xl:pt-[100px]">
    <div class="pb-8">
      <h2
        class="text-3xl md:text-4xl lg:text-5xl 5xl:text-[60px] text-blue-900 font-bold text-center mb-10"
      >
        {data.products.translations[0].title}
      </h2>
    </div>
  </div>

  <Productsitem productsData={data.products_item} />
  <!--  -->
</div>

<div class="mt-16 bg-[#003060] py-8 lg:py-10 5xl:py-[4.5rem]">
  <div class="container mx-auto">
    <div class="flex flex-col items-center">
      <div class="w-full text-center mb-6">
        <div class="section-title">
          <div class="section-main-title Subscribe">
            <h2
              class="text-white text-2xl 5xl:text-[3rem] md:text-xl lg:text-2xl font-bold"
            >
              {data.products.translations[0].subscribe_to_mail}
            </h2>
          </div>
        </div>
      </div>
      <div class="w-full max-w-xl 5xl:max-w-[66rem]">
        <form
          action="https://formspree.io/f/myyleorq"
          method="POST"
          id="it-form"
          class="flex flex-col"
        >
          <div class="relative mb-2">
            <input
              type="email"
              name="email"
              placeholder={`${data.products.translations[0].email_placeholder}`}
              class="w-full h-14 5xl:h-24 pl-4 pr-20 rounded border-none"
              bind:value={email}
            />
            <button
              type="submit"
              aria-label="Subscribe"
              class="absolute top-0 right-0 h-14 5xl:h-24 px-3 5xl:px-10 bg-[#0B60B0] text-white rounded hover:bg-[#00245a] transition-colors duration-300 ease-in-out"
            >
              <i class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-[24px] w-[24px] 5xl:h-[45px] 5xl:w-[45px]"
                  viewBox="0 -960 960 960"
                  fill="#ffffff"
                  ><path
                    d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"
                  /></svg
                >
              </i>
            </button>
          </div>
        </form>
        <div id="status"></div>
      </div>
    </div>
  </div>
</div>

<div class="bg-[#0B60B0] py-8">
  <div class="container mx-auto">
    <!-- Footer content can go here -->
  </div>
</div>
