import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contextApi } from "../App";
import Childcomp from "./Childcomp";
const Homepage = () => {
  const { loggedIn, setLoggedIn } = useContext(contextApi);

  const navigate = useNavigate();

  const handleNavigate = () => {
    setLoggedIn(!loggedIn);
    navigate("/profile");
  };

  return (
    <div>
      Homepage
      {/* <Link to="/profile">Profile page</Link> */}
      <p>{loggedIn === false ? "user logout successfully" : " hi user"}</p>
      <button onClick={handleNavigate}>Profile </button>
      <Childcomp />
    </div>
  );
};

export default Homepage;
