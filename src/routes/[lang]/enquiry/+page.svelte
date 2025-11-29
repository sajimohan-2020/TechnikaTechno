<script lang="ts">
  import Yellowline from "$lib/icons/svgs/yellowline.svelte";
  import { writable } from "svelte/store";

  let name = "";
  let phone = "";
  let email = "";
  let service = "";
  let message = "";

  let errorMessage = writable("");

  function handleSubmit(event: Event) {
    event.preventDefault();
    errorMessage.set("");

    if (
      !name.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !service.trim() ||
      !message.trim()
    ) {
      errorMessage.set("Please fill in all fields.");
      return;
    }

    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phone.trim())) {
      errorMessage.set("Please enter a valid phone number (10-15 digits).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      errorMessage.set("Please enter a valid email address.");
      return;
    }

    errorMessage.set("Form submitted successfully!");
  }
</script>
<svelte:head>
  <meta name="robots" content="index, follow" />
</svelte:head>
<section>
  <div
    class="min-h-screen bg-[linear-gradient(135deg,#e0f2ff,#fffde7)] w-full flex flex-col items-center justify-center"
  >
    <div class="block lg:hidden text-center font-bold text-2xl mt-32 pb-3">
      Let's talk about <br />
      <span class="flex items-center justify-center"> everything! </span>
    </div>

    <div
      class="flex flex-col lg:flex-row gap-10 items-center justify-around text-center md:text-left w-full md:mx-[60px]"
    >
      <div
        class="hidden lg:block font-semibold text-xl lg:text-[40px] leading-10 xl:text-[40px] gap-3 mx-5"
      >
        Let's talk about <br />
        <span class="flex items-center gap-3">everything! <Yellowline /></span>
      </div>

      <!-- Form Box -->
      <div
        class="w-full lg:w-[70%] flex justify-center items-center lg:mt-20 md:mx-[30px] px-4 mb-10 lg:mb-0"
      >
        <div class="w-full max-w-[800px] p-6 bg-white rounded-xl shadow-lg">
          <form
            class="w-full flex flex-col justify-center gap-6"
            on:submit={handleSubmit}
          >
            {#if $errorMessage == "Form submitted successfully!"}
              <p class="text-green-500 text-center mt-4">{$errorMessage}</p>
            {/if}
            {#if $errorMessage && $errorMessage != "Form submitted successfully!"}
              <p class="text-red-500 text-center mt-4">{$errorMessage}</p>
            {/if}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                class="border rounded-md p-3 w-full"
                bind:value={name}
              />
              <input
                type="text"
                placeholder="Phone"
                class="border rounded-md p-3 w-full"
                bind:value={phone}
              />
              <input
                type="email"
                placeholder="Email"
                class="border rounded-md p-3 w-full"
                bind:value={email}
              />
              <input
                type="text"
                placeholder="Select Service"
                class="border rounded-md p-3 w-full"
                bind:value={service}
              />
            </div>

            <textarea
              placeholder="Message"
              rows="5"
              class="border rounded-md p-3 w-full min-h-[150px]"
              bind:value={message}
            ></textarea>

            <button
              type="submit"
              class="bg-[#0B60B0] text-white rounded-md px-10 py-2 self-center"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
