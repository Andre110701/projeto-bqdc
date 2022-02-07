import styled, { css } from "styled-components"

export const Container = styled.div`
${()=>css`
display:flex;
>span{text-align:center;color:white;font-size:12px;margin-bottom:16px;}
justify-content:center;
flex-direction:column;
background:#02498C;;
`}`
export const Content = styled.div`
${()=>css`
display:flex;
width: 100%;
padding:64px 80px 16px;
justify-content:space-between;
`}`
export const LogoBqdc = styled.div`
${()=>css`
width:auto;
height:auto;
`}`
export const FooterLinks = styled.div`
${()=>css`
display:flex;
.Links{
  display:flex;
  flex-direction:column;
  margin-left:20%;
  >a{font-size:16px;color:white;margin-bottom:20px;}
}
`}`
export const SocialMedias = styled.div`
${()=>css`
  >span{color:white;font-size:16px;font-weight:700;}
  .images{
    display:flex;
    gap:4rem;
    margin-top:15px;
  }
`}`

export const Separador = styled.div`
${() => css`
    display: flex;
    padding: 0px 30px 
    flex-direction: row;
    align-items: center;
    width: 100%;
    .separator {
      width: 100%;
      border-bottom: 1px solid rgb(255, 193, 45);
    }
    .up-icon {
      display: flex;
      width: 40px;
      margin: 0 1rem;
      cursor: pointer;
`}
`
