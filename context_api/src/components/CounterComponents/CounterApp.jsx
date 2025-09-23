import React, { useContext } from "react";
import { contextApi } from "../../App";

const CounterApp = () => {
  const { setCount } = useContext(contextApi);
  return (
    <div>
      Cards
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        increment
      </button>
    </div>
  );
};

export default CounterApp;
