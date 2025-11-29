<script lang="ts">
  import { PUBLIC_APIURL } from "$env/static/public";
  import Thickline from "$lib/icons/svgs/thickline.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  import ShadowArrow from "$lib/icons/svgs/shadowArrow.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Explore from "$lib/components/ui/explore/Explore.svelte";
  import YellowDot from "$lib/icons/svgs/yellowDot.svelte";
  import Boxview from "$lib/components/boxview/BoxView.svelte";
  import Downarrow from "$lib/icons/svgs/downarrow.svelte";
  import { slide } from "svelte/transition";
  import Listview from "$lib/components/listview/ListView.svelte";
  import { list } from "postcss";
  import { goto } from "$app/navigation";
  export let data;

  interface bullets {
    title?: string;
    text?: string;
  }
  const bullet: bullets[] = [
    {
      title: "",
      text: "",
    },
    {
      title: "",
      text: "",
    },
    {
      title: "",
      text: "",
    },
    {
      title: "",
      text: "",
    },
    {
      title: "",
      text: "",
    },
  ];
  const bullet2: bullets[] = [
    {
      title: "Consultation:",
      text: "Discuss your maintenance challenges and goals with our experts.",
    },
    {
      title: "Demonstration:",
      text: "Experience a live demo of eMaint CMMS tailored to your operations.",
    },
    {
      title: "Customization:",
      text: "Configure the system to align with your specific workflows and requirements.",
    },
    {
      title: "Training and Support:",
      text: "Receive comprehensive training and ongoing support to ensure successful adoption.",
    },
  ];
  const bullet3: bullets[] = [
    {
      title: "Expertise:",
      text: "In-depth knowledge of maintenance management solutions and industry best practices.",
    },
    {
      title: "Comprehensive Solutions:",
      text: " Access to a full range of Fluke products and services to complement eMaint CMMS.",
    },
    {
      title: "Customer-Centric Approach:",
      text: "Dedicated support to help you achieve your maintenance and reliability objectives.",
    },
    {
      title: "Proven Track Record:",
      text: "A history of successful implementations across various industries.",
    },
  ];
  interface listmodel {
    img?: string;
    title?: string;
    text?: string;
  }

  const lists: listmodel[] = [
    {
      img: "/assets/logo/increased-uptime.svg",
      title: "Increased Equipment Uptime",
      text: "Proactive maintenance reduces unexpected breakdowns, keeping operations running smoothly.",
    },
    {
      img: "/assets/logo/costeffective.svg",
      title: "Cost Savings",
      text: "Efficient maintenance planning and inventory management lead to significant cost reductions.",
    },
    {
      img: "/assets/logo/regulatory-compliance.svg",
      title: "Regulatory Compliance",
      text: "Maintain compliance with industry standards through accurate record-keeping and audit trails.",
    },
    {
      img: "/assets/logo/enhanced-productivity.svg",
      title: "Enhanced Productivity",
      text: "Streamlined processes and mobile access improve technician efficiency and response times.",
    },
    {
      img: "/assets/logo/datadecision.svg",
      title: "Data-Driven Decisions",
      text: "Real-time data and analytics support informed decision-making and continuous improvement.",
    },
  ];
</script>

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
            eMAINT CMMS
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
        class="h-[30px] md:h-[68px] w-[50px] md:w-[122px] xl:w-[145px] 2.5xl:w-[170px] 2.5xl:h-[70px]"
      >
        <img
          src="/assets/logo/Emaint-Fluke-logo.png"
          alt="emaint Logo"
          class="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>
</section>

<section class="mt-10">
  <div class="container mx-auto md:px-[55px]">
    <Heading size="headingS25" className="font-bold text-[#0B60B0] mb-6">
      eMaint CMMS by Fluke Reliability: Streamline Maintenance with
      AssetConditionMonitoring.com
    </Heading>
    <P size="texts18" className="text-gray-700 text-justify ">
      At AssetConditionMonitoring.com, we are proud to supply eMaint CMMS, an
      award-winning Computerized Maintenance Management System (CMMS) from Fluke
      Reliability. Designed to enhance maintenance operations, eMaint CMMS
      offers a robust, cloud-based platform that integrates seamlessly with your
      existing processes, empowering your organization to achieve operational
      excellence.
    </P>
  </div>
</section>
<section class="mt-10">
  <div class="container mx-auto md:px-[55px]">
    <Heading size="headingS25" className="font-bold text-[#0B60B0] mb-6">
      Why Choose eMaint CMMS?
    </Heading>
    <P size="texts18" className="text-gray-700 text-justify ">
      eMaint CMMS is a comprehensive solution that addresses the diverse needs
      of maintenance teams across various industries. Its key features include:
    </P>
  </div>
</section>

<!-- <section>
  <div class="container mx-auto md:px-[55px]">
    <div class="flex flex-col lg:flex-row gap-6 justify-between mt-10">
      <div class="w-full lg:w-3/5">
        <div class="w-[55%] sm:w-[55%] md:w-[45%] rounded-xl mx-auto lg:hidden">
          <img
            src="/assets/img/emaint-logo.png"
            alt="Underground cables IPEC"
            class="w-full h-auto md:h-[258px] object-contain object-center rounded-xl"
          />
        </div>
        <ul
          class="xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] text-[#2F2F2F] pt-6 md:pt-0"
        >
          {#each bullet as points}
            <li
              class="relative pl-5 font-semibold flex justify-start before:content-['•'] before:absolute before:left-0 before:text-[#2F2F2F]"
            >
              {points.title} <span class="ml-2 font-normal">{points.text}</span>
            </li>
          {/each}
        </ul>
      </div>
      <div
        class="hidden lg:block w-[80%] sm:w-[80%] md:w-[60%] lg:w-2/5 rounded-xl mx-auto lg:mx-0"
      >
        <img
          src="/assets/img/emaint-logo.png"
          alt="Underground cables IPEC"
          class="w-full h-auto md:h-[300px] lg:h-[350px] object-contain object-center rounded-xl"
        />
      </div>
    </div>
  </div>
</section> -->

<section class="mt-20 bg-[linear-gradient(135deg,#F0F7FA,#FCFDF3)] w-full">
  <div class="container mx-auto md:px-[55px] p-5 md:p-10">
    <div class="flex flex-col md:flex-row justify-around items-center">
      <div class="flex flex-col items-center text-center pt-6 md:pt-0">
        <div
          class="lg:w-10 lg:h-12 flex items-center justify-center mb-8 w-11 h-11"
        >
          <img
            src="/assets/logo/emaint-svg-1.svg"
            alt=""
            class="object-cover"
          />
        </div>
        <div class="max-w-48">
          <p class="text-[#2F2F2F] text-sm font-bold p-1">
            Simplifies and organise your work
          </p>
        </div>
      </div>
      <div class="flex flex-col items-center text-center pt-6 md:pt-6">
        <div
          class="lg:w-10 lg:h-12 flex items-center justify-center mb-8 w-11 h-11"
        >
          <img
            src="/assets/logo/emaint-svg-2.svg"
            alt=""
            class="object-cover"
          />
        </div>
        <div class="max-w-48">
          <p class="text-[#2F2F2F] text-sm font-bold p-1">
            Empowers you to prevent failures and maximise uptime
          </p>
        </div>
      </div>
      <div class="flex flex-col items-center text-center pt-6 md:pt-11">
        <div
          class="lg:w-10 lg:h-12 flex items-center justify-center mb-8 w-11 h-11"
        >
          <img
            src="/assets/logo/emaint-svg-3.svg"
            alt=""
            class="object-cover"
          />
        </div>
        <div class="max-w-48">
          <p class="text-[#2F2F2F] text-sm font-bold p-1">
            Strengthens machine reliability — eliminating costs and driving
            production
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="mt-10">
  <Listview
    mainheading="Benefits of Implementing eMaint CMMS"
    paragraph="Implementing eMaint CMMS through AssetConditionMonitoring.com offers numerous advantages:"
    {lists}
  />
</section>

<section class="mt-20">
  <div class="container mx-auto md:px-[55px]">
    <h3
      class="font-bold text-[#0B60B0] mb-6 xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px]"
    >
      Getting Started with eMaint CMMS
    </h3>
    <P size="texts18" className="text-gray-700 text-left">
      Implementing eMaint CMMS with AssetConditionMonitoring.com is
      straightforward:
    </P>
  </div>
</section>
<section>
  <div class="container mx-auto md:px-[55px]">
    <div class="flex flex-col lg:flex-row gap-6 justify-between mt-10">
      <div class="w-full">
        <ul
          class="xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] text-[#2F2F2F] pt-6 md:pt-0 space-y-5"
        >
          {#each bullet2 as points}
            <li
              class="relative pl-5 font-semibold flex justify-start before:content-['•'] before:absolute before:left-0 before:text-[#2F2F2F]"
            >
              {points.title} <span class="ml-2 font-normal">{points.text}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>

<section
  class="relative w-full h-56 md:h-64 lg:h-72 mt-24 scroll-mt-20"
  id="why-choose-us"
>
  <img
    src="{PUBLIC_APIURL}/assets/{data.productDetails.partner_banner}"
    alt="Handshake partnership"
    class="absolute inset-0 w-full h-full object-cover object-center"
    style="z-index: 1;"
  />
  <div
    class="absolute inset-0 bg-[#00000099] bg-opacity-60 flex items-center justify-center"
    style="z-index: 2;"
  >
    <Heading
      size="sectionMainHeading"
      className="font-bold text-white text-center"
    >
      Why Partner with Asset condition monitoring.com ?
    </Heading>
  </div>
</section>

<section class="mt-24">
  <div class="container mx-auto md:px-[55px]">
    <h3
      class="font-bold text-[#0B60B0] mb-6 xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px]"
    >
      As a trusted supplier of Fluke Reliability products,
      AssetConditionMonitoring.com offers:
    </h3>
  </div>
</section>
<section class="mt-10">
  <div class="container mx-auto md:px-[55px]">
    <div class="flex flex-col lg:flex-row gap-6 justify-between mt-10">
      <div class="w-full">
        <ul
          class="xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] text-[#2F2F2F] pt-6 md:pt-0 space-y-5"
        >
          {#each bullet3 as points}
            <li
              class="relative pl-5 font-semibold flex justify-start before:content-['•'] before:absolute before:left-0 before:text-[#2F2F2F]"
            >
              {points.title} <span class="ml-2 font-normal">{points.text}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#F7F7F7] mt-20">
  <div class="container px-5 md:px-[55px] pt-[50px] md:pt-[110px]">
    <P size="texts18" className="text-gray-700 text-justify ">
      Ready to transform your maintenance operations with <span
        class="font-bold">eMaint CMMS?</span
      > Contact AssetConditionMonitoring.com today to schedule a consultation and
      discover how we can help you achieve connected reliability.
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
