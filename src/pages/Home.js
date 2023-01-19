import "../styles/home.css";
import logoHome from "../images/logoHome.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero-section" id="hero-section">
        <img
          src={logoHome}
          alt="logo-urbana"
          className="img-fluid float-md-start me-2"
        />
        <h2 className="mt-5">
          Fortalecimento da auto representação feminina capacitada e ao
          desenvolvimento de materiais voltados para a implementação de um
          planejamento urbano participativo.
        </h2>
      </section>

      {/* <section className="container">
        <p className="mt-5">
          Fortalecimento da auto representação feminina capacitada e ao
          desenvolvimento de materiais voltados para a implementação de um
          planejamento urbano participativo.
        </p>
      </section> */}

      <div className="container mt-5">
        <Link className="btn-home-serv" to="/outra">
          Serviços
        </Link>

        <footer>
          <p>teste</p>
        </footer>
      </div>
    </main>
  );
}

export default Home;
