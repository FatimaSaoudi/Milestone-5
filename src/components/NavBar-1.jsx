
function NavBar () {

    return(
        <nav className="navbar navbar-expand-lg py-3 sticky-top navbar-light bg-white">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img className="logo" src={require("../img/bh.png")} alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Donate Now</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Shop Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#campaigns">Get Involved</a>
                        </li>
                    </ul>
                    <button className="btn btn-primary ms-lg-3">Register</button>
                    <button className="btn btn-primary ms-lg-3">Log in</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;