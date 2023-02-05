import "../styles/home.css";
import logoHome from "../assets/images/logoHome.png";
import ServiçosModel from "../components/ServiçosModel";

function Home() {
  return (
    <main>
      <section>
        <section className="hero-section-top"></section>
      </section>
      <section className="hero-section-logo">
        <img src={logoHome} alt="logo-urbana" className="hero-section-img" />
      </section>

      <section className="hero-section">
        <p className="custom-container mt5">
          Serviço de consultoria e apoio técnico em metodologias de planejamento
          urbano a partir da perspectiva de gênero
        </p>
      </section>

      <section className="container mt-5 mb-5">
        <h2 className="text-center h2-serv-home">Serviços</h2>

        <ServiçosModel />
      </section>
    </main>
  );
}

export default Home;
