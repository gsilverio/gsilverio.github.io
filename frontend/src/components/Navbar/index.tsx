import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-container">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>BarberSystem</h4>
        </Link>

        <div className="collapse navbar-collapse menu-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <Link to="/kindofservice">
                <h5>Services List</h5>
              </Link>
            </li>
            <li>
              <Link to="/users">
                <h5>Users List</h5>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
