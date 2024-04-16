import React from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import projectData from "../assets/projectData.json"

function ProjectLink({ url, name, coverPhoto }) {
    return (
        <figure className="">
            <Link to={`/work/${url}`}>
                <div className="">
                    <img src={coverPhoto} alt={name} className="object-cover object-center aspect-square" />
                </div>
                <figcaption className="my-5">{name}</figcaption>
            </Link>
        </figure>    
    )
}

export default function Work() {
    const location = useLocation();

    const isWorkPage = location.pathname === '/work';

    return (
        <main className="m-0">
            {isWorkPage ? (
                <section className="p-[25px]">
                {projectData.map((project) => (
                    <ProjectLink name={project.name} url={project.url} coverPhoto={project.coverPhoto} key={project.name}/>
                ))}
                </section>
            ) : (
                <Outlet /> 
            )}
        </main>
    )
}