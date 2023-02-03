import ModelEachServ2 from "../components/ModelEachServ2";
import iconColabVinho from "../assets/images/icon-colab-vinho.png";
import iconAções from "../assets/images/icon-acoes.png";
import iconDivulg from "../assets/images//icon-divulg.png";

function Colaboração() {
  return (
    <ModelEachServ2
      h2="Serviços"
      h3="Colaboração e conscientização "
      icon={iconColabVinho}
      iconAlt="icon-colaboração-vinho"
      imgServ1={iconAções}
      imgServ1Alt="icon Ações"
      p1="Organização de ações e oficinas de conscientização pública que trate de segurança, do espaço público e privado, das oscilações e atividades do dia das mulheres e da experiência feminina no espaço. Planejar ações em conjunto com coletivos feministas embasadas em urbanismo tático e acupuntura urbana."
      imgServ2={iconDivulg}
      imgServ2Alt="icon Divulgaçãoção"
      p2="Recursos de comunicação online como redes sociais, páginas de parceiros e interessados no tema, eventos, distribuição de cartilhas e panfletos, palestras para todas as idades, considerando a melhor forma de diálogo para o território e público a ser ofertada."
      href="/outra"
      btnTittle="Entre em contato!"
    />
  );
}

export default Colaboração;
