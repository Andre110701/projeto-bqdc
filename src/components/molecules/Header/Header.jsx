import * as S from '../Header/Header.style'
import { Button } from '../../atoms/buttons/buttons'
import { Paragraph } from '../../atoms/typography/typography'
import { Logo } from '../../atoms/Images/images.styles'
import Logos from '../../../assets/bqdc-logo.svg'

const Header = (theme) => {
  return (
    <S.Container>
      <Logo src={Logos} alt='Brasil que da certo' />
      <S.Navigation>
        <S.Content><Paragraph size="16px" type="bold" color="primary">Quem somos</Paragraph></S.Content>
        <S.Content><Paragraph size="16px" type="bold" color="primary">Parceiros</Paragraph></S.Content>
        <S.Content><Paragraph size="16px" type="bold" color="primary">Aprendizado</Paragraph></S.Content>
        <S.Content><Paragraph size="16px" type="bold" color="primary">Benefícios</Paragraph></S.Content>
      </S.Navigation>
      <S.Buttons>
        <Button variant="contained" color="primary">Assinar</Button>
        <Button variant="outlined" color="primary">Entrar</Button>
      </S.Buttons>
    </S.Container>
  )
}
export default Header

