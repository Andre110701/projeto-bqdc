import * as S from "./App.styles";

import Header from "./components/molecules/Header/Header";
import AboutUs from "./components/molecules/AboutUs/AboutUs";
import Banner from "./assets/difundirBanner.png";
import { Images } from "./components/atoms/Images/images";
import GlobalStyle from "./styles/Global.style";
import Partners from "./components/molecules/Partners/Partners";
import Apprenticeship from "./components/molecules/Apprenticeship/Apprenticeship";
import Benefits from "./components/molecules/Benefits/Benefits";
import Footer from "./components/molecules/Footer/Footer";
import { Hidden } from "./components/Hidden/Hidden";

function App() {
  return (
    <>
      <Header/>
      <S.Container mobile tablet>
      <S.Content>
        <S.Midia>
          <Hidden tablet mobile>
            <Images src={Banner} border="border" alt="Difundir" />
          </Hidden>
        </S.Midia>
        </S.Content>
       
        <S.Midia>
          <Hidden descktop>
            <Images
              src="https://bqdc-api-public.sfo3.digitaloceanspaces.com/e52e1a3dd341a177297cb3367cb25833-Home---22-min.png"
              border="border"
              alt="Difundir"
            />
          </Hidden>
        </S.Midia>
        
        

        <AboutUs />
        <S.Content>
        <S.Video>
          <iframe
            src="https://player.vimeo.com/video/618971174"
            frameborder="0"
            allow="autoplay;picture-in-picture"
            allowfullscreen
            width="100%"
            height="100% "
          ></iframe>
        </S.Video>
        </S.Content>
        <Partners />
        <Apprenticeship />
         <Benefits />
      </S.Container>
      <Footer />
      <GlobalStyle />
    </>
  );
}
export default App;
