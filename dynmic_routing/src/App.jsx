import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Product from "./components/product";
const App = () => {
  
  return (
    <Routes>
      {/* static routings */}
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* dynamic routing */}
      <Route path="/product/:productID" element={<Product />} />
    </Routes>
  );
};

export default App;
