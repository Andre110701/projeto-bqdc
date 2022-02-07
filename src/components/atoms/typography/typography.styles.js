import styled, { css } from "styled-components"

export const Paragraph = styled.p`
${({type,color,size,margin})=>css`
font-weight: ${type === "bold" ? "bold" : "auto"};
font-size: ${size === "16px" ? "16px" : "14px"};
color:${color === "primary" ? "#02407A" : "#5C5C5C"};
margin-top: ${margin === "3rem" ? "3rem" : "auto"};
cursor: pointer;
`}`

export const Title = styled.h2`
${({color, size, thickness})=>css`
font-weight: 900;
font-size: 48px;
text-align: left;
color: ${color === "primary" ? "#02498C" : "#5C5C5C"};
`}
`

export const Subtitle = styled.h2`
${({color, size, thickness})=>css`  
font-size: 32px;
font-weight: ${thickness === "medium" ? "300" : "900"};
color: ${color === "primary" ? "#02498C" : "#5C5C5C"};
`}
`

export const SmallTitle = styled.h3`  
${({color, size, thickness, variant})=>css`
margin-bottom:24px;  
font-size: ${size === "24px" ? "24px" : "16px"};
font-weight: ${thickness === "medium" ? "300" : "900"};
color: ${variant === "escuro" ?
             color === "primary" ?
              "#02498C" : "none" :
            color === "primary" ? 
                  "white" 
                : "yellow"};
`}
`
