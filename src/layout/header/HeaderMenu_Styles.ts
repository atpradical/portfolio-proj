import styled, {css} from "styled-components";
import {theme} from "styles/Theme";

/* Desktop Menu begin */
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
`
/* Desktop Menu end */

/* Mobile Menu begin */
const MobileMenu = styled.nav``

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 5px;
  right: 5px;
  z-index: 99999;
  width: 180px;
  height: 350px;
  border-radius: 20px;
  background-image: ${theme.colors.gradientMenuPopup};
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  
  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
`

const BurgerBtn = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 30px;
  right: 45px;
  width: 50px;
  height: 50px;
  display: block;
  z-index: 9999999;
  border: none;

  span {
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.normalFont};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: transparent;
    `}
    &:before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.normalFont};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0px);
      `}
    }

    &:after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.normalFont};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0px);
        width: 36px;
      `}
    }
  }
`
/* Mobile Menu end */

export const S = {
    DesktopMenu,
    MobileMenu,
    MobileMenuPopup,
    BurgerBtn
}