import styled, { css } from "styled-components"

export const Container = styled.div`
${({ theme }) => css`
padding: 20px 80px 20px 80px;
justify-content: space-around;
>img{width:100%;max-height:80vh};
`}`

export const Video = styled.div`
${({ theme }) => css`
display: flex;
justify-content: center;
padding-top: 80px;
`}`