import {Authenticator, AuthorizationError} from "remix-auth"
import {sessionStorage} from "./session.server"
import {FormStrategy} from "remix-auth-form"
import {getXataClient, UsersRecord} from "./xata"
import bcrypt from "bcryptjs"

const authenticator = new Authenticator<UsersRecord>(sessionStorage)

const formStrategy = new FormStrategy(async ({form}) => {
    const email = form.get("email") as string
    const password = form.get("password") as string

    const xata = getXataClient()
    const user = await xata.db.users.filter({email}).getFirst()

    if (!user) {
        console.log("wrong email")
        throw new AuthorizationError()
    }

    const passwordsMatch = await bcrypt.compare(
        password,
        user.password as string,
    )

    if (!passwordsMatch) {
        throw new AuthorizationError()
    }

    return user
})

authenticator.use(formStrategy, "form")

export {authenticator}
