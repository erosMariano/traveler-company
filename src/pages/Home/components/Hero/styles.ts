import styled from "styled-components";



export const ContainerHero = styled.main`
  padding-top: 113px;
  background: linear-gradient(90deg, #7b80fc 16.47%, #ff00ac 94.1%);
  padding-bottom: 80px;
  position: relative;

  .container {
    display: flex;
    justify-content: space-between;
    z-index: 10;
    position: relative;

    @media (max-width: 1000px) {
      flex-direction: column;
    }
  }

  @media (max-width: 1000px) {
    .image-hero {
      width: 100%;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
      display: block;
      margin-top: 40px;
    }
  }
  .overlay {
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: -webkit-fill-available;
    z-index: 1;
    img {
      width: 100%;
      height: -webkit-fill-available;
    }
  }
`;


export const ContainerText = styled.div`
  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #9a3ceb;
    background: #ffffff;
    padding: 1px 4px;
    border-radius: 2px;
  }

  h1 {
    margin-top: 25px;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    color: #ffffff;
    max-width: 518px;
  }

  a {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    background: #00f076;
    border-radius: 2px;

    width: 290px;
    height: 48px;

    margin-top: 25px;
  }
  @media (max-width: 1000px) {
    h1,
    a {
      width: 100%;
    }

    h1 {
      font-size: 2rem;
      line-height: initial;
    }

    a{
      font-size: 1rem;
    }
  }
`;
