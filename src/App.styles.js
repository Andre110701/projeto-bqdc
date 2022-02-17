import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme, mobile, tablet }) => css`
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items:center;
  `}
`;
export const Content = styled.div`
  ${({ theme, mobile, tablet }) => css`
    display: flex;
    width: 100%;
    justify-content: center;
    
  `}
`;
export const Midia = styled.div`
  ${({ theme, tablet }) => css`
    margin: 24px 96px;
    max-width: 1920px;
    
    @media (min-width: 768px) and (max-width: 1169px) {
      margin: 24px 48px;
    }
    @media (max-width: 767px) {
      margin: 24px;
    }
  `}
`;

export const Video = styled.div`
  ${({ theme }) => css`
    margin-bottom: 24px;
    position: relative;
    width: 100%;
    max-width: 1920px;
    display: flex;
    justify-content: center;
    min-height: 600px;
    > iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    @media (max-width: 767px) {
      min-height: 180px;
    }
  `}
`;
