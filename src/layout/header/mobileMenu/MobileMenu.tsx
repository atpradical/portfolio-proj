import React from 'react';
import styled, {css} from "styled-components";
import {Link} from "components/Link";
import {theme} from "styles/Theme";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerBtn isOpen={true}>
                <span></span>
            </BurgerBtn>
            <MobileMenuPopup isOpen={true}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <Link href="#">{item}</Link>
                            </ListItem>
                        )
                    })}
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.desktopTiny} {
    display: block;
  }
`

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

export const ListItem = styled.li`

  &:hover {
    background-color: ${theme.colors.primary};
    
    & a{
      color: ${theme.colors.titleFont};
    }

  }
  
  ${Link} {
    text-align: center;
    font-family: DM Sans, sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    padding: 5px 0; 
    width: 100%;
    color: ${theme.colors.primary};

    &:hover {
      &::after {
        height: 0;
      }
    }
  }
`

