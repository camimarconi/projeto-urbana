import ModelEachServ from "../components/ModelEachServ";
import iconConsultVinho from "../assets/images/1-icon-consult-vinho.png";
import iconApoioTec from "../assets/images/icon-apoio-tec.png";
import iconProjetos from "../assets/images/icon-projetos.png";
import iconAplicação from "../assets/images/icon-aplicacao.png";

function Consultoria() {
  return (
    <ModelEachServ
      h2="Serviços"
      h3="Consultoria e gestão "
      icon={iconConsultVinho}
      iconAlt="icon-consultoria-vinho"
      imgServ1={iconApoioTec}
      imgServ1Alt="icon apoio ténico"
      p1="Revisão de documentos e elaboração de recomendações e planos para apoiar um planejamento urbano igualitário."
      imgServ2={iconProjetos}
      imgServ2Alt="icon projetos"
      p2="Elaboração de programas e projetos que, por meio de um trabalho técnico social que envolve diálogo com a comunidade, representantes e líderes locais e coletivos feministas existentes, garanta um desenvolvimento urbano integrado e efetivo."
      imgServ3={iconAplicação}
      imgServ3Alt="icon aplicação"
      p3="Aplicação da metodologia de integração, de modo a agregar valor à produtos e processos, possibilitando uma resposta efetiva na transformação de territórios e eficácia no alcance dos objetivos propostos."
      href="/outra"
      btnTittle="Entre em contato!"
    />
  );
}

export default Consultoria;
