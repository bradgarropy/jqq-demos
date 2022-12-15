import { Form } from "@remix-run/react"

const NewResolution = () => {
    return (
        <Form method="post" className="mb-8">
            <label className="font-semibold" htmlFor="year">Year</label>
            <input type="text" name="year" id="year" placeholder="2023" className="border-2 border-gray-400 rounded-md"/>

            <label className="font-semibold" htmlFor="isCompleted">Completed</label>
            <input type="checkbox" name="isCompleted" id="isCompleted" defaultChecked={false} className="border-2 border-gray-400 rounded-md"/>

            <label className="font-semibold" htmlFor="resolution">Resolution</label>
            <input type="text" name="resolution" id="resolution"  className="border-2 border-gray-400 rounded-md"/>

            <button type="submit" name="action" value="add" className="bg-blue-500 text-white py-1 px-3 rounded-md font-semibold">Add</button>
        </Form>
    )
}

export {NewResolution}
