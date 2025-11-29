// @ts-nocheck
/** @type {import('../$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems, readItem } from '@directus/sdk';
import { language } from '$lib/lang';

export async function load({ fetch, params }) {
    const directus = getDirectusInstance(fetch);
    console.log(params)
    const langParam = params.lang || '/en';
    const pageId = "pruftechnik-uae";
    const languageCode = language(params.lang)
    const productDetails = await directus.request(
        readItem('product_details',"pruftechnik-uae",{
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
        productDetails,
        pageId,
        langParam
    };
};
