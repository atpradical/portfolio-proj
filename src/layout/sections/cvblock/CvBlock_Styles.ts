import styled from "styled-components";
import background from "assets/img/drawing.webp";
import {theme} from "styles/Theme";

const CvBlock = styled.section`
  position: relative;
  margin: 0;
  padding: 130px 0;
  background-image: url(${background});
  background-position: top right;
  background-size: auto;
  background-repeat: no-repeat;

  @media ${theme.media.tablet} {
    padding: 80px 0;
  }

  @media ${theme.media.mobile} {
    padding: 30px 0;
  }
`

export const S = {
    CvBlock
}