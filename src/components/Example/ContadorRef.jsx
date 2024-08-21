import { useState, useRef } from 'react';

const ContadorRef = () => {

    const [count, setCount] = useState(0);

    const refCount = useRef(0);

    const hundleIncrement = () => {
        setCount(count + 1);
    }

    const hundleSaveRef = () => {
        refCount.current = count;
        console.log('Valor actual de refCount: ${refCount.current}');

    }

    const handleShowRef = () => {
        console.log('Valor actual de refCount: ${refCount.current}');
    }

    return (
        <div>
            <h1>Contador: {count}</h1>

            <button onClick={hundleIncrement}>Incrementar</button>

            <button onClick={hundleSaveRef}>Guardar en useRef</button>

            <button onClick={handleShowRef}>Mostrar referencia</button>

        </div>
    );
}

export default ContadorRef;
