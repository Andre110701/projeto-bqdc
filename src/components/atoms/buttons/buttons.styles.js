import styled, { css } from "styled-components"

export const Button = styled.button`
${({ theme, variant, color }) => css`
margin-right: 16px;
border-radius: 16px;
font-size: 16px;
font-weight: 800;
color: ${ variant === "contained" ? 
                  color === "primary" ?
                   "#02407A" : "white" : 
            color === 'primary' ?
                  "rgb(255, 193, 45)" 
                  : "#02407A"} ;
cursor: pointer;
background:${variant === "outlined" ? "none" : color=== "primary" ? "rgb(255, 193, 45)" : "#02407A"};
padding: 8px 24px;
line-height: 24px;
height: max-content;
border: 1px solid;
border-color: ${variant === "outlined" ? (color === "primary" ? "rgb(255, 193, 45)" : "#02407A") : "transparent"};

`}`