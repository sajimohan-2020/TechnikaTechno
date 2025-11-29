// @ts-nocheck
/** @type {import('../$types').PageLoad} */
import getDirectusInstance from "$lib/directus";
import { readItems, readItem } from "@directus/sdk";
import { language } from "$lib/lang";
import { error } from "@sveltejs/kit";

export async function load({ fetch, params }) {
  const directus = getDirectusInstance(fetch);
  console.log("Params received:", params);

  const langParam = params.lang || "ae";
  const languageCode = language(langParam);
  const pageId = "condition-monitoring-services";

  // Add validation for params.id
  if (!pageId) {
    throw error(404, "Service not found");
  }

  try {
    // Fetch services data
    const services = await directus.request(
      readItem("main_services", "condition-monitoring-services", {
        deep: {
          translations: {
            _filter: {
              _and: [
                {
                  languages_code: { _eq: languageCode },
                },
              ],
            },
          },
        },
        fields: ["*", { translations: ["*"] }],
      })
    );

    // Check if services data exists
    if (!services) {
      throw error(404, "Service not found");
    }

    // Fetch service details with error handling

    return {
      services,
      langParam,
      pageId,
    };
  } catch (err) {
    console.error("Error loading service:", err);
    throw error(
      500,
      `Failed to load service: ${err.message || "Unknown error"}`
    );
  }
}
