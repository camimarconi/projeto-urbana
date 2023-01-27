import "../styles/serviços.css";
import React from "react";
// import { Link } from "react-router-dom";
// import Accordion from "../components/Accordion";
import consultoriaLogo from "../assets/images/consultoriaLogo.png";
import pesquisaLogo from "../assets/images/pesquisaLogo.png";
import treinamentoLogo from "../assets/images/treinamentoLogo.png";
import colaboraçãoLogo from "../assets/images/colaboraçãoLogo.png";

function Serviços() {
  // const accordionData = [
  //   {
  //     title: "Section 1",
  //     content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
  //     laborum cupiditate possimus labore, hic temporibus velit dicta earum
  //     suscipit commodi eum enim atque at? Et perspiciatis dolore iure
  //     voluptatem.`,
  //   },
  //   {
  //     title: "Section 2",
  //     content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
  //     reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
  //     quaerat iure quos dolorum accusantium ducimus in illum vero commodi
  //     pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
  //     quidem maiores doloremque est numquam praesentium eos voluptatem amet!
  //     Repudiandae, mollitia id reprehenderit a ab odit!`,
  //   },
  //   {
  //     title: "Section 3",
  //     content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
  //     quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
  //     dolor ut sequi minus iste? Quas?`,
  //   },
  // ];

  return (
    <main>
      <section className="serviços-section"></section>
      <section className="container mt-5 h1-serv">
        <h1>Serviços</h1>
      </section>

      <section className="container mt-5 logos-serviços">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img
                src={consultoriaLogo}
                className="card-img-top"
                alt="consultoria-logo"
              />
              <div className="card-body">
                <h5 className="card-title">Consultoria</h5>
                {/* <p className="card-text">
                  
                </p> */}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={pesquisaLogo}
                className="card-img-top"
                alt="pesquisa-logo"
              />
              <div className="card-body">
                <h5 className="card-title">Pesquisa e produção</h5>
                {/* <p className="card-text">
                  Promover conexões entre pesquisadores, instituições parceiras
                  e voluntários, coletar dados e criar indicadores e ferramentas
                  aplicáveis, visando a contribuição com a transformação social
                  e espacial.
                </p> */}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={treinamentoLogo}
                className="card-img-top"
                alt="treinamento-logo"
              />
              <div className="card-body">
                <h5 className="card-title">Treinamentos e articulação</h5>
                {/* <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p> */}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={colaboraçãoLogo}
                className="card-img-top"
                alt="colaboração-logo"
              />
              <div className="card-body">
                <h5 className="card-title">Colaboração e conscientização</h5>
                {/* <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="container mt-5">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </section> */}

      <section>
        <div className="container mt-5">
          <footer className="footer-css mb-3">
            <p className="m-0 p-0">julislr</p>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default Serviços;
