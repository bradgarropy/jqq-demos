# Create Database

1. Click `Add a database`
2. Enter `new-years-resolutions` for `database name`
3. Click `Create`
4. Click `new-years-resolutions`

![create database][create-database]

# Define Resolutions Schema

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

The data model will look like this.

```typescript
{
  "id": "rec_abcdefg",
  "year": 2023,
  "resolution": "practice spanish every day",
  "isCompleted": false,
}
```

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

# Initialize Xata

1. Run `npm install -g @xata.io/cli`
2. Run `xata auth login`
3. Select `Create a new API key in browser`
4. Enter `new-years-resolutions` for `name`
5. Click `Create API key`
6. Run `xata init`
7. Select `new-years-resolutions` for `database`
8. Select `Generate TypeScript code` for `code generation`
9. Enter `utils/xata.ts` for `output file`
10. Select `<None>` for `development branch`

The `xata init` command generates your `utils/xata.ts` file. This contains your `xata` client and the types for all of your data models. If you make changes to the database schema in the future, run the `xata codegen` command to generate a new `xata.ts` file.

![initialize xata][initialize-xata]

# Create Users Table

1. Navigate to `new-years-resolutions` database
2. Click `Add a table` and select `Add an empty table`
3. Enter `users` for `table name`
4. Click `+` and select `Email`
5. Enter `email` for `Column name`
6. Check `Unique`
7. Click `Create column`
4. Click `+` and select `String`
5. Enter `password` for `Column name`
6. Click `Create column`
7. Run `xata codegen`

# Add Authentication
1. Run `npm install remix-auth remix-auth-form`


[create-database]: images/create-database.png
[define-schema]: images/define-schema.png
[add-resolutions]: images/add-resolutions.png
[initialize-remix]: images/initialize-remix.png
[configure-tailwind]: images/configure-tailwind.png
[initialize-xata]: images/initialize-xata.png
