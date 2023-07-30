import styled from "styled-components";
import {theme} from "styles/Theme";

export const SectionTitle = styled.h2`
  color: ${theme.colors.titleFont};
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 50px;
  
  position: relative;
  
  &::after {
    content: "";
    display: inline-block;
    width: 155px;
    height: 2px;
    background-color: ${theme.colors.titleFont};
    
    position: absolute;
    top: 80px;;
    left: 50%;
    transform: translateX(-50%);
  }
`