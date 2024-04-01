import React from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";


export default function Work() {
    const location = useLocation();

    const isWorkPage = location.pathname === '/work';

    return (
        <div>
            {isWorkPage ? (
                <main>
                <p>Hello from the /Work page!</p>
                <Link to="/work/project1">Project 1</Link>
                <Link to="/work/project2">Project 2</Link>
                </main>
            ) : (
                <Outlet /> 
            )}
        </div>
    )
}