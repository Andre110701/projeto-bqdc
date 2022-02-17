import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    padding: 12px 24px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 1170px) {
      padding: 24px 96px;
    }
  `}
`;
export const Content = styled.li`
  ${() => css`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width:1920px;
  `}
`;
export const Navigation = styled.ul`
  ${() => css`
    display: flex;
    justify-content: center;
    list-style-type: none;
    align-items: center;
    position: relative;
    padding: 0;
    @media (max-width: 1170px) {
      display: none;
    }
  `}
`;
export const Text = styled.li`
  ${() => css`
    display: flex;
    margin: 0px 32px 0px 0px;
  `}
`;
export const Buttons = styled.div`
  ${() => css`
    display: flex;
    @media (max-width: 1170px) {
      display: none;
    }
  `}
`;
export const Menu = styled.div`
  ${( {isOpen}) => css`
  position: fixed;
  z-index: 1000;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #02407A;
  pointer-events: ${isOpen === true ? "all" : "none"} ;
  opacity:${isOpen === true ? 1 : 0};
  `}
`;
export const MenuNavigation = styled.ul`
  ${() => css`
  margin-top:60px ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    align-items: center;
    position: relative;
    >a{
      text-decoration: none;
      color:rgb(255, 193, 45) ;
    }
  `}
`;
export const MenuText = styled.li`
  ${() => css`
    display: flex;
    margin: 30px 0px;
  `}`;
