import { useState, useEffect } from 'react';

const ContadorSec = () => {

    const [contador, setContador] = useState(0)

    useEffect(

        () => {

            const intervalid = setInterval(() => {
                setContador(contador => contador + 1)
            }, 2000);

            return () => {
                clearInterval(intervalid)
            }
        },

        []
    )

    return (
        <div>
            <h1>Contador: {contador}</h1>
        </div>
    );
}

export default ContadorSec;
