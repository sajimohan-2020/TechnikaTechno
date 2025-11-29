<script lang="ts">
  import Rectanglebox from "$lib/components/rectanglebox/RectangleBox.svelte";
  import { steamProperty } from "$lib/data/staemTrapTesting";
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
</script>

<section class="mt-14">
  <div class="container mx-auto px-5 py-14 md:px-[55px] text-justify">
    <Heading
      size="bannerMaih1"
      className=" font-extrabold text-[#1e3a8a] mb-5 text-center"
    >
      How is Ultrasound testing in Steam Traps performed?
    </Heading>

    <P size="texts18" className="text-gray-700 leading-relaxed">
      Ultrasonic steam trap testing is done by detecting high-frequency sounds
      produced by steam and condensate flow inside the trap; they are often
      inaudible. As it is beyond human hearing range, the chances are, it could
      be missed. Ultrasound testing is highly sensitive and allows for
      non-invasive, real-time diagnostics, even in noisy environments. Here is
      how the Ultrasonic steam trap testing is done:
    </P>
  </div>
  <Rectanglebox property={steamProperty} />
</section>
