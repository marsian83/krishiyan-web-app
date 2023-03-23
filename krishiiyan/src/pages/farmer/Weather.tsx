import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState<any>({});
  const [ctime, setctime] = useState("");

  const api = {
    key: "72b05fdfa25a691624fb032c0b0aa2ec",
    base: "https://api.openweathermap.org/data/2.5/weather?",
  };

  useEffect(() => {
    function updateTime() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes() as string | number;
      var seconds = now.getSeconds() as string | number;

      var amOrPm = hours < 12 ? "AM" : "PM";

      hours = hours % 12 || 12;

      minutes = minutes.toString().padStart(2, "0");
      seconds = seconds.toString().padStart(2, "0");

      var timeString = hours + ":" + minutes + ":" + seconds + " " + amOrPm;
      setctime(timeString);
    }

    setInterval(updateTime, 1000);
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position: any) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      console.log(lat, long);
      fetch(`${api.base}lat=${lat}&lon=${long}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setWeather(result);
        });
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div className="w-30 mr-6 text-start	">
        <p className="font-thin text-sm">Temp: {weather?.main?.temp}°C</p>
        <p className="font-thin text-sm">Humidity: {weather?.main?.humidity}</p>
        <p className="font-thin text-sm">
          Current Weather:{" "}
          {weather?.weather?.length && weather?.weather[0]?.main}
        </p>
        {/* <p>Location: {weather?.name}</p> */}
      </div>
      <div className="w-30 mr-2 mt-5 text-start">
        <p className="font-thin text-sm">Date:{new Date().toDateString()}</p>
        <p className="font-thin text-sm">Time: {ctime}</p>
      </div>
    </div>
  );
};

export default Weather;