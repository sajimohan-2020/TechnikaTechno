// src\routes\[[lang]]\+layout.server.js
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

  const layout = await directus.request(
    readItems("layout", {
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
    layout,
    langCode: languageCode,
    langParam,
  };
}
/** @type {import('./$types').Actions} */

// export const actions = {
//     default: async ({ request }) => {
//         const data = await request.formData();
//         const payload = {};
//         payload.language = data.get('language');

//         language = payload.language;

//         console.log(language);

//         return payload;
//     }
// };

// export async function post({ request }) {
// 	try {
// 	  const data = await request.formData();
// 	  const payload = {
// 		language: data.get('language')
// 	  };
// 	  console.log(payload);

// 	  // Process payload as needed, e.g., save to database or update state

// 	  return {
// 		status: 200,
// 		body: payload
// 	  };
// 	} catch (error) {
// 	  console.error('Error processing form data:', error.message);
// 	  return {
// 		status: 500,
// 		body: 'Failed to process form data'
// 	  };
// 	}
//   }
