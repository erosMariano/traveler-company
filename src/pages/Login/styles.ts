import styled from "styled-components";


export const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  display: flex;
  align-items: center;

  .smartPhone {
    margin-left: 250px;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
    position: absolute;
    top: 40px;
    left: 300px;
  }

  @media (max-width: 1386px) {
    .logo {
      left: 150px;
    }
    .smartPhone {
      margin-left: 100px;
    }
  }

  @media (max-width: 1228px) {
    .logo {
      left: 100px;
    }
    .smartPhone {
      margin-left: 50px;
    }
  }

  @media (max-width: 1181px) {
    .logo {
      left: 100px;
    }
    .smartPhone {
      width: 400px;
    }
  }

  h1 {
    font-family: "Montserrat Alternates";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    color: #9a3dec;
  }

  @media (max-width: 1100px) {
    .smartPhone {
      display: none;
    }
    .logo {
      display: none;
    }
  }
`;


export const AreaLogin = styled.div`
  background-image: url("/images/banner-login.png");
  min-height: 100vh;
  object-fit: cover;
  padding: 0 50px;
  width: 640px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1100px) {
    width: 100%;
    padding: 0 16px;
  }

  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    color: #ffffff;
    margin-bottom: 5px;
  }
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
    margin-top: 117px;
    margin-bottom: 30px;
  }

  label {
    position: relative;
    width: 100%;
    img {
      left: 18px;
      top: 18px;
      position: absolute;
      z-index: 1;
    }
  }
  input {
    border-radius: 4px;
    outline: none;
    width: 100%;
    height: 76px;
    background: rgba(160, 152, 218, 0.4);
    border: 1px solid #ffffff;
    backdrop-filter: blur(20px);

    padding-left: 68px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    /* identical to box height */

    color: #fff;

    &::placeholder {
      color: #e5e5e5;
    }
  }

  button {
    width: 100%;
    height: 76px;
    background: linear-gradient(
      90deg,
      #7b80fc 0%,
      #9a3ceb 51.87%,
      #7b80fc 100%
    );
    border-radius: 4px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 1100px) {
    width: 100%;
    padding: 0 16px;

    h2 {
      font-size: 30px;
      margin-bottom: 0;
      line-height: normal;
    }
    p {
      font-size: 15px;
    }

    form {
      margin-top: 40px;
    }

    input,
    button {
      font-size: 20px;
      height: 48px;
    }
    form input{
      padding-left: 48px;
    }
    form img {
      width: 20px;
      top: 15px;
    }
  }
`;

export const Footer = styled.div`
  p {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 16px;
  }

  div {
    display: flex;
    gap: 16px;
  }
`;
