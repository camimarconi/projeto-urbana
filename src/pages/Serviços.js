import "../styles/serviços.css";
import React from "react";
import ServiçosModel from "../components/ServiçosModel";

function Serviços() {
  return (
    <main>
      <h2 className="text-center h2-serv">Serviços</h2>

      <section className="container mt-3 mb-5">
        <ServiçosModel />
      </section>
    </main>
  );
}

export default Serviços;
