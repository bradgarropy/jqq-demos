import type {ActionFunction, LoaderArgs} from "@remix-run/node"
import {Form, Link, useLoaderData} from "@remix-run/react"
import {authenticator} from "utils/auth.server"
import {XataClient} from "utils/xata"
import {NewResolution} from "~/components/NewResolution"
import {Resolution} from "~/components/Resolution"

const loader = async ({request}: LoaderArgs) => {
    const user = await authenticator.isAuthenticated(request, {
        failureRedirect: "/login",
    })

    const xata = new XataClient()
    const url = new URL(request.url)
    const yearFilter = Number(url.searchParams.get("year"))
    const year = yearFilter || new Date().getFullYear()

    let resolutions

    if (yearFilter) {
        resolutions = await xata.db.resolutions
            .filter({"user.id": user.id, "year": yearFilter})
            .sort("year", "desc")
            .getMany()
    } else {
        resolutions = await xata.db.resolutions
            .filter({"user.id": user.id})
            .sort("year", "desc")
            .getMany()
    }

    return {user, year, resolutions}
}

const action: ActionFunction = async ({request}) => {
    const user = await authenticator.isAuthenticated(request, {
        failureRedirect: "/login",
    })

    const xata = new XataClient()
    const form = await request.formData()
    const action = form.get("action")

    switch (action) {
        case "complete": {
            const id = form.get("id")

            if (typeof id !== "string") {
                return null
            }

            const isCompleted = !!form.get("isCompleted")
            const resolution = await xata.db.resolutions.update(id, {
                isCompleted,
            })

            return resolution
        }

        case "add": {
            const year = Number(form.get("year"))
            const isCompleted = !!form.get("isCompleted")
            const resolution = String(form.get("resolution"))

            const resolutions = await xata.db.resolutions.create({
                user,
                year,
                isCompleted,
                resolution,
            })

            return resolutions
        }

        case "delete": {
            const id = form.get("id")

            if (typeof id !== "string") {
                return null
            }

            const resolution = await xata.db.resolutions.delete(id)
            return resolution
        }

        case "logout": {
            return await authenticator.logout(request, {redirectTo: "/login"})
        }

        default:
            return null
    }
}

const ResolutionsPage = () => {
    const {user, year, resolutions} = useLoaderData<typeof loader>()

    return (
        <div className="p-10">
            <div className="grid grid-flow-col justify-between mb-16">
                <Link className="inline-block" to="/resolutions">
                    <h1 className="text-3xl font-bold">
                        New Year's Resolutions
                    </h1>
                </Link>

                {user ? (
                    <Form method="post">
                        <button
                            type="submit"
                            name="action"
                            value="logout"
                            className="bg-white text-black border-2 border-black py-1 px-3 rounded-md font-semibold"
                        >
                            Logout
                        </button>
                    </Form>
                ) : null}
            </div>

            <div className="grid grid-flow-row gap-y-10">
                <NewResolution />

                <div className="grid grid-cols-[repeat(4,auto)] justify-start items-center gap-x-8 gap-y-4">
                    {resolutions.length === 0 ? (
                        <p className="text-gray-500 italic">{`You made no resolutions for the year ${year}!`}</p>
                    ) : (
                        resolutions.map(resolution => {
                            return (
                                <Resolution
                                    key={resolution.id}
                                    resolution={resolution}
                                />
                            )
                        })
                    )}
                </div>
            </div>
        </div>
    )
}

export default ResolutionsPage
export {action, loader}
