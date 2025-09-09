// import React, { useState } from "react";
// import Child1 from "./components/Child1";
// import Child2 from "./components/Child2";
// import Child3 from "./components/Child3";
// import Increment from "./components/counter features/Increment";
// import Decrement from "./components/counter features/Decrement";

// const App = () => {
//   const [wish, setWish] = useState("");
//   // const [state, setState] = useState("hi");
//   // const name = "sharath";
//   // const age = 26;
//   // const array = [1, 2, 3];
//   // const obj = { batch: "35r 37r" };
//   const [count, setCount] = useState(0);

//   // const greetings = (data) => {
//   //   setWish("hi good morning" + data);
//   // };

//   return (
//     <div>
//       <h1>This parent component</h1>
//       <h1>Count value {count}</h1>
//       <p>{wish}</p>

//       <Increment
//         countInc={setCount}
//         // greet={greetings}
//       />
//       <Decrement countDec={setCount} />
//       {/* <Child1
//         fullname={name}
//         myage={age}
//         class={array}
//         myobject={obj}
//         greet={greetings}
//       />
//       <Child2 batch={obj} whish={greetings} data={state} setData={setState} />

//       <Child3 data={state}>
//         <div>
//           <h1>data from app to child 3</h1>
//           <ol>
//             <li>tom</li>
//             <li>jerry</li>
//             <li>ben</li>
//           </ol>
//         </div>
//       </Child3> */}
//     </div>
//   );
// };

// export default App;



import React from 'react'
import ProductsList from './components2/ProductsList'

const App = () => {
  return (
    <div>App
      <div>
        <ProductsList/>
      </div>
    </div>
  )
}

export default App