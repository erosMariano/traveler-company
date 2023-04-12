import styled from "styled-components";

export const Container = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;

  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    color: #3c3c3c;
    text-align: center;
    margin-bottom: 30px;
  }

  .listPassos {
    display: flex;

    div {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      gap: 4px;
    }

    h4 {
      font-family: "Montserrat Alternates";
      font-style: normal;
      font-weight: 500;
      font-size: 24.7273px;
      line-height: 30px;
      color: #ff00ac;
    }

    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 13.1879px;
      line-height: 20px;
      text-align: center;
      color: #3c3c3c;
    }
  }

  @media (max-width: 768px) {
    padding-top: 0;
    .listPassos {
      flex-direction: column;
      gap: 24px;
    }
  }
`;
