// @ts-nocheck
/** @type {import('../$types').PageLoad} */
import getDirectusInstance from "$lib/directus";
import { readItems } from "@directus/sdk";
import { language } from "$lib/lang";

export async function load({ fetch, params }) {
  const directus = getDirectusInstance(fetch);

  let langParam = params.lang || "ae";

  const languageCode = language(langParam);

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
    langParam,
  };
}

// import { createDirectus, rest, readItems } from '@directus/sdk';ZZ

// Initialize the SDK.
// const directus = createDirectus('').with(rest());

// Write some code here in your front-end framework that gets the slug from the current URL.

// Call the Directus API using the SDK using the locale of the frontend and the slug.
// const home = await directus.request(
// 	readItems('home', {
// 		deep: {
// 			translations: {
// 				_filter: {
// 					_and: [
// 						{
// 							languages_code: { _eq: languageCode },
// 						},
// 						{
// 							slug: { _eq: slug },
// 						},
// 					],
// 				},
// 			},
// 		},
// 		fields: ['*', { translations: ['*'] }],
// 		limit: 1,
// 	})
// );

// const page = pages[0];

// return page
