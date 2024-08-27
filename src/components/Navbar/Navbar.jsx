import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (

        <nav className="navbar">
            <div className="navbar-logo">

                <Link to="/">Logo</Link>

            </div>

            <div className="navbar-container">
                <ul className="navbar-links">
                    <li>
                        <Link to="/category/Drums" className="link">Drums</Link>
                    </li>
                    <li>
                        <Link to="/category/Cymbal" className="link">Cymbal</Link>
                    </li>
                    <li>
                        <Link to="/category/Snare" className="link">Snare</Link>
                    </li>

                </ul>


            </div>

            <CartWidget />

        </nav>




    )
}

export default Navbar;
