import React from "react";
import styled from "./ProductList.module.css";
import { Link } from "react-router-dom";

const ProductList = ({ items }) => {
  return (
    <div>
      <h1>aca van TODOS los productos, estoy en ProductList</h1>
      <div className={styled.containerCard}>
        {items.map((item) => {
          return (
            <section key={item.id}>
              <div className={styled.card}>
                <h2 className={styled.category}>{item.category}</h2>
                <img className={styled.img} src={item.img} />
                <h1 className={styled.title}>{item.title}</h1>
                <p className={styled.price}>${item.price}</p>
                <Link to={`/productsDetail/${item.id}`}>
                  <button className={styled.btnDetail}>Ver detalle</button>
                </Link>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
