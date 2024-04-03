import React from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import projectData from "../assets/projectData.json"

function ProjectLink({ name, coverPhoto }) {
    return (
        <div>
            <img src={coverPhoto} alt={name}/>
            <Link to={`/work/${name}`}>{name}</Link>
        </div>    
    )
}

export default function Work() {
    const location = useLocation();

    const isWorkPage = location.pathname === '/work';

    return (
        <div>
            {isWorkPage ? (
                <main>
                <p>Hello from the /Work page!</p>
                {projectData.map((project) => (
                    <ProjectLink name={project.name} coverPhoto={project.coverPhoto} key={project.name}/>
                ))}
                </main>
            ) : (
                <Outlet /> 
            )}
        </div>
    )
}