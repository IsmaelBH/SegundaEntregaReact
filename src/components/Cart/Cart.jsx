import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';
import CartDitail from '../CartDitail/CartDitail';

const Cart = () => {

    const { cart } =
        useContext(CartContext);

    return (
        <div>
            {cart.length === 0 ? (
                <h1>No hay productos en el carrito</h1>
            ) : (
                <>

                    <CartDitail cart={cart} />

                </>
            )}
        </div>
    );
};

export default Cart;