import React from "react";
import Card from "../components/Card";

function Cards({ games, titleCard, loading }) {
  if (loading) {
    return <h2>loading...</h2>;
  }

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

export default Cards;
