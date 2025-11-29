// @ts-nocheck
/** @type {import('../$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems, readItem } from '@directus/sdk';
import { language } from '$lib/lang';

export async function load({ fetch, params }) {
    const directus = getDirectusInstance(fetch);
    console.log(params)
    const langParam = params.lang || '/en';
    const pageId = params.id;
    const languageCode = language(params.lang)
    const caseStudyDetails = await directus.request(
        readItem('casestudy_details',params.id ,{
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
        caseStudyDetails,
        pageId,
        langParam
    };
};