<script>
  const steps = [
    {
      id: 1,
      title: "Install sensors",
      subtitle:
        "The latest sensors and accelerometers are mounted on the external surface of rotating machinery.",
      icon: "/assets/logo/installsensors.svg",
    },
    {
      id: 2,
      title: "Collect Real time data",
      subtitle:
        "Vibration signals and patterns are recorded while the equipment runs.",
      icon: "/assets/logo/collectrealtimedata.svg",
    },
    {
      id: 3,
      title: "Analysis",
      subtitle:
        "The vibration pattern is analysed to identify imbalances, misalignments, resonance issues, bearing damage, or other underlying faults.",
      icon: "/assets/logo/analysis.svg",
    },
    {
      id: 4,
      title: "Machinery diagnosis",
      subtitle:
        "Collected data is interpreted to diagnose machine condition and pinpoint potential faults.",
      icon: "/assets/logo/machinarydiagnosis.svg",
    },
    {
      id: 5,
      title: "Recommendations",
      subtitle:
        "Strategies and actionable insights are provided for corrective maintenance.",
      icon: "/assets/logo/recommentations.svg",
    },
  ];
</script>

<section>
  <div class="container mx-auto px-10 mt-10">
    <h1 class="text-xl md:text:2xl font-semibold text-[#2F2F2F] mb-10 ml-4">
      During On-Site Analysis, We,
    </h1>

    <div class="relative">
      <div
        class="absolute top-6 md:left-[80px] md:right-[80px] lg:left-[100px] lg:right-[100px] xl:left-[120px] xl:right-[120px] h-0.5 bg-[#C7D200] z-0"
      ></div>

      <div
        class="hidden md:grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10"
      >
        {#each steps as step, index}
          <div class=" md:flex md:flex-col md:items-center">
            <div
              class="w-12 h-12 rounded-full flex items-center justify-center text-gray-800 font-semibold text-lg mb-6 border-2 border-[#C7D200] bg-white shadow-sm "
            >
              {step.id}
            </div>
            <div
              class="lg:w-10 lg:h-12  flex items-center justify-center mb-8 w-11 h-11"
            >
              <img src={step.icon} alt={step.icon} class="object-cover" />
            </div>
            <div class=" max-w-48 mt-10">
              <h3
                class="text-[#2F2F2F] text-center font-bold md:text-base lg:text-lg mb-3"
              >
                {step.title}
              </h3>
              <p class="text-[#0B60B0] text-sm text-center p-1">
                {step.subtitle}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>


<!-- Mobile timeline -->
<div class="relative md:hidden">
  <!-- Vertical line -->
  <div class="absolute w-0.5 h-[90%] top-0 left-[23px] bg-[#C7D200] z-0"></div>

  {#each steps as step, index}
    <div class="flex items-start gap-4 relative mb-8">
      <!-- Step circle -->
      <div class="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center 
                  text-gray-800 font-semibold text-lg border-2 border-[#C7D200] bg-white shadow-sm z-10">
        {step.id}
      </div>

      <!-- Step content -->
      <div class="flex gap-3">
        <!-- Icon -->
        <div class="w-8 h-8 flex-shrink-0 flex items-center justify-center">
          <img src={step.icon} alt={step.icon} class="w-6 h-6 object-contain" />
        </div>

        <!-- Title + Subtitle -->
        <div>
          <h3 class="text-[#2F2F2F] text-left font-bold text-base mb-1">
            {step.title}
          </h3>
          <p class="text-[#0B60B0] text-sm text-left font-medium ">
            {step.subtitle}
          </p>
        </div>
      </div>
    </div>
  {/each}
</div>
  </div>
</section>
