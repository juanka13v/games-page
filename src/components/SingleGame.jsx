import React from "react";
import Slider from "./Slider";

function SingleGame({
  title,
  description,
  genre,
  platform,
  developer,
  publisher,
  release_date,
  franchise,
  thumbnail,
  screenshots,
}) {
  if (title) {
    return (
      <div className="single-game">
        <div className="header">
          <h2>{title}</h2>
          <div className="img">
            <img src={thumbnail} alt={title} />
          </div>
        </div>
        <div className="body">
          <div className="slider">
            <Slider imgs={screenshots} />
          </div>
          <div className="content">
            <p>
              <span>Description:</span> {description}
            </p>
            <p>
              <span>genre:</span> {genre}
            </p>
            <p>
              <span>Realese Date:</span> {release_date.slice(0, 10)}
            </p>
            <p>
              <span>developer:</span> {developer}
            </p>
            <p>
              <span>publisher:</span> {publisher}
            </p>
            {franchise && (
              <p>
                <span>Franchise:</span> {franchise}
              </p>
            )}
                <p>
                  <span>Platforms:</span> {platform.join(",  ")}
                </p>
          </div>
        </div>
      </div>
    );
  } else {
    return <h2>Oh something wrong</h2>;
  }
}

export default SingleGame;
