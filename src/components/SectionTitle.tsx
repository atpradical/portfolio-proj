import styled from "styled-components";
import {theme} from "styles/Theme";
import {font} from "styles/Common";

export const SectionTitle = styled.h2`
  ${font({family: "Poppins", weight: 700, Fmax: 48, Fmin: 32})}
  color: ${theme.colors.titleFont};
  text-align: center;
  font-style: normal;
  line-height: 1.2;
  margin-bottom: 50px;
  position: relative;

  &::after {
    content: "";
    display: inline-block;
    width: 155px;
    height: 1px;
    background-color: ${theme.colors.titleFont};

    position: absolute;
    top: 120%;
    left: 50%;
    transform: translateX(-50%);
    
    @media ${theme.media.tablet} {
      
    }
  }
`