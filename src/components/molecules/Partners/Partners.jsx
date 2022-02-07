import { Images } from '../../atoms/Images/images';
import { Title, Subtitle } from '../../atoms/typography/typography.styles';

import augustoCury from '../../../assets/Partners/augusto-cury.png'
import geraldoRufino from '../../../assets/Partners/geraldo-rufino.png'
import luizaTrajano from '../../../assets/Partners/luiza-trajano.png'
import nelsonWiliams from '../../../assets/Partners/nelson-wiliams.png'

import * as S from '../Partners/Partners.style';

const Partners = (theme) => {
  return(
    
    <S.Container>
      <S.Header>
     <Title color="primary">Parceiros</Title>
     <Subtitle thickness="medium">Empreendedores de sucesso para guiar seu caminho.</Subtitle>
     </S.Header>
    <S.Content>
      <Images border="border" src={augustoCury} alt='augusto cury'/>
      <Images border='border' src={geraldoRufino} alt='geraldo Rufino'/>
      <Images border='border' src={luizaTrajano} alt='luiza Trajano'/>
      <Images border='border' src={nelsonWiliams} alt='nelson Wiliams'/>
    </S.Content>  
    </S.Container>
  )  
}
export default Partners