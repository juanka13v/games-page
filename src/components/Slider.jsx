import React, { useState } from "react";

const NewSlider = ({ screenshots }) => {
  const [image, setImage] = useState(screenshots[0]);

  const handleChangeImgs = (e) => {
    setImage(e.target.src);
  };

  const imgsList = screenshots.map((img, index) => {
    return (
      <div className="thumbnail-img" key={index}>
        <img
          src={img}
          key={index}
          onClick={handleChangeImgs}
          className={img === image ? "active" : "no-active"}
        />
      </div>
    );
  });

  return (
    <div className="gallery">
      <div className="main-img">
        <img src={image} />
      </div>
      <div className="thumbnail">{imgsList}</div>
    </div>
  );
};

export default NewSlider;
