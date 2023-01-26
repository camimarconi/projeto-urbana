import "../styles/home.css";
import logoHome from "../assets/images/logoHome.png";
import { Link } from "react-router-dom";
import logoInstagram from "../assets/images/logoInstagram.png";
import iconConsultB from "../assets/images/icon-consult-b.png";
import iconpesqB from "../assets/images/icon-pesq-b.png";
import icontreinamtB from "../assets/images/icon-treinam-b.png";
import iconcolabtB from "../assets/images/icon-colab-b.png";

function Home() {
  return (
    <main>
      <section>
        <section className="hero-section-top"></section>
      </section>
      <section className="container hero-section-img">
        <img src={logoHome} alt="logo-urbana" className="img-fluid" />
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
        <div className="mt-5 d-flex flex-colmb-4" style={{ width: "11rem" }}>
          <div className="col text-center">
            <Link className="link-text-serv" to="/outra">
              <img
                src={iconConsultB}
                className="card-img-top"
                alt="icon-consultoria"
              />
              <h5 className="mt-4 fs-4 col">Consultoria e gestão</h5>
            </Link>
          </div>
        </div>
        <div
          className="mt-5 d-flex flex-colmb-4 text-center"
          style={{ width: "11rem" }}
        >
          <div className="col align-self-center">
            <Link className="link-text-serv" to="/outra">
              <img
                src={iconpesqB}
                className="card-img-top"
                alt="icon-pesquisa"
              />
              <h5 className="mt-4 fs-4 col">Pesquisa e produção</h5>
            </Link>
          </div>
        </div>
        <div
          className="mt-5 d-flex flex-colmb-4 text-center"
          style={{ width: "11rem" }}
        >
          <div className="col align-self-center">
            <Link className="link-text-serv" to="/outra">
              <img
                src={icontreinamtB}
                className="card-img-top"
                alt="icon-treinamento"
              />
              <h5 className="mt-4 fs-4 col">Treinamentos e articulação</h5>
            </Link>
          </div>
        </div>
        <div
          className="mt-5 d-flex flex-colmb-4 text-center"
          style={{ width: "11rem" }}
        >
          <div className="col align-self-center">
            <Link className="link-text-serv" to="/outra">
              <img
                src={iconcolabtB}
                className="card-img-top"
                alt="icon-colaboração"
              />
              <h5 className="mt-4 fs-4 col">Colaboração e conscientização</h5>
            </Link>
          </div>
        </div>
      </section>

      <footer className="container end-style">
        <div>
          <p className="">julislr</p>
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
        </div>

        <div className="float-end m-0 p-0">
          <p className="m-0 p-0">cel.: +55 11 97421-3809</p>
          <p className="m-0 p-0">email: urbana.perspectiva@gmail.com</p>
        </div>
      </footer>

      <section className="container mt-5">
        <div className="container mt-5">
          <footer className="footer-css mb-3 ">
            <section className="float-start">
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
            </section>
            <section className="float-end">
              <p>telefone e email</p>
            </section>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default Home;
