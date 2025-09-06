import React from "react";
import "./ProductCard.css";

const ProductCard = ({ id, title, price, instock, image }) => {
  return (
    <div key={id} className="container">
      <img src={image} alt={title} width="250px" height="200px" />
      <h3> {title} </h3>
      <p>price ₹{price}</p>
      <p
        className={`stock-label ${
          instock ? "stock-label-bg-available" : "stock-label-bg-outStock"
        }`}
      >
        {instock ? "Available" : "Out of Stock"}
      </p>
    </div>
  );
};

export default ProductCard;
