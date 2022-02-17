import styled, { css } from "styled-components";

export const Paragraph = styled.p`
  ${({ type, color, size, margin, mobile, tablet}) => css`
    font-weight: ${type === "bold" ? "bold" : "auto"};
    font-size: ${size === "16px" ? "16px" : "14px"};
    color: ${color === "primary" ? "#02407A" : "#5C5C5C"};
    margin-top: ${margin === "3rem" ? "3rem" : "auto"};
    font-family: "Source Sans Pro", sans-serif;
    white-space:wrap;
    cursor: pointer;
    >a{
      color: #02407A;
      text-decoration: none;
    }
    ${mobile === true && css`
    @media(max-width:768px){
      font-size: ${size === "16px" ? "13px" : "11px"};
    }
    `}
    ${tablet === true && css`
    @media(min-width:768px) and (max-width:1169px){
      font-size: 16px;
    }
    `}
  `}
`;
export const MenuParagraph = styled.p`
  ${({type, color, size, margin, mobile, tablet}) => css`
  font-weight: bold;
    font-size: 20px;
    color: rgb(255, 193, 45);
    font-family: "Source Sans Pro", sans-serif;
    cursor: pointer;
    >a{
      color: rgb(255, 193, 45);
      text-decoration: none;
    }
  `}
`;

export const Title = styled.h2`
  ${({ color, size, thickness }) => css`
    font-weight: 900;
    font-size: 48px;
    text-align: left;
    color: ${color === "primary" ? "#02498C" : "#5C5C5C"};
    @media (max-width: 726px) {
      font-size: ${size === "big" ? "48px" : "30px"};
    }
    @media(min-width:768px) and (max-width:1169px){
      font-size: 32px;
    }
  `}
`;

export const Subtitle = styled.h2`
  ${({ color, size, thickness, mobile }) => css`
    font-size: 32px;
    font-weight: ${thickness === "medium" ? "300" : "900"};
    color: ${color === "primary" ? "#02498C" : "#5C5C5C"};
    ${mobile === true && css`
    @media(max-width:767px){
      font-size:16px;
      font-weight:400;
    }
    `}
  `}
`;

export const SmallTitle = styled.h3`
  ${({ color, size, thickness, variant, mobile }) => css`
    margin-bottom: 24px;
    font-size: ${size === "24px" ? "24px" : "16px"};
    font-weight: ${thickness === "medium" ? "300" : "900"};
    color: ${variant === "escuro"
      ? color === "primary"
        ? "#02498C"
        : "none"
      : color === "primary"
      ? "white"
      : "yellow"};
      ${mobile === true && css`
    @media(max-width:767px){
    font-size:10px;
    margin-bottom: 12px;
    }
    @media(min-width:768px) and (max-width:1169px){
      padding: 0;
    }
    `}
  `}
`;
