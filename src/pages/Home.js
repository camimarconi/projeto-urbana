import "../styles/home.css";
import ServiçosModel from "../components/ServiçosModel";
import logoHome from "../assets/images/logo_branco.png";

function Home() {
  return (
    <main>
      <section className="hero-section">
        <img src={logoHome} alt="logo-urbana" className="hero-section-img2" />
        <p className="custom-container mt5">
          Consultoria e apoio técnico em metodologias de planejamento urbano a
          partir da perspectiva de gênero
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
