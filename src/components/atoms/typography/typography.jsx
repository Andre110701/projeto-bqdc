import * as S from "./typography.styles"

export const Paragraph = ({type,children}) =>{
   console.log(type);
   return (<S.Paragraph type={type}>{children}</S.Paragraph>)
}

export const Title = (props) => {
   return <S.Title variant={props.variant}>{props.children}</S.Title>
}

