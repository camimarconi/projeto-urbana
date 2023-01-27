import "../styles/each-serv.css";
import iconConsultVinho from "../assets/images/1-icon-consult-vinho.png";
import iconApoioTec from "../assets/images/icon-apoio-tec.png";
import iconProjetos from "../assets/images/icon-projetos.png";
import iconAplicação from "../assets/images/icon-aplicacao.png";

function Consultoria() {
  return (
    <main>
      <section className="serviços-section"></section>
      <section>
        <h2 className="h2-serv-each">Serviços</h2>
      </section>
      <section>
        <h3 className="h3-serv-each">
          Consultoria e gestão{" "}
          <img
            className="img-icon-each"
            src={iconConsultVinho}
            alt="icon-consultoria-vinho"
          />
        </h3>
      </section>
      {/* 
      <div className="card sizeCardServ align-items-center mt-3 justify-items-evenly">
        <img
          src={iconApoioTec}
          className="card-img-top"
          alt="icon apoio ténico"
        />
        <div className="card-body align-items-center">
          <p className="card-text">
            Revisão de documentos e elaboração de recomendações e planos para
            apoiar um planejamento urbano igualitário.
          </p>
        </div>
      </div> */}

      <section className="d-flex flex-wrap justify-content-evenly align-items-center">
        <div className="card sizeCardServ align-items-center mt-3 justify-items-evenly">
          <img
            src={iconApoioTec}
            className="card-img-top"
            alt="icon apoio ténico"
          />
          <div className="card-body align-items-center">
            <p className="card-text">
              Revisão de documentos e elaboração de recomendações e planos para
              apoiar um planejamento urbano igualitário.
            </p>
          </div>
        </div>

        <div className="card sizeCardServ align-items-center mt-3 justify-items-evenly">
          <img
            src={iconProjetos}
            className="card-img-top"
            alt="icon apoio ténico"
          />
          <div className="card-body align-items-center">
            <p className="card-text">
              Elaboração de programas e projetos que, por meio de um trabalho
              técnico social que envolve diálogo com a comunidade,
              representantes e líderes locais e coletivos feministas existentes,
              garanta um desenvolvimento urbano integrado e efetivo.
            </p>
          </div>
        </div>

        <div className="card sizeCardServ align-items-center mt-3 justify-items-evenly">
          <img
            src={iconAplicação}
            className="card-img-top"
            alt="icon apoio ténico"
          />
          <div className="card-body align-items-center">
            <p className="card-text">
              Aplicação da metodologia de integração, de modo a agregar valor à
              produtos e processos, possibilitando uma resposta efetiva na
              transformação de territórios e eficácia no alcance dos objetivos
              propostos.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Consultoria;
