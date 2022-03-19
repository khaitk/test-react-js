import logo from '../logo.png';
import {Link, Outlet} from "react-router-dom";

function Nav() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img src={logo} width="80" height="80"
                         className="d-inline-block align-top" alt=""/>
                </Link>
                <div className="float-right">
                    <i className="bi bi-cart"></i>
                </div>
            </nav>

            <Outlet />
        </div>
    );
}

export default Nav;
