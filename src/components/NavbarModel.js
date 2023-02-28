import "../styles/navbar-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoHome from "../assets/images/logoHome.png";

function NavbarModel() {
  return (
    <Navbar className="bg-nav-css" expand="lg">
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
            <Nav.Link className="nav-link" href="/sobre">
              Sobre
            </Nav.Link>
            <NavDropdown title="Serviços" id="basic-nav-dropdown">
              <NavDropdown.Item className="nav-link" href="/serviços">
                Serviços
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-link" href="/consultoria">
                Consultoria e gestão
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link" href="/pesquisa">
                Pesquisa e produção
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link" href="/treinamento">
                Treinamentos e articulação
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link" href="/colaboração">
                Colaboração e conscientização
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-link" href="/publicações">
              Publicações
            </Nav.Link>
            <Nav.Link className="nav-link" href="/contato">
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarModel;
