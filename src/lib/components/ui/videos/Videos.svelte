<script lang="ts">
  let video: HTMLVideoElement | null = null;
  let isPlaying = false;

  function toggleVideo() {
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      isPlaying = !isPlaying;
    }
  }
  export let videoSrc: string = "";
</script>

<div
  class="group bg-[#0B60B0]/80 backdrop-blur rounded-lg overflow-hidden 
         md:h-[400px] md:w-[670px] mt-[20px] mb-5 relative"
>
  <!-- Play/Pause Button Wrapper -->
  <button
    class="absolute inset-0 flex items-center justify-center z-10 bg-black/30
           transition-opacity duration-300
           {isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}"
    on:click={toggleVideo}
    aria-label={isPlaying ? "Pause video" : "Play video"}
  >
    <div
      class="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center
              transition-transform duration-300 hover:scale-110"
    >
      {#if isPlaying}
        <!-- Pause Icon (only shows on hover) -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-[#0B60B0]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
        </svg>
      {:else}
        <!-- Play Icon (always visible until clicked) -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-[#0B60B0] ml-1"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      {/if}
    </div>
  </button>

  <!-- Thumbnail -->
  <img
    src="/assets/img/thumbnail.webp"
    alt="Video Thumbnail"
    class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300
          {isPlaying ? 'opacity-0' : 'opacity-100'}"
  />

  <!-- Video -->
  <video
    bind:this={video}
    class="w-[700px] h-full lg:object-fill object-cover md:object-cover"
    loop
    playsinline
  >
    <source src={videoSrc} type="video/mp4" />
    <track kind="captions" src="" srclang="en" label="English captions" default />
    Your browser does not support the video tag.
  </video>
</div>
