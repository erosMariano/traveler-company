import ImageMotivos from "/images/traveller-company-motivo.png";
import { Container } from "./styles";

export function MotivoParaUsar() {
  return (
    <Container className="container">
      <div>
        <img src={ImageMotivos} alt="" />
      </div>

      <div>
        <h2>
          Por que escolher o <strong>Traveller Company?</strong>
        </h2>

        <ul>
          <li>
            <p>Integrado com sistema de agendas</p>
          </li>
          <li>
            <p>Rankeamento de atividades da equipe</p>
          </li>
          <li>
            <p>Acesso a conteúdos de preparação da equipe</p>
          </li>
          <li>
            <p>Área de gerenciamento do colaborador de tarefas e projetos</p>
          </li>
        </ul>

        <a href="">Saiba como usar</a>
      </div>
    </Container>
  );
}
