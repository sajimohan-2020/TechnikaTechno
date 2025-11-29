<script lang="ts">
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  import GrayCircle from "$lib/icons/svgs/grayCircle.svelte";
</script>

<section class=" h-auto">
  <div class="container px-5 mx-auto"></div>
  <div
    class="relative w-full md:flex flex-col justify-between gap-10 px-4 md:px-10 py-14"
  >
    <!-- Left Column: Top-aligned -->
    <div
      class="flex flex-col lg:flex-row w-full justify-center gap-7 px-5 py-6"
    >
      <div class="w-full lg:w-[55%] space-y-10">
        <div>
          <div class="flex justify-start gap-4">
            <Heading
              size="headingS25"
              className=" font-extrabold text-[#1e3a8a] mb-5 text-center md:text-left"
            >
              Maintaining Motor Windings
            </Heading>
            <div class="pt-1">
              <Yellowline />
            </div>
          </div>
          <P size="texts18" className="text-gray-700 leading-relaxed">
            To maximize motor performance:
          </P>
          <ul
            class="list-disc pl-10 space-y-4 text-gray-700 pb-5 pt-6 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
          >
            <li class="flex gap-3 items-start">
              <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span
              >Keep motors clean, dry, and well-ventilated
            </li>
            <li class="flex gap-3 items-start">
              <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span
              >Avoid overloads and voltage imbalances
            </li>
            <li class="flex gap-3 items-start">
              <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span
              >Perform scheduled resistance checks
            </li>
            <li class="flex gap-3 items-start">
              <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span
              >Maintain proper lubrication and alignment
            </li>
            <li class="flex gap-3 items-start">
              <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span
              >Record and track test results over time
            </li>
          </ul>
        </div>
      </div>

      <div class="flex justify-center items-center w-full lg:w-[40%]">
        <div
          class="relative bg-[#3380C7] rounded-lg w-full aspect-square max-w-[280px] md:max-w-[300px]"
        >
          <div
            class="absolute md:top-[34px] md:right-[34px] top-[16px] right-[16px] bg-[#D9D9D9] rounded-lg w-full h-full z-20"
          >
            <img
              src="/assets/img/service-maintenance.jpg"
              alt=""
              class="object-cover h-full w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column: Bottom-aligned using self-end -->
    <div
      class="flex flex-col-reverse lg:flex-row justify-center gap-16 w-full px-5 py-6"
    >
      <div class="flex items-center justify-center w-full lg:w-[40%]">
        <div
          class="relative bg-[#3380C7] rounded-lg w-full aspect-square max-w-[280px] md:max-w-[300px]"
        >
          <div
            class="absolute md:top-[34px] md:left-[34px] top-[16px] left-[16px] bg-[#D9D9D9] rounded-lg w-full h-full z-20"
          >
            <img
              src="/assets/img/spare-part-engine-.jpg"
              alt=""
              class="object-cover h-full w-full rounded-lg"
            />
          </div>
        </div>
      </div>
      <div class="w-full lg:w-[100%] flex flex-col space-y-10 mt-10 md:mt-0">
        <div>
          <div class="flex justify-start gap-4">
            <Heading
              size="headingS25"
              className=" font-extrabold text-[#1e3a8a] mb-6 text-center md:text-left"
            >
              3-Phase Induction Motor Winding Resistance
            </Heading>
            <div class="pt-1">
              <Yellowline />
            </div>
          </div>
          <P size="texts18" className="text-gray-700 leading-relaxed ">
            In 3-phase motors, resistance must be:
          </P>
          <ul
            class="list-disc pl-10 space-y-4 text-gray-700 pb-5 pt-6 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
          >
            <li class="flex gap-3 items-start">
              <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span
              >Balanced across all three phases (within 2–3%)
            </li>
            <li class="flex gap-3 items-start">
              <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span
              >Consistent with manufacturer specifications
            </li>
            <li class="flex gap-3 items-start">
              <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span
              >Corrected for temperature to ensure accuracy
            </li>
          </ul>
          <P size="texts18" className="text-gray-700 leading-relaxed ">
            Any imbalance or abnormal value is a clear indication of internal
            issues requiring immediate attention.
          </P>
        </div>
      </div>
    </div>
  </div>
</section>
