import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	preprocess: [preprocess({ postcss: true }), vitePreprocess()],

	kit: {
		adapter: adapter()
	}
};

export default config;
