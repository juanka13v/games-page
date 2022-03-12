import React from "react";
import Slider from "./Slider";

function SingleGame({
  title,
  description,
  genre,
  platforms,
  developer,
  publisher,
  release_date,
  franchise,
  thumbnail,
  screenshots
}) {
  if(title) {
    return (

      <div>
        <h1>Single Game</h1>
        <Slider imgs={screenshots} />
      </div>
        // <div className="single-game">
        //   <div className="content">
        //     <h2>{title}</h2>
        //     <img src={thumbnail} alt={title} />
        //     {screenshots.map((item, index) => {
        //         console.log(item)
        //        return <img src={item} key={index} />
        //     })}
        //   </div>
        //   <div className="details">
        //     <p>Description: {description}</p>
        //     <p>genre: {genre}</p>
        //     <p>Realese Date : {release_date.slice(0, 10)}</p>
        //     <p>developer: {developer}</p>
        //     <p>publisher: {publisher}</p>
        //     {franchise && <p>Franchise: {franchise}</p>}
        //   </div>
        // </div>
      );
  } else {
      return (
          <h2>Oh something wrong</h2>
      )
  }
}

export default SingleGame;
