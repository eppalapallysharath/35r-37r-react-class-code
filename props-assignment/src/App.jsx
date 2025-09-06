import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import axios from "axios";
import TempConvert from "./components/TempConvert";
const App = () => {
  // const [data, setData] = useState([]);
  // const fetchData = () => {
  //   axios
  //     .get("http://localhost:3000/products")
  //     .then((res) => setData(res.data))
  //     .catch((error) => console.log(error));
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      App
      {/* <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        {data.map((item) => (
          <ProductCard
            title={item.title}
            id={item.id}
            image={item.image}
            price={item.price}
            instock={item.instock}
          />
        ))}
      </div> */}
      <h1>Temperature Conversion from F to C or C to F</h1>
      <TempConvert />
    </div>
  );
};

export default App;
