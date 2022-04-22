import moment from "moment";

const Day = ({ foreCastTemp, foreCastTime, foreCastDescription }) => {
  let temp = Math.round(((foreCastTemp - 273.15) * 9) / 5 + 32);
  let day = moment.unix(foreCastTime).format("dddd");
  let time = moment.unix(foreCastTime).format("LT");
  let description =
    foreCastDescription[0].toUpperCase() + foreCastDescription.slice(1);

  return (
    <div className="day-container">
      <div className="weather-data day">{day}</div>
      <div className="weather-data time">{time}</div>
      <div className="weather-data description">{description}</div>
      <div className="weather-data temp">{`${temp}\u00b0`}</div>
    </div>
  );
};

export default Day;
