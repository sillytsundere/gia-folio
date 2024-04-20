import React, { useState } from 'react';

export default function Slides({ slides }) {

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    current === 0 ? setCurrent(slides.length - 1) : setCurrent(current - 1);
  }

  const nextSlide = () => {
    current === slides.length -1 ? setCurrent(0) : setCurrent(current + 1);
  }

  return (
    <div className="w-full overflow-hidden">
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