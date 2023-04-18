import styled from "styled-components";
import ImageLogo from "/images/logo.png";
import { useState } from "react";
function Header() {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <HeaderContainer activeMenu={activeMenu} className="container">
      <h2>
        <a href="/">
          <img src={ImageLogo} alt="Icone traveller company" /> TRAVELLER
          COMPANY
        </a>
      </h2>
      <button className="open" onClick={() => setActiveMenu(true)}>
        Abrir
      </button>

      <nav>
        <button className="close" onClick={() => setActiveMenu(false)}>
          Fechar
        </button>
        <ul>
          <li>
            <a href="">Clube Traveller</a>
          </li>
          <li>
            <a href="">Sobre nós</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}

export default Header;

interface HeaderActive {
  activeMenu: boolean;
}
export const HeaderContainer = styled.header<HeaderActive>`
  position: absolute;
  overflow-x: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 26px;
  z-index: 100;

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    color: #ffffff;

    a {
      gap: 14px;

      align-items: center;
      display: flex;
      color: inherit;
      text-decoration: none;
      margin: 0;
      padding: 0;
    }
  }
  ul {
    list-style: none;
    display: flex;
    gap: 40px;
    a {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: #ffffff;
      text-decoration: none;
    }
  }
  .close,
  .open {
    display: none;
  }
  @media (max-width: 768px) {
    height: 100vh;
    align-items: baseline;

    .close {
      display: block;
      position: absolute;
      top: 20px;
      right: 20px;
    }
    .open {
      display: block;
      position: absolute;
      top: 20px;
      right: 20px;
    }
    z-index: ${(props) => (props.activeMenu ? "101" : "10")};

    h2 {
      font-size: 1rem;
    }
    nav {
      position: absolute;
      left: ${(props) => (props.activeMenu ? "0%" : "100%")};
      top: 0;
      background: linear-gradient(90deg, #7b80fc 16.47%, #ff00ac 94.1%);
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      ul {
        flex-direction: column;
        align-items: center;
      }

      a {
        font-size: 2rem;
      }
    }
  }
`;
