import { useState } from "react";

const ItemCount = () => {
    const [ counter, setCounter] = useState(0)
    const suma = () => {
        setCounter( counter + 1 )
    }
    const resta = () => {
        setCounter( counter - 1 )
    }
  return (
    <>
        <div>ItemCount</div>
        <h2>{counter}</h2>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
    </>
  );
}

export default ItemCount