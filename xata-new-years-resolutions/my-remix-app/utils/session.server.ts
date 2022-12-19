import {createCookieSessionStorage} from "@remix-run/node"

const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "_session",
        sameSite: "lax",
        path: "/",
        httpOnly: true,
        secrets: [process.env.SESSION_SECRET],
        secure: process.env.NODE_ENV === "production",
    },
})

export {sessionStorage}
