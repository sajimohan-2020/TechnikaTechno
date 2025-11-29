<script>
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
</script>

<section>
  <div class="container mx-auto px-5 py-8 md:px-[55px] text-left">
    <div class="flex gap-4">
      <Heading
        size="headingS25"
        className=" font-bold text-[#1e3a8a] mb-5 text-center md:text-left"
      >
        Our Proven Procedure for Precision Laser Shaft Alignment
      </Heading>
    </div>
    <div>
      <div
        class="flex flex-col-reverse lg:flex-row justify-center gap-16 w-full px-5 py-5"
      >
        <div class="flex items-start justify-center w-full lg:w-[40%]">
          <div
            class="relative bg-[#3380C7] rounded-lg w-full aspect-square max-w-[280px] md:max-w-[400px]"
          >
            <div
              class="absolute md:top-[34px] md:left-[34px] top-[16px] left-[16px] bg-[#D9D9D9] rounded-lg w-full h-full z-20"
            >
              <img
                src="/assets/img/laser shaft 3.webp"
                alt=""
                class="object-cover h-full w-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <div class="w-full lg:w-[55%] flex flex-col space-y-10 mt-10 md:mt-0">
          <div>
            <ul class="lg:pl-10 space-y-4 text-gray-700">
              <li class="flex flex-col gap-3 items-start">
                <h6
                  class="text-[#1E3A8A] leading-relaxed font-bold text-[15px] md:text-[16px] lg:text-[17px] xl:[20px]"
                >
                  Pre-alignment Set-up
                </h6>
                <P size="texts18" className="text-gray-700 leading-relaxed">
                  At first, our technicians gather the relevant details such as
                  the machinery type, specifications, thermal growth
                  measurements, alignment tolerances, past issues, etc.,
                  followed by a quick visual inspection. We then securely set
                  the laser alignment system by mounting the laser transmitter
                  on a shaft and the receiver on the counter shaft using
                  fixtures such as brackets or magnetic bases.
                </P>
              </li>

              <li class="flex flex-col gap-3 items-start">
                <h6
                  class="text-[#1E3A8A] leading-relaxed font-bold text-[15px] md:text-[16px] lg:text-[17px] xl:[20px]"
                >
                  Initial Data Collection
                </h6>
                <P size="texts18" className="text-gray-700 leading-relaxed">
                  Using laser alignment tools, the existing misalignment in
                  shafts is measured. The transmitter and receiver give precise
                  shaft positions. The baseline measurements of misalignment in
                  the horizontal and vertical planes are taken to decide on the
                  next step. As the system detects deviations in the laser path,
                  precise data on angular and offset misalignment is received in
                  real-time.
                </P>
              </li>
              <li class=" md:hidden flex flex-col gap-3 items-start">
                <h6
                  class="text-[#1E3A8A] leading-relaxed font-bold text-[15px] md:text-[16px] lg:text-[17px] xl:[20px]"
                >
                  Laser Alignment
                </h6>
                <P size="texts18" className="text-gray-700 leading-relaxed">
                  Using the precise measurement received from laser systems,
                  technicians carefully adjust the machinery shafts by
                  repositioning the machinery, using shims, adjusting foundation
                  bolts, or realigning the coupling to eliminate angular and
                  offset deviations. The misalignment is minimised at this
                  stage, and optimal shaft alignment is achieved within the
                  specified tolerances. Perform a final measurement cycle to
                  confirm that the alignment meets specified tolerances and
                  document the results for quality assurance.
                </P>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class=" hidden md:block mt-8 xl:mt-10 lg:ml-14 md:ml-6">
        <h6
          class="text-[#1E3A8A] leading-relaxed font-bold text-[15px] md:text-[16px] lg:text-[17px] xl:[20px]"
        >
          Laser Alignment
        </h6>
        <P size="texts18" className="text-gray-700 leading-relaxed pt-3">
          Using the precise measurement received from laser systems, technicians
          carefully adjust the machinery shafts by repositioning the machinery,
          using shims, adjusting foundation bolts, or realigning the coupling to
          eliminate angular and offset deviations. The misalignment is minimised
          at this stage, and optimal shaft alignment is achieved within the
          specified tolerances. Perform a final measurement cycle to confirm
          that the alignment meets specified tolerances and document the results
          for quality assurance.
        </P>
      </div>
    </div>

    <div class="mt-10">
      <div
        class="flex flex-col lg:flex-row justify-center gap-16 w-full px-5 py-5"
      >
        <div class="w-full lg:w-[55%] flex flex-col space-y-10 mt-10 md:mt-0">
          <div>
            <ul class="lg:pl-10 space-y-4 text-gray-700">
              <li class="flex flex-col gap-3 items-start">
                <h6
                  class="text-[#1E3A8A] leading-relaxed font-bold text-[15px] md:text-[16px] lg:text-[17px] xl:[20px]"
                >
                  Verify Realignment
                </h6>
                <P size="texts18" className="text-gray-700 leading-relaxed">
                  After making the necessary adjustments, our technicians do a
                  final measurement using the same laser alignment system to
                  verify and confirm that the realignment meets the specified
                  tolerances. This crucial step ensures the accuracy of the
                  corrections and confirms that the shafts are properly aligned,
                  guaranteeing optimal machine performance and reliability.
                </P>
              </li>
              <li class="flex flex-col gap-3 items-start">
                <h6
                  class="text-[#1E3A8A] leading-relaxed font-bold text-[15px] md:text-[16px] lg:text-[17px] xl:[20px]"
                >
                  Reporting and documentation
                </h6>
                <P size="texts18" className="text-gray-700 leading-relaxed">
                  Once the alignment is confirmed, a cumulative report is
                  produced that documents the entire process, from initial
                  measurements to the final results. This documentation acts as
                  a valuable reference for future maintenance schedules, quality
                  control, and auditing purposes.
                </P>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex items-center justify-center w-full lg:w-[40%]">
          <div
            class="relative bg-[#3380C7] rounded-lg w-full aspect-square max-w-[280px] md:max-w-[400px]"
          >
            <div
              class="absolute md:top-[34px] md:left-[34px] top-[16px] left-[16px] bg-[#D9D9D9] rounded-lg w-full h-full z-20"
            >
              <img
                src="/assets/img/laser shaft 2.webp"
                alt=""
                class="object-cover h-full w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
