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

[create-space]: images/create-space.png
[speakers-block]: images/speakers-block.png
[speaker-block]: images/speaker-block.png
[speakers-story]: images/speakers-story.png
[add-speaker-block]: images/add-speaker-block.png
[add-speaker-block-data]: images/add-speaker-block-data.png
