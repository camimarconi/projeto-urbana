import { Link } from "react-router-dom";
import "../styles/navbar-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logoHome from "../images/logoHome.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md me-1">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logoHome} alt="logo-urbana" width="20%" height="10%" />
        </Link>
        <div className="mediaNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/outra">
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Serviços
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Produções
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
