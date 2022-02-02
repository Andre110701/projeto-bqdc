import styled, { css } from "styled-components"

export const Button = styled.button`
${({theme})=>css`
margin: 0px 16px 0px 0px;
border-radius: 16px;
font-size: 16px;
font-weight: 700;
color: #02407A; 
cursor: pointer;
background: rgb(255, 193, 45);
padding: 12px 24px 12px 24px;
border: none;
`}`