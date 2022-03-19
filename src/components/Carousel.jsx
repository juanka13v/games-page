import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Error from "./Error";

const Carousel = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(0);

  const url = "https://api-games-ar.herokuapp.com/api/v1/recommendations";

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

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((game) => {
        setData(game.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  // 450 215

  return (
    <div className="carousel">
      {data.map((item, index) => {
        const { _id, title, screenshots, short_description, thumbnail } = item;
        return (
          <div className={image === index ? "slide active" : "slide"} key={_id}>
            <img src={screenshots[0]} alt={title} />
            <div className="slide-content">
              <img src={thumbnail} alt={title} />
              <div className="slide-text">
                <h2>{title}</h2>
                <p>{short_description}</p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="btns">
        <button className="btn left" onClick={prev}>
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button className="btn right" onClick={next}>
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
