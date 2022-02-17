import { Images } from "../../atoms/Images/images.styles";
import aboutUsDesktop from "../../../assets/aboutUsDesktop.png";
import aboutUs from "../../../assets/aboutUs.png";
import { Title, Paragraph } from "../../atoms/typography/typography";
import { Button } from "../../atoms/buttons/buttons";
import { Hidden } from "../../Hidden/Hidden";

import * as S from "../AboutUs/AboutUs.style";

function AboutUs() {
  return (
    <S.Container mobile id="AboutUs">
      <S.Content>
        <S.Header>
          <Title color="primary"><nobr>Quem Somos</nobr></Title>
          <Paragraph type="bold" size="16px" color="#5C5C5C" margin="3rem">
            Somos uma plataforma que busca transformar pessoas através da
            história de nossos parceiros. Com diversas mudanças e dificuldades
            ao longo do tempo, a jornada do empreendedorismo é desafiadora.
            Queremos te apoiar nessa Jornada!
          </Paragraph>
          <Paragraph size="16px" color="#5C5C5C" margin="3rem">
            Sabemos que manter um negócio próprio é muito desafiador, por isso
            queremos ajudar em seu crescimento pessoal e com isso colaborar para
            que o Brasil seja uma grande potência. Somos o Brasil Que Dá Certo.
          </Paragraph>
          <S.Buttons>
            <Button variant="contained" color ="secondary">
              QUERO ASSINAR
            </Button>
          </S.Buttons>
        </S.Header>
        <S.Midia>
          <Hidden mobile tablet>
            <Images src={aboutUsDesktop} alt="Mulher lendo pc" />
          </Hidden>
          <Hidden descktop mobile>
            <Images src={aboutUs} alt="Mulher lendo pc" />
          </Hidden>
        </S.Midia>
      </S.Content>
    </S.Container>
  );
}
export default AboutUs;
