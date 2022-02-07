import styled, { css } from "styled-components"

export const Container = styled.div`
${()=>css`
position:relative;
background: #EBF0F6;
display: flex;
padding: 48px 20px 0px 20px;
flex-wrap: wrap;
width: 100%;
max-width: 1920px;  
border-radius: 24px;
flex-direction: column;
`}`
export const Content = styled.div`
${() => css`
>img{width:435px};
width: 50%;
padding-bottom: 120px;
`}
`
export const Header = styled.div`
${() => css`
margin-bottom: 80px;
width:50%;
`}
`
export const Hidden = styled.div`
${() => css`
padding-left:50px;
`}
`
export const SideBar = styled.div`
${() => css`
>img{margin-bottom:20px}
align-items: start;
display: flex;
flex-direction:column;
position:absolute;
right:-80px;
top: 45%; 
width:50%;
flex-wrap:wrap;
background: linear-gradient(260.99deg,#045ca8 0%,#023c72 100%);
border-radius: 24px 0px 0px 24px;
padding:24px;
`}
`