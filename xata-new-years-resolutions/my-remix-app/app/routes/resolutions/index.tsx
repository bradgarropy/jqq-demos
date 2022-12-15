import type { ActionFunction} from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react"
import { XataClient } from "utils/xata"
import { NewResolution } from "~/components/NewResolution";
import { Resolution } from "~/components/Resolution"

const loader = async () => {
    const xata = new XataClient()

    const resolutions = await xata.db.resolutions.sort("year", "desc").getMany()
    return {resolutions}
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
            break;
    }
}

const ResolutionsPage = () => {
    const {resolutions} = useLoaderData<typeof loader>()

    return (
        <div className="grid grid-flow-row gap-y-2">
            <NewResolution/>

            <div className="grid grid-cols-[repeat(4,auto)] justify-start items-center gap-x-8 gap-y-4">
                {resolutions.map(resolution => {
                    return (
                        <Resolution key={resolution.id} resolution={resolution}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ResolutionsPage
export {loader, action}
