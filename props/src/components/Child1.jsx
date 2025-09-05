import React from "react";

const Child1 = (props) => {
  return (
    <div>
      Child1
      <p>name is {props.fullname}</p>
      <p>age is {props.myage}</p>
      {props.class.map((value) => (
        <li>{value}</li>
      ))}
      {/* <p>{props.class}</p> */}
      <p>{props.myobject.batch}</p>
      <p>{props.greet()}</p>
    </div>
  );
};

export default Child1;
