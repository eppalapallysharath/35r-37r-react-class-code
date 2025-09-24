import React, { memo } from "react";

const Child1 = ({ data }) => {
  console.log("child component rerendered");
  return (
    <>
      <h1>this child component</h1>
      <p>great {data}</p>
    </>
  );
};

// const Child = React.memo(Child1);
const Child = memo(Child1);

export default Child;
