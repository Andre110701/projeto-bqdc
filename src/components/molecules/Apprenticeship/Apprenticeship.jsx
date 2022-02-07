import { Title, Subtitle, SmallTitle } from '../../atoms/typography/typography.styles';
import {Images} from '../../atoms/Images/images'
import allDevice from '../../../assets/allDevice.svg'
import appStore from '../../../assets/appStore.svg'
import playStore from '../../../assets/playStore.svg'

import * as S from '../Apprenticeship/Apprenticeship.style';

const Apprenticeship = (theme) => {
  return(
    
    <S.Container>
      <S.Header>
     <Title color="primary">Aprendizado</Title>
     <Subtitle color="secondary" thickness="large">Aprenda com os melhores do Brasil<br/>através da plataforma ou app.</Subtitle>
     </S.Header>
    <S.Content>
      <S.Hidden>
      <SmallTitle variant='escuro' color='secondary'>Acessível de qualquer navegador - Baixe agora.</SmallTitle>
      </S.Hidden>
      <Images border="none" src={allDevice} alt="allDevice"/>
    </S.Content>
    <S.SideBar >
    <S.Hidden>
    <SmallTitle variant='claro'color='primary'>Disponível em breve para download em :</SmallTitle>
    </S.Hidden>
    <Images border="none" src={playStore} alt="allDevice"/>
    <Images border="none" src={appStore} alt="allDevice"/>
      </S.SideBar> 
    </S.Container>
  )  
}
export default Apprenticeship