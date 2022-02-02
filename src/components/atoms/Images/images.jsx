import * as S from "./images.styles"

export const Images = (theme) => {
  return <S.Images theme={theme} src={theme.src} alt={theme.alt}/>
} 

export const Logo = (theme) => {
  return <S.Logo theme={theme} src={theme.src} alt={theme.alt}/>
} 