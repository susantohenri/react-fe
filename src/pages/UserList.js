import Navbar from '../components/Navbar.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { useEffect, useState } from 'react';

function UserList() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`http://playground.local/wp-json/mern/v1/list`)
            .then(r => r.json())
            .then(users => {
                setUsers(users)
            })
    }, [])
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
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card card-primary card-outline">
                                    <div className="card-body">

                                        <div className="col-sm-12 text-right">
                                            <a href="User/create"
                                                className="btn btn-primary"> Add New </a>
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
                                                        return <tr key={id} className="{oddEven}">
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

export default UserList;