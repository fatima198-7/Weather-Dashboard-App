import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearHistory, addHistory } from "../features/HistorySlice";
import { fetchWeather } from "../features/weatherSlice";

function SearchHistory() {
  const dispatch = useDispatch();
  const { mhistory } = useSelector((s) => s.history);
  const { unit } = useSelector((s) => s.weather);

  if (!mhistory || mhistory.length === 0) {
    return (
      <div
        className="w-100 rounded p-4 mt-2 text-light"
        style={{ backgroundColor: "rgba(230, 231, 231, 0.33)" }}
      >
        <h2 className="border border-success rounded text-center bg-dark bg-opacity-25 text-light py-2 fs-4">
          🔍︎ Search History
        </h2>
        <p>History list is empty</p>
      </div>
    );
  }

  return (
    <div
      className="w-100 rounded p-4 mt-2 text-light"
      style={{ backgroundColor: "rgba(230, 231, 231, 0.33)" }}
    >
      <h2 className="border border-success rounded text-center bg-dark bg-opacity-25 text-light py-2 fs-4">
        🔍︎ Search History
      </h2>

      <ul className="list-group">
        {mhistory.map((city, i) => (
          <li
            key={i}
            className="list-group-item list-group-item-action"
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(fetchWeather(city));
              dispatch(addHistory(city));
            }}
          >
            {city}
          </li>
        ))}
      </ul>

      <div className="text-center mt-3">
        <button
          className="btn btn-danger"
          onClick={() => dispatch(clearHistory())}
        >
          Clear History
        </button>
      </div>
    </div>
  );
}

export default SearchHistory;
