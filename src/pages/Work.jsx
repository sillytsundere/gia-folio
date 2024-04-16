import React from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import projectData from "../assets/projectData.json"
import "./Work.css";

function ProjectLink({ url, name, coverPhoto }) {
    return (
        <figure className="card">
            <Link to={`/work/${url}`}>
                <div className="img-container">
                    <img src={coverPhoto} alt={name} className="card-image" />
                </div>
                <figcaption className="link-text">{name}</figcaption>
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
                <section className="section">
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