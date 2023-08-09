import styled from "styled-components";
import {theme} from "styles/Theme";

const Copyright = styled.small`
  widht: 100%;
  display: block;
  font-size: 14px;
  text-align: center;

  & > span {
    background-image: ${theme.colors.gradient90};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const S = {
    Copyright
}