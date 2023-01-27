import "../styles/home.css";
import logoHome from "../assets/images/logoHome.png";
import { Link } from "react-router-dom";
import iconConsultB from "../assets/images/icon-consult-b.png";
import iconpesqB from "../assets/images/icon-pesq-b.png";
import icontreinamtB from "../assets/images/icon-treinam-b.png";
import iconcolabtB from "../assets/images/icon-colab-b.png";
import linkedinLogo from "../assets/images/linkedinLogo.png";
import behanceLogo from "../assets/images/behanceLogo.png";
import issuLogo from "../assets/images/issuuLogo.png";

function Home() {
  return (
    <main>
      <section>
        <section className="hero-section-top"></section>
      </section>
      <section className="hero-section-logo">
        <img src={logoHome} alt="logo-urbana" className="hero-section-img" />
      </section>

      <section className="hero-section">
        <p className="custom-container mt5">
          Serviço de consultoria e apoio técnico em metodologias de planejamento
          urbano a partir da perspectiva de gênero
        </p>
      </section>

      <section className="container mt-5 mb-5">
        <h2 className="text-center h2-serv">Serviços</h2>
      </section>

      <section className="d-flex flex-wrap justify-content-evenly align-items-center">
        <div
          className="card mt-5 d-flex flex-colmb-4"
          style={{ width: "11rem" }}
        >
          <div className="card-body col text-center">
            <Link className="link-text-serv" to="/outra">
              <img
                src={iconConsultB}
                className="card-img-top"
                alt="icon-consultoria"
              />
              <h5 className="mt-4 col titleBelow">Consultoria e gestão</h5>
            </Link>
          </div>
        </div>
        <div
          className="card mt-5 d-flex flex-colmb-4 text-center"
          style={{ width: "11rem" }}
        >
          <div className="card-body col align-self-center">
            <Link className="link-text-serv" to="/outra">
              <img
                src={iconpesqB}
                className="card-img-top"
                alt="icon-pesquisa"
              />
              <h5 className="mt-4 col titleBelow">Pesquisa e produção</h5>
            </Link>
          </div>
        </div>
        <div
          className="card mt-5 d-flex flex-colmb-4 text-center"
          style={{ width: "11rem" }}
        >
          <div className="card-body col align-self-center">
            <Link className="link-text-serv" to="/outra">
              <img
                src={icontreinamtB}
                className="card-img-top"
                alt="icon-treinamento"
              />
              <h5 className="mt-4 col titleBelow">
                Treinamentos e articulação
              </h5>
            </Link>
          </div>
        </div>
        <div
          className="card mt-5 d-flex flex-colmb-4 text-center"
          style={{ width: "11rem" }}
        >
          <div className="card-body col align-self-center">
            <Link className="link-text-serv" to="/outra">
              <img
                src={iconcolabtB}
                className="card-img-top"
                alt="icon-colaboração"
              />
              <h5 className="mt-4 col titleBelow">
                Colaboração e conscientização
              </h5>
            </Link>
          </div>
        </div>
      </section>

      <footer className="container mt-5 mb-5">
        <Link
          onClick={() => {
            window.open(`https://www.linkedin.com/in/msolerjulia/`);
          }}
          to="#"
          className="float-start"
        >
          <img
            src={linkedinLogo}
            alt="logo-linkedin"
            className="footer-logos me-2"
          />
        </Link>
        <Link
          onClick={() => {
            window.open(`https://www.behance.net/julislrm`);
          }}
          to="#"
          className="float-start"
        >
          <img
            src={behanceLogo}
            alt="logo-behance"
            className="footer-logos me-2"
          />
        </Link>
        <Link
          onClick={() => {
            window.open(`https://issuu.com/`);
          }}
          to="#"
          className="float-start"
        >
          <img src={issuLogo} alt="logo-issuu" className="footer-logos" />
        </Link>
        <div className="float-end end-style">
          <p className="float-end m-0 p-0 end-style">cel.: +55 11 97421-3809</p>
          <Link
            onClick={() =>
              (window.location = "mailto:urbana.perspectiva@gmail.com")
            }
            to="#"
            className="float-end m-0 p-0 end-style end-style-email"
          >
            urbana.perspectiva@gmail.com
          </Link>
        </div>
      </footer>
    </main>
  );
}

export default Home;
