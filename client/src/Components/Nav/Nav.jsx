import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Nav/nav.module.css";
import { useDispatch } from "react-redux";
import * as actions from "../../Redux/actions";
import image from "../../assets/planet.svg";

const Nav = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getCountries());
  });

  const handlerClick = (event) => {
    event.preventDefault();
    dispatch(actions.getCountries());
  };

  return (
    <nav
      className="navbar navbar-expand-lg fs-5 "
      style={{ backgroundColor: "#3498db" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <img src={image} alt="Bootstrap" width="50" height="40" />
        </Link>
        <a className="navbar-brand text-light fw-bold">
          Henry Countries
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/form" className="nav-link text-light">
                Create Activity
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/About">
                About me
              </Link>
            </li>
          </ul>
          <div className="d-flex ms-auto">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
