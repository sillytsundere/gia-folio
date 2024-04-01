import { Outlet, Link } from "react-router-dom";


export default function Work() {
    return (
        <div>
            <p>Hello from the /Work page!</p>
            <Link to="/work/project1">Project 1</Link>
            <Link to="/work/project2">Project 2</Link>
            <Outlet />
        </div>
    )
}