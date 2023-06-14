import React, { useEffect, useRef, useState } from "react";
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
        <Link to="/category/Indumentaria">Indumentaria</Link>
        <Link to="/category/Calzados">Calzado</Link>
        <Link to="/category/Bijouteries">Bijouterie</Link>
      </div>
      {isOpen && (
        <div className={styled.overlay} onClick={() => setIsOpen(false)}></div>
      )}
    </div>
  );
};

export default DropdownMenu;
