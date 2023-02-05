import "../styles/serviços.css";
import React from "react";
import { Link } from "react-router-dom";
import iconConsultB from "../assets/images/icon-consult-b.png";
import iconpesqB from "../assets/images/icon-pesq-b.png";
import icontreinamtB from "../assets/images/icon-treinam-b.png";
import iconcolabtB from "../assets/images/icon-colab-b.png";
import iconConsultV from "../assets/images/1-icon-consult-vinho.png";
import iconpesqV from "../assets/images/2-icon-pesq-vinho.png";
import icontreinamtV from "../assets/images/icon-treinam-vinho.png";
import iconcolabtV from "../assets/images/icon-colab-vinho.png";

function ServiçosModel() {
  return (
    <main>
      <section className="d-flex flex-wrap justify-content-evenly align-items-center">
        <div
          className="card mt-5 d-flex flex-colmb-4"
          style={{ width: "11rem" }}
        >
          <div className="card-body col text-center">
            <Link className="link-text-serv" to="/consultoria">
              <img
                src={iconConsultB}
                className="card-img-top-bege"
                alt="icon-consultoria"
              />
              <img
                src={iconConsultV}
                className="card-img-top-vinho"
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
            <Link className="link-text-serv" to="/pesquisa">
              <img
                src={iconpesqB}
                className="card-img-top-bege"
                alt="icon-pesquisa"
              />
              <img
                src={iconpesqV}
                className="card-img-top-vinho"
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
            <Link className="link-text-serv" to="/treinamento">
              <img
                src={icontreinamtB}
                className="card-img-top-bege"
                alt="icon-treinamento"
              />
              <img
                src={icontreinamtV}
                className="card-img-top-vinho"
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
            <Link className="link-text-serv" to="/colaboração">
              <img
                src={iconcolabtB}
                className="card-img-top-bege"
                alt="icon-colaboração"
              />
              <img
                src={iconcolabtV}
                className="card-img-top-vinho"
                alt="icon-colaboração"
              />
              <h5 className="mt-4 col titleBelow">
                Colaboração e conscientização
              </h5>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServiçosModel;
