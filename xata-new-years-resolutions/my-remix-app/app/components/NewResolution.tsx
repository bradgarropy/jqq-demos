import {Form, useLoaderData} from "@remix-run/react"

const NewResolution = () => {
    const currentYear = new Date().getFullYear()
    const {year} = useLoaderData()

    return (
        <Form
            method="post"
            className="grid grid-flow-col justify-start items-center"
        >
            <label className="font-semibold mr-2" htmlFor="year">
                Year
            </label>

            <select
                name="year"
                id="year"
                className="border-2 rounded-md mr-8 border-gray-600 px-3 py-1 h-9"
                defaultValue={year}
            >
                {Array.from(Array(10).keys()).map(index => {
                    const year = currentYear + index
                    return (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    )
                })}
            </select>

            <label className="font-semibold mr-2" htmlFor="resolution">
                Resolution
            </label>
            <input
                type="text"
                name="resolution"
                id="resolution"
                className="border-2 rounded-md mr-8 border-gray-600 px-3 py-1"
            />
            <button
                type="submit"
                name="action"
                value="add"
                className="bg-blue-500 text-white py-1 px-3 rounded-md font-semibold"
            >
                Add
            </button>
        </Form>
    )
}

export {NewResolution}
