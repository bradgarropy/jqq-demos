import { Form, Link, useSubmit } from "@remix-run/react"
import type { ChangeEventHandler, FC } from "react"
import type { Resolutions } from "utils/xata"

type ResolutionProps = {
    resolution: Resolutions
}

const Resolution: FC<ResolutionProps> = ({resolution}) => {
    const submit = useSubmit()

    const handleChange: ChangeEventHandler<HTMLFormElement> = (event) => {
        submit(event.currentTarget)
    }

    return (
        <>
            <Link className="font-bold text-xl tabular-nums" to={`/resolutions/${resolution.year}`}>{resolution.year}</Link>

            <Form method="post" onChange={handleChange} className="leading-[0]">
                <input type="checkbox" name="isCompleted" id="isCompleted" checked={resolution.isCompleted} readOnly className="w-5 h-5 cursor-pointer"/>
                <input type="hidden" name="id" value={resolution.id}/>
                <input type="hidden" name="action" value="complete"/>
            </Form>

            <span className={resolution.isCompleted ? "line-through" : "no-underline"}>{resolution.resolution}</span>

            <Form method="post">
                <button type="submit" name="action" value="delete" className="bg-red-500 text-white py-1 px-3 rounded-md font-semibold">Delete</button>
                <input type="hidden" name="id" value={resolution.id}/>
            </Form>
        </>
    )
}

export {Resolution}
