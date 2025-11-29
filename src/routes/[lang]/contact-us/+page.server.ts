// @ts-nocheck
/** @type {import('../$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
import { language } from '$lib/lang';


export async function load({ fetch,params }) {
	const directus = getDirectusInstance(fetch);
    const langParam = params.lang;
	const languageCode = language(params.lang)

    const contactUs = await directus.request(
        readItems('contact_us', {
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
        contactUs,
        langParam
		};
}