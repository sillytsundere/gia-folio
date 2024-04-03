import React from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import projectData from "../assets/projectData.json"
import "./Work.css";

function ProjectLink({ name, coverPhoto }) {
    return (
        <div className="card">
            <Link to={`/work/${name}`}>
            <img src={coverPhoto} alt={name} className="card-image" />
                <p>{name}</p>
            </Link>
        </div>    
    )
}

export default function Work() {
    const location = useLocation();

    const isWorkPage = location.pathname === '/work';

    return (
        <main>
            {isWorkPage ? (
                <div>
                <section className="section">
                {projectData.map((project) => (
                    <ProjectLink name={project.name} coverPhoto={project.coverPhoto} key={project.name}/>
                ))}
                </section>
                </div>
            ) : (
                <Outlet /> 
            )}
        </main>
    )
}