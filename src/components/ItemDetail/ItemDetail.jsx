import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product }) => {
    const { addItems } = useContext(CartContext);
    const [showItemCount, setShowItemCount] = useState(true);

    const onAdd = (quantity) => {
        addItems(product, quantity);
        setShowItemCount(false);
    };

    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Categoria: {product.category}</p>

            {product.stock > 0 ? (

                showItemCount && (
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                )
            ) : (

                <p>Producto fuera de stock</p>
            )}


            {!showItemCount && (
                <Link to="/cart">Terminar mi compra</Link>
            )}
        </div>
    );
};

export default ItemDetail;
