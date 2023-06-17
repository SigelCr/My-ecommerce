import { useContext, useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

export const ProductDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { addToCart, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const refDoc = doc(itemCollection, id);
    getDoc(refDoc)
      .then((res) =>
        setProduct({
          ...res.data(),
          id: res.id,
        })
      )
      .catch((error) => console.log(error));
  }, [id]);

  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    addToCart(data);
  };

  let quantityTotal = getQuantityById(product.id);
  console.log(quantityTotal);

  return (
    <div>
      <ProductDetail
        onAdd={onAdd}
        product={product}
        quantityTotal={quantityTotal}
      />
    </div>
  );
};
