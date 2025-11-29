<script>
  // @ts-nocheck

  /** @type {import('./$types').PageData} */
  export let data;
  import "../../app.css";
  import { PUBLIC_APIURL } from "$env/static/public";
  import { onMount } from "svelte";
  import Menu from "$lib/components/menu/Menu.svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  // Add Font Awesome CDN
  onMount(() => {
    // const link = document.createElement("link");
    // link.rel = "stylesheet";
    // link.href =
    //   "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
    // document.head.appendChild(link);
  });

  let isScrolled = false;

  const handleScroll = () => {
    isScrolled = window.scrollY > 0;
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  let isDropdownOpen = false;
  let isSubmenuOpen = false;

  // export let data.layout;

  let selectedLanguage;

  if (
    data.langParam === "/ae" ||
    data.langParam === "" ||
    data.langParam === undefined
  ) {
    selectedLanguage = "en-US";
  } else if (data.langParam === "/ar") {
    selectedLanguage = "ar-AE";
  }

  let language;

  // @ts-ignore
  function handleLanguageChange(event) {
    const newLanguage = event.target.value;
    let route;

    if (newLanguage === "en-US") {
      const currentPath = $page.url.pathname;

      const newPath = currentPath.replace(`/${language}`, `/en`);

      goto(newPath);
      route = "/en";
    } else if (newLanguage === "ar-AE") {
      const currentPath = $page.url.pathname;

      const newPath = currentPath.replace(`/${language}`, `/ar`);
      goto(newPath);
    }

    selectedLanguage = newLanguage;
  }

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
    if (!isDropdownOpen) {
      isSubmenuOpen = false; // Close submenu when main dropdown is closed
    }
  }

  function toggleSubmenu() {
    isSubmenuOpen = !isSubmenuOpen;
  }
  $: isHomePage =
    $page.url.pathname === "/" ||
    $page.url.pathname === `/${data.langParam}` ||
    $page.url.pathname === `/${data.langParam}/`;
</script>

<div>
  <Menu
    logoSrc="{PUBLIC_APIURL}/assets/{data.layout.header_logo}"
    language={data.langParam}
    layoutData={data.layout}
    {isHomePage}
  />
</div>

<svelte:head>
  <meta name="robots" content="index, follow" />
</svelte:head>

<slot></slot>

<footer class="bg-[#0B60B0]">
  <div class="text-white pt-4 py-5 md:py-5 pr-5 md:px-10 ml-6">
    <div
      class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 content-center pt-4 md:pt-12"
    >
      <div class="pb-0 flex flex-col gap-5">
        <a href="/" class="logo flex justify-start md:justify-start">
          <img
            src="/assets/logo/AssetConditionMonitoringlogo2.png"
            class="w-[50%] md:w-[35%] lg:w-[60%] 5xl:w-[40%]"
            alt="Image1"
          />
        </a>
        <p
          class="pr-0 md:pr-3 lg:pr-0 text-justify text-[14px] leading-6 md:text-base lg:text-[14px] 2xl:pr-[20px]"
        >
          {data.layout.translations[0].footer_description}
        </p>

        <ul class="flex gap-3 pb-6">
          <li class="py-2">
            <div
              class="w-[30px] h-[30px] leading-[28px] border border-white text-white text-center transition-all ease-in-out duration-500 flex items-center justify-center hover:bg-[#FFFFFF]"
            >
              <a
                href="https://www.facebook.com/technomaxme"
                target="_blank"
                rel="noopener noreferrer"
                class=""
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 30 30"
                  class="fill-white transition-colors duration-500 hover:fill-[#0B60B0]"
                >
                  <path
                    d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"
                  ></path>
                </svg>
              </a>
            </div>
          </li>
          <li class="py-2">
            <div
              class="w-[30px] h-[30px] leading-[28px] border border-white text-white text-center transition-all ease-in-out duration-500 flex items-center justify-center hover:bg-[#FFFFFF]"
            >
              <a
                href="https://www.instagram.com/technomax_me"
                target="_blank"
                rel="noopener noreferrer"
                class=""
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="fill-white transition-colors duration-500 hover:fill-[#0B60B0]"
                >
                  <path
                    d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"
                  ></path>
                </svg>
              </a>
            </div>
          </li>
          <li class="py-2">
            <div
              class="w-[30px] h-[30px] leading-[28px] border border-white text-white text-center transition-all ease-in-out duration-500 flex items-center justify-center hover:bg-[#FFFFFF]"
            >
              <a
                href="https://www.linkedin.com/company/technomaxme"
                target="_blank"
                rel="noopener noreferrer"
                class=""
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 30 30"
                  class="fill-white transition-colors duration-500 hover:fill-[#0B60B0]"
                >
                  <path
                    d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"
                  ></path>
                </svg>
              </a>
            </div>
          </li>
          <li class="py-2">
            <div
              class="w-[30px] h-[30px] leading-[28px] border border-white text-white text-center transition-all ease-in-out duration-500 flex items-center justify-center hover:bg-[#FFFFFF]"
            >
              <a
                href="https://twitter.com/technomaxme"
                target="_blank"
                rel="noopener noreferrer"
                class=""
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="22"
                  height="22"
                  viewBox="0 0 50 50"
                  class="fill-white transition-colors duration-500 hover:fill-[#0B60B0]"
                >
                  <path
                    d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"
                  ></path>
                </svg>
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div class="md:pl-0 lg:pl-8 py-4 lg:py-0">
        <div class="single-footer-widget">
          <h3 class="font-bold text-2xl pb-2">
            {data.layout.translations[0].quicklinks_header}
          </h3>
          <div class="flex">
            <ul class="import-link pt-4 border-t-2 border-white w-2/4">
              <li
                class="text-white mb-2 list-item list-item-before text-[14px]"
              >
                <a class="text-white hover:font-semibold" href="/"
                  >{data.layout.translations[0].quick_link1}</a
                >
              </li>
              <li
                class="text-white mb-2 list-item list-item-before text-[14px]"
              >
                <a
                  class="text-white hover:font-semibold"
                  href="/{data.langParam}/about"
                  >{data.layout.translations[0].quick_link2}</a
                >
              </li>
              <li
                class="text-white mb-2 list-item list-item-before text-[14px]"
              >
                <a
                  class="text-white hover:font-semibold"
                  href="/{data.langParam}/services/condition-monitoring-services"
                  >{data.layout.translations[0].quick_link3}
                </a>
              </li>
              <li
                class="text-white mb-2 list-item list-item-before text-[14px]"
              >
                <a
                  class="text-white hover:font-semibold"
                  href="/{data.langParam}/products"
                  >{data.layout.translations[0].quick_link4}</a
                >
              </li>
              <li
                class="text-white mb-2 list-item list-item-before text-[14px]"
              >
                <a
                  class="text-white hover:font-semibold"
                  href="/{data.langParam}/blogs"
                  >{data.layout.translations[0].quick_link5}</a
                >
              </li>
            </ul>
            <ul class="import-link pt-4 border-t-2 border-white">
              <li
                class="text-white mb-2 list-item list-item-before text-[14px]"
              >
                <!-- href="/{data.langParam}/training" -->
                <p class="text-white hover:font-semibold">
                  {data.layout.translations[0].quick_link6}
                </p>
              </li>
              <li
                class="text-white mb-2 list-item list-item-before text-[14px]"
              >
                <a
                  class="text-white hover:font-semibold"
                  href="/{data.langParam}/case-studies"
                  >{data.layout.translations[0].quick_link7}</a
                >
              </li>
              <li
                class="text-white mb-2 list-item list-item-before text-[14px]"
              >
                <a
                  class="text-white hover:font-semibold"
                  href="/{data.langParam}/qhsepolicy"
                  >{data.layout.translations[0].quick_link8}
                </a>
              </li>
              <li
                class="text-white mb-2 list-item list-item-before text-[14px]"
              >
                <a
                  class="text-white hover:font-semibold"
                  href="/{data.langParam}/contact-us"
                  >{data.layout.translations[0].quick_link9}</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          class="mt-10 flex justify-center gap-3 h-fit md:w-[450px] w-[320px]"
        >
          <svg
            viewBox="0 0 9 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-[12px]"
          >
            <rect width="9" height="50" fill="#C7D200" />
          </svg>
          <p class=" text-white">
            <span class="md:text-md text-[10px] md:text-[14px] tracking-widest">
              <b> Our Reach: UAE | Oman | KSA | North Africa </b></span
            >
            <span class="text-[10px] md:text-[14px] md:text-md">
              <br /> Empowering industries across the Middle East and North Africa
              (MENA).</span
            >
          </p>
        </div>
      </div>

      <div class="pb-4 lg:py-0">
        <div class="single-footer-widget">
          <h3 class="font-bold text-2xl pb-2">
            {data.layout.translations[0].address_header}
          </h3>

          <ul class=" pt-4 border-t-2 border-white w-4/5">
            <li class="flex">
              <i class="pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#fff"
                  ><path
                    d="M440-400h80v-120h120v-80H520v-120h-80v120H320v80h120v120Zm40 214q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
                  /></svg
                >
              </i>
              <div class="grid">
                <span class="text-[14px]">
                  {data.layout.translations[0].address}
                </span>
              </div>
            </li>
            <li class="flex pt-4">
              <i class="pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#fff"
                  ><path
                    d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"
                  /></svg
                >
              </i>
              <div>
                <span class="text-[14px]">
                  <a href="mailto:Info@assetconditionmoitoring.com"
                    >{data.home.mail}</a
                  ></span
                >
              </div>
            </li>
            <li class="flex pt-4">
              <i class="pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#fff"
                  ><path
                    d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"
                  /></svg
                ></i
              >
              <div class="grid">
                <a href="tel:+97126324022">{data.home.phone}</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center"></div>
  <div
    class="bg-[#0B60B0] flex justify-center items-center py-3 text-white border-t-2 border-white"
  >
    <p class="text-center text-[14px] px-2">
      {@html data.layout.translations[0].copyright_text}
    </p>
  </div>
</footer>
