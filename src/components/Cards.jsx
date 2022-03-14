import React from "react";
import Card from "../components/Card";
import Pagination from "./Pagination";

function Cards({
  games,
  titleCard,
  loading,
  setPage,
  page,
  totalGames,
  limit,
}) {
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

      {totalGames > limit && (
        <Pagination
          setPage={setPage}
          page={page}
          games={games}
          totalGames={totalGames}
          limit={limit}
        />
      )}
    </div>
  );
}

export default Cards;
