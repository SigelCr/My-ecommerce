/* eslint-disable react/prop-types */
const Counter = ({ sumar, restar, counter, onAdd }) => {
  return (
    <div>
      <button onClick={sumar}>sumar</button>
      <h3>{counter}</h3>
      <button onClick={restar}>restar</button>
      <button onClick={() => onAdd(counter)}>agregar al carrito</button>
    </div>
  );
};

export default Counter;
