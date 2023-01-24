import type { Actions, RequestEvent } from './$types';

const actions: Actions = {
	default: async (event: RequestEvent) => {
		const formData = await event.request.formData();
		const email = formData.get('email');
		console.log(email);
	}
};

export { actions };
