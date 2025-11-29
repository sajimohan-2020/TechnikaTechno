<script lang="ts">
  import { structureProperty } from "$lib/data/structuralVibrationAnalysis";
  import Rectanglebox from "$lib/components/rectanglebox/RectangleBox.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
</script>

<section>
  <div class="container md:px-[55px] mt-14">
    <div class="flex gap-4">
      <Heading
        size="bannerMaih1"
        className=" font-extrabold text-[#1e3a8a] mb-5 text-center md:text-left"
      >
        Importance of Vibration Structural Analysis
      </Heading>
      <div class="pt-1">
        <Yellowline />
      </div>
    </div>
    <P size="texts18" className="text-gray-700 leading-relaxed">
      Structural Vibration Analysis is a crucial predictive maintenance tool to
      assess the dynamic behaviour of structures and equipment under different
      conditions. This strategic tool maintains mechanical integrity, safety,
      reliability, and peak machine efficiency. Why is it important?
    </P>
    <div>
      <Rectanglebox
        property={structureProperty}
        data="xl:items-start"
        titlewidth="md:w-[30%] "
        textwidth="md:w-[70%] "
      />
    </div>
  </div>
</section>
