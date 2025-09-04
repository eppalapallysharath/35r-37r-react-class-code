import React, { useState } from "react";
import DemoUseEffect from "./components/DemoUseEffect";
import DemouseEffect2 from "./components/DemouseEffect2";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      App
      {/* <DemoUseEffect /> */}
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"} </button>
      {show === true ? <DemouseEffect2 /> : null}
    </div>
  );
};

export default App;
