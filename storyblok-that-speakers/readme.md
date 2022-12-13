# Create Storyblok Space

1. Click `Add Space`
2. Select `New space`
3. Enter `That Speakers` for `Name your new space`
4. Select `US` for `Server Location`
5. Click `Create space`
6. Click `Content`
7. Select all and click `Delete`
8. Click `Block Library`
9. Select all and click `Delete`

![create space][create-space]

# Create Speakers Block

1. Click `Block Library`
2. Click `New Block`
3. Enter `speakers` for `Technical name`
4. Select `Universal block` for `Block type`
5. Click `Add Block`
6. Enter `speakers` for `Name`
7. Select `Blocks` for `Field type`
8. Click `Save`

![speakers block][speakers-block]

# Create Speaker Block

1. Click `Block Library`
2. Click `New Block`
3. Enter `speaker` for `Technical name`
4. Select `Universal block` for `Block type`
5. Click `Add Block`
6. Enter `name` for `Name`
7. Select `Text` for `Type`
8. Click `Add`
9. Enter `title` for `Name`
10. Select `Text` for `Type`
11. Click `Add`
12. Enter `company` for `Name`
13. Select `Text` for `Type`
14. Click `Add`
15. Enter `twitter` for `Name`
16. Select `Link` for `Type`
17. Click `Add`
18. Enter `image` for `Name`
19. Select `Asset` for `Type`
20. Click `Add`
21. Enter `keynote` for `Name`
22. Select `Boolean` for `Type`
23. Click `Add`
24. Click `Save`

![speaker block][speaker-block]

# Create Speakers Story

1. Click on `Content`
2. Click `Create new` and select `Story`
3. Enter `speakers` for the `Name`
4. Select `Speakers` for the `Content type`
5. Click `Create`

![speakers story][speakers-story]

# Add Speakers

1. Click `Content`
2. Click `speakers`
3. Click the plus icon
4. Select `Speaker`
5. Click the `Speaker` block
6. Enter `James Quick` for `Name`
2. Enter `Content Creator` for `Title`
3. Enter `Learn Build Teach` for `Company`
4. Select `URL` for `Link`
5. Enter `https://twitter.com/jamesqquick` for `Twitter`
6. Click `Add Asset`
7. Select image
8. Click `Upload`
9. Click image
10. Check `Enabled` for `Keynote`
11. Click `Save`
12. Repeat for more speakers

![add speaker block][add-speaker-block]
![add speaker block data][add-speaker-block-data]

# Initializing SvelteKit

1. Run `npm create svelte@latest my-app`
2. Select `Skeleton project` for the template
3. Select `Yes` for TypeScript
4. Select `Yes` for ESLint
5. Selcet `Yes` for Prettier
6. Select `No` for Playwright
7. Select `No` for Vitest
8. Run `cd my-app`
9. Run `npm install`
10. Run `npm run dev`

![init sveltekit][init-sveltekit]
![start sveltekit][start-sveltekit]

# Create A Speakers Page

1. Create `my-app/src/routes/speakers/+page.svelte`
2. Add the following contents

```svelte
<script lang="ts">
    console.log("speakers")
</script>

<h1>speakers</h1>
```

3. Navigate to `http://localhost:5173/speakers`

# Load Storyblok Data

1. Run `npm install @storyblok/svelte`
2. Create `my-app/src/routes/speakers/+page.ts`
3. Add the following contents.

```typescript
import type { PageLoad } from './$types';
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

export const load: PageLoad = async () => {
	storyblokInit({
		accessToken: 'ePrNdxRZK5ZxrRRrbZMxYgtt',
		use: [apiPlugin],
		apiOptions: {
			region: 'us'
		}
	});

	const storyblokApi = useStoryblokApi();
	const response = await storyblokApi.get('cdn/stories/speakers', { version: 'draft' });
	const { speakers } = response.data.story.content;

	const thatConference = speakers.reduce(
		(acc: any, curr: any) => {
			if (curr.keynote) {
				acc.keynoteSpeakers.push(curr);
			} else {
				acc.speakers.push(curr);
			}

			return acc;
		},
		{
			keynoteSpeakers: [],
			speakers: []
		}
	);

	return thatConference;
};
```

4. Update `my-app/src/routes/speakers/+page.svelte` with the following contents

```svelte
<script lang="ts">
    import type {PageData} from "./$types"
    export let data: PageData;
</script>

<h1>speakers</h1>
<pre>{JSON.stringify(data, null, 2)}</pre>
```

5. Navigate to `http://localhost:5173/speakers`

# Install Tailwind

1. Run the following commands.

```shell
cd my-app
npm install -D tailwindcss postcss autoprefixer svelte-preprocess
npx tailwindcss init tailwind.config.cjs -p
```

2. Modify `svelte.config.js` to include the `postcss` preprocessor.

```javascript
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
```

3. Modify `tailwind.config.cjs` to include `content`.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: []
};
```

4. Create `src/app.css` with the following content.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Create `src/routes/+layout.svelte` with the following content.

```svelte
<script>
    import "../app.css";
</script>

<slot />
```

# Code The Frontend

Relevant files are:

```text
src/lib/Speaker.svelte
src/routes/speakers/+page.svelte
src/routes/speakers/+page.ts
```

![frontend][frontend]

# Visual Editing

1. Run `npm install -D vite-plugin-mkcert`
2. Modify `vite.config.js` to include secure settings.

```javascript
import { sveltekit } from '@sveltejs/kit/vite';
import mkcert from 'vite-plugin-mkcert';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), mkcert()],
	server: {
		https: true
	}
};

export default config;
```

3. Navigate to the `speakers` story.
4. Click `Change URL`
5. Click `Add or change preview URLs`
6. Enter `https://localhost:5173/` for `Location`
7. Modify a `speaker` and what the website refresh with the latest data

![visual editor][visual-editor]

[create-space]: images/create-space.png
[speakers-block]: images/speakers-block.png
[speaker-block]: images/speaker-block.png
[speakers-story]: images/speakers-story.png
[add-speaker-block]: images/add-speaker-block.png
[add-speaker-block-data]: images/add-speaker-block-data.png
[init-sveltekit]: images/init-sveltekit.png
[start-sveltekit]: images/start-sveltekit.png
[frontend]: images/frontend.png
[visual-editor]: images/visual-editor.png
