import styled from "styled-components";
import {theme} from "styles/Theme";
import {font} from "styles/Common";

const Copyright = styled.small`
  display: block;
  width: 100%;
  font-size: 14px;
  text-align: center;

  & > span {
    background-image: ${theme.colors.gradient90};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media ${theme.media.mobile} {
    ${font({lineHeight: 1.2, Fmax: 16, Fmin: 10})};
  }
`

export const S = {
    Copyright
}