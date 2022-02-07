import { Images } from '../../atoms/Images/images.styles'
import Folder2 from '../../../assets/aboutUsDesktop.png'
import {Title,Paragraph} from '../../atoms/typography/typography'
import {Button} from '../../atoms/buttons/buttons'

import * as S from '../AboutUs/AboutUs.style'

const AboutUs = (theme) => {
  return(
    <S.Container>
     <S.Content>
        <Title color="primary">Quem Somos</Title>
        <Paragraph type="bold" size="16px" color="#5C5C5C" margin="3rem">
          Somos uma plataforma que busca transformar<br></br> pessoas através da história de nossos parceiros. Com<br></br> diversas mudanças e dificuldades ao longo do tempo,<br></br> a jornada do empreendedorismo é desafiadora.<br></br> Queremos te apoiar nessa Jornada!
        </Paragraph>
        <Paragraph size="16px" color="#5C5C5C" margin="3rem">
        Sabemos que manter um negócio próprio é muito<br></br> desafiador, por isso queremos ajudar em seu<br></br> crescimento pessoal e com isso colaborar para que o<br></br> Brasil seja uma grande potência. Somos o Brasil Que Dá<br></br> Certo.
        </Paragraph>
        <S.Buttons>
        <Button variant="outlined" color="secondary">Quero Assinar</Button>
        </S.Buttons>
        </S.Content>
      <Images src={Folder2} alt='Mulher lendo pc'/>
    </S.Container>
  )
} 
export default AboutUs