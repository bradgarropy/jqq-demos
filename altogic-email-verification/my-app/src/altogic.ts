import { createClient } from 'altogic';
import { ALTOGIC_ENV_URL, ALTOGIC_CLIENT_KEY } from '$env/static/private';

const altogic = createClient(ALTOGIC_ENV_URL, ALTOGIC_CLIENT_KEY);

export { altogic };
