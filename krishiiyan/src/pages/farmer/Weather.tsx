import moment from "moment";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState<any>({});
  const [ctime, setctime] = useState("");

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
      console.log("the loaction is ", lat, long);

      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}/weather?lat=${lat}&lon=${long}`
        )
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    });
  }, []);

  return (
    <div className="mobile:flex-col flex">
      <div className="w-30 mr-6 text-start">
        <p className="font-thin text-sm">
          Temp: {parseFloat(weather?.main?.temp).toFixed(0)}°C
        </p>
        <p className="font-thin text-sm">
          Humidity: {weather?.main?.humidity}%
        </p>
        <p className="font-thin text-sm">
          Current Weather:{" "}
          {weather?.weather?.length && weather?.weather[0]?.main}
        </p>
      </div>
      <div className="w-30 mr-2 mt-5 text-start">
        <p className="font-thin text-sm">
          Date: {moment().format("DD-MM-YYYY")}
        </p>
        <p className="font-thin text-sm">Time: {ctime}</p>
      </div>
    </div>
  );
};

export default Weather;
