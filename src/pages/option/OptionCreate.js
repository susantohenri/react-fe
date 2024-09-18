import Navbar from '../../components/Navbar.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function OptionCreate() {
    const [optionName, setOptionName] = useState('')
    const [optionValue, setOptionValue] = useState('')
    const navigate = useNavigate()
    const submitOption = () => {
        let post = {
            method: `POST`,
            body: new FormData()
        }

        post.body.append(`option_name`, `henri-${optionName}`)
        post.body.append(`option_value`, optionValue)
        fetch(`http://playground.local/wp-json/mern/v1/create`, post).then(r => {
            navigate('/Option')
        })
    }
    const breadcrumb = [{text: `Option List`, href: `/Option`}, {text: `Create Option`, href: null}]

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
                            <div className="main-form col-sm-12">
                                <div className="card card-primary card-outline">
                                    <div className="card-header text-right">
                                        <button className="btn btn-info btn-save" onClick={submitOption}>Save</button>
                                        &nbsp;
                                        <a href="/Option" className="btn btn-warning text-white">Cancel</a>
                                    </div>
                                    <div className="card-body">

                                        <div className="" data-controller="Option">
                                            <div className="form-horizontal form-groups">
                                                <div className="form-group row">
                                                    <label className="col-sm-3 control-label">Option Name</label>
                                                    <div className="col-sm-9">
                                                        <input className="form-control" type="text" value={optionName} onChange={(e) => setOptionName(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 control-label">Option Value</label>
                                                    <div className="col-sm-9">
                                                        <input className="form-control" type="text" value={optionValue} onChange={(e) => setOptionValue(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* /.content-wrapper */}

                {/* Main Footer */}
                <Footer />
                {/* Main Footer */}
            </div>

        </div>
    );
}

export default OptionCreate;