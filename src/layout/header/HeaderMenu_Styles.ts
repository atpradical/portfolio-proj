import styled, {css} from "styled-components";
import {theme} from "styles/Theme";
import {font} from "styles/Common";
import {MenuLink} from "layout/header/headerMenu/menu/MenuLink";

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
  width: 20px;
  height: 20px;
  position: fixed;
  padding: 0;
  top: -10vh;
  right: 2%;
  z-index: -99999;
  background-image: ${theme.colors.gradientMenuPopup};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${theme.animation.transition5};
  
  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    & ${MenuLink} {
      ${font({lineHeight: 1.2, Fmax: 28, Fmin: 22})}
      color: ${theme.colors.primary};
      white-space: nowrap;

      &:hover {
        color: ${theme.colors.titleFont};
      }
    }
  }

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    top: 5px;
    right: calc(100% - 99%);
    z-index: 99999;
    padding: 25vh 49%;
  `}
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
      transition: ${theme.animation.transition5};

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0px);
        background-color: ${theme.colors.primary};
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
      transition: ${theme.animation.transition5};

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0px);
        background-color: ${theme.colors.primary};
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