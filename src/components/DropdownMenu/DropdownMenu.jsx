import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "./DropdownMenu.module.css";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Link onClick={toggleDropdown}>Productos</Link>
      <div
        className={`${styled.containerLinksProducts} ${
          isOpen ? styled.open : ""
        }`}
      >
        <Link to="/products">Todos los productos</Link>
        <Link to="/clothes">Ropa</Link>
        <Link to="/footwear">Calzado</Link>
        <Link to="/bijouterie">Bijouteries</Link>
      </div>
    </div>
  );
};

export default DropdownMenu;
