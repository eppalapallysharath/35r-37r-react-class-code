import React, { useState } from "react";
import Celsius from "./Celsius";
import Fahrenheit from "./Fahrenheit";

const TempConvert = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);
  return (
    <div>
      TempConvert
      <Celsius
        celsius={celsius}
        setCelsius={setCelsius}
        setFahrenheit={setFahrenheit}
      />
      <Fahrenheit
        fahrenheit={fahrenheit}
        setFahrenheit={setFahrenheit}
        setCelsius={setCelsius}
      />
      <p>C {celsius}</p>
      <p>F {fahrenheit}</p>
    </div>
  );
};

export default TempConvert;
