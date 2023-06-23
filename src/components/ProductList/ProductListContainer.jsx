import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ProductListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    const itemCollection = collection(db, "products");

    if (categoryName) {
      const itemsCollectionFiltered = query(
        itemCollection,
        where("category", "==", categoryName)
      );
      consulta = itemsCollectionFiltered;
    } else {
      consulta = itemCollection;
    }
    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setItems(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);

  const loading = (
    <div style={{ display: "flex", justifyContent: "center", margin: "150px" }}>
      <PulseLoader color="black" size={20} speedMultiplier={0.5} />
    </div>
  );

  return (
    <div>
      {items.length === 0 && loading}
      <h1>aca van TODOS los productos, estoy en ProductListContainer</h1>
      <ProductList items={items} />
    </div>
  );
};

export default ProductListContainer;
