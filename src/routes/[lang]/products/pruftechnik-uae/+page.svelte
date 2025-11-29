<script lang="ts">
  import { PUBLIC_APIURL } from "$env/static/public";
  import Thickline from "$lib/icons/svgs/thickline.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import ShadowArrow from "$lib/icons/svgs/shadowArrow.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Dropdown from "./dropdown.svelte";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  import YellowDot from "$lib/icons/svgs/yellowDot.svelte";
  import Boxview from "$lib/components/boxview/BoxView.svelte";
  import Pellete from "./boxView.svelte";
  import Downarrow from "$lib/icons/svgs/downarrow.svelte";
  import { slide } from "svelte/transition";
  import { goto } from "$app/navigation";
  export let data;

  interface contents {
    title?: string;
    bulletin?: bulletin[];
    img?: string;
  }
  interface bulletin {
    b1?: string;
    b1text?: string;
    b2?: string;
    b2text?: string;
    b3?: string;
    b3text?: string;
    b4?: string;
    b4text?: string;
    b5?: string;
    b5text?: string;
    b6?: string;
    b6text?: string;
    b7?: string;
    b7text?: string;
  }
  const contents: contents[] = [
    {
      title: "Alignment Software",
      img: `${PUBLIC_APIURL}/assets/${data.productDetails.img_pruftechnik_1}`,

      bulletin: [
        { b1: "Market Model Code   ", b1text: "SWSHAFT,SWGEO" },

        {
          b3: "Model/Series ",
          b3text:
            "ALIGNMENT CENTER, ALIGNMENT RELIABILITY CENTER 4.0, GEO CENTER",
        },
      ],
    },
    {
      title: "Induction Bearing Heaters",
      img: `${PUBLIC_APIURL}/assets/${data.productDetails.img_pruftechnik_2}`,
      bulletin: [
        { b1: "Market Model Code   ", b1text: "ETHPRT, ETH2, ETH4, ETHACC" },

        {
          b3: "Model/Series ",
          b3text: "EDDYTHERM series & accessories",
        },
      ],
    },
    {
      title: "Geometrical Measurement Systems, GEO brackets",
      img: `${PUBLIC_APIURL}/assets/${data.productDetails.img_pruftechnik_3}`,
      bulletin: [
        { b1: "Market Model Code   ", b1text: "CENT, LEVE, INCL, BRACC" },

        {
          b3: "Model/Series ",
          b3text:
            "CENTRALIGN, LEVALIGN Expert, INCLINEO, GEO brackets & accessories",
        },
      ],
    },
    {
      title: "Laser Shaft Alignment",
      img: `${PUBLIC_APIURL}/assets/${data.productDetails.img_pruftechnik_4}`,
      bulletin: [
        {
          b1: "Market Model Code   ",
          b1text: "ROTCH, ROTCHX, OPTTCH, SHT, TAB, SHTTCH, ALISENS",
        },

        {
          b3: "Model/Series ",
          b3text: "SHAFTALIGN series, tab@lign, Sensors",
        },
      ],
    },
    {
      title: "Shims, Shaft Brackets ",
      img: `${PUBLIC_APIURL}/assets/${data.productDetails.img_pruftechnik_5}`,
      bulletin: [
        { b1: "Market Model Code   ", b1text: "SHIMS, BRACK, SHFACC" },

        {
          b3: "Model/Series ",
          b3text: "PERMABLOC, LAMIBLOC, Shaft Brackets & accessories",
        },
      ],
    },
    {
      title: "Pulley Alignment Systems",
      img: `${PUBLIC_APIURL}/assets/${data.productDetails.img_pruftechnik_6}`,
      bulletin: [
        { b1: "Market Model Code   ", b1text: "PUL" },

        {
          b3: "Model/Series ",
          b3text: "PULLALIGN series",
        },
      ],
    },
  ];

  const content2: contents[] = [
    {
      title: "Condition Monitoring Software",
      img: `${PUBLIC_APIURL}/assets/${data.productDetails.img_pruftechnik_7}`,
      bulletin: [
        { b1: "Market Model Code   ", b1text: "OMT, OMTC, VXPU" },

        {
          b3: "Model/Series ",
          b3text: "OMNITREND series, VIBXPERT utility",
        },
      ],
    },
    {
      title: "Fluke Analysis Vibration Software  ",
      img: `${PUBLIC_APIURL}/assets/${data.productDetails.img_pruftechnik_8}`,
      bulletin: [
        { b1: "Market Model Code   ", b1text: "VBSW" },

        {
          b3: "Model/Series ",
          b3text: "Fluke Vibration Analysis Software",
        },
      ],
    },
    {
      title: "Online Condition Monitoring Systems   ",
      img: `${PUBLIC_APIURL}/assets/${data.productDetails.img_pruftechnik_9}`,
      bulletin: [
        { b1: "Market Model Code   ", b1text: "VGD, VGDC, VGDP, SIGMAS" },

        {
          b3: "Model/Series ",
          b3text: " VIBGUARD series, VIBRONET Signalmaster",
        },
      ],
    },
    {
      title: "Vibration Analysis",
      img: `${PUBLIC_APIURL}/assets/${data.productDetails.img_pruftechnik_10}`,
      bulletin: [
        {
          b1: "Market Model Code   ",
          b1text: "VSC2, VXPII, VXPX",
        },

        {
          b3: "Model/Series ",
          b3text: "VIBSCANNER 2 series, VIBXPERT series",
        },
      ],
    },
    {
      title: "Machine Protection Systems ",
      img: `${PUBLIC_APIURL}/assets/${data.productDetails.img_pruftechnik_11}`,
      bulletin: [
        { b1: "Market Model Code   ", b1text: "CMSENS, CMCAB, CMACCS" },

        {
          b3: "Model/Series ",
          b3text:
            " VIBROTECTOR, VIB 6.1xx series, VIB 6.2xx series, VIBCODE, cables, adapters",
        },
      ],
    },
    {
      title: "Wear Monitoring Systems",
      img: `${PUBLIC_APIURL}/assets/${data.productDetails.img_pruftechnik_12}`,
      bulletin: [
        { b1: "Market Model Code   ", b1text: "WSCAN" },

        {
          b3: "Model/Series ",
          b3text: "WEARSCANNER",
        },
      ],
    },
  ];
</script>
<svelte:head>
  <meta name="robots" content="index, follow" />
</svelte:head>
<section>
  <div class="pt-24 sm:pt-28 lg:pt-28">
    <div class="flex items-center justify-center relative">
      <img
        src={`${PUBLIC_APIURL}/assets/${data.productDetails.banner_image}`}
        alt="IPEC"
        class="w-full h-[300px] md:h-[300px] lg:h-[450px] object-cover"
      />
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="absolute left-[2%] w-fit h-auto">
        <div class="flex items-center gap-1 h-[50px] md:h-[70px]">
          <Thickline data="w-[1.5rem] md:w-[3rem] h-20px" />
          <Heading size="h2bold2" className=" font-bold text-white ">
            PRUFTECHNIK
          </Heading>
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
  <div class="container mx-auto md:px-[55px] mt-10">
    <div class="flex justify-between items-center">
      <div
        class="h-[30px] md:h-[68px] w-[50px] md:w-[122px] xl:w-[145px] 2.5xl:w-[170px] 2.5xl:h-[70px]"
      >
        <img
          src="/assets/logo/flukelogo.png"
          alt="Fluke Logo"
          class="w-full h-full object-contain"
        />
      </div>

      <div
        class="h-[30px] md:h-[84px] w-[80px] md:w-[200px] xl:w-[185px] xl:h-[78px] 2.5xl:w-[250px] 2.5xl:h-[120px]"
      >
        <img
          src="/assets/logo/pruf-tech-nik.png"
          alt="Pruftechnik Logo"
          class="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container mx-auto md:px-[55px]">
    <div class="flex flex-col lg:flex-row gap-6 justify-between mt-10">
      <div class="w-full lg:w-3/5">
        <div class="w-[55%] sm:w-[55%] md:w-[45%] rounded-xl mx-auto lg:hidden">
          <img
            src="/assets/img/fluke-img-1.png"
            alt="Underground cables IPEC"
            class="w-full h-auto md:h-[258px] object-cover rounded-xl"
          />
        </div>

        <P size="texts18" className="text-gray-700 text-justify mt-5 lg:mt-0">
          At AssetConditionMonitoring.com, we proudly supply PRUFTECHNIK
          solutions from Fluke Reliability, delivering advanced tools for
          precision alignment and condition monitoring. PRUFTECHNIK's offerings
          include laser shaft alignment systems, vibration analysis devices, and
          online condition monitoring solutions, all designed to enhance
          machinery performance and reduce downtime.
        </P>
        <P size="texts18" className="text-gray-700 text-justify mt-4 ">
          Our product range features innovative technologies like the VIBXPERT
          II vibration analyzer, which provides accurate diagnostics for
          rotating equipment, and the VIBGUARD IIoT system, offering continuous
          monitoring with real-time data processing for complex machinery. By
          integrating these tools into your maintenance strategy, you can
          proactively detect issues, optimize maintenance schedules, and extend
          asset lifespan. Trust AssetConditionMonitoring.com to equip your
          operations with PRUFTECHNIK's cutting-edge solutions, ensuring
          reliability and efficiency across your industrial assets.
        </P>
      </div>
      <div
        class="hidden lg:block w-[80%] sm:w-[80%] md:w-[60%] lg:w-2/5 rounded-xl mx-auto lg:mx-0"
      >
        <img
          src="/assets/img/fluke-img-1.png"
          alt="Underground cables IPEC"
          class="w-full h-auto md:h-[300px] lg:h-[350px] object-cover rounded-xl"
        />
      </div>
    </div>
  </div>
</section>

<section class="mt-10">
  <div class="container mx-auto md:px-[55px]">
    <Heading size="headingS25" className="font-bold text-[#0B60B0] mb-6">
      ALIGNMENT SYSTEMS
    </Heading>
    <P size="texts18" className="text-gray-700 text-justify ">
      AssetConditionMonitoring.com proudly supplies advanced PRUFTECHNIK
      alignment systems from Fluke Reliability, offering precision solutions for
      rotating machinery. These laser alignment tools, including the ROTALIGN
      Touch, ensure accurate shaft alignment, helping to minimize vibration,
      reduce wear, and prevent costly unplanned downtime. Designed for ease of
      use and high adaptability, PRUFTECHNIK systems support a wide range of
      industrial applications. They are ideal for aligning motors, pumps,
      turbines, and gearboxes. By integrating these cutting-edge tools into your
      maintenance strategy, AssetConditionMonitoring.com empowers your teams to
      extend equipment life, enhance reliability, and maintain peak operational
      efficiency through precise, data-driven alignment practices.
    </P>
  </div>
</section>

<section class="mt-10 mb-20 bg-[#F7FBFF] flex justify-center pt-8 md:p-8">
  <div class="container mx-auto md:mx-[55px]">
    <Dropdown {contents} />
  </div>
</section>

<section class="mt-10">
  <div class="container mx-auto md:px-[55px]">
    <Heading size="headingS25" className="font-bold text-[#0B60B0] mb-6">
      CONDITION MONITORING SYSTEMS
    </Heading>
    <P size="texts18" className="text-gray-700 text-justify ">
      AssetConditionMonitoring.com is a trusted supplier of advanced PRUFTECHNIK
      condition monitoring systems from Fluke Reliability, delivering
      high-performance solutions for predictive maintenance. These systems,
      including the VIBXPERT 3, VIBSCANNER 2, and VIBGUARD IIoT, are designed
      for accurate vibration analysis and dynamic balancing of rotating
      machinery. By providing real-time diagnostics and continuous monitoring,
      these tools help identify early signs of mechanical issues such as
      imbalance, misalignment, or bearing faults. With
      AssetConditionMonitoring.com's expertise and support, industries can
      implement PRUFTECHNIK solutions to enhance equipment reliability, reduce
      unplanned downtime, and extend asset life—ensuring smarter, data-driven
      maintenance and optimal operational performance.
    </P>
  </div>
</section>

<section class="mt-10 mb-20 bg-[#F7FBFF] flex justify-center pt-8 md:p-8">
  <div class="container mx-auto md:mx-[55px]">
    <Dropdown contents={content2} />
  </div>
</section>

<section class="bg-[#F7F7F7] mt-20">
  <div class="container px-5 md:px-[55px] pt-[50px] md:pt-[110px]">
    <P size="texts18" className="text-gray-700 text-justify ">
      To learn more about how PRUFTECHNIK solutions can support your maintenance
      goals and improve equipment reliability, contact
      AssetConditionMonitoring.com today. Our team is ready to assist you in
      selecting the right tools for your operational needs and provide expert
      guidance every step of the way. Let us help you implement smarter, more
      efficient maintenance strategies that reduce downtime and maximize asset
      performance. Reach out now to schedule a consultation or request more
      information.
    </P>
    <div class="flex justify-center items-center pb-20">
      <button
        class="bg-[#C7D200] px-6 py-3 mt-14
         w-[160px] md:w-[26%] lg:w-[23%] xl:w-[23%]
         text-center font-bold text-[#1E3A8A]
         text-xs md:text-sm lg:text-lg
        "
        on:click={() => goto(`/${data.langParam}/contact-us`)}
      >
        Contact Us Today!
      </button>
    </div>
  </div>
</section>
