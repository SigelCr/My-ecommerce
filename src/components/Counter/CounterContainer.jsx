/* eslint-disable react/prop-types */
import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, onAdd }) => {
  console.log(stock);
  const [counter, setCounter] = useState(0);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("stock maxinmo");
    }
  };

  const restar = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <Counter onAdd={onAdd} sumar={sumar} restar={restar} counter={counter} />
    </div>
  );
};

export default CounterContainer;
