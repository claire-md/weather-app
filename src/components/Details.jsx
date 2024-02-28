import DetailsBox from "./DetailsBox.jsx";
import { convertUnixToTime } from "../helper.js";
import sunsetImg from "../assets/sunset.png";
import sunriseImg from "../assets/sunrise.png";

export default function Details({ data, isMetric }) {
  const sunrise = convertUnixToTime(data.sys.sunrise);
  const sunset = convertUnixToTime(data.sys.sunset);

  const windSpeedUnit = isMetric ? "m/s" : "mph";

  return (
    <div className="container">
      <div className="row text-center">
        <DetailsBox
          icon="fa-solid fa-droplet"
          isIcon={true}
          info={data.main.humidity + "%"}
          label="Humidity"
        />
        <DetailsBox
          icon="fa-solid fa-wind"
          isIcon={true}
          info={Math.round(data.wind.speed) + " " + windSpeedUnit}
          label="Wind Speed"
        />
        <DetailsBox
          icon={sunriseImg}
          isIcon={false}
          info={sunrise.time}
          label="Sunrise"
        />
        <DetailsBox
          icon={sunsetImg}
          isIcon={false}
          info={sunset.time}
          label="Sunset"
        />
      </div>
    </div>
  );
}
