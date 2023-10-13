import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "../Nav/nav.module.css";
import { useDispatch } from "react-redux";
import * as actions from "../../Redux/actions";
import image from "../../assets/planet.svg";

const url =
  "https://cdn-icons-png.flaticon.com/512/45/45069.png?w=740&t=st=1688998939~exp=1688999539~hmac=7a38f22e779375c8cb60ffd2ca1bef100f9bff53b4f7303b4844c2955a68c3ca";

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
        <a className="navbar-brand" href="/home">
          <img src={image} alt="Bootstrap" width="50" height="40" />
        </a>
        <a className="navbar-brand text-light fw-bold">Henry Countries</a>
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
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="/home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/form">
                Create Activity
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/About">
                About me
              </a>
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
