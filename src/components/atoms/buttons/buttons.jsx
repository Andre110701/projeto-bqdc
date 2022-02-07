import * as S from "./buttons.styles"


export const Button = ({color,variant,children}) =>{
  return (<S.Button variant={variant} color={color}>{children}</S.Button>)
}
