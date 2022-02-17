import {
  Title,
  Subtitle,
  SmallTitle,
} from "../../atoms/typography/typography.styles";
import { Images } from "../../atoms/Images/images";
import allDevice from "../../../assets/allDevice.svg";
import appStore from "../../../assets/appStore.svg";
import playStore from "../../../assets/playStore.svg";
/* import {Hidden} from "../../Hidden/Hidden" */

import * as S from "../Apprenticeship/Apprenticeship.style";

function Apprenticeship(mobile, tablet){
  return (
    
    <S.Container id='Apprenticeship'>
    <S.Content>
      <S.Header>
        <Title color="primary">Aprendizado</Title>
        <Subtitle mobile color="secondary" thickness="large">
          Aprenda com os melhores do Brasil através da plataforma ou app.
        </Subtitle>
      </S.Header>
      <S.Matter >
        <S.SmallHeader tablet>
          <SmallTitle mobile variant="escuro" color="secondary">
            Acessível de qualquer navegador - Baixe agora.
          </SmallTitle>
        </S.SmallHeader>
        <S.Midia>
        <Images border="none" src={allDevice} alt="allDevice" />
        </S.Midia>
        <S.SideBar tablet>
        <S.SmallHeader tablet>
          <SmallTitle mobile variant="claro" color="primary">
            Disponível em breve para download em :
          </SmallTitle>
        </S.SmallHeader>
        <Images border="none" src={playStore} alt="allDevice" />
        <Images border="none" src={appStore} alt="allDevice" />
      </S.SideBar>
      </S.Matter>
    </S.Content>
    </S.Container>
    



  );
};
export default Apprenticeship;
















































