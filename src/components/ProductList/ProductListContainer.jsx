import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { products } from "../../ProductsMocks";
import { useParams } from "react-router-dom";

const ProductListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    const productsFiltered = products.filter(
      (prod) => prod.category === categoryName
    );

    const task = new Promise((resolve) => {
      resolve(categoryName ? productsFiltered : products);
    });
    task
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);

  return (
    <div>
      <ProductList items={items} />
    </div>
  );
};

export default ProductListContainer;
