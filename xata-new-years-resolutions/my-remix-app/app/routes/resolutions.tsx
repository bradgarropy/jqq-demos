import { Link, Outlet } from "@remix-run/react"

const ResolutionsPage = () => {
    return (
        <div className="p-10">
            <Link className="inline-block mb-8" to="/resolutions">
                <h1 className="text-3xl font-bold">New Year's Resolutions</h1>
            </Link>

            <Outlet/>
        </div>
    )
}

export default ResolutionsPage
