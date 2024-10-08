import Navbar from '../../components/Navbar.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import { useNavigate, useParams, Link } from 'react-router-dom';

function OptionDelete() {
    const { id } = useParams()
    const navigate = useNavigate()
    const deleteOption = () => {
        fetch(`http://playground.local/wp-json/mern/v1/delete?option_id=${id}`, { method: `POST` })
            .then(r => {
                navigate('/Option')
            })
    }
    const breadcrumb = [{text: `Option List`, href: `/Option`}, {text: `Update Option`, href: `/Option/update/${id}`}, {text: `Delete Option`, href: null}]
 
    return (
        <div className="wrapper">

            {/* Navbar */}
            <Navbar />
            {/* /.navbar */}

            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <Header links={breadcrumb} page_title="Option" />
                {/* /.content-header */}

                {/*-- Main content */}
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card card-primary card-outline">
                                    <div className="card-body">

                                        <div className="text-center">
                                            <h1>Are you sure ?</h1>
                                            <button className="btn btn-danger" onClick={deleteOption}>Yes</button>
                                            &nbsp;
                                            <Link to={`/Option/update/${id}`} className="btn btn-warning text-white">No</Link>
                                        </div>

                                    </div>
                                </div>{/*-- /.card */}
                            </div>
                        </div>
                        {/*-- /.row */}
                    </div>{/*-- /.container-fluid */}
                </div>
                {/*-- /.content */}
            </div>

            {/* /.content-wrapper */}

            {/* Main Footer */}
            <Footer />
            {/* Main Footer */}
        </div>
    );
}

export default OptionDelete;