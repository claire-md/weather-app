import { getMainIcon } from "../helper";

export default function CurrentWeather({ data, isMetric }) {
  const icon = getMainIcon(data.weather[0].description);
  const degUnit = isMetric ? "C" : "F";

  return (
    <div className="container">
      <div className="row">
        <div id="temp-col" className="col text-center align-self-center">
          {/* Temperature */}
          <span id="temp">
            {Math.round(data.main.temp)}&deg;{degUnit}
          </span>
          <br />
          {/* Feels like */}
          <span id="feels-like">
            Feels like: {Math.round(data.main.feels_like)}&deg;{degUnit}
          </span>
        </div>
        <div id="icon-col" className="col text-center">
          {/* Icon */}
          <span id="icon">
            <i className={icon}></i>
          </span>
          <br />
          {/* Weather description */}
          <span id="desc">{data.weather[0].main}</span>
        </div>
      </div>
    </div>
  );
}
