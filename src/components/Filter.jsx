import React from "react";

const Filter = ({ setGenre, setPlatform }) => {
  const data = {
    genre: "",
    platform: "",
  };

  const handleGenre = (e) => {
    data.genre = e.target.value;
  };

  const handlePlatform = (e) => {
    data.platform = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setGenre(data.genre);
    setPlatform(data.platform);
  };

  return (
    <div className="filter">
      <div className="filter_title">
        <h3>Filtros</h3>
      </div>
      <form className="filter_items" onSubmit={handleSubmit}>
        <div className="item">
          <label>Plataform: </label>
          <select onChange={(e) => handlePlatform(e)}>
            <option defaultValue value="">
              --
            </option>
            <option value="pc">Pc</option>
            <option value="switch">Nintendo Switch</option>
            <option value="xbox one">Xbox One</option>
            <option value="ps4">Play 4</option>
          </select>
        </div>

        <div className="item">
          <label>Genre: </label>
          <select onChange={(e) => handleGenre(e)}>
            <option defaultValue value="">
              --
            </option>
            <option value="shooter">Shooter</option>
            <option value="survival">Survival</option>
            <option value="open world">Open World</option>
            <option value="survival horror">Survival Horror</option>
          </select>
        </div>

        <button type="submit" className="btn-filter">
          filter
        </button>
      </form>
    </div>
  );
};

export default Filter;
