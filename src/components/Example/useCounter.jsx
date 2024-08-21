import { useState } from "react";

const useCounter = (initialValue) => {
    const [count, setCount] = useState(initialValue);

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    const increment = () => {
        setCount(count = 1);
    }
    const reset = () => {
        setCount(initialValue);
    }

    return { count, decrement, increment, reset };
}

export default useCounter;