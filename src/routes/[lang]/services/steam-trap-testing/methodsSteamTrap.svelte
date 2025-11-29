<script lang="ts">
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
</script>

<section class="mt-10 h-auto">
  <div class="container px-5 mx-auto"></div>
  <div
    class="relative w-full md:flex flex-col justify-between gap-10 px-4 md:px-10 py-10"
  >
    <!-- Left Column: Top-aligned -->
    <div
      class="flex flex-col lg:flex-row w-full justify-center gap-7 px-5 py-5"
    >
      <div class="w-full lg:w-[55%] space-y-10">
        <div>
          <div class="flex justify-start gap-4">
            <Heading
              size="headingS25"
              className=" font-extrabold text-[#1e3a8a] mb-5 text-center md:text-left"
            >
              SONOTEC's SteamExpert
            </Heading>
            <div>
              <Yellowline />
            </div>
          </div>
          <P size="texts18" className="text-gray-700 leading-relaxed">
            At assetconditionmonitoring.com, we use the latest and advanced
            SONOTEC SteamExpert system for reliable ultrasonic steam trap
            testing. <span class="font-bold"> SONOTEC</span> offers customized
            solutions that align perfectly with your ultrasonic maintenance
            needs. To support this, the
            <span class="font-bold"> SteamExpert app</span> has been designed to
            enable fast and cost-effective testing of steam traps across a range
            of types and manufacturers. Curated for efficiency, the SteamExpert
            app pairs with the
            <span class="font-bold">SONAPHONE Digital Tester and BS20</span> (Broadband
            Structure-Borne Sound and Temperature Sensor) ultrasonic-temperarute
            sensor to quickly assess all types of steam traps. This tool detects
            leaks, faults, and improves energy efficiency. Test results are managed
            and analysed through DataSuite software, making inspections organised,
            accurate, and easy to review.
          </P>
        </div>
      </div>

      <div class="flex justify-center items-center w-full lg:w-[40%]">
        <div
          class="relative bg-[#3380C7] rounded-lg w-full aspect-square max-w-[280px] md:max-w-[300px]"
        >
          <div
            class="absolute md:top-[34px] md:right-[34px] top-[16px] right-[16px] rounded-xl w-full h-full z-20"
          >
            <img
              src="/assets/img/stt29.png"
              alt=""
              class="object-cover h-full w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column: Bottom-aligned using self-end -->
    <div
      class="flex flex-col-reverse lg:flex-row justify-center gap-16 w-full px-5 py-5"
    >
      <div class="flex items-center justify-center w-full lg:w-[40%]">
        <div
          class="relative bg-[#3380C7] rounded-lg w-full aspect-square max-w-[280px] md:max-w-[300px]"
        >
          <div
            class="absolute md:top-[34px] md:left-[34px] top-[16px] left-[16px] bg-[#D9D9D9] rounded-lg w-full h-full z-20"
          >
            <img
              src="/assets/img/steamdummy.png"
              alt=""
              class="object-cover h-full w-full rounded-lg"
            />
          </div>
        </div>
      </div>
      <div class="w-full lg:w-[100%] flex flex-col space-y-10 mt-10 md:mt-0">
        <div>
          <div class="flex gap-4">
            <Heading
              size="headingS25"
              className=" font-extrabold text-[#1e3a8a] mb-5  text-left"
            >
              Expert Ultrasonic steam trap testing with
              assetconditionmonitoring.com
            </Heading>
          </div>
          <P size="texts18" className="text-gray-700 leading-relaxed ">
            Ensure the efficiency and reliability of your steam trap with our
            expert Steam Trap Testing from assetconditionmonitoring.com. Our
            comprehensive services identify faulty, leaking, or blocked steam
            traps early before they become apparent and significant, minimising
            energy loss, preventing system damage, and boosting overall
            performance. Stay ahead of the costly failures and maintain optimal
            productivity with prompt diagnostics with us.
          </P>
        </div>
      </div>
    </div>
  </div>
</section>
