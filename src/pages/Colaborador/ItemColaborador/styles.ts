import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  text-decoration: none;
  border-bottom: 1px solid #555555;
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent
  ;
  border-radius: 15px;
  padding: 18px;
  transition: all .3s;
  &:hover{
    border-top: 1px solid #555555;
    border-left: 1px solid #555555;
  border-right: 1px solid #555555
  }
  .iconFlutuante {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .imgIcon {
    margin-right: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #1d1d1d;
    margin-bottom: 5px;
  }

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #666666;
  }

  @media(max-width: 768px){
    .imgIcon{
      margin-top: 5px;
      img{
        width: 40px;
      }
    }
    align-items: flex-start;
    h2{
      font-size: 20px;
    }
    p{
      font-size: 16px;
    }
  }
`;
