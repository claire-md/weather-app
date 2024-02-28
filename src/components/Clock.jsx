import { convertUnixToTime } from "../helper";

export default function Clock({ city }) {
  const currDate = convertUnixToTime(Date.now() / 1000);

  return (
    <>
      <div id="location">{city}</div>
      <div id="time">{currDate.time}</div>
      <div id="date">
        {currDate.day_name} {currDate.day}, {currDate.month}
      </div>
    </>
  );
}
