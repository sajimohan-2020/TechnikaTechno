<script lang="ts">
  import Heading from "$lib/components/heading/Heading.svelte";
  import Thickline from "$lib/icons/svgs/thickline.svelte";
  import P from "$lib/components/paragraph/Paragraph.svelte";

  interface lists {
    title?: string;
    paragraph?: string;
  }

  const list: lists[] = [
    {
      title: "Occupational Health & Safety:",
      paragraph: `We are dedicated to creating and maintaining a safe working
          environment for all our employees. This includes identifying potential
          hazards, assessing risks, and implementing preventive and protective
          measures to eliminate or minimize risks related to work-related
          injuries and illnesses.`,
    },
    {
      title: "Environmental Stewardship:",
      paragraph: ` We are committed to sustainable operations and reducing our environmental footprint. Our activities are carried out with a focus on pollution prevention, efficient resource utilization, and mitigating environmental impacts across all project phases.`,
    },
    {
      title: "Service Excellence and Customer Satisfaction:",
      paragraph: ` Delivering superior quality products and reliable services remains central to our mission. We aim to meet and exceed customer expectations while continually enhancing satisfaction, particularly within the demanding oil and gas sector.`,
    },
    {
      title: "Worker Engagement and Participation:",
      paragraph: ` We actively encourage employee and contractor involvement in QHSE matters. Through open communication, structured consultation, and clear communication processes, we believe and support a culture of shared responsibility and safety awareness.`,
    },
    {
      title: "Proactive Risk Management:",
      paragraph: `We carry out comprehensive risk assessments and develop effective control strategies to proactively manage QHSE-related hazards. Our focus is always on eliminating or reducing risks to ensure safe and consistent operations.`,
    },
    {
      title: "Continuous System Improvement:",
      paragraph: ` Our IMS is continuously reviewed and enhanced through audits, inspections, performance tracking, and feedback mechanisms. We strive for operational excellence through ongoing learning and systematic refinement of processes.`,
    },
    {
      title: "Competency and Training:",
      paragraph: ` We invest in regular training and awareness programs to ensure our workforce remains well-informed, competent, and aligned with QHSE expectations. This allows us to maintain a skilled team capable of executing their tasks safely and efficiently.`,
    },
    {
      title: "Regulatory Compliance and Governance:",
      paragraph: ` We are fully committed to complying with all relevant local and international laws, regulatory obligations, industry codes of practice, and client-specific requirements. Regular reviews of legal and regulatory changes are conducted to ensure timely updates to our internal controls and operational standards.`,
    },
  ];
</script>
<svelte:head>
  <meta name="robots" content="index, follow" />
</svelte:head>
<section class="min-h-screen">
  <div class="container px-1 md:px-[60px] lg:px-[150px] pt-[190px]">
    <div class="flex items-center gap-1 h-[50px] md:h-[70px]">
      <Thickline data="w-[1.5rem] md:w-[3rem] h-20px" />
      <Heading
        size="h2bold"
        as="h1"
        className="text-[#2F2F2F] font-semibold text-left 2.5xl:text-[40px] 5xl:text-[60px]"
      >
        QHSE Policy
      </Heading>
    </div>
  </div>
  <div class="mt-16">
    <div class="container px-5 md:px-[90px] lg:px-[185px] pb-16">
      <P
        size="texts18"
        className="text-left leading-relaxed hyphens-auto 2.5xl:text-[23px] 5xl:text-[45px] text-[#161515]"
      >
        Integrated Management System for Quality, Health, Safety, and
        Environment
      </P>
      <P
        size="texts18"
        className="text-left leading-relaxed hyphens-auto 2.5xl:text-[23px] 5xl:text-[45px] text-[#2F2F2F] pt-4"
      >
        Assetconditionmonitoring.com is a trusted provider specializing in the
        trading of oil and gas equipment and accessories for both onshore and
        offshore applications. We also offer expert services in the
        installation, maintenance, and commissioning of overhead cranes, along
        with condition monitoring and performance optimization services. Our
        operations are governed by a robust Integrated Management System (IMS),
        certified in accordance with ISO 9001:2015 for Quality Management, ISO
        14001:2015 for Environmental Management, and ISO 45001:2018 for
        Occupational Health & Safety.
      </P>
      <P
        size="texts18"
        className="text-left leading-relaxed hyphens-auto 2.5xl:text-[23px] 5xl:text-[45px] text-[#2F2F2F] pt-4"
      >
        We recognize that maintaining high standards in Quality, Health, Safety,
        and Environmental practices is key for the long-term success of our
        business. These values are deeply embedded in our corporate ethics and
        influence every strategic and operational decision we make. Our
        commitment is reflected in the following guiding principles:
      </P>
      <P
        size="texts18"
        className="text-left leading-relaxed hyphens-auto font-bold 2.5xl:text-[23px] 5xl:text-[45px] text-[#2F2F2F] pt-8"
      >
        Our QHSE Focus Areas Include:
      </P>

      <div class="px-4 pt-4">
        {#each list as item}
          <div class="flex items-center gap-2 pt-4">
            <span class="text-[#2F2F2F] text-[20px] font-bold leading-none pb-2"
              >•</span
            >
            <P
              size="texts18"
              className="text-left leading-relaxed hyphens-auto font-semibold 2.5xl:text-[23px] 5xl:text-[45px] text-[#2F2F2F]"
            >
              {item.title}
            </P>
          </div>
          <P
            size="texts18"
            className="text-left leading-relaxed hyphens-auto px-4  2.5xl:text-[23px] 5xl:text-[45px] text-[#2F2F2F] pt-2"
          >
            {item.paragraph}
          </P>
        {/each}
      </div>
      <P
        size="texts18"
        className="text-left leading-relaxed hyphens-auto 2.5xl:text-[23px] 5xl:text-[45px] text-[#2F2F2F] pt-8"
      >
        This QHSE Policy is a crucial part of our strategic approach and daily
        operations. Every employee, contractor, and stakeholder at
        assetconditionmonitoring.com shares the responsibility of upholding this
        policy. Managers are especially accountable for ensuring effective
        implementation within their departments by allocating appropriate
        resources, leading by example, and reinforcing a culture of safety and
        quality.
      </P>
      <P
        size="texts18"
        className="text-left leading-relaxed hyphens-auto 2.5xl:text-[23px] 5xl:text-[45px] text-[#2F2F2F] pt-4"
      >
        The Managing Director holds ultimate responsibility for ensuring the
        effectiveness of this policy and ensuring its regular review and
        communication across the organization. The policy is accessible to all
        interested parties and is available on our official website.
      </P>
      <P
        size="texts18"
        className="text-left leading-relaxed font-semibold hyphens-auto 2.5xl:text-[23px] 5xl:text-[45px] text-[#2F2F2F] pt-4"
      >
        At Assetconditionmonitoring.com, we strive for excellence in every
        aspect of Quality, Health, Safety, and Environmental performance.
      </P>
    </div>
  </div>
</section>
