import React from "react";
import Interrogation from "/images/interrogation.svg";
import styled from "styled-components";
import { Container } from "./styles";
interface ItemColaboradorProps {
  imageUrl: string;
  title: string;
  desc: string;
  infoInterrogation: string;
  locationRouter: string;
}
function ItemColaborador({
  imageUrl,
  desc,
  infoInterrogation,
  title,
  locationRouter,
}: ItemColaboradorProps) {
  return (
    <Container href={locationRouter}>
      <div className="imgIcon">
        <img src={imageUrl} alt="" />
      </div>

      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>

      <img className="iconFlutuante" src={Interrogation} alt="" />
    </Container>
  );
}

export default ItemColaborador;
