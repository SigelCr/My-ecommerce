/* eslint-disable react/prop-types */

import CounterContainer from "../Counter/CounterContainer";

const ProductDetail = ({ product, onAdd, quantityTotal }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h2>${product.price}</h2>
      {product.stock > 0 ? (
        <CounterContainer
          onAdd={onAdd}
          stock={product.stock}
          initial={quantityTotal}
        />
      ) : (
        <h1
          style={{
            fontSize: "15px",
            fontFamily: "arial",
            margin: "10px",
            padding: "10px",
          }}
        >
          No hay stock
        </h1>
      )}
    </div>
  );
};

export default ProductDetail;
