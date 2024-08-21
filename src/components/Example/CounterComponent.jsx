import React from "react";
import useCounter from "./useCounter";

const CounterComponent = () => {


    const { count, increment, decrement, reset } = useCounter(1)

    return (
        <div>
            <h1>Contador:</h1>
            <button onClick={decrement}>Decrementar</button>
            <p>{count}</p>
            <button onClick={increment}>Incrementar</button>
            <button onClick={reset}>Reset</button>


        </div>

    )
}

export default CounterComponent