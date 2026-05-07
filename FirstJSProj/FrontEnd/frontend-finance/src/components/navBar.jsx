import { Link } from 'react-router-dom';
import "../css/navBar.css";

function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">
                <h1>Stock App</h1>
            </Link>
        </div>
        <div className="nav-links">
            <Link to="/" className="nav-link">
                Home
            </Link>
            <Link to="/portfolio" className="nav-link">
                Portfolio
            </Link>
        </div>
    </nav>
}

export default NavBar;