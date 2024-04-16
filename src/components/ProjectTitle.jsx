export default function ProjectTitle({ projectData }) {
  return (
    <section className="px-6 py-7 w-screen">
      <h1 className="text-xl text-accDarkTeal py-5">{projectData.name}</h1>
      <div className="text-accDarkTeal py-5">
        <hr className="h-0.5 bg-accDarkTeal"></hr>
      </div>
      <div className="flex flex-col text-base">
        <div className="pb-8 pt-5">
          <h2 className="text-accDarkTeal mb-8">OVERVIEW</h2>
          <p>{projectData.overview}</p>
        </div>
        <div className="py-8">
          <h2 className="text-accDarkTeal mb-8">PROJECT TYPE</h2>
          <p>{projectData.type}</p>
          <h2 className="text-accDarkTeal my-8">ROLE</h2>
          <p>{projectData.role}</p>
        </div>
      </div>
    </section>
  );
}
