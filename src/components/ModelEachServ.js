import "../styles/each-serv.css";
// import iconConsultVinho from "../assets/images/1-icon-consult-vinho.png";
// import iconApoioTec from "../assets/images/icon-apoio-tec.png";
// import iconProjetos from "../assets/images/icon-projetos.png";
// import iconAplicação from "../assets/images/icon-aplicacao.png";

function Consultoria(props) {
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

        <div className="sizeCardServ projcss">
          <div className="card align-items-center">
            <img src={props.imgServ2} alt={props.imgServ2Alt} />
            <p className="card-text">{props.p2}</p>
          </div>
        </div>

        <div className="sizeCardServ">
          <div className="card align-items-center">
            <img src={props.imgServ3} alt={props.imgServ3Alt} />
            <p className="card-text">{props.p3}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Consultoria;
