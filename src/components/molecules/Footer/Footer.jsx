import * as S from "../Footer/Footer.style";
import { Logo } from "../../atoms/Images/images.styles";
import Logos from "../../../assets/bqdc-logo-white.svg";
import { Images } from "../../atoms/Images/images";
import facebook from "../../../assets/Icons/facebook.svg";
import instagram from "../../../assets/Icons/instagram.svg";
import youtube from "../../../assets/Icons/youtube.svg";
import circleUP from "../../../assets/Icons/circleUp.svg";

const Footer = (theme) => {
  return (
    <S.Container>
      <S.Content>
        <S.FooterLinks>
          <S.LogoBqdc>
            <Logo size="large" src={Logos} alt="Brasil que da certo" />
          </S.LogoBqdc>

          <div class="Links">
            <a>
              <p>Assine</p>
            </a>
            <a>
              <p>
                <nobr>Baixe nosso app</nobr>
              </p>
            </a>
            <a>
              <p>
                <nobr>O que é BQDC</nobr>
              </p>
            </a>
            <a>
              <p>Nosso FAQ</p>
            </a>
          </div>
          <div class="Links">
            <a>
              <p>Termos de Uso</p>
            </a>
            <a>
              <p>
                <nobr>Política de Privacidade</nobr>
              </p>
            </a>
            <a>
              <p>Fale Conosco</p>
            </a>
          </div>
        </S.FooterLinks>

        <S.SocialMedias>
          <span>Siga nossas páginas</span>
          <div class="images">
            <Images src={facebook} alt="facebook " />
            <Images src={instagram} alt="instagram" />
            <Images src={youtube} alt="youtube" />
          </div>
        </S.SocialMedias>
      </S.Content>

      <S.Separador>
        <div className="separator" />
        <div className="up-icon">
          <Images src={circleUP} />
        </div>
        <div className="separator" />
      </S.Separador>

      <span>© 2021 | Todos os direitos reservados a BQDC.</span>
    </S.Container>
  );
};
export default Footer;
