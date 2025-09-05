import React from "react";

const Decrement = ({ countDec }) => {
  const handleDecrement = () => {
    countDec((previous) => previous - 1);
  };
  return (
    <div>
      <button onClick={handleDecrement}>Count Decrement</button>
    </div>
  );
};

export default Decrement;
