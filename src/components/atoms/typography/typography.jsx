import * as S from "./typography.styles"

export const Paragraph = ({type,children,color,size,margin}) =>{
   console.log(type);
   return (<S.Paragraph margin={margin} size={size} type={type} color={color}>{children}</S.Paragraph>)
}

export const Title = (props,color) => {
   return <S.Title color={props.color} variant={props.variant}>{props.children}</S.Title>
}

export const Subtitle = ({color, size, thickness}) =>{
   return(<S.Subtitle color={color} size={size} thickness={thickness}></S.Subtitle>)
}

export const SmallTitle = ({color, size, thickness, variant}) =>{
   return(<S.Subtitle variant={variant} color={color} size={size} thickness={thickness}></S.Subtitle>)
}

