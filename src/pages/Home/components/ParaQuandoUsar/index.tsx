import ImageParaQuandoUsar from "/images/para-usar.png";
import ImageAppStore from "/images/app-store.svg";
import ImageGooglePlay from "/images/google-play.svg";
import { Container } from "./styles";

export function ParaQuandoUsar() {
  return (
    <Container className="container">
      <div className="image-destaque">
        <img src={ImageParaQuandoUsar} alt="" />
      </div>

      <div>
        <h2>
          Para usar <strong>quando</strong> e <strong>onde</strong> quiser!
        </h2>
        <p>Baixe agora nosso App:</p>

        <div className="appsLojas">
          <img src={ImageGooglePlay} alt="" />{" "}
          <img src={ImageAppStore} alt="" />
        </div>
      </div>
    </Container>
  );
}
