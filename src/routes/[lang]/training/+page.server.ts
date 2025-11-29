// @ts-nocheck
/** @type {import('../$types').PageLoad} */
import getDirectusInstance from "$lib/directus";
import { readItems } from "@directus/sdk";
import { language } from "$lib/lang";

export async function load({ fetch, params }) {
  const directus = getDirectusInstance(fetch);
  const langParam = params.lang;
  const languageCode = language(params.lang);

  const training = await directus.request(
    readItems("trainings", {
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

  const past_events = await directus.request(
    readItems("past_events", {
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

  return {
    training,
    past_events,
    langParam,
  };
}
