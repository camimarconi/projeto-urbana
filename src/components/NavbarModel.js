import "../styles/navbar-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoHome from "../assets/images/logoHome.png";

function NavbarModel() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="logo-urbana"
            src={logoHome}
            width="19%"
            height="9%"
            className="d-inline-block align-top logoMediaQ"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-item">
            <Nav.Link className="nav-link" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-link" href="/">
              Sobre
            </Nav.Link>
            <NavDropdown title="Serviços" id="basic-nav-dropdown">
              <NavDropdown.Item className="nav-link" href="/serviços">
                Serviços
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-link" href="/">
                Consultoria e gestão
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link" href="/outra">
                Pesquisa e produção
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link" href="/">
                Treinamentos e articulação
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link" href="/">
                Colaboração e conscientização
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-link" href="/">
              Produções
            </Nav.Link>
            <Nav.Link className="nav-link" href="/outra">
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <nav className="navbar navbar-expand-md me-1">
    //   <div className="container">
    //     <Link className="navbar-brand" to="/">
    //       <img src={logoHome} alt="logo-urbana" width="20%" height="10%" />
    //     </Link>

    //     <div className="mediaNavbar">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <Link className="nav-link-style" to="/">
    //             Home
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/outra">
    //             Sobre
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/">
    //             Serviços
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/">
    //             Produções
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/">
    //             Contato
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}
export default NavbarModel;
