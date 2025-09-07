import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavourite } from "../features/favouriteSlice";
import wind from "../assets/wind2.webp";
import humidity from "../assets/humidity.png";

function Weather() {
  const dispatch = useDispatch();
  const { weatherData, loading, error, unit } = useSelector(
    (state) => state.weather
  );

  if (loading) {
    return (
      <div className="text-light p-3 text-center">
        <div className="spinner"></div>
        <p>Data is Loading...</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-light">{error}</p>;
  }

  // agr abi data ni aya tu ye
  if (!weatherData) {
    return (
      <p className="text-center text-light">Please search for a city...</p>
    );
  }
  // tem convert
  const tempC = weatherData.main.temp;
  const tempF = (tempC * 9) / 5 + 32;
  return (
    <>
      <div
        className="container rounded p-4 mt-4"
        style={{ backgroundColor: "rgba(230, 231, 231, 0.33)" }}
      >
        <div className="container text-light text-center mt-3 m">
          <h2 className="fs-1">{weatherData?.name}</h2>
          <h3 className="fs-3">
            {unit === "C" ? `${Math.round(tempC)}°C` : `${Math.round(tempF)}°F`}
          </h3>
          <p>Weather: {weatherData?.weather?.[0]?.description}</p>

          <div className="row-cont d-flex justify-content-between align-item-center mt-6 text-white">
            <div className="details d-flex justify-content-center align-items-center rounded ">
              <img
                src={humidity}
                alt="humidity"
                className="mx-3 img1"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <div className="mt-3">
                <p className="mb-0">{weatherData?.main?.humidity}%</p>
                <p className="text-sm">Humidity</p>
              </div>
            </div>

            <div className="details d-flex justify-content-end align-items-center rounded">
              <img
                src={wind}
                alt="wind"
                className="img2 mx-3"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <div className="mt-3">
                <p className="text-xl mb-1">{weatherData?.wind?.speed} m/s</p>
                <p className="text-sm">Wind Speed</p>
              </div>
            </div>
          </div>

          <div className="box mt-5">
            <button
              className="btn btn-success px-5 py-2 rounded text-light fw-bold"
              onClick={() => {
                dispatch(addFavourite(weatherData));
              }}
            >
              Add to Favourite
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
