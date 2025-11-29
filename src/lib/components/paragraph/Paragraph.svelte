<script lang="ts">
  export let size: keyof typeof sizes = "base";
  export let className: string = "";

  const sizes = {
    base: "xl:text-[25px] lg:text-[22px] md:text-[20px] text-[18px]",
    texts15: "xl:text-[15px] lg:text-[14px] md:text-[13px] text-[12px]",
    texts20: "xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px]",
    texts18: "xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]",
    texts16: "xl:text-[16px] lg:text-[14px] md:text-[12px] text-[10px]",
    texts14: "xl:text-[14px] lg:text-[12px] md:text-[11px] text-[9px]",
    textS13: "xl:text-[13px] lg:text-[12px] md:text-[11px] text-[10px] ",
    textS25: "xl:text-[25px] lg:text-[20px] md:text-[15px] text-[10px]",
    textS20:
      "text-[7px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px]",
    textSm: "xl:text-[25px] lg:text-[20px] md:text-[15px] text-[9px]",
    servicetxt:
      "text-[13px] sm:text-[13px] md:text-[13px] lg:text-[15px] xl:text-[17px]",
  };
</script>

<p class={`${sizes[size]} ${className} font-inter`}>
  <slot />
</p>

<style>
  @media (min-height: "5120px") {
  }
</style>
