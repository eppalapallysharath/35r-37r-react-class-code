import React from "react";

const Celsius = ({ setFahrenheit, setCelsius, celsius }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    setCelsius(() => value);
    const cTof = value * (9 / 5);
    console.log(cTof);
    const res = cTof + 32;
    setFahrenheit(res.toFixed(2));
  };
  return (
    <div>
      Celsius{" "}
      <input
        type="number"
        value={celsius}
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
};

export default Celsius;
