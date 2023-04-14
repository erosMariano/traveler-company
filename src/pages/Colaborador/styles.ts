import styled from "styled-components";

export const Container = styled.main`
  max-width: 1052px;
  margin: 0 auto;
  padding: 0 16px;
  padding-bottom: 80px;

  .linksColaborador {
    margin-top: 80px;
    gap: 40px;
    display: flex;
    flex-direction: column;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 80px;
    p {
      font-family: "Montserrat Alternates";
      font-style: normal;
      font-weight: 600;
      font-size: 22.9641px;
      line-height: 28px;
      color: #a5a5a5;
    }
  }
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
    color: #9a3ceb;
  }
  div {
    display: flex;
    align-items: center;

    gap: 20px;
  }

  @media (max-width: 768px) {
    img {
      width: 30px;
    }
    h1 {
      font-size: 20px;
    }
  }
`;
