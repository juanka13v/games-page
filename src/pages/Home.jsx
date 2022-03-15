import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import SingleGame from "../components/SingleGame";

// Hacer en la api una reconmendacion aleatoria

const Home = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalGames, setTotalGames] = useState(null);
  const [platform, setPlatform] = useState('');
  const [genre, setGenre] = useState('');

  // const url = `https://api-games-ar.herokuapp.com/api/v1/games?platform=${platform}&&genre=${genre}`;
  const url = `https://api-games-ar.herokuapp.com/api/v1/game/6228d682eff5d5e9fa138e20`;

  
  const getData = async () => {
    const collection = await fetch(url);
    
    const res = await collection.json();
    // const indexOfLastGame = limit * page;
    // const indexOfFirstGame = indexOfLastGame - limit;
    // const games = res.data.slice(indexOfFirstGame, indexOfLastGame);
    // setTotalGames(res.data.length);
    setData(res.data)
    console.log(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [url, page]);

  return (
    <div className="container_home">
      <div className="home_wrapper">
        {/* <h1>Home</h1>
        <Cards
          games={data}
          titleCard="All Games Collection"
          loading={loading}
          setPage={setPage}
          page={page}
          totalGames={totalGames}
          limit={limit}
          setGenre={setGenre}
          setPlatform={setPlatform}
        /> */}
        <SingleGame {...data}/>
      </div>
    </div>
  );
};

export default Home;
