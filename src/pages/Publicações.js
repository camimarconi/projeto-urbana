import "../styles/publicações.css";
import { Link } from "react-router-dom";
import imgEspaços from "../assets/images/imgEspaços.jpeg";
import imgEbook from "../assets/images/img_Ebook.png";
import imgEmbaraço from "../assets/images/img_Embaraço.png";
import imgForum from "../assets/images/img_Forum_SP_21.jpeg";
import imgIC from "../assets/images/img_IC_urbanismo_tatico.jpg";
import imgMobile from "../assets/images/img_Mobile.jpg";

function Publicações() {
  return (
    <main>
      <section className="prod-section"></section>
      <h1 className="prodH1">Publicações</h1>
      <section className="container mt-5">
        {/* LINHA 1 */}

        <section className="row mb-2">
          <section className="col-md-6">
            <section className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative align-items-center">
              <section className="col p-4 d-flex flex-column position-static">
                <strong className="prodOrigem">[Artigo]</strong>
                <h5 className="mt-3 prodTítulo">
                  A cidade delas – E-book Arquitetura e urbanismo: construção e
                  modelagem do ambiente
                </h5>
                <p className="card-text mt-1">(2023)</p>
                <Link
                  onClick={() => {
                    window.open(
                      `https://atenaeditora.com.br/catalogo/ebook/arquitetura-e-urbanismo-construcao-e-modelagem-do-ambiente`
                    );
                  }}
                  to="#"
                  className="stretched-link mt-1 prodLink"
                >
                  Leia mais
                </Link>
              </section>
              <section className="col d-none d-lg-block">
                <img
                  src={imgEbook}
                  className="bd-placeholder-img img-prod"
                  alt="imagem da publicação"
                  preserveAspectRatio="xMidYMid slice"
                />
              </section>
            </section>
          </section>

          <section className="col-md-6">
            <section className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative align-items-center">
              <section className="col p-4 d-flex flex-column position-static">
                <strong className="prodOrigem">[Artigo]</strong>
                <h5 className="mt-3 prodTítulo">
                  Abordagem feminista periférica – Revista Móbile 23, CAU-SP
                </h5>
                <p className="card-text mt-1">(2022)</p>
                <Link
                  onClick={() => {
                    window.open(
                      `https://issuu.com/causp_oficial/docs/bx_mobile_23_mar22_5_`
                    );
                  }}
                  to="#"
                  className="stretched-link mt-1 prodLink"
                >
                  Leia mais
                </Link>
              </section>
              <section className="col d-none d-lg-block">
                <img
                  src={imgMobile}
                  className="bd-placeholder-img img-prod"
                  alt="imagem da publicação"
                  preserveAspectRatio="xMidYMid slice"
                />
              </section>
            </section>
          </section>
        </section>
        {/* LINHA 1  */}

        {/* LINHA 2  */}
        <section className="row mb-2">
          <section className="col-md-6">
            <section className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative align-items-center">
              <section className="col p-4 d-flex flex-column position-static">
                <strong className="prodOrigem">[Artigo]</strong>
                <h5 className="mt-3 prodTítulo">
                  A cidade delas – Fórum SP 21
                </h5>
                <p className="card-text mt-1">(2021)</p>
                <Link
                  onClick={() => {
                    window.open(
                      `https://www.iabsp.org.br/forumsp21/S10_T53.pdf`
                    );
                  }}
                  to="#"
                  className="stretched-link mt-1 prodLink"
                >
                  Leia mais
                </Link>
              </section>
              <section className="col d-none d-lg-block">
                <img
                  src={imgForum}
                  className="bd-placeholder-img img-prod"
                  alt="imagem da publicação"
                  preserveAspectRatio="xMidYMid slice"
                />
              </section>
            </section>
          </section>

          <section className="col-md-6">
            <section className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative align-items-center">
              <section className="col p-4 d-flex flex-column position-static">
                <strong className="prodOrigem">[Monografia]</strong>
                <h5 className="mt-3 prodTítulo">
                  Embaraço: a coletividade feminina nos espaços públicos{" "}
                </h5>
                <p className="card-text mt-1">(2020)</p>
                <Link
                  onClick={() => {
                    window.open(`https://issuu.com/msoler.julia/docs/embara_o`);
                  }}
                  to="#"
                  className="stretched-link mt-1 prodLink"
                >
                  Leia mais
                </Link>
              </section>
              <section className="col d-none d-lg-block">
                <img
                  src={imgEmbaraço}
                  className="bd-placeholder-img img-prod"
                  alt="imagem da publicação"
                  preserveAspectRatio="xMidYMid slice"
                />
              </section>
            </section>
          </section>
        </section>
        {/* LINHA 2 */}

        {/* LINHA 3 */}
        <section className="row mb-2">
          <section className="col-md-6">
            <section className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative align-items-center">
              <section className="col p-4 d-flex flex-column position-static">
                <strong className="prodOrigem">[Iniciação Científica]</strong>
                <h5 className="mt-3 prodTítulo">
                  Urbanismo tático e sua relevância no Largo da Batata
                </h5>
                <p className="card-text mt-1">(2019)</p>
                <Link
                  onClick={() => {
                    window.open(
                      `https://issuu.com/msoler.julia/docs/artigoic_urbanismotatico_juliasoler`
                    );
                  }}
                  to="#"
                  className="stretched-link mt-1 prodLink"
                >
                  Leia mais
                </Link>
              </section>
              <section className="col d-none d-lg-block">
                <img
                  src={imgIC}
                  className="bd-placeholder-img img-prod"
                  alt="imagem da publicação"
                  preserveAspectRatio="xMidYMid slice"
                />
              </section>
            </section>
          </section>

          <section className="col-md-6">
            <section className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative align-items-center">
              <section className="col p-4 d-flex flex-column position-static">
                <strong className="prodOrigem">[Grupo de Pesquisa]</strong>
                <h5 className="mt-3 prodTítulo">
                  Espaços Públicos: interpretações e projetos
                </h5>
                <p className="card-text mt-1">(2017)</p>
                <Link
                  onClick={() => {
                    window.open(
                      `https://dspace.mackenzie.br/bitstream/handle/10899/19850/5683_2015_0_1.pdf?sequence=1&isAllowed=y`
                    );
                  }}
                  to="#"
                  className="stretched-link mt-1 prodLink"
                >
                  Leia mais
                </Link>
              </section>
              <section className="col d-none d-lg-block">
                <img
                  src={imgEspaços}
                  className="bd-placeholder-img img-prod"
                  alt="imagem da publicação"
                  preserveAspectRatio="xMidYMid slice"
                />
              </section>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}

export default Publicações;
