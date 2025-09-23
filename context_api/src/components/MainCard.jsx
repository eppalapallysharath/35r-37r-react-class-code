import React from "react";
import { contextApi } from "../App";

const MainCard = () => {
  return (
    <div>
      MainCard
      <contextApi.Consumer>
        {(value) => (
          <>
            {" "}
            <p>hi</p> <p> {value.name}</p>{" "}
          </>
        )}
      </contextApi.Consumer>
      <contextApi.Consumer>
        {(value) => <p>age {value.age}</p>}
      </contextApi.Consumer>
    </div>
  );
};

export default MainCard;
