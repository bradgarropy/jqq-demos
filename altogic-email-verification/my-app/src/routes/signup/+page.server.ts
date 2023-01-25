import { redirect } from '@sveltejs/kit';
import crypto from 'node:crypto';

import type { Actions, RequestEvent } from './$types';
import { altogic } from '../../altogic';

const actions: Actions = {
	default: async (event: RequestEvent) => {
		const formData = await event.request.formData();

		await altogic.endpoint.post('/auth/signup', {
			email: formData.get('email'),
			token: crypto.randomUUID(),
			verified: false
		});

		throw redirect(302, '/signup/verify');
	}
};

export { actions };
