import { redirect } from '@sveltejs/kit';

import type { Actions, RequestEvent } from './$types';
import { altogic } from '../../altogic';

const actions: Actions = {
	default: async (event: RequestEvent) => {
		const formData = await event.request.formData();

		await altogic.endpoint.post('/auth/signup', {
			email: formData.get('email')
		});

		throw redirect(302, '/signup/verify');
	}
};

export { actions };
