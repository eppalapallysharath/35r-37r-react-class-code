import React from "react";

const Child2 = ({ batch, whish, data, setData }) => {
  return (
    <div>
      Child2
      <h1>{batch.batch}</h1>
      <h1>{whish()}</h1>
      <li>{data}</li>
    </div>
  );
};

export default Child2;
