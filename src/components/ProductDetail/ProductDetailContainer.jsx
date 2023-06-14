import React, { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { products } from "../../ProductsMocks";
import { useParams } from "react-router-dom";

export const ProductDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let encontrado = products.find((prod) => prod.id === Number(id));
    setProduct(encontrado);
  }, [id]);

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
};
