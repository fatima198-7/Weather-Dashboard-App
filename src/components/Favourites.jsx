import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavourite } from "../features/favouriteSlice";

function Favourites() {
  const { list } = useSelector((state) => state.favourite); // favourite slice
  const { unit } = useSelector((state) => state.weather); // weather slice
  const dispatch = useDispatch();

  if (list.length === 0) {
    return (
      <>
        <div
          className="w-100 rounded p-4 mt-2 text-light"
          style={{ backgroundColor: "rgba(230, 231, 231, 0.33)" }}
        >
          <h2 className="border border-success rounded text-center bg-dark bg-opacity-25 text-light py-2 fs-4">
            ★ Favourite List
          </h2>
          <p>Favourite list is Empty---</p>
        </div>
      </>
    );
  }

  return (
    <div
      className="w-100 rounded p-4 mt-2 text-light"
      style={{ backgroundColor: "rgba(230, 231, 231, 0.33)" }}
    >
      <h2 className="border border-success rounded text-center bg-dark bg-opacity-25 text-light py-2 fs-4">
        ★ Favourite List
      </h2>

      {list.map((city) => {
        const tempC = city.main.temp;
        const tempF = (tempC * 9) / 5 + 32;

        return (
          <div
            key={city.id}
            className="align-self-start text-light text-center mt-3"
          >
            <h2 className="fs-3">{city.name}</h2>
            <h3 className="fs-5">
              Temp:{" "}
              {unit === "C"
                ? `${Math.round(tempC)} °C`
                : `${Math.round(tempF)} °F`}
            </h3>
            <p>Weather: {city.weather?.[0]?.description}</p>
            <p className="mb-0">{city.main?.humidity}% Humidity</p>
            <p className="text-xl mb-1">Wind-speed {city.wind?.speed} km/h</p>

            <div className="box mt-3 d-flex justify-content-center">
              <button
                className="btn btn-danger px-3 py-2 rounded text-light fw-bold"
                onClick={() => {
                  dispatch(removeFavourite(city.id));
                }}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Favourites;
