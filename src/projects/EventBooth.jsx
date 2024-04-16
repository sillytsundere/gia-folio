import ProjectTitle from "../components/ProjectTitle";

export default function EventBooth({ projectData }) {
  return (
    <div className="flex flex-col items-center bg-lightGreen">
      <ProjectTitle projectData={projectData} />
      <section>
        <img src={`../${projectData.images[0].image}`} />
        <img src={`../${projectData.images[1].image}`} />
        <img src={`../${projectData.images[2].image}`} />
        <img src={`../${projectData.images[3].image}`} />
        <img src={`../${projectData.images[4].image}`} />
        <img src={`../${projectData.images[5].image}`} />
      </section>
    </div>
  );
}
