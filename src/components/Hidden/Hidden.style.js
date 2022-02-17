import styled, { css } from "styled-components";

export const Hidden = styled.div`
  ${({ props, children, mobile, tablet, descktop }) => css`
    > img {
      width: 100%;
      max-height: 80vh;
    }
    ${mobile === true && css`
    @media(max-width:767px){
      display: none;
    }
    `}
    ${tablet === true && css`
    @media(min-width:768px) and (max-width:1169px){
      display:none;
    }
    `}
    ${descktop === true && css`
    @media(min-width:1170px){
      display:none;
    }
    `}
  `}
`;
