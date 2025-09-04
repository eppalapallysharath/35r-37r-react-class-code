import axios from "axios";
import React, { useEffect, useState } from "react";

const DemouseEffect2 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // const time = setInterval(() => {
    //   console.log("timer ⌚");

    //   setCount((prev) => prev + 1);
    // }, 1000);
    // return () => {
    //   console.log("hi");
    //   clearInterval(time);
    //   setCount(0);
    // };
    console.log("hi");
  }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => console.log(response));
  }, [count]);

  const inc = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 2);
    setCount((prev) => prev + 3);
  };
  return (
    <div>
      DemouseEffect2
      <h1>count {count}</h1>
      <button onClick={inc}>increment</button>
    </div>
  );
};

export default DemouseEffect2;
