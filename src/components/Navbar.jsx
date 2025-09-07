import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather, setUnit } from "../features/weatherSlice";

function Navbar() {
  const [cityName, setCityName] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault(); // prevent form reload
    if (cityName.trim() !== "") {
      dispatch(fetchWeather(cityName));
      setCityName(""); // input reset
    }
  };

  return (
    <nav
      className="navbar"
      style={{ backgroundColor: "rgba(230, 231, 231, 0.76)" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-warning fw-bold">
          <span className="fs-1">☁</span>Weather DashBoard
        </a>
        <form className="d-flex" role="search" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search City"
            aria-label="Search"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
          <button
            className="btn btn-outline-success mx-2"
            type="button"
            onClick={() => dispatch(setUnit("F"))}
          >
            °F
          </button>
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={() => dispatch(setUnit("C"))}
          >
            °C
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
