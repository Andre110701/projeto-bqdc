import { Images } from '../../atoms/Images/images.styles'
import Folder2 from '../../../assets/aboutUsDesktop.png'

import * as S from '../AboutUs/AboutUs.style'

const AboutUs = (theme) => {
  return(
    <S.Container>
      <Images src={Folder2} alt='Mulher lendo livro'/>
    </S.Container>
  )
}
export default AboutUs