import "../styles/contato.css";
import imgContato from "../assets/images/contato_img.jpeg";
import { Link } from "react-router-dom";

function Contato() {
  return (
    <main>
      <section className="contato-section"></section>
      <p className="float-end src-name">img src: Emily Garfield</p>
      <section className="container mt-3">
        <h1 className="contatoH1">Contato</h1>
        <section className="d-flex align-items-center justify-content-evenly mediaQContact">
          <section className="contactInfo">
            <h2>Urbana</h2>
            <p>Julia Solér Marconi</p>
            <p>+55 11 97421-3809</p>
            <Link
              onClick={() =>
                (window.location = "mailto:urbana.perspectiva@gmail.com")
              }
              role="button"
              className="btn btn-outline btn-lg btn-serv"
              aria-pressed="true"
              to="#"
            >
              Envie um email!
            </Link>
          </section>

          <img src={imgContato} alt="imagem-cidade" className="imagem-cidade" />
        </section>
      </section>
    </main>
  );
}

export default Contato;
