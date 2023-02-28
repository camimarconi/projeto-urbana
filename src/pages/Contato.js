import "../styles/contato.css";
import imgContato from "../assets/images/logoHome.png";
import { Link } from "react-router-dom";
import linkedinLogo from "../assets/images/linkedinLogo.png";
import behanceLogo from "../assets/images/behanceLogo.png";
import issuLogo from "../assets/images/issuuLogo.png";

function Contato() {
  return (
    <main>
      <section className="contato-section"></section>
      <h1 className="contatoH1">Contato</h1>

      <section className="row mt-3 justify-content-around mediaQContact">
        <section className="mt-4 col">
          <div className="contactInfo">
            <img
              src={imgContato}
              alt="imagem-cidade"
              className="imagem-cidade"
            />
            <p className="contactInfoP">+55 11 97421-3809</p>
            <p className="contactInfoP">urbana.perspectiva@gmail.com</p>
          </div>
          <div className="mt-5 contactInfo">
            <Link
              onClick={() => {
                window.open(`https://www.linkedin.com/in/msolerjulia/`);
              }}
              to="#"
              className=""
            >
              <img
                src={linkedinLogo}
                alt="logo-linkedin"
                className="logo-contact"
              />
            </Link>
            <Link
              onClick={() => {
                window.open(`https://www.behance.net/julislrm`);
              }}
              to="#"
              className=""
            >
              <img
                src={behanceLogo}
                alt="logo-behance"
                className="logo-contact"
              />
            </Link>
            <Link
              onClick={() => {
                window.open(`https://issuu.com/msoler.julia`);
              }}
              to="#"
              className=""
            >
              <img src={issuLogo} alt="logo-issuu" className="logo-contact" />
            </Link>
          </div>
        </section>

        <section className="col mt-4 contactInfo form-google">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSddTk5simKwhcsIYhH9nrsmkFmMOuFDFW0dZz6s4i3NFGc86g/viewform?embedded=true"
            width="640"
            height="1100"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="form"
          >
            Carregando…
          </iframe>
        </section>
      </section>
    </main>
  );
}

export default Contato;
