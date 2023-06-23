/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Cart = ({ cart, clearCart, deleteProductById, total, navigate }) => {
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
                <h3>{e.description}</h3>
                <p>{e.price}</p>
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
