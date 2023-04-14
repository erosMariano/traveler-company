import React from "react";
import { useNavigate } from "react-router-dom";
import { AreaLogin, Footer, MainContainer } from "./styles";
import IconAppleStore from "/images/app-store-2.svg";
import IconGoogleStore from "/images/google-play-2.svg";
import Logo from "/images/logo.png";
import SmartPhone from "/images/mockup-cel-login.png";
import PasswordIcon from "/images/password.svg";
import UserIcon from "/images/user.svg";

function Login() {
  const navigate = useNavigate();
  function handleSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("entrei");
    try {
      navigate("/colaborador");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <MainContainer>
      <div>
        <div className="logo">
          <img src={Logo} alt="" />
          <h1>TRAVELLER COMPANY</h1>
        </div>

        <img className="smartPhone" src={SmartPhone} alt="" />
      </div>

      <AreaLogin>
        <h2>Olá, Colaborador!</h2>
        <p>Bem-vindo ao Traveller Company</p>

        <form onSubmit={(e) => handleSubmitForm(e)}>
          <label htmlFor="user">
            <img src={UserIcon} alt="" />

            <input type="text" id="user" placeholder="email@empresa.com.br" />
          </label>

          <label htmlFor="password">
            <img src={PasswordIcon} alt="" />

            <input type="password" id="password" placeholder="Password" />
          </label>

          <button>Entrar</button>
        </form>

        <Footer>
          <p>Baixe agora nosso App:</p>

          <div>
            <img src={IconGoogleStore} alt="" />
            <img src={IconAppleStore} alt="" />
          </div>
        </Footer>
      </AreaLogin>
    </MainContainer>
  );
}

export default Login;
