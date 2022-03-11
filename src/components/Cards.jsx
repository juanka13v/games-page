import React from "react";
import Card from "../components/Card";

function Cards({ games }) {
  console.log(games);
  
  if(games) {
    return (
        <div className="cards">
          <h1>Cards</h1>
          {games.map((game) => {
            return <Card {...game} key={game._id}/>;
          })}
        </div>
      );
  }

  return (
      <h1>Something Wrong</h1>
  )
}

export default Cards;
