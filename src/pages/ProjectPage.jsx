import React from "react";
import { useParams } from "react-router-dom";

// import project data
import projectData from "../assets/projectData.json";
// import project pages/components
import SalesDeck from "../projects/SalesDeck";
import EventBooth from "../projects/EventBooth";
import NotFoundPage from "./NotFoundPage";

const ProjectPage = () => {
  const { projectURL } = useParams();

  //see if project exists
  const projectExists = projectData.find(
    (project) => project.url === projectURL
  );

  // Map project names to their respective components
  const projectComponents = {
    [projectData[0].url]: <SalesDeck projectData={projectData[0]} />,
    [projectData[1].url]: <EventBooth projectData={projectData[1]} />,
    //Can add more and as needed
  };

  // Render corresponding project component (or not found page if not found)
  return projectExists ? projectComponents[projectURL] : <NotFoundPage />;
};

export default ProjectPage;
