import { useState } from "react";
import axios from "axios";

import Day from "./Day";
import key from "../../../static/secrets";

const Weather = () => {
  const [zip, setZip] = useState("");
  const [forecast, setForecast] = useState([]);

  const API_KEY = key;

  const handleZipcode = (e) => {
    setZip(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${API_KEY}`;

    axios.get(URL).then((res) => setForecast([res.data]));
  };

  return (
    <div className="weather-container">
      <div className="zipcode-wrapper">
        <form onSubmit={handleSubmit}>
          <label>Enter your zip code: </label>
          <input type="text" value={zip} onChange={handleZipcode} />

          <button type="submit">Change Zip</button>
        </form>
      </div>

      {forecast.length > 0 ? (
        <div className="weather-wrapper">
          {forecast.map((data) => (
            <Day
              key={data.dt}
              foreCastTime={data.dt}
              foreCastTemp={data.main.temp}
              foreCastDescription={data.weather[0].description}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
