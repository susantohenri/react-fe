import { Link } from "react-router-dom";

function Header({ page_title, links }) {
    if (0 < links.length) links = [{
        text: `Home`,
        href: `/`
    }].concat(links)

    return (
        <div className="content-header">
            <div className="container">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0 text-dark">{page_title}</h1>
                    </div>
                    {/* /.col */}
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            {links.map((link, index) => {
                                let classes = `breadcrumb-item`
                                if (index == links.length - 1) classes += ` active`
                                return <li key={index} className={classes}><Link to={link.href}>{link.text}</Link></li>
                            })}
                        </ol>
                    </div>
                    {/* /.col */}
                </div>
                {/* /.row */}
            </div>
            {/* /.container-fluid */}
        </div>
    );
}

export default Header;