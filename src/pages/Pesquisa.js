import ModelEachServ from "../components/ModelEachServ";
import iconPesqVinho from "../assets/images/2-icon-pesq-vinho.png";
import iconAnalises from "../assets/images/icon-analises.png";
import iconConexões from "../assets/images/icon-conexoes.png";
import iconSuporte from "../assets/images/icon-suporte.png";

function Pesquisa() {
  return (
    <ModelEachServ
      h2="Serviços"
      h3="Pesquisa e produção "
      icon={iconPesqVinho}
      iconAlt="icon-consultoria-vinho"
      imgServ1={iconSuporte}
      imgServ1Alt="icon Suporte"
      p1="Fornecer suporte técnico do que é o planejamento urbano e o urbanismo a partir da perspectiva de gênero e seus conceitos, históricos e atualizações, com produção embasada por pesquisas e elaboração de cadernos e manuais."
      imgServ2={iconConexões}
      imgServ2Alt="icon Conexões"
      p2="Promover conexões entre pesquisadores, instituições parceiras e voluntários, coletar dados e criar indicadores e ferramentas aplicáveis, visando a contribuição com a transformação social e espacial."
      imgServ3={iconAnalises}
      imgServ3Alt="icon Analises"
      p3="Desenvolver análises com retratos dinâmicos da realidade e proposições de soluções inovadoras; mapeamento e identificação de processos sociais e simbólicos do território; monitoramento e avaliação embasados em procedimentos quantitativos e qualitativos."
      href="/outra"
      btnTittle="Entre em contato!"
    />
  );
}

export default Pesquisa;
