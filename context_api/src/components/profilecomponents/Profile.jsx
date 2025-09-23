import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { contextApi } from "../../App";
import Childcomp from "../Childcomp";

const Profile = () => {
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useContext(contextApi);
  return (
    <div>
      Profile page
      <p>{loggedIn ? "hi hello user how are you" : "access denied"}</p>
      <button
        onClick={() => {
          setLoggedIn(!loggedIn);
          navigate("/");
        }}
      >
        Logout
      </button>
      <Childcomp />
    </div>
  );
};

export default Profile;
