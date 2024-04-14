export default function ProjectPage1({ projectData }) {
    console.log("projectData", projectData)
    return (
        <div>
            <section className="project-info">
                <h1>{projectData.name}</h1>
                <hr></hr>
                <h2>Overview</h2>
                <p>{projectData.overview}</p>
                <h2>Project Type</h2>
                <p>{projectData.type}</p>
                <h2>Role</h2>
                <p>{projectData.role}</p>
            </section>
            <section>

            </section>
        </div>
    )
}