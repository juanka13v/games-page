import React, { useState, useEffect } from "react";
import Slider from "./Slider";

const SingleGame = ({
  title,
  thumbnail,
  screenshots,
  description,
  genre,
  release_date,
  developer,
  publisher,
  franchise,
  platform,
  minimum_system_requirements,
}) => {
  if (!title) {
    return <div>Oh something wrong...</div>;
  }

  return (
    <div className="single-game">
      <div className="header">
        <h2>{title}</h2>
      </div>
      <div className="body">
        <div className="slider">
          <Slider imgs={screenshots} />
        </div>
        <div className="content">
          <div className="img">
            <img src={thumbnail} alt={title} />
          </div>
          <p>
            <span>Description:</span> {description}
          </p>
          <p>
            <span>Genre:</span> {genre}
          </p>
          <p>
            <span>Realese Date:</span> {release_date.slice(0, 10)}
          </p>
          <p>
            <span>Developer:</span> {developer}
          </p>
          <p>
            <span>Publisher:</span> {publisher}
          </p>
          {franchise && (
            <p>
              <span>Franchise:</span> {franchise}
            </p>
          )}
          <p>
            <span>Platforms:</span> {platform.join(",  ")}
          </p>
          <p className="text-title">Requirements:</p>
          {minimum_system_requirements && (
            <div className="requirements">
              <p>
                <span>Graphics:</span> {minimum_system_requirements.graphics}
              </p>
              <p>
                <span>Os:</span> {minimum_system_requirements.os}
              </p>
              <p>
                <span>Storage:</span> {minimum_system_requirements.storage}
              </p>
              <p>
                <span>Processor:</span> {minimum_system_requirements.processor}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleGame;
