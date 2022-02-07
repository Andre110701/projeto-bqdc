import styled, { css } from "styled-components"

export const Container = styled.div`
${() => css`
display:flex;
flex-direction:column;
padding:80px 20px; 
`}`

export const Header = styled.div`
${() => css`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`}
`
export const Text = styled.div`
${() => css`
display:flex;
flex-direction:column;
text-align:center;
margin:24px 0px 48px 0px;
`}
`

export const Content = styled.div`
${() => css`
display:flex;
flex-direction:row;
gap:2rem;
margin-top:24px;
`}
`
export const Cards = styled.div`
${() => css`
align-items:center;
text-align:center;
flex-direction:column;
width:100%;
padding:40px 80px;
display:inline-block;
display:flex;
box-shadow:0px 2px 4px rgb(0 0 0 / 16%);
border-radius:8px;
border-top:8px solid #02498C;
`}
`
