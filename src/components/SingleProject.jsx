import ProjectTitle from "./ProjectTitle";
import Slides from "./Slides";

export default function SingleProject({ projectData }) {
  return (
    <div className="flex flex-col items-center bg-lightGreen">
      <ProjectTitle projectData={projectData} />
      <section className="p-3 flex flex-wrap gap-4 w-full">
        {projectData.images.map((image, index) => {
          return (
            <figure className="max-w-[100%]" key={index}>
              <img src={`../${image.image}`} alt={image.alt} />
              {image.caption ? <figcaption>{image.caption}</figcaption> : null}
            </figure>
          );
        })}
      </section>
      {projectData.slides ? <Slides slides={projectData.slides} /> : null}
    </div>
  );
}
