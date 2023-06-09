import React from "react";
import { BsCart4 } from "react-icons/bs";
import style from "./CartWidget.module.css";
import { styled } from "@mui/material/styles";
import { Badge } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 8,
    top: 30,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    fontSize: 10,
    color: `white`,
    background: `green`,
  },
}));

const CartWidget = () => {
  return (
    <Link to="/cart">
      <IconButton aria-label="cart">
        <StyledBadge badgeContent="99+" color="secondary">
          <ShoppingCartIcon className={style.iconCart} />
        </StyledBadge>
      </IconButton>
    </Link>
  );
};

export default CartWidget;
