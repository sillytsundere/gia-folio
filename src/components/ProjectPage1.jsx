export default function ProjectPage1({ projectData }) {
  console.log("projectData", projectData);
  return (
    <div className="flex justify-center">
      <section className="project-info w-1/2">
        <h1>{projectData.name}</h1>
        <hr></hr>
        <div className="flex flex-row">
          <div className="w-3/5">
            <h2>Overview</h2>
            <p>{projectData.overview}</p>
          </div>
          <div className="w-2/5">
            <h2>Project Type</h2>
            <p>{projectData.type}</p>
            <h2>Role</h2>
            <p>{projectData.role}</p>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
}
