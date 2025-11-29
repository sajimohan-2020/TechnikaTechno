import type { LayoutServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load = (async ({ url }) => {
  if (url.pathname == "/") throw redirect(303, `/ae`);
}) satisfies LayoutServerLoad;
