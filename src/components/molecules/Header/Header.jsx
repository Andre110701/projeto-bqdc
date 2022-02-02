import * as S from '../Header/Header.style'
import {Button} from '../../atoms/buttons/buttons'
import {Paragraph} from '../../atoms/typography/typography'
import { Logo } from '../../atoms/Images/images.styles'
import Logos from '../../../assets/bqdc-logo.svg'

const Header = (theme) => {
return(
  <S.Container>
    <Logo src={Logos} alt='Brasil que da certo'/>
    <S.Navigation>
    <S.Content><Paragraph>Quem somos</Paragraph></S.Content>
    <S.Content><Paragraph>Parceiros</Paragraph></S.Content>
    <S.Content><Paragraph>Aprendizado</Paragraph></S.Content>
    <S.Content><Paragraph type="16px">Benefícios</Paragraph></S.Content>
    </S.Navigation>
    <S.Buttons>
   <Button>Assinar</Button>
   <Button>Entrar</Button>
   </S.Buttons>
  </S.Container>
)
}
export default Header

