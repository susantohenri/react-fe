import Navbar from '../../components/Navbar.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import { useNavigate, useParams } from 'react-router-dom';

function OptionDelete() {
    const { id } = useParams()
    const navigate = useNavigate()
    const deleteOption = () => {
        fetch(`http://playground.local/wp-json/mern/v1/delete?option_id=${id}`, { method: `POST` })
            .then(r => {
                navigate('/Option')
            })
    }
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
                                            <a href={`/Option/update/${id}`} className="btn btn-warning text-white">No</a>
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