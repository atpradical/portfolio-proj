import styled from "styled-components";
import location from "assets/img/prog-img/location.svg";
import {theme} from "styles/Theme";

const Location = styled.span`
  
  position: relative;

  &::after {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    position: absolute;
    background-image: url(${location});
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
    Location
}