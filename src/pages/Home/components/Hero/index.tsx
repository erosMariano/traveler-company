import styled from "styled-components";
import ImageHero from "/images/mockup-cel.png";
import ImageBackground from "/images/background-image-hero.png";
import { ContainerHero, ContainerText } from "./styles";

export function Hero() {
  return (
    <ContainerHero>
      <div className="container">
        <ContainerText>
          <span>Feito para o RH</span>
          <h1>
            Gerencie sua equipe com um clique. O aplicativo feito para sua
            empresa!
          </h1>

          <a href="#">Saiba mais</a>
        </ContainerText>

        <div>
          <img className="image-hero" src={ImageHero} alt="" />
        </div>
      </div>

      <div className="overlay">
        <img src={ImageBackground} alt="" />
      </div>
    </ContainerHero>
  );
}
