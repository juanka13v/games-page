import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Loading from "../components/Loading";
import Carousel from "../components/Carousel";

// Hacer en la api una reconmendacion aleatoria

const Home = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [loading2, setLoading2] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalGames, setTotalGames] = useState(null);
  const [platform, setPlatform] = useState("");
  const [genre, setGenre] = useState("");

  const url = `https://api-games-ar.herokuapp.com/api/v1/games?platform=${platform}&&genre=${genre}`;
  // const url = `https://api-games-ar.herokuapp.com/api/v1/game/6228d682eff5d5e9fa138e20`;

  const urlRecommendations = "https://api-games-ar.herokuapp.com/api/v1/recommendations";

  const getData = async () => {
    setLoading(true);
    const collection = await fetch(url);
    const res = await collection.json();
    const indexOfLastGame = limit * page;
    const indexOfFirstGame = indexOfLastGame - limit;
    const games = res.data.slice(indexOfFirstGame, indexOfLastGame);
    setTotalGames(res.data.length);
    setData(games);
    setLoading(false);
  };

  const getDataRecommendations = () => {
    setLoading2(true);
    fetch(urlRecommendations)
      .then((res2) => res2.json())
      .then((game) => {
        setImages(game.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading2(false);
      });
  };

  useEffect(() => {
    getData();
    getDataRecommendations();
  }, [url, page]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container_home">
      <div className="home_wrapper">
        <div className="title">
          <h1>Recommendations</h1>
        </div>
        <Carousel images={images} loading={loading2} error={error} />

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
        />
      </div>
    </div>
  );
};

export default Home;
