import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import SingleGame from "../components/SingleGame";
import Loading from "../components/Loading";


const SingleGamePage = () => {
  const [data, setData] = useState([]);
  const [dataRe, setDataRe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { id } = useParams();

  const url = `https://api-games-ar.herokuapp.com/api/v1/game/${id}`;

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((game) => {
        setData(game.data);
        setDataRe(game.re);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="single-game-page">
      <SingleGame {...data} recommendations={dataRe} />
    </div>
  );
};

export default SingleGamePage;
