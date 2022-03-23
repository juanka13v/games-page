import React, { useRef } from "react";
import Card from "../components/Card";
import Filter from "./Filter";
import Pagination from "./Pagination";

function Cards({
  games,
  titleCard,
  loading,
  setPage,
  page,
  totalGames,
  limit
}) {
  const topPage = useRef(null);

  const executeScroll = () => topPage.current.scrollIntoView();

  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <div className="cards">
      <div className="cards_title">
        <h1>{titleCard}</h1>
      </div>
      <div className="cards_content" ref={topPage}>
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
          executeScroll={executeScroll}
        />
      )}
    </div>
  );
}

export default Cards;
