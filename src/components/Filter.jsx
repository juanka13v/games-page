import React from "react";

const Filter = () => {

  return (
    <div className="filter">
      <div className="filter_title">
        <h3>Filtros</h3>
      </div>
      <form className="filter_items">
        <div className="item">
          <label>Plataform: </label>
          <select>
            <option selected value="--">
              --
            </option>
            <option value="pc">Pc</option>
            <option value="switch">Nintendo Switch</option>
            <option value="xbox 360">Xbox 360</option>
            <option value="ps4">Play 4</option>
          </select>
        </div>

        <div className="item">
          <label>Genre: </label>
          <select>
            <option selected value="--">
              --
            </option>
            <option value="shooter">Shooter</option>
            <option value="survival">Survival</option>
            <option value="open world">Open World</option>
            <option value="survival horror">Survival Horror</option>
          </select>
        </div>

        <div className="item">
          <label>Franchise: </label>
          <select>
            <option selected value="--">
              --
            </option>
            <option value="shooter">Call of Duty</option>
            <option value="survival">Resident Evil</option>
            <option value="open world">Asssins cred</option>
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
