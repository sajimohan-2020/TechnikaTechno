<script lang="ts">
  export let as: keyof HTMLElementTagNameMap = "h6";
  export let size: keyof typeof sizes = "h2bold";
  export let className = "";

  const sizes = {
    h2bold:
      "xl:text-[50px] lg:text-[45px] md:text-[38px] text-[28px] font-bold",
    mainheading:
      "xl:text-[40px] lg:text-[33px] md:text-[27px] text-[23px] font-bold",
    h2bold2:
      "xl:text-[50px] lg:text-[40px] md:text-[30px] sm:text-[25px] text-[16px] font-bold",
    headingH3:
      "xl:text-[35px] lg:text-[30px] md:text-[28px] text-[24px] font-bold",
    bannerMaih1:
      "xl:text-[30px] lg:text-[25px] md:text-[22px] text-[20px] font-bold",
    bannerMaih1SM10:
      "xl:text-[30px] lg:text-[25px] md:text-[22px] text-[15px] font-bold",
    sectionMainHeading:
      " xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-bold",
    sectionHeading:
      "text-[9px] sm:text-[16px] md:text-[25px] lg:text-[32px] xl:text-[40px] font-bold",
    headingS20: "xl:text-[20px] lg:text-[18px] md:text-[16px] text-[11px]",
    headingS18: "xl:text-[18px] lg:text-[17px] md:text-[16px] text-[10px]",
    headingS21: "xl:text-[18px] lg:text-[14px] md:text-[10px] text-[8px]",
    headingS16: " xl:text-[16px] lg:text-[14px] md:text-[12px] text-[10px]",
    headingS25: "xl:text-[25px] lg:text-[22px] md:text-[20px] text-[18px]",
    headings18: "xl:text-[22px] lg:text-[16px] md:text-[14px] text-[10px]",
  };
</script>

<svelte:element this={as} class={`font-inter ${sizes[size]} ${className}`}>
  <slot />
</svelte:element>
