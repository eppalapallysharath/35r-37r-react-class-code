import React, { Fragment } from "react";
import Products from "./Products";

const App = () => {
  return (
    <Fragment>
      <div className="font-serif font-bold flex justify-center w-100 h-30 items-center gap-30">
        <p className="text-yellow-700"> App</p>
        <h2 className="bg-red-600">hi</h2>
      </div>
      {/* <Products /> */}
      <button className="w-20 h-10 border-1 rounded text-blue-500 bg-red-200 hover:bg-yellow-500 hover:text-black">click me</button>
    </Fragment>
  );
};

export default App;
