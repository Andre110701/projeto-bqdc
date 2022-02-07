import * as S from "./images.styles"

export const Images = (type) => {
  return <S.Images border={type.border} type={type} src={type.src} alt={type.alt} />
}

export const Logo = (theme,size) => {
  return <S.Logo size={size} theme={theme} src={theme.src} alt={theme.alt} />
} 