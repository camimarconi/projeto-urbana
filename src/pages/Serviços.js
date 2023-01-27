import "../styles/serviços.css";
import React from "react";
import ServiçosModel from "../components/ServiçosModel";

function Serviços() {
  return (
    <main>
      <section className="serviços-section"></section>
      <section className="container mt-5 mb-5">
        <ServiçosModel />
      </section>
    </main>
  );
}

export default Serviços;
