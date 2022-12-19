import type {ActionFunction, LoaderArgs} from "@remix-run/node"
import {Form, Link} from "@remix-run/react"
import {authenticator} from "utils/auth.server"
import bcrypt from "bcryptjs"
import {XataClient} from "utils/xata"

const loader = async ({request}: LoaderArgs) => {
    const user = await authenticator.isAuthenticated(request, {
        successRedirect: "/resolutions",
    })

    return user
}

const action: ActionFunction = async ({request}) => {
    const form = await request.formData()
    const email = form.get("email") as string
    const password = form.get("password") as string

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const xata = new XataClient()
    const user = await xata.db.users.create({email, password: hashedPassword})
    console.log(user)

    return await authenticator.authenticate("form", request, {
        successRedirect: "/resolutions",
        failureRedirect: "/login",
        context: {formData: form},
    })
}

const LoginPage = () => {
    return (
        <Form method="post" className="p-10 text-center">
            <h1 className="font-bold text-xl">
                Welcome! Sign up to create resolutions.
            </h1>

            <p className="mb-6">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500">
                    Login
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
                Signup
            </button>
        </Form>
    )
}

export default LoginPage
export {action, loader}
