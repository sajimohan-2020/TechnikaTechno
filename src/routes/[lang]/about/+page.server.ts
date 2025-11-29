// @ts-nocheck
/** @type {import('../$types').PageLoad} */
import getDirectusInstance from "$lib/directus";
import { readItems } from "@directus/sdk";
import { language } from "$lib/lang";

export async function load({ fetch, params }) {
  const directus = getDirectusInstance(fetch);
  const langParam = params.lang || "ae";
  const languageCode = language(langParam);
  const about_us = await directus.request(
    readItems("about_us", {
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
      limit: 1,
    })
  );

  const home = await directus.request(
    readItems("home", {
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
      limit: 1,
    })
  );

  return {
    home,
    about_us,
    langParam
  };
}
