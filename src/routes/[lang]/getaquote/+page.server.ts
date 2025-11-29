// @ts-nocheck
/** @type {import('../$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
import { language } from '$lib/lang';


export async function load({ fetch,params }) {
	const directus = getDirectusInstance(fetch);
    const langParam = params.lang;
	const languageCode = language(params.lang)

    const getAQuote = await directus.request(
        readItems('get_a_quote', {
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
          fields: ['*', { translations: ['*'] }],
          limit: 1,
        })
      );

	return {
        getAQuote,
        langParam
		};
}