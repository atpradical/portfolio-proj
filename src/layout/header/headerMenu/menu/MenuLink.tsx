import styled, {css} from "styled-components";
import {theme} from "styles/Theme";
import {font} from "styles/Common";
import {Link} from "react-scroll";

export const MenuLink = styled(Link)<{ active?: boolean }>`
  display: inline-block;
  padding: 10px;
  position: relative;
  ${font({family: "DM Sans, sans-serif", weight: 500, lineHeight: 1.2, Fmax: 20, Fmin: 12})};
  font-style: normal;
  text-transform: capitalize;
  transition: ${theme.animation.transition2};

  ${props => props.activeClass && css<{ active?: boolean }>`

  `}
  
  &:hover, &.active {
    cursor: pointer;
    text-shadow: 0 -5px 10px #13B0F5, 0 5px 10px #E70FAA;
    color: ${theme.colors.titleFont};
    font-weight: 700;
  }
`