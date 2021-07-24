import logo from './logo.png';
import './Navbar.css';
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img className="navbar-brand ps-lg-5" src={logo}></img>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link link-Home active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   2/718,Kazura Garen 2nd street...
                                </a>
                            </li>
                        </ul>
                        <form className="d-md-flex pe-lg-5 me-lg-5">
                            <div>
                            <a className='text-decoration-none text-body m-3' href='#' >Search</a>
                            </div>
                            <div>
                            <a className='text-decoration-none text-body m-3' href='#' >My List</a>
                            </div>
                            <div>
                            <a className='text-decoration-none text-body m-3' href='#' >My Account</a>
                            </div>
                            <div>
                            <a className='text-decoration-none text-body m-3' href='#' >Cart</a>
                            </div>
                            {/* <a className='text-decoration-none text-body m-3' href='#' >My List</a>
                            <a className='text-decoration-none text-body m-3' href='#' >My Account</a>
                            <a className='text-decoration-none text-body m-3' href='#' >Cart</a> */}
                        </form>
                    </div>
                </div>
            </nav>
        </div>

    );
}
export default Navbar;