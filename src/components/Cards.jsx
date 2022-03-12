import React from "react";
import Card from "../components/Card";

function Cards({ games, titleCard }) {
  if (games) {
    return (
      <div className="cards">
        <h1 className="cards_title">{titleCard}</h1>
        <div className="cards_content">
          {games.map((game) => {
            return <Card {...game} key={game._id} />;
          })}
        </div>
      </div>
    );
  }

  return <h1>Something Wrong</h1>;
}

export default Cards;
