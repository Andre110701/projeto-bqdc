import styled, { css } from "styled-components";

export const Container = styled.div`
  ${(mobile) => css`
    display: flex;
    justify-content: center;
    margin:72px 96px;
    @media(min-width:768px) and (max-width:1169px){
      margin:0px 48px ;
    } 
    @media(max-width:768px){
      margin:0px;
    }
    `}
`;

export const Content = styled.div`
  ${() => css`
  display:flex;
  padding:24px;
  align-items: center;
  justify-content: center;
  `}
`;
export const Header = styled.div`
  ${() => css`
    width:30%;
    @media(min-width:768px) and (max-width:1169px){
      width:40%;
    } 
    @media(max-width:767px){
      width:100%;
    }
  `}
`;
export const Midia = styled.div`
  ${() => css`
    
  `}
`;

export const Buttons = styled.div`
  ${() => css`
    margin: 24px 0 48px 0px;
  `}
`;
