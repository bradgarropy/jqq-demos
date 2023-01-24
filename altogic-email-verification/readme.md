# Create SvelteKit App

1. Run `npm create svelte@latest my-app`
2. Select `Skeleton project`
3. Select `Yes, using TypeScript syntax`
4. Select `Yes`
5. Select `Yes`
6. Select `No`
7. Select `No`
8. Run `cd my-app`
9. Run `npx svelte-add@latest tailwindcss`
10. Run `npm install -D @tailwindcss/forms`
11. Add `require('@tailwindcss/forms')` to the `plugins` option in `tailwind.config.cjs`
11. Run `npm install`
12. Run `npm run dev`

# Create Sign Up Page

1. Create a `src/routes/signup/+page.svelte` file
2. Add content

# Create Sign Up Action

1. Create a `src/routes/signup/+page.server.ts` file
2. Add content

# Create Email Pages

1. Create a `src/routes/success/+page.svelte` file
2. Add content
3. Create a `src/routes/failure/+page.svelte` file
4. Add content.

# Create Altogic App

1. Click `New app`
2. Enter `email-verification`
3. Click `Next`
4. Click `Next`
5. Click `Next`
6. Click `Next`
7. Select `Blank App`
8. Click `Create`
9. Click `Open designer`

# Create User Model

1. Click `Models`
2. Click `New`
3. Select `Model`
4. Enter `users` for `Model name`
5. Click `Next`
6. Click `Create`
7. Click `users`
8. Click `New field`
9. Select `Text field` -> `Email`
10. Enter `email` for `Field name`
11. Check `Unique` and `Required`
12. Click `Create`
13. Click `New field`
14. Select `Text field` -> `Text`
15. Enter `token` for `Field name`
16. Check `Unique`
17. Click `Create`
18. Click `New field`
19. Select `Boolean`
20. Enter `verified` for `Field name`
21. Check `Required`
22. Enter `false` for `Default value expression`
23. Click `Create`

# Create Sign Up Endpoint

1. Click `Endpoints`
2. Click `New`
3. Select `Endpoint`
4. Enter `auth-signup` for `Endpoint name`
5. Select `POST` for `Method`
6. Enter `/auth/signup` for `Path`
7. Select `Add new no-code service` for `Routed service`
8. Enter `signup` for `Service name`
9. Click `Create`
10. Click `Create`
11. Click `Services`
12. Click `signup`
13. Drag `Return Success Response` to the canvas
14. Hook it up to `Start`
15. Click `Add key-value pair`
16. Enter `"message"` for `Key`
17. Enter `"signup success"` for `Value`

# Create Verify Endpoint

1. Click `Endpoints`
2. Click `New`
3. Select `Endpoint`
4. Enter `auth-verify` for `Endpoint name`
5. Select `POST` for `Method`
6. Enter `/auth/verify` for `Path`
7. Select `Add new no-code service` for `Routed service`
8. Enter `verify` for `Service name`
9. Click `Create`
10. Click `Create`
11. Click `Services`
12. Click `verify`
13. Drag `Return Success Response` to the canvas
14. Hook it up to `Start`
15. Click `Add key-value pair`
16. Enter `"message"` for `Key`
17. Enter `"verify success"` for `Value`

# Integrate Altogic CLI

1. Run `npm install altogic`
2. 
