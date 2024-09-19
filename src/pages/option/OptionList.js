import Navbar from '../../components/Navbar.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function OptionList() {
    const [users, setOptions] = useState([])
    useEffect(() => {
        fetch(`http://playground.local/wp-json/mern/v1/list`)
            .then(r => r.json())
            .then(users => {
                setOptions(users)
            })
    }, [])
    const navigate = useNavigate()
    const breadcrumb = [{text: `Option List`, href: null}]
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

                {/* Main content */}
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card card-primary card-outline">
                                    <div className="card-body">

                                        <div className="col-sm-12 text-right">
                                            <Link to={`/Option/create`}
                                                className="btn btn-primary"> Add New </Link>
                                        </div>
                                        <div className="card-body">

                                            <table className="table table-bordered table-striped table-model text-left">
                                                <thead>
                                                    <tr>
                                                        <th>Option Name</th>
                                                        <th>Option Value</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users.map((user, id) => {
                                                        const oddEven = 0 == id % 2 ? `even` : `odd`
                                                        return <tr key={id} className="{oddEven}" onClick={e => navigate(`/Option/update/${user.option_id}`)}>
                                                            <td>{user.option_name}</td>
                                                            <td>{user.option_value}</td>
                                                        </tr>
                                                    })}
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                    {/* /.card */}
                                </div>
                            </div>
                            {/* /.row */}
                        </div>
                        {/* /.container-fluid */}
                    </div>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}

                {/* Main Footer */}
                <Footer />
                {/* Main Footer */}
            </div>

        </div>
    );
}

export default OptionList;