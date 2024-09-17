function Navbar() {
    return (
        <nav className="main-header navbar navbar-expand navbar-light navbar-white">
            <div className="container">
                <a href="/" className="navbar-brand">
                    <h2><span className="brand-text font-weight-light"><b>Prototype</b>App</span></h2>
                </a>
                <a href="Login/Logout">Logout</a>
            </div>
        </nav>
    );
}

export default Navbar;