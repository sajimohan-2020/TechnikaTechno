<script>
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
</script>

<section>
  <div class="container mx-auto px-4 md:px-[55px]">
    <div class="flex gap-4">
      <Heading
        size="headingS25"
        className=" font-semibold text-[#1e3a8a] md:mb-4 text-center md:text-left"
      >
        Redefine your reliability with our advanced Structural Vibration
        Analysis
      </Heading>
      <div class="pt-2">
        <Yellowline />
      </div>
    </div>
    <div>
      <div
        class="flex flex-col-reverse lg:flex-row justify-center gap-12 w-full px-5 py-5"
      >
        <div class="flex items-center justify-center w-full lg:w-[40%]">
          <div
            class="relative bg-[#3380C7] rounded-lg w-full aspect-square max-w-[400px]"
          >
            <div
              class="absolute top-[26px] left-[20px] bg-[#D9D9D9] rounded-lg w-full h-full z-20"
            >
              <img
                src="/assets/img/service8.png"
                alt=""
                class="object-cover h-full w-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <div class="w-full lg:w-[55%] flex flex-col space-y-10 mt-10 md:mt-0">
          <div>
            <ul class=" lg:pl-10 space-y-4 text-[#2F2F2F]">
              <li class="flex flex-col gap-3 items-start">
                <P
                  size="texts18"
                  className="text-[#1E3A8A] leading-relaxed font-bold"
                >
                  Understanding and Managing Dynamic Forces
                </P>
                <P
                  size="texts18"
                  className="text-[#2F2F2F] text-justify leading-tight hyphens-auto "
                >
                  <span class="underline">Assetconditionmonitoring.com</span> conducts
                  detailed evaluations of dynamic forces machinery produces by performing
                  pulsation analysis, mechanical response computations, and detailed
                  technical analysis. These comprehensive processes include assessing
                  frequency, amplitude, and variations under different operating
                  conditions to completely understand your system’s dynamics.
                </P>
              </li>

              <li class="flex flex-col gap-3 items-start">
                <P
                  size="texts18"
                  className="text-[#1E3A8A] leading-relaxed font-bold"
                >
                  Refined Dynamic FE Model
                </P>
                <P size="texts18" className="text-[#2F2F2F] leading-relaxed">
                  Ensuring the model accuracy is crucial, we integrate field
                  testing data, vibration readings, and on-site calculations
                  into the dynamic finite element (FE) model, enhancing the
                  model’s reliability and matching analytical results with
                  actual performance.
                </P>
              </li>

              <li class="flex flex-col gap-3 items-start">
                <P
                  size="texts18"
                  className="text-[#1E3A8A] leading-relaxed font-bold"
                >
                  Precise Boundary Conditions
                </P>
                <P size="texts18" className="text-[#2F2F2F] leading-relaxed">
                  Correct boundary conditions are important in vibration
                  analysis. We evaluate the support structure flexibility and
                  mounting conditions, understanding the impact on the dynamics
                  of the identical parts on a platform.
                </P>
              </li>
              <li class="flex flex-col gap-3 items-start">
                <P
                  size="texts18"
                  className="text-[#1E3A8A] leading-relaxed font-bold"
                >
                  Advanced Tools and Technology
                </P>
                <P size="texts18" className="text-[#2F2F2F] leading-relaxed">
                  We use the most advanced technology, tools, and software to
                  transform the structural models into comprehensive
                  representations. This enables systematic and accurate analysis
                  of the structures, aiding in informed decisions and long-term
                  reliability.
                </P>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
