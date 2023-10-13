import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./App.css";
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home";
import Form from "./Views/Form/Form";
import Nav from "./Components/Nav/Nav";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "./Redux/actions";
import Details from "./Views/Detail/Details";
import SearchBar from "./Components/Search/SearchBar";
import About from "./Views/About/About";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getCountries());
    dispatch(actions.getActivities());
    // dispatch(actions.filterByActivities())
  }, []);

  return (
    <div>
      {location.pathname !== "/" && <Nav />}
      {location.pathname === "/home" && <SearchBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
