import styled from "styled-components";
import calendar from "assets/img/prog-img/calendar.svg";
import {theme} from "styles/Theme";

const Period = styled.span`
  align-self: end;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 16px;
    height: 16px;
    background-image: url(${calendar});
    background-repeat: no-repeat;
    bottom: 1px;
    left: -20px;
  }
  
  @media ${theme.media.mobile} {
    max-width: 520px;
    width:100%;
    margin-left: 20px;
  }
`

export const S = {
    Period
}