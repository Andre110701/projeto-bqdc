import * as S from "./buttons.styles";

export const Button = ({ color, variant, children, margin }) => {
  return (
    <S.Button variant={variant} color={color} margin={margin}>
      {children} 
    </S.Button>
  );
};

export const MenuButton = ({onClick, isOpen}) => {
  console.log(onClick);
  return <S.MenuButton onClick={onClick}/>
};
  
export const CloseButton = ({onClick, isOpen}) => {
  console.log(onClick);
  return <S.CloseButton onClick={onClick}/>
};