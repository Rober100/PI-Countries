import React from "react";
import style from "../Paginado/paginado.module.css";

const Paginado = ({ countryPerPage, allCountries, paginado, currentPage, allActivities }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCountries / countryPerPage); i++) {
    pageNumbers.push(i);
  }

  for (let j = 1; j <= Math.ceil(allActivities / countryPerPage); j++) {
    pageNumbers.push(`A${j}`);
  }

 
  const goToPreviousPage = () => {
    if (currentPage > 1) {
        paginado(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < pageNumbers.length) {
        paginado(currentPage + 1);
    }
  };

  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        <li>
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={style.paging}>
            {"<<<"}
          </button>
        </li>

        {pageNumbers?.map((number) => {
          return (
            <li key={number} >
              <button onClick={()=> paginado(number)} className={number === currentPage ? style.pagingActive : style.paging }>{number}</button>
            </li>
          );
        })}

        <li>
          <button
            onClick={goToNextPage}
            disabled={currentPage === pageNumbers.length}
            className={style.paging}>
            {">>>"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginado