import "../styles/sobre.css";
import React from "react";
import imgLado from "../assets/images/sobre_lado_Clemzillu.jpg";
import logo from "../assets/images/logoHome.png";
import imgLado2 from "../assets/images/imgLado_Federica_Fragapane.jpg";

function Sobre() {
  return (
    <main>
      <section className="sobre-section"></section>
      <section className="mb-5">
        <p className="sobreH1">Sobre</p>
        <section className="container">
          <section className="d-flex justify-content-evenly align-items-center mediaQSobre">
            <img className="logo" src={logo} alt="logo urbana" />
          </section>
          <section className="d-flex mt-3 justify-content-evenly align-items-center mediaQSobre">
            <ol className="ol-css">
              <li>é aquela [mulher] que pertence à cidade</li>
              <li>própria da cidade</li>
              <li>que tem características de cidade</li>
              <li>dotada de urbanidade</li>
            </ol>
          </section>
          <section className="d-flex align-items-center marginSpec mediaQSobre">
            <img
              src={imgLado}
              alt="foto de Clemzillu"
              className="img-sobre-1"
            />
            <p className="infoSobre msSpec">
              A{" "}
              <strong>
                <u>urbana</u>
              </strong>{" "}
              é uma consultoria que busca juntar esforços com outros movimentos
              e organizações, colidindo e construindo agendas de compromissos às
              políticas de igualdade de gênero. Visa a articulação com o setor
              público e privado, na premissa da construção de um objetivo social
              comum. Atua em quatro eixos que se interrelacionam e se fortalecem
              entre si, por meio da adoção de metodologias fundamentais para a
              aplicação e compreensão da perspectiva de gênero no planejamento
              urbano e no urbanismo, embasadas em referências nacionais e
              internacionais.
            </p>
          </section>
          <section className="mt-5 mediaQSobre">
            <h2 className="sobreH2">Idealizadora</h2>
          </section>
          <section className="d-flex align-items-center mediaQSobre">
            {/* <p>IDEALIZADORA</p> */}
            <p className="infoSobre">
              {/* IDEALIZADORA{""}
              <br /> */}
              Arquiteta, urbanista e pesquisadora formada pelo Centro
              Universitário Belas Artes de São Paulo, <u>Júlia Solér Marconi</u>{" "}
              atuou profissionalmente com políticas urbanas, planejamento urbano
              e projetos de urbanismo. Idealizou a urbana durante o Mestrado
              Profissional, onde pesquisou sobre metodologias internacionais e
              nacionais, a fim de definir os fundamentos e estratégias que
              compõem uma metodologia de planejamento urbano e urbanismo aliada
              integralmente a perspectiva de gênero, que considera as demandas e
              necessidades da mulher e suas diversas esferas e
              interseccionalidades na produção social do espaço urbano, bem como
              sua inclusão como atrizes públicas e políticas.
            </p>
            <img
              src={imgLado2}
              alt="img Federica Fragapane"
              className="img-sobre-2 msSpec"
            />
          </section>
          <p className="srcName mediaQSobre float-end">
            src: Federica Fragapane
          </p>
        </section>
      </section>
    </main>
  );
}

export default Sobre;
