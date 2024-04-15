import ProjectTitle from "../components/ProjectTitle";

export default function SalesDeck({ projectData }) {
  return (
    <div className="flex flex-col items-center">
      <ProjectTitle projectData={projectData} />
      <section>
        <img src={`../${projectData.images[0].image}`} />
        <img src={`../${projectData.images[1].image}`} />
        <img src={`../${projectData.images[2].image}`} />
        <img src={`../${projectData.images[3].image}`} />
        <img src={`../${projectData.images[4].image}`} />
        <img src={`../${projectData.images[5].image}`} />
        <img src={`../${projectData.images[6].image}`} />
        <img src={`../${projectData.images[7].image}`} />
        <p>{projectData.images[7].caption}</p>
      </section>
      <section>
      <img src={`../${projectData.slides[0]}`} />
      <img src={`../${projectData.slides[1]}`} />
      <img src={`../${projectData.slides[2]}`} />
      </section>
    </div>
  );
}
