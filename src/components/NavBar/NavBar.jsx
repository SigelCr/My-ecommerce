import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "./NavBar.module.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <>
      <nav className={styled.containerPrimary}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/difrhbjlk/image/upload/v1680558179/logotipo_ftge2j.jpg"
            alt="logo"
            className={styled.img}
          />
        </Link>
        <div className={styled.containerLinks}>
          <Link to="/">Inicio</Link>
          <DropdownMenu className={styled.dropdownMenu} />
          <Link to="/contact">Contacto</Link>
        </div>
        <div className={styled.containerLoginAndRegister}>
          <Link to="/login">Iniciar sesion</Link>
          <Link to="/sign-up">Registrarse</Link>
        </div>
        <div className={styled.containerIconCart}>
          <CartWidget />
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
