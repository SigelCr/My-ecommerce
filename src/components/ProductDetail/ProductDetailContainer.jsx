import { useContext, useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { products } from "../../ProductsMocks";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const ProductDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { addToCart } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    let encontrado = products.find((prod) => prod.id === Number(id));
    setProduct(encontrado);
  }, [id]);

  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    addToCart(data);
  };

  return (
    <div>
      <ProductDetail onAdd={onAdd} product={product} />
    </div>
  );
};
