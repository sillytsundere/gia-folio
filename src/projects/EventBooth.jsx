import ProjectTitle from "../components/ProjectTitle";

export default function EventBooth({ projectData }) {
  return (
    <div className="flex flex-col items-center bg-lightGreen">
      <ProjectTitle projectData={projectData} />
      <section className="p-3 grid gap-4">
        <img src={`../${projectData.images[0].image}`} className="w-full"/>
        <img src={`../${projectData.images[1].image}`} className="w-full"/>
        <img src={`../${projectData.images[2].image}`} className="w-full"/>
        <img src={`../${projectData.images[3].image}`} className="w-full"/>
        <img src={`../${projectData.images[4].image}`} className="w-full"/>
        <img src={`../${projectData.images[5].image}`} className="w-full"/>
      </section>
    </div>
  );
}
