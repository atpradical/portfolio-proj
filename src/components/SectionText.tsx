import styled from "styled-components";
import {theme} from "styles/Theme";
import {font} from "styles/Common";

export const SectionText = styled.h2`
  ${font({family: "Poppins", weight: 400, Fmax: 24, Fmin: 18})}
  color: ${theme.colors.normalFont};
  text-align: center;
  font-style: normal;
  line-height: 1.2;
  margin-bottom: 50px;
`