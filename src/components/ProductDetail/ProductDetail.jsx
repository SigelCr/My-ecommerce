import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <h2>{product.price}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
