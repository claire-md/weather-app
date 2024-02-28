const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DESCRIPTIONS = {
  "clear sky": "fa-regular fa-sun",
  "few clouds": "fa-solid fa-cloud-sun",
  "scattered clouds": "fa-solid fa-cloud",
  "broken clouds": "fa-solid fa-cloud",
  "shower rain": "fa-solid fa-cloud-showers-heavy",
  rain: "fa-solid fa-cloud-rain",
  thunderstorm: "fa-solid fa-cloud-bolt",
  snow: "fa-regular fa-snowflake",
  mist: "fa-solid fa-smog",
};

export function validateCity(city) {
  const re = /^[a-zA-Z\s]*$/;
  return re.test(city) ? true : false;
}

export function convertUnixToTime(unix) {
  const date = new Date(unix * 1000);

  const formattedTime = date.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const day_name = date.getDay();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return {
    time: formattedTime,
    day: day,
    day_name: DAYS_OF_WEEK[day_name],
    month: MONTHS[month],
    year: year,
  };
}

export function getMainIcon(desc) {
  return DESCRIPTIONS[desc];
}
