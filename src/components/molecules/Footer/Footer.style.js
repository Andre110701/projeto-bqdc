import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #02498c;
    width: 100%;
    > span {
      text-align: center;
      color: white;
      font-size: 12px;  
      margin-bottom: 16px;
    }
  `}
`;
export const Content = styled.div`
  ${() => css`
    display: flex;
    width: 100%;
    max-width: 1920px;
    padding: 64px 80px 16px;
    justify-content: space-between;
    align-items: flex-start;
  `}
  @media(min-width:768px) and (max-width:1169px) {
    padding: 64px 48px 16px;
  }
  @media (max-width: 767px) {
    flex-wrap: wrap;
    padding: 0px 24px 16px;
  }
`;
export const LogoBqdc = styled.div`
  ${() => css`
    width: auto;
    height: auto;
    @media (max-width: 767px) {
        margin: 48px 0px;
      }
  `}
`;
export const FooterLinks = styled.div`
  ${() => css`
    display: flex;
    @media (max-width: 767px) {
      flex-wrap: wrap;
     
    }
    .Links {
      display: flex;
      flex-direction: column;
      margin-left: 20%;
      @media (min-width: 768px) and (max-width: 1169px) {
        margin-left: 5%;
      }
      @media (max-width: 767px) {
        margin-left : 0;
        margin-right: 5%;
        margin-bottom: 10%;
      }
      > a {
        font-size: 16px;
        color: white;
        margin-bottom: 24px;
      }
    }
  `}
`;
export const SocialMedias = styled.div`
  ${() => css`
    > span {
      color: white;
      font-size: 16px;
      font-weight: 700;
    }
    .images {
      display: flex;
      gap: 4rem;
      margin-top: 15px;
    }
  `}
`;

export const Separador = styled.div`
  ${() => css`
    display: flex;
    padding: 0px 30px 
    flex-direction: row;
    align-items: center;
    width: 100%;
    .separator {
      width: 100%;
      border-bottom: 1px solid rgb(255, 193, 45);
    }
    .up-icon {
      display: flex;
      width: 40px;
      margin: 0 1rem;
      cursor: pointer;
`}
`;
