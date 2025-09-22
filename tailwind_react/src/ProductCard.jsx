import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="w-100 h-10 border-1 border-red-500 rounded">
      <p>{item.title}</p>
      <p>{item.completed}</p>
      <button>click me</button>
    </div>
  );
};

export default ProductCard;
