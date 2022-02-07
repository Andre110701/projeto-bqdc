import styled, { css } from "styled-components"

export const Container = styled.div`
${()=>css`
flex-direction: column;
display: flex;
padding: 80px 20px 0px;
align-items: center;
width: 100%;
`}`
export const Content = styled.div`
${() => css`
display: flex;
flex-wrap: wrap;
gap: 1rem;
>img{width:300px;}
flex-direction: row;
height: 100%;
width: 100%;
justify-content: center;
padding-bottom: 80px;
`}
`
export const Header = styled.div`
${() => css`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 24px;
`}
`