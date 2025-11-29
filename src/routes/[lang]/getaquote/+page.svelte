<script lang="ts">
  import * as Select from "$lib/components/ui/select/index.js";
  import { PUBLIC_APIURL } from "$env/static/public";
  /** @type {import('./$types').PageData} */
  export let data;
</script>
<svelte:head>
  <meta name="robots" content="index, follow" />
</svelte:head>
<div class="pt-24 sm:pt-28 lg:pt-28">
  <div class="flex items-center justify-center relative">
    <img
      src="{PUBLIC_APIURL}/assets/{data.getAQuote.banner_image}"
      alt="IPEC"
      class="w-full h-full"
    /> 
     
    <div class="hidden md:block absolute bg-white bottom-0 right-48 px-8 py-4">
      <nav class="flex space-x-2 text-base">
        <a href="/" class="text-[#0B60B0] hover:text-text-[#00245a]"
          >{data.getAQuote.translations[0].breadcrumb_text1}</a
        >
        <span>/</span>
        <a href="#." class="text-[#0B60B0] hover:text-text-[#00245a]"
          >{data.getAQuote.translations[0].breadcrumb_text2}</a
        >
      </nav>
    </div>
  </div>
</div>

<div class=" text-center pt-14">
 

  <div class="pb-4">
    <h2
      class="text-3xl md:text-4xl lg:text-5xl text-blue-900 font-bold text-center"
    >
      {data.getAQuote.translations[0].title}
    </h2>
  </div>
</div>

<div class="py-8">
  <div class="container mx-auto">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-7/12 md:w-full p-2">
        <div class="">
          <form class="pt-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  class="block w-full text-sm rounded-md py-2 px-4 border-[#00245a] border-2 focus:border-gray-300"
                  id="formFirstName"
                  placeholder={`${data.getAQuote.translations[0].name_placeholder}`}
                />
              </div>

              <div>
                <Select.Root portal={null}>
                  <Select.Trigger
                    class="w-full border-[#00245a] border-2 focus:border-gray-300"
                  >
                    <Select.Value
                      placeholder={`${data.getAQuote.translations[0].select_services_placeholder}`}
                    />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.Group>
                      {#each data.getAQuote.translations[0].services_dropdown as ser}
                        <Select.Item value={ser.value} label={ser.items}
                          >{ser.items}</Select.Item
                        >
                      {/each}
                    </Select.Group>
                  </Select.Content>
                  <Select.Input name="favoriteFruit" />
                </Select.Root>
              </div>

              <div>
                <input
                  type="email"
                  class="block w-full text-sm rounded-md py-2 px-4 border-[#00245a] border-2 focus:border-gray-300"
                  id="formEmail"
                  placeholder={`${data.getAQuote.translations[0].email_placeholder}`}
                />
              </div>

              <div>
                <input
                  type="text"
                  class="block w-full text-sm rounded-md py-2 px-4 border-[#00245a] border-2 focus:border-gray-300"
                  id="formPhone"
                  placeholder={`${data.getAQuote.translations[0].phone_number_placeholder}`}
                />
              </div>

              <div class="sm:col-span-2">
                <div class="mb-4">
                  <textarea
                    class="block w-full text-sm rounded-md py-2 px-4 border-[#00245a] border-2 focus:border-gray-300"
                    id="formMessages"
                    rows="4"
                    placeholder={`${data.getAQuote.translations[0].messages_placeholder}`}
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <button
                type="submit"
                class="py-2 px-6 rounded-md text-baseitems-center justify-center border border-primary text-white bg-[#0B60B0] hover:bg-[#19142d] transition-all duration-500 font-medium"
                >{data.getAQuote.translations[0].send_messages_button}<i
                  class="mdi mdi-send ms-1"
                ></i></button
              >
            </div>
          </form>
          <div id="status"></div>
        </div>
      </div>
      <div class="w-full lg:w-5/12 p-2">
        <div class="wow animate__slideInRight">
          <img src={PUBLIC_APIURL}/assets/{data.getAQuote.get_a_quote} alt="" class="w-full" />
        </div>
      </div>
    </div>
  </div>
</div>
