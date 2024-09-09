import React from 'react'

const SimpleForm = ({ fields, errors, handleChange, handleSubmit }) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name='nombre' value={fields.nombre} onChange={handleChange} />
                {errors.nombre && <p>{errors.nombre}</p>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' value={fields.email} onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}
            </div >
            <button type='submit'>Enviar</button>
        </form >
    )
}

export default SimpleForm