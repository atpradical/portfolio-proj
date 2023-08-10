import styled, {css} from "styled-components";
import {theme} from "styles/Theme";
import {font} from "styles/Common";

export const Link = styled.a<{ active?: boolean }>`
  display: inline-block;
  padding: 10px;
  position: relative;
  ${font({weight: 300, lineHeight: 1.2, Fmax: 15, Fmin: 12})};
  font-style: normal;
  text-transform: capitalize;

  ${props => props.active && css<{ active?: boolean }>`
    color: ${theme.colors.titleFont};
    font-weight: 700;
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
    bottom: 5px;
    left: 10px;
    right: 10px;
    background-color: ${theme.colors.titleFont};

    ${props => props.active && css<{ active?: boolean }>`
      height: 1px;
    `}
  }
`