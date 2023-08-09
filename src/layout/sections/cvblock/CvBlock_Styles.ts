import styled from "styled-components";
import background from "assets/img/drawing.webp";

const CvBlock = styled.section`
  margin-top: 50px;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    width: 40%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: 1;
    background-image: url(${background});
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;
  }
`

export const S = {
    CvBlock
}