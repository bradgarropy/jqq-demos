import type { Actions, RequestEvent } from './$types';
import { altogic } from '../../altogic';

const actions: Actions = {
	default: async (event: RequestEvent) => {
		const formData = await event.request.formData();
		const email = formData.get('email');
		console.log(email);

		const res = await altogic.endpoint.post('/auth/signup', { email });
		console.log(res);
	}
};

export { actions };
