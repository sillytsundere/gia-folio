import ProjectTitle from "../components/ProjectTitle";

export default function SalesDeck({ projectData }) {
  return (
    <div className="flex flex-col items-center bg-lightGreen">
      <ProjectTitle projectData={projectData} />
      <section className="p-3 grid gap-4">
        <img src={`../${projectData.images[0].image}`} className="w-full"/>
        <img src={`../${projectData.images[1].image}`} />
        <img src={`../${projectData.images[2].image}`} />
        <img src={`../${projectData.images[3].image}`} className="w-full"/>
        <img src={`../${projectData.images[4].image}`} />
        <img src={`../${projectData.images[5].image}`} />
        <img src={`../${projectData.images[6].image}`} />
        <div>
        <img src={`../${projectData.images[7].image}`} />
        <p className="text-sm py-3.5">{projectData.images[7].caption}</p>
        </div>
      </section>
      <section>
      <img src={`../${projectData.slides[0]}`} />
      <img src={`../${projectData.slides[1]}`} />
      <img src={`../${projectData.slides[2]}`} />
      </section>
    </div>
  );
}
