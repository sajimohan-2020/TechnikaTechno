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
  const pageId = "infrared-thermography-testing";

  if (!pageId) {
    throw error(404, "Service not found");
  }

  try {
    // Fetch services data
    const services = await directus.request(
      readItem("main_services", "infrared-thermography-testing", {
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

    if (!services) {
      throw error(404, "Service not found");
    }

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
