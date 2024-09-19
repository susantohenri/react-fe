import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Navbar() {
    const [totalCart, setTotalCart] = useState(0)
    const cart = useSelector(state => state.cart.data)
    useEffect(() => {
        setTotalCart(cart.length)
    }, [cart])

    return (
        <nav className="main-header navbar navbar-expand navbar-light navbar-white">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <h2><span className="brand-text font-weight-light"><b>Prototype</b>App</span></h2>
                </Link>
                <div>{totalCart}</div>
                <Link to="Login/Logout">Logout</Link>
            </div>
        </nav>
    );
}

export default Navbar;