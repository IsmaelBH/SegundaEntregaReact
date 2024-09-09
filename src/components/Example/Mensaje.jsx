import React from 'react';

const Mensaje = ({ esFormal }) => {
    return (
        <p>
            {esFormal ? "Estimado usuario lo estimo" : "Hola usuario sucuio"}
        </p>;
    );
};

export default Mensaje;
