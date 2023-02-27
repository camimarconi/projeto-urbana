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
    // <main>
    //   <section className="prod-section"></section>
    //   <h1 className="prodH1">Publicações</h1>
    //   <section className="container mt-5"></section>

    //   <section className="container">
    //     <div className="card mb-3">
    //       <div className="row g-0 border rounded">
    //         <div className="col-md-4">
    //           <img
    //             src={imgEspaços}
    //             className="styleImg img-fluid rounded-start"
    //             alt="imagem publicação"
    //           />
    //         </div>
    //         <div className="col-md-8">
    //           <div className="card-body">
    //             <h5 className="card-title">Card title</h5>
    //             <p className="card-text">
    //               This is a wider card with supporting text below as a natural
    //               lead-in to additional content. This content is a little bit
    //               longer.
    //             </p>
    //             <p className="card-text">
    //               <Link
    //                 onClick={() => {
    //                   window.open(
    //                     `https://atenaeditora.com.br/catalogo/ebook/arquitetura-e-urbanismo-construcao-e-modelagem-do-ambiente`
    //                   );
    //                 }}
    //                 to="#"
    //                 className=""
    //               >
    //                 Leia mais
    //               </Link>

    //               <small className="text-muted">Last updated 3 mins ago</small>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </main>

    <main>
      <section className="prod-section"></section>
      <h1 className="prodH1">Publicações</h1>
      <section className="container mt-5">
        {/* LINHA 1 */}

        <section className="row mb-2">
          <section className="col-md-6">
            <section className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative align-items-center">
              <section className="col p-4 d-flex flex-column position-static">
                <strong className="pubOrigem">[Artigo]</strong>
                <h5 className="pubTítulo">
                  A cidade delas – E-book Arquitetura e urbanismo: construção e
                  modelagem do ambiente
                </h5>
                <p className="ano">(2023)</p>
                <Link
                  onClick={() => {
                    window.open(
                      `https://atenaeditora.com.br/catalogo/ebook/arquitetura-e-urbanismo-construcao-e-modelagem-do-ambiente`
                    );
                  }}
                  to="#"
                  className="pubLink"
                >
                  Leia mais
                </Link>
              </section>
              <section className="col">
                <img
                  src={imgEbook}
                  className="img-prod"
                  alt="imagem da publicação"
                  // preserveAspectRatio="xMidYMid slice"
                />
              </section>
            </section>
          </section>

          <section className="col-md-6">
            <section className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative align-items-center">
              <section className="col p-4 d-flex flex-column position-static">
                <strong className="pubOrigem">[Artigo]</strong>
                <h5 className="pubTítulo">
                  Abordagem feminista periférica – Revista Móbile 23, CAU-SP
                </h5>
                <p className="ano">(2022)</p>
                <Link
                  onClick={() => {
                    window.open(
                      `https://issuu.com/causp_oficial/docs/bx_mobile_23_mar22_5_`
                    );
                  }}
                  to="#"
                  className="pubLink"
                >
                  Leia mais
                </Link>
              </section>
              <section className="col">
                <img
                  src={imgMobile}
                  className="img-prod"
                  alt="imagem da publicação"
                  // preserveAspectRatio="xMidYMid slice"
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
                <strong className="pubOrigem">[Artigo]</strong>
                <h5 className="pubTítulo">A cidade delas – Fórum SP 21</h5>
                <p className="ano">(2021)</p>
                <Link
                  onClick={() => {
                    window.open(
                      `https://www.iabsp.org.br/forumsp21/S10_T53.pdf`
                    );
                  }}
                  to="#"
                  className="pubLink"
                >
                  Leia mais
                </Link>
              </section>
              <section className="col">
                <img
                  src={imgForum}
                  className="img-prod"
                  alt="imagem da publicação"
                  // preserveAspectRatio="xMidYMid slice"
                />
              </section>
            </section>
          </section>

          <section className="col-md-6">
            <section className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative align-items-center">
              <section className="col p-4 d-flex flex-column position-static">
                <strong className="pubOrigem">[Monografia]</strong>
                <h5 className="pubTítulo">
                  Embaraço: a coletividade feminina nos espaços públicos{" "}
                </h5>
                <p className="ano">(2020)</p>
                <Link
                  onClick={() => {
                    window.open(`https://issuu.com/msoler.julia/docs/embara_o`);
                  }}
                  to="#"
                  className="pubLink"
                >
                  Leia mais
                </Link>
              </section>
              <section className="col">
                <img
                  src={imgEmbaraço}
                  className="img-prod"
                  alt="imagem da publicação"
                  // preserveAspectRatio="xMidYMid slice"
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
                <strong className="pubOrigem">[Iniciação Científica]</strong>
                <h5 className="pubTítulo">
                  Urbanismo tático e sua relevância no Largo da Batata
                </h5>
                <p className="ano">(2019)</p>
                <Link
                  onClick={() => {
                    window.open(
                      `https://issuu.com/msoler.julia/docs/artigoic_urbanismotatico_juliasoler`
                    );
                  }}
                  to="#"
                  className="pubLink"
                >
                  Leia mais
                </Link>
              </section>
              <section className="col">
                <img
                  src={imgIC}
                  className="img-prod"
                  alt="imagem da publicação"
                  // preserveAspectRatio="xMidYMid slice"
                />
              </section>
            </section>
          </section>

          <section className="col-md-6">
            <section className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative align-items-center">
              <section className="col p-4 d-flex flex-column position-static">
                <strong className="pubOrigem">[Grupo de Pesquisa]</strong>
                <h5 className="pubTítulo">
                  Espaços Públicos: interpretações e projetos
                </h5>
                <p className="ano">(2017)</p>
                <Link
                  onClick={() => {
                    window.open(
                      `https://dspace.mackenzie.br/bitstream/handle/10899/19850/5683_2015_0_1.pdf?sequence=1&isAllowed=y`
                    );
                  }}
                  to="#"
                  className="pubLink"
                >
                  Leia mais
                </Link>
              </section>
              <section className="col">
                <img
                  src={imgEspaços}
                  className="img-prod"
                  alt="imagem da publicação"
                  // preserveAspectRatio="xMidYMid slice"
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
