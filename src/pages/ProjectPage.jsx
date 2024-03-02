import React from "react"
import { useParams } from "react-router-dom"

// import project pages/components

const ProjectPage = () => {
    const { projectName } = useParams();

    // Map project names to their respective components
    const projectComponents = {
        project1: <ProjectPage1 />,
        project2: <ProjectPage2 />,
        //Can add more and rename(?) as needed
    };

    // Render corresponding project component (or not found page if not found)
    return projectComponents[projectName];
    // || <NotFoundPage />;
}

export default ProjectPage;