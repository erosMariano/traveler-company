import Engrenagem from "/images/engrenagem.svg";
import Avatar from "/images/avatar.png";
import ItemColaborador from "./ItemColaborador";
import Calender from "/images/calender.svg";
import Ranking from "/images/ranking.svg";
import Conteudo from "/images/conteudo.svg";
import Logo from "/images/logo.png";
import Area from "/images/area.svg";

import { Container, Header } from "./styles";
import { useNavigate } from "react-router-dom";

interface ItemColaboradorProps {
  imageUrl: string;
  title: string;
  desc: string;
  infoInterrogation: string;
  locationRouter: string;
}

function Colaborador() {
  const navigate = useNavigate();
  function handleCloseColaborador() {
    navigate("/login");
  }

  const ItemColaboradorArray: ItemColaboradorProps[] = [
    {
      title: "Agenda",
      desc: "Para melhor gestão do seu dia e suas atividades, lance aqui suas tarefas e afazeres diários",
      imageUrl: Calender,
      infoInterrogation: "",
      locationRouter: "/colaborador/agenda",
    },
    {
      title: "Ranking",
      desc: "Colocação e bonificação dos colaboradores mais ativos da empresa",
      imageUrl: Ranking,
      infoInterrogation: "",
      locationRouter: "#",
    },

    {
      title: "Meu conteúdo",
      desc: "Cursos e atividades para serem realizadas no dia a dia",
      imageUrl: Conteudo,
      infoInterrogation: "",
      locationRouter: "#",
    },

    {
      title: "Sua área",
      desc: "Consulte suas demandas e projetos, após finalizar sinalize como concluído",
      imageUrl: Area,
      infoInterrogation: "",
      locationRouter: "#",
    },
  ];

  return (
    <Container>
      <Header>
        <h1>Olá, Colaborador!</h1>

        <div>
          <button onClick={handleCloseColaborador}>
            <img src={Engrenagem} alt="" />
          </button>
          <button>
            {" "}
            <img src={Avatar} alt="" />
          </button>
        </div>
      </Header>

      <div className="linksColaborador">
        {ItemColaboradorArray.map((item, index) => (
          <ItemColaborador
            desc={item.desc}
            imageUrl={item.imageUrl}
            infoInterrogation={item.infoInterrogation}
            locationRouter={item.locationRouter}
            title={item.title}
            key={index}
          />
        ))}
      </div>

      <footer>
        <img src={Logo} alt="" />
        <p>TRAVELLER COMPANY</p>
      </footer>
    </Container>
  );
}

export default Colaborador;
