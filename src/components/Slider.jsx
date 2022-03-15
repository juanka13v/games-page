import React, { useState } from "react";

const Slider = ({ imgs }) => {
  const [slideIndex, setSlideIndex] = useState(0);

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
       <i className="fa-solid fa-arrow-right"></i>
      </button>
      <button className="btn-slide prev" onClick={prevSlide}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
    </div>
  );
};

export default Slider;
