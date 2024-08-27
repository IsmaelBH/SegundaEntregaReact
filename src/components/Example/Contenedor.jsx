import React from 'react';


const Contenedor = ({ children }) => {
    return (
        <div style={{ border: '2px solid #333', padding: '16px', BorderRadius: '4px' }}>
            {children}
        </div>
    );
}

export default Contenedor
