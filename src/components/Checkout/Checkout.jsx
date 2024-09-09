import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';
import { getFirestore, collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';

const Checkout = () => {

    const { cart, getTotal, getTotalProducts, clearCart } =
        useContext(CartContext);


    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailconfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");


    const handleForm = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailconfirmacion) {
            setError("Pro favor completa todos los datos")
            return;
        }

        if (email !== emailconfirmacion) {
            setError("Los emails no coinciden")
            return;
        }

        const db = getFirestore();

        const order = {
            items: cart.map((product) => ({
                id: product.product.id,
                name: product.product.name,
                quantity: product.quantity,
                stock: product.product.stock,
            })),
            total: getTotal(),
            date: new Date(),
            nombre,
            apellido,
            telefono,
            email,
        };

        Promise.all(
            order.items.map(async (productOrder) => {
                const productRef = doc(db, "Item", productOrder.id);
                const productDoc = await getDoc(productRef);
                const stock = productDoc.data().stock;

                await updateDoc(productRef, {
                    stock: stock - productOrder.quantity,
                })
            })
        )
            .then(() => {
                addDoc(collection(db, "orders"), order)
                    .then((docRef) => {
                        setOrderId(docRef.id);
                        clearCart();
                    })
                    .catch((error) => {
                        console.log("Error updating stock", error);
                        setError("No se puede actualizar el stock, intente nuevamente");
                    })
            })
            .catch((error) => {
                console.log("Error updating stock", error);
                setError("No se puede actualizar el stock, intente nuevamente");
            });
    };

    return (
        <div>
            <h2>Ingresa tus datos</h2>
            <hr />
            <div>
                {cart.map((product) => (
                    <div key={product.product.id}>
                        <p>{""}
                            {product.product.name}
                        </p>
                        <p>{product.product.price}</p>
                        <hr />
                    </div>
                ))}
            </div>

            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" onChange={(e) => setNombre(e.target.value)} />

                </div>

                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" onChange={(e) => setApellido(e.target.value)} />

                </div>

                <div>
                    <label htmlFor="">Telefono</label>
                    <input type="number" onChange={(e) => setTelefono(e.target.value)} />

                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />

                </div>

                <div>
                    <label htmlFor="">Email de confirmacion</label>
                    <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />

                </div>

                <button type="submit">Generar orden de compra</button>

                {error && <p>{error}</p>}

                {orderId && (
                    <p>Gracias por su compra! Tu numero de orden es: {orderId}
                        {""}
                    </p>
                )}
            </form>
        </div>
    );
};

export default Checkout;
