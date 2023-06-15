/* eslint-disable react/prop-types */
const Cart = ({ cart, clearCart, deleteProductById, total }) => {
  return (
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
    </div>
  );
};

export default Cart;
