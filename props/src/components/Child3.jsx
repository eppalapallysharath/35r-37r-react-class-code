import React from "react";

const Child3 = (prop) => {
  console.log(prop);
  return (
    <div>
      Child3
      {prop.children}
      <p>{prop.data}</p>
    </div>
  );
};

export default Child3;
