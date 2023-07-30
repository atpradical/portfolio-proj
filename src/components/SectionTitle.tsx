import styled from "styled-components";
import {theme} from "styles/Theme";

export const SectionTitle = styled.h2`
  color: ${theme.colors.titleFont};
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 50px;
  
  position: relative;
  
  &::after {
    content: "";
    display: inline-block;
    width: 155px;
    height: 1px;
    background-color: ${theme.colors.titleFont};
    
    position: absolute;
    top: 50px;;
    left: 50%;
    transform: translateX(-50%);
  }
`