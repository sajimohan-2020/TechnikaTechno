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
  import Productexplore from "$lib/components/ui/productExplore/ProductExplore.svelte";
  export let data;
  import { goto } from "$app/navigation";
  import Circlehook from "$lib/icons/svgs/circlehook.svelte";

  interface name {
    title: string;
    text?: string;
    link?: string;
  }
  const name: name[] = [
    {
      title: " For more Pruftechnik products ",

      text: "EXPLORE",
      link: ` /${data.langParam}/products/pruftechnik-uae`,
    },
  ];
  const name2: name[] = [
    {
      title: "  For more Emaint products ",
      text: "EXPLORE",
      link: ` /${data.langParam}/products/emaint-uae`,
    },
  ];
</script>

<section>
  <div class="pt-24 sm:pt-28 lg:pt-28">
    <div class="flex items-center justify-center relative">
      <img
        src={`${PUBLIC_APIURL}/assets/${data.productDetails.banner_image}`}
        alt="fluke"
        class="w-full h-[300px] md:h-[300px] lg:h-[450px] object-cover 2.5xl:h-[600px]"
      />
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="absolute left-[2%] w-fit h-auto">
        <div class="flex items-center gap-1 h-[50px] md:h-[70px]">
          <Thickline data="w-[1.5rem] md:w-[3rem] h-20px" />
          <Heading size="h2bold2" className=" font-bold text-white ">
            FLUKE RELIABILITY
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
        class="h-[30px] md:h-[50px] w-[50px] md:w-[120px] 2.5xl:w-[187px] 2xl:h-[70px]"
      >
        <img
          src="/assets/logo/flukelogo.png"
          alt="Fluke Logo"
          class="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container mx-auto md:px-[55px] mt-10">
    <Heading size="bannerMaih1" className="font-semibold text-[#0B60B0] pb-8">
      Fluke Distributor in UAE : Contact Us today to enhance your asset
      reliability.
    </Heading>
    <P size="texts18" className="text-gray-700 text-justify mt-5 lg:mt-0">
      As an <span class="text-[#1E3A8A] font-bold"
        >authorized distributor of Fluke in the UAE</span
      >, Technomax provides a wide selection of Fluke Reliability solutions
      aimed at boosting equipment dependability, enhancing asset efficiency, and
      simplifying maintenance operations across various industries. Fluke
      Reliability, a vital arm of Fluke Corporation, delivers an integrated
      range of both hardware and software tools designed to elevate operational
      efficiency and prolong the service life of industrial equipment.
    </P>
    <P size="texts18" className="text-gray-700 text-justify mt-6">
      These reliability tools include advanced vibration analyzers, balancing
      systems, precision laser shaft alignment instruments, and durable
      condition monitoring technologies—all crafted to improve asset
      performance. With these high-end solutions, Technomax supports
      organizations in optimizing their maintenance practices, enhancing
      equipment reliability, and cutting down on operational expenses. This
      partnership drives smarter and more effective industrial maintenance,
      offering value to clients worldwide.
    </P>
  </div>
</section>
<div class="container mx-auto md:px-[55px]">
  <div class="flex justify-between items-center mt-16">
    <Heading size="headingS25" className="font-semibold text-[#0B60B0]">
      Pruftechnik Solutions for Reliable Performance
    </Heading>

    <div
      class=" hidden md:block h-[84px] md:w-[234px] xl:h-[84px] xl:w-[231px] 2.5xl:h-[115px] 2.5xl:w-[300px]"
    >
      <img
        src="/assets/logo/Pruftechnik.png"
        alt="Fluke Logo"
        class="w-full h-full object-contain"
      />
    </div>
  </div>
</div>

<section>
  <div class="container mx-auto md:px-[55px]">
    <div class="flex flex-col lg:flex-row gap-6 justify-between mt-6">
      <div class="w-full lg:w-3/5">
        <div class="w-[55%] sm:w-[55%] md:w-[45%] rounded-xl mx-auto lg:hidden">
          <img
            src="/assets/img/pruftechnik.png"
            alt="Underground cables IPEC"
            class="w-full h-auto md:h-[258px] object-cover rounded-xl"
          />
        </div>

        <P size="texts18" className="text-gray-700 text-justify mt-5 lg:mt-0">
          Asset Condition Monitoring, a Trusted Partner of Technomax is proud to
          offer Pruftechnik by Fluke—state-of-the-art tools specifically
          developed for precise machine balancing and condition monitoring.
          These technologies are instrumental in enhancing equipment reliability
          and minimizing the risk of unexpected failures.
        </P>
        <P size="texts18" className="text-gray-700 text-justify mt-4 ">
          Fluke Reliability is recognized for its innovative solutions, which
          include a diverse range of systems such as online condition monitoring
          platforms, portable diagnostic tools, and remote service capabilities.
          These advanced tools equip maintenance teams with accurate, real-time
          data, enabling proactive decision-making and improved asset
          management.
        </P>
      </div>
      <div
        class="hidden lg:block w-[80%] sm:w-[80%] md:w-[60%] lg:w-2/5 rounded-xl mx-auto lg:mx-0"
      >
        <img
          src="/assets/img/pruftechnik.png"
          alt="Underground cables IPEC"
          class="w-full h-auto md:h-[300px] lg:h-[350px] object-cover rounded-xl"
        />
      </div>
    </div>
  </div>
</section>

<section class="mt-10">
  <div class="container mx-auto md:px-[55px]">
    <P size="texts18" className="text-[#2F2F2F] text-justify font-semibold">
      Our clients can access a robust lineup of Fluke Reliability products
      designed for optimal machine health and performance, including:
    </P>
    <div
      class="mt-10 flex flex-col md:flex-row md:justify-around gap-5 md:items-center"
    >
      <div class="flex items-center gap-3">
        <Circlehook data="w-4 h-5" />
        <P size="texts18" className="text-[#2F2F2F] text-justify font-medium"
          >Alignment Systems</P
        >
      </div>
      <div class="flex items-center gap-3">
        <Circlehook data="w-4 h-5" />
        <P size="texts18" className="text-[#2F2F2F] text-justify font-medium"
          >Online Condition Monitoring Systems</P
        >
      </div>
    </div>
  </div>
</section>
<section class="mt-20">
  <Productexplore {name} width="w-[90%]" />
</section>

<div class="container mx-auto md:px-[55px] mt-20">
  <div class="flex justify-between items-center mt-16">
    <Heading size="headingS25" className="font-semibold text-[#0B60B0]">
      eMaint: The connected Reliability Solution
    </Heading>

    <div class=" hidden md:block h-[50px] md:w-[144px]">
      <img
        src="/assets/logo/Emaint-Fluke-logo.png"
        alt="Fluke Logo"
        class="w-full h-full object-contain"
      />
    </div>
  </div>
</div>

<section class="">
  <div class="container mx-auto md:px-[55px]">
    <div class="flex flex-col lg:flex-row gap-6 justify-between mt-6">
      <div class="w-full lg:w-3/5 xl:w-2/3">
        <div
          class="w-[55%] sm:w-[55%] md:w-[45%] lg:w-[51%] rounded-xl mx-auto lg:hidden"
        >
          <img
            src="/assets/img/emaint-logo.png"
            alt="Underground cables IPEC"
            class="w-full h-auto md:h-[258px] object-contain object-center rounded-xl"
          />
        </div>

        <P size="texts18" className="text-gray-700 text-justify mt-5 lg:mt-0">
          eMaint, a powerful solution from Fluke Reliability, is a cutting-edge
          maintenance software platform offered by assetconditionmonitoring.com.
          Combining the capabilities of CMMS, EAM, and IIoT in a single,
          cloud-based ecosystem, eMaint enables organizations to maximize
          uptime, improve asset reliability, and streamline maintenance
          operations. By connecting hardware and software, this innovative tool
          provides real-time insights and control, empowering maintenance teams
          to make data-driven decisions and enhance overall operational
          performance.
        </P>
      </div>
      <div
        class="hidden lg:block w-[80%] sm:w-[80%] md:w-[60%] lg:w-2/5 xl:w-1/3 rounded-xl mx-auto lg:mx-0"
      >
        <img
          src="/assets/img/emaint-logo.png"
          alt="emaint"
          class="w-full h-auto lg:h-[265px] xl:h-[306px] object-contain object-center rounded-xl"
        />
      </div>
    </div>
  </div>
</section>
<section class="mt-20">
  <Productexplore name={name2} width="w-[90%]" />
</section>

<section class="bg-[#F7F7F7] mt-16">
  <div class="container px-5 md:px-[55px] pt-[50px] md:pt-[110px]">
    <P size="texts18" className="text-gray-700 text-justify ">
      Contact Asset Condition Monitoring today to schedule a consultation and
      discover how Fluke’s advanced machine balancing and condition monitoring
      solutions can enhance equipment performance, lower maintenance costs, and
      drive operational excellence for your organization.
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
