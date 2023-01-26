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

![signup page][signup-page]

# Create Verify Page

1. Create a `src/routes/signup/verify/+page.svelte` file
2. Add content

![verify page][verify-page]

# Create Email Pages

1. Create a `src/routes/signup/success/+page.svelte` file
2. Add content
3. Create a `src/routes/signup/failure/+page.svelte` file
4. Add content.

![success page][success-page]
![failure page][failure-page]

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

![user model][user-model]

# Create Email Queue

1. Click `Message queues`
2. Click `New`
3. Select `Queue`
4. Enter `verification-emails` for `Queue name`
5. Select `Add new no-code service` for `Routed service`
6. Enter `send-verification-email` for `Service name`
7. Click `Create`
8. Click `Create`
9. Click `Services`
10. Click `send-verification-email`
11. Add no-code logic

![send verification email service][send-verification-email-service]

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
13. Add no-code logic

![signup service][signup-service]

# Integrate Altogic CLI

1. Run `npm install altogic`
2. Create a `.env` file
3. Add `ALTOGIC_ENV_URL` variable
4. Add `ALTOGIC_CLIENT_KEY` variable
5. Create `src/altogic.ts`

```typescript
import { createClient } from 'altogic';
import { ALTOGIC_ENV_URL, ALTOGIC_CLIENT_KEY } from '$env/static/private';

const altogic = createClient(ALTOGIC_ENV_URL, ALTOGIC_CLIENT_KEY);

export { altogic };
```

# Create Sign Up Action

1. Create a `src/routes/signup/+page.server.ts` file
2. Add content

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
13. Add no-code logic

![verify service][verify-service]

# Create Verify Action

1. Create a `src/routes/signup/verify/+page.server.ts` file
2. Add content

[signup-service]: images/signup-service.png
[user-model]: images/user-model.png
[verify-service]: images/verify-service.png
[send-verification-email-service]: images/send-verification-email-service.png
[signup-page]: images/signup-page.png
[verify-page]: images/verify-page.png
[success-page]: images/success-page.png
[failure-page]: images/failure-page.png
