import { Title, Subtitle, SmallTitle, Paragraph } from '../../atoms/typography/typography.styles';
import {Button} from '../../atoms/buttons/buttons'

import * as S from '../Benefits/Benefits.style';

const Benefits = (theme) => {
  return(
    
    <S.Container>

      <S.Header>
     <Title color="primary">Benefícios</Title>
     <Subtitle thickness="medium">Escolha o plano perfeito para você:</Subtitle>
     </S.Header>

     <S.Content>

    <S.Cards>

      <SmallTitle size='24px' variant='escuro' color='primary'>Plano Mensal</SmallTitle>
      <S.Text>
      <Title>34,90</Title>
      <Paragraph>Renovação Mensal</Paragraph>
      </S.Text>
      <Button variant="outlined">Assinar Plano</Button>

    </S.Cards>

    <S.Cards>
      <SmallTitle size='24px' variant='escuro' color='primary'>Plano Anual</SmallTitle>
      <S.Text>
      <Title>24,90</Title>
      <Paragraph>Renovação anual<br></br>1x R$298,80</Paragraph>
      </S.Text>
      <Button variant="contained">Assinar Plano</Button>

    </S.Cards>

    <S.Cards>
      
      <SmallTitle size='24px' variant='escuro' color='primary'>Plano Semestral</SmallTitle>
      <S.Text>
      <Title>29,90</Title>
      <Paragraph>Renovação a cada 6 meses<br></br>1x R$179,40</Paragraph>
      </S.Text>
      <Button variant="outlined">Assinar Plano</Button>

      </S.Cards>
    </S.Content>

    </S.Container>
  )  
}
export default Benefits