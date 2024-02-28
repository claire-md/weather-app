import { useState, useEffect } from "react";
import Clock from "./Clock";
import CurrentWeather from "./CurrentWeather";
import Details from "./Details";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function Weather({ city, isMetric }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const units = isMetric ? "metric" : "imperial";

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=" +
            units +
            "&appid=" +
            API_KEY
        );
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        setData(resData);
        setIsLoaded(true);
      } catch (err) {
        setError(err);
        setIsLoaded(false);
      }
    }

    fetchWeather();
  }, [city]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container">
        <div className="row">
          <div id="clock" className="col align-self-center">
            <Clock city={data.name} />
          </div>
          <div id="current-weather" className="col">
            <CurrentWeather data={data} isMetric={isMetric} />
          </div>
        </div>
        <div className="row">
          <div id="details" className="col">
            <Details data={data} isMetric={isMetric} />
          </div>
        </div>
      </div>
    );
  }
}
