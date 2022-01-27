import styled, { css } from "styled-components"

export const Images = styled.img`
${({theme})=>css`
background: ${theme === "black" ? "black" : "auto"};`}`