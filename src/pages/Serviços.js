import "../styles/serviços.css";
import React from "react";
import ServiçosModel from "../components/ServiçosModel";

function Serviços() {
  return (
    <main>
      <section className="serviços-section"></section>
      <section className="float-end">
        <p className="src-name">img src: Emily Garfield</p>
      </section>
      <section className="container mt-3 mb-5">
        <ServiçosModel />
      </section>
    </main>
  );
}

export default Serviços;
