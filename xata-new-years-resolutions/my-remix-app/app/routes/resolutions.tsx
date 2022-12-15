import type { ActionFunction, LoaderArgs } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"
import { XataClient } from "utils/xata"
import { NewResolution } from "~/components/NewResolution"
import { Resolution } from "~/components/Resolution"

const loader = async ({request}: LoaderArgs) => {
    const xata = new XataClient()
    const url = new URL(request.url)
    const year = Number(url.searchParams.get("year"))

    const resolutions = await xata.db.resolutions.filter(year ? {year} : {}).sort("year", "desc").getMany()
    return {year, resolutions}
}

const action: ActionFunction = async ({request}) => {
    const xata = new XataClient()
    const form = await request.formData()
    const action = form.get("action")

    switch (action) {
        case "complete": {
            const id = form.get("id")

            if(typeof id !== "string") {
                return null
            }

            const isCompleted = !!form.get("isCompleted")
            const resolution = await xata.db.resolutions.update(id, {isCompleted})

            return resolution

        }

        case "add": {
            const year = Number(form.get("year"))
            const isCompleted = !!form.get("isCompleted")
            const resolution = String(form.get("resolution"))

            const resolutions = await xata.db.resolutions.create({year, isCompleted, resolution})
            return resolutions
        }

        case "delete": {
            const id = form.get("id")

            if(typeof id !== "string") {
                return null
            }

            const resolution = await xata.db.resolutions.delete(id)
            return resolution
        }

        default:
            return null;
    }
}

const ResolutionsPage = () => {
    const {year, resolutions} = useLoaderData<typeof loader>()

    return (
        <div className="p-10">
            <Link className="inline-block mb-8" to="/resolutions">
                <h1 className="text-3xl font-bold">New Year's Resolutions</h1>
            </Link>

            <div className="grid grid-flow-row gap-y-10">
                <NewResolution/>

                <div className="grid grid-cols-[repeat(4,auto)] justify-start items-center gap-x-8 gap-y-4">
                    {resolutions.length === 0 ?
                        <p className="text-gray-500 italic">{`You made no resolutions for the year ${year}!`}</p> :
                        resolutions.map(resolution => {
                            return (
                                <Resolution key={resolution.id} resolution={resolution}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ResolutionsPage
export {action, loader}
