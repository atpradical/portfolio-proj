import styled from "styled-components";
import {theme} from "styles/Theme";


export const Link = styled.a`
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 26px;
  text-transform: capitalize;
  padding: 10px;
  position: relative;
  
  &:hover {
    &::after {
      height: 1px;
    }
  }

  &::after {
    content: "";
    display: inline-block;
    background-color: ${theme.colors.titleFont};

    position: absolute;
    bottom: 5px;
    left: 10px;
    right: 10px;
  }
`