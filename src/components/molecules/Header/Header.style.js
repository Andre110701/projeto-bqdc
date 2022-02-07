import styled, { css } from "styled-components"

export const Container = styled.div`
${()=>css`
padding: 24px 96px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
display: flex;
justify-content: space-between;
align-items:center;
position: relative;   
width: 100%;
`}`

export const Navigation = styled.ul`
${()=>css`
display: flex;
justify-content: space-between;
list-style-type: none;
align-items: center;
position: relative;
padding : 0;
`}`
export const Content = styled.li`
${()=>css`
display: flex;
margin: 0px 32px 0px 0px;

`}`

export const Buttons = styled.div`
${()=>css`
display: flex;
height:max-content;
`}`