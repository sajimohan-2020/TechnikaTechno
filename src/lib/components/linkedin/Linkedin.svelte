<script lang="ts">
  import Heading from "$lib/components/heading/Heading.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";
</script>

<div class="mt-20 py-20 px-5 md:px-5 lg:px-[1rem] xl:px-20 bg-[#F5F5F5]">
  <!-- Mobile: Horizontal scroll, Desktop: Grid -->
  <div class="py-5">
    <!-- Mobile horizontal scroll container with hidden scrollbar -->
    <div class="md:hidden overflow-x-auto scrollbar-hide pb-4">
      <div class="flex gap-4 px-2">
        {#each [1, 2, 3] as i}
          <div
            class="flex-shrink-0 bg-white shadow-md overflow-hidden w-[280px] h-[320px] relative rounded-lg"
          >
            <img
              src={`/assets/img/linkedin${i}.webp`}
              alt={`LinkedIn Post ${i}`}
              class="w-full h-full object-cover"
            />

            <!-- Overlay -->
            <div
              class="absolute m-2 rounded-lg border bottom-0 left-0 right-0 p-3 bg-white/10 backdrop-blur-lg rounded-b-lg flex items-center justify-between"
            >
              <Heading size="headingS16" className="text-white font-semibold">
                Our Strive for Perfection
              </Heading>
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.7778 0C34.8976 0 35.9715 0.44484 36.7633 1.23666C37.5552 2.02848 38 3.10242 38 4.22222V33.7778C38 34.8976 37.5552 35.9715 36.7633 36.7633C35.9715 37.5552 34.8976 38 33.7778 38H4.22222C3.10242 38 2.02848 37.5552 1.23666 36.7633C0.44484 35.9715 0 34.8976 0 33.7778V4.22222C0 3.10242 0.44484 2.02848 1.23666 1.23666C2.02848 0.44484 3.10242 0 4.22222 0H33.7778ZM32.7222 32.7222V21.5333C32.7222 19.7081 31.9971 17.9575 30.7065 16.6669C29.4158 15.3762 27.6653 14.6511 25.84 14.6511C24.0456 14.6511 21.9556 15.7489 20.9422 17.3956V15.0522H15.0522V32.7222H20.9422V22.3144C20.9422 20.6889 22.2511 19.3589 23.8767 19.3589C24.6605 19.3589 25.4123 19.6703 25.9666 20.2246C26.5208 20.7788 26.8322 21.5306 26.8322 22.3144V32.7222H32.7222ZM8.19111 11.7378C9.13175 11.7378 10.0339 11.3641 10.699 10.699C11.3641 10.0339 11.7378 9.13175 11.7378 8.19111C11.7378 6.22778 10.1544 4.62333 8.19111 4.62333C7.24488 4.62333 6.3374 4.99922 5.66831 5.66831C4.99922 6.3374 4.62333 7.24488 4.62333 8.19111C4.62333 10.1544 6.22778 11.7378 8.19111 11.7378ZM11.1256 32.7222V15.0522H5.27778V32.7222H11.1256Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Desktop grid layout -->
    <div
      class="hidden md:flex flex-wrap justify-center gap-[1.5rem] lg:gap-[2rem] xl:gap-[3rem] 2xl:gap-[11rem]"
    >
      {#each [1, 2, 3] as i}
        <div
          class="bg-white shadow-md overflow-hidden md:w-[290px] md:h-[300px] xl:w-[330px] xl:h-[380px] relative rounded-lg"
        >
          <img
            src={`/assets/img/linkedin${i}.webp`}
            alt={`LinkedIn Post ${i}`}
            class="w-full h-full object-cover"
          />

          <!-- Overlay -->
          <div
            class="absolute m-2 rounded-lg border bottom-0 left-0 right-0 p-3 bg-white/10 backdrop-blur-lg rounded-b-lg flex items-center justify-between"
          >
            <Heading size="headingS16" className="text-white font-semibold">
              Our Strive for Perfection
            </Heading>
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.7778 0C34.8976 0 35.9715 0.44484 36.7633 1.23666C37.5552 2.02848 38 3.10242 38 4.22222V33.7778C38 34.8976 37.5552 35.9715 36.7633 36.7633C35.9715 37.5552 34.8976 38 33.7778 38H4.22222C3.10242 38 2.02848 37.5552 1.23666 36.7633C0.44484 35.9715 0 34.8976 0 33.7778V4.22222C0 3.10242 0.44484 2.02848 1.23666 1.23666C2.02848 0.44484 3.10242 0 4.22222 0H33.7778ZM32.7222 32.7222V21.5333C32.7222 19.7081 31.9971 17.9575 30.7065 16.6669C29.4158 15.3762 27.6653 14.6511 25.84 14.6511C24.0456 14.6511 21.9556 15.7489 20.9422 17.3956V15.0522H15.0522V32.7222H20.9422V22.3144C20.9422 20.6889 22.2511 19.3589 23.8767 19.3589C24.6605 19.3589 25.4123 19.6703 25.9666 20.2246C26.5208 20.7788 26.8322 21.5306 26.8322 22.3144V32.7222H32.7222ZM8.19111 11.7378C9.13175 11.7378 10.0339 11.3641 10.699 10.699C11.3641 10.0339 11.7378 9.13175 11.7378 8.19111C11.7378 6.22778 10.1544 4.62333 8.19111 4.62333C7.24488 4.62333 6.3374 4.99922 5.66831 5.66831C4.99922 6.3374 4.62333 7.24488 4.62333 8.19111C4.62333 10.1544 6.22778 11.7378 8.19111 11.7378ZM11.1256 32.7222V15.0522H5.27778V32.7222H11.1256Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- LinkedIn Follow Button -->
  <div class="flex justify-center mt-8">
    <a
      href="https://www.linkedin.com/company/your-company"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center px-6 py-2 border border-[#0A66C2] text-[#0A66C2] font-inter rounded-md hover:bg-[#0A66C2] hover:text-white transition-colors duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 mr-2"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
        />
      </svg>
      Follow
    </a>
  </div>
</div>

<style>
  /* Hide scrollbar for Chrome, Safari and Opera */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>
