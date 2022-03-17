import React, { useState } from "react";

const NewSlider = ({ screenshots }) => {
  const [image, setImage] = useState(screenshots[0]);

  const handleChangeImgs = (e) => {
    setImage(e.target.src);
  };

  const imgsList = screenshots.map((img, index) => {
    return <img src={img} key={index} onClick={handleChangeImgs} className={img === image ? 'active': 'no-active'} />;
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
