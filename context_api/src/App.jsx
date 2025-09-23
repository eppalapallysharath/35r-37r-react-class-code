// import React, { createContext, useState } from "react";
// import MainCard from "./components/MainCard";
// import MainProfile from "./components/MainProfile";
// import CounterApp from "./components/CounterComponents/CounterApp";

// export const contextApi = createContext();

// const App = () => {
//   const user = { name: "sharath", age: 25 };
//   const [count, setCount] = useState(0);

//   const data = { user, count, setCount };
//   return (
//     <contextApi.Provider value={data}>
//       <MainCard />
//       <MainProfile />
//       <p>Count value {count}</p>
//       <CounterApp />

//     </contextApi.Provider>
//   );
// };

// export default App;

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Profile from "./components/profilecomponents/Profile";
import { createContext } from "react";

export const contextApi = createContext();

export const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <contextApi.Provider value={{ loggedIn, setLoggedIn }}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </contextApi.Provider>
  );
};
