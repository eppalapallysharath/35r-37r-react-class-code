import React from "react";

const Fahrenheit = ({ fahrenheit, setFahrenheit, setCelsius }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    setFahrenheit(value);
    const cal = value - 32;
    const fToc = cal * (5 / 9);

    setCelsius(fToc.toFixed(1));
    // setCelsius()
  };
  return (
    <div>
      Fahrenheit{" "}
      <input
        type="number"
        onChange={(event) => handleChange(event)}
        value={fahrenheit}
      />
    </div>
  );
};

export default Fahrenheit;
