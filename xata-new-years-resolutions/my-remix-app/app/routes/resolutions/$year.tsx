import type { ActionFunction, LoaderArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { XataClient } from "utils/xata"
import { NewResolution } from "~/components/NewResolution"
import { Resolution } from "~/components/Resolution"

const loader = async ({params}: LoaderArgs) => {
    const xata = new XataClient()

    const resolutions = await xata.db.resolutions.filter({year: Number(params.year)}).getMany()
    return {resolutions}
}

const action: ActionFunction = async ({request}) => {
    const form = await request.formData()
    const id = form.get("id")

    if(id === null) {
        return null
    }

    if(typeof id !== "string") {
        return null
    }

    const isCompleted = !!form.get("isCompleted")


    const xata = new XataClient()
    const resolution = await xata.db.resolutions.update(id, {isCompleted})

    return resolution
}

const YearPage = () => {
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

export default YearPage
export {loader, action}
