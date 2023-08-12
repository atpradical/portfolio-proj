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
  width: 1px;
  height: 1px;
  position: fixed;
  padding: 0;
  top: 20px;
  right: 20px;
  z-index: -99999;
  opacity: 0;
  background-image: ${theme.colors.gradientMenuPopup};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: top .1s ease-in-out, right .1s ease-in-out, padding .5s ease-in-out, opacity .1s ease-in-out 2s;

  ul {
    display: none;

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
    opacity: 1;
    transition: top .1s ease-in-out, right .1s ease-in-out .5s, padding .5s ease-in-out, opacity .1s ease-in-out .1s;

    ul {
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
    }
  `}
`

const BurgerBtn = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 5px;
  right: 20px;
  width: 50px;
  height: 50px;
  display: block;
  border: none;
  z-index: 9999999;

  span {
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.normalFont};
    position: absolute;
    left: 5px;
    bottom: 25px;

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