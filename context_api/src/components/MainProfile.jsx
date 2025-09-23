import React, { useContext } from "react";
import { contextApi } from "../App";

const MainProfile = () => {
  const userobj = useContext(contextApi);
  return (
    <div>
      MainProfile
      <p>name {userobj.name}</p>
      <p>age {userobj.age}</p>
    </div>
  );
};

export default MainProfile;
