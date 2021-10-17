import { createContext, useState, useEffect } from "react";
//axios
import axios from "axios";
//cities
import cities from "../constant/CitiesOfTurkey.json";

const WeatherDataContext = createContext(null);

const API_BASE = "https://api.openweathermap.org/data/2.5";
const API_KEY = process.env.REACT_APP_APIKEY;

export const WeatherProvider = ({ children }) => {
  const [forecasts, setForecasts] = useState([]);
  const [value, setValue] = useState("Manisa");
  const [location, setLocation] = useState({
    lat: "38.6191",
    lon: "27.4289",
  }); // initial value; Manisa
  const units = "metric";

  // if there is changed value, set again lon & lat
  useEffect(() => {
    cities.forEach((city) => {
      city.name === value &&
        setLocation({ lat: city.latitude, lon: city.longitude });
    });
  }, [value]);

  //if there is changed lon & lat, fetch again data
  useEffect(() => {
    axios
      .get(
        `${API_BASE}/onecall?lat=${location.lat}&lon=${location.lon}&exclude=minutely&units=${units}&lang=tr&appid=${API_KEY}`
      )
      .then((res) => setForecasts(res))
      .catch((err) => console.err(err));
  }, [location]);

  const values = {
    forecasts,
    value,
    setValue,
  };

  if (!forecasts) return null;

  return (
    <WeatherDataContext.Provider value={values}>
      {children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherDataContext;
