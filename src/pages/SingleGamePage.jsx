import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "../components/Slider";

import SingleGame from "../components/SingleGame";
import Loading from "../components/Loading";

const SingleGamePage = () => {
  const [data, setData] = useState([]);
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
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <div className="single-game-page">
      <SingleGame {...data} />
    </div>
  );
};

export default SingleGamePage;
