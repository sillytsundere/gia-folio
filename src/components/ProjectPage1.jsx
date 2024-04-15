import ProjectTitle from "./ProjectTitle";

export default function ProjectPage1({ projectData }) {
  console.log("projectData", projectData);
  console.log("projectData image", projectData.images[0].image);
  return (
    <div className="flex flex-col items-center">
      <ProjectTitle projectData={projectData}/>
      <section>
        {projectData.images.map((image) => (
            <div key={image.image}>
            <img src={`../${image.image}`} key={image} />
            <p>{image.caption}</p>
            </div>
        ))}
      </section>
    </div>
  );
}
