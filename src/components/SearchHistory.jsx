import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearHistory } from "../features/HistorySlice";

function SearchHistory() {
  const { list } = useSelector((state) => state.history);
  const dispatch = useDispatch();

  if (list.length === 0) {
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

  const handleClear = () => {
    dispatch(clearHistory());
    localStorage.removeItem("history");
  };

  return (
    <div
      className="w-100 rounded p-4 mt-2 text-light"
      style={{ backgroundColor: "rgba(230, 231, 231, 0.33)" }}
    >
      <h2 className="border border-success rounded text-center bg-dark bg-opacity-25 text-light py-2 fs-4">
        🔍︎ Search History
      </h2>

      <ul className="list-group mt-3">
        {list.map((city, index) => (
          <li
            key={index}
            className="list-group-item bg-transparent text-light border-light"
          >
            {typeof city === "string" ? city : city.name}
          </li>
        ))}
      </ul>

      <div className="text-center mt-3">
        <button className="btn btn-danger" onClick={handleClear}>
          Clear History
        </button>
      </div>
    </div>
  );
}

export default SearchHistory;
