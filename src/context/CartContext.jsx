/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    let existe = cart.some((elemento) => elemento.id === id);
    return existe;
  };

  const addToCart = (product) => {
    let existe = isInCart(product.id);
    if (existe) {
      let newCart = cart.map((e) => {
        if (e.id === product.id) {
          alert("ya esta en el carrito");
          return { ...e, quantity: product.quantity };
        } else {
          return e;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteProductById = (id) => {
    const productFiltered = cart.filter((e) => e.id !== id);
    setCart(productFiltered);
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  const getQuantityById = (id) => {
    let product = cart.find((e) => e.id === id);
    return product?.quantity;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteProductById,
    getTotalPrice,
    getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
