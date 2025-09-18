import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Product from "./components/product";
import UserHomePage from "./usersApp/UserHomePage";
import EnrolledCourse from "./usersApp/EnrolledCourse";
import UserProfile from "./usersApp/UserProfile";
import SalesHomePage from "./salesApp/SalesHomePage";
import CreateSales from "./salesApp/CreateSales";
import ViewSales from "./salesApp/ViewSales";
import Admin from "./salesApp/admin";
import CreateAdmin from "./salesApp/createAdmin";
const App = () => {
  return (
    <Routes>
      {/* static routings */}
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* dynamic routing */}
      <Route path="/product/:productID" element={<Product />} />

      {/* nested routing */}
      <Route path="/UserDashboard" element={<UserHomePage />}>
        <Route path="enrolledcourse" element={<EnrolledCourse />} />
        <Route path="userprofile" element={<UserProfile />} />
      </Route>

      <Route path="/salesDashboard" element={<SalesHomePage />}>
        <Route path="createsales" element={<CreateSales />} />
        <Route path="viewsales" element={<ViewSales />} />
        <Route path="admin" element={<Admin/>}>
          <Route path="createadmin" element={<CreateAdmin/>} />
        </Route>
      </Route>
      <Route path="*" element={<h1>Page Not Found 404</h1>} />
    </Routes>
  );
};

export default App;
