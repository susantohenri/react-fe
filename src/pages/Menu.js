import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice.js';
import Navbar from '../components/Navbar.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function Menu() {
    const breadcrumb = []
    const dispatch = useDispatch()

    return (
        <div className="wrapper">

            {/* Navbar */}
            <Navbar />
            {/* /.navbar */}

            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <Header links={breadcrumb} page_title="" />
                {/* /.content-header */}

                {/* Main content */}
                <div className="content menu">
                    <div className="container">
                        <div className="row">

                            <div className="col-sm-2">
                                <Link to="Option">
                                    <div className="info-box">
                                        <span className="info-box-icon bg-info"></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Option</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-sm-2" onClick={() => { dispatch(addToCart({id: 1, qty: 10})) }}>
                                <div className="info-box">
                                    <span className="info-box-icon bg-info"></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Add Cart</span>
                                    </div>
                                </div>
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