import React from "react";

const Increment = (prop) => {
  const { countInc, greet } = prop;
  const handleIncrement = () => {
    countInc((previous) => previous + 1);
    greet("sharath");
  };
  return (
    <div>
      <button onClick={handleIncrement}> count increment</button>
    </div>
  );
};

export default Increment;
