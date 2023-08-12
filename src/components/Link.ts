import styled, {css} from "styled-components";
import {font} from "styles/Common";
import {theme} from "styles/Theme";

const Link = styled.a<{ active?: boolean }>`
  display: inline-block;
  padding: 10px;
  position: relative;
  ${font({weight: 300, lineHeight: 1.2, Fmax: 15, Fmin: 12})};
  font-style: normal;
  text-transform: capitalize;

  ${props => props.active && css<{ active?: boolean }>`
    color: ${theme.colors.titleFont};
    font-weight: 700;
    transition: ${theme.animation.transition2};
  `}
  
  &:hover {
    &::after {
      cursor: pointer;
      height: 1px;
    }
  }

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    height: 0;
    bottom: 5px;
    left: 10px;
    right: 10px;
    background-color: ${theme.colors.titleFont};
    transition: ${theme.animation.transition1};

    ${props => props.active && css<{ active?: boolean }>`
      height: 1px;
    `}
  }
`

export const SL = {
    Link
}