import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";

const Carousel = ({images, loading, error}) => {
  const [image, setImage] = useState(0);

  const next = () => {
    if (image === 2) {
      setImage(0);
      return;
    }

    setImage(image + 1);
  };

  const prev = () => {
    if (image === 0) {
      setImage(2);
      return;
    }

    setImage(image - 1);
  };


  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="carousel">
      {images.map((item, index) => {
        const { _id, title, screenshots, short_description, thumbnail } = item;
        return (
          <div
            className={image === index ? "slide active" : "slide"}
            key={_id}
          >
            <img src={screenshots[0]} alt={title} />
            <div className="slide-content">
              <Link
                to={`/game/${_id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img src={thumbnail} alt={title} />
              </Link>
              <Link
                to={`/game/${_id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="slide-text">
                  <h2>{title}</h2>
                  <p>{short_description}</p>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
      <div className="btns">
        <button className="btn left" onClick={prev}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="btn right" onClick={next}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
