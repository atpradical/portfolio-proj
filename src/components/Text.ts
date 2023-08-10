import styled from "styled-components";
import {theme} from "styles/Theme";
import {font} from "styles/Common";

export const Text = styled.p`
  ${font({lineHeight: 1.2, weight: 300, Fmax: 18, Fmin: 16})}
  color: ${theme.colors.normalFont}
`