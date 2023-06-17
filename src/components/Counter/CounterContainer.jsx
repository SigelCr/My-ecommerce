/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  useEffect(() => {
    setCounter(initial);
  }, [initial]);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("stock maxinmo");
    }
  };

  const restar = () => {
    counter > 1 && setCounter(counter - 1);
  };

  return (
    <div>
      <Counter onAdd={onAdd} sumar={sumar} restar={restar} counter={counter} />
    </div>
  );
};

export default CounterContainer;
