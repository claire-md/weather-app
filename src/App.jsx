import { useState, useRef } from "react";
import { validateCity } from "./helper.js";
import Weather from "./components/Weather.jsx";

export default function App() {
  const [weather, setWeather] = useState();
  const city = useRef();
  const units = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const enteredCity = city.current.value;
    const isChecked = units.current.checked;

    if (validateCity(enteredCity)) {
      setWeather(<Weather city={enteredCity} isMetric={isChecked} />);
    } else {
      setWeather(<div>Not a valid city</div>);
    }
  }

  return (
    <>
      <header>
        <h1>Weather App</h1>
      </header>
      <main>
        <form className="row" onSubmit={handleSubmit}>
          <div className="toggle-button-cover col-1">
            <div className="button-cover">
              <div className="button r" id="button-1">
                <input type="checkbox" className="checkbox" ref={units} />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </div>
          </div>
          <div className="col-10">
            <input
              className="form-control"
              name="city"
              placeholder="Search for a city..."
              ref={city}
            />
          </div>
          <button className="col-lg-1">Search</button>
        </form>
        {weather}
      </main>
    </>
  );
}
