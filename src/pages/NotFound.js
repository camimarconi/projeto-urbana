import "../styles/home.css";
import down from "../assets/images/down.jpg";

function NotFound() {
  return (
    <main>
      <section className="hero-section-top"></section>
      <section className="container align-items-center mt-5 mb-5">
        <section className="notFoundCss">
          <h2>404 error</h2>
          <h3>Esta página não existe</h3>
          <img src={down} alt="ilustração cidade" className="img-down" />
        </section>
      </section>
    </main>
  );
}

export default NotFound;
