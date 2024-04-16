import React, { useState } from 'react';

import ProjectTitle from "../components/ProjectTitle";

function Slides({ projectData }) {
  const slides = projectData.slides;

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    current === 0 ? setCurrent(slides.length - 1) : setCurrent(current - 1);
  }

  const nextSlide = () => {
    current === slides.length -1 ? setCurrent(0) : setCurrent(current + 1);
  }

  return (
    <div className="w-full overflow-hidden">
      {/* <div className="">
      <img src={`../${slides[currentIndex]}`} alt={`Slide ${currentIndex}`} className="w-full bg-center bg-cover" />
      </div> */}

      {/* <div onClick={prevSlide}>Left Arrow</div>
      <div onClick={nextSlide} className="">Right Arrow</div> */}
      <div className="flex transition ease-out duration-500"
      style={{transform: `translateX(-${current * 100}%)`}}
      >
        {slides.map((slide) => {
          return (
            <img src={`../${slide}`} key={slide} />
          )
        })}
      </div>
      <div onClick={prevSlide}>Left Arrow</div>
      <div onClick={nextSlide}>Right Arrow</div>
    </div>
  )
}

export default function SalesDeck({ projectData }) {
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
        <img src={`../${projectData.images[6].image}`} className="w-full"/>
        <div>
        <img src={`../${projectData.images[7].image}`} className="w-full"/>
        <p className="text-sm py-3.5 w-full">{projectData.images[7].caption}</p>
        </div>
      </section>
      <section>
      <Slides projectData={projectData}/>
      </section>
    </div>
  );
}
