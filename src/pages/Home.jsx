import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Home = () => {
  const [endPoint, setEndPoint] = useState('games');
  const [page, setPage] = useState(2);
  const [limit, setLimit] = useState(10);
  const [data, setData] = useState(null);

  const getData = async () => {
    const games = await fetch(`https://api-games-ar.herokuapp.com/api/v1/games?limit=${limit}&page=${page}`);

    const res = await games.json();
    setData(res.data)
  };

  

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container_home">
      <div className="home_wrapper">
        <h1>Home</h1>
        <Cards games={data} />
      </div>
    </div>
  );
};

export default Home;
