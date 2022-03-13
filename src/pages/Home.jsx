import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import SingleGame from "../components/SingleGame";

// Hacer en la api una reconmendacion aleatoria

const Home = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = `https://api-games-ar.herokuapp.com/api/v1/games?limit=${limit}&page=${page}`;
  // const url = `https://api-games-ar.herokuapp.com/api/v1/game/6228d682eff5d5e9fa138e20`;

  const getData = async () => {
    const games = await fetch(url);

    const res = await games.json();
    setData(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [url]);

  return (
    <div className="container_home">
      <div className="home_wrapper">
        <h1>Home</h1>
        <Cards games={data} titleCard="All Games Collection" loading={loading}/>
      </div>
    </div>
  );
};

export default Home;
