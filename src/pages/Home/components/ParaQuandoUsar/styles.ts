import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 25px;
  padding-top: 80px;
  padding-bottom: 80px;
  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 60px;
    color: #3c3c3c;
    margin-bottom: 40px;
  }

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #3c3c3c;
    margin-bottom: 10px;
  }

  .appsLojas {
    display: flex;
    gap: 12px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    padding-top: 0;
    h2 {
      font-size: 1.5rem;
      line-height: normal;
      margin-bottom: 20px;
    }
    .image-destaque {
      display: block;
      margin: 0 auto;
      
      img{
        width: 100%;
      }
    }

    .appsLojas{
      justify-content: space-between;
      max-width: 500px;
      margin: 0 auto;
    }
  }
`;
