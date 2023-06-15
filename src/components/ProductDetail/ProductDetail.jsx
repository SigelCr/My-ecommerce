/* eslint-disable react/prop-types */

import CounterContainer from "../Counter/CounterContainer";

const ProductDetail = ({ product, onAdd }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <h2>{product.price}</h2>
      <p>{product.description}</p>
      <CounterContainer onAdd={onAdd} stock={product.stock} />
    </div>
  );
};

export default ProductDetail;
