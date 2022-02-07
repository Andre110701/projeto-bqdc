import styled, { css } from "styled-components"

export const Images = styled.img`
${({border, type})=>css`
border-radius: ${border === "border" ? "24px" : "none"};
`}`

export const Logo = styled.img`
${({theme,size})=>css`
height: ${size === 'large' ? '80px' : '56px'};

`}`