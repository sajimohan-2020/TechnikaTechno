import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = () => {
  const urls = [
    //mainsite pages
    "https://assetconditionmonitoring.com/ae/",
    "https://assetconditionmonitoring.com/ae/about/",
    "https://assetconditionmonitoring.com/ae/products/",
    "https://assetconditionmonitoring.com/ae/case-studies/",
    "https://assetconditionmonitoring.com/ae/blogs/",
    "https://assetconditionmonitoring.com/ae/contact-us/",
    //product pages
    "https://assetconditionmonitoring.com/ae/products/fluke-distributor-uae/",
    "https://assetconditionmonitoring.com/ae/products/sonotec/",
    "https://assetconditionmonitoring.com/ae/products/ipec-uae/",
    "https://assetconditionmonitoring.com/ae/products/sonotec-acoustic-camera-uae/",
    "https://assetconditionmonitoring.com/ae/products/sonotec-ultrasonic-testing-uae/",
    "https://assetconditionmonitoring.com/ae/products/pruftechnik-uae/",
    "https://assetconditionmonitoring.com/ae/products/emaint-uae/",
    //case studies pages
    "https://assetconditionmonitoring.com/ae/case-studies/vibration-bearing/",
    "https://assetconditionmonitoring.com/ae/case-studies/partial-discharge/",
    "https://assetconditionmonitoring.com/ae/case-studies/thermography/",
    //blog pages
    "https://assetconditionmonitoring.com/ae/blogs/earth-pit-testing/",
    //qhse page
    "https://assetconditionmonitoring.com/ae/qhsepolicy/",
    //service pages
    "https://assetconditionmonitoring.com/ae/services/condition-monitoring-services/",
    "https://assetconditionmonitoring.com/ae/services/vibration-analysis/",
    "https://assetconditionmonitoring.com/ae/services/infrared-thermography-testing/",
    "https://assetconditionmonitoring.com/ae/services/ultrasonic-inspection/",
    "https://assetconditionmonitoring.com/ae/services/oil-analysis/",
    "https://assetconditionmonitoring.com/ae/services/performance-testing-of-pumps-compressors/",
    "https://assetconditionmonitoring.com/ae/services/piping-vibration-analysis/",
    "https://assetconditionmonitoring.com/ae/services/motor-current-signature-analysis/",
    "https://assetconditionmonitoring.com/ae/services/structural-vibration-analysis/",
    "https://assetconditionmonitoring.com/ae/services/ods-modal-analysis/",
    "https://assetconditionmonitoring.com/ae/services/partial-discharge-testing/",
    "https://assetconditionmonitoring.com/ae/services/power-quality-harmonic-analysis/",
    "https://assetconditionmonitoring.com/ae/services/earth-pit-testing/",
    "https://assetconditionmonitoring.com/ae/services/insulation-resistance-polarisation-test/",
    "https://assetconditionmonitoring.com/ae/services/tan-delta-capacitance-test/",
    "https://assetconditionmonitoring.com/ae/services/winding-resistance-test/",
    "https://assetconditionmonitoring.com/ae/services/partial-discharge-monitoring/",
    "https://assetconditionmonitoring.com/ae/services/fea-services/",
    "https://assetconditionmonitoring.com/ae/services/compressed-air-leak-detection/",
    "https://assetconditionmonitoring.com/ae/services/flow-measurement-services/",
    "https://assetconditionmonitoring.com/ae/services/steam-trap-testing/",
    "https://assetconditionmonitoring.com/ae/services/noise-monitoring/",
    "https://assetconditionmonitoring.com/ae/services/light-survey/",
    "https://assetconditionmonitoring.com/ae/services/insitu-dynamic-balancing/",
    "https://assetconditionmonitoring.com/ae/services/laser-shaft-alignment-services/",
    "https://assetconditionmonitoring.com/ae/enquiry/",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset 
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${urls
          .map(
            (url) => `
        <url>
            <loc>${url}</loc>
        </url>`
          )
          .join("")}
    </urlset>`;

  return new Response(sitemap.trim(), {
    headers: { "Content-Type": "application/xml" },
  });
};
