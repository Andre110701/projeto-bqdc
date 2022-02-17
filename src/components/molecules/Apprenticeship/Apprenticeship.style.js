import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
  display: flex;
  width: 100vw;
  position: relative;
  justify-content: center;
  `}
`;
export const Content = styled.div`
  ${() => css`
    width: 100%;
    max-width: 1920px;
    margin: 0px 60px;
    position: relative;
    background: #ebf0f6;
    display: flex;
    padding: 48px 20px 0px 20px;
    flex-wrap: wrap;
    border-radius: 24px;
    flex-direction: column;
    

    @media (max-width: 767px) {
      margin: 0px 24px;
      padding: 20px 20px;
    }
  `}
`;
export const Header = styled.div`
  ${() => css`
    margin-bottom: 80px;
    width: 100%;

    @media (max-width: 767px) {
      margin-bottom: 16px;
    }
  `}
`;
export const Matter = styled.div`
  ${() => css`
  align-items: center;
      @media(min-width:768px) and (max-width:1169px){
      width: 250px;
      padding-bottom: 70px;
      }
    @media(max-width:767px){
      width:250px;
      height: 300px;
      padding: 0px 5px 12px 0px;
    }
  }
  `}
`;
export const SmallHeader = styled.div`
  ${() => css`
    white-space: nowrap;
    padding-left: 50px;

    @media (max-width: 767px) {
      padding-left: 0;
    }
    @media (min-width: 768px) and (max-width: 1169px) {
      padding-left: 0;
    }
  `}
`;
export const Midia = styled.div`
  ${() => css`
    width: 100%;
    > img {
      width: 50%;
      padding-bottom: 120px;
      width: 435px;
      @media (min-width: 768px) and (max-width: 1169px) {
        width: 300px;
        padding-bottom: 70px;
      }
      @media (max-width: 767px) {
        width: 200px;
        padding-bottom: 0px;
      }
    }
  `}
`;

export const SideBar = styled.div`
  ${({ tablet }) => css`
    > img {
      margin-bottom: 20px;
      @media(max-width:767px){
        width:100px;
        margin-bottom: 10px;
      }
    }
    display: flex;
    padding: 24px 0px 0px 24px;
    align-items: start;
    flex-wrap: wrap;
    background: linear-gradient(260.99deg, #045ca8 0%, #023c72 100%);
    flex-direction: column;
    transform: translateY(-50%);
    position: absolute;
    left: 60%;
    right: -60px;
    top: 65%; 
    border-radius: 16px 0px 0px 16px;

    @media(min-width:768px) and (max-width:1169px){
      top: 70%;
      }   
    @media(max-width:767px){
      position: static;
      padding: 24px;
      border-radius: 16px;  
      align-items: center;
      margin-top: 100px;
      margin-right: 10px;
      
    `}
`;
/*eu te amo, de sua bebezinha*/
