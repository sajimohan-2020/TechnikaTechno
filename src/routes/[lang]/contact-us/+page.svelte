<script>
  // @ts-nocheck
  import { PUBLIC_APIURL } from "$env/static/public";
  import P from "$lib/components/paragraph/Paragraph.svelte";
  import Heading from "$lib/components/heading/Heading.svelte";
  /** @type {import('./$types').PageData} */
  export let data;
</script>
<svelte:head>
  <meta name="robots" content="index, follow" />
</svelte:head>
<div class="pt-24 sm:pt-28 lg:pt-28">
  <div
    class="flex items-center justify-center relative top-[20px] sm:top-[6px] md:top-0"
  >
    <div
      class="w-full h-[215px] md:h-[230px] lg:h-[300px] xl:h-[360px] 2xl:h-[385px] 5xl:h-[1000px]"
    >
      <img
        src="{PUBLIC_APIURL}/assets/{data.contactUs.contact_us}"
        alt="IPEC"
        class="h-full object-cover object-left md:object-fill xl:w-full"
      />
    </div>
    <div class="absolute inset-0 bg-black opacity-20"></div>

    <div
      class="hidden md:block absolute bg-white bottom-0 right-12 5xl:px-[15rem] 5xl:py-[4rem] px-8 py-4"
    >
      <nav class="flex space-x-2 5xl:text-[4rem] text-base">
        <P
          size="texts18"
          className="text-[#1E3A8A] 5xl:text-[4rem] hover:text-[#00245a]"
        >
          <a href="/" class=""
            >{data.contactUs.translations[0].breadcrumb_text1}
          </a>
        </P>
        <span>/</span>
        <P
          size="texts18"
          className="text-[#1E3A8A] 5xl:text-[4rem] hover:text-[#00245a]"
        >
          <a href="/contact-us" class=""
            >{data.contactUs.translations[0].breadcrumb_text2}
          </a>
        </P>
      </nav>
    </div>
  </div>
</div>

<div class="py-8 lg:py-14 5xl:py-[5.5rem] bg-gray-200">
  <div class="container mx-auto md:px-[55px]">
    <div class="flex flex-wrap space-y-6">
      <div class="lg:w-1/2 w-full p-1">
        <div class="pb-4">
          <div class="pt-4">
            <Heading
              size="h2bold"
              as="h1"
              className="text-[#1E3A8A] text-left mt-2  font bold 5xl:text-[60px]"
            >
              {data.contactUs.translations[0].title}
            </Heading>
          </div>
        </div>
        <div class="contact-box-item flex mb-8 mt-4">
          <div class="contact-icon float-left mr-5">
            <i
              class=" bg-[#C7D200] inline-block leading-15 text-center rounded-full text-white text-2xl relative z-10 p-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#1E3A8A"
                class="w-[24px] h-[24px] 5xl:w-[45px] 5xl:h-[45px]"
                ><path
                  d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
                /></svg
              >
            </i>
          </div>
          <div class="contact-address">
            <P size="texts20" className=" font-semibold 5xl:text-[40px]">
              {data.contactUs.translations[0].address_title}
            </P>
            <P size="texts15" className="5xl:text-[40px]">
              {data.contactUs.translations[0].address_content}
            </P>
          </div>
        </div>
        <div class="contact-box-item flex mb-8">
          <div class="contact-icon float-left mr-5">
            <i
              class=" bg-[#C7D200] inline-block leading-15 text-center rounded-full text-white text-2xl relative z-10 p-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#1E3A8A"
                class="w-[24px] h-[24px] 5xl:w-[45px] 5xl:h-[45px]"
                ><path
                  d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"
                /></svg
              >
            </i>
          </div>
          <div class="contact-address">
            <P size="texts20" className=" font-semibold 5xl:text-[40px]">
              {data.contactUs.translations[0].call_us_today_title}
            </P>
            <P size="texts15" className="5xl:text-[40px]">
              {data.contactUs.translations[0].call_us_today_content}
            </P>
          </div>
        </div>
        <div class="contact-box-item mb-7.5">
          <div class="contact-icon float-left mr-5">
            <i
              class=" bg-[#C7D200] inline-block leading-15 text-center rounded-full text-white text-2xl relative z-10 p-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#1E3A8A"
                class="w-[24px] h-[24px] 5xl:w-[45px] 5xl:h-[45px]"
                ><path
                  d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"
                /></svg
              >
            </i>
          </div>
          <div class="contact-address">
            <P size="texts20" className=" font-semibold 5xl:text-[40px]">
              {data.contactUs.translations[0].email_us_title}
            </P>
            <P size="texts15" className="5xl:text-[40px]"
              >info@assetconditionmonitoring.com</P
            >
          </div>
        </div>
      </div>
      <div class="lg:w-1/2 w-full 5xl:w-[50%] mx-auto">
        <div class="choose-contact-box contact-inner">
          <form class="pt-4">
            <div class="grid sm:grid-cols-2 gap-8 5xl:gap-12">
              <div>
                <input
                  type="text"
                  class="block w-full text-base 5xl:text-xl rounded-lg py-3 px-5 5xl:py-5 5xl:px-6 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                  id="formFirstName"
                  placeholder={`${data.contactUs.translations[0].first_name_placeholder}`}
                />
              </div>

              <div>
                <input
                  type="text"
                  class="block w-full text-base 5xl:text-xl rounded-lg py-3 px-5 5xl:py-5 5xl:px-6 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                  id="formLastName"
                  placeholder={`${data.contactUs.translations[0].last_name_placeholder}`}
                />
              </div>

              <div>
                <input
                  type="email"
                  class="block w-full text-base 5xl:text-xl rounded-lg py-3 px-5 5xl:py-5 5xl:px-6 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                  id="formEmail"
                  placeholder={`${data.contactUs.translations[0].email_placeholder}`}
                />
              </div>

              <div>
                <input
                  type="text"
                  class="block w-full text-base 5xl:text-xl rounded-lg py-3 px-5 5xl:py-5 5xl:px-6 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                  id="formPhone"
                  placeholder={`${data.contactUs.translations[0].phone_number_placeholder}`}
                />
              </div>

              <div class="sm:col-span-2">
                <div class="mb-6 5xl:mb-10">
                  <textarea
                    class="block w-full text-base 5xl:text-xl rounded-lg py-4 px-5 5xl:py-6 5xl:px-6 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                    id="formMessages"
                    rows="5"
                    placeholder={`${data.contactUs.translations[0].messages_placeholder}`}
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="mt-6 5xl:mt-10">
              <button
                type="submit"
                class="py-3 px-8 5xl:py-5 5xl:px-10 rounded-lg text-lg 5xl:text-2xl flex items-center justify-center border border-primary text-white bg-[#0B60B0] hover:bg-[#19142d] transition-all duration-500 font-medium"
              >
                {data.contactUs.translations[0].send_messages_button}
                <i class="mdi mdi-send ms-2"></i>
              </button>
            </div>
          </form>
          <div id="status"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <div class="mapouter">
    <div class="gmap_canvas">
      <iframe
        width="100%"
        height="500"
        id="gmap_canvas"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d546.2249633499398!2d55.17259591763657!3d24.998049056278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f728491ba724f%3A0x71d45471e2d02137!2sBayan%20Business%20Center%20-%20Green%20Community%20Village%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1760003290645!5m2!1sen!2sin"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        title="maap"
      ></iframe>
      <style>
        .mapouter {
          position: relative;
          text-align: right;
          height: 500px;
          width: 100%;
        }
      </style>
      <style>
        .gmap_canvas {
          overflow: hidden;
          background: none !important;
          height: 500px;
          width: 100%;
        }
      </style>
    </div>
  </div>
</div>

<style>
  /* Additional styles for icons or custom behavior */
  .contact-icon i::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #b8c302;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.5s;
    z-index: -1;
  }

  .contact-icon:hover i::after {
    transform: scale(1);
  }
</style>
