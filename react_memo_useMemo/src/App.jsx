// react memo

// import React, { useState } from "react";
// import Child from "./Child1";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [data, setData] = useState("hi");
//   const handleInc = () => {
//     setCount((prev) => prev + 1);
//   };
//   console.log("parent component rerendered");
//   return (
//     <>
//       <h1>Parent component</h1>
//       <p>count {count}</p>
//       <button onClick={handleInc}> Increment </button>

//       <Child data={data} />
//       <button onClick={() => setData("how are you")}>change great</button>
//     </>
//   );
// };

// export default App;

// use memo

// import React, { useMemo, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [number, setNumber] = useState(1);

//   const squareNum = useMemo(() => {
//     console.log("calculate square of give number");
//     return number * number;
//   }, [number]);

//   return (
//     <div>
//       <p> count {count}</p>
//       <p> number {number}</p>
//       <p> square number {squareNum}</p>
//       <button onClick={() => setCount(count + 1)}>count inc</button>
//       <button
//         onClick={() => {
//           setNumber(number + 1);
//         }}
//       >
//         number inc
//       </button>
//       {/*  large number array of objects */}
//     </div>
//   );
// };

// export default App;

// useCallback
import React, { useCallback, useState } from "react";
// import Items from "./components/Items";
import MemoItems from "./components/Items";

const App = () => {
  const [data, setData] = useState("");
  const [theme, setTheme] = useState(true);

  const darkThemeStyles = {
    color: theme ? "white" : "black",
    backgroundColor: theme ? "black" : "white",
  };
  const handleTheme = () => {
    setTheme(!theme);
  };

  const splitmemo = useCallback(
    () => () => {
      return data.split("");
    },
    [data]
  );

  // const splitInput = () => {
  //   return data.split("");
  // };

  return (
    <div style={darkThemeStyles}>
      App
      <button onClick={handleTheme}> {theme ? "light" : "dark"} </button>
      <input
        type="text"
        onChange={(e) => setData(e.target.value)}
        name="name"
      />
      {/* <Items split={splitmemo} /> */}
      <MemoItems split={splitmemo} />
    </div>
  );
};

export default App;
