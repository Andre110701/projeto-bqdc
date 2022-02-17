import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
  display: flex;
    width: 100%;
    justify-content: center;
    }
  `}
`;
export const BigContent = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    padding: 80px 60px;
    width:100%;
    max-width: 1920px;
    justify-content: center;
    align-items: center;
    @media(min-width:768px) and (max-width:1169px){
      padding: 8rem 0;
    }
    @media(max-width:767px){ 
      padding: 80px 30px;
    }
  `}
`;
export const Header = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;
export const Content = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 24px;
    width: 100%;
    @media(min-width:768px) and (max-width:1169px){
      padding: 0px 48px;
    }
    @media(max-width:767px){ 
      width: 100%;
      overflow-x: auto;
      
      
    }
  `}
`;
export const Wrapper = styled.div`
 ${() => css`
 display: flex;
 width: 100%;
 gap: 2rem;
  `}
`;
export const Cards = styled.div`
  ${() => css`
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 100%;
    padding: 40px 80px;
    display: inline-block;
    display: flex;
    box-shadow: 0px 2px 4px rgb(0 0 0 / 16%);
    border-radius: 8px;
    border-top: 8px solid #02498c;
    @media(min-width:768px) and (max-width:1169px){
      padding: 40px 16px;
    }
    @media(max-width:767px){  
      padding: 40px 16px;
      width: 100%;
      align-items: center;
      flex: none;
    }
  `}
`;
export const Text = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 24px 0px 48px 0px;
  `}
`;
