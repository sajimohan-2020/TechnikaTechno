<script lang="ts">
  import Heading from "$lib/components/heading/Heading.svelte";
  import { PUBLIC_APIURL } from "$env/static/public";

  interface name {
    title: string;
    text?: string;
    link?: string;
  }
  export let name: name[] = [{ title: "", text: "", link: "" }];
  export let width: string = "w-full";
</script>

<section class="w-full flex justify-center items-center">
  {#each name as head}
    <div class="relative {width} min-h-[60px] h-[60px] p-8">
      <div
        class="absolute inset-0 w-full h-full bg-gradient-to-r from-[#2196D6] to-[#1566A0]
         flex items-center justify-start pl-3 lg:pl-8 xl:pl-[3rem] md:pl-3"
        style="clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);"
      >
        <Heading
          size="headingS21"
          className="font-bold text-white p-3 w-[60%] sm:w-[50%] lg:w-[60%] xl:w-[70%]"
        >
          {head.title}
        </Heading>

        <div
          class="absolute right-0 h-full min-w-[150px] md:min-w-[350px] 2xl:w-[500px] z-10"
        >
          <a href={head.link}>
            <div
              class="absolute inset-0 bg-[#C7D200]"
              style="clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);"
            ></div>

            <div
              class="relative z-10 h-full flex items-center justify-center gap-2"
            >
              <Heading
                size="headingS20"
                className="text-[#FFFFFF] font-bold pl-4"
              >
                {head.text}
              </Heading>
            </div>
          </a>
        </div>
      </div>
    </div>
  {/each}
</section>
