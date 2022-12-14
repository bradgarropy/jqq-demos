# Create Database

1. Click `Add a database`
2. Enter `new-years-resolutions` for `database name`
3. Click `Create`
4. Click `new-years-resolutions`

![create database][create-database]

# Define Schema

1. Click `Start from scratch`
2. Enter `resolutions` for `table name`
3. Click `Add table`
4. Click `+` and select `Integer number`
5. Enter `year` for `Column name`
6. Check `Not null`
7. Enter `2023` for `Default value`
8. Click `Create column`
9. Click `+` and select `String`
10. Enter `resolution` for `Column name`
11. Check `Not null`
12. Enter `My resolution` for `Default value`
13. Click `Create column`
14. Click `+` and select `Boolean`
15. Enter `isCompleted` for `Column name`
16. Check `Not null`
17. Click `Create column`

![define schema][define-schema]

# Add Resolutions

1. Click `Add a record`
2. Enter `2023` for `year`
3. Enter `practice spanish every day` for `resolution`
4. Click `Create record`
5. Continue adding resolutions

![add resolutions][add-resolutions]

# Initialize Remix App

1. Run `npx create-remix@latest`
2. Enter `./my-remix-app`
3. Select `Just the basics`
4. Select `Remix App Server`
5. Select `TypeScript`
6. Enter `Y`

![initializeremix][initialize-remix]

# Configure Tailwind

1. Run the following commands.

```text
npm install -D tailwindcss postcss autoprefixer concurrently
npx tailwindcss init
```

2. Modify the `tailwind.config.js` content field to include `./app/**/*.{js,ts,jsx,tsx}`
3. Add the following `scripts` to your `package.json`

```json
"build": "npm run build:css && remix build",
"build:css": "tailwindcss -m -i ./styles/app.css -o app/styles/app.css",
"dev": "concurrently \"npm run dev:css\" \"remix dev\"",
"dev:css": "tailwindcss -w -i ./styles/app.css -o app/styles/app.css",
```

4. Create `styles/app.css` and add the following content.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Add the following lines to `app/root.tsx`.

```typescript
import styles from "./styles/app.css"

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}
```

6. Add `app/styles/app.css` to `.gitignore`

![configure tailwind][configure-tailwind]

/resolutions
/resolutions/:year
/resolutions/:id

[create-database]: images/create-database.png
[define-schema]: images/define-schema.png
[add-resolutions]: images/add-resolutions.png
[initialize-remix]: images/initialize-remix.png
[configure-tailwind]: images/configure-tailwind.png
