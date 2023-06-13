import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "./DropdownMenu.module.css";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Link onClick={toggleDropDown}>Productos</Link>

      <div
        className={`${styled.containerLinksProducts} ${
          isOpen ? styled.open : ""
        }`}
      >
        <Link to="/products">Todos los productos</Link>
        <Link to="/clothes">Indumentaria</Link>
        <Link to="/footwear">Calzado</Link>
        <Link to="/bijouteries">Bijouterie</Link>
      </div>
    </div>
  );
};

export default DropdownMenu;
