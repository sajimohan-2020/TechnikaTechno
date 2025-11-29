// @ts-nocheck

import getDirectusInstance from "$lib/directus";
import { readItems, readItem } from "@directus/sdk";
import { language } from "$lib/lang";

export async function load({ fetch, params }) {
  const directus = getDirectusInstance(fetch);
  const langParam = params.lang;
  const pageId = params.id;
  const languageCode = language(params.lang);

  const products = await directus.request(
    readItems("products", {
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

  const products_item = await directus.request(
    readItems("products_item", {
      filter: {
        status: { _neq: "archived" },
      },
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
    products,
    products_item,
    langParam,
    pageId,
  };
}
