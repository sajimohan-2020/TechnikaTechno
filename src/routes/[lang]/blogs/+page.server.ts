// @ts-nocheck
/** @type {import('../$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
import { language } from '$lib/lang';


export async function load({ fetch,params }) {
	const directus = getDirectusInstance(fetch);
    const langParam = params.lang;
    const pageId= params.id;
	const languageCode = language(params.lang)

    const blogs = await directus.request(
        readItems('main_blogs', {
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
          
        })
      );
    const services = await directus.request(
        readItems('services', {
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

      // console.log('blogData >>>', blogs)

	return {
    services,
        blogs,
        langParam,
        pageId

		};
}


