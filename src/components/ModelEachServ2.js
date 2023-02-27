import { Link } from "react-router-dom";
import "../styles/each-serv.css";

function ModelEachServ2(props) {
  return (
    <main>
      <section className="serviços-section"></section>
      <section>
        <h2 className="h2-serv-each">{props.h2}</h2>
      </section>
      <section>
        <h3 className="h3-serv-each">
          {props.h3}
          <img className="img-icon-each" src={props.icon} alt={props.iconAlt} />
        </h3>
      </section>

      <section className="d-flex flex-wrap mt-5 justify-content-evenly align-items-center">
        <div className="sizeCardServ">
          <div className="card align-items-center">
            <img src={props.imgServ1} alt={props.imgServ1Alt} />
            <p className="card-text">{props.p1}</p>
          </div>
        </div>

        <div className="sizeCardServ">
          <div className="card align-items-center">
            <img src={props.imgServ2} alt={props.imgServ2Alt} />
            <p className="card-text">{props.p2}</p>
          </div>
        </div>
      </section>

      <section className="d-flex justify-content-center btn-section">
        <Link
          role="button"
          className="btn btn-outline btn-lg btn-serv"
          aria-pressed="true"
          to="/contato"
        >
          {props.btnTittle}
        </Link>
      </section>
    </main>
  );
}

export default ModelEachServ2;
