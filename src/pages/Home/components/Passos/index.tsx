import ImagePasso1 from "/images/passo1-icon.svg";
import ImagePasso2 from "/images/passo2-icon.svg";
import ImagePasso3 from "/images/passo3-icon.svg";
import { Container } from "./styles";

export function Passos() {
  return (
    <Container className="container">
      <h2>Para usar é simples!</h2>

      <div className="listPassos">
        <div>
          <img src={ImagePasso1} alt="" />
          <h4>Passo 1</h4>
          <p>Crie sua conta empresarial e escolha as categorias que quiser</p>
        </div>

        <div>
          <img src={ImagePasso2} alt="" />
          <h4>Passo 2</h4>
          <p>Registre os colaboradores e a posição de cada um</p>
        </div>

        <div>
          <img src={ImagePasso3} alt="" />
          <h4>Passo 3</h4>
          <p>Pronto! seus colaboradores já podem acessar o Traveller Company</p>
        </div>
      </div>
    </Container>
  );
}

