import styled, { css } from "styled-components";

export const BigContainer = styled.div`
  ${() => css`
    display: flex;
    padding: 0px 60px;
    width: 100%;
    margin-bottom: 40px;
    justify-content: center;
    @media (max-width: 767px) {
      padding-top: 30px;
    }
      @media(min-width:768px) and (max-width:1169px){
        padding: 0px 48px;
    }
    @media(max-width:767px){
      padding: 0px 24px;
    } 
  `}
`;

export const Container = styled.div`
  ${() => css`
    flex-direction: column;
    display: flex;
    align-self: center;
    width: 100%;
    max-width: 1920px;
    @media (max-width: 767px) {
      padding-top: 30px;
    }
  `}
`;
export const Content = styled.div`
  ${() => css`
    /*  display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    > img {
      width: 300px;

      @media(min-width:768px) and (max-width:1169px){
        width:200px;
    }

      @media(max-width:767px){
      width:115px;
    }
    }
    flex-direction: row;
    height: 100%;
    width: 100%;
    justify-content: center;
    padding-bottom: 80px;
    @media(max-width:767px){
      padding-bottom: 30px;
    } */

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    max-width:1920px;
    >img{
      width: 400px;
    }
  `}
`;
export const Header = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
  `}
`;
export const Midia = styled.div`
  ${() => css`
    object-fit: cover;
    display: flex;
    flex-direction: column;
    width: 340px;
    @media(min-width:768px) and (max-width:1169px){
      width: 300px;
    }
    @media(max-width:767px){
      width:130px;
    } 
  `}
`;
