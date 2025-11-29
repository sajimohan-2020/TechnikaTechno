<script lang="ts">
  import { PUBLIC_APIURL } from "$env/static/public";
  import { language } from "$lib/lang";

  export let productsData;
</script>

<div class=" py-2">
  <div class="container mx-auto">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 5xl:gap-[10rem] lg:gap-16"
    >
      {#each productsData as product}
        <div class="bg-[#0B60B0] rounded-md relative overflow-hidden">
          <img
            src="{PUBLIC_APIURL}/assets/{product.product_image}"
            alt="product"
            class="w-full"
          />
          {#if product.product_link === "fluke-distributor-uae" || product.product_link === "ipec-uae" || product.product_link === "sonotec"}
            <a href={`/ae/products/${product.product_link}`}>
              <div
                class="relative z-10 text-center text-white hover:bg-white hover:text-[#00245a] hover:border-2 hover:border-[#00245a] py-4 5xl:py-[4rem] duration-500 ease-in-out"
              >
                <h4 class="text-xl 5xl:text-[3rem] font-medium text-center">
                  {product.translations[0].product_name}
                </h4>
              </div>
            </a>
          {:else}
            <div
              class="relative z-10 text-center text-white hover:bg-white hover:text-[#00245a] hover:border-2 hover:border-[#00245a] py-4 5xl:py-[4rem] duration-500 ease-in-out"
            >
              <h4 class="text-xl 5xl:text-[3rem] font-medium text-center">
                {product.translations[0].product_name}
              </h4>
              <!-- <span class="text-center">{product.translations[0].category}</span> -->
              <!-- <span class="text-center">{product.product_link}</span> -->
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>
<!-- <a href={`productdetails/${product.product_link}`}></a> -->
