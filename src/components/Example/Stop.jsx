import React from 'react'

const Stop = () => {

    const hundleClick = () => {
        e.stopPropagation()
        alert("Hiciste click en el boton")
    }
    const hundleParentClick = () => {
        alert("Hicisteclick en el contenedor")
    }
    return (
        <div>
            <h1>Componente stopPropagation</h1>

            <button onClick={hundleClick}>Haz click aqui</button>
        </div>
    );
}

export default Stop
