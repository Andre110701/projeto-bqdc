import Header from './components/molecules/Header/Header';
import AboutUs from './components/molecules/AboutUs/AboutUs'
import Banner from './assets/difundirBanner.png'
import {Images} from './components/atoms/Images/images'
const  GlobalStyle = require('./styles/globalStyles') ;

function App() {
  return (
    <>
    <Header />
    <Images src={Banner} alt='Difundir' />
    <AboutUs />
    <GlobalStyle />
    </>
    
  );
}
export default App;
