import styled, { css } from "styled-components";
import { IoReorderThree } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export const Button = styled.button`
  ${({ theme, variant, color, margin }) => css`
    margin-right: 16px;
    margin-bottom: ${margin === "30px" ? "30px" : "auto"};
    border-radius: 16px;
    font-size: 16px;
    font-weight: 700;
    color: ${variant === "contained"
      ? color === "primary"
        ? "#02407A"
        : "white"
      : color === "primary"
      ? "rgb(255, 193, 45)"
      : "#02407A"};
    cursor: pointer;
    background: ${variant === "outlined"
      ? "none"
      : color === "primary"
      ? "rgb(255, 193, 45)"
      : "#02407A"};
    padding: 12px 24px;
    line-height: 24px;
    height: max-content;
    border: 1px solid;
    border-color: ${variant === "outlined"
      ? color === "primary"
        ? "rgb(255, 193, 45)"
        : "#02407A"
      : "transparent"};
  `}
`;

export const MenuButton = styled(IoReorderThree)`
  ${({ props }) => css` 
    font-size: 32px;
    border-radius: 7px;
    color: #02498c;
    cursor: pointer;
    @media (min-width: 1170px) {
      display: none;
    }
  `}
`;
export const CloseButton = styled(IoClose)`
  ${({ props }) => css`
  position: absolute;
  right:3%;
  top:2%;
    font-size: 32px;
    border-radius: 7px;
    color: rgb(255, 193, 45);
    cursor: pointer;
  `}
`;
