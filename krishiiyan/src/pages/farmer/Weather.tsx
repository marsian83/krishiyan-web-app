import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState<any>({});
  const [search, setSearch] = useState("pune");

  const api = {
    key: "72b05fdfa25a691624fb032c0b0aa2ec",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };
  useEffect(() => {
    const init = () => {
      searchPressed();
    };
    init();
  }, []);
  console.log(weather);

  // let dateFormate = weather.dt;
  // let date = moment(dateFormate).format("DD/MM/YYYY");
  // console.log(date, "hi i am date");
  return (
    <span className="w-28 mr-60">
      <p>Location: {weather?.name}</p>
      <p>Temp: {weather?.main?.temp}°C</p>
      <p>humidity: {weather?.main?.humidity}</p>
      {/* <p>Weather: {weather?.weather?.main}</p> */}
      {/* <p>{weather?.dt}</p> */}
    </span>
  );
};

export default Weather;
