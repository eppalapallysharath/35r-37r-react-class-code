import React, { useEffect, useState, Fragment } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-5 ">
      Products
      {data.map((item) => (
        <Fragment key={item.id}>
          <ProductCard item={item} />
        </Fragment>
      ))}
    </div>
  );
};

export default Products;
