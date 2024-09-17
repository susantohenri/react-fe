import Navbar from '../components/Navbar.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function Menu() {
    return (
        <div className="wrapper">

            {/* Navbar */}
            <Navbar />
            {/* /.navbar */}

            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <Header />
                {/* /.content-header */}

                {/* Main content */}
                <div className="content menu">
                    <div className="container">
                        <div className="row">

                            <div className="col-sm-2">
                                <a href="User">
                                    <div className="info-box">
                                        <span className="info-box-icon bg-info"></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">User</span>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* /.content-wrapper */}

                {/* Main Footer */}
                <Footer />
                {/* Main Footer */}
            </div>

        </div>
    );
}

export default Menu;