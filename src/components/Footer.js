function Footer() {
    return (
        <footer className="main-footer">
            {/* To the right */}
            <small className="float-right d-sm-inline col-12 col-md-6 text-sm-right">
                henry.dinus@gmail.com +6281901088918
            </small>
            {/* Default to the left */}
            <small className="float-left d-sm-inline col-12 col-md-6 text-sm-left">
                <strong>Copyright &copy; 2014-2019 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
                All rights reserved.
            </small>
        </footer>
    );
}

export default Footer;