import "../styles/home.css";
import logoHome from "../assets/images/logoHome.png";
import { Link } from "react-router-dom";
import logoInstagram from "../assets/images/logoInstagram.png";
function Home() {
  return (
    <main>
      <section>
        <section className="hero-section-top"></section>
      </section>
      <section className="container hero-section-img">
        <img src={logoHome} alt="logo-urbana" className="img-fluid" />
      </section>
      <section className="hero-section" id="hero-section">
        <p className="container info-box mt5">
          Serviço de consultoria e apoio técnico em metodologias de planejamento
          urbano a partir da perspectiva de gênero
        </p>
      </section>
      <section className="container mt-5 section-infos">
        <p className="info-below">
          {/* A <strong>urbana</strong> é uma consultoria que busca juntar esforços
          com outros movimentos e organizações, colidindo e construindo agendas
          de compromissos às políticas de igualdade de gênero. Visa a
          articulação com o setor público e privado, na premissa da construção
          de um objetivo social comum. Atua em quatro eixos que se
          interrelacionam e se fortalecem entre si, por meio da adoção de
          metodologias fundamentais para a aplicação e compreensão da
          perspectiva de gênero no planejamento urbano e no urbanismo, embasadas
          em referências nacionais e internacionais. */}
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
