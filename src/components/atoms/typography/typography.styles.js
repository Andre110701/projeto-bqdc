import styled, { css } from "styled-components"

export const Paragraph = styled.p`
${({type})=>css`
font-weight: ${type === "bold" ? "bold" : "auto"};
font-size: ${type === "16px" ? "16px" : "16px"};
cursor: pointer;
color: #02407A;
`}`

export const Title = styled('h1').attrs(props => ({as: props.variant}))`
`
