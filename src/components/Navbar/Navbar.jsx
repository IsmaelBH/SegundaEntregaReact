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
                        <NavLink
                            to="/category/Drums"
                            className={({ isActive }) => (isActive ? 'link active' : 'link')}
                        >
                            Drums
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/category/Cymbal"
                            className={({ isActive }) => (isActive ? 'link active' : 'link')}
                        >
                            Cymbal
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/category/Snare"
                            className={({ isActive }) => (isActive ? 'link active' : 'link')}
                        >
                            Snare
                        </NavLink>
                    </li>
                </ul>
            </div>

            <CartWidget />
        </nav>
    )
}

export default Navbar;
