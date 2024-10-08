import "./CartWidget.css"
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartProvider";

const CartWidget = () => {

    const { getTotalProducts } = useContext(CartContext);

    return (
        <div className="nav-cart">
            <FaCartPlus />
            {getTotalProducts() === 0 ? null : getTotalProducts()}
        </div>
    );
};

export default CartWidget;
