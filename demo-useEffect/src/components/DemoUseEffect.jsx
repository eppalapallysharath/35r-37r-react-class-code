import React, { useState, useEffect } from "react";
import axios from "axios";

const DemoUseEffect = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [click, setClick] = useState("posts");
  useEffect(() => {
    console.log("this is useEffect code");
    // axios
    //   .get(`https://jsonplaceholder.typicode.com/${click}`)
    //   .then((response) => setData(response.data))
    //   .catch((error) => console.log(error));

    document.getElementById("data1").innerText = click;
  }, [click]);
  const inc = () => {
    setCount(count + 1);
  };

  const handleClick = (value) => {
    setClick(value);
  };
  return (
    <div>
      <h1>DemoUseEffect</h1>
      <h1>count {count}</h1>
      <p id="data1"></p>
      <button onClick={inc}>count increment</button>
      <button onClick={() => handleClick("posts")}> posts </button>
      <button onClick={() => handleClick("comments")}> comments </button>
      <button onClick={() => handleClick("albums")}> albums </button>
      <li>{data.map((item) => JSON.stringify(item))}</li>
      {/* {data.map((value, index) => (
        <ul key={index}>
          <li> {value.userId}</li>
          <li>{value.title}</li>
          <li>{value.body}</li>{" "}
        </ul>
      ))} */}
    </div>
  );
};

export default DemoUseEffect;
