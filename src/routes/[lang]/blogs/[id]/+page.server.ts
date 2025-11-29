// @ts-nocheck
/** @type {import('../$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems,readItem } from '@directus/sdk';
import { language } from '$lib/lang';


export async function load({ fetch,params }) {
	const directus = getDirectusInstance(fetch);
    const langParam = params.lang;
	const languageCode = language(params.lang)
  const pageId= params.id;
    const services = await directus.request(
        readItem('blogs', params.id, {
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
        services,
        langParam
		};
}


