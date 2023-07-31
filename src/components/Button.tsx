import styled from "styled-components";
import {theme} from "styles/Theme";

export const Button = styled.button`
  position: relative;
  width: 100px;
  height: 35px;
  background-color: ${theme.colors.primary};
  font-size: 22px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -1px;
  text-transform: capitalize;
  z-index: 1;
  
  &:hover {
    border-image: ${theme.colors.borderGradient};
    border-color: ${theme.colors.gradient90};
    background-image: ${theme.colors.gradient90};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.40);
    transition-delay: 5s;
  }

`