import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const form = Object.fromEntries(await request.formData());
		console.log(form);
	}
} satisfies Actions;
