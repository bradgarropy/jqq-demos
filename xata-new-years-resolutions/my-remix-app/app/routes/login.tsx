import type {ActionFunction, LoaderArgs} from "@remix-run/node"
import {Form, Link} from "@remix-run/react"
import {authenticator} from "utils/auth.server"

const loader = async ({request}: LoaderArgs) => {
    const user = await authenticator.isAuthenticated(request, {
        successRedirect: "/resolutions",
    })

    return user
}

const action: ActionFunction = async ({request}) => {
    return authenticator.authenticate("form", request, {
        successRedirect: "/resolutions",
        failureRedirect: "/login",
    })
}

const LoginPage = () => {
    return (
        <Form method="post" className="p-10 text-center">
            <h1 className="font-bold text-xl">
                Welcome! Login to see your resolutions.
            </h1>
            <p className="mb-6">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500">
                    Sign up
                </Link>
            </p>

            <label className="font-semibold mr-2" htmlFor="email">
                Email
            </label>
            <input
                className="border-2 rounded-md mr-8 border-gray-600 px-3 py-1"
                type="email"
                name="email"
                id="email"
            />

            <label className="font-semibold mr-2" htmlFor="password">
                Password
            </label>
            <input
                className="border-2 rounded-md mr-8 border-gray-600 px-3 py-1"
                type="password"
                name="password"
                id="password"
            />

            <button
                type="submit"
                className="bg-blue-500 text-white py-1 px-3 rounded-md font-semibold"
            >
                Login
            </button>
        </Form>
    )
}

export default LoginPage
export {action, loader}
