import * as S from "./App.styles"

import Header from './components/molecules/Header/Header';
import AboutUs from './components/molecules/AboutUs/AboutUs';
import Banner from './assets/difundirBanner.png';
import {Images} from './components/atoms/Images/images';
import  GlobalStyle from './styles/globalStyle' ;
import Partners from './components/molecules/Partners/Partners';
import Apprenticeship from './components/molecules/Apprenticeship/Apprenticeship';
import Benefits from './components/molecules/Benefits/Benefits';
import Footer from './components/molecules/Footer/Footer'

function App() {
  return (
    <>
    <Header />
    <S.Container>
    <Images src={Banner} border="border" alt='Difundir' />
    <AboutUs /> 
    <S.Video>
    <video width="1100" controls src='https://www.youtube.com/watch?v=6OokP-NE49k'alt='video'/>
    </S.Video>
    <Partners />
    <Apprenticeship />
    <Benefits/>
    </S.Container>
    <Footer/>
    <GlobalStyle /> 
    </>
    
  );
}
export default App;
