import React, { useContext } from "react";
import { contextApi } from "../App";

const Childcomp = () => {
  const { loggedIn } = useContext(contextApi);
  return <div>Childcomp {loggedIn ? "hi user" : "bye user"}</div>;
};

export default Childcomp;
