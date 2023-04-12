import styled from "styled-components";

export const Container = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;

  display: flex;
  gap: 70px;

  ul {
    list-style: none;
  }

  h2 {
    font-family: "Montserrat Alternates";
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 37px;
    color: #9a3ceb;

    strong {
      font-weight: 700;
    }
    margin-bottom: 25px;
  }

  ul li {
    margin-bottom: 25px;
    position: relative;
    display: flex;
    align-items: center;
    &::before {
      content: "";
      display: block;
      position: relative;
      margin-right: 15px;
      margin-left: 18px;
      width: 10px;
      height: 10px;
      background: #9a3ceb;
      border-radius: 20px;
    }

    p {
      position: relative;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      /* identical to box height */

      display: flex;
      align-items: center;

      color: #3c3c3c;
    }
  }
  p {
    width: 100%;
  }
  a {
    background: #ff00ac;
    border-radius: 2px;
    width: 290px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

    text-decoration: none;
    border-radius: 2px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    img {
      display: block;
      margin: 0 auto;
    }

    a {
      width: 100%;
      font-size: 1rem;
    }

    h2 {
      font-size: 1.5rem;
      line-height: normal;
    }
  }
`;
