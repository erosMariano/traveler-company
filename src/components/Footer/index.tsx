import styled from "styled-components";
import ImageLogo from "/images/logo-footer.png";
export function Footer() {
  return (
    <FooterContainer>
      <img src={ImageLogo} alt="" />
      <h5> TRAVELLER COMPANY</h5>
    </FooterContainer>
  );
}

export const FooterContainer = styled.footer`
  background: linear-gradient(90deg, #7b80fc 0%, #ff00ac 100%);
  padding: 40px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h5 {
    font-family: "Montserrat Alternates";
    font-style: normal;
    font-weight: 600;
    font-size: 31.2243px;
    line-height: 38px;
    color: #ffffff;
  }

  img{
    width: 40px;
    height: 40px;
  }
  @media(max-width: 1000px){
      padding: 20px 0;
    h5{
      font-size: 1rem;
    }
  }
`;
