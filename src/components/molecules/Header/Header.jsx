import * as S from "../Header/Header.style";
import { Button, MenuButton, CloseButton } from "../../atoms/buttons/buttons";
import { Paragraph, MenuParagraph } from "../../atoms/typography/typography";
import { Logo } from "../../atoms/Images/images.styles";
import Logos from "../../../assets/bqdc-logo.svg";
import { useState } from "react";

const Header = () => {
  const [MenuOpen, setMenuOpen] = useState(false);

  function handleClick() {
    console.log("cliquei");
    if (MenuOpen === true) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }

  console.log(MenuOpen);
  return (
    <>
      

      <S.Container>
      <S.Menu isOpen={MenuOpen}>
        <CloseButton isOpen={MenuOpen} onClick={handleClick} />
        <S.MenuNavigation>
          <S.MenuText>
            <MenuParagraph>
            <a href='#AboutUs' isOpen={MenuOpen} onClick={handleClick}>
              Quem somos
              </a>
            </MenuParagraph>
          </S.MenuText>
          <S.MenuText>
            <MenuParagraph >
            <a href='#Partners' isOpen={MenuOpen} onClick={handleClick}>
                Parceiros
                </a>
            </MenuParagraph>
          </S.MenuText>
          <S.MenuText>
            <MenuParagraph >
            <a href='#Apprenticeship' isOpen={MenuOpen} onClick={handleClick}>
                Aprendizado
                </a>
            </MenuParagraph>
          </S.MenuText>
          <S.MenuText>
            <MenuParagraph >
            <a href='#Benefits' isOpen={MenuOpen} onClick={handleClick}>
                Benefícios
                </a>
            </MenuParagraph>
          </S.MenuText>
          <Button margin="30px" variant="contained" color="primary">
            Assinar
          </Button>
          <Button margin="30px" variant="outlined" color="primary">
            Entrar
          </Button>
        </S.MenuNavigation>
      </S.Menu>
        <S.Content>
          <Logo src={Logos} alt="Brasil que da certo" />
          <S.Navigation>
            <S.Text>
              <Paragraph size="16px" type="bold" color="primary">
              <a href='#AboutUs'>
              Quem somos
              </a>
              </Paragraph>
            </S.Text>
            <S.Text>
              <Paragraph size="16px" type="bold" color="primary">
                <a href='#Partners'>
                Parceiros
                </a>
              </Paragraph>
            </S.Text>
            <S.Text>
              <Paragraph size="16px" type="bold" color="primary">
                <a href='#Apprenticeship'>
                Aprendizado
                </a>
              </Paragraph>
            </S.Text>
            <S.Text>
              <Paragraph size="16px" type="bold" color="primary">
                <a href='#Benefits'>
                Benefícios
                </a>
              </Paragraph>
            </S.Text>
          </S.Navigation>
          <S.Buttons>
            <Button variant="contained" color="primary">
              Assinar
            </Button>
            <Button variant="outlined" color="primary">
              Entrar
            </Button>
          </S.Buttons>
          <MenuButton isOpen={MenuOpen} onClick={handleClick} />
        </S.Content>
      </S.Container>
    </>
  );
};
export default Header;
