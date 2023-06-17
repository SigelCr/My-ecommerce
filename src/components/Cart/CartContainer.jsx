import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const navigate = useNavigate();

  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  return (
    <div>
      <Cart
        cart={cart}
        clearCart={clearCart}
        deleteProductById={deleteProductById}
        total={total}
        navigate={navigate}
      />
    </div>
  );
};

export default CartContainer;
