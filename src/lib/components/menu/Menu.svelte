<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { PUBLIC_APIURL } from "$env/static/public";
  import { fade, fly, slide } from "svelte/transition";
  import { Subtitles } from "lucide-svelte";

  // Add these variables to your existing script section (after your other let declarations)
  let openServiceDropdowns: { [key: number]: boolean } = {}; // Track which service dropdowns are open

  // Add a function to close all service dropdowns
  function closeAllServiceDropdowns() {
    openServiceDropdowns = {};
    isMobileServicesDropdownOpen = false;
  }

  // Modified toggleServiceSubDropdown function
  function toggleServiceSubDropdown(index: number) {
    // Close all other dropdowns first
    const wasOpen = openServiceDropdowns[index];
    openServiceDropdowns = {}; // Close all dropdowns

    // Toggle the clicked one (opposite of what it was)
    openServiceDropdowns[index] = !wasOpen;

    // Trigger reactivity
    openServiceDropdowns = { ...openServiceDropdowns };
  }

  // Add click handlers for main menu items to close service dropdowns
  function handleMainMenuClick() {
    closeAllServiceDropdowns();
    toggleDropdown();
  }

  console.log("Page Data", $page.url.pathname);

  export let isHomePage = false;
  let isScrolled = false;

  // Handle scroll events
  const handleScroll = (): void => {
    isScrolled = window.scrollY > 0;
  };

  export let layoutData: any;

  // React to page changes
  $: {
    if ($page) {
      const currentPath = $page.url.pathname;
      const homePaths = ["/", `/${language}`, `/${language}/`];
      isHomePage = homePaths.includes(currentPath);
      isScrolled = !isHomePage;
    }
  }

  $: shouldShowScrolled = !isHomePage || isScrolled;

  onMount(() => {
    isScrolled = !isHomePage;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  let selectedLanguage: string;
  const currentPath = $page.url.pathname;
  selectedLanguage = currentPath.startsWith("/ar") ? "ar-AE" : "en-US";

  export let language: string;

  function handleLanguageChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const newLanguage = target.value;

    const currentPath = $page.url.pathname;

    const newPath = currentPath.replace(
      `/${language}`,
      `/${newLanguage === "en-US" ? "ae" : "ar-ae"}`
    );

    goto(newPath);
    selectedLanguage = newLanguage;
  }

  let isDropdownOpen = false;
  let isServicesDropdownOpen = false;
  let isMobileServicesDropdownOpen = false;
  let dropdownTimeout: number;

  const toggleDropdown = (): void => {
    isDropdownOpen = !isDropdownOpen;
    if (!isDropdownOpen) {
      closeAllServiceDropdowns();
    }
  };

  const toggleServicesDropdown = (): void => {
    isServicesDropdownOpen = !isServicesDropdownOpen;
  };

  // Modified toggleMobileServicesDropdown function
  const toggleMobileServicesDropdown = (): void => {
    // Close all service sub-dropdowns when main services dropdown is toggled
    openServiceDropdowns = {};
    isMobileServicesDropdownOpen = !isMobileServicesDropdownOpen;
  };

  const handleServicesMouseEnter = (): void => {
    clearTimeout(dropdownTimeout);
    isServicesDropdownOpen = true;
  };

  const handleServicesMouseLeave = (): void => {
    dropdownTimeout = setTimeout(() => {
      isServicesDropdownOpen = false;
    }, 100);
  };

  const handleDropdownMouseEnter = (): void => {
    clearTimeout(dropdownTimeout);
  };

  const handleDropdownMouseLeave = (): void => {
    dropdownTimeout = setTimeout(() => {
      isServicesDropdownOpen = false;
    }, 100);
  };

  // Close service dropdown when clicking outside
  function handleClickOutside(event: MouseEvent): void {
    const servicesDropdown = document.getElementById("services-dropdown");
    if (
      isServicesDropdownOpen &&
      servicesDropdown &&
      !servicesDropdown.contains(event.target as Node)
    ) {
      isServicesDropdownOpen = false;
    }
  }

  onMount(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });

  // Updated Service options with individual item links
  interface ServiceItem {
    name: string;
    link: string;
  }

  interface ServiceOption {
    img?: string;
    title: string;
    link?: string;
    items?: ServiceItem[];
    online?: ServiceItem[];
    offline?: ServiceItem[];
  }

  const serviceOptions: ServiceOption[] = [
    {
      img: "/assets/icon1.svg",
      title: "Condition Monitoring Solutions",
      link: "services/condition-monitoring-services",
      items: [
        {
          name: "Machinery Vibration Analysis",
          link: "services/vibration-analysis",
        },
        {
          name: "Infrared Thermography Testing",
          link: "services/infrared-thermography-testing",
        },
        {
          name: "Ultrasound Bearing Inspection",
          link: "services/ultrasonic-inspection",
        },
        {
          name: "Lube Oil Analysis",
          link: "services/oil-analysis",
        },
        {
          name: "Performance Testing & Analysis of Pumps & Compressors",
          link: "services/performance-testing-of-pumps-compressors",
        },
        {
          name: "Piping Vibration Analysis",
          link: "services/piping-vibration-analysis",
        },
        {
          name: "Motor Current Signature Analysis",
          link: "services/motor-current-signature-analysis",
        },
      ],
    },
    {
      img: "/assets/icon2.svg",
      title: "Advanced Troubleshooting Solutions",
      link: "",
      items: [
        {
          name: "Structural Vibration Analysis",
          link: "services/structural-vibration-analysis",
        },
        {
          name: "ODS (Operating Deflection Shapes) and Modal Analysis",
          link: "services/ods-modal-analysis",
        },
      ],
    },

    {
      img: "/assets/icon3.svg",
      title: "Electrical Testing Solutions",
      link: "",
      online: [
        {
          name: "Partial Discharge Testing & Analysis",
          link: "services/partial-discharge-testing",
        },
        {
          name: "Power Quality & Harmonic Analysis",
          link: "services/power-quality-harmonic-analysis",
        },
        {
          name: "Earth Pit Testing",
          link: "services/earth-pit-testing",
        },
      ],
      offline: [
        {
          name: "Insulation Resistance & Polarization Index",
          link: "services/insulation-resistance-polarisation-test",
        },
        {
          name: "Winding Resistance Measurement",
          link: "services/winding-resistance-test",
        },
        {
          name: "Tan-Delta and Capacitance Measurement",
          link: "services/tan-delta-capacitance-test",
        },
        {
          name: "Partial Discharge Measurement",
          link: "services/partial-discharge-monitoring",
        },
      ],
    },
    {
      img: "/assets/icon5.svg",
      title: "Computational Engineering",
      link: "",
      items: [
        {
          name: "Computational Fluid Dynamics (CFD)",
          link: "services/cfd-analysis-services",
        },
        {
          name: "Finite Element Analysis (FEA)",
          link: "services/fea-services",
        },
      ],
    },

    {
      img: "/assets/icon4.svg",
      title: "Acoustic Testing Solutions",
      link: "",
      items: [
        {
          name: "Compressed Air Leak Detection Services",
          link: "services/compressed-air-leak-detection",
        },
        {
          name: "Flow Measurement Services",
          link: "services/flow-measurement-services",
        },
        {
          name: "Steam Trap Testing",
          link: "services/steam-trap-testing",
        },
      ],
    },
    {
      img: "/assets/icon6.svg",
      title: "Environmental & Occupational Health and Safety (EHS) Assessments",
      link: "",
      items: [
        {
          name: "Environmental Noise Survey",
          link: "services/noise-monitoring",
        },
        {
          name: "Light Survey",
          link: "services/light-survey",
        },
      ],
    },

    {
      img: "/assets/icon7.svg",
      title: "Maintenance Services",
      link: "",
      items: [
        {
          name: "In-situ Dynamic Balancing",
          link: "services/insitu-dynamic-balancing",
        },
        {
          name: "Laser Shaft Alignment",
          link: "services/laser-shaft-alignment-services",
        },
      ],
    },
  ];

  // Function to handle item click and close dropdown - FIXED VERSION
  const handleItemClick = (link: string): void => {
    isServicesDropdownOpen = false;

    // Only navigate if link is not empty and not just whitespace
    if (link && link.trim() !== "") {
      goto(`/${language}/${link}`);
    }
    // If link is empty, do nothing - just close the dropdown
  };

  // Helper function to check if an item should be clickable
  const isItemClickable = (link: string): boolean => {
    return typeof link === "string" && link.trim() !== "";
  };

  let showElement = true;

  function removeElement() {
    showElement = false;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<div
  class="flex flex-col fixed w-full {shouldShowScrolled
    ? 'bg-white shadow-md'
    : 'bg-transparent'} hidden sm:hidden md:hidden lg:flex z-[100]"
>
  <div
    class="w-full h-8 py-2 bg-[#353533] text-white text-xs overflow-hidden relative"
  >
    <div class="text-center">
      AssetConditionMonitoring.com is powered by Technomax - More Services,
      Wider Reach, Trusted Expertise!
    </div>
  </div>

  <style>
    @keyframes marquee {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    .animate-marquee {
      animation: marquee 15s linear infinite;
    }
  </style>

  <div class="flex">
    <div class="flex justify-center items-center w-full">
      <div
        class="w-full relative {shouldShowScrolled
          ? 'bg-[#e3e3e3]'
          : 'backdrop-blur-lg'}"
      >
        <div
          class=" bg-white absolute h-[80px] flex justify-center items-center w-[350px] lg:w-[280px] xl:w-[350px]"
          style=" clip-path:polygon(0% 0, 100% 0, 90% 100%, 0% 100%);"
        >
          <a href="/" class="">
            <img
              src="/assets/logo/ACMlogo1.png"
              alt="logo"
              class="h-10 lg:h-9 xl:h-10"
            />
          </a>
        </div>
        <div class=" h-7 bg-[#AAAAAA] flex justify-end items-center gap-5 px-8">
          <a
            href="mailto:info@assetconditionmonitoring.com"
            class="text-white text-xs hover:underline"
          >
            info@assetconditionmonitoring.com
          </a>
          <!-- on:click={() => goto(`/${language}/contact-us`)} -->
          <span class="text-white text-xs">+971-2-555-1-783</span>
          <button
            on:click={() => goto(`/${language}/enquiry`)}
            class="bg-[#0B60B0] text-white text-sm px-5 py-[2px] rounded-lg
         hover:border-[#0B60B0] hover:text-[#0B60B0] hover:bg-white text-center
          transition-all duration-500 ease-in-out font-bold"
          >
            Enquiry
          </button>
        </div>
        <nav
          class="flex justify-end items-center w-full lg:pr-3 md:pr-0 xl:pr-[40px] {shouldShowScrolled
            ? 'text-black '
            : 'text-white '} p-3"
        >
          <ul
            class="flex justify-evenly lg:gap-4 xl:gap-6 font-medium text-sm lg:text-[12px] xl:text-sm 2xl:text-base uppercase"
          >
            <li class="">
              <a
                class="menu_border"
                href="/{language}"
                class:active-page={$page.url.pathname === `/${language}`}
                >{layoutData.translations[0].menu_option_1}</a
              >
            </li>
            <li class="">
              <a
                class="menu_border"
                href="/{language}/about"
                class:active-page={$page.url.pathname === `/${language}/about`}
                >{layoutData.translations[0].menu_option_2}</a
              >
            </li>
            <li class=" relative" id="services-dropdown">
              <!-- Services dropdown trigger -->
              <button
                class="menu_border flex items-center gap-1 uppercase font-medium"
                class:active-page={$page.url.pathname.includes(
                  `/${language}/services`
                )}
                on:mouseenter={handleServicesMouseEnter}
                on:mouseleave={handleServicesMouseLeave}
                on:click|preventDefault={() => {}}
              >
                {layoutData.translations[0].menu_option_3}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mt-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </li>
            <li class="">
              <a
                class="menu_border"
                href="/{language}/products"
                class:active-page={$page.url.pathname ===
                  `/${language}/products`}
                >{layoutData.translations[0].menu_option_4}</a
              >
            </li>
            <!-- href="/{language}/training" -->
            <li class="disabled">
              <p
                class="menu_border disabled"
                class:active-page={$page.url.pathname ===
                  `/${language}/training`}
              >
                {layoutData.translations[0].menu_option_5}
              </p>
            </li>
            <li class="">
              <a
                class="menu_border"
                href="/{language}/case-studies"
                class:active-page={$page.url.pathname ===
                  `/${language}/case-studies`}
                >{layoutData.translations[0].menu_option_6}</a
              >
            </li>
            <li class="">
              <a
                class="menu_border"
                href="/{language}/blogs"
                class:active-page={$page.url.pathname === `/${language}/blogs`}
                >{layoutData.translations[0].menu_option_8}</a
              >
            </li>
            <li class="">
              <a
                class="menu_border"
                href="/{language}/contact-us"
                class:active-page={$page.url.pathname ===
                  `/${language}/contact-us`}
                >{layoutData.translations[0].menu_option_7}</a
              >
            </li>
            <li class="pl-4 lg:pl-0 xl:pl-2 2xl:pl-4">
              <div class="flex gap-2" style="color: rgb(30 58 138);">
                <select
                  name="language"
                  id="language"
                  class="py-1 px-4 cursor-pointer border border-gray-300 rounded-sm w-[100px] text-xs leading-tight"
                  on:change={handleLanguageChange}
                  bind:value={selectedLanguage}
                >
                  <option value="en-US">English</option>
                  <option value="ar-AE">Arabic</option>
                </select>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>

<!-- Services dropdown menu - Multi-column layout with individual item links -->
<!-- Services dropdown menu - Fixed 2-3-2 column layout -->

{#if isServicesDropdownOpen}
  <div
    class="services-mega-dropdown"
    role="menu"
    tabindex="0"
    on:mouseenter={handleDropdownMouseEnter}
    on:mouseleave={handleDropdownMouseLeave}
    in:fly={{ y: -20, duration: 500, delay: 100 }}
    out:fade={{ duration: 300 }}
  >
    <div class="mega-dropdown-container">
      <div class="mega-dropdown-grid">
        <!-- Column 1: First 2 services -->
        <div class="column-1">
          {#each serviceOptions.slice(0, 2) as service, index}
            <div class="service-column">
              <div class="flex gap-2 items-center">
                <div
                  class="bg-[#C7D200] p-2 rounded-full flex items-center justify-center"
                >
                  {#if service.img}
                    <img
                      src={service.img}
                      alt={service.title}
                      class="w-4 h-4"
                    />
                  {/if}
                </div>
                <h3 class="lg:text-[10px] xl:text-sm font-bold text-[#0B60B0]">
                  {#if index === 0}
                    <a href="/{language}/{service.link}">
                      {service.title}
                    </a>
                  {:else}
                    {service.title}
                  {/if}
                </h3>
              </div>

              {#if service.items}
                <ul
                  class="pl-5 list-disc 2xl:text-[12px] xl:text-[10px] text-left lg:text-[7px] text-gray-700 space-y-1"
                >
                  {#each service.items as item, index}
                    <li>
                      <button
                        type="button"
                        class={isItemClickable(item.link)
                          ? "hover:text-[#0B60B0] transition-colors cursor-pointer"
                          : "text-gray-500 "}
                        disabled={!isItemClickable(item.link)}
                        on:click={() => handleItemClick(item.link)}
                      >
                        {item.name}
                      </button>
                    </li>
                  {/each}
                </ul>
              {/if}

              {#if service.online}
                <div class="mt-3">
                  <h4 class="text-xs font-bold text-[#0B60B0] mb-1">
                    Online Tests:
                  </h4>
                  <ul
                    class="pl-5 list-disc xl:text-[12px] lg:text-[7px] text-gray-700 space-y-1"
                  >
                    {#each service.online as item, index}
                      <li>
                        <button
                          type="button"
                          class={isItemClickable(item.link)
                            ? "hover:text-[#0B60B0] transition-colors cursor-pointer"
                            : "text-gray-500 "}
                          disabled={!isItemClickable(item.link)}
                          on:click={() => handleItemClick(item.link)}
                        >
                          {item.name}
                        </button>
                      </li>
                    {/each}
                  </ul>
                </div>
              {/if}

              {#if service.offline}
                <div>
                  <ul
                    class="pl-5 list-disc xl:text-[12px] lg:text-[7px] text-gray-700 space-y-1"
                  >
                    {#each service.offline as item, index}
                      <li>
                        <button
                          type="button"
                          class={isItemClickable(item.link)
                            ? "hover:text-[#0B60B0] transition-colors cursor-pointer"
                            : "text-gray-500 "}
                          disabled={!isItemClickable(item.link)}
                          on:click={() => handleItemClick(item.link)}
                        >
                          {item.name}
                        </button>
                      </li>
                    {/each}
                  </ul>
                </div>
              {/if}
            </div>
          {/each}
        </div>

        <!-- Column 2: Next 2 services -->
        <div class="column-2">
          {#each serviceOptions.slice(2, 4) as service}
            <div class="service-column">
              <div class="flex gap-2 items-center mb-2">
                <div
                  class="bg-[#C7D200] p-2 rounded-full flex items-center justify-center"
                >
                  {#if service.img}
                    <img
                      src={service.img}
                      alt={service.title}
                      class="w-4 h-4"
                    />
                  {/if}
                </div>
                <h3 class="lg:text-[10px] xl:text-sm font-bold text-[#0B60B0]">
                  <p>
                    {service.title}
                  </p>
                </h3>
              </div>

              {#if service.items}
                <ul
                  class="pl-5 list-disc 2xl:text-[12px] xl:text-[10px] lg:text-[7px] text-gray-700 space-y-1"
                >
                  {#each service.items as item}
                    <li>
                      <button
                        type="button"
                        class={isItemClickable(item.link)
                          ? "hover:text-[#0B60B0] transition-colors cursor-pointer"
                          : "text-gray-500 "}
                        disabled={!isItemClickable(item.link)}
                        on:click={() => handleItemClick(item.link)}
                      >
                        {item.name}
                      </button>
                    </li>
                  {/each}
                </ul>
              {/if}

              {#if service.online}
                <div class="lg:mt-1 xl:mt-2">
                  <h4
                    class="lg:text-[8px] xl:text-xs font-bold text-[#0B60B0] mb-1 pl-[2.8rem]"
                  >
                    Online Tests:
                  </h4>
                  <ul
                    class="pl-5 list-disc xl:text-[12px] lg:text-[7px] text-gray-700 space-y-1"
                  >
                    {#each service.online as item}
                      <li>
                        <button
                          type="button"
                          class={isItemClickable(item.link)
                            ? "hover:text-[#0B60B0] transition-colors cursor-pointer"
                            : "text-gray-500 "}
                          disabled={!isItemClickable(item.link)}
                          on:click={() => handleItemClick(item.link)}
                        >
                          {item.name}
                        </button>
                      </li>
                    {/each}
                  </ul>
                </div>
              {/if}

              {#if service.offline}
                <div class="lg:mt-1 xl:mt-2">
                  <h4
                    class="lg:text-[8px] xl:text-xs font-bold text-[#0B60B0] mb-1 pl-[2.8rem]"
                  >
                    Offline Tests:
                  </h4>
                  <ul
                    class="pl-5 list-disc xl:text-[12px] lg:text-[7px] text-left text-gray-700 space-y-1"
                  >
                    {#each service.offline as item}
                      <li>
                        <button
                          type="button"
                          class={isItemClickable(item.link)
                            ? "hover:text-[#0B60B0] transition-colors cursor-pointer"
                            : "text-gray-500 "}
                          disabled={!isItemClickable(item.link)}
                          on:click={() => handleItemClick(item.link)}
                        >
                          {item.name}
                        </button>
                      </li>
                    {/each}
                  </ul>
                </div>
              {/if}
            </div>
          {/each}
        </div>

        <!-- Column 3: Last 3 services -->
        <div class="column-3">
          {#each serviceOptions.slice(4, 7) as service}
            <div class="service-column">
              <div class="flex gap-2 items-center mb-1">
                <div
                  class="bg-[#C7D200] p-2 rounded-full flex items-center justify-center"
                >
                  {#if service.img}
                    <img
                      src={service.img}
                      alt={service.title}
                      class="w-4 h-4"
                    />
                  {/if}
                </div>
                <h3 class="lg:text-[10px] xl:text-sm font-bold text-[#0B60B0]">
                  <p>
                    {service.title}
                  </p>
                </h3>
              </div>

              {#if service.items}
                <ul
                  class="pl-5 list-disc 2xl:text-[12px] xl:text-[10px] lg:text-[7px] text-gray-700 space-y-1"
                >
                  {#each service.items as item}
                    <li>
                      <button
                        type="button"
                        class={isItemClickable(item.link)
                          ? "hover:text-[#0B60B0] transition-colors cursor-pointer"
                          : "text-gray-500 "}
                        disabled={!isItemClickable(item.link)}
                        on:click={() => handleItemClick(item.link)}
                      >
                        {item.name}
                      </button>
                    </li>
                  {/each}
                </ul>
              {/if}

              {#if service.online}
                <div class="mt-1 space-x-5">
                  <h4 class="text-xs font-bold text-black mb-1 pl-4">
                    Online Tests:
                  </h4>
                  <ul
                    class="pl-5 list-disc xl:text-[12px] lg:text-[10px] text-gray-700 space-y-0"
                  >
                    {#each service.online as item}
                      <li>
                        <button
                          type="button"
                          class={isItemClickable(item.link)
                            ? "hover:text-[#0B60B0] transition-colors cursor-pointer"
                            : "text-gray-500 "}
                          disabled={!isItemClickable(item.link)}
                          on:click={() => handleItemClick(item.link)}
                        >
                          {item.name}
                        </button>
                      </li>
                    {/each}
                  </ul>
                </div>
              {/if}

              {#if service.offline}
                <div class="mt-2 space-x-5">
                  <h4 class="text-xs font-bold text-black mb-1 pl-4">
                    Offline Tests:
                  </h4>
                  <ul
                    class="pl-5 list-disc xl:text-[12px] lg:text-[7px] text-gray-700 space-y-1"
                  >
                    {#each service.offline as item}
                      <li>
                        <button
                          type="button"
                          class={isItemClickable(item.link)
                            ? "hover:text-[#0B60B0] transition-colors cursor-pointer"
                            : "text-gray-500 "}
                          disabled={!isItemClickable(item.link)}
                          on:click={() => handleItemClick(item.link)}
                        >
                          {item.name}
                        </button>
                      </li>
                    {/each}
                  </ul>
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
{/if}

<!--mobile-->
<div class="w-full fixed z-[100]">
  <div
    class="w-full h-8 py-2 bg-[#353533] text-white text-xs overflow-hidden relative block md:block lg:hidden"
  >
    <div class="absolute whitespace-nowrap animate-marquee">
      AssetConditionMonitoring.com is powered by Technomax - More Services,
      Wider Reach, Trusted Expertise!
    </div>
  </div>
  <div
    class="w-full h-7 bg-[#AAAAAA] flex justify-center items-center gap-5 px-5 md:text-center md:block lg:hidden"
  >
    <a
      href="mailto:info@assetconditionmonitoring.com"
      class="text-white text-xs hover:underline"
    >
      info@assetconditionmonitoring.com
    </a>
    <span class="text-white text-xs">+971-2-555-1-783</span>
  </div>
  <nav
    class="bg-white shadow-md border-gray-200 w-full block md:block lg:hidden"
    style="margin-bottom: 100px"
  >
    <div
      class="bg-denim-800 flex lg:hidden flex-wrap items-center justify-between mx-auto p-2"
    >
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse w-3/5">
        <img
          src="/assets/logo/ACMlogo1.png"
          alt="Logo"
          class=" sm:w-[37%] w-[55%] lg:w-full"
        />
      </a>
      <div class="flex items-center">
        <div class="inline-flex items-end pr-2">
          <div class="flex gap-2 text-xs">
            <select
              name="language"
              id="language"
              class="bg-gray-200 border border-gray-300 rounded-sm md:w-[54px] w-[60px] text-xs leading-tight p-0.5"
              on:change={handleLanguageChange}
              bind:value={selectedLanguage}
            >
              <option value="en-US">Eng</option>
              <option value="ar-AE">Ar</option>
            </select>
          </div>
        </div>
        <div>
          <button
            on:click={toggleDropdown}
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#0B60B0]
  rounded-lg lg:hidden focus:outline-none"
            aria-label={isDropdownOpen ? "Close menu" : "Open menu"}
          >
            {#if isDropdownOpen}
              <!-- Close Icon (X) -->
              <svg
                class="w-6 h-6 bg-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            {:else}
              <!-- Hamburger Icon -->
              <svg
                class="w-6 h-6 text-[#0B60B0]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            {/if}
          </button>
          {#if isDropdownOpen}
            <div
              transition:slide
              class="absolute flex justify-start items-start top-[118px] sm:top-[130px] md:top-[140px] right-0 bg-white border shadow-md w-full z-50"
            >
              <div class="w-full">
                <!-- Home -->
                <div class="border-b border-gray-200">
                  <a
                    href="/{language}"
                    class="flex items-center justify-between w-full py-4 px-4 text-[15px] md:text-sm text-golden font-normal hover:bg-gray-50 transition-colors duration-200"
                    class:active-page={$page.url.pathname === `/${language}`}
                    on:click={handleMainMenuClick}
                  >
                    <span>{layoutData.translations[0].menu_option_1}</span>
                  </a>
                </div>

                <!-- About -->
                <div class="border-b border-gray-200">
                  <a
                    href="/{language}/about"
                    class="flex items-center justify-between w-full py-4 px-4 text-[15px] md:text-sm text-golden font-normal hover:bg-gray-50 transition-colors duration-200"
                    class:active-page={$page.url.pathname ===
                      `/${language}/about`}
                    on:click={handleMainMenuClick}
                  >
                    <span>{layoutData.translations[0].menu_option_2}</span>
                  </a>
                </div>

                <!-- Services with dropdown -->
                <div class="border-b border-gray-200">
                  <button
                    class="flex items-center justify-between w-full py-4 px-4 text-[15px] md:text-sm text-golden font-normal hover:bg-gray-50 transition-colors duration-200 text-left"
                    class:active-page={$page.url.pathname.includes(
                      `/${language}/services`
                    )}
                    on:click|stopPropagation={toggleMobileServicesDropdown}
                  >
                    <span>{layoutData.translations[0].menu_option_3}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 transition-transform duration-200 flex-shrink-0"
                      class:rotate-180={isMobileServicesDropdownOpen}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>

                  {#if isMobileServicesDropdownOpen}
                    <div class="bg-gray-50 border-t border-gray-200">
                      {#each serviceOptions as option, index}
                        <div class="border-b border-gray-200 last:border-b-0">
                          <!-- Main service option with dropdown -->
                          <button
                            class="w-full py-3 px-6 text-sm text-gray-700 hover:text-[#0B60B0] hover:bg-white flex items-center justify-between transition-colors duration-200 text-left"
                            on:click|stopPropagation={() =>
                              toggleServiceSubDropdown(index)}
                          >
                            <span class="text-left text-xs font-medium"
                              >{option.title}</span
                            >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-4 w-4 transition-transform duration-200 flex-shrink-0"
                              class:rotate-180={openServiceDropdowns[index]}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>

                          <!-- Sub-services dropdown -->
                          {#if openServiceDropdowns[index]}
                            <div class="bg-white border-t border-gray-300">
                              <!-- Main service page link (only if link exists and is not empty) -->
                              {#if option.link && option.link.trim() !== ""}
                                <a
                                  href="/{language}/{option.link}"
                                  class="flex items-center justify-between w-full py-2 px-8 text-xs text-gray-600 hover:text-[#0B60B0] hover:bg-gray-50 transition-colors duration-200 border-b border-gray-200 font-medium"
                                  on:click={toggleDropdown}
                                >
                                  <span>Overview - {option.title}</span>
                                </a>
                              {/if}

                              <!-- Items array (for most services) -->
                              {#if option.items && option.items.length > 0}
                                {#each option.items as item}
                                  <a
                                    href="/{language}/{item.link}"
                                    class="flex items-center justify-between w-full py-2 px-8 text-xs text-gray-600 hover:text-[#0B60B0] hover:bg-gray-50 transition-colors duration-200"
                                    on:click={toggleDropdown}
                                  >
                                    <span>{item.name}</span>
                                  </a>
                                {/each}
                              {/if}

                              <!-- Online services (for Electrical Testing Solutions) -->
                              {#if option.online && option.online.length > 0}
                                <div
                                  class="px-8 py-2 text-xs font-semibold text-gray-800 bg-gray-100 border-b border-gray-200"
                                >
                                  Online Services
                                </div>
                                {#each option.online as onlineService}
                                  <a
                                    href="/{language}/{onlineService.link}"
                                    class="flex items-center justify-between w-full py-2 px-10 text-xs text-gray-600 hover:text-[#0B60B0] hover:bg-gray-50 transition-colors duration-200"
                                    on:click={toggleDropdown}
                                  >
                                    <span>{onlineService.name}</span>
                                  </a>
                                {/each}
                              {/if}

                              <!-- Offline services (for Electrical Testing Solutions) -->
                              {#if option.offline && option.offline.length > 0}
                                <div
                                  class="px-8 py-2 text-xs font-semibold text-gray-800 bg-gray-100 border-b border-gray-200"
                                >
                                  Offline Services
                                </div>
                                {#each option.offline as offlineService}
                                  <a
                                    href="/{language}/{offlineService.link}"
                                    class="flex items-center justify-between w-full py-2 px-10 text-xs text-gray-600 hover:text-[#0B60B0] hover:bg-gray-50 transition-colors duration-200"
                                    on:click={toggleDropdown}
                                  >
                                    <span>{offlineService.name}</span>
                                  </a>
                                {/each}
                              {/if}
                            </div>
                          {/if}
                        </div>
                      {/each}
                    </div>
                  {/if}
                </div>

                <!-- Products -->
                <div class="border-b border-gray-200">
                  <a
                    href="/{language}/products"
                    class="flex items-center justify-between w-full py-4 px-4 text-[15px] md:text-sm text-golden font-normal hover:bg-gray-50 transition-colors duration-200"
                    class:active-page={$page.url.pathname ===
                      `/${language}/products`}
                    on:click={handleMainMenuClick}
                  >
                    <span>{layoutData.translations[0].menu_option_4}</span>
                  </a>
                </div>

                <!-- Training -->
                <div class="border-b border-gray-200">
                  <!-- href="/{language}/training"
                  on:click={handleMainMenuClick} -->
                  <p
                    class="flex items-center justify-between w-full py-4 px-4 text-[15px] md:text-sm text-golden font-normal hover:bg-gray-50 transition-colors duration-200"
                    class:active-page={$page.url.pathname ===
                      `/${language}/training`}
                  >
                    <span>{layoutData.translations[0].menu_option_5}</span>
                  </p>
                </div>

                <!-- Case Studies -->
                <div class="border-b border-gray-200">
                  <a
                    href="/{language}/case-studies"
                    class="flex items-center justify-between w-full py-4 px-4 text-[15px] md:text-sm text-golden font-normal hover:bg-gray-50 transition-colors duration-200"
                    class:active-page={$page.url.pathname ===
                      `/${language}/case-studies`}
                    on:click={handleMainMenuClick}
                  >
                    <span>{layoutData.translations[0].menu_option_6}</span>
                  </a>
                </div>

                <!-- Blogs -->
                <div class="border-b border-gray-200">
                  <a
                    href="/{language}/blogs"
                    class="flex items-center justify-between w-full py-4 px-4 text-[15px] md:text-sm text-golden font-normal hover:bg-gray-50 transition-colors duration-200"
                    class:active-page={$page.url.pathname ===
                      `/${language}/blogs`}
                    on:click={handleMainMenuClick}
                  >
                    <span>{layoutData.translations[0].menu_option_8}</span>
                  </a>
                </div>

                <!-- Contact Us -->
                <div class="border-b border-gray-200 last:border-b-0">
                  <a
                    href="/{language}/contact-us"
                    class="flex items-center justify-between w-full py-4 px-4 text-[15px] md:text-sm text-golden font-normal hover:bg-gray-50 transition-colors duration-200"
                    class:active-page={$page.url.pathname ===
                      `/${language}/contact-us`}
                    on:click={handleMainMenuClick}
                  >
                    <span>{layoutData.translations[0].menu_option_7}</span>
                  </a>
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </nav>
</div>

<style>
  .rotate-180 {
    transform: rotate(180deg);
  }

  .transition-transform {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
  }

  .transition-colors {
    transition-property: color, background-color, border-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
  }
  /* Services Mega Dropdown Styles - Irregular Column Heights */
  /* Services Mega Dropdown Styles - 2-3-2 Grid Layout */
  /* Services Mega Dropdown Styles - 2-3-2 Layout Pattern */
  /* Services Mega Dropdown Styles - Fixed 2-3-2 Column Layout */
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .animate-marquee {
    animation: marquee 15s linear infinite;
  }

  .services-mega-dropdown {
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    width: 90vw;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    z-index: 200;
    padding: 20px;
    overflow: hidden;
    max-height: auto;
  }

  .mega-dropdown-container {
    padding: 0;
  }

  .mega-dropdown-grid {
    display: flex;
    gap: 0; /* Gapless as requested */
    height: auto;
  }

  /* Three fixed columns with exact proportions */
  .column-1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-right: 15px;
  }

  .column-2 {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    /* border-left: 1px solid #e5e5e5; */
    /* border-right: 1px solid #e5e5e5; */
  }

  .column-3 {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 15px;
  }

  .service-column {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .service-column ul {
    list-style-type: disc;
    padding-left: 3.3rem; /* or use Tailwind: pl-4 */
    margin-top: 0.5rem;
  }

  .service-column:last-child {
    margin-bottom: 0;
  }

  .service-column h3 a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .mega-dropdown-grid {
      flex-direction: column;
      gap: 20px;
    }

    .column-1,
    .column-2,
    .column-3 {
      padding: 0;
      border: none;
    }

    .service-column {
      margin-bottom: 15px;
    }
  }
</style>
