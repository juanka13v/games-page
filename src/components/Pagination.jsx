import React from "react";

const Pagination = ({ setPage, page, totalGames, limit, executeScroll }) => {
  const cells = [];

  for (let i = 0; i < Math.ceil(totalGames / limit); i++) {
    cells.push(i + 1);
  }

  const nextPage = () => {
    if (page === Math.ceil(totalGames / limit)) return;
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const handlePage = (e) => {
    if (page === parseInt(e.target.textContent)) return;

    setPage(parseInt(e.target.textContent));
  };

  return (
    <div className="btns">
      <button
        onClick={prevPage}
        className={page === 1 ? "btn disabled" : "btn"}
      >
        Prev
      </button>

      <ul className="cells">
        {cells.map((item, index) => {
          return (
            <li
              onClick={(e) => {
                handlePage(e);
                executeScroll();
              }}
              key={index}
              className={item === page ? "cell cell-active" : "cell"}
            >
              {item}
            </li>
          );
        })}
      </ul>

      <button
        onClick={nextPage}
        className={
          page === Math.ceil(totalGames / limit) ? "btn disabled" : "btn"
        }
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
