import { Link } from "react-router-dom";
/* import axios from "axios";
import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react"; */
/* eslint-disable react/prop-types */
const Cart = ({ cart, clearCart, deleteProductById, total, navigate }) => {
  /*   const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("TEST-1d6e7854-2694-4a5d-999e-7a5c878b321f");

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/create_preference",
        {
          description: "nombre del prod",
          price: 100,
          quantity: 1,
          currency_id: "ARS",
        }
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  }; */

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <h1>aca el carrito</h1>

          {cart.map((e) => {
            return (
              <div key={e.id}>
                <h1>{e.title}</h1>
                <h2>{e.quantity}</h2>
                <button
                  onClick={() => {
                    deleteProductById(e.id);
                  }}
                >
                  eliminar del carrito
                </button>
              </div>
            );
          })}
          <h1>el total del carrito es : {total}</h1>
          <button onClick={clearCart}>limpiar carrito</button>
          <button onClick={() => navigate("/checkout")}>Iniciar compra</button>
        </div>
      ) : (
        <div>
          <h1>No hay ningun producto agregado al carrito</h1>
          <Link to="/products">
            <button>Agregar productos</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;

/* <div>
          <h1 className={estilos.titulo}>
            No hay ningun producto agregado al carrito
          </h1>
          <Link to="/">
            <button className={estilos.botones}>Agregar productos</button>
          </Link>
        </div>*/
