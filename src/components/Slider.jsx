import React, { useState } from "react";

const Slider = ({ imgs }) => {
  const [slideIndex, setSlideIndex] = useState(2);

  const nextSlide = () => {
    if (slideIndex === 2) {
      setSlideIndex(0);
      return;
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(2);
      return;
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <div className="slider_container">
      {imgs.map((item, index) => {
        return (
          <div
            className={index === slideIndex ? "slide active-anim" : "slide"}
            key={index}
          >
            <img src={item} />
          </div>
        );
      })}
      <button className="btn-slide next" onClick={nextSlide}>
        &#8594;
      </button>
      <button className="btn-slide prev" onClick={prevSlide}>
        &#8592;
      </button>
    </div>
  );
};

export default Slider;
