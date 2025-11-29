<script lang="ts">
  export let topLine: string = "w-8 h-3";
  export let bottomLine: string = "ml-4 w-8 h-3";
  export let color: string = "#C7D200";
</script>

<div class="hidden md:flex md:flex-col">
  <svg
    class={topLine}
    viewBox="0 0 43 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 2L41 2"
      stroke={color}
      stroke-width="3"
      stroke-linecap="round"
    />
  </svg>

  <svg
    class={bottomLine}
    viewBox="0 0 43 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 2L41 2"
      stroke={color}
      stroke-width="3"
      stroke-linecap="round"
    />
  </svg>
</div>
