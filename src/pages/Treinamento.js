import ModelEachServ2 from "../components/ModelEachServ2";
import iconTreinamVinho from "../assets/images/icon-treinam-vinho.png";
import iconCursos from "../assets/images/icon-cursos.png";
import iconParticip from "../assets/images/icon-particip.png";

function Treinamento() {
  return (
    <ModelEachServ2
      h2="Serviços"
      h3="Treinamentos e articulação "
      icon={iconTreinamVinho}
      iconAlt="icon-treinamento-vinho"
      imgServ1={iconCursos}
      imgServ1Alt="icon Cursos"
      p1="Serviço de aptidão para o público feminino por meio de cursos, palestras e workshops, que relacione a teoria e a prática, visando articular e apoiar as demandas e o diálogo das mulheres com os governos locais e impulsionar políticas públicas que considerem recortes de gênero, raça e classe e promovam cidades mais inclusivas e acolhedoras."
      imgServ2={iconParticip}
      imgServ2Alt="icon Participação"
      p2="Participação e suporte para a integração em processos públicos e comunitários para repensar a coletividade, o design e uso de espaços públicos, seja a rua, praças, parques, vizinhanças, entre outros; buscando incluir a diversidade e as experiências de todos."
      href="/outra"
      btnTittle="Entre em contato!"
    />
  );
}

export default Treinamento;
