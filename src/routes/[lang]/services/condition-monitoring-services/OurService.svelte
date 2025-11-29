<script lang="ts">
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  import { PUBLIC_APIURL } from "$env/static/public";

  export let data: {
    langParam: string;
    services: {
      translations: { our_services: string }[];
      our_services_img1: string;
      our_services_img2: string;
      our_services_img3: string;
      our_services_img4: string;
      our_services_img5: string;
      our_services_img6: string;
      our_services_img7: string;
    };
  };

  const services = [
    {
      title: "Machinery Vibration Analysis",
      image: data.services.our_services_img1,
      href: `/${data.langParam}/services/vibration-analysis`,
      description:
        "Comprehensive vibration monitoring and analysis for industrial machinery",
    },
    {
      title: "Infrared Thermography Testing",
      image: data.services.our_services_img2,
      href: `/${data.langParam}/services/infrared-thermography-testing`,
      description:
        "Advanced thermal imaging solutions for preventive maintenance",
    },
    {
      title: "Ultrasound Bearing Inspection",
      image: data.services.our_services_img3,
      href: `/${data.langParam}/services/ultrasonic-inspection`,
      description:
        "Precision ultrasonic testing for bearing condition assessment",
    },
    {
      title: "Lube Oil Analysis",
      image: data.services.our_services_img4,
      href: `/${data.langParam}/services/oil-analysis`,
      description: "Complete lubricant testing and contamination analysis",
    },
    {
      title: "Performance Testing & Analysis of Pumps and Compressors",
      image: data.services.our_services_img5,
      href: `/${data.langParam}/services/performance-testing-of-pumps-compressors`,
      description: "Optimization and efficiency testing for critical equipment",
    },
    {
      title: "Piping Vibration Analysis",
      image: data.services.our_services_img6,
      href: `/${data.langParam}/services/piping-vibration-analysis`,
      description:
        "Structural integrity and vibration assessment for piping systems",
    },
    {
      title: "Motor Current Signature Analysis",
      image: data.services.our_services_img7,
      href: `/${data.langParam}/services/motor-current-signature-analysis`,
      description: "Electrical signature analysis for motor health monitoring",
    },
  ];
</script>

<div class="container mx-auto px-4 py-16 scroll-mt-[100px]" id="our-services">
  <!-- Header Section -->
  <div class="text-center mb-16">
    <div class="flex justify-center items-center gap-3 mb-4">
      <Heading size="bannerMaih1" className="text-[#1846A3]">
        {data.services.translations[0].our_services}
      </Heading>
      <Yellowline
        topLine="lg:w-10 lg:h-4 w-8 h-3 pt-3"
        bottomLine="lg:h-4 lg:w-10 ml-4 w-8 h-3 pt-3"
      />
    </div>
  </div>

  <!-- Services Grid -->
  <div
    class="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 w-full mx-auto lg:pl-[20px]"
  >
    {#each services as service, index}
      <div
        class="group relative h-full max-w-sm mx-auto w-full {index >= 4
          ? 'centered-item'
          : ''}"
      >
        <a
          href={service.href}
          class="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-[#1846A3]/30 backdrop-blur-sm"
        >
          <!-- Image Container -->
          <div class="relative h-48 w-full overflow-hidden flex-shrink-0">
            <img
              src={`${PUBLIC_APIURL}/assets/${service.image}`}
              alt={service.title}
              class="w-full object-scale-down h-full transition-transform duration-700 group-hover:scale-110"
            />
            <!-- Enhanced Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>

          <!-- Content Container -->
          <div class="flex flex-col flex-grow p-4 relative">
            <h3
              class="text-lg font-bold text-[#1846A3] mb-2 line-clamp-2 group-hover:text-[#0f2d5c] transition-colors duration-300 leading-tight"
            >
              {service.title}
            </h3>

            <p
              class="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-3 flex-grow"
            >
              {service.description}
            </p>

            <!-- CTA -->
            <div class="flex items-center mt-auto pt-1">
              <div
                class="flex items-center text-[#1846A3] font-semibold text-sm group-hover:text-yellow-500 transition-colors duration-300"
              >
                <span class="mr-2">Learn More</span>
                <svg
                  class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Enhanced Bottom accent line -->
          <div
            class="h-1 bg-gradient-to-r from-[#1846A3] via-blue-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
          ></div>
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* Custom grid layout for centered second row */
  @media (min-width: 1280px) {
    .services-grid {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 2rem;
    }

    /* First row - 4 items, each taking 2 columns */
    .services-grid > :nth-child(1) {
      grid-column: 1 / 3;
    }
    .services-grid > :nth-child(2) {
      grid-column: 3 / 5;
    }
    .services-grid > :nth-child(3) {
      grid-column: 5 / 7;
    }
    .services-grid > :nth-child(4) {
      grid-column: 7 / 9;
    }

    /* Second row - 3 items centered, each taking 2 columns with 1 column gap on sides */
    .services-grid > :nth-child(5) {
      grid-column: 2 / 4;
    }
    .services-grid > :nth-child(6) {
      grid-column: 4 / 6;
    }
    .services-grid > :nth-child(7) {
      grid-column: 6 / 8;
    }

    /* If more items, continue pattern */
    .services-grid > :nth-child(8) {
      grid-column: 2 / 4;
    }
  }

  /* Enhanced animations */
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  /* Responsive adjustments */
  @media (max-width: 640px) {
    .container {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  /* Enhanced focus states for accessibility */
  .group a:focus {
    outline: 2px solid #1846a3;
    outline-offset: 2px;
  }

  /* Smooth hover transitions */
  .group {
    transition: transform 0.3s ease;
  }

  .group:hover {
    transform: scale(1.02);
  }

  /* Grid responsiveness improvements */
  @media (min-width: 640px) and (max-width: 767px) {
    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.5rem;
    }
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    .grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>
