import "../styles/home.css";
import logoHome from "../images/logoHome.png";
import { Link } from "react-router-dom";
import logoInstagram from "../images/logoInstagram.png";
function Home() {
  return (
    <main>
      <section className="hero-section" id="hero-section">
        <img
          src={logoHome}
          alt="logo-urbana"
          className="img-fluid float-md-start me-2"
        />
      </section>
      <section className="container mt-5 info-box">
        <p className="">
          Fortalecimento da auto representação feminina capacitada e ao
          desenvolvimento de materiais voltados para a implementação de um
          planejamento urbano participativo.
        </p>
        <Link className="btn-home-serv mt-5" to="/outra">
          Serviços
        </Link>
        <div className="container mt-5">
          <footer className="footer-css mb-3">
            <p className="m-0 p-0">julislr</p>
            <Link
              onClick={() => {
                window.open(`https://www.instagram.com/julislr.m/`);
              }}
              to="#"
            >
              <img
                src={logoInstagram}
                alt="logo-instagram"
                className="img-fluid"
              />
            </Link>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default Home;
