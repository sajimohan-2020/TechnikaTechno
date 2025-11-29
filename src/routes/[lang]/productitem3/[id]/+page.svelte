<script lang="ts">
  import { PUBLIC_APIURL } from "$env/static/public";
  import Thickline from "$lib/icons/svgs/thickline.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import ShadowArrow from "$lib/icons/svgs/shadowArrow.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  import YellowDot from "$lib/icons/svgs/yellowDot.svelte";
  import { slide } from "svelte/transition";
  import Productexplore from "$lib/components/ui/productExplore/ProductExplore.svelte";

  import { goto } from "$app/navigation";
  import Circlehook from "$lib/icons/svgs/circlehook.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  import Boxes from "$lib/components/boxes/Boxes.svelte";
  import GrayCircle from "$lib/icons/svgs/grayCircle.svelte";

  export let data;
  interface name {
    title: string;
    text?: string;
    link?: string;
  }
  const name: name[] = [
    {
      title: " For more Pruftechnik products ",

      text: "EXPLORE",
      link: ` /${data.langParam}/productitems/pruftechnik`,
    },
  ];
  const name2: name[] = [
    {
      title: "To know more about Sonotec products ",
      text: "LET'S TALK",
    },
  ];
  interface box {
    title?: string;
    text?: string;
  }
  let boxes: box[] = [
    {
      text: "Air Leak detection, PD detection, tightness testing & bio-acoustics",
    },
    {
      text: "Preset application settings make the device easy to use, ensuring intuitive operation even for less experienced users",
    },
    {
      text: "Allows technicians to detect faults without disrupting ongoing processes",
    },
    {
      text: "176 microphones with 200 kHz for capturing acoustic signals",
    },
    {
      text: "Enables accurate monitoring of the ultrasonic signal displayed on screen",
    },
    {
      text: "Acoustic and infrared imaging combined in a single device for versatile inspections.",
    },
    {
      text: "Supports monitoring of audible and ultrasonic signals up to 100 kHz",
    },
    {
      text: "Enables in-depth analysis of captured raw data, unlike any other camera",
    },
    {
      text: "​​Features a 7″ touchscreen with ultra-high resolution",
    },
    {
      text: "Captures fast-occurring events with 100 frames per second",
    },
    {
      text: "Built-in flashlight for enhanced visibility",
    },
    {
      text: "Suitable for use in a wide range of indoor and outdoor industrial applications",
    },
  ];
</script>

<section>
  <div class="pt-24 sm:pt-28 lg:pt-28">
    <div class="flex items-center justify-center relative">
      <img
        src="/assets/img/sonotech.webp"
        alt="sono"
        class="w-full h-[300px] md:h-[300px] lg:h-[450px] object-cover"
      />
      <div class="absolute inset-0 bg-black opacity-40"></div>
      <div class="absolute left-[2%] w-fit h-auto">
        <div class="flex items-center gap-1 h-[50px] md:h-[70px]">
          <Thickline data="w-[1.5rem] md:w-[3rem] h-20px" />
          <div class="flex flex-col leading-none">
            <Heading
              size="h2bold2"
              className="font-bold text-white m-0 leading-none"
            >
              SONOTEC
            </Heading>
            <p
              class="text-white font-bold m-0 text-xs md:text-sm lg:text-md xl:text-[20px] leading-none"
            >
              ACOUSTIC CAMERA
            </p>
          </div>
        </div>
      </div>
      <a href={`/${data.langParam}/contact-us`}>
        <div
          class="absolute right-0 bottom-0 z-20 w-[223px] md:w-[400px] xl:w-[620px] lg:w-[500px] md:h-[80px] h-16 sm:h-24"
        >
          <svg
            class="absolute inset-0 w-full h-full"
            viewBox="0 0 620 96"
            preserveAspectRatio="none"
          >
            <path
              d="M0,96 L60,20 Q80,0 120,0 L620,0 L620,96 Z"
              fill="#C9D400"
            />
          </svg>

          <div
            class="relative z-10 flex items-center justify-center w-full h-full px-4"
          >
            <div class="flex items-center">
              <span
                class="text-white font-bold"
                style="font-size: clamp(1rem, 3vw, 2rem);"
              >
                Lets Talk
              </span>
              <span class="md:pt-2 pt-1">
                <ShadowArrow data="md:h-8 md:w-5 h-5 w-5 ml-2 md:ml-4" />
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>

<section class="mt-16">
  <div class="container mx-auto md:px-[35px] mt-10">
    <div class="flex justify-start items-center">
      <div
        class="h-[57px] md:h-[75px] w-[151px] md:w-[200px] 2.5xl:h-[100px] 2.5xl:w-[250px]"
      >
        <img
          src="/assets/logo/sonotec-logo.png"
          alt="Sonotec logo"
          class="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>
</section>

<section class="mt-10">
  <div class="container mx-auto md:px-[55px]">
    <Heading size="headingS25" className="font-bold text-[#0B60B0] mb-6">
      ACOUSTIC CAMERA SONASCREEN® 2 Second Generation Acoustic Camera with
      thermal imaging function.
    </Heading>
    <P size="texts18" className="text-gray-700 text-justify ">
      Assetconditionmonitoring.com, the authorised distributor of the
      SONASCREEN® 2 Acoustic Camera, elevates ultrasound detection to the next
      level. The device detects leaks, identifies electrical partial discharges,
      and pinpoints mechanical faults — all visually and in real time. It
      captures ultrasound and audible sounds using a dense microphone array and
      converts them into on-screen acoustic images or videos. This enables
      maintenance teams to accurately locate leaks, discharges, bearing noise,
      and more, even in noisy industrial environments. Technicians can then
      quickly plan repairs and prevent minor issues from developing into costly
      failures. The SONASCREEN® 2 sets new standards in hardware, performance,
      and usability.
    </P>
  </div>
</section>

<section>
  <div class="container mx-auto md:px-[55px] mt-10">
    <div class="flex flex-col lg:flex-row gap-6 justify-between mt-6">
      <div class="w-full lg:w-3/5">
        <div class="w-[55%] sm:w-[55%] md:w-[45%] rounded-xl mx-auto lg:hidden">
          <img
            src="/assets/img/sonotec-acoustic-img-1.png"
            alt="Underground cables IPEC"
            class="w-full h-auto md:h-[258px] object-cover rounded-xl"
          />
        </div>

        <P size="texts18" className="text-gray-700 text-justify mt-5 lg:mt-0">
          Setting new standards in hardware, performance, and accessibility, the
          SONASCREEN® 2 Acoustic Camera transforms both audible and ultrasonic
          frequencies into clear acoustic images. It pinpoints sound sources in
          real time and displays the results directly on its screen, while also
          providing acoustic feedback through headphones. With its integrated
          infrared module, the device combines acoustic imaging with thermal
          imaging, making ultrasound not only audible but also visible. This
          dual functionality enhances the detection of anomalies and damaged
          components, ensuring faster, more accurate maintenance decisions.
        </P>
      </div>
      <div
        class="hidden lg:block w-[80%] sm:w-[80%] md:w-[60%] lg:w-2/5 rounded-xl mx-auto lg:mx-0"
      >
        <img
          src="/assets/img/sonotec-acoustic-img-1.png"
          alt="Underground cables IPEC"
          class="w-full h-auto md:h-[300px] lg:h-[350px] object-cover rounded-xl"
        />
      </div>
    </div>
  </div>
</section>

<section class="mt-20 relative">
  <div class="absolute right-0 top-[-220px] z-0">
    <img src="/assets/right-eclipse.svg" alt="" />
  </div>
  <div class="flex gap-3 justify-center">
    <Heading size="headingS25" className="font-bold text-[#2F2F2F] mb-6"
      >Key Features</Heading
    >
    <div class="pt-1">
      <Yellowline />
    </div>
  </div>
  <div class="absolute bottom-[-254px] z-0">
    <img src="/assets/left-eclipse.svg" alt="" />
  </div>
  <div class="container px-5 md:px-[55px] mt-16">
    <Boxes {boxes} />
  </div>
</section>

<div class="container mx-auto md:px-[55px] mt-24">
  <div class="flex gap-3 mt-16">
    <Heading size="headingS25" className="font-semibold text-[#0B60B0]">
      UltraSonic LEAK DETECTION with SONASCREEN® 2
    </Heading>
    <div class="pt-1">
      <Yellowline />
    </div>
  </div>
</div>

<section class="mt-10">
  <div class="container mx-auto md:px-[55px]">
    <div class="flex flex-col lg:flex-row gap-6 justify-between mt-6">
      <div
        class="hidden lg:block w-[80%] sm:w-[80%] md:w-[60%] lg:w-2/5 rounded-xl mx-auto lg:mx-0"
      >
        <img
          src="/assets/img/sonotec-acousic-img-2.png"
          alt="emaint"
          class="w-full h-auto md:h-[300px] lg:h-[350px] object-cover object-center rounded-xl"
        />
      </div>
      <div class="w-full lg:w-3/5">
        <div class="w-[55%] sm:w-[55%] md:w-[45%] rounded-xl mx-auto lg:hidden">
          <img
            src="/assets/img/sonotec-acousic-img-2.png"
            alt="Underground cables IPEC"
            class="w-full h-auto md:h-[258px] object-contain object-center rounded-xl"
          />
        </div>

        <ul class=" pl-8 space-y-8 text-gray-700 pb-5 pt-10 lg:pt-0">
          <li class="flex gap-3 items-start text-xs md:text-sm lg:text-base">
            <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
            Enables quick and easy leak detection, even in noisy industrial environments
          </li>
          <li class="flex gap-3 items-start text-xs md:text-sm lg:text-base">
            <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
            Combines visual and acoustic imaging for clear sound source visualization
          </li>
          <li class="flex gap-3 items-start text-xs md:text-sm lg:text-base">
            <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
            Detects and displays multiple leaks simultaneously in a single image
          </li>
          <li class="flex gap-3 items-start text-xs md:text-sm lg:text-base">
            <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
            Allows technicians to see and hear sound in real time
          </li>
          <li class="flex gap-3 items-start text-xs md:text-sm lg:text-base">
            <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
            Features a dedicated LEAKAGE mode with live loss indicator and spectrogram
          </li>
          <li class="flex gap-3 items-start text-xs md:text-sm lg:text-base">
            <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
            Includes free LeakReport software for leakage loss evaluation and professional
            PDF reporting
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<div class="container mx-auto md:px-[55px] mt-24">
  <div class="flex gap-3 mt-16">
    <Heading size="headingS25" className="font-semibold text-[#0B60B0]">
      PARTIAL DISCHARGE DETECTION with SONASCREEN® 2
    </Heading>
    <div class="pt-1">
      <Yellowline />
    </div>
  </div>
</div>
<section class="mt-10">
  <div class="container mx-auto md:px-[55px]">
    <div class="flex flex-col lg:flex-row gap-6 justify-between mt-6">
      <div class="w-full lg:w-3/5">
        <div class="w-[55%] sm:w-[55%] md:w-[45%] rounded-xl mx-auto lg:hidden">
          <img
            src="/assets/img/sonotec-acoustic-img-3.png"
            alt="Underground cables IPEC"
            class="w-full h-auto md:h-[258px] object-contain object-center rounded-xl"
          />
        </div>

        <ul class=" pl-8 space-y-8 text-gray-700 pb-5 pt-10 lg:pt-0">
          <li class="flex gap-3 items-start text-xs md:text-sm lg:text-base">
            <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
            Enables quick and easy-to-understand partial discharge detection from
            a safe distance
          </li>
          <li class="flex gap-3 items-start text-xs md:text-sm lg:text-base">
            <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
            Combines visual and acoustic imaging for clear and reliable sound source
            visualization
          </li>
          <li class="flex gap-3 items-start text-xs md:text-sm lg:text-base">
            <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
            Detects and displays multiple partial discharges simultaneously in a
            single image
          </li>
          <li class="flex gap-3 items-start text-xs md:text-sm lg:text-base">
            <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
            Helps identify defects at the earliest possible stage
          </li>
          <li class="flex gap-3 items-start text-xs md:text-sm lg:text-base">
            <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
            Spectrogram view makes it easy to recognize typical characteristics of
            partial discharges
          </li>
          <li class="flex gap-3 items-start text-xs md:text-sm lg:text-base">
            <span class="max-w-2 max-h-2"><GrayCircle data="w-2 h-2" /></span>
            Includes free PDReport software for detailed evaluation and professional
            reporting
          </li>
        </ul>
      </div>
      <div
        class="hidden lg:block w-[80%] sm:w-[80%] md:w-[60%] lg:w-2/5 rounded-xl mx-auto lg:mx-0"
      >
        <img
          src="/assets/img/sonotec-acoustic-img-3.png"
          alt="emaint"
          class="w-full h-auto md:h-[300px] lg:h-[350px] object-cover object-center rounded-xl"
        />
      </div>
    </div>
  </div>
</section>

<section class="mt-24 bg-[#F7F7F7] h-fit relative z-50">
  <div class="absolute bottom-[225px] z-0">
    <img src="/assets/left-eclipse.svg" alt="" />
  </div>
  <div class="pt-10 container mx-auto md:px-[55px] pb-10 z-50 relative">
    <Heading
      size="bannerMaih1"
      className=" font-bold text-center text-[#2F2F2F] mt-7"
    >
      Get Sonotec’s acoustic testing products at <span class=""
        >AssetConditionMonitoring.com</span
      >
    </Heading>
    <P
      size="texts18"
      className="text-gray-700 text-left mt-4 leading-relaxed px-4 md:px-0"
    >
      Assetconditionmonitoring.com is the authorized partner of SONOTEC in the
      UAE, offering proven expertise, hands-on demonstrations, and comprehensive
      support for the SONASCREEN® 2 and a wide range of ultrasonic testing
      solutions. With over 18 years of industry experience, we have established
      ourselves as a trusted distributor of SONOTEC technologies across the
      region. Our skilled team provides specialized training, technical
      guidance, and after-sales support, ensuring seamless adoption within your
      maintenance operations. Whether it’s leak detection, partial discharge
      assessment, or advanced condition monitoring, Assetconditionmonitoring.com
      delivers tailored solutions to strengthen your preventive maintenance
      strategy.
    </P>

    <div class="mt-16 mb-20">
      <Explore name={name2} data={`/${data.langParam}/contact-us`} />
    </div>
  </div>
</section>
