import styled, { css } from "styled-components"

export const Paragraph = styled.p`
${({type})=>css`
font-weight: ${type === "bold" ? "bold" : "auto"};`}
`
export const Title = styled('h1').attrs(props => ({as: props.variant}))`
`
