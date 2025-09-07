import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, setUnit } from "../features/weatherSlice";
import { addHistory } from "../features/HistorySlice";

function Navbar() {
  const [cityName, setCityName] = useState("");
  const dispatch = useDispatch();
  const { unit } = useSelector((s) => s.weather);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = cityName.trim();
    if (!trimmed) return;

    try {
      await dispatch(fetchWeather({ city: trimmed, unit })).unwrap();
      dispatch(addHistory(trimmed));
      setCityName("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav
      className="navbar"
      style={{ backgroundColor: "rgba(230, 231, 231, 0.76)" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-warning fw-bold">
          <span className="fs-1">☁</span> Weather DashBoard
        </a>
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
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
