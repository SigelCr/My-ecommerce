import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { products } from "../../ProductsMocks";

const ProductListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      resolve(products);
    });
    task
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ProductList items={items} />
    </div>
  );
};

export default ProductListContainer;
