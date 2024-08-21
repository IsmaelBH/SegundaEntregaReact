import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget";


const Navbar = () => {
    return (

        <nav className="navbar">
            <div className="navbar-logo">

                <p>Mi Logo</p>

            </div>

            <div className="navbar-container">
                <ul className="navbar-links">
                    <li>
                        <a href="#" className="link">Drums</a>
                    </li>
                    <li>
                        <a href="#" className="link">Cymbal</a>
                    </li>
                    <li>
                        <a href="#" className="link">Snare</a>
                    </li>

                </ul>


            </div>

            <CartWidget />

        </nav>




    )
}

export default Navbar;
